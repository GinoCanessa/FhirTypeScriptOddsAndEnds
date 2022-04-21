import * as fhir from '../fhir.js';
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export declare type IRatio = fhir.IFhirElement & {
    /**
     * The value of the numerator.
     */
    numerator?: fhir.IQuantity | undefined;
    /**
     * The value of the denominator.
     */
    denominator?: fhir.IQuantity | undefined;
};
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export declare class Ratio extends fhir.FhirElement implements IRatio {
    /**
     * The value of the numerator.
     */
    numerator?: fhir.Quantity | undefined;
    /**
     * The value of the denominator.
     */
    denominator?: fhir.Quantity | undefined;
    /**
     * Default constructor for Ratio - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRatio>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Ratio.d.ts.map