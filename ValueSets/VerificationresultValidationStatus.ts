// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Status of the validation of the target against the primary source
 */
export const VerificationresultValidationStatus = {
  verificationresult_validation_status_Failed: {
    code: "failed",
    display: "Failed",
    system: "http://terminology.hl7.org/CodeSystem/validation-status"
  } as Coding,
  verificationresult_validation_status_Successful: {
    code: "successful",
    display: "Successful",
    system: "http://terminology.hl7.org/CodeSystem/validation-status"
  } as Coding,
  /**
   * The validations status has not been determined yet
   */
  verificationresult_validation_status_Unknown: {
    code: "unknown",
    display: "Unknown",
    system: "http://terminology.hl7.org/CodeSystem/validation-status"
  } as Coding,
};
