/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export var AppointmentCancellationReason = {
    appointment_cancellation_reason_EquipmentMaintenanceRepair: {
        code: "maint",
        display: "Equipment Maintenance/Repair",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_PrepMedIncomplete: {
        code: "meds-inc",
        display: "Prep/Med Incomplete",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_OtherCMSTherapyCapServiceNotAuthorized: {
        code: "oth-cms",
        display: "Other: CMS Therapy Cap Service Not Authorized",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_OtherError: {
        code: "oth-err",
        display: "Other: Error",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_OtherFinancial: {
        code: "oth-fin",
        display: "Other: Financial",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_OtherNoInterpreterAvailable: {
        code: "oth-int",
        display: "Other: No Interpreter Available",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_OtherImproperIVAccessInfiltrateIV: {
        code: "oth-iv",
        display: "Other: Improper IV Access/Infiltrate IV",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_OtherPrepMedResultsUnavailable: {
        code: "oth-mu",
        display: "Other: Prep/Med/Results Unavailable",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_OtherScheduleOrderError: {
        code: "oth-oerr",
        display: "Other: Schedule Order Error",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_OtherRoomResourceMaintenance: {
        code: "oth-room",
        display: "Other: Room/Resource Maintenance",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_OtherSilentWalkInError: {
        code: "oth-swie",
        display: "Other: Silent Walk In Error",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_OtherWeather: {
        code: "oth-weath",
        display: "Other: Weather",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_Other: {
        code: "other",
        display: "Other",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_Patient: {
        code: "pat",
        display: "Patient",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_PatientCanceledViaPatientPortal: {
        code: "pat-cpp",
        display: "Patient: Canceled via Patient Portal",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_PatientCanceledViaAutomatedReminderSystem: {
        code: "pat-crs",
        display: "Patient: Canceled via automated reminder system",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_PatientDeceased: {
        code: "pat-dec",
        display: "Patient: Deceased",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_PatientFeelingBetter: {
        code: "pat-fb",
        display: "Patient: Feeling Better",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_PatientLackOfTransportation: {
        code: "pat-lt",
        display: "Patient: Lack of Transportation",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_PatientMemberTerminated: {
        code: "pat-mt",
        display: "Patient: Member Terminated",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_PatientMoved: {
        code: "pat-mv",
        display: "Patient: Moved",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_PatientPregnant: {
        code: "pat-preg",
        display: "Patient: Pregnant",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_PatientScheduledFromWaitList: {
        code: "pat-swl",
        display: "Patient: Scheduled from Wait List",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_PatientUnhappyChangedProvider: {
        code: "pat-ucp",
        display: "Patient: Unhappy/Changed Provider",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_Provider: {
        code: "prov",
        display: "Provider",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_ProviderDischarged: {
        code: "prov-dch",
        display: "Provider: Discharged",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_ProviderEduMeeting: {
        code: "prov-edu",
        display: "Provider: Edu/Meeting",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_ProviderHospitalized: {
        code: "prov-hosp",
        display: "Provider: Hospitalized",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_ProviderLabsOutOfAcceptableRange: {
        code: "prov-labs",
        display: "Provider: Labs Out of Acceptable Range",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_ProviderMRIScreeningFormMarkedDoNotProceed: {
        code: "prov-mri",
        display: "Provider: MRI Screening Form Marked Do Not Proceed",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_ProviderOncologyTreatmentPlanChanges: {
        code: "prov-onc",
        display: "Provider: Oncology Treatment Plan Changes",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    },
    appointment_cancellation_reason_ProviderPersonal: {
        code: "prov-pers",
        display: "Provider: Personal",
        system: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason"
    }
};
