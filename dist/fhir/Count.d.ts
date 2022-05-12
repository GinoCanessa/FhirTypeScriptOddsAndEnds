import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Count type.
 */
export interface CountArgs extends fhir.QuantityArgs {
}
/**
 * A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.
 */
export declare class Count extends fhir.Quantity {
    readonly __dataType: string;
    /**
     * Default constructor for Count - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CountArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Count.d.ts.map