import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Duration type.
 */
export interface DurationArgs extends fhir.QuantityArgs {
}
/**
 * A length of time.
 */
export declare class Duration extends fhir.Quantity {
    readonly __dataType: string;
    /**
     * Default constructor for Duration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DurationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Duration.d.ts.map