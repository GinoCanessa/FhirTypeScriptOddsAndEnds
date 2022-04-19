// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
export class GuidanceResponse extends fhir.DomainResource {
    /**
     * Default constructor for GuidanceResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'GuidanceResponse';
        if (source["dataRequirement"]) {
            this.dataRequirement = source.dataRequirement.map((x) => new fhir.DataRequirement(x));
        }
        if (source["encounter"]) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source["evaluationMessage"]) {
            this.evaluationMessage = source.evaluationMessage.map((x) => new fhir.Reference(x));
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["moduleUri"]) {
            this.moduleUri = source.moduleUri;
        }
        if (source["_moduleUri"]) {
            this._moduleUri = new fhir.FhirElement(source._moduleUri);
        }
        if (source["moduleCanonical"]) {
            this.moduleCanonical = source.moduleCanonical;
        }
        if (source["_moduleCanonical"]) {
            this._moduleCanonical = new fhir.FhirElement(source._moduleCanonical);
        }
        if (source["moduleCodeableConcept"]) {
            this.moduleCodeableConcept = new fhir.CodeableConcept(source.moduleCodeableConcept);
        }
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["occurrenceDateTime"]) {
            this.occurrenceDateTime = source.occurrenceDateTime;
        }
        if (source["_occurrenceDateTime"]) {
            this._occurrenceDateTime = new fhir.FhirElement(source._occurrenceDateTime);
        }
        if (source["outputParameters"]) {
            this.outputParameters = new fhir.Reference(source.outputParameters);
        }
        if (source["performer"]) {
            this.performer = new fhir.Reference(source.performer);
        }
        if (source["reasonCode"]) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["reasonReference"]) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        if (source["requestIdentifier"]) {
            this.requestIdentifier = new fhir.Identifier(source.requestIdentifier);
        }
        if (source["result"]) {
            this.result = new fhir.Reference(source.result);
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
        if (source["subject"]) {
            this.subject = new fhir.Reference(source.subject);
        }
    }
    /**
     * Check if the current GuidanceResponse contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a GuidanceResponse from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new GuidanceResponse(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `GuidanceResponse is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the GuidanceResponse.status field
 */
export var GuidanceResponseStatusEnum;
(function (GuidanceResponseStatusEnum) {
    GuidanceResponseStatusEnum["SUCCESS"] = "success";
    GuidanceResponseStatusEnum["DATA_REQUESTED"] = "data-requested";
    GuidanceResponseStatusEnum["DATA_REQUIRED"] = "data-required";
    GuidanceResponseStatusEnum["IN_PROGRESS"] = "in-progress";
    GuidanceResponseStatusEnum["FAILURE"] = "failure";
    GuidanceResponseStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(GuidanceResponseStatusEnum || (GuidanceResponseStatusEnum = {}));
//# sourceMappingURL=GuidanceResponse.js.map