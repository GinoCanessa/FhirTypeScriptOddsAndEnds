// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.
 */
export class Signature extends fhir.FhirElement {
    /**
     * Default constructor for Signature - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["data"]) {
            this.data = source.data;
        }
        if (source["_data"]) {
            this._data = new fhir.FhirElement(source._data);
        }
        if (source["onBehalfOf"]) {
            this.onBehalfOf = new fhir.Reference(source.onBehalfOf);
        }
        if (source["sigFormat"]) {
            this.sigFormat = source.sigFormat;
        }
        if (source["_sigFormat"]) {
            this._sigFormat = new fhir.FhirElement(source._sigFormat);
        }
        if (source["targetFormat"]) {
            this.targetFormat = source.targetFormat;
        }
        if (source["_targetFormat"]) {
            this._targetFormat = new fhir.FhirElement(source._targetFormat);
        }
        this.type = null;
        if (source["type"]) {
            this.type = source.type.map((x) => new fhir.Coding(x));
        }
        if (this.type === undefined) {
            this.type = null;
        }
        this.when = null;
        if (source["when"]) {
            this.when = source.when;
        }
        if (this.when === undefined) {
            this.when = null;
        }
        if (source["_when"]) {
            this._when = new fhir.FhirElement(source._when);
        }
        this.who = null;
        if (source["who"]) {
            this.who = new fhir.Reference(source.who);
        }
        if (this.who === undefined) {
            this.who = null;
        }
    }
    /**
     * Check if the current Signature contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if ((!this["type"]) || (this["type"].length === 0)) {
            missingElements.push("type");
        }
        if (this["when"] === undefined) {
            missingElements.push("when");
        }
        if (this["who"] === undefined) {
            missingElements.push("who");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Signature from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new Signature(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `Signature is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
//# sourceMappingURL=Signature.js.map