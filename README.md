# warcraftguilds.app

A better way to find a guild on world of warcraft. The current systems in place are "ok" but my plan is to create site with more features to let users refine their search even further.

## Setup

### Installation

This project uses yarn. To install the project dependencies simply type `yarn` in the project root directory.

### Environment variables

There are a few environment variables that need values for this project to run.

In the root of the project rename the `env.local.example` to `env.local`. The values needed for the variables should be pretty straight forward.

Next would be to add the database url, this project uses postgres so make sure that is set up beforehand or just use docker to pull down a postgres image and run that. Inside of the `prisma` rename the a `.env.example` file to just `.env` and update the database credentials with the ones you use for your database.

### Database migrations

The workflow for prisma if you've never worked with it is, make schema changes -> run migrations -> generate code. To run the migrations type the command `yarn generate` and then generate the client gode with `yarn generate`.

## Stack

Next.js  
ChakraUI  
Vercel  
Prisma
