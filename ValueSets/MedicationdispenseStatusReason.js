/**
 * MedicationDispense Status Codes
 */
export var MedicationdispenseStatusReason = {
    /**
     * This therapy has been ordered as a backup to a preferred therapy. This order will be released when and if the preferred therapy is unsuccessful.
     */
    medicationdispense_status_reason_TryAnotherTreatmentFirst: {
        code: "altchoice",
        display: "Try another treatment first",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * Clarification is required before the order can be acted upon.
     */
    medicationdispense_status_reason_PrescriptionRequestRequiresClarification: {
        code: "clarif",
        display: "Prescription/Request requires clarification",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * The current level of the medication in the patient's system is too high. The medication is suspended to allow the level to subside to a safer level.
     */
    medicationdispense_status_reason_DrugLevelTooHigh: {
        code: "drughigh",
        display: "Drug level too high",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * The order has been stopped by the prescriber but this fact has not necessarily captured electronically. Example: A verbal stop, a fax, etc.
     */
    medicationdispense_status_reason_OrderStopped: {
        code: "frr01",
        display: "Order Stopped",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * Order has not been fulfilled within a reasonable amount of time, and might not be current.
     */
    medicationdispense_status_reason_StaleDatedOrder: {
        code: "frr02",
        display: "Stale-dated Order",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * Data needed to safely act on the order which was expected to become available independent of the order is not yet available. Example: Lab results, diagnostic imaging, etc.
     */
    medicationdispense_status_reason_IncompleteData: {
        code: "frr03",
        display: "Incomplete data",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * Product not available or manufactured. Cannot supply.
     */
    medicationdispense_status_reason_ProductUnavailable: {
        code: "frr04",
        display: "Product unavailable",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * The dispenser has ethical, religious or moral objections to fulfilling the order/dispensing the product.
     */
    medicationdispense_status_reason_EthicalReligious: {
        code: "frr05",
        display: "Ethical/religious",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * Fulfiller not able to provide appropriate care associated with fulfilling the order. Example: Therapy requires ongoing monitoring by fulfiller and fulfiller will be ending practice, leaving town, unable to schedule necessary time, etc.
     */
    medicationdispense_status_reason_UnableToProvideCare: {
        code: "frr06",
        display: "Unable to provide care",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.
     */
    medicationdispense_status_reason_AdmissionToHospital: {
        code: "hospadm",
        display: "Admission to hospital",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.
     */
    medicationdispense_status_reason_LabInterferenceIssues: {
        code: "labint",
        display: "Lab interference issues",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.
     */
    medicationdispense_status_reason_PatientNotAvailable: {
        code: "non-avail",
        display: "Patient not available",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * Drug no longer marketed Cannot supply.
     */
    medicationdispense_status_reason_DrugNotAvailableOffMarket: {
        code: "offmarket",
        display: "Drug not available - off market",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * Drug out of stock. Cannot supply.
     */
    medicationdispense_status_reason_DrugNotAvailableOutOfStock: {
        code: "outofstock",
        display: "Drug not available - out of stock",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * The patient is pregnant or breast feeding. The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.
     */
    medicationdispense_status_reason_PatientIsPregnantOrBreastfeeding: {
        code: "preg",
        display: "Patient is pregnant or breastfeeding",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    medicationdispense_status_reason_Allergy: {
        code: "saig",
        display: "Allergy",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    medicationdispense_status_reason_DrugInteractsWithAnotherDrug: {
        code: "sddi",
        display: "Drug interacts with another drug",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * Another short-term co-occurring therapy fulfills the same purpose as this therapy. This therapy will be resumed when the co-occuring therapy is complete.
     */
    medicationdispense_status_reason_DuplicateTherapy: {
        code: "sdupther",
        display: "Duplicate therapy",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * The patient is believed to have an intolerance to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    medicationdispense_status_reason_SuspectedIntolerance: {
        code: "sintol",
        display: "Suspected intolerance",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future. The drug will be resumed when the patient has sufficiently recovered from the surgery.
     */
    medicationdispense_status_reason_PatientScheduledForSurgery: {
        code: "surg",
        display: "Patient scheduled for surgery",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    },
    /**
     * The patient was previously receiving a medication contraindicated with the current medication. The current medication will remain on hold until the prior medication has been cleansed from their system.
     */
    medicationdispense_status_reason_Washout: {
        code: "washout",
        display: "Washout",
        system: "http://terminology.hl7.org/fhir/CodeSystem/medicationdispense-status-reason"
    }
};
