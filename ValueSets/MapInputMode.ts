// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../models'
/**
 * Mode for this instance of data.
 */
export const MapInputMode = {
  /**
   * Names an input instance used a source for mapping.
   */
  map_input_mode_SourceInstance: {
    code: "source",
    display: "Source Instance",
    system: "http://hl7.org/fhir/map-input-mode"
  } as Coding,
  /**
   * Names an instance that is being populated.
   */
  map_input_mode_TargetInstance: {
    code: "target",
    display: "Target Instance",
    system: "http://hl7.org/fhir/map-input-mode"
  } as Coding,
};
