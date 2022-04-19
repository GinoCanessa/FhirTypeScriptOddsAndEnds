// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Codes describing the purpose or content of the communication.
 */
export const CommunicationTopicValueSet = {
  /**
   * The purpose or content of the communication is an appointment reminder.
   */
  communication_topic_AppointmentReminder: new Coding({
    code: "appointment-reminder",
    display: "Appointment Reminder",
    system: "http://terminology.hl7.org/CodeSystem/communication-topic"
  }),
  /**
   * The purpose or content of the communication is a phone consult.
   */
  communication_topic_PhoneConsult: new Coding({
    code: "phone-consult",
    display: "Phone Consult",
    system: "http://terminology.hl7.org/CodeSystem/communication-topic"
  }),
  /**
   * The purpose or content of the communication is a prescription refill request.
   */
  communication_topic_PrescriptionRefillRequest: new Coding({
    code: "prescription-refill-request",
    display: "Prescription Refill Request",
    system: "http://terminology.hl7.org/CodeSystem/communication-topic"
  }),
  /**
   * The purpose or content of the communication is a progress update.
   */
  communication_topic_ProgressUpdate: new Coding({
    code: "progress-update",
    display: "Progress Update",
    system: "http://terminology.hl7.org/CodeSystem/communication-topic"
  }),
  /**
   * The purpose or content of the communication is to report labs.
   */
  communication_topic_ReportLabs: new Coding({
    code: "report-labs",
    display: "Report Labs",
    system: "http://terminology.hl7.org/CodeSystem/communication-topic"
  }),
  /**
   * The purpose or content of the communication is a summary report.
   */
  communication_topic_SummaryReport: new Coding({
    code: "summary-report",
    display: "Summary Report",
    system: "http://terminology.hl7.org/CodeSystem/communication-topic"
  }),
};
