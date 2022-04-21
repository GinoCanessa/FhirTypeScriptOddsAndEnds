// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/communication-category|4.0.1

import { Coding } from '../fhir.js'

/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
export const CommunicationCategoryValueSet = {
  /**
   * alert: The communication conveys an alert.
   */
  Alert: new Coding({
    display: "Alert",
    code: "alert",
    system: "http://terminology.hl7.org/CodeSystem/communication-category",
  }),
  /**
   * instruction: The communication conveys an instruction.
   */
  Instruction: new Coding({
    display: "Instruction",
    code: "instruction",
    system: "http://terminology.hl7.org/CodeSystem/communication-category",
  }),
  /**
   * notification: The communication conveys a notification.
   */
  Notification: new Coding({
    display: "Notification",
    code: "notification",
    system: "http://terminology.hl7.org/CodeSystem/communication-category",
  }),
  /**
   * reminder: The communication conveys a reminder.
   */
  Reminder: new Coding({
    display: "Reminder",
    code: "reminder",
    system: "http://terminology.hl7.org/CodeSystem/communication-category",
  }),
} as const;

/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
export type CommunicationCategoryValueSetType = typeof CommunicationCategoryValueSet;

/**
 * Codes for general categories of communications such as alerts, instructions, etc.
 */
export enum CommunicationCategoryValueSetEnum {
  /**
   * alert: The communication conveys an alert.
   */
  Alert = "alert",
  /**
   * instruction: The communication conveys an instruction.
   */
  Instruction = "instruction",
  /**
   * notification: The communication conveys a notification.
   */
  Notification = "notification",
  /**
   * reminder: The communication conveys a reminder.
   */
  Reminder = "reminder",
}
