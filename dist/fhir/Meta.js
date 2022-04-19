// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export class Meta extends fhir.FhirElement {
    /**
     * Default constructor for Meta - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["lastUpdated"]) {
            this.lastUpdated = source.lastUpdated;
        }
        if (source["_lastUpdated"]) {
            this._lastUpdated = new fhir.FhirElement(source._lastUpdated);
        }
        if (source["profile"]) {
            this.profile = source.profile.map((x) => (x));
        }
        if (source["_profile"]) {
            this._profile = source._profile.map((x) => new fhir.FhirElement(x));
        }
        if (source["security"]) {
            this.security = source.security.map((x) => new fhir.Coding(x));
        }
        if (source["source"]) {
            this.source = source.source;
        }
        if (source["_source"]) {
            this._source = new fhir.FhirElement(source._source);
        }
        if (source["tag"]) {
            this.tag = source.tag.map((x) => new fhir.Coding(x));
        }
        if (source["versionId"]) {
            this.versionId = source.versionId;
        }
        if (source["_versionId"]) {
            this._versionId = new fhir.FhirElement(source._versionId);
        }
    }
    /**
     * Check if the current Meta contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Meta from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new Meta(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `Meta is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
//# sourceMappingURL=Meta.js.map