/**
 * Preferred value set for Condition Categories.
 */
export var ConditionCategory = {
    /**
     * A point in time diagnosis (e.g. from a physician or nurse) in context of an encounter.
     */
    condition_category_EncounterDiagnosis: {
        code: "encounter-diagnosis",
        display: "Encounter Diagnosis",
        system: "http://terminology.hl7.org/CodeSystem/condition-category"
    },
    /**
     * An item on a problem list that can be managed over time and can be expressed by a practitioner (e.g. physician, nurse), patient, or related person.
     */
    condition_category_ProblemListItem: {
        code: "problem-list-item",
        display: "Problem List Item",
        system: "http://terminology.hl7.org/CodeSystem/condition-category"
    }
};
