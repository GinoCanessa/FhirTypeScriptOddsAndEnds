import * as fhir from '../fhir';
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export declare type IRatio = fhir.IFhirElement & {
    /**
     * The value of the denominator.
     */
    denominator?: fhir.IQuantity | undefined;
    /**
     * The value of the numerator.
     */
    numerator?: fhir.IQuantity | undefined;
};
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export declare class Ratio extends fhir.FhirElement implements fhir.IRatio {
    /**
     * The value of the denominator.
     */
    denominator?: fhir.Quantity | undefined;
    /**
     * The value of the numerator.
     */
    numerator?: fhir.Quantity | undefined;
    /**
     * Default constructor for Ratio - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRatio>);
    /**
     * Check if the current Ratio contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Ratio from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IRatio): Ratio;
}
//# sourceMappingURL=Ratio.d.ts.map