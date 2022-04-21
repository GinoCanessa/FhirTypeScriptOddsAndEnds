import { Coding } from '../fhir.js';
/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare const VariableTypeValueSet: {
    /**
     * continuous: The variable is a continuous result such as a quantity.
     */
    readonly Continuous: Coding;
    /**
     * descriptive: The variable is described narratively rather than quantitatively.
     */
    readonly Descriptive: Coding;
    /**
     * dichotomous: The variable is dichotomous, such as present or absent.
     */
    readonly Dichotomous: Coding;
};
/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare type VariableTypeValueSetType = typeof VariableTypeValueSet;
/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export declare enum VariableTypeValueSetEnum {
    /**
     * continuous: The variable is a continuous result such as a quantity.
     */
    Continuous = "continuous",
    /**
     * descriptive: The variable is described narratively rather than quantitatively.
     */
    Descriptive = "descriptive",
    /**
     * dichotomous: The variable is dichotomous, such as present or absent.
     */
    Dichotomous = "dichotomous"
}
//# sourceMappingURL=VariableTypeValueSet.d.ts.map