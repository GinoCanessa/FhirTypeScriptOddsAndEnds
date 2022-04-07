/**
 * A list of all the event resource types defined in this version of the FHIR specification.
 */
export var EventResourceTypes = {
    /**
     * Item containing charge code(s) associated with the provision of healthcare provider products.
     */
    event_resource_types_ChargeItem: {
        code: "ChargeItem",
        display: "ChargeItem",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Remittance resource.
     */
    event_resource_types_ClaimResponse: {
        code: "ClaimResponse",
        display: "ClaimResponse",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * A clinical assessment performed when planning treatments and management strategies for a patient.
     */
    event_resource_types_ClinicalImpression: {
        code: "ClinicalImpression",
        display: "ClinicalImpression",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * A record of information transmitted from a sender to a receiver.
     */
    event_resource_types_Communication: {
        code: "Communication",
        display: "Communication",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * A set of resources composed into a single coherent clinical statement with clinical attestation.
     */
    event_resource_types_Composition: {
        code: "Composition",
        display: "Composition",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Detailed information about conditions, problems or diagnoses.
     */
    event_resource_types_Condition: {
        code: "Condition",
        display: "Condition",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * A healthcare consumer's policy choices to permits or denies recipients or roles to perform actions for specific purposes and periods of time.
     */
    event_resource_types_Consent: {
        code: "Consent",
        display: "Consent",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Insurance or medical plan or a payment agreement.
     */
    event_resource_types_Coverage: {
        code: "Coverage",
        display: "Coverage",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Record of use of a device.
     */
    event_resource_types_DeviceUseStatement: {
        code: "DeviceUseStatement",
        display: "DeviceUseStatement",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports.
     */
    event_resource_types_DiagnosticReport: {
        code: "DiagnosticReport",
        display: "DiagnosticReport",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * A list that defines a set of documents.
     */
    event_resource_types_DocumentManifest: {
        code: "DocumentManifest",
        display: "DocumentManifest",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * A reference to a document.
     */
    event_resource_types_DocumentReference: {
        code: "DocumentReference",
        display: "DocumentReference",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * An interaction during which services are provided to the patient.
     */
    event_resource_types_Encounter: {
        code: "Encounter",
        display: "Encounter",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * EnrollmentResponse resource.
     */
    event_resource_types_EnrollmentResponse: {
        code: "EnrollmentResponse",
        display: "EnrollmentResponse",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility.
     */
    event_resource_types_EpisodeOfCare: {
        code: "EpisodeOfCare",
        display: "EpisodeOfCare",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Explanation of Benefit resource.
     */
    event_resource_types_ExplanationOfBenefit: {
        code: "ExplanationOfBenefit",
        display: "ExplanationOfBenefit",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Information about patient's relatives, relevant for patient.
     */
    event_resource_types_FamilyMemberHistory: {
        code: "FamilyMemberHistory",
        display: "FamilyMemberHistory",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * The formal response to a guidance request.
     */
    event_resource_types_GuidanceResponse: {
        code: "GuidanceResponse",
        display: "GuidanceResponse",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * A set of images produced in single study (one or more series of references images).
     */
    event_resource_types_ImagingStudy: {
        code: "ImagingStudy",
        display: "ImagingStudy",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Immunization event information.
     */
    event_resource_types_Immunization: {
        code: "Immunization",
        display: "Immunization",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Results of a measure evaluation.
     */
    event_resource_types_MeasureReport: {
        code: "MeasureReport",
        display: "MeasureReport",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.
     */
    event_resource_types_Media: {
        code: "Media",
        display: "Media",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Administration of medication to a patient.
     */
    event_resource_types_MedicationAdministration: {
        code: "MedicationAdministration",
        display: "MedicationAdministration",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Dispensing a medication to a named patient.
     */
    event_resource_types_MedicationDispense: {
        code: "MedicationDispense",
        display: "MedicationDispense",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Record of medication being taken by a patient.
     */
    event_resource_types_MedicationStatement: {
        code: "MedicationStatement",
        display: "MedicationStatement",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Measurements and simple assertions.
     */
    event_resource_types_Observation: {
        code: "Observation",
        display: "Observation",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * PaymentNotice request.
     */
    event_resource_types_PaymentNotice: {
        code: "PaymentNotice",
        display: "PaymentNotice",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * PaymentReconciliation resource.
     */
    event_resource_types_PaymentReconciliation: {
        code: "PaymentReconciliation",
        display: "PaymentReconciliation",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * An action that is being or was performed on a patient.
     */
    event_resource_types_Procedure: {
        code: "Procedure",
        display: "Procedure",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * ProcessResponse resource.
     */
    event_resource_types_ProcessResponse: {
        code: "ProcessResponse",
        display: "ProcessResponse",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * A structured set of questions and their answers.
     */
    event_resource_types_QuestionnaireResponse: {
        code: "QuestionnaireResponse",
        display: "QuestionnaireResponse",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Potential outcomes for a subject with likelihood.
     */
    event_resource_types_RiskAssessment: {
        code: "RiskAssessment",
        display: "RiskAssessment",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * Delivery of bulk Supplies.
     */
    event_resource_types_SupplyDelivery: {
        code: "SupplyDelivery",
        display: "SupplyDelivery",
        system: "http://hl7.org/fhir/event-resource-types"
    },
    /**
     * A task to be performed.
     */
    event_resource_types_Task: {
        code: "Task",
        display: "Task",
        system: "http://hl7.org/fhir/event-resource-types"
    }
};