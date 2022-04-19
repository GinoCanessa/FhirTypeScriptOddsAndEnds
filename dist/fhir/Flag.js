// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export class Flag extends fhir.DomainResource {
    /**
     * Default constructor for Flag - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Flag';
        if (source["author"]) {
            this.author = new fhir.Reference(source.author);
        }
        if (source["category"]) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        this.code = null;
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (this.code === undefined) {
            this.code = null;
        }
        if (source["encounter"]) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
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
        this.subject = null;
        if (source["subject"]) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (this.subject === undefined) {
            this.subject = null;
        }
    }
    /**
     * Check if the current Flag contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        if (this["subject"] === undefined) {
            missingElements.push("subject");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Flag from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new Flag(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `Flag is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the Flag.status field
 */
export var FlagStatusEnum;
(function (FlagStatusEnum) {
    FlagStatusEnum["ACTIVE"] = "active";
    FlagStatusEnum["INACTIVE"] = "inactive";
    FlagStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(FlagStatusEnum || (FlagStatusEnum = {}));
//# sourceMappingURL=Flag.js.map