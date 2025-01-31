# Prisma Driver Adapters

<a href="https://www.npmjs.com/package/prisma"><img src="https://img.shields.io/npm/v/prisma.svg?label=prisma" /></a>
<a href="https://www.npmjs.com/package/@prisma/driver-adapter-utils"><img src="https://img.shields.io/npm/v/@prisma/driver-adapter-utils.svg?label=@prisma/driver-adapter-utils"/></a>
<a href="https://www.npmjs.com/package/@prisma/adapter-neon"><img src="https://img.shields.io/npm/v/@prisma/adapter-neon.svg?label=@prisma/adapter-neon"/></a>
<a href="https://www.npmjs.com/package/@prisma/adapter-pg"><img src="https://img.shields.io/npm/v/@prisma/adapter-pg.svg?label=@prisma/adapter-pg"/></a>
<a href="https://www.npmjs.com/package/@prisma/adapter-planetscale"><img src="https://img.shields.io/npm/v/@prisma/adapter-planetscale.svg?label=@prisma/adapter-planetscale"/></a>

<hr />

This TypeScript monorepo contains the following packages:
- `@prisma/driver-adapter-utils`
  - Internal set of utilities and types for Prisma's driver adapters.
- `@prisma/adapter-neon`
  - Prisma's Driver Adapter that wraps the `@neondatabase/serverless` driver
  - It uses `provider = "postgres"`
  - It exposes debug logs via `DEBUG="prisma:driver-adapter:neon"`
- `@prisma/adapter-planetscale`
  - Prisma's Driver Adapter that wraps the `@planetscale/database` driver
  - It uses `provider = "mysql"`
  - It exposes debug logs via `DEBUG="prisma:driver-adapter:planetscale"`
- `@prisma/adapter-pg`
  - Prisma's Driver Adapter that wraps the `pg` driver
  - It uses `provider = "postgres"`
  - It exposes debug logs via `DEBUG="prisma:driver-adapter:pg"`

## Get Started

We assume Node.js `v18.16.1`+ is installed. If not, run `nvm use` in the current directory.
This is very important to double-check if you have multiple versions installed, as PlanetScale requires either Node.js `v18.16.1`+ or a custom `fetch` function.

Install `pnpm` via:

```sh
npm i -g pnpm
```

## Development

- Install Node.js dependencies via `pnpm i`
- Build and link TypeScript packages via `pnpm build`
- Publish packages to `npm` via `pnpm publish -r`
