# StreetCred Developer Tools

Public developer-facing tools for the **StreetCred** Location Intelligence Platform by **Telnora Technologies**.

This repository contains open-source components that help developers integrate with StreetCred:

- **SDK** — `@wizzybrass/streetcred-sdk`
- **CLI** — `@wizzybrass/streetcred-cli`
- **Contracts** — `@wizzybrass/streetcred-contracts`
- **Sample Applications**
- **Postman Collections**
- **Documentation**
- **Baseline Terraform Modules**

> The StreetCred platform services themselves are not open source. This repository only contains client libraries, examples, and developer tooling.

## Repository Structure

```text
streetcred-public/
├── packages/
│   ├── streetcred-contracts/  # Shared TypeScript DTOs
│   ├── streetcred-sdk/        # TypeScript SDK
│   └── streetcred-cli/        # Command-line interface
├── samples/
│   └── node-client/           # Example SDK usage
├── postman/
│   └── collections/           # Postman collections
├── docs/                      # Developer documentation
├── .github/                   # Issue/PR templates and CI
└── README.md
```

## Quick Start

### Prerequisites

- Node.js 22+
- pnpm 9+

### Install

```bash
pnpm install
pnpm build
```

### Use the SDK

```typescript
import { StreetCredClient } from "@wizzybrass/streetcred-sdk";

const client = new StreetCredClient({
  baseUrl: process.env.STREETCRED_BASE_URL!,
  apiKey: process.env.STREETCRED_API_KEY!,
});

const result = await client.parseAddress({
  raw_address: "Behind Total Filling Station opposite Zenith Bank",
  context: { country: "Nigeria", state: "Lagos", city: "Ikeja" },
});

console.log(result.formatted_address, result.coordinates);
```

### Use the CLI

```bash
pnpm --filter @wizzybrass/streetcred-cli build
node packages/streetcred-cli/dist/index.js "Behind Total Filling Station opposite Zenith Bank"
```

Set `STREETCRED_API_KEY` and `STREETCRED_BASE_URL` before running the CLI or sample.

## Releases

Package versions and npm publishing are automated with [Changesets](https://github.com/changesets/changesets).

1. After making a change to any package, record it:

   ```bash
   pnpm changeset
   ```

   Pick the affected packages, choose a `patch`/`minor`/`major` bump, and describe the change. Commit the generated file in `.changeset/`.

2. When your PR merges to `main`, the **Release** workflow opens a **Version Packages** pull request that applies the pending bumps and updates changelogs.

3. Merging the **Version Packages** PR publishes the updated packages to npm.

Publishing requires the `NPM_TOKEN` repository secret.

## Documentation

- [API Reference](docs/API.md)
- [Architecture Overview](docs/ARCHITECTURE.md)
- [Contributing](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)

## License

MIT © Telnora Technologies. See [LICENSE](LICENSE) for details.
