// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
 */
export class DocumentReferenceRelatesTo extends fhir.BackboneElement {
    /**
     * Default constructor for DocumentReferenceRelatesTo - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.code = null;
        if (source["code"]) {
            this.code = source.code;
        }
        if (this.code === undefined) {
            this.code = null;
        }
        if (source["_code"]) {
            this._code = new fhir.FhirElement(source._code);
        }
        this.target = null;
        if (source["target"]) {
            this.target = new fhir.Reference(source.target);
        }
        if (this.target === undefined) {
            this.target = null;
        }
    }
    /**
     * Check if the current DocumentReferenceRelatesTo contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["target"] === undefined) {
            missingElements.push("target");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DocumentReferenceRelatesTo from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new DocumentReferenceRelatesTo(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `DocumentReferenceRelatesTo is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * The document and format referenced. There may be multiple content element repetitions, each with a different format.
 */
export class DocumentReferenceContent extends fhir.BackboneElement {
    /**
     * Default constructor for DocumentReferenceContent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.attachment = null;
        if (source["attachment"]) {
            this.attachment = new fhir.Attachment(source.attachment);
        }
        if (this.attachment === undefined) {
            this.attachment = null;
        }
        if (source["format"]) {
            this.format = new fhir.Coding(source.format);
        }
    }
    /**
     * Check if the current DocumentReferenceContent contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["attachment"] === undefined) {
            missingElements.push("attachment");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DocumentReferenceContent from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new DocumentReferenceContent(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `DocumentReferenceContent is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * These values are primarily added to help with searching for interesting/relevant documents.
 */
export class DocumentReferenceContext extends fhir.BackboneElement {
    /**
     * Default constructor for DocumentReferenceContext - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["encounter"]) {
            this.encounter = source.encounter.map((x) => new fhir.Reference(x));
        }
        if (source["event"]) {
            this.event = source.event.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["facilityType"]) {
            this.facilityType = new fhir.CodeableConcept(source.facilityType);
        }
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
        if (source["practiceSetting"]) {
            this.practiceSetting = new fhir.CodeableConcept(source.practiceSetting);
        }
        if (source["related"]) {
            this.related = source.related.map((x) => new fhir.Reference(x));
        }
        if (source["sourcePatientInfo"]) {
            this.sourcePatientInfo = new fhir.Reference(source.sourcePatientInfo);
        }
    }
    /**
     * Check if the current DocumentReferenceContext contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DocumentReferenceContext from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new DocumentReferenceContext(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `DocumentReferenceContext is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.
 */
export class DocumentReference extends fhir.DomainResource {
    /**
     * Default constructor for DocumentReference - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'DocumentReference';
        if (source["authenticator"]) {
            this.authenticator = new fhir.Reference(source.authenticator);
        }
        if (source["author"]) {
            this.author = source.author.map((x) => new fhir.Reference(x));
        }
        if (source["category"]) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        this.content = null;
        if (source["content"]) {
            this.content = source.content.map((x) => new fhir.DocumentReferenceContent(x));
        }
        if (this.content === undefined) {
            this.content = null;
        }
        if (source["context"]) {
            this.context = new fhir.DocumentReferenceContext(source.context);
        }
        if (source["custodian"]) {
            this.custodian = new fhir.Reference(source.custodian);
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
        if (source["docStatus"]) {
            this.docStatus = source.docStatus;
        }
        if (source["_docStatus"]) {
            this._docStatus = new fhir.FhirElement(source._docStatus);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["masterIdentifier"]) {
            this.masterIdentifier = new fhir.Identifier(source.masterIdentifier);
        }
        if (source["relatesTo"]) {
            this.relatesTo = source.relatesTo.map((x) => new fhir.DocumentReferenceRelatesTo(x));
        }
        if (source["securityLabel"]) {
            this.securityLabel = source.securityLabel.map((x) => new fhir.CodeableConcept(x));
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
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
    }
    /**
     * Check if the current DocumentReference contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if ((!this["content"]) || (this["content"].length === 0)) {
            missingElements.push("content");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a DocumentReference from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new DocumentReference(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `DocumentReference is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the DocumentReference.relatesTo.code field
 */
export var DocumentReferenceRelatesToCodeEnum;
(function (DocumentReferenceRelatesToCodeEnum) {
    DocumentReferenceRelatesToCodeEnum["REPLACES"] = "replaces";
    DocumentReferenceRelatesToCodeEnum["TRANSFORMS"] = "transforms";
    DocumentReferenceRelatesToCodeEnum["SIGNS"] = "signs";
    DocumentReferenceRelatesToCodeEnum["APPENDS"] = "appends";
})(DocumentReferenceRelatesToCodeEnum || (DocumentReferenceRelatesToCodeEnum = {}));
/**
 * Code Values for the DocumentReference.docStatus field
 */
export var DocumentReferenceDocStatusEnum;
(function (DocumentReferenceDocStatusEnum) {
    DocumentReferenceDocStatusEnum["PRELIMINARY"] = "preliminary";
    DocumentReferenceDocStatusEnum["FINAL"] = "final";
    DocumentReferenceDocStatusEnum["AMENDED"] = "amended";
    DocumentReferenceDocStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(DocumentReferenceDocStatusEnum || (DocumentReferenceDocStatusEnum = {}));
/**
 * Code Values for the DocumentReference.status field
 */
export var DocumentReferenceStatusEnum;
(function (DocumentReferenceStatusEnum) {
    DocumentReferenceStatusEnum["CURRENT"] = "current";
    DocumentReferenceStatusEnum["SUPERSEDED"] = "superseded";
    DocumentReferenceStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(DocumentReferenceStatusEnum || (DocumentReferenceStatusEnum = {}));
//# sourceMappingURL=DocumentReference.js.map