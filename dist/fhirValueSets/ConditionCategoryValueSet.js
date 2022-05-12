// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/condition-category|4.0.1
import { Coding } from '../fhir.js';
/**
 * Preferred value set for Condition Categories.
 */
export const ConditionCategoryValueSet = {
    /**
     * encounter-diagnosis: A point in time diagnosis (e.g. from a physician or nurse) in context of an encounter.
     */
    EncounterDiagnosis: new Coding({
        display: "Encounter Diagnosis",
        code: "encounter-diagnosis",
        system: "http://terminology.hl7.org/CodeSystem/condition-category",
    }),
    /**
     * problem-list-item: An item on a problem list that can be managed over time and can be expressed by a practitioner (e.g. physician, nurse), patient, or related person.
     */
    ProblemListItem: new Coding({
        display: "Problem List Item",
        code: "problem-list-item",
        system: "http://terminology.hl7.org/CodeSystem/condition-category",
    }),
};
/**
 * Preferred value set for Condition Categories.
 */
//# sourceMappingURL=ConditionCategoryValueSet.js.map