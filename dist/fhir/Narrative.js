// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * A human-readable summary of the resource conveying the essential clinical and business information for the resource.
 */
export class Narrative extends fhir.FhirElement {
    /**
     * Default constructor for Narrative - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.div = null;
        if (source["div"]) {
            this.div = source.div;
        }
        if (this.div === undefined) {
            this.div = null;
        }
        if (source["_div"]) {
            this._div = new fhir.FhirElement(source._div);
        }
        this.status = null;
        if (source["status"]) {
            this.status = source.status;
        }
        if (this.status === undefined) {
            this.status = null;
        }
        if (source["_status"]) {
            this._status = new fhir.FhirElement(source._status);
        }
    }
    /**
     * Check if the current Narrative contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["div"] === undefined) {
            missingElements.push("div");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Narrative from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new Narrative(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `Narrative is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the Narrative.status field
 */
export var NarrativeStatusEnum;
(function (NarrativeStatusEnum) {
    NarrativeStatusEnum["GENERATED"] = "generated";
    NarrativeStatusEnum["EXTENSIONS"] = "extensions";
    NarrativeStatusEnum["ADDITIONAL"] = "additional";
    NarrativeStatusEnum["EMPTY"] = "empty";
})(NarrativeStatusEnum || (NarrativeStatusEnum = {}));
//# sourceMappingURL=Narrative.js.map