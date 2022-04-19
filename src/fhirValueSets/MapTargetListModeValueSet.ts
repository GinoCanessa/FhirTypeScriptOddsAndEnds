// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * If field is a list, how to manage the production.
 */
export const MapTargetListModeValueSet = {
  /**
   * re-use the first item in the list, and keep adding content to it.
   */
  map_target_list_mode_Collate: new Coding({
    code: "collate",
    display: "Collate",
    system: "http://hl7.org/fhir/map-target-list-mode"
  }),
  /**
   * when the target list is being assembled, the items for this rule go first. If more than one rule defines a first item (for a given instance of mapping) then this is an error.
   */
  map_target_list_mode_First: new Coding({
    code: "first",
    display: "First",
    system: "http://hl7.org/fhir/map-target-list-mode"
  }),
  /**
   * when the target list is being assembled, the items for this rule go last. If more than one rule defines a last item (for a given instance of mapping) then this is an error.
   */
  map_target_list_mode_Last: new Coding({
    code: "last",
    display: "Last",
    system: "http://hl7.org/fhir/map-target-list-mode"
  }),
  /**
   * the target instance is shared with the target instances generated by another rule (up to the first common n items, then create new ones).
   */
  map_target_list_mode_Share: new Coding({
    code: "share",
    display: "Share",
    system: "http://hl7.org/fhir/map-target-list-mode"
  }),
};
