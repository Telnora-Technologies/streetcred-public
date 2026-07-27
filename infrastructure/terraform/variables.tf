variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "development"
}

variable "region" {
  description = "Primary deployment region"
  type        = string
  default     = "us-east-1"
}
