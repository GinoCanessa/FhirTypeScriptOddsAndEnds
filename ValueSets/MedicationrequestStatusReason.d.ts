import { Coding } from '../strictmodels';
/**
 * MedicationRequest Status Reason Codes
 */
export declare const MedicationrequestStatusReason: {
    /**
     * This therapy has been ordered as a backup to a preferred therapy. This order will be released when and if the preferred therapy is unsuccessful.
     */
    medicationrequest_status_reason_TryAnotherTreatmentFirst: Coding;
    /**
     * Clarification is required before the order can be acted upon.
     */
    medicationrequest_status_reason_PrescriptionRequiresClarification: Coding;
    /**
     * The current level of the medication in the patient's system is too high. The medication is suspended to allow the level to subside to a safer level.
     */
    medicationrequest_status_reason_DrugLevelTooHigh: Coding;
    /**
     * The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.
     */
    medicationrequest_status_reason_AdmissionToHospital: Coding;
    /**
     * The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.
     */
    medicationrequest_status_reason_LabInterferenceIssues: Coding;
    /**
     * Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.
     */
    medicationrequest_status_reason_PatientNotAvailable: Coding;
    /**
     * The patient is pregnant or breast feeding. The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.
     */
    medicationrequest_status_reason_ParentIsPregnantBreastFeeding: Coding;
    /**
     * The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    medicationrequest_status_reason_Allergy: Coding;
    /**
     * The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    medicationrequest_status_reason_DrugInteractsWithAnotherDrug: Coding;
    /**
     * The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    medicationrequest_status_reason_DuplicateTherapy: Coding;
    /**
     * The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    medicationrequest_status_reason_SuspectedIntolerance: Coding;
    /**
     * The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future. The drug will be resumed when the patient has sufficiently recovered from the surgery.
     */
    medicationrequest_status_reason_PatientScheduledForSurgery: Coding;
    /**
     * The patient was previously receiving a medication contraindicated with the current medication. The current medication will remain on hold until the prior medication has been cleansed from their system.
     */
    medicationrequest_status_reason_WaitingForOldDrugToWashOut: Coding;
};
//# sourceMappingURL=MedicationrequestStatusReason.d.ts.map