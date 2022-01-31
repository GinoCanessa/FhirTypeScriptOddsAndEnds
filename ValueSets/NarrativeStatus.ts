// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * The status of a resource narrative.
 */
export const NarrativeStatus = {
  /**
   * The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.
   */
  narrative_status_Additional: {
    code: "additional",
    display: "Additional",
    system: "http://hl7.org/fhir/narrative-status"
  } as Coding,
  /**
   * The contents of the narrative are some equivalent of "No human-readable text provided in this case".
   */
  narrative_status_Empty: {
    code: "empty",
    display: "Empty",
    system: "http://hl7.org/fhir/narrative-status"
  } as Coding,
  /**
   * The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.
   */
  narrative_status_Extensions: {
    code: "extensions",
    display: "Extensions",
    system: "http://hl7.org/fhir/narrative-status"
  } as Coding,
  /**
   * The contents of the narrative are entirely generated from the core elements in the content.
   */
  narrative_status_Generated: {
    code: "generated",
    display: "Generated",
    system: "http://hl7.org/fhir/narrative-status"
  } as Coding,
};
