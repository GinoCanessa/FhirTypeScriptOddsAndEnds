import { Coding } from '../fhir.js';
/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export declare const AppointmentCancellationReasonValueSet: {
    /**
     * Code: maint
     */
    readonly EquipmentMaintenanceRepair: Coding;
    /**
     * Code: meds-inc
     */
    readonly PrepMedIncomplete: Coding;
    /**
     * Code: oth-cms
     */
    readonly OtherCMSTherapyCapServiceNotAuthorized: Coding;
    /**
     * Code: oth-err
     */
    readonly OtherError: Coding;
    /**
     * Code: oth-fin
     */
    readonly OtherFinancial: Coding;
    /**
     * Code: oth-int
     */
    readonly OtherNoInterpreterAvailable: Coding;
    /**
     * Code: oth-iv
     */
    readonly OtherImproperIVAccessInfiltrateIV: Coding;
    /**
     * Code: oth-mu
     */
    readonly OtherPrepMedResultsUnavailable: Coding;
    /**
     * Code: oth-oerr
     */
    readonly OtherScheduleOrderError: Coding;
    /**
     * Code: oth-room
     */
    readonly OtherRoomResourceMaintenance: Coding;
    /**
     * Code: oth-swie
     */
    readonly OtherSilentWalkInError: Coding;
    /**
     * Code: oth-weath
     */
    readonly OtherWeather: Coding;
    /**
     * Code: other
     */
    readonly Other: Coding;
    /**
     * Code: pat
     */
    readonly Patient: Coding;
    /**
     * Code: pat-cpp
     */
    readonly PatientCanceledViaPatientPortal: Coding;
    /**
     * Code: pat-crs
     */
    readonly PatientCanceledViaAutomatedReminderSystem: Coding;
    /**
     * Code: pat-dec
     */
    readonly PatientDeceased: Coding;
    /**
     * Code: pat-fb
     */
    readonly PatientFeelingBetter: Coding;
    /**
     * Code: pat-lt
     */
    readonly PatientLackOfTransportation: Coding;
    /**
     * Code: pat-mt
     */
    readonly PatientMemberTerminated: Coding;
    /**
     * Code: pat-mv
     */
    readonly PatientMoved: Coding;
    /**
     * Code: pat-preg
     */
    readonly PatientPregnant: Coding;
    /**
     * Code: pat-swl
     */
    readonly PatientScheduledFromWaitList: Coding;
    /**
     * Code: pat-ucp
     */
    readonly PatientUnhappyChangedProvider: Coding;
    /**
     * Code: prov
     */
    readonly Provider: Coding;
    /**
     * Code: prov-dch
     */
    readonly ProviderDischarged: Coding;
    /**
     * Code: prov-edu
     */
    readonly ProviderEduMeeting: Coding;
    /**
     * Code: prov-hosp
     */
    readonly ProviderHospitalized: Coding;
    /**
     * Code: prov-labs
     */
    readonly ProviderLabsOutOfAcceptableRange: Coding;
    /**
     * Code: prov-mri
     */
    readonly ProviderMRIScreeningFormMarkedDoNotProceed: Coding;
    /**
     * Code: prov-onc
     */
    readonly ProviderOncologyTreatmentPlanChanges: Coding;
    /**
     * Code: prov-pers
     */
    readonly ProviderPersonal: Coding;
};
/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export declare type AppointmentCancellationReasonValueSetType = typeof AppointmentCancellationReasonValueSet;
/**
 * This example value set defines a set of reasons for the cancellation of an appointment.
 */
export declare enum AppointmentCancellationReasonValueSetEnum {
    /**
     * Code: maint
     */
    EquipmentMaintenanceRepair = "maint",
    /**
     * Code: meds-inc
     */
    PrepMedIncomplete = "meds-inc",
    /**
     * Code: oth-cms
     */
    OtherCMSTherapyCapServiceNotAuthorized = "oth-cms",
    /**
     * Code: oth-err
     */
    OtherError = "oth-err",
    /**
     * Code: oth-fin
     */
    OtherFinancial = "oth-fin",
    /**
     * Code: oth-int
     */
    OtherNoInterpreterAvailable = "oth-int",
    /**
     * Code: oth-iv
     */
    OtherImproperIVAccessInfiltrateIV = "oth-iv",
    /**
     * Code: oth-mu
     */
    OtherPrepMedResultsUnavailable = "oth-mu",
    /**
     * Code: oth-oerr
     */
    OtherScheduleOrderError = "oth-oerr",
    /**
     * Code: oth-room
     */
    OtherRoomResourceMaintenance = "oth-room",
    /**
     * Code: oth-swie
     */
    OtherSilentWalkInError = "oth-swie",
    /**
     * Code: oth-weath
     */
    OtherWeather = "oth-weath",
    /**
     * Code: other
     */
    Other = "other",
    /**
     * Code: pat
     */
    Patient = "pat",
    /**
     * Code: pat-cpp
     */
    PatientCanceledViaPatientPortal = "pat-cpp",
    /**
     * Code: pat-crs
     */
    PatientCanceledViaAutomatedReminderSystem = "pat-crs",
    /**
     * Code: pat-dec
     */
    PatientDeceased = "pat-dec",
    /**
     * Code: pat-fb
     */
    PatientFeelingBetter = "pat-fb",
    /**
     * Code: pat-lt
     */
    PatientLackOfTransportation = "pat-lt",
    /**
     * Code: pat-mt
     */
    PatientMemberTerminated = "pat-mt",
    /**
     * Code: pat-mv
     */
    PatientMoved = "pat-mv",
    /**
     * Code: pat-preg
     */
    PatientPregnant = "pat-preg",
    /**
     * Code: pat-swl
     */
    PatientScheduledFromWaitList = "pat-swl",
    /**
     * Code: pat-ucp
     */
    PatientUnhappyChangedProvider = "pat-ucp",
    /**
     * Code: prov
     */
    Provider = "prov",
    /**
     * Code: prov-dch
     */
    ProviderDischarged = "prov-dch",
    /**
     * Code: prov-edu
     */
    ProviderEduMeeting = "prov-edu",
    /**
     * Code: prov-hosp
     */
    ProviderHospitalized = "prov-hosp",
    /**
     * Code: prov-labs
     */
    ProviderLabsOutOfAcceptableRange = "prov-labs",
    /**
     * Code: prov-mri
     */
    ProviderMRIScreeningFormMarkedDoNotProceed = "prov-mri",
    /**
     * Code: prov-onc
     */
    ProviderOncologyTreatmentPlanChanges = "prov-onc",
    /**
     * Code: prov-pers
     */
    ProviderPersonal = "prov-pers"
}
//# sourceMappingURL=AppointmentCancellationReasonValueSet.d.ts.map