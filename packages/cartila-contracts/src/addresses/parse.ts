export interface AddressContext {
  country?: string;
  state?: string;
  city?: string;
  lga?: string;
  language?: string;
}

export interface ParseAddressRequest {
  raw_address: string;
  context?: AddressContext;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Landmark {
  name: string;
  type: string;
  coordinates?: Coordinates;
  reliability: number;
}

export interface SpatialRelationship {
  anchor: string;
  target: string;
  relation: string;
}

export interface ConfidenceBreakdown {
  landmark: number;
  graph: number;
  nlp: number;
  context: number;
  spatial: number;
}

export interface ParseAddressResponse {
  formatted_address: string;
  coordinates: Coordinates;
  bounding_radius: number;
  confidence_score: number;
  confidence_breakdown: ConfidenceBreakdown;
  landmarks: Landmark[];
  spatial_relationships: SpatialRelationship[];
}
