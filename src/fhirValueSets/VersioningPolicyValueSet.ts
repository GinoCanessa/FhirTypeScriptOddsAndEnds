// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/versioning-policy|4.0.1

import { Coding } from '../fhir.js'

/**
 * How the system supports versioning for a resource.
 */
export const VersioningPolicyValueSet = {
  /**
   * no-version: VersionId meta-property is not supported (server) or used (client).
   */
  NoVersionIdSupport: new Coding({
    display: "No VersionId Support",
    code: "no-version",
    system: "http://hl7.org/fhir/versioning-policy",
  }),
  /**
   * versioned: VersionId meta-property is supported (server) or used (client).
   */
  Versioned: new Coding({
    display: "Versioned",
    code: "versioned",
    system: "http://hl7.org/fhir/versioning-policy",
  }),
  /**
   * versioned-update: VersionId must be correct for updates (server) or will be specified (If-match header) for updates (client).
   */
  VersionIdTrackedFully: new Coding({
    display: "VersionId tracked fully",
    code: "versioned-update",
    system: "http://hl7.org/fhir/versioning-policy",
  }),
} as const;

/**
 * How the system supports versioning for a resource.
 */
export type VersioningPolicyValueSetType = typeof VersioningPolicyValueSet;

/**
 * How the system supports versioning for a resource.
 */
