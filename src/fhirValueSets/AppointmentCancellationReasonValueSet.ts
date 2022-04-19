// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export const AppointmentCancellationReasonValueSet = {
  appointment_cancellation_reason_EquipmentMaintenanceRepair: Coding.FromStrict({
    code: "maint",
    display: "Equipment Maintenance/Repair",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_PrepMedIncomplete: Coding.FromStrict({
    code: "meds-inc",
    display: "Prep/Med Incomplete",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_OtherCMSTherapyCapServiceNotAuthorized: Coding.FromStrict({
    code: "oth-cms",
    display: "Other: CMS Therapy Cap Service Not Authorized",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_OtherError: Coding.FromStrict({
    code: "oth-err",
    display: "Other: Error",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_OtherFinancial: Coding.FromStrict({
    code: "oth-fin",
    display: "Other: Financial",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_OtherNoInterpreterAvailable: Coding.FromStrict({
    code: "oth-int",
    display: "Other: No Interpreter Available",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_OtherImproperIVAccessInfiltrateIV: Coding.FromStrict({
    code: "oth-iv",
    display: "Other: Improper IV Access/Infiltrate IV",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_OtherPrepMedResultsUnavailable: Coding.FromStrict({
    code: "oth-mu",
    display: "Other: Prep/Med/Results Unavailable",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_OtherScheduleOrderError: Coding.FromStrict({
    code: "oth-oerr",
    display: "Other: Schedule Order Error",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_OtherRoomResourceMaintenance: Coding.FromStrict({
    code: "oth-room",
    display: "Other: Room/Resource Maintenance",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_OtherSilentWalkInError: Coding.FromStrict({
    code: "oth-swie",
    display: "Other: Silent Walk In Error",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_OtherWeather: Coding.FromStrict({
    code: "oth-weath",
    display: "Other: Weather",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_Other: Coding.FromStrict({
    code: "other",
    display: "Other",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_Patient: Coding.FromStrict({
    code: "pat",
    display: "Patient",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_PatientCanceledViaPatientPortal: Coding.FromStrict({
    code: "pat-cpp",
    display: "Patient: Canceled via Patient Portal",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_PatientCanceledViaAutomatedReminderSystem: Coding.FromStrict({
    code: "pat-crs",
    display: "Patient: Canceled via automated reminder system",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_PatientDeceased: Coding.FromStrict({
    code: "pat-dec",
    display: "Patient: Deceased",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_PatientFeelingBetter: Coding.FromStrict({
    code: "pat-fb",
    display: "Patient: Feeling Better",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_PatientLackOfTransportation: Coding.FromStrict({
    code: "pat-lt",
    display: "Patient: Lack of Transportation",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_PatientMemberTerminated: Coding.FromStrict({
    code: "pat-mt",
    display: "Patient: Member Terminated",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_PatientMoved: Coding.FromStrict({
    code: "pat-mv",
    display: "Patient: Moved",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_PatientPregnant: Coding.FromStrict({
    code: "pat-preg",
    display: "Patient: Pregnant",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_PatientScheduledFromWaitList: Coding.FromStrict({
    code: "pat-swl",
    display: "Patient: Scheduled from Wait List",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_PatientUnhappyChangedProvider: Coding.FromStrict({
    code: "pat-ucp",
    display: "Patient: Unhappy/Changed Provider",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_Provider: Coding.FromStrict({
    code: "prov",
    display: "Provider",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_ProviderDischarged: Coding.FromStrict({
    code: "prov-dch",
    display: "Provider: Discharged",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_ProviderEduMeeting: Coding.FromStrict({
    code: "prov-edu",
    display: "Provider: Edu/Meeting",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_ProviderHospitalized: Coding.FromStrict({
    code: "prov-hosp",
    display: "Provider: Hospitalized",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_ProviderLabsOutOfAcceptableRange: Coding.FromStrict({
    code: "prov-labs",
    display: "Provider: Labs Out of Acceptable Range",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_ProviderMRIScreeningFormMarkedDoNotProceed: Coding.FromStrict({
    code: "prov-mri",
    display: "Provider: MRI Screening Form Marked Do Not Proceed",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_ProviderOncologyTreatmentPlanChanges: Coding.FromStrict({
    code: "prov-onc",
    display: "Provider: Oncology Treatment Plan Changes",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
  appointment_cancellation_reason_ProviderPersonal: Coding.FromStrict({
    code: "prov-pers",
    display: "Provider: Personal",
    system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
  }),
};
