// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Specifies contact information for a person or organization.
 */
export class ContactDetail extends fhir.FhirElement {
    /**
     * Default constructor for ContactDetail - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["name"]) {
            this.name = source.name;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source["telecom"]) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
    }
    /**
     * Check if the current ContactDetail contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ContactDetail from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ContactDetail(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ContactDetail is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
//# sourceMappingURL=ContactDetail.js.map