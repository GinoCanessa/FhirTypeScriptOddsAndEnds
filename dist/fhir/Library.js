// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.
 */
export class Library extends fhir.DomainResource {
    /**
     * Default constructor for Library - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Library';
        if (source["approvalDate"]) {
            this.approvalDate = source.approvalDate;
        }
        if (source["_approvalDate"]) {
            this._approvalDate = new fhir.FhirElement(source._approvalDate);
        }
        if (source["author"]) {
            this.author = source.author.map((x) => new fhir.ContactDetail(x));
        }
        if (source["contact"]) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source["content"]) {
            this.content = source.content.map((x) => new fhir.Attachment(x));
        }
        if (source["copyright"]) {
            this.copyright = source.copyright;
        }
        if (source["_copyright"]) {
            this._copyright = new fhir.FhirElement(source._copyright);
        }
        if (source["dataRequirement"]) {
            this.dataRequirement = source.dataRequirement.map((x) => new fhir.DataRequirement(x));
        }
        if (source["date"]) {
            this.date = source.date;
        }
        if (source["_date"]) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["editor"]) {
            this.editor = source.editor.map((x) => new fhir.ContactDetail(x));
        }
        if (source["effectivePeriod"]) {
            this.effectivePeriod = new fhir.Period(source.effectivePeriod);
        }
        if (source["endorser"]) {
            this.endorser = source.endorser.map((x) => new fhir.ContactDetail(x));
        }
        if (source["experimental"]) {
            this.experimental = source.experimental;
        }
        if (source["_experimental"]) {
            this._experimental = new fhir.FhirElement(source._experimental);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["jurisdiction"]) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["lastReviewDate"]) {
            this.lastReviewDate = source.lastReviewDate;
        }
        if (source["_lastReviewDate"]) {
            this._lastReviewDate = new fhir.FhirElement(source._lastReviewDate);
        }
        if (source["name"]) {
            this.name = source.name;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source["parameter"]) {
            this.parameter = source.parameter.map((x) => new fhir.ParameterDefinition(x));
        }
        if (source["publisher"]) {
            this.publisher = source.publisher;
        }
        if (source["_publisher"]) {
            this._publisher = new fhir.FhirElement(source._publisher);
        }
        if (source["purpose"]) {
            this.purpose = source.purpose;
        }
        if (source["_purpose"]) {
            this._purpose = new fhir.FhirElement(source._purpose);
        }
        if (source["relatedArtifact"]) {
            this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x));
        }
        if (source["reviewer"]) {
            this.reviewer = source.reviewer.map((x) => new fhir.ContactDetail(x));
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
        if (source["subjectCodeableConcept"]) {
            this.subjectCodeableConcept = new fhir.CodeableConcept(source.subjectCodeableConcept);
        }
        if (source["subjectReference"]) {
            this.subjectReference = new fhir.Reference(source.subjectReference);
        }
        if (source["subtitle"]) {
            this.subtitle = source.subtitle;
        }
        if (source["_subtitle"]) {
            this._subtitle = new fhir.FhirElement(source._subtitle);
        }
        if (source["title"]) {
            this.title = source.title;
        }
        if (source["_title"]) {
            this._title = new fhir.FhirElement(source._title);
        }
        if (source["topic"]) {
            this.topic = source.topic.map((x) => new fhir.CodeableConcept(x));
        }
        this.type = null;
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["url"]) {
            this.url = source.url;
        }
        if (source["_url"]) {
            this._url = new fhir.FhirElement(source._url);
        }
        if (source["usage"]) {
            this.usage = source.usage;
        }
        if (source["_usage"]) {
            this._usage = new fhir.FhirElement(source._usage);
        }
        if (source["useContext"]) {
            this.useContext = source.useContext.map((x) => new fhir.UsageContext(x));
        }
        if (source["version"]) {
            this.version = source.version;
        }
        if (source["_version"]) {
            this._version = new fhir.FhirElement(source._version);
        }
    }
    /**
     * Check if the current Library contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Library from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new Library(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `Library is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the Library.status field
 */
export var LibraryStatusEnum;
(function (LibraryStatusEnum) {
    LibraryStatusEnum["DRAFT"] = "draft";
    LibraryStatusEnum["ACTIVE"] = "active";
    LibraryStatusEnum["RETIRED"] = "retired";
    LibraryStatusEnum["UNKNOWN"] = "unknown";
})(LibraryStatusEnum || (LibraryStatusEnum = {}));
//# sourceMappingURL=Library.js.map