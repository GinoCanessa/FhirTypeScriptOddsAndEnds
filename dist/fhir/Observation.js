// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
 */
export class ObservationReferenceRange extends fhir.BackboneElement {
    /**
     * Default constructor for ObservationReferenceRange - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["age"]) {
            this.age = new fhir.Range(source.age);
        }
        if (source["appliesTo"]) {
            this.appliesTo = source.appliesTo.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["high"]) {
            this.high = new fhir.Quantity(source.high);
        }
        if (source["low"]) {
            this.low = new fhir.Quantity(source.low);
        }
        if (source["text"]) {
            this.text = source.text;
        }
        if (source["_text"]) {
            this._text = new fhir.FhirElement(source._text);
        }
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
    }
    /**
     * Check if the current ObservationReferenceRange contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ObservationReferenceRange from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new ObservationReferenceRange(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `ObservationReferenceRange is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
 */
export class ObservationComponent extends fhir.BackboneElement {
    /**
     * Default constructor for ObservationComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.code = null;
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (this.code === undefined) {
            this.code = null;
        }
        if (source["dataAbsentReason"]) {
            this.dataAbsentReason = new fhir.CodeableConcept(source.dataAbsentReason);
        }
        if (source["interpretation"]) {
            this.interpretation = source.interpretation.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["referenceRange"]) {
            this.referenceRange = source.referenceRange.map((x) => new fhir.ObservationReferenceRange(x));
        }
        if (source["valueQuantity"]) {
            this.valueQuantity = new fhir.Quantity(source.valueQuantity);
        }
        if (source["valueCodeableConcept"]) {
            this.valueCodeableConcept = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        if (source["valueString"]) {
            this.valueString = source.valueString;
        }
        if (source["_valueString"]) {
            this._valueString = new fhir.FhirElement(source._valueString);
        }
        if (source["valueBoolean"]) {
            this.valueBoolean = source.valueBoolean;
        }
        if (source["_valueBoolean"]) {
            this._valueBoolean = new fhir.FhirElement(source._valueBoolean);
        }
        if (source["valueInteger"]) {
            this.valueInteger = source.valueInteger;
        }
        if (source["_valueInteger"]) {
            this._valueInteger = new fhir.FhirElement(source._valueInteger);
        }
        if (source["valueRange"]) {
            this.valueRange = new fhir.Range(source.valueRange);
        }
        if (source["valueRatio"]) {
            this.valueRatio = new fhir.Ratio(source.valueRatio);
        }
        if (source["valueSampledData"]) {
            this.valueSampledData = new fhir.SampledData(source.valueSampledData);
        }
        if (source["valueTime"]) {
            this.valueTime = source.valueTime;
        }
        if (source["_valueTime"]) {
            this._valueTime = new fhir.FhirElement(source._valueTime);
        }
        if (source["valueDateTime"]) {
            this.valueDateTime = source.valueDateTime;
        }
        if (source["_valueDateTime"]) {
            this._valueDateTime = new fhir.FhirElement(source._valueDateTime);
        }
        if (source["valuePeriod"]) {
            this.valuePeriod = new fhir.Period(source.valuePeriod);
        }
    }
    /**
     * Check if the current ObservationComponent contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ObservationComponent from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new ObservationComponent(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `ObservationComponent is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export class Observation extends fhir.DomainResource {
    /**
     * Default constructor for Observation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Observation';
        if (source["basedOn"]) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source["bodySite"]) {
            this.bodySite = new fhir.CodeableConcept(source.bodySite);
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
        if (source["component"]) {
            this.component = source.component.map((x) => new fhir.ObservationComponent(x));
        }
        if (source["dataAbsentReason"]) {
            this.dataAbsentReason = new fhir.CodeableConcept(source.dataAbsentReason);
        }
        if (source["derivedFrom"]) {
            this.derivedFrom = source.derivedFrom.map((x) => new fhir.Reference(x));
        }
        if (source["device"]) {
            this.device = new fhir.Reference(source.device);
        }
        if (source["effectiveDateTime"]) {
            this.effectiveDateTime = source.effectiveDateTime;
        }
        if (source["_effectiveDateTime"]) {
            this._effectiveDateTime = new fhir.FhirElement(source._effectiveDateTime);
        }
        if (source["effectivePeriod"]) {
            this.effectivePeriod = new fhir.Period(source.effectivePeriod);
        }
        if (source["effectiveTiming"]) {
            this.effectiveTiming = new fhir.Timing(source.effectiveTiming);
        }
        if (source["effectiveInstant"]) {
            this.effectiveInstant = source.effectiveInstant;
        }
        if (source["_effectiveInstant"]) {
            this._effectiveInstant = new fhir.FhirElement(source._effectiveInstant);
        }
        if (source["encounter"]) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source["focus"]) {
            this.focus = source.focus.map((x) => new fhir.Reference(x));
        }
        if (source["hasMember"]) {
            this.hasMember = source.hasMember.map((x) => new fhir.Reference(x));
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["interpretation"]) {
            this.interpretation = source.interpretation.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["issued"]) {
            this.issued = source.issued;
        }
        if (source["_issued"]) {
            this._issued = new fhir.FhirElement(source._issued);
        }
        if (source["method"]) {
            this.method = new fhir.CodeableConcept(source.method);
        }
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["partOf"]) {
            this.partOf = source.partOf.map((x) => new fhir.Reference(x));
        }
        if (source["performer"]) {
            this.performer = source.performer.map((x) => new fhir.Reference(x));
        }
        if (source["referenceRange"]) {
            this.referenceRange = source.referenceRange.map((x) => new fhir.ObservationReferenceRange(x));
        }
        if (source["specimen"]) {
            this.specimen = new fhir.Reference(source.specimen);
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
        if (source["valueQuantity"]) {
            this.valueQuantity = new fhir.Quantity(source.valueQuantity);
        }
        if (source["valueCodeableConcept"]) {
            this.valueCodeableConcept = new fhir.CodeableConcept(source.valueCodeableConcept);
        }
        if (source["valueString"]) {
            this.valueString = source.valueString;
        }
        if (source["_valueString"]) {
            this._valueString = new fhir.FhirElement(source._valueString);
        }
        if (source["valueBoolean"]) {
            this.valueBoolean = source.valueBoolean;
        }
        if (source["_valueBoolean"]) {
            this._valueBoolean = new fhir.FhirElement(source._valueBoolean);
        }
        if (source["valueInteger"]) {
            this.valueInteger = source.valueInteger;
        }
        if (source["_valueInteger"]) {
            this._valueInteger = new fhir.FhirElement(source._valueInteger);
        }
        if (source["valueRange"]) {
            this.valueRange = new fhir.Range(source.valueRange);
        }
        if (source["valueRatio"]) {
            this.valueRatio = new fhir.Ratio(source.valueRatio);
        }
        if (source["valueSampledData"]) {
            this.valueSampledData = new fhir.SampledData(source.valueSampledData);
        }
        if (source["valueTime"]) {
            this.valueTime = source.valueTime;
        }
        if (source["_valueTime"]) {
            this._valueTime = new fhir.FhirElement(source._valueTime);
        }
        if (source["valueDateTime"]) {
            this.valueDateTime = source.valueDateTime;
        }
        if (source["_valueDateTime"]) {
            this._valueDateTime = new fhir.FhirElement(source._valueDateTime);
        }
        if (source["valuePeriod"]) {
            this.valuePeriod = new fhir.Period(source.valuePeriod);
        }
    }
    /**
     * Check if the current Observation contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Observation from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new Observation(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `Observation is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the Observation.status field
 */
export var ObservationStatusEnum;
(function (ObservationStatusEnum) {
    ObservationStatusEnum["REGISTERED"] = "registered";
    ObservationStatusEnum["PRELIMINARY"] = "preliminary";
    ObservationStatusEnum["FINAL"] = "final";
    ObservationStatusEnum["AMENDED"] = "amended";
    ObservationStatusEnum["CORRECTED"] = "corrected";
    ObservationStatusEnum["CANCELLED"] = "cancelled";
    ObservationStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    ObservationStatusEnum["UNKNOWN"] = "unknown";
})(ObservationStatusEnum || (ObservationStatusEnum = {}));
//# sourceMappingURL=Observation.js.map