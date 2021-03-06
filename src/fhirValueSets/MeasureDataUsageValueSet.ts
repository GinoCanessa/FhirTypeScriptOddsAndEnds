// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/measure-data-usage|4.0.1

import { Coding } from '../fhir.js'

/**
 * The intended usage for supplemental data elements in the measure.
 */
export const MeasureDataUsageValueSet = {
  /**
   * risk-adjustment-factor: The data is intended to be used to calculate and apply a risk adjustment model for the measure.
   */
  RiskAdjustmentFactor: new Coding({
    display: "Risk Adjustment Factor",
    code: "risk-adjustment-factor",
    system: "http://terminology.hl7.org/CodeSystem/measure-data-usage",
  }),
  /**
   * supplemental-data: The data is intended to be provided as additional information alongside the measure results.
   */
  SupplementalData: new Coding({
    display: "Supplemental Data",
    code: "supplemental-data",
    system: "http://terminology.hl7.org/CodeSystem/measure-data-usage",
  }),
} as const;

/**
 * The intended usage for supplemental data elements in the measure.
 */
export type MeasureDataUsageValueSetType = typeof MeasureDataUsageValueSet;

/**
 * The intended usage for supplemental data elements in the measure.
 */
