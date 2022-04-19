// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * A reference from one resource to another.
 */
export class Reference extends fhir.FhirElement {
    /**
     * Default constructor for Reference - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["display"]) {
            this.display = source.display;
        }
        if (source["_display"]) {
            this._display = new fhir.FhirElement(source._display);
        }
        if (source["identifier"]) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source["reference"]) {
            this.reference = source.reference;
        }
        if (source["_reference"]) {
            this._reference = new fhir.FhirElement(source._reference);
        }
        if (source["type"]) {
            this.type = source.type;
        }
        if (source["_type"]) {
            this._type = new fhir.FhirElement(source._type);
        }
    }
    /**
     * Check if the current Reference contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Reference from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new Reference(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `Reference is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Create a reference from an existing resource
     */
    static FromResource(source, baseUrl = '') {
        if (baseUrl.endsWith('/')) {
            return new Reference({
                type: source.resourceType,
                reference: baseUrl + source.resourceType + '/' + source.id,
            });
        }
        return new Reference({
            type: source.resourceType,
            reference: ((baseUrl.length > 0) ? (baseUrl + '/') : '') + source.resourceType + '/' + source.id,
        });
    }
}
//# sourceMappingURL=Reference.js.map