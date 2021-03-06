// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/medicationrequest-status-reason|4.0.1
import { Coding } from '../fhir.js';
/**
 * MedicationRequest Status Reason Codes
 */
export const MedicationrequestStatusReasonValueSet = {
    /**
     * altchoice: This therapy has been ordered as a backup to a preferred therapy. This order will be released when and if the preferred therapy is unsuccessful.
     */
    TryAnotherTreatmentFirst: new Coding({
        display: "Try another treatment first",
        code: "altchoice",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * clarif: Clarification is required before the order can be acted upon.
     */
    PrescriptionRequiresClarification: new Coding({
        display: "Prescription requires clarification",
        code: "clarif",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * drughigh: The current level of the medication in the patient's system is too high. The medication is suspended to allow the level to subside to a safer level.
     */
    DrugLevelTooHigh: new Coding({
        display: "Drug level too high",
        code: "drughigh",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * hospadm: The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.
     */
    AdmissionToHospital: new Coding({
        display: "Admission to hospital",
        code: "hospadm",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * labint: The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.
     */
    LabInterferenceIssues: new Coding({
        display: "Lab interference issues",
        code: "labint",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * non-avail: Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.
     */
    PatientNotAvailable: new Coding({
        display: "Patient not available",
        code: "non-avail",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * preg: The patient is pregnant or breast feeding. The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.
     */
    ParentIsPregnantBreastFeeding: new Coding({
        display: "Parent is pregnant/breast feeding",
        code: "preg",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * salg: The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    Allergy: new Coding({
        display: "Allergy",
        code: "salg",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * sddi: The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    DrugInteractsWithAnotherDrug: new Coding({
        display: "Drug interacts with another drug",
        code: "sddi",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * sdupther: The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    DuplicateTherapy: new Coding({
        display: "Duplicate therapy",
        code: "sdupther",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * sintol: The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.
     */
    SuspectedIntolerance: new Coding({
        display: "Suspected intolerance",
        code: "sintol",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * surg: The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future. The drug will be resumed when the patient has sufficiently recovered from the surgery.
     */
    PatientScheduledForSurgery: new Coding({
        display: "Patient scheduled for surgery.",
        code: "surg",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
    /**
     * washout: The patient was previously receiving a medication contraindicated with the current medication. The current medication will remain on hold until the prior medication has been cleansed from their system.
     */
    WaitingForOldDrugToWashOut: new Coding({
        display: "Waiting for old drug to wash out",
        code: "washout",
        system: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
    }),
};
/**
 * MedicationRequest Status Reason Codes
 */
//# sourceMappingURL=MedicationrequestStatusReasonValueSet.js.map