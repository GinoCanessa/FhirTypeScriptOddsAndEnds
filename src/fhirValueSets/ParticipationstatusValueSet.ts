// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The Participation status of an appointment.
 */
export const ParticipationstatusValueSet = {
  /**
   * The participant has accepted the appointment.
   */
  participationstatus_Accepted: Coding.FromStrict({
    code: "accepted",
    display: "Accepted",
    system: "http://hl7.org/fhir/participationstatus"
  }),
  /**
   * The participant has declined the appointment and will not participate in the appointment.
   */
  participationstatus_Declined: Coding.FromStrict({
    code: "declined",
    display: "Declined",
    system: "http://hl7.org/fhir/participationstatus"
  }),
  /**
   * The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.
   */
  participationstatus_NeedsAction: Coding.FromStrict({
    code: "needs-action",
    display: "Needs Action",
    system: "http://hl7.org/fhir/participationstatus"
  }),
  /**
   * The participant has  tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.
   */
  participationstatus_Tentative: Coding.FromStrict({
    code: "tentative",
    display: "Tentative",
    system: "http://hl7.org/fhir/participationstatus"
  }),
};