// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/supplyrequest-reason|4.0.1

import { Coding } from '../fhir.js'

/**
 * The reason why the supply item was requested.
 */
export const SupplyrequestReasonValueSet = {
  /**
   * patient-care: The supply has been requested for use in direct patient care.
   */
  PatientCare: new Coding({
    display: "Patient Care",
    code: "patient-care",
    system: "http://terminology.hl7.org/CodeSystem/supplyrequest-reason",
  }),
  /**
   * ward-stock: The supply has been requested for creating or replenishing ward stock.
   */
  WardStock: new Coding({
    display: "Ward Stock",
    code: "ward-stock",
    system: "http://terminology.hl7.org/CodeSystem/supplyrequest-reason",
  }),
} as const;

/**
 * The reason why the supply item was requested.
 */
export type SupplyrequestReasonValueSetType = typeof SupplyrequestReasonValueSet;

/**
 * The reason why the supply item was requested.
 */
