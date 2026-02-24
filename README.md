This is a minimal [Next.js](https://nextjs.org) app to test MySQL connectivity.

## Getting Started

1. Copy environment variables:

```bash
cp .env.example .env.local
```

PowerShell:

```powershell
Copy-Item .env.example .env.local
```

2. Update `.env.local` with your MySQL credentials.

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) and click **Test MySQL Connection**.

The app calls `GET /api/db-test` and displays success/failure response from the server.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

- `MYSQL_HOST`
- `MYSQL_PORT`
- `MYSQL_USER`
- `MYSQL_PASSWORD`
- `MYSQL_DATABASE`

## API Route

- `GET /api/db-test`
- Executes: `SELECT NOW() AS now`
- Returns JSON with `ok`, `message`, and either `serverTime` or `error`
