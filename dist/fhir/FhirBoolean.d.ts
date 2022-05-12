import * as fhir from '../fhir.js';
/**
 * Value of "true" or "false"
 */
export interface FhirBooleanArgs extends fhir.FhirPrimitiveArgs {
    /**
     * Value of "true" or "false"
     */
    value?: FhirBoolean | boolean | undefined;
}
/**
 * Value of "true" or "false"
 */
export declare class FhirBoolean extends fhir.FhirPrimitive {
    readonly __dataType: string;
    readonly __jsonType: string;
    static readonly __regex: RegExp;
    /**
     * A boolean value, represented as a JS boolean
     */
    value?: boolean | null | undefined;
    /**
       * Create a FhirBoolean
       * @param value Value of "true" or "false"
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirBooleanArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf(): boolean;
}
//# sourceMappingURL=FhirBoolean.d.ts.map