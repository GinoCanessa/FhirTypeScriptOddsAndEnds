// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/designation-use|4.0.1

import { Coding } from '../fhir.js'

/**
 * Details of how a designation would be used
 */
export const DesignationUseValueSet = {
  /**
   * Code: 900000000000003001
   */
  VAL900000000000003001: new Coding({
    code: "900000000000003001",
    system: "http://snomed.info/sct",
  }),
  /**
   * Code: 900000000000013009
   */
  VAL900000000000013009: new Coding({
    code: "900000000000013009",
    system: "http://snomed.info/sct",
  }),
} as const;

/**
 * Details of how a designation would be used
 */
export type DesignationUseValueSetType = typeof DesignationUseValueSet;

/**
 * Details of how a designation would be used
 */
export enum DesignationUseValueSetEnum {
  /**
   * Code: 900000000000003001
   */
  VAL900000000000003001 = "900000000000003001",
  /**
   * Code: 900000000000013009
   */
  VAL900000000000013009 = "900000000000013009",
}
