# StreetCred Architecture

## Overview

StreetCred is built as a collection of bounded contexts, each exposed as an
independently deployable service.

## Bounded Contexts

| Service | Language | Responsibility |
| ------- | -------- | -------------- |
| API Gateway | TypeScript / NestJS | Auth, rate limiting, billing, routing, OpenAPI |
| Address Intelligence | Python / FastAPI | NLP, landmark extraction, confidence scoring |
| Spatial Intelligence | Go + PostGIS | Coordinate interpolation, geofencing, geometry |
| Knowledge Graph | Neo4j | Landmark relationship graph |
| Search | Elasticsearch / OpenSearch | Autocomplete and fuzzy landmark lookup |
| Event Bus | Kafka | Cross-service events |
| Analytics | TBD | Metrics, monitoring, observability |

## Address Intelligence Pipeline

The pipeline is divided into six stages:

1. **Input Normalization** — punctuation, casing, abbreviations, slang, spelling
2. **NLP Tokenization** — regex / token extraction of landmarks and relations
3. **Landmark Resolution** — match candidates against Elasticsearch, Neo4j, PostGIS
4. **Spatial Reasoning** — interpret relations (behind, opposite, north of, etc.)
5. **Coordinate Estimation** — compute lat/lng and bounding radius
6. **Confidence Engine** — weighted scoring with explainable breakdown

## Security

* OAuth2 / JWT for user sessions
* API keys for service-to-service and partner access
* RBAC and multi-tenancy
* Encryption at rest and in transit
* Rate limiting and DDoS protection via gateway
* Audit logs and correlation IDs

## Observability

* OpenTelemetry traces
* Prometheus metrics
* Grafana dashboards
* Structured logs with correlation IDs
* Health checks on every service

## Open Source Boundary

Open-source components live in this repository. Proprietary datasets, trained
models, routing engines, and enterprise data are kept in separate private
repositories and exposed via secure internal APIs.
