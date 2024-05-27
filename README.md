# FullStack App: Hack UMB - Hackathon Website

Welcome to the Hack UMB project! This repository contains the code for our hackathon website :) This will improve the workflow for staff and allow us to have a cutom way of sharing information with registered participants.

## Features

- User authentication using Kinde
- 100% backend and frontend TypeScript with validation using Zod
- Hono Typescript RPC for type safe HTTP requests
- Tanstack Router, Query, and Form for the best UX and DX in an SPA
- Drizzle ORM for all interactions with a SQL Database
- Clean, modern UI using tailwind & shadcn-ui
- Badge generation with personalized information
- Staff announcements feed
- Role-based access control for creating announcements
- Carousel for showcasing images and information about the event
- Responsive design with a dark mode
- I am adding new features every day :)

## Prerequisites

- Bun (for both frontend and backend development)
- PostgreSQL (for the database)
- Hono
- Kinde

## Getting Started

### Clone the repository

\```sh
git clone https://github.com/gaiborjosue/HackUMB-Website.git
cd HackUMB-Website
\```

### Set up the environment variables

Create a `.env` file in the root directory and add the following variables:

\```env
DATABASE_URL=your_postgresql_database_url
KINDE_DOMAIN=your_kinde_domain
KINDE_CLIENT_ID=your_kinde_client_id
KINDE_CLIENT_SECRET=your_kinde_client_secret
KINDE_REDIRECT_URI=your_redirect_uri
KINDE_LOGOUT_REDIRECT_URI=your_logout_redirect_uri
\```

### Install Bun

Bun is a fast all-in-one JavaScript runtime. You can install Bun by following the instructions on the [official Bun website](https://bun.sh/).

### Install dependencies

For both the backend and frontend:

\```sh
bun install
\```

### Run the migrations

Before starting the server, you need to run the database migrations in case you have a database setup or updated the schemas.

On /:
\```sh
bunx drizzle-kit generate
bun migrate.ts
bunx drizzle-kit studio
\```

### Start the development server

For both the backend and frontend you can run the same command:

For /frontend:
\```sh
bun dev
\```

For /:
\```sh
bun dev
\```

### Access the application

Open your browser and go to the generated localhost to see the application in action.

## Project Structure

- `frontend/`: Contains the React frontend code.
  - `src/`: Source code for the frontend.
    - `components/`: Reusable UI components.
    - `lib/`: Utility functions and API hooks.
    - `routes/`: Page components for different routes.
- `server/`: Contains the backend code.
  - `db/`: Database schema and configuration.
  - `routes/`: API route handlers.
  - `kinde.ts`: Kinde authentication setup.
  - `app.ts`: Main application setup.
- `.env`: Environment variables file.

## Contributing

We welcome contributions from the community! Here are some ways you can help:

- Report bugs and request features by opening issues.
- Submit pull requests to fix bugs or add features.
- Improve documentation.

### Contributing Guidelines

1. Fork the repository.
2. Create a new branch: `git checkout -b my-feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to the branch: `git push origin my-feature-branch`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact the project maintainers at [edward.gaibor001@umb.edu] or open an issue :)