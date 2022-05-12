import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Distance type.
 */
export interface DistanceArgs extends fhir.QuantityArgs {
}
/**
 * A length - a value with a unit that is a physical distance.
 */
export declare class Distance extends fhir.Quantity {
    readonly __dataType: string;
    /**
     * Default constructor for Distance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DistanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Distance.d.ts.map