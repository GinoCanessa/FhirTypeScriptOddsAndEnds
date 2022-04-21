import { Coding } from '../fhir.js';
/**
 * How to interpret the context.
 */
export declare const MapContextTypeValueSet: {
    /**
     * type: The context specifies a type.
     */
    readonly Type: Coding;
    /**
     * variable: The context specifies a variable.
     */
    readonly Variable: Coding;
};
/**
 * How to interpret the context.
 */
export declare type MapContextTypeValueSetType = typeof MapContextTypeValueSet;
/**
 * How to interpret the context.
 */
export declare enum MapContextTypeValueSetEnum {
    /**
     * type: The context specifies a type.
     */
    Type = "type",
    /**
     * variable: The context specifies a variable.
     */
    Variable = "variable"
}
//# sourceMappingURL=MapContextTypeValueSet.d.ts.map