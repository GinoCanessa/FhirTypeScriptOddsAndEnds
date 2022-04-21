import { Coding } from '../fhir.js';
/**
 * The status of a resource narrative.
 */
export declare const NarrativeStatusValueSet: {
    /**
     * additional: The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.
     */
    readonly Additional: Coding;
    /**
     * empty: The contents of the narrative are some equivalent of "No human-readable text provided in this case".
     */
    readonly Empty: Coding;
    /**
     * extensions: The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.
     */
    readonly Extensions: Coding;
    /**
     * generated: The contents of the narrative are entirely generated from the core elements in the content.
     */
    readonly Generated: Coding;
};
/**
 * The status of a resource narrative.
 */
export declare type NarrativeStatusValueSetType = typeof NarrativeStatusValueSet;
/**
 * The status of a resource narrative.
 */
export declare enum NarrativeStatusValueSetEnum {
    /**
     * additional: The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.
     */
    Additional = "additional",
    /**
     * empty: The contents of the narrative are some equivalent of "No human-readable text provided in this case".
     */
    Empty = "empty",
    /**
     * extensions: The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.
     */
    Extensions = "extensions",
    /**
     * generated: The contents of the narrative are entirely generated from the core elements in the content.
     */
    Generated = "generated"
}
//# sourceMappingURL=NarrativeStatusValueSet.d.ts.map