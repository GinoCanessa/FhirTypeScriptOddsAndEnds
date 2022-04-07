/**
 * A code that specifies a type of context being specified by a usage context.
 */
export var UsageContextType = {
    /**
     * The age of the patient. For this context type, the value could be a range that specifies the applicable ages or a code from an appropriate value set such as the MeSH value set http://terminology.hl7.org/ValueSet/v3-AgeGroupObservationValue.
     */
    usage_context_type_AgeRange: {
        code: "age",
        display: "Age Range",
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type"
    },
    /**
     * The clinical concept(s) addressed by the artifact. For example, disease, diagnostic test interpretation, medication ordering as in http://hl7.org/fhir/ValueSet/condition-code.
     */
    usage_context_type_ClinicalFocus: {
        code: "focus",
        display: "Clinical Focus",
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type"
    },
    /**
     * The gender of the patient. For this context type, appropriate values can be found in the http://hl7.org/fhir/ValueSet/administrative-gender value set.
     */
    usage_context_type_Gender: {
        code: "gender",
        display: "Gender",
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type"
    },
    /**
     * A program/project of work for which this artifact is applicable.
     */
    usage_context_type_Program: {
        code: "program",
        display: "Program",
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type"
    },
    /**
     * The species to which an artifact applies. For example, SNOMED - 387961004 | Kingdom Animalia (organism).
     */
    usage_context_type_Species: {
        code: "species",
        display: "Species",
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type"
    },
    /**
     * The context for the clinical task(s) represented by this artifact. For example, this could be any task context represented by the HL7 ActTaskCode value set http://terminology.hl7.org/ValueSet/v3-ActTaskCode. General categories include: order entry, patient documentation and patient information review.
     */
    usage_context_type_WorkflowTask: {
        code: "task",
        display: "Workflow Task",
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type"
    },
    /**
     * The clinical specialty of the context in which the patient is being treated - For example, PCP, Patient, Cardiologist, Behavioral Professional, Oral Health Professional, Prescriber, etc... taken from a specialty value set such as the NUCC Health Care provider taxonomy value set http://hl7.org/fhir/ValueSet/provider-taxonomy.
     */
    usage_context_type_UserType: {
        code: "user",
        display: "User Type",
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type"
    },
    /**
     * The venue in which an artifact could be used. For example, Outpatient, Inpatient, Home, Nursing home. The code value may originate from the HL7 ServiceDeliveryLocationRoleType value set (http://terminology.hl7.org/ValueSet/v3-ServiceDeliveryLocationRoleType).
     */
    usage_context_type_ClinicalVenue: {
        code: "venue",
        display: "Clinical Venue",
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type"
    },
    /**
     * The settings in which the artifact is intended for use. For example, admission, pre-op, etc. For example, the ActEncounterCode value set http://terminology.hl7.org/ValueSet/v3-ActEncounterCode.
     */
    usage_context_type_WorkflowSetting: {
        code: "workflow",
        display: "Workflow Setting",
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type"
    }
};
