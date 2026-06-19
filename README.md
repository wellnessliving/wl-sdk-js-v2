# WellnessLiving JS/TS SDK

Auto-generated JavaScript and TypeScript SDK for the WellnessLiving API,
built from the OpenAPI spec at https://github.com/wellnessliving/openapi.

## Channels: stable vs dev vs production

| Channel        | Based on                     | When to use                                              |
|----------------|------------------------------|----------------------------------------------------------|
| `stable/`      | `stable/openapi.yaml`        | Current release — endpoints available in production now  |
| `dev/`         | `dev/openapi.yaml`           | Preview — includes endpoints not yet in stable           |
| `production/`  | `production/openapi.yaml`    | _(soon)_ Strictly released endpoints only, no beta       |

`production` is generated automatically if `production/openapi.yaml` appears in the openapi repo.
Until then the `production/` folder does not exist.

## File formats

Each channel produces four files:

| File             | Format                  | Use case                                  |
|------------------|-------------------------|-------------------------------------------|
| `wl-sdk.js`      | Browser UMD             | `<script>` tag, CDN, no bundler needed    |
| `wl-sdk.esm.js`  | ES Module               | Bundlers (Vite, webpack, Rollup)          |
| `wl-sdk.cjs.js`  | CommonJS                | Node.js `require()`                       |
| `wl-sdk.d.ts`    | TypeScript declarations | IDE autocompletion for all three above    |

The UMD file (`wl-sdk.js`) is self-contained — no imports, works directly in a browser.
The ESM and CJS files are the TypeScript-compiled versions with full type information.

---

## Option A: Browser `<script>` tag (UMD)

No install required — load directly from CDN.

```html
<!-- Pinned to a specific version (recommended for production) -->
<script src="https://cdn.jsdelivr.net/gh/wellnessliving/wl-openapi-js@v1.1.20260619090040/stable/wl-sdk.js"></script>

<!-- Always latest (use for development) -->
<script src="https://cdn.jsdelivr.net/gh/wellnessliving/wl-openapi-js@main/stable/wl-sdk.js"></script>

<script>
  var client = new WlSdk({ token: 'YOUR_JWT_TOKEN' });

  client.wlBusinessData({ k_business: '1000' })
    .then(function(data) { console.log(data); })
    .catch(function(err) { console.error(err.status, err.message); });
</script>
```

The UMD build exposes a flat method API: one method per API endpoint.
Method names are derived from the URL path in camelCase:
`/Wl/Business/Data.json` → `client.wlBusinessData(params)`.

---

## Option B: npm package with TypeScript (ESM / CJS)

```bash
# Add to .npmrc first:
@wellnessliving:registry=https://npm.pkg.github.com

npm install @wellnessliving/sdk
```

The npm package uses a **namespace-based API** that mirrors the URL structure:

```typescript
import WlClient, { WlApiError } from '@wellnessliving/sdk';

const client = new WlClient({ token: 'YOUR_JWT_TOKEN' });

// URL: /Wl/Business/Data.json
const data = await client.wl.business.data({ k_business: '1000' });

// URL: /Thoth/WlPay/Account/Charge.json
const charge = await client.thoth.wlPay.account.charge({ ... });
```

### Error handling

```typescript
try {
  const result = await client.wl.business.data({ k_business: '1000' });
} catch (e) {
  if (e instanceof WlApiError) {
    console.error(e.status);    // HTTP status code, e.g. 401
    console.error(e.errors);    // WlApiErrorDetail[] from the API response body
  }
}
```

### Dev channel

```typescript
import WlClient from '@wellnessliving/sdk/dev';
```

### Production channel _(soon)_

```typescript
import WlClient from '@wellnessliving/sdk/production';
```

### Constructor options

| Option    | Type     | Default                              | Description                                                                     |
|-----------|----------|--------------------------------------|---------------------------------------------------------------------------------|
| `token`   | `string` | `null`                               | JWT Bearer token for authentication.                                            |
| `baseUrl` | `string` | `https://staging.wellnessliving.com` | API server. Use `https://demo.wellnessliving.com` for the Australia datacenter. |
| `timeout` | `number` | `30000`                              | Request timeout in milliseconds.                                                |

---

## Rebuilding locally

```bash
npm install

# Regenerate browser UMD (stable + dev)
npm run generate

# Regenerate TypeScript source and compile to ESM + CJS + .d.ts
npm run compile

# Do both at once
npm run build
```

Individual channels:

```bash
npm run generate:stable   # stable/wl-sdk.js
npm run generate:dev      # dev/wl-sdk.js
npm run compile:stable    # stable/wl-sdk.esm.js, .cjs.js, .d.ts
npm run compile:dev       # dev/wl-sdk.esm.js, .cjs.js, .d.ts
```

---

## Automatic builds

A GitHub Actions workflow (`.github/workflows/build.yml`) rebuilds and commits
all files whenever the upstream OpenAPI spec changes, and also runs daily at 08:00 UTC.

Each build:
1. Downloads the latest `stable/openapi.yaml` and `dev/openapi.yaml`
2. Generates `stable/wl-sdk.js` and `dev/wl-sdk.js` (browser UMD)
3. Generates `src/stable/index.ts` and `src/dev/index.ts` (TypeScript source)
4. Compiles to `*.esm.js`, `*.cjs.js`, `*.d.ts`
5. Commits and pushes all output files
6. Creates a GitHub Release with all 8 files as assets
7. Publishes `@wellnessliving/sdk` to GitHub Packages

See [docs/notify-setup.md](docs/notify-setup.md) for cross-repo trigger setup.

---

## Links

- [API Documentation](https://wellnessliving.github.io/openapi/)
- [OpenAPI Repository](https://github.com/wellnessliving/openapi)
- [WellnessLiving](https://www.wellnessliving.com)
