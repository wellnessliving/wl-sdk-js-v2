# Setting up automatic SDK rebuild on spec change

When `stable/openapi.yaml` or `dev/openapi.yaml` is updated in the
[wellnessliving/openapi](https://github.com/wellnessliving/openapi) repository,
the SDK can be rebuilt automatically via a `repository_dispatch` event.

## How it works

```
openapi repo                        wl-sdk-js-v2 repo
─────────────────────────────────   ──────────────────────────────────
push to stable/openapi.yaml    -->  repository_dispatch: openapi-updated
                                -->  node scripts/generate.js
                                -->  git commit stable/wl-sdk.js dev/wl-sdk.js
                                -->  git push
                                -->  gh release create vX.X.XXXXXXXX
                                         wl-sdk-stable.js
                                         wl-sdk-dev.js
```

## Step 1 — Create a Personal Access Token

1. Go to **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens**.
2. Click **Generate new token**.
3. Set:
   - **Token name**: `wl-sdk-js-v2 dispatch`
   - **Expiration**: choose a suitable period (or "No expiration")
   - **Resource owner**: `wellnessliving`
   - **Repository access**: only `wl-sdk-js-v2`
   - **Permissions**:
     - **Actions** — Read and write
     - **Contents** — Read and write
4. Click **Generate token** and copy the value — it will not be shown again.

## Step 2 — Add the token as a secret in the openapi repo

1. Open **github.com/wellnessliving/openapi → Settings → Secrets and variables → Actions**.
2. Click **New repository secret**.
3. Set:
   - **Name**: `SDK_DISPATCH_TOKEN`
   - **Value**: paste the token from Step 1.
4. Click **Add secret**.

## Step 3 — Add the notify workflow to the openapi repo

Create the file `.github/workflows/notify-sdk.yml` in the
`wellnessliving/openapi` repository with the following content:

```yaml
name: Notify SDK repo

on:
  push:
    branches: [main]
    paths:
      - 'stable/openapi.yaml'
      - 'dev/openapi.yaml'

jobs:
  dispatch:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger SDK rebuild
        uses: peter-evans/repository-dispatch@v3
        with:
          token: ${{ secrets.SDK_DISPATCH_TOKEN }}
          repository: wellnessliving/wl-sdk-js-v2
          event-type: openapi-updated
```

## Step 4 — Verify

Push any change to `stable/openapi.yaml` in the openapi repo.
After a few seconds, a new workflow run should appear in
**github.com/wellnessliving/wl-sdk-js-v2 → Actions**.

Once the run completes, check:

- **Commits** — a new commit `chore: regenerate SDK from OpenAPI spec` should appear on `main`.
- **Releases** — a new release tagged `vX.X.XXXXXXXX` should appear under
  **github.com/wellnessliving/wl-sdk-js-v2 → Releases**, with two attached files:
  `wl-sdk-stable.js` and `wl-sdk-dev.js`.

If the spec version did not change (same tag already exists), the release step is skipped
and only the commit is made.

## GitHub Release details

The release is created automatically by `build.yml` at the end of a successful build.

**Tag format:** `v{stable spec version}`, e.g. `v1.1.20260619090040`.

**Assets attached to each release:**

| File               | Description                          |
|--------------------|--------------------------------------|
| `wl-sdk-stable.js` | SDK built from `stable/openapi.yaml` |
| `wl-sdk-dev.js`    | SDK built from `dev/openapi.yaml`    |

**Pinned CDN link** (always points to a specific release, safe for production):

```html
<script src="https://cdn.jsdelivr.net/gh/wellnessliving/wl-sdk-js-v2@v1.1.20260619090040/stable/wl-sdk.js"></script>
```

**Latest CDN link** (always points to the most recent commit on `main`):

```html
<script src="https://cdn.jsdelivr.net/gh/wellnessliving/wl-sdk-js-v2@main/stable/wl-sdk.js"></script>
```

## Token expiry

If the token has an expiration date, set a calendar reminder to rotate it before
it expires. A expired token causes the dispatch step to fail silently — the daily
schedule fallback (`cron: '0 8 * * *'` in `build.yml`) will keep the SDK
updating in the meantime.
