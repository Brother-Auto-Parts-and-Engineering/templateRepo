# Bitsoft Official Template Repo

Official Code Init Template for Bitsoft, which is used to Bootstrap new projects in the future with the following Stack:

- Vite: React + Typescript + SWC
- GraphQL Schema Language
- Apollo Server GraphQL
- MySQL Database

## Package Manager

We use `pnpm`, not `npm`. Please make sure there are no `package-lock.json` floating around in the repo!

## Getting started

1. Update package.json with the `name` of your project
1. Run `pnpm i` from root, which should install all dependencies
1. Once you have established your secret manager, fill in the `YOUR-SECRET-ID` value in `modelUtilities.ts`
1. Once an SQL Server for the project has been established, update `model` script in `backend/package.json` with the necessary parameters
1. run `pnpm model` to pull the schema of the database into the backend folder
1. Run `pnpm backend` to start backend server. Verify that backend is running correctly
1. While the backend server is running, run `pnpm codegen` to update typeDefs from backend to frontend for type sharing.
1. Run `pnpm frontend` to start frontend server.

## Backend

- `pnpm model` needs to be run every time there is a schema update to the database to make sure the type is consistent.
- Entry point for local development is `index.ts`. For uploading to AWS lambda we use `graphql.ts`

## Frontend

- `pnpm codegen` needs to be run everytime there is an update to typeDefs from backend.

## TBD

- Add example for backend tests
- Github action + AWS deployment pipeline
