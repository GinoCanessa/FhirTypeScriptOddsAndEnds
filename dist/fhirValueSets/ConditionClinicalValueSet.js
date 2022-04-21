// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/condition-clinical|4.0.1
import { Coding } from '../fhir.js';
/**
 * Preferred value set for Condition Clinical Status.
 */
export const ConditionClinicalValueSet = {
    /**
     * active: The subject is currently experiencing the symptoms of the condition or there is evidence of the condition.
     */
    Active: new Coding({
        display: "Active",
        code: "active",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
    }),
    /**
     * inactive: The subject is no longer experiencing the symptoms of the condition or there is no longer evidence of the condition.
     */
    Inactive: new Coding({
        display: "Inactive",
        code: "inactive",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
    }),
    /**
     * recurrence: The subject is experiencing a re-occurence or repeating of a previously resolved condition, e.g. urinary tract infection, pancreatitis, cholangitis, conjunctivitis.
     */
    Recurrence: new Coding({
        display: "Recurrence",
        code: "recurrence",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
    }),
    /**
     * relapse: The subject is experiencing a return of a condition, or signs and symptoms after a period of improvement or remission, e.g. relapse of cancer, multiple sclerosis, rheumatoid arthritis, systemic lupus erythematosus, bipolar disorder, [psychotic relapse of] schizophrenia, etc.
     */
    Relapse: new Coding({
        display: "Relapse",
        code: "relapse",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
    }),
    /**
     * remission: The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.
     */
    Remission: new Coding({
        display: "Remission",
        code: "remission",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
    }),
    /**
     * resolved: The subject is no longer experiencing the symptoms of the condition and there is a negligible perceived risk of the symptoms returning.
     */
    Resolved: new Coding({
        display: "Resolved",
        code: "resolved",
        system: "http://terminology.hl7.org/CodeSystem/condition-clinical",
    }),
};
/**
 * Preferred value set for Condition Clinical Status.
 */
export var ConditionClinicalValueSetEnum;
(function (ConditionClinicalValueSetEnum) {
    /**
     * active: The subject is currently experiencing the symptoms of the condition or there is evidence of the condition.
     */
    ConditionClinicalValueSetEnum["Active"] = "active";
    /**
     * inactive: The subject is no longer experiencing the symptoms of the condition or there is no longer evidence of the condition.
     */
    ConditionClinicalValueSetEnum["Inactive"] = "inactive";
    /**
     * recurrence: The subject is experiencing a re-occurence or repeating of a previously resolved condition, e.g. urinary tract infection, pancreatitis, cholangitis, conjunctivitis.
     */
    ConditionClinicalValueSetEnum["Recurrence"] = "recurrence";
    /**
     * relapse: The subject is experiencing a return of a condition, or signs and symptoms after a period of improvement or remission, e.g. relapse of cancer, multiple sclerosis, rheumatoid arthritis, systemic lupus erythematosus, bipolar disorder, [psychotic relapse of] schizophrenia, etc.
     */
    ConditionClinicalValueSetEnum["Relapse"] = "relapse";
    /**
     * remission: The subject is no longer experiencing the symptoms of the condition, but there is a risk of the symptoms returning.
     */
    ConditionClinicalValueSetEnum["Remission"] = "remission";
    /**
     * resolved: The subject is no longer experiencing the symptoms of the condition and there is a negligible perceived risk of the symptoms returning.
     */
    ConditionClinicalValueSetEnum["Resolved"] = "resolved";
})(ConditionClinicalValueSetEnum || (ConditionClinicalValueSetEnum = {}));
//# sourceMappingURL=ConditionClinicalValueSet.js.map