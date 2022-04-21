import * as fhir from '../fhir.js';
/**
 * A duration of time during which an organism (or a process) has existed.
 */
export declare type IAge = fhir.IQuantity & {};
/**
 * A duration of time during which an organism (or a process) has existed.
 */
export declare class Age extends fhir.Quantity implements IAge {
    /**
     * Default constructor for Age - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IAge>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Age.d.ts.map