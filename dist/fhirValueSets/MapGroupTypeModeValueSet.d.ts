import { Coding } from '../fhir.js';
/**
 * If this is the default rule set to apply for the source type, or this combination of types.
 */
export declare const MapGroupTypeModeValueSet: {
    /**
     * none: This group is not a default group for the types.
     */
    readonly NotADefault: Coding;
    /**
     * type-and-types: This group is a default mapping group for the specified types.
     */
    readonly DefaultForTypePlusCombination: Coding;
    /**
     * types: This group is a default mapping group for the specified types and for the primary source type.
     */
    readonly DefaultForTypeCombination: Coding;
};
/**
 * If this is the default rule set to apply for the source type, or this combination of types.
 */
export declare type MapGroupTypeModeValueSetType = typeof MapGroupTypeModeValueSet;
/**
 * If this is the default rule set to apply for the source type, or this combination of types.
 */
export declare enum MapGroupTypeModeValueSetEnum {
    /**
     * none: This group is not a default group for the types.
     */
    NotADefault = "none",
    /**
     * type-and-types: This group is a default mapping group for the specified types.
     */
    DefaultForTypePlusCombination = "type-and-types",
    /**
     * types: This group is a default mapping group for the specified types and for the primary source type.
     */
    DefaultForTypeCombination = "types"
}
//# sourceMappingURL=MapGroupTypeModeValueSet.d.ts.map