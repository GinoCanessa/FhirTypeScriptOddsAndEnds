// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
export const CommunicationCategoryValueSet = {
  /**
   * The communication conveys an alert.
   */
  communication_category_Alert: Coding.FromStrict({
    code: "alert",
    display: "Alert",
    system: "http://terminology.hl7.org/CodeSystem/communication-category"
  }),
  /**
   * The communication conveys an instruction.
   */
  communication_category_Instruction: Coding.FromStrict({
    code: "instruction",
    display: "Instruction",
    system: "http://terminology.hl7.org/CodeSystem/communication-category"
  }),
  /**
   * The communication conveys a notification.
   */
  communication_category_Notification: Coding.FromStrict({
    code: "notification",
    display: "Notification",
    system: "http://terminology.hl7.org/CodeSystem/communication-category"
  }),
  /**
   * The communication conveys a reminder.
   */
  communication_category_Reminder: Coding.FromStrict({
    code: "reminder",
    display: "Reminder",
    system: "http://terminology.hl7.org/CodeSystem/communication-category"
  }),
};
