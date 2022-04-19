// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Overall categorization of the event, e.g. product-related or situational.
 */
export const AdverseEventCategoryValueSet = {
  /**
   * The adverse event pertains to an expired drug.
   */
  adverse_event_category_ExpiredDrug: new Coding({
    code: "expired-drug",
    display: "Expired Drug",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to incorrect perscribing information.
   */
  adverse_event_category_IncorrectPrescribingInformation: new Coding({
    code: "incorrect-prescribing-information",
    display: "Incorrect Prescribing Information",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to a medical device use error.
   */
  adverse_event_category_MedicalDeviceUseError: new Coding({
    code: "medical-device-use-error",
    display: "Medical Device Use Error",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to a problem with a different manufacturer of the same medication.
   */
  adverse_event_category_ProblemWithDifferentManufacturerOfSameMedicine: new Coding({
    code: "problem-different-manufacturer",
    display: "Problem with Different Manufacturer of Same Medicine",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to a product problem.
   */
  adverse_event_category_ProductProblem: new Coding({
    code: "product-problem",
    display: "Product Problem",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to product quality.
   */
  adverse_event_category_ProductQuality: new Coding({
    code: "product-quality",
    display: "Product Quality",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to a product use error.
   */
  adverse_event_category_ProductUseError: new Coding({
    code: "product-use-error",
    display: "Product Use Error",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to an unsafe physical environment.
   */
  adverse_event_category_UnsafePhysicalEnvironment: new Coding({
    code: "unsafe-physical-environment",
    display: "Unsafe Physical Environment",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to a wrong dose.
   */
  adverse_event_category_WrongDose: new Coding({
    code: "wrong-dose",
    display: "Wrong Dose",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to a wrong duration.
   */
  adverse_event_category_WrongDuration: new Coding({
    code: "wrong-duration",
    display: "Wrong Duration",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to a wrong rate.
   */
  adverse_event_category_WrongRate: new Coding({
    code: "wrong-rate",
    display: "Wrong Rate",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to a wrong route of administration.
   */
  adverse_event_category_WrongRouteOfAdministration: new Coding({
    code: "wrong-route-of-administration",
    display: "Wrong Route of Administration",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to a wrong technique.
   */
  adverse_event_category_WrongTechnique: new Coding({
    code: "wrong-technique",
    display: "Wrong Technique",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
  /**
   * The adverse event pertains to a wrong time.
   */
  adverse_event_category_WrongTime: new Coding({
    code: "wrong-time",
    display: "Wrong Time",
    system: "http://terminology.hl7.org/CodeSystem/adverse-event-category"
  }),
};
