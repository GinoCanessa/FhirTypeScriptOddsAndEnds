// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The lifecycle status of an artifact.
 */
export const PublicationStatusValueSet = {
  /**
   * This resource is ready for normal use.
   */
  publication_status_Active: new Coding({
    code: "active",
    display: "Active",
    system: "http://hl7.org/fhir/publication-status"
  }),
  /**
   * This resource is still under development and is not yet considered to be ready for normal use.
   */
  publication_status_Draft: new Coding({
    code: "draft",
    display: "Draft",
    system: "http://hl7.org/fhir/publication-status"
  }),
  /**
   * This resource has been withdrawn or superseded and should no longer be used.
   */
  publication_status_Retired: new Coding({
    code: "retired",
    display: "Retired",
    system: "http://hl7.org/fhir/publication-status"
  }),
  /**
   * The authoring system does not know which of the status values currently applies for this resource.  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
   */
  publication_status_Unknown: new Coding({
    code: "unknown",
    display: "Unknown",
    system: "http://hl7.org/fhir/publication-status"
  }),
};
