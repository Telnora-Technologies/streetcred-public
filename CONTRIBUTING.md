# Contributing to StreetCred

Thank you for your interest in contributing to the StreetCred platform.

## Getting Started

1. Fork the repository.
2. Clone your fork and create a feature branch: `git checkout -b feat/my-feature`.
3. Install dependencies: `make install`.
4. Start infrastructure: `make docker-up`.
5. Run services locally: `make dev-gateway` and `make dev-address`.

## Development Guidelines

* Follow the existing code style in each service.
* Write unit and integration tests for every change.
* Maintain >90% test coverage where feasible.
* Update documentation for API or architectural changes.
* Keep commits focused and write meaningful commit messages.

## Submitting Changes

1. Ensure all tests pass: `make test`.
2. Ensure the stack builds: `make build`.
3. Open a pull request using the provided template.
4. Link any related issue.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
