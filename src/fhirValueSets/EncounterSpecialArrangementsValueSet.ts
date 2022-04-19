// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.
 */
export const EncounterSpecialArrangementsValueSet = {
  /**
   * An additional bed made available for a person accompanying the patient, for example a parent accompanying a child.
   */
  encounter_special_arrangements_AdditionalBedding: new Coding({
    code: "add-bed",
    display: "Additional bedding",
    system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements"
  }),
  /**
   * A person who accompanies a patient to provide assistive services necessary for the patient's care during the encounter.
   */
  encounter_special_arrangements_Attendant: new Coding({
    code: "att",
    display: "Attendant",
    system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements"
  }),
  /**
   * The patient has a guide dog and the location used for the encounter should be able to support the presence of the service animal.
   */
  encounter_special_arrangements_GuideDog: new Coding({
    code: "dog",
    display: "Guide dog",
    system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements"
  }),
  /**
   * The patient is not fluent in the local language and requires an interpreter to be available. Refer to the Patient.Language property for the type of interpreter required.
   */
  encounter_special_arrangements_Interpreter: new Coding({
    code: "int",
    display: "Interpreter",
    system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements"
  }),
  /**
   * The patient requires a wheelchair to be made available for the encounter.
   */
  encounter_special_arrangements_Wheelchair: new Coding({
    code: "wheel",
    display: "Wheelchair",
    system: "http://terminology.hl7.org/CodeSystem/encounter-special-arrangements"
  }),
};
