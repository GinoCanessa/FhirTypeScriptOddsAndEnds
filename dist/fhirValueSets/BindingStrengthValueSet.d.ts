import { Coding } from '../fhir.js';
/**
 * Indication of the degree of conformance expectations associated with a binding.
 */
export declare const BindingStrengthValueSet: {
    /**
     * example: Instances are not expected or even encouraged to draw from the specified value set.  The value set merely provides examples of the types of concepts intended to be included.
     */
    readonly Example: Coding;
    /**
     * extensible: To be conformant, the concept in this element SHALL be from the specified value set if any of the codes within the value set can apply to the concept being communicated.  If the value set does not cover the concept (based on human review), alternate codings (or, data type allowing, text) may be included instead.
     */
    readonly Extensible: Coding;
    /**
     * preferred: Instances are encouraged to draw from the specified codes for interoperability purposes but are not required to do so to be considered conformant.
     */
    readonly Preferred: Coding;
    /**
     * required: To be conformant, the concept in this element SHALL be from the specified value set.
     */
    readonly Required: Coding;
};
/**
 * Indication of the degree of conformance expectations associated with a binding.
 */
export declare type BindingStrengthValueSetType = typeof BindingStrengthValueSet;
/**
 * Indication of the degree of conformance expectations associated with a binding.
 */
//# sourceMappingURL=BindingStrengthValueSet.d.ts.map