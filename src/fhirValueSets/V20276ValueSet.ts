// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * FHIR Value set/code system definition for HL7 v2 table 0276 ( Appointment Reason Codes)
 */
export const V20276ValueSet = {
  v2_0276_ARoutineCheckUpSuchAsAnAnnualPhysical: Coding.FromStrict({
    code: "CHECKUP",
    display: "A routine check-up, such as an annual physical",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276"
  }),
  v2_0276_EmergencyAppointment: Coding.FromStrict({
    code: "EMERGENCY",
    display: "Emergency appointment",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276"
  }),
  v2_0276_AFollowUpVisitFromAPreviousAppointment: Coding.FromStrict({
    code: "FOLLOWUP",
    display: "A follow up visit from a previous appointment",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276"
  }),
  v2_0276_RoutineAppointmentDefaultIfNotValued: Coding.FromStrict({
    code: "ROUTINE",
    display: "Routine appointment - default if not valued",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276"
  }),
  v2_0276_APreviouslyUnscheduledWalkInVisit: Coding.FromStrict({
    code: "WALKIN",
    display: "A previously unscheduled walk-in visit",
    system: "http://terminology.hl7.org/CodeSystem/v2-0276"
  }),
};
