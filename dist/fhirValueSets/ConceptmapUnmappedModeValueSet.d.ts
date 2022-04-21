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
export declare enum ConceptmapUnmappedModeValueSetEnum {
    /**
     * fixed: Use the code explicitly provided in the group.unmapped.
     */
    FixedCode = "fixed",
    /**
     * other-map: Use the map identified by the canonical URL in the url element.
     */
    OtherMap = "other-map",
    /**
     * provided: Use the code as provided in the $translate request.
     */
    ProvidedCode = "provided"
}
//# sourceMappingURL=ConceptmapUnmappedModeValueSet.d.ts.map