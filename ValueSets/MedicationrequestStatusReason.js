/**
 * MedicationRequest Status Reason Codes
 */
export var MedicationrequestStatusReason = {
    /**
     * This therapy has been ordered as a backup to a preferred therapy. This order will be released when and if the preferred therapy is unsuccessful.
     */
    medicationrequest_status_reason_TryAnotherTreatmentFirst: {
        code: "altchoice",
        display: "Try another treatment first",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * Clarification is required before the order can be acted upon.
     */
    medicationrequest_status_reason_PrescriptionRequiresClarification: {
        code: "clarif",
        display: "Prescription requires clarification",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * The current level of the medication in the patient's system is too high. The medication is suspended to allow the level to subside to a safer level.
     */
    medicationrequest_status_reason_DrugLevelTooHigh: {
        code: "drughigh",
        display: "Drug level too high",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.
     */
    medicationrequest_status_reason_AdmissionToHospital: {
        code: "hospadm",
        display: "Admission to hospital",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.
     */
    medicationrequest_status_reason_LabInterferenceIssues: {
        code: "labint",
        display: "Lab interference issues",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.
     */
    medicationrequest_status_reason_PatientNotAvailable: {
        code: "non-avail",
        display: "Patient not available",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * The patient is pregnant or breast feeding. The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.
     */
    medicationrequest_status_reason_ParentIsPregnantBreastFeeding: {
        code: "preg",
        display: "Parent is pregnant/breast feeding",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    medicationrequest_status_reason_Allergy: {
        code: "salg",
        display: "Allergy",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    medicationrequest_status_reason_DrugInteractsWithAnotherDrug: {
        code: "sddi",
        display: "Drug interacts with another drug",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    medicationrequest_status_reason_DuplicateTherapy: {
        code: "sdupther",
        display: "Duplicate therapy",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    medicationrequest_status_reason_SuspectedIntolerance: {
        code: "sintol",
        display: "Suspected intolerance",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future. The drug will be resumed when the patient has sufficiently recovered from the surgery.
     */
    medicationrequest_status_reason_PatientScheduledForSurgery: {
        code: "surg",
        display: "Patient scheduled for surgery.",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    },
    /**
     * The patient was previously receiving a medication contraindicated with the current medication. The current medication will remain on hold until the prior medication has been cleansed from their system.
     */
    medicationrequest_status_reason_WaitingForOldDrugToWashOut: {
        code: "washout",
        display: "Waiting for old drug to wash out",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason"
    }
};