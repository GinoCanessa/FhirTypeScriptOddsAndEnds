import { Coding } from '../fhir.js';
/**
 * Defines which action to take if there is no match in the group.
 */
export declare const ConceptmapUnmappedModeValueSet: {
    /**
     * fixed: Use the code explicitly provided in the group.unmapped.
     */
    readonly FixedCode: Coding;
    /**
     * other-map: Use the map identified by the canonical URL in the url element.
     */
    readonly OtherMap: Coding;
    /**
     * provided: Use the code as provided in the $translate request.
     */
    readonly ProvidedCode: Coding;
};
/**
 * Defines which action to take if there is no match in the group.
 */
export declare type ConceptmapUnmappedModeValueSetType = typeof ConceptmapUnmappedModeValueSet;
/**
 * Defines which action to take if there is no match in the group.
 */
//# sourceMappingURL=ConceptmapUnmappedModeValueSet.d.ts.map