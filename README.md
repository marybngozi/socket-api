# 🔌 Socket API: The "Contract" Source of Truth

This repository houses the Backend logic and the shared architectural "Contract" for the **JUDE Session (March Week 4)**.

## 🚀 The Goal

To define our data structures **once** in the API and share them across the entire stack. This repo uses **NPM Workspaces** to manage the `@marybngozi/socket-types` library alongside the Express server.

-----

## 📂 Project Structure

```text
socket-api/
├── packages/
│   └── socket-types/      <-- THE CONTRACT (Shared Library)
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
cd packages/socket-types
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

### 1\. Zod Schemas (`packages/socket-types/src/report.ts`)

We use **Zod** to define our schemas. This allows us to perform **Runtime Validation** on the Backend:

```typescript
const result = ReportItemSchema.safeParse(req.body);
if (!result.success) {
  // Returns a 400 error if the data doesn't match the contract
}
```

### 2\. Inferred Types (`packages/socket-types/src/index.ts`)

We "Export" the TypeScript types automatically from those schemas so the Frontend doesn't have to manually create interfaces:

```typescript
export type ReportItem = z.infer<typeof ReportItemSchema>;
```

-----

## 📡 Remote Deployment (CI/CD)

This repository includes a **GitHub Action** that automatically publishes the `@marybngozi/socket-types` package to the GitHub Private Registry whenever a change is pushed to the `packages/socket-types` directory.

### ⚠️ Crucial: Versioning & Publishing
GitHub Packages is an immutable registry. You cannot overwrite a version that has already been published (e.g., a 409 Conflict error).

**Automated Bumping**: Every time you push a change to the packages/socket-types directory, you must increase the version number in package.json following SemVer (Semantic Versioning) logic:

**Patch (1.0.x)**: For tiny fixes or documentation (e.g., adding a non-required field to your Zod schema).

**Minor (1.x.0)**: For new features that are backwards-compatible.

**Major (x.0.0)**: For Breaking Changes where the Frontend codebase must be updated to avoid crashing.

### Publishing Flow:
1. Increase version in packages/socket-types/package.json.
2.  Push changes to `main`.
3.  Action triggers `npm publish`.
4.  Package is updated at `https://npm.pkg.github.com/marybngozi`.

-----

- **Lead Developer:** Mary B.
- **Supervisor:** Kenny S.
- **Session:** JUDE March 27th, 2026

-----
