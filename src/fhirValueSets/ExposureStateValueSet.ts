// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/exposure-state|4.0.1

import { Coding } from '../fhir.js'

/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
export const ExposureStateValueSet = {
  /**
   * exposure: used when the results by exposure is describing the results for the primary exposure of interest.
   */
  Exposure: new Coding({
    display: "Exposure",
    code: "exposure",
    system: "http://hl7.org/fhir/exposure-state",
  }),
  /**
   * exposure-alternative: used when the results by exposure is describing the results for the alternative exposure state, control state or comparator state.
   */
  ExposureAlternative: new Coding({
    display: "Exposure Alternative",
    code: "exposure-alternative",
    system: "http://hl7.org/fhir/exposure-state",
  }),
} as const;

/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
export type ExposureStateValueSetType = typeof ExposureStateValueSet;

/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
