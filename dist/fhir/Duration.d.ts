import * as fhir from '../fhir.js';
/**
 * A length of time.
 */
export declare type IDuration = fhir.IQuantity & {};
/**
 * A length of time.
 */
export declare class Duration extends fhir.Quantity implements IDuration {
    /**
     * Default constructor for Duration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDuration>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Duration.d.ts.map