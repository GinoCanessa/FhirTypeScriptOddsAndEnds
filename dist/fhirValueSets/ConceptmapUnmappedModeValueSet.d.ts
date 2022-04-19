import { Coding } from '../fhir';
/**
 * Defines which action to take if there is no match in the group.
 */
export declare const ConceptmapUnmappedModeValueSet: {
    /**
     * Use the code explicitly provided in the group.unmapped.
     */
    conceptmap_unmapped_mode_FixedCode: Coding;
    /**
     * Use the map identified by the canonical URL in the url element.
     */
    conceptmap_unmapped_mode_OtherMap: Coding;
    /**
     * Use the code as provided in the $translate request.
     */
    conceptmap_unmapped_mode_ProvidedCode: Coding;
};
//# sourceMappingURL=ConceptmapUnmappedModeValueSet.d.ts.map