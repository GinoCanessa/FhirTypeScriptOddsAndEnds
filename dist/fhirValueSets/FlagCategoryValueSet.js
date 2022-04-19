// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Example list of general categories for flagged issues. (Not complete or necessarily appropriate.)
 */
export const FlagCategoryValueSet = {
    /**
     * Flags related to administrative and financial processes.
     */
    flag_category_Administrative: new Coding({
        code: "admin",
        display: "Administrative",
        system: "http://terminology.hl7.org/CodeSystem/flag-category"
    }),
    /**
     * Flags related to subject's advance directives.
     */
    flag_category_AdvanceDirective: new Coding({
        code: "advance-directive",
        display: "Advance Directive",
        system: "http://terminology.hl7.org/CodeSystem/flag-category"
    }),
    /**
     * Flags related to behavior.
     */
    flag_category_Behavioral: new Coding({
        code: "behavioral",
        display: "Behavioral",
        system: "http://terminology.hl7.org/CodeSystem/flag-category"
    }),
    /**
     * Flags related to the subject's clinical data.
     */
    flag_category_Clinical: new Coding({
        code: "clinical",
        display: "Clinical",
        system: "http://terminology.hl7.org/CodeSystem/flag-category"
    }),
    /**
     * Flags related to coming into contact with the patient.
     */
    flag_category_SubjectContact: new Coding({
        code: "contact",
        display: "Subject Contact",
        system: "http://terminology.hl7.org/CodeSystem/flag-category"
    }),
    /**
     * Flags related to the subject's dietary needs.
     */
    flag_category_Diet: new Coding({
        code: "diet",
        display: "Diet",
        system: "http://terminology.hl7.org/CodeSystem/flag-category"
    }),
    /**
     * Flags related to the subject's medications.
     */
    flag_category_Drug: new Coding({
        code: "drug",
        display: "Drug",
        system: "http://terminology.hl7.org/CodeSystem/flag-category"
    }),
    /**
     * Flags related to performing laboratory tests and related processes (e.g. phlebotomy).
     */
    flag_category_Lab: new Coding({
        code: "lab",
        display: "Lab",
        system: "http://terminology.hl7.org/CodeSystem/flag-category"
    }),
    /**
     * Flags related to research.
     */
    flag_category_Research: new Coding({
        code: "research",
        display: "Research",
        system: "http://terminology.hl7.org/CodeSystem/flag-category"
    }),
    /**
     * Flags related to safety precautions.
     */
    flag_category_Safety: new Coding({
        code: "safety",
        display: "Safety",
        system: "http://terminology.hl7.org/CodeSystem/flag-category"
    }),
};
//# sourceMappingURL=FlagCategoryValueSet.js.map