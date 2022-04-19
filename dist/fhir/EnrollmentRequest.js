// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export class EnrollmentRequest extends fhir.DomainResource {
    /**
     * Default constructor for EnrollmentRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'EnrollmentRequest';
        if (source["candidate"]) {
            this.candidate = new fhir.Reference(source.candidate);
        }
        if (source["coverage"]) {
            this.coverage = new fhir.Reference(source.coverage);
        }
        if (source["created"]) {
            this.created = source.created;
        }
        if (source["_created"]) {
            this._created = new fhir.FhirElement(source._created);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["insurer"]) {
            this.insurer = new fhir.Reference(source.insurer);
        }
        if (source["provider"]) {
            this.provider = new fhir.Reference(source.provider);
        }
        if (source["status"]) {
            this.status = source.status;
        }
        if (source["_status"]) {
            this._status = new fhir.FhirElement(source._status);
        }
    }
    /**
     * Check if the current EnrollmentRequest contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a EnrollmentRequest from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new EnrollmentRequest(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `EnrollmentRequest is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the EnrollmentRequest.status field
 */
export var EnrollmentRequestStatusEnum;
(function (EnrollmentRequestStatusEnum) {
    EnrollmentRequestStatusEnum["ACTIVE"] = "active";
    EnrollmentRequestStatusEnum["CANCELLED"] = "cancelled";
    EnrollmentRequestStatusEnum["DRAFT"] = "draft";
    EnrollmentRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(EnrollmentRequestStatusEnum || (EnrollmentRequestStatusEnum = {}));
//# sourceMappingURL=EnrollmentRequest.js.map