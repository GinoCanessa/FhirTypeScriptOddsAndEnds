// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: CodeableConcept

import * as fhir from '../fhir.js'


/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export type ICodeableConcept = fhir.IFhirElement & { 
  /**
   * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
   */
  coding?: fhir.ICoding[]|undefined;
  /**
   * Very often the text is the same as a displayName of one of the codings.
   */
  text?: string|undefined;
  /**
   * Extended properties for primitive element: CodeableConcept.text
   */
  _text?: fhir.IFhirElement|undefined;
}

/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export class CodeableConcept extends fhir.FhirElement implements ICodeableConcept {
  /**
   * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
   */
  public coding?: fhir.Coding[]|undefined;
  /**
   * Very often the text is the same as a displayName of one of the codings.
   */
  public text?: string|undefined;
  /**
   * Extended properties for primitive element: CodeableConcept.text
   */
  public _text?: fhir.FhirElement|undefined;
  /**
   * Default constructor for CodeableConcept - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ICodeableConcept> = { }) {
    super(source);
    if (source['coding']) { this.coding = source.coding.map((x) => new fhir.Coding(x)); }
    if (source['text']) { this.text = source.text; }
    if (source['_text']) { this._text = new fhir.FhirElement(source._text!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["coding"]) { this.coding.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_text"]) { results.push(...this._text.doModelValidation()); }
    return results;
  }
}
