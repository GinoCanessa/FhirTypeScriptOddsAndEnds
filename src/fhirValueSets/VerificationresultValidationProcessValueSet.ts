// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The primary process by which the target is validated
 */
export const VerificationresultValidationProcessValueSet = {
  verificationresult_validation_process_EditCheck: Coding.FromStrict({
    code: "edit-check",
    display: "edit check",
    system: "http://terminology.hl7.org/CodeSystem/validation-process"
  }),
  verificationresult_validation_process_InContext: Coding.FromStrict({
    code: "in-context",
    display: "in context",
    system: "http://terminology.hl7.org/CodeSystem/validation-process"
  }),
  verificationresult_validation_process_MultipleSources: Coding.FromStrict({
    code: "multi",
    display: "multiple sources",
    system: "http://terminology.hl7.org/CodeSystem/validation-process"
  }),
  verificationresult_validation_process_PrimarySource: Coding.FromStrict({
    code: "primary",
    display: "primary source",
    system: "http://terminology.hl7.org/CodeSystem/validation-process"
  }),
  verificationresult_validation_process_Standalone: Coding.FromStrict({
    code: "standalone",
    display: "standalone",
    system: "http://terminology.hl7.org/CodeSystem/validation-process"
  }),
  verificationresult_validation_process_ValueSet: Coding.FromStrict({
    code: "valueset",
    display: "value set",
    system: "http://terminology.hl7.org/CodeSystem/validation-process"
  }),
};