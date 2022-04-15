import { Coding } from '../fhir';
/**
 * The status of a resource narrative.
 */
export declare const NarrativeStatusValueSet: {
    /**
     * The contents of the narrative may contain additional information not found in the structured data. Note that there is no computable way to determine what the extra information is, other than by human inspection.
     */
    narrative_status_Additional: Coding;
    /**
     * The contents of the narrative are some equivalent of "No human-readable text provided in this case".
     */
    narrative_status_Empty: Coding;
    /**
     * The contents of the narrative are entirely generated from the core elements in the content and some of the content is generated from extensions. The narrative SHALL reflect the impact of all modifier extensions.
     */
    narrative_status_Extensions: Coding;
    /**
     * The contents of the narrative are entirely generated from the core elements in the content.
     */
    narrative_status_Generated: Coding;
};
//# sourceMappingURL=NarrativeStatusValueSet.d.ts.map