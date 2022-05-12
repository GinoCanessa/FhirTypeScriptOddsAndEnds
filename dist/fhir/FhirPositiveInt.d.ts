import * as fhir from '../fhir.js';
/**
 * An integer with a value that is positive (e.g. &gt;0)
 */
export interface FhirPositiveIntArgs extends fhir.FhirPrimitiveArgs {
    /**
     * An integer with a value that is positive (e.g. &gt;0)
     */
    value?: FhirPositiveInt | number | undefined;
}
/**
 * An integer with a value that is positive (e.g. &gt;0)
 */
export declare class FhirPositiveInt extends fhir.FhirPrimitive {
    readonly __dataType: string;
    readonly __jsonType: string;
    static readonly __regex: RegExp;
    /**
     * A positiveInt value, represented as a JS number
     */
    value?: number | null | undefined;
    /**
       * Create a FhirPositiveInt
       * @param value An integer with a value that is positive (e.g. >0)
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source?: Partial<FhirPositiveIntArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Returns a string representation of an object.
     * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
     */
    toString(radix?: number): string;
    /**
     * Returns a string representing a number in fixed-point notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toFixed(fractionDigits?: number): string;
    /**
     * Returns a string containing a number represented in exponential notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toExponential(fractionDigits?: number): string;
    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
     * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
     */
    toPrecision(precision?: number): string;
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf(): number;
}
//# sourceMappingURL=FhirPositiveInt.d.ts.map