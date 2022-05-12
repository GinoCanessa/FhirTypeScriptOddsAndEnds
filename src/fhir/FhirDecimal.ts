// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Primitive: decimal

import * as fhir from '../fhir.js';

import { IssueTypeValueSetEnum, IssueSeverityValueSetEnum } from '../valueSetEnums.js';

/**
 * Do not use an IEEE type floating point type, instead use something that works like a true decimal, with inbuilt precision (e.g. Java BigInteger)
 */
export interface FhirDecimalArgs extends fhir.FhirPrimitiveArgs {
  /**
   * Do not use an IEEE type floating point type, instead use something that works like a true decimal, with inbuilt precision (e.g. Java BigInteger)
   */
  value?:FhirDecimal|number|undefined;
}

/**
 * Do not use an IEEE type floating point type, instead use something that works like a true decimal, with inbuilt precision (e.g. Java BigInteger)
 */
export class FhirDecimal extends fhir.FhirPrimitive {
  readonly __dataType:string = 'Decimal';
  readonly __jsonType:string = 'number';
  // published regex: -?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?
  static readonly __regex:RegExp = /^-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][+-]?[0-9]+)?$/
  /**
   * A decimal value, represented as a JS number
   */
  value?:number|null|undefined;
  /**
     * Create a FhirDecimal
     * @param value Do not use an IEEE type floating point type, instead use something that works like a true decimal, with inbuilt precision (e.g. Java BigInteger)
     * @param id Unique id for inter-element referencing (uncommon on primitives)
     * @param extension Additional content defined by implementations
     * @param options Options to pass to extension constructors
  */
  constructor(source:Partial<FhirDecimalArgs> = {}, options:fhir.FhirConstructorOptions = { } ) {
    super(source, options);
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if ((this.value) && (!FhirDecimal.__regex.test(this.value.toString()))) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.InvalidContent,  diagnostics: "Invalid value in primitive type decimal", }));
    }
    return outcome;
  }
  /**
   * Returns a string representation of an object.
   * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
   */
  public toString(radix?:number):string { return (this.value ?? NaN).toString(radix); }
  /**
   * Returns a string representing a number in fixed-point notation.
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  public toFixed(fractionDigits?:number):string { return (this.value ?? NaN).toFixed(fractionDigits); }
  /**
   * Returns a string containing a number represented in exponential notation.
   * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
   */
  public toExponential(fractionDigits?:number):string { return (this.value ?? NaN).toExponential(fractionDigits); }
  /**
   * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
   * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
   */
  public toPrecision(precision?:number):string { return (this.value ?? NaN).toPrecision(precision); }
  /**
   * Returns the primitive value of the specified object.
   */
  public valueOf():number { return (this.value ?? NaN); }
}
