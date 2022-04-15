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
 * Use of contact point.
 */
export const ContactPointUseValueSet = {
  /**
   * A communication contact point at a home; attempted contacts for business purposes might intrude privacy and chances are one will contact family or other household members instead of the person one wishes to call. Typically used with urgent cases, or if no other contacts are available.
   */
  contact_point_use_Home: Coding.FactoryCreateStrict({
    code: "home",
    display: "Home",
    system: "http://hl7.org/fhir/contact-point-use"
  }),
  /**
   * A telecommunication device that moves and stays with its owner. May have characteristics of all other use codes, suitable for urgent matters, not the first choice for routine business.
   */
  contact_point_use_Mobile: Coding.FactoryCreateStrict({
    code: "mobile",
    display: "Mobile",
    system: "http://hl7.org/fhir/contact-point-use"
  }),
  /**
   * This contact point is no longer in use (or was never correct, but retained for records).
   */
  contact_point_use_Old: Coding.FactoryCreateStrict({
    code: "old",
    display: "Old",
    system: "http://hl7.org/fhir/contact-point-use"
  }),
  /**
   * A temporary contact point. The period can provide more detailed information.
   */
  contact_point_use_Temp: Coding.FactoryCreateStrict({
    code: "temp",
    display: "Temp",
    system: "http://hl7.org/fhir/contact-point-use"
  }),
  /**
   * An office contact point. First choice for business related contacts during business hours.
   */
  contact_point_use_Work: Coding.FactoryCreateStrict({
    code: "work",
    display: "Work",
    system: "http://hl7.org/fhir/contact-point-use"
  }),
};