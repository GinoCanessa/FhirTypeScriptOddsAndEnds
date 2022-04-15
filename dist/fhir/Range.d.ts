import * as fhir from '../fhir';
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export interface IRange extends fhir.IFhirElement {
    /**
     * If the high element is missing, the high boundary is not known.
     */
    high?: fhir.IQuantity | undefined;
    /**
     * If the low element is missing, the low boundary is not known.
     */
    low?: fhir.IQuantity | undefined;
}
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export declare class Range extends fhir.FhirElement implements fhir.IRange {
    /**
     * If the high element is missing, the high boundary is not known.
     */
    high?: fhir.Quantity | undefined;
    /**
     * If the low element is missing, the low boundary is not known.
     */
    low?: fhir.Quantity | undefined;
    /**
     * Default constructor for Range - initializes required elements to null.
     */
    constructor();
    /**
     * Factory function to create a Range from an object that MAY NOT contain all required elements.
     */
    static FactoryCreate(source: Partial<fhir.IRange>): Range;
    /**
     * Check if the current Range contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Range from an object that MUST contain all required elements.
     */
    static FactoryCreateStrict(source: fhir.IRange): Range;
}
//# sourceMappingURL=Range.d.ts.map