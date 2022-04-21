import { Coding } from '../fhir.js';
/**
 * High-level categorization of the definition, used for searching, sorting, and filtering.
 */
export declare const DefinitionTopicValueSet: {
    /**
     * assessment: The definition is related to assessment of the patient.
     */
    readonly Assessment: Coding;
    /**
     * education: The definition is related to education of the patient.
     */
    readonly Education: Coding;
    /**
     * treatment: The definition is related to treatment of the patient.
     */
    readonly Treatment: Coding;
};
/**
 * High-level categorization of the definition, used for searching, sorting, and filtering.
 */
export declare type DefinitionTopicValueSetType = typeof DefinitionTopicValueSet;
/**
 * High-level categorization of the definition, used for searching, sorting, and filtering.
 */
export declare enum DefinitionTopicValueSetEnum {
    /**
     * assessment: The definition is related to assessment of the patient.
     */
    Assessment = "assessment",
    /**
     * education: The definition is related to education of the patient.
     */
    Education = "education",
    /**
     * treatment: The definition is related to treatment of the patient.
     */
    Treatment = "treatment"
}
//# sourceMappingURL=DefinitionTopicValueSet.d.ts.map