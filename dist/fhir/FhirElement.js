// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Element
import * as fhir from '../fhir.js';
/**
 * Base definition for all elements in a resource.
 */
export class FhirElement {
    /**
     * Default constructor for FhirElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        if (source['id']) {
            this.id = source.id;
        }
        if (source['_id']) {
            this._id = new fhir.FhirElement(source._id);
        }
        if (source['extension']) {
            this.extension = source.extension.map((x) => new fhir.Extension(x));
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = [];
        if (this["_id"]) {
            results.push(...this._id.doModelValidation());
        }
        if (this["extension"]) {
            this.extension.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
//# sourceMappingURL=FhirElement.js.map