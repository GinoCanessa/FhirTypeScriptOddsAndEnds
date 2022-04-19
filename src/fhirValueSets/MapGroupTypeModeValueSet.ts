// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * If this is the default rule set to apply for the source type, or this combination of types.
 */
export const MapGroupTypeModeValueSet = {
  /**
   * This group is not a default group for the types.
   */
  map_group_type_mode_NotADefault: Coding.FromStrict({
    code: "none",
    display: "Not a Default",
    system: "http://hl7.org/fhir/map-group-type-mode"
  }),
  /**
   * This group is a default mapping group for the specified types.
   */
  map_group_type_mode_DefaultForTypePlusCombination: Coding.FromStrict({
    code: "type-and-types",
    display: "Default for type + combination",
    system: "http://hl7.org/fhir/map-group-type-mode"
  }),
  /**
   * This group is a default mapping group for the specified types and for the primary source type.
   */
  map_group_type_mode_DefaultForTypeCombination: Coding.FromStrict({
    code: "types",
    display: "Default for Type Combination",
    system: "http://hl7.org/fhir/map-group-type-mode"
  }),
};
