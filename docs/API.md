# StreetCred API Documentation

## Authentication

Most endpoints require an `X-API-Key` header. OAuth2/JWT flows are planned for
user-facing dashboard endpoints.

## GET /api/v1/health

Returns the health status of the API Gateway.

```bash
curl https://api.streetcred.example.com/api/v1/health
```

## POST /api/v1/addresses/parse

Parse a free-text address into structured coordinates, landmarks, and confidence
metadata.

### Request

```json
{
  "raw_address": "Behind Total Filling Station opposite Zenith Bank",
  "context": {
    "country": "Nigeria",
    "state": "Lagos",
    "city": "Ikeja"
  }
}
```

### Response

```json
{
  "formatted_address": "Behind Total Filling Station, Opposite Zenith Bank, Ikeja",
  "coordinates": {
    "lat": 6.602127,
    "lng": 3.351096
  },
  "bounding_radius": 35.0,
  "confidence_score": 0.91,
  "confidence_breakdown": {
    "landmark": 0.95,
    "graph": 0.89,
    "nlp": 0.85,
    "context": 0.7,
    "spatial": 0.7
  },
  "landmarks": [
    {
      "name": "Total Filling Station",
      "type": "fuel_station",
      "coordinates": { "lat": 6.6018, "lng": 3.3515 },
      "reliability": 0.94
    },
    {
      "name": "Zenith Bank",
      "type": "bank",
      "coordinates": { "lat": 6.6025, "lng": 3.3508 },
      "reliability": 0.96
    }
  ],
  "spatial_relationships": [
    {
      "anchor": "Total Filling Station",
      "target": "Zenith Bank",
      "relation": "opposite"
    }
  ]
}
```

## GET /api/v1/billing/usage

Return recent API usage records. Optionally filter by `apiKey` query parameter.

```bash
curl https://api.streetcred.example.com/api/v1/billing/usage \
  -H "X-API-Key: $STREETCRED_API_KEY"
```

## GET /api/v1/billing/usage/summary

Return aggregated endpoint usage counts.

```bash
curl https://api.streetcred.example.com/api/v1/billing/usage/summary \
  -H "X-API-Key: $STREETCRED_API_KEY"
```

### Error Codes

| Status | Description |
| ------ | ----------- |
| 400 | Validation error |
| 401 | Missing or invalid API key |
| 429 | Rate limit exceeded |
| 503 | Upstream service unavailable |
