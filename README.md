# 🔌 Socket API: The "Contract" Source of Truth

This repository houses the Backend logic and the shared architectural "Contract" for the **JUDE Session (March Week 4)**.

## 🚀 The Goal

To define our data structures **once** in the API and share them across the entire stack. This repo uses **NPM Workspaces** to manage the `@marybngozi/socket-types` library alongside the Express server.

-----

## 📂 Project Structure

```text
socket-api/
├── packages/
│   └── api-types/      <-- THE CONTRACT (Shared Library)
│       ├── src/index.ts
│       └── src/report.ts
├── server.ts           <-- THE ENGINE (Express Server)
├── package.json        <-- WORKSPACE CONFIG
└── tsconfig.json       <-- GLOBAL TS SETTINGS
```

-----

## 🛠️ Local Development Setup

### 1\. Install & Build the Contract

The library must be built into JavaScript before it can be linked or used by the server.

```bash
cd packages/api-types
npm install
npm run build
npm link
```

### 2\. Start the API Server

Return to the **root** directory:

```bash
cd ../..
npm install
npm start
```

The server will be running at [http://localhost:3001](https://www.google.com/search?q=http://localhost:3001).

-----

## 🏗️ How the "Contract" Works

### 1\. Zod Schemas (`packages/api-types/src/report.ts`)

We use **Zod** to define our schemas. This allows us to perform **Runtime Validation** on the Backend:

```typescript
const result = ReportItemSchema.safeParse(req.body);
if (!result.success) {
  // Returns a 400 error if the data doesn't match the contract
}
```

### 2\. Inferred Types (`packages/api-types/src/index.ts`)

We "Export" the TypeScript types automatically from those schemas so the Frontend doesn't have to manually create interfaces:

```typescript
export type ReportItem = z.infer<typeof ReportItemSchema>;
```

-----

## 📡 Remote Deployment (CI/CD)

This repository includes a **GitHub Action** that automatically publishes the `@marybngozi/socket-types` package to the GitHub Private Registry whenever a change is pushed to the `packages/api-types` directory.

### Publishing Flow:

1.  Push changes to `main`.
2.  Action triggers `npm publish`.
3.  Package is updated at `https://npm.pkg.github.com/marybngozi`.

-----

- **Lead Developer:** Mary B.
- **Supervisor:** Kenny S.
- **Session:** JUDE March 27th, 2026

-----
