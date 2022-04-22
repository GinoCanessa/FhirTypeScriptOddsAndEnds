// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: GuidanceResponse
import * as fhir from '../fhir.js';
import { GuidanceResponseStatusValueSet } from '../fhirValueSets/GuidanceResponseStatusValueSet.js';
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
        if (source['requestIdentifier']) {
            this.requestIdentifier = new fhir.Identifier(source.requestIdentifier);
        }
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['moduleUri']) {
            this.moduleUri = source.moduleUri;
        }
        if (source['_moduleUri']) {
            this._moduleUri = new fhir.FhirElement(source._moduleUri);
        }
        if (source['moduleCanonical']) {
            this.moduleCanonical = source.moduleCanonical;
        }
        if (source['_moduleCanonical']) {
            this._moduleCanonical = new fhir.FhirElement(source._moduleCanonical);
        }
        if (source['moduleCodeableConcept']) {
            this.moduleCodeableConcept = new fhir.CodeableConcept(source.moduleCodeableConcept);
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['occurrenceDateTime']) {
            this.occurrenceDateTime = source.occurrenceDateTime;
        }
        if (source['_occurrenceDateTime']) {
            this._occurrenceDateTime = new fhir.FhirElement(source._occurrenceDateTime);
        }
        if (source['performer']) {
            this.performer = new fhir.Reference(source.performer);
        }
        if (source['reasonCode']) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['reasonReference']) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source['evaluationMessage']) {
            this.evaluationMessage = source.evaluationMessage.map((x) => new fhir.Reference(x));
        }
        if (source['outputParameters']) {
            this.outputParameters = new fhir.Reference(source.outputParameters);
        }
        if (source['result']) {
            this.result = new fhir.Reference(source.result);
        }
        if (source['dataRequirement']) {
            this.dataRequirement = source.dataRequirement.map((x) => new fhir.DataRequirement(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return GuidanceResponseStatusValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: GuidanceResponse.resourceType']);
        }
        if (this["requestIdentifier"]) {
            results.push(...this.requestIdentifier.doModelValidation());
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_moduleUri"]) {
            results.push(...this._moduleUri.doModelValidation());
        }
        if (this["_moduleCanonical"]) {
            results.push(...this._moduleCanonical.doModelValidation());
        }
        if (this["moduleCodeableConcept"]) {
            results.push(...this.moduleCodeableConcept.doModelValidation());
        }
        if (!this["status"]) {
            results.push(["status", 'Missing required element: GuidanceResponse.status']);
        }
        if (this["_status"]) {
            results.push(...this._status.doModelValidation());
        }
        if (this["subject"]) {
            results.push(...this.subject.doModelValidation());
        }
        if (this["encounter"]) {
            results.push(...this.encounter.doModelValidation());
        }
        if (this["_occurrenceDateTime"]) {
            results.push(...this._occurrenceDateTime.doModelValidation());
        }
        if (this["performer"]) {
            results.push(...this.performer.doModelValidation());
        }
        if (this["reasonCode"]) {
            this.reasonCode.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["reasonReference"]) {
            this.reasonReference.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["note"]) {
            this.note.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["evaluationMessage"]) {
            this.evaluationMessage.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["outputParameters"]) {
            results.push(...this.outputParameters.doModelValidation());
        }
        if (this["result"]) {
            results.push(...this.result.doModelValidation());
        }
        if (this["dataRequirement"]) {
            this.dataRequirement.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
//# sourceMappingURL=GuidanceResponse.js.map