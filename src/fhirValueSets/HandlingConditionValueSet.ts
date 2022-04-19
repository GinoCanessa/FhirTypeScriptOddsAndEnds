// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Set of handling instructions prior testing of the specimen.
 */
export const HandlingConditionValueSet = {
  /**
   * frozen temperature.
   */
  handling_condition_Frozen: new Coding({
    code: "frozen",
    display: "frozen",
    system: "http://terminology.hl7.org/CodeSystem/handling-condition"
  }),
  /**
   * refrigerated temperature.
   */
  handling_condition_Refrigerated: new Coding({
    code: "refrigerated",
    display: "refrigerated",
    system: "http://terminology.hl7.org/CodeSystem/handling-condition"
  }),
  /**
   * room temperature.
   */
  handling_condition_RoomTemperature: new Coding({
    code: "room",
    display: "room temperature",
    system: "http://terminology.hl7.org/CodeSystem/handling-condition"
  }),
};
