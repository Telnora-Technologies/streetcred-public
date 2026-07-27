# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-07-26

### Added

- Initial StreetCred platform scaffold with pnpm workspaces.
- API Gateway (`apps/platform-api`) built with NestJS.
  - Versioned REST API at `/api/v1`.
  - OpenAPI documentation at `/docs`.
  - API key authentication and rate limiting.
  - Correlation ID middleware and structured logging.
- Address Intelligence Service (`apps/address-intelligence`) built with FastAPI.
  - Six-stage address parsing pipeline.
  - Normalization, tokenization, landmark resolution, spatial reasoning,
    coordinate estimation, and confidence scoring.
  - OpenAPI documentation at `/docs`.
- Shared TypeScript contracts package (`packages/streetcred-contracts`).
- Docker Compose stack with PostgreSQL + PostGIS, Neo4j, Redis, Elasticsearch,
  Kafka, Zookeeper, and both application services.
- Unit tests for the address pipeline and gateway service layer.
- GitHub Actions CI, Dependabot, issue templates, PR template, dev container,
  Makefile, and project documentation.
