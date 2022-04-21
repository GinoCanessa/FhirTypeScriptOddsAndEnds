// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/vision-eye-codes|4.0.1

import { Coding } from '../fhir.js'

/**
 * A coded concept listing the eye codes.
 */
export const VisionEyeCodesValueSet = {
  /**
   * left: Left Eye.
   */
  LeftEye: new Coding({
    display: "Left Eye",
    code: "left",
    system: "http://hl7.org/fhir/vision-eye-codes",
  }),
  /**
   * right: Right Eye.
   */
  RightEye: new Coding({
    display: "Right Eye",
    code: "right",
    system: "http://hl7.org/fhir/vision-eye-codes",
  }),
} as const;

/**
 * A coded concept listing the eye codes.
 */
export type VisionEyeCodesValueSetType = typeof VisionEyeCodesValueSet;

/**
 * A coded concept listing the eye codes.
 */
export enum VisionEyeCodesValueSetEnum {
  /**
   * left: Left Eye.
   */
  LeftEye = "left",
  /**
   * right: Right Eye.
   */
  RightEye = "right",
}
