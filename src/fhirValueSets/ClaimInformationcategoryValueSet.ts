// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This value set includes sample Information Category codes.
 */
export const ClaimInformationcategoryValueSet = {
  /**
   * Materials attached such as images, documents and resources.
   */
  claim_informationcategory_Attachment: Coding.FromStrict({
    code: "attachment",
    display: "Attachment",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * Discharge status and discharge to locations.
   */
  claim_informationcategory_Discharge: Coding.FromStrict({
    code: "discharge",
    display: "Discharge",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * An indication that the patient was unable to work, the period if known otherwise a Yes/No (boolean).
   */
  claim_informationcategory_EmploymentImpacted: Coding.FromStrict({
    code: "employmentimpacted",
    display: "EmploymentImpacted",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * Insurance policy exceptions.
   */
  claim_informationcategory_Exception: Coding.FromStrict({
    code: "exception",
    display: "Exception",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * The external cause of an illness or injury.
   */
  claim_informationcategory_ExternalCaause: Coding.FromStrict({
    code: "externalcause",
    display: "External Caause",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * An indication that the patient was hospitalized, the period if known otherwise a Yes/No (boolean).
   */
  claim_informationcategory_Hospitalized: Coding.FromStrict({
    code: "hospitalized",
    display: "Hospitalized",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * Codes conveying additional situation and condition information.
   */
  claim_informationcategory_Information: Coding.FromStrict({
    code: "info",
    display: "Information",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * Materials being forwarded, e.g. Models, molds, images, documents.
   */
  claim_informationcategory_MaterialsForwarded: Coding.FromStrict({
    code: "material",
    display: "Materials Forwarded",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * Teeth which are missing for any reason, for example: prior extraction, never developed.
   */
  claim_informationcategory_MissingTooth: Coding.FromStrict({
    code: "missingtooth",
    display: "Missing Tooth",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * Period, start or end dates of aspects of the Condition.
   */
  claim_informationcategory_Onset: Coding.FromStrict({
    code: "onset",
    display: "Onset",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * Other information identified by the type.system.
   */
  claim_informationcategory_Other: Coding.FromStrict({
    code: "other",
    display: "Other",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * The reason for the patient visit.
   */
  claim_informationcategory_PatientReasonForVisit: Coding.FromStrict({
    code: "patientreasonforvisit",
    display: "Patient Reason for Visit",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * The type of prosthesis and date of supply if a previously supplied prosthesis.
   */
  claim_informationcategory_Prosthesis: Coding.FromStrict({
    code: "prosthesis",
    display: "Prosthesis",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
  /**
   * Nature and date of the related event e.g. Last exam, service, X-ray etc.
   */
  claim_informationcategory_RelatedServices: Coding.FromStrict({
    code: "related",
    display: "Related Services",
    system: "http://terminology.hl7.org/CodeSystem/claiminformationcategory"
  }),
};
