# Cartila Developer Tools

Public developer-facing tools for the **Cartila** Location Intelligence Platform by **Telnora Technologies**.

This repository contains open-source components that help developers integrate with Cartila:

- **SDK** — `@wizzybrass/cartila-sdk`
- **CLI** — `@wizzybrass/cartila-cli`
- **Contracts** — `@wizzybrass/cartila-contracts`
- **Sample Applications**
- **Postman Collections**
- **Documentation**
- **Baseline Terraform Modules**

> The Cartila platform services themselves are not open source. This repository only contains client libraries, examples, and developer tooling.

## Repository Structure

```text
cartila-public/
├── packages/
│   ├── cartila-contracts/  # Shared TypeScript DTOs
│   ├── cartila-sdk/        # TypeScript SDK
│   └── cartila-cli/        # Command-line interface
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
import { CartilaClient } from "@wizzybrass/cartila-sdk";

const client = new CartilaClient({
  baseUrl: process.env.CARTILA_BASE_URL!,
  apiKey: process.env.CARTILA_API_KEY!,
});

const result = await client.parseAddress({
  raw_address: "Behind Total Filling Station opposite Zenith Bank",
  context: { country: "Nigeria", state: "Lagos", city: "Ikeja" },
});

console.log(result.formatted_address, result.coordinates);
```

### Use the CLI

```bash
pnpm --filter @wizzybrass/cartila-cli build
node packages/cartila-cli/dist/index.js "Behind Total Filling Station opposite Zenith Bank"
```

Set `CARTILA_API_KEY` and `CARTILA_BASE_URL` before running the CLI or sample.

## Documentation

- [API Reference](docs/API.md)
- [Architecture Overview](docs/ARCHITECTURE.md)
- [Contributing](CONTRIBUTING.md)
- [Security Policy](SECURITY.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)

## License

MIT © Telnora Technologies. See [LICENSE](LICENSE) for details.
