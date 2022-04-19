// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Status of the validation of the target against the primary source
 */
export const VerificationresultValidationStatusValueSet = {
  verificationresult_validation_status_Failed: new Coding({
    code: "failed",
    display: "Failed",
    system: "http://terminology.hl7.org/CodeSystem/validation-status"
  }),
  verificationresult_validation_status_Successful: new Coding({
    code: "successful",
    display: "Successful",
    system: "http://terminology.hl7.org/CodeSystem/validation-status"
  }),
  /**
   * The validations status has not been determined yet
   */
  verificationresult_validation_status_Unknown: new Coding({
    code: "unknown",
    display: "Unknown",
    system: "http://terminology.hl7.org/CodeSystem/validation-status"
  }),
};
