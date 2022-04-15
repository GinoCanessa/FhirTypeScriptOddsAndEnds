import * as fhir from '../fhir';
/**
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 */
export interface IRatio extends fhir.IFhirElement {
    /**
     * The value of the denominator.
     */
    denominator?: fhir.IQuantity | undefined;
    /**
     * The value of the numerator.
     */
    numerator?: fhir.IQuantity | undefined;
}
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
     * Default constructor for Ratio - initializes required elements to null.
     */
    constructor();
    /**
     * Factory function to create a Ratio from an object that MAY NOT contain all required elements.
     */
    static FactoryCreate(source: Partial<fhir.IRatio>): Ratio;
    /**
     * Check if the current Ratio contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Ratio from an object that MUST contain all required elements.
     */
    static FactoryCreateStrict(source: fhir.IRatio): Ratio;
}
//# sourceMappingURL=Ratio.d.ts.map