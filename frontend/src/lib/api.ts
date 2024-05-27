import { hc } from 'hono/client'
import { type ApiRoutes } from "@server/app"
import { queryOptions } from '@tanstack/react-query'
import { type CreateAnnouncement } from "@server/sharedTypes"

const client = hc<ApiRoutes>('/')

export const api = client.api

async function getCurrentUser() {
  const result = await api.me.$get()
  if (!result.ok) {
    throw new Error("Failed to fetch user")
  }
  const data = await result.json()
  return data
}

async function getRole() {
  const result = await api.role.$get()
  if (!result.ok) {
    throw new Error("Failed to fetch role")
  }
  const data = await result.json()
  return data
}


export const useQueryOptions = queryOptions({ queryKey: ['get-current-user'], queryFn: getCurrentUser, staleTime: Infinity})

export const useRoleQueryOptions = queryOptions({ queryKey: ['get-role'], queryFn: getRole, staleTime: Infinity})

export async function fetchAnnouncements() {
  const res = await api.announcements.$get()
  if (!res.ok) {
    throw new Error("Failed to fetch announcements")
  }
  const data = await res.json()
  return data
}

export const getAnnouncementsQueryOptions = queryOptions({
  queryKey: ['announcements'],
  queryFn: fetchAnnouncements,
  staleTime: 1000 * 60 * 5,
});

export async function createAnnouncement({value} : {value: CreateAnnouncement}) {
  const res = await api.announcements.$post({ json: value })
  if (!res.ok) {
    throw new Error("Failed to create announcement")
  }

  const newAnnouncement = await res.json()

  return newAnnouncement
}

export const loadingCreateAnnouncementQueryOptions = queryOptions<{announcement?: CreateAnnouncement}>({
  queryKey: ['loading-create-announcements'],
  queryFn: async () => {
    return {};
  },
  staleTime: Infinity
})

export async function deleteAnnouncement({id}: {id: number}) {
  const res = await api.announcements[":id{[0-9]+}"].$delete({param: { id: id.toString() }, })
  if (!res.ok) {
    throw new Error("server error");
  }
}