// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export class DeviceUseStatement extends fhir.DomainResource {
    /**
     * Default constructor for DeviceUseStatement - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'DeviceUseStatement';
        if (source["basedOn"]) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source["bodySite"]) {
            this.bodySite = new fhir.CodeableConcept(source.bodySite);
        }
        if (source["derivedFrom"]) {
            this.derivedFrom = source.derivedFrom.map((x) => new fhir.Reference(x));
        }
        this.device = null;
        if (source["device"]) {
            this.device = new fhir.Reference(source.device);
        }
        if (this.device === undefined) {
            this.device = null;
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["reasonCode"]) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["reasonReference"]) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        if (source["recordedOn"]) {
            this.recordedOn = source.recordedOn;
        }
        if (source["_recordedOn"]) {
            this._recordedOn = new fhir.FhirElement(source._recordedOn);
        }
        if (source["source"]) {
            this.source = new fhir.Reference(source.source);
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
        if (source["timingTiming"]) {
            this.timingTiming = new fhir.Timing(source.timingTiming);
        }
        if (source["timingPeriod"]) {
            this.timingPeriod = new fhir.Period(source.timingPeriod);
        }
        if (source["timingDateTime"]) {
            this.timingDateTime = source.timingDateTime;
        }
        if (source["_timingDateTime"]) {
            this._timingDateTime = new fhir.FhirElement(source._timingDateTime);
        }
    }
    /**
     * Check if the current DeviceUseStatement contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["device"] === undefined) {
            missingElements.push("device");
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
     * Factory function to create a DeviceUseStatement from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new DeviceUseStatement(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `DeviceUseStatement is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the DeviceUseStatement.status field
 */
export var DeviceUseStatementStatusEnum;
(function (DeviceUseStatementStatusEnum) {
    DeviceUseStatementStatusEnum["ACTIVE"] = "active";
    DeviceUseStatementStatusEnum["COMPLETED"] = "completed";
    DeviceUseStatementStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    DeviceUseStatementStatusEnum["INTENDED"] = "intended";
    DeviceUseStatementStatusEnum["STOPPED"] = "stopped";
    DeviceUseStatementStatusEnum["ON_HOLD"] = "on-hold";
})(DeviceUseStatementStatusEnum || (DeviceUseStatementStatusEnum = {}));
//# sourceMappingURL=DeviceUseStatement.js.map