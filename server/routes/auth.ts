import { Hono } from 'hono'
import { kindeClient } from '../kinde'

import { sessionManager } from '../kinde'

import { getUser } from '../kinde'

export const authRoute = new Hono()

  .get("/login", async (c) => {
    const loginUrl = await kindeClient.login(sessionManager(c));
    return c.redirect(loginUrl.toString());
  })

  .get("/register", async (c) => {
    const registerUrl = await kindeClient.register(sessionManager(c));
    sessionManager(c).setSessionItem('isRegistering', true);
    return c.redirect(registerUrl.toString())
  })
  .get("/callback", async (c) => {
    // get called every time we login or register
    const url = new URL(c.req.url);
    await kindeClient.handleRedirectToApp(sessionManager(c), url);

    const isRegistering = await sessionManager(c).getSessionItem('isRegistering');

    if (isRegistering) {
      await sessionManager(c).removeSessionItem('isRegistering');
      return c.redirect("/registration");
    }
    
    return c.redirect("/dashboard");
  })
  .get("/logout", async (c) => {
    const logoutUrl = await kindeClient.logout(sessionManager(c));
    return c.redirect(logoutUrl.toString());
  })
  .get("/me", getUser, async (c) => {
    const user = c.get("user");
    return c.json({user});
  })
  .get("/role", getUser, async (c) => {
    const role = (await kindeClient.getPermissions(sessionManager(c))).permissions;
    return c.json({role});
  })