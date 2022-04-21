import * as fhir from '../fhir.js';
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export declare type IRange = fhir.IFhirElement & {
    /**
     * If the low element is missing, the low boundary is not known.
     */
    low?: fhir.IQuantity | undefined;
    /**
     * If the high element is missing, the high boundary is not known.
     */
    high?: fhir.IQuantity | undefined;
};
/**
 * A set of ordered Quantities defined by a low and high limit.
 */
export declare class Range extends fhir.FhirElement implements IRange {
    /**
     * If the low element is missing, the low boundary is not known.
     */
    low?: fhir.Quantity | undefined;
    /**
     * If the high element is missing, the high boundary is not known.
     */
    high?: fhir.Quantity | undefined;
    /**
     * Default constructor for Range - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IRange>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Range.d.ts.map