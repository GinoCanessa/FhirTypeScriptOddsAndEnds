// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: CodeableConcept
import * as fhir from '../fhir.js';
/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export class CodeableConcept extends fhir.FhirElement {
    /**
     * Default constructor for CodeableConcept - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['coding']) {
            this.coding = source.coding.map((x) => new fhir.Coding(x));
        }
        if (source['text']) {
            this.text = source.text;
        }
        if (source['_text']) {
            this._text = new fhir.FhirElement(source._text);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["coding"]) {
            this.coding.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_text"]) {
            results.push(...this._text.doModelValidation());
        }
        return results;
    }
}
//# sourceMappingURL=CodeableConcept.js.map