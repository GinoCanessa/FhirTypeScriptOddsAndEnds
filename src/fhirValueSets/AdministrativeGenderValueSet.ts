// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The gender of a person used for administrative purposes.
 */
export const AdministrativeGenderValueSet = {
  /**
   * Female.
   */
  administrative_gender_Female: Coding.FromStrict({
    code: "female",
    display: "Female",
    system: "http://hl7.org/fhir/administrative-gender"
  }),
  /**
   * Male.
   */
  administrative_gender_Male: Coding.FromStrict({
    code: "male",
    display: "Male",
    system: "http://hl7.org/fhir/administrative-gender"
  }),
  /**
   * Other.
   */
  administrative_gender_Other: Coding.FromStrict({
    code: "other",
    display: "Other",
    system: "http://hl7.org/fhir/administrative-gender"
  }),
  /**
   * Unknown.
   */
  administrative_gender_Unknown: Coding.FromStrict({
    code: "unknown",
    display: "Unknown",
    system: "http://hl7.org/fhir/administrative-gender"
  }),
};
