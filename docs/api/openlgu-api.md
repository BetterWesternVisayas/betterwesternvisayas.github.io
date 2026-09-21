# OpenLGU API Documentation

Documentation for the OpenLGU legislative transparency API endpoints.

## Overview

OpenLGU provides public, programmatic access to local municipal ordinances, resolutions, and executive orders.

## Endpoints

### `GET /api/openlgu/documents`
Retrieves a paginated list of legislative documents.

**Query Parameters:**
- `page` (number, default: 1)
- `limit` (number, default: 20)
- `type` (string: `ordinance`, `resolution`, `executive-order`)
- `status` (string: `active`, `archived`)

### `GET /api/openlgu/documents/:id`
Retrieves details for a specific legislative record.
