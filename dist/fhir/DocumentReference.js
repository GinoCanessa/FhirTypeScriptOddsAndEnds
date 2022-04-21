// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DocumentReference
import * as fhir from '../fhir.js';
import { DocumentRelationshipTypeValueSet } from '../fhirValueSets/DocumentRelationshipTypeValueSet.js';
import { FormatcodesValueSet } from '../fhirValueSets/FormatcodesValueSet.js';
import { V3ActCodeValueSet } from '../fhirValueSets/V3ActCodeValueSet.js';
import { C80FacilitycodesValueSet } from '../fhirValueSets/C80FacilitycodesValueSet.js';
import { C80PracticeCodesValueSet } from '../fhirValueSets/C80PracticeCodesValueSet.js';
import { DocumentReferenceStatusValueSet } from '../fhirValueSets/DocumentReferenceStatusValueSet.js';
import { CompositionStatusValueSet } from '../fhirValueSets/CompositionStatusValueSet.js';
import { C80DocTypecodesValueSet } from '../fhirValueSets/C80DocTypecodesValueSet.js';
import { DocumentClasscodesValueSet } from '../fhirValueSets/DocumentClasscodesValueSet.js';
import { SecurityLabelsValueSet } from '../fhirValueSets/SecurityLabelsValueSet.js';
/**
 * This element is labeled as a modifier because documents that append to other documents are incomplete on their own.
 */
export class DocumentReferenceRelatesTo extends fhir.BackboneElement {
    /**
     * Default constructor for DocumentReferenceRelatesTo - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['code']) {
            this.code = source.code;
        }
        else {
            this.code = null;
        }
        if (source['_code']) {
            this._code = new fhir.FhirElement(source._code);
        }
        if (source['target']) {
            this.target = new fhir.Reference(source.target);
        }
        else {
            this.target = null;
        }
    }
    /**
     * Required-bound Value Set for code
     */
    codeRequiredValueSet() {
        return DocumentRelationshipTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["code"]) {
            results.push(["code", 'Missing required element: DocumentReference.relatesTo.code']);
        }
        if (this["_code"]) {
            results.push(...this._code.doModelValidation());
        }
        if (!this["target"]) {
            results.push(["target", 'Missing required element: DocumentReference.relatesTo.target']);
        }
        if (this["target"]) {
            results.push(...this.target.doModelValidation());
        }
        return results;
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
        if (source['attachment']) {
            this.attachment = new fhir.Attachment(source.attachment);
        }
        else {
            this.attachment = null;
        }
        if (source['format']) {
            this.format = new fhir.Coding(source.format);
        }
    }
    /**
     * Preferred-bound Value Set for format
     */
    formatPreferredValueSet() {
        return FormatcodesValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["attachment"]) {
            results.push(["attachment", 'Missing required element: DocumentReference.content.attachment']);
        }
        if (this["attachment"]) {
            results.push(...this.attachment.doModelValidation());
        }
        if (this["format"]) {
            results.push(...this.format.doModelValidation());
        }
        return results;
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
        if (source['encounter']) {
            this.encounter = source.encounter.map((x) => new fhir.Reference(x));
        }
        if (source['event']) {
            this.event = source.event.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['facilityType']) {
            this.facilityType = new fhir.CodeableConcept(source.facilityType);
        }
        if (source['practiceSetting']) {
            this.practiceSetting = new fhir.CodeableConcept(source.practiceSetting);
        }
        if (source['sourcePatientInfo']) {
            this.sourcePatientInfo = new fhir.Reference(source.sourcePatientInfo);
        }
        if (source['related']) {
            this.related = source.related.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Example-bound Value Set for event
     */
    eventExampleValueSet() {
        return V3ActCodeValueSet;
    }
    /**
     * Example-bound Value Set for facilityType
     */
    facilityTypeExampleValueSet() {
        return C80FacilitycodesValueSet;
    }
    /**
     * Example-bound Value Set for practiceSetting
     */
    practiceSettingExampleValueSet() {
        return C80PracticeCodesValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["encounter"]) {
            this.encounter.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["event"]) {
            this.event.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["period"]) {
            results.push(...this.period.doModelValidation());
        }
        if (this["facilityType"]) {
            results.push(...this.facilityType.doModelValidation());
        }
        if (this["practiceSetting"]) {
            results.push(...this.practiceSetting.doModelValidation());
        }
        if (this["sourcePatientInfo"]) {
            results.push(...this.sourcePatientInfo.doModelValidation());
        }
        if (this["related"]) {
            this.related.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
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
        if (source['masterIdentifier']) {
            this.masterIdentifier = new fhir.Identifier(source.masterIdentifier);
        }
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
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
        if (source['docStatus']) {
            this.docStatus = source.docStatus;
        }
        if (source['_docStatus']) {
            this._docStatus = new fhir.FhirElement(source._docStatus);
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source['category']) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source['date']) {
            this.date = source.date;
        }
        if (source['_date']) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source['author']) {
            this.author = source.author.map((x) => new fhir.Reference(x));
        }
        if (source['authenticator']) {
            this.authenticator = new fhir.Reference(source.authenticator);
        }
        if (source['custodian']) {
            this.custodian = new fhir.Reference(source.custodian);
        }
        if (source['relatesTo']) {
            this.relatesTo = source.relatesTo.map((x) => new fhir.DocumentReferenceRelatesTo(x));
        }
        if (source['description']) {
            this.description = source.description;
        }
        if (source['_description']) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source['securityLabel']) {
            this.securityLabel = source.securityLabel.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['content']) {
            this.content = source.content.map((x) => new fhir.DocumentReferenceContent(x));
        }
        else {
            this.content = null;
        }
        if (source['context']) {
            this.context = new fhir.DocumentReferenceContext(source.context);
        }
    }
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet() {
        return DocumentReferenceStatusValueSet;
    }
    /**
     * Required-bound Value Set for docStatus
     */
    docStatusRequiredValueSet() {
        return CompositionStatusValueSet;
    }
    /**
     * Preferred-bound Value Set for type
     */
    typePreferredValueSet() {
        return C80DocTypecodesValueSet;
    }
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet() {
        return DocumentClasscodesValueSet;
    }
    /**
     * Extensible-bound Value Set for securityLabel
     */
    securityLabelExtensibleValueSet() {
        return SecurityLabelsValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: DocumentReference.resourceType']);
        }
        if (this["masterIdentifier"]) {
            results.push(...this.masterIdentifier.doModelValidation());
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (!this["status"]) {
            results.push(["status", 'Missing required element: DocumentReference.status']);
        }
        if (this["_status"]) {
            results.push(...this._status.doModelValidation());
        }
        if (this["_docStatus"]) {
            results.push(...this._docStatus.doModelValidation());
        }
        if (this["type"]) {
            results.push(...this.type.doModelValidation());
        }
        if (this["category"]) {
            this.category.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["subject"]) {
            results.push(...this.subject.doModelValidation());
        }
        if (this["_date"]) {
            results.push(...this._date.doModelValidation());
        }
        if (this["author"]) {
            this.author.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["authenticator"]) {
            results.push(...this.authenticator.doModelValidation());
        }
        if (this["custodian"]) {
            results.push(...this.custodian.doModelValidation());
        }
        if (this["relatesTo"]) {
            this.relatesTo.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_description"]) {
            results.push(...this._description.doModelValidation());
        }
        if (this["securityLabel"]) {
            this.securityLabel.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if ((!this["content"]) || (this["content"].length === 0)) {
            results.push(["content", 'Missing required element: DocumentReference.content']);
        }
        if (this["content"]) {
            this.content.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["context"]) {
            results.push(...this.context.doModelValidation());
        }
        return results;
    }
}
//# sourceMappingURL=DocumentReference.js.map