import * as fhir from '../fhir.js';
/**
 * A length - a value with a unit that is a physical distance.
 */
export declare type IDistance = fhir.IQuantity & {};
/**
 * A length - a value with a unit that is a physical distance.
 */
export declare class Distance extends fhir.Quantity implements IDistance {
    /**
     * Default constructor for Distance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDistance>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Distance.d.ts.map