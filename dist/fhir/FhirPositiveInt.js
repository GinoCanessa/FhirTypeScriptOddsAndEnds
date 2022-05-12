// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Primitive: positiveInt
import * as fhir from '../fhir.js';
import { IssueTypeValueSetEnum, IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * An integer with a value that is positive (e.g. &gt;0)
 */
export class FhirPositiveInt extends fhir.FhirPrimitive {
    /**
       * Create a FhirPositiveInt
       * @param value An integer with a value that is positive (e.g. >0)
       * @param id Unique id for inter-element referencing (uncommon on primitives)
       * @param extension Additional content defined by implementations
       * @param options Options to pass to extension constructors
    */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'PositiveInt';
        this.__jsonType = 'number';
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if ((this.value) && (!FhirPositiveInt.__regex.test(this.value.toString()))) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.InvalidContent, diagnostics: "Invalid value in primitive type positiveInt", }));
        }
        return outcome;
    }
    /**
     * Returns a string representation of an object.
     * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
     */
    toString(radix) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : NaN).toString(radix); }
    /**
     * Returns a string representing a number in fixed-point notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toFixed(fractionDigits) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : NaN).toFixed(fractionDigits); }
    /**
     * Returns a string containing a number represented in exponential notation.
     * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
     */
    toExponential(fractionDigits) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : NaN).toExponential(fractionDigits); }
    /**
     * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
     * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
     */
    toPrecision(precision) { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : NaN).toPrecision(precision); }
    /**
     * Returns the primitive value of the specified object.
     */
    valueOf() { var _a; return ((_a = this.value) !== null && _a !== void 0 ? _a : NaN); }
}
// published regex: [1-9][0-9]*
FhirPositiveInt.__regex = /^[1-9][0-9]*$/;
//# sourceMappingURL=FhirPositiveInt.js.map