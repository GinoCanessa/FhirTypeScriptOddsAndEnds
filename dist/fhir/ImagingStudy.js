// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * If the person who performed the series is not known, their Organization may be recorded. A patient, or related person, may be the performer, e.g. for patient-captured images.
 */
export class ImagingStudySeriesPerformer extends fhir.BackboneElement {
    /**
     * Default constructor for ImagingStudySeriesPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.actor = null;
        if (source["actor"]) {
            this.actor = new fhir.Reference(source.actor);
        }
        if (this.actor === undefined) {
            this.actor = null;
        }
        if (source["function"]) {
            this.function = new fhir.CodeableConcept(source.function);
        }
    }
    /**
     * Check if the current ImagingStudySeriesPerformer contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["actor"] === undefined) {
            missingElements.push("actor");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImagingStudySeriesPerformer from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new ImagingStudySeriesPerformer(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImagingStudySeriesPerformer is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A single SOP instance within the series, e.g. an image, or presentation state.
 */
export class ImagingStudySeriesInstance extends fhir.BackboneElement {
    /**
     * Default constructor for ImagingStudySeriesInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["number"]) {
            this.number = source.number;
        }
        if (source["_number"]) {
            this._number = new fhir.FhirElement(source._number);
        }
        this.sopClass = null;
        if (source["sopClass"]) {
            this.sopClass = new fhir.Coding(source.sopClass);
        }
        if (this.sopClass === undefined) {
            this.sopClass = null;
        }
        if (source["title"]) {
            this.title = source.title;
        }
        if (source["_title"]) {
            this._title = new fhir.FhirElement(source._title);
        }
        this.uid = null;
        if (source["uid"]) {
            this.uid = source.uid;
        }
        if (this.uid === undefined) {
            this.uid = null;
        }
        if (source["_uid"]) {
            this._uid = new fhir.FhirElement(source._uid);
        }
    }
    /**
     * Check if the current ImagingStudySeriesInstance contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["sopClass"] === undefined) {
            missingElements.push("sopClass");
        }
        if (this["uid"] === undefined) {
            missingElements.push("uid");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImagingStudySeriesInstance from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new ImagingStudySeriesInstance(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImagingStudySeriesInstance is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Each study has one or more series of images or other content.
 */
export class ImagingStudySeries extends fhir.BackboneElement {
    /**
     * Default constructor for ImagingStudySeries - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["bodySite"]) {
            this.bodySite = new fhir.Coding(source.bodySite);
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["endpoint"]) {
            this.endpoint = source.endpoint.map((x) => new fhir.Reference(x));
        }
        if (source["instance"]) {
            this.instance = source.instance.map((x) => new fhir.ImagingStudySeriesInstance(x));
        }
        if (source["laterality"]) {
            this.laterality = new fhir.Coding(source.laterality);
        }
        this.modality = null;
        if (source["modality"]) {
            this.modality = new fhir.Coding(source.modality);
        }
        if (this.modality === undefined) {
            this.modality = null;
        }
        if (source["number"]) {
            this.number = source.number;
        }
        if (source["_number"]) {
            this._number = new fhir.FhirElement(source._number);
        }
        if (source["numberOfInstances"]) {
            this.numberOfInstances = source.numberOfInstances;
        }
        if (source["_numberOfInstances"]) {
            this._numberOfInstances = new fhir.FhirElement(source._numberOfInstances);
        }
        if (source["performer"]) {
            this.performer = source.performer.map((x) => new fhir.ImagingStudySeriesPerformer(x));
        }
        if (source["specimen"]) {
            this.specimen = source.specimen.map((x) => new fhir.Reference(x));
        }
        if (source["started"]) {
            this.started = source.started;
        }
        if (source["_started"]) {
            this._started = new fhir.FhirElement(source._started);
        }
        this.uid = null;
        if (source["uid"]) {
            this.uid = source.uid;
        }
        if (this.uid === undefined) {
            this.uid = null;
        }
        if (source["_uid"]) {
            this._uid = new fhir.FhirElement(source._uid);
        }
    }
    /**
     * Check if the current ImagingStudySeries contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["modality"] === undefined) {
            missingElements.push("modality");
        }
        if (this["uid"] === undefined) {
            missingElements.push("uid");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImagingStudySeries from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new ImagingStudySeries(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImagingStudySeries is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.
 */
export class ImagingStudy extends fhir.DomainResource {
    /**
     * Default constructor for ImagingStudy - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'ImagingStudy';
        if (source["basedOn"]) {
            this.basedOn = source.basedOn.map((x) => new fhir.Reference(x));
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["encounter"]) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source["endpoint"]) {
            this.endpoint = source.endpoint.map((x) => new fhir.Reference(x));
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["interpreter"]) {
            this.interpreter = source.interpreter.map((x) => new fhir.Reference(x));
        }
        if (source["location"]) {
            this.location = new fhir.Reference(source.location);
        }
        if (source["modality"]) {
            this.modality = source.modality.map((x) => new fhir.Coding(x));
        }
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["numberOfInstances"]) {
            this.numberOfInstances = source.numberOfInstances;
        }
        if (source["_numberOfInstances"]) {
            this._numberOfInstances = new fhir.FhirElement(source._numberOfInstances);
        }
        if (source["numberOfSeries"]) {
            this.numberOfSeries = source.numberOfSeries;
        }
        if (source["_numberOfSeries"]) {
            this._numberOfSeries = new fhir.FhirElement(source._numberOfSeries);
        }
        if (source["procedureCode"]) {
            this.procedureCode = source.procedureCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["procedureReference"]) {
            this.procedureReference = new fhir.Reference(source.procedureReference);
        }
        if (source["reasonCode"]) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["reasonReference"]) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        if (source["referrer"]) {
            this.referrer = new fhir.Reference(source.referrer);
        }
        if (source["series"]) {
            this.series = source.series.map((x) => new fhir.ImagingStudySeries(x));
        }
        if (source["started"]) {
            this.started = source.started;
        }
        if (source["_started"]) {
            this._started = new fhir.FhirElement(source._started);
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
     * Check if the current ImagingStudy contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
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
     * Factory function to create a ImagingStudy from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new ImagingStudy(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImagingStudy is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the ImagingStudy.status field
 */
export var ImagingStudyStatusEnum;
(function (ImagingStudyStatusEnum) {
    ImagingStudyStatusEnum["REGISTERED"] = "registered";
    ImagingStudyStatusEnum["AVAILABLE"] = "available";
    ImagingStudyStatusEnum["CANCELLED"] = "cancelled";
    ImagingStudyStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    ImagingStudyStatusEnum["UNKNOWN"] = "unknown";
})(ImagingStudyStatusEnum || (ImagingStudyStatusEnum = {}));
//# sourceMappingURL=ImagingStudy.js.map