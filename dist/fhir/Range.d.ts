import * as fhir from '../fhir';
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export declare type IRange = fhir.IFhirElement & {
    /**
     * If the high element is missing, the high boundary is not known.
     */
    high?: fhir.IQuantity | undefined;
    /**
     * If the low element is missing, the low boundary is not known.
     */
    low?: fhir.IQuantity | undefined;
};
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
     * Default constructor for Range - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IRange>);
    /**
     * Check if the current Range contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Range from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IRange): Range;
}
//# sourceMappingURL=Range.d.ts.map