// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/fundsreserve|4.0.1

import { Coding } from '../fhir.js'

/**
 * This value set includes sample funds reservation type codes.
 */
export const FundsreserveValueSet = {
  /**
   * none: The payor is not being requested to reserve any funds for the settlement of future claims.
   */
  None: new Coding({
    display: "None",
    code: "none",
    system: "http://terminology.hl7.org/CodeSystem/fundsreserve",
  }),
  /**
   * patient: The payor is requested to reserve funds for the provision of the named services by any provider for settlement of future claims related to this request.
   */
  Patient: new Coding({
    display: "Patient",
    code: "patient",
    system: "http://terminology.hl7.org/CodeSystem/fundsreserve",
  }),
  /**
   * provider: The payor is requested to reserve funds solely for the named provider for settlement of future claims related to this request.
   */
  Provider: new Coding({
    display: "Provider",
    code: "provider",
    system: "http://terminology.hl7.org/CodeSystem/fundsreserve",
  }),
} as const;

/**
 * This value set includes sample funds reservation type codes.
 */
export type FundsreserveValueSetType = typeof FundsreserveValueSet;

/**
 * This value set includes sample funds reservation type codes.
 */
