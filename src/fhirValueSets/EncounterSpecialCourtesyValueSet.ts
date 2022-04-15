// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
  // Restricted to: Patient|Encounter|Observation
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set defines a set of codes that can be used to indicate special courtesies provided to the patient.
 */
export const EncounterSpecialCourtesyValueSet = {
  /**
   * extended courtesy
   */
  v3_EncounterSpecialCourtesy_ExtendedCourtesy: Coding.FactoryCreateStrict({
    code: "EXT",
    display: "extended courtesy",
    system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy"
  }),
  /**
   * normal courtesy
   */
  v3_EncounterSpecialCourtesy_NormalCourtesy: Coding.FactoryCreateStrict({
    code: "NRM",
    display: "normal courtesy",
    system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy"
  }),
  /**
   * professional courtesy
   */
  v3_EncounterSpecialCourtesy_ProfessionalCourtesy: Coding.FactoryCreateStrict({
    code: "PRF",
    display: "professional courtesy",
    system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy"
  }),
  /**
   * Courtesies extended to the staff of the entity providing service.
   */
  v3_EncounterSpecialCourtesy_Staff: Coding.FactoryCreateStrict({
    code: "STF",
    display: "staff",
    system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy"
  }),
  /**
   * Description:A proper value is applicable, but not known.
   * 
   *                         
   *                            Usage Notes: This means the actual value is not known.  If the only thing that is unknown is how to properly express the value in the necessary constraints (value set, datatype, etc.), then the OTH or UNC flavor should be used.  No properties should be included for a datatype with this property unless:
   * 
   *                         
   *                            Those properties themselves directly translate to a semantic of "unknown".  (E.g. a local code sent as a translation that conveys 'unknown')
   *                            Those properties further qualify the nature of what is unknown.  (E.g. specifying a use code of "H" and a URL prefix of "tel:" to convey that it is the home phone number that is unknown.)
   */
  v3_NullFlavor_Unknown: Coding.FactoryCreateStrict({
    code: "UNK",
    display: "unknown",
    system: "http://terminology.hl7.org/CodeSystem/v3-NullFlavor"
  }),
  /**
   * very important person
   */
  v3_EncounterSpecialCourtesy_VeryImportantPerson: Coding.FactoryCreateStrict({
    code: "VIP",
    display: "very important person",
    system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy"
  }),
};