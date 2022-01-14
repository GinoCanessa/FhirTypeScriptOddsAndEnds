// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * The type of link between this patient resource and another patient resource.
 */
export const LinkType = {
  /**
   * The patient resource containing this link is in use and valid but not considered the main source of information about a patient. The link points forward to another patient resource that should be consulted to retrieve additional patient information.
   */
  link_type_Refer: {
    code: "refer",
    display: "Refer",
    system: "http://hl7.org/fhir/link-type"
  } as Coding,
  /**
   * The patient resource containing this link must no longer be used. The link points forward to another patient resource that must be used in lieu of the patient resource that contains this link.
   */
  link_type_ReplacedBy: {
    code: "replaced-by",
    display: "Replaced-by",
    system: "http://hl7.org/fhir/link-type"
  } as Coding,
  /**
   * The patient resource containing this link is the current active patient record. The link points back to an inactive patient resource that has been merged into this resource, and should be consulted to retrieve additional referenced information.
   */
  link_type_Replaces: {
    code: "replaces",
    display: "Replaces",
    system: "http://hl7.org/fhir/link-type"
  } as Coding,
  /**
   * The patient resource containing this link is in use and valid, but points to another patient resource that is known to contain data about the same person. Data in this resource might overlap or contradict information found in the other patient resource. This link does not indicate any relative importance of the resources concerned, and both should be regarded as equally valid.
   */
  link_type_SeeAlso: {
    code: "seealso",
    display: "See also",
    system: "http://hl7.org/fhir/link-type"
  } as Coding,
};
