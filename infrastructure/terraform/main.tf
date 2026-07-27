# Telnorat Technologies — StreetCred foundational infrastructure (reference)
#
# This module defines baseline resources for deploying StreetCred services on
# a cloud provider. It is intentionally minimal for Phase 1 and is meant to be
# extended with VPCs, Kubernetes clusters, managed databases, and CI/CD hooks.

terraform {
  required_version = ">= 1.8.0"

  required_providers {
    random = {
      source  = "hashicorp/random"
      version = "~> 3.6"
    }
  }
}

resource "random_id" "suffix" {
  byte_length = 4
}

locals {
  project = "streetcred"
  suffix  = random_id.suffix.hex
}

output "project_identifier" {
  description = "Generated project identifier for resource naming"
  value       = "${local.project}-${local.suffix}"
}
