/**
 * Preferred value set for Condition Clinical Status.
 */
export var ConditionClinical = {
    /**
     * The subject is currently experiencing the symptoms of the condition or there is evidence of the condition.
     */
    condition_clinical_Active: {
        code: "active",
        display: "Active",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical"
    },
    /**
     * The subject is no longer experiencing the symptoms of the condition or there is no longer evidence of the condition.
     */
    condition_clinical_Inactive: {
        code: "inactive",
        display: "Inactive",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical"
    },
    /**
     * The subject is experiencing a re-occurence or repeating of a previously resolved condition, e.g. urinary tract infection, pancreatitis, cholangitis, conjunctivitis.
     */
    condition_clinical_Recurrence: {
        code: "recurrence",
        display: "Recurrence",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical"
    },
    /**
     * The subject is experiencing a return of a condition, or signs and symptoms after a period of improvement or remission, e.g. relapse of cancer, multiple sclerosis, rheumatoid arthritis, systemic lupus erythematosus, bipolar disorder, [psychotic relapse of] schizophrenia, etc.
     */
    condition_clinical_Relapse: {
        code: "relapse",
        display: "Relapse",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical"
    },
    /**
     * The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.
     */
    condition_clinical_Remission: {
        code: "remission",
        display: "Remission",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical"
    },
    /**
     * The subject is no longer experiencing the symptoms of the condition and there is a negligible perceived risk of the symptoms returning.
     */
    condition_clinical_Resolved: {
        code: "resolved",
        display: "Resolved",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical"
    }
};
