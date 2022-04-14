// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export class CodeableConcept extends fhirModels.Element implements fhirInterfaces.ICodeableConcept {
  /**
   * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
   */
  coding?: fhirModels.Coding[]|undefined;
  /**
   * Very often the text is the same as a displayName of one of the codings.
   */
  text?: string|undefined;
  _text?: fhirModels.Element|undefined;
  /**
   * Default constructor for CodeableConcept from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ICodeableConcept>) {
    super(source);
    if (source["coding"] !== undefined) { this.coding = source.coding.map((x) => new fhirModels.Coding(x)); }
    if (source["text"] !== undefined) { this.text = source.text; }
    if (source["_text"] !== undefined) { this._text = new fhirModels.Element(source._text); }
  }
  /**
   * Factory function to create a CodeableConcept from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ICodeableConcept):CodeableConcept {
    var dest:CodeableConcept = new CodeableConcept(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `CodeableConcept is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current CodeableConcept contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
