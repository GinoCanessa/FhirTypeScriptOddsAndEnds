// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The workflow/clinical status of the composition.
 */
export const CompositionStatusValueSet = {
  /**
   * The composition content or the referenced resources have been modified (edited or added to) subsequent to being released as "final" and the composition is complete and verified by an authorized person.
   */
  composition_status_Amended: new Coding({
    code: "amended",
    display: "Amended",
    system: "http://hl7.org/fhir/composition-status"
  }),
  /**
   * The composition or document was originally created/issued in error, and this is an amendment that marks that the entire series should not be considered as valid.
   */
  composition_status_EnteredInError: new Coding({
    code: "entered-in-error",
    display: "Entered in Error",
    system: "http://hl7.org/fhir/composition-status"
  }),
  /**
   * This version of the composition is complete and verified by an appropriate person and no further work is planned. Any subsequent updates would be on a new version of the composition.
   */
  composition_status_Final: new Coding({
    code: "final",
    display: "Final",
    system: "http://hl7.org/fhir/composition-status"
  }),
  /**
   * This is a preliminary composition or document (also known as initial or interim). The content may be incomplete or unverified.
   */
  composition_status_Preliminary: new Coding({
    code: "preliminary",
    display: "Preliminary",
    system: "http://hl7.org/fhir/composition-status"
  }),
};
