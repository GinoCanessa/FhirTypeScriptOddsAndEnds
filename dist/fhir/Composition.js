// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Composition
import * as fhir from '../fhir.js';
import { CompositionAttestationModeValueSet, } from '../fhirValueSets/CompositionAttestationModeValueSet.js';
import { DocumentRelationshipTypeValueSet, } from '../fhirValueSets/DocumentRelationshipTypeValueSet.js';
import { V3ActCodeValueSet, } from '../fhirValueSets/V3ActCodeValueSet.js';
import { DocSectionCodesValueSet, } from '../fhirValueSets/DocSectionCodesValueSet.js';
import { ListModeValueSet, } from '../fhirValueSets/ListModeValueSet.js';
import { ListOrderValueSet, } from '../fhirValueSets/ListOrderValueSet.js';
import { ListEmptyReasonValueSet, } from '../fhirValueSets/ListEmptyReasonValueSet.js';
import { CompositionStatusValueSet, } from '../fhirValueSets/CompositionStatusValueSet.js';
import { DocTypecodesValueSet, } from '../fhirValueSets/DocTypecodesValueSet.js';
import { DocumentClasscodesValueSet, } from '../fhirValueSets/DocumentClasscodesValueSet.js';
import { V3ConfidentialityClassificationValueSet, } from '../fhirValueSets/V3ConfidentialityClassificationValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Only list each attester once.
 */
export class CompositionAttester extends fhir.BackboneElement {
    /**
     * Default constructor for CompositionAttester - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'CompositionAttester';
        if (source['mode']) {
            this.mode = source.mode;
        }
        else {
            this.mode = null;
        }
        if (source['time']) {
            this.time = new fhir.FhirDateTime({ value: source.time });
        }
        if (source['party']) {
            this.party = new fhir.Reference(source.party);
        }
    }
    /**
     * Required-bound Value Set for mode
     */
    static modeRequiredValueSet() {
        return CompositionAttestationModeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['mode']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property mode:CompositionAttestationModeValueSetEnum fhir: Composition.attester.mode:code", }));
        }
        if (this["time"]) {
            outcome.issue.push(...this.time.doModelValidation().issue);
        }
        if (this["party"]) {
            outcome.issue.push(...this.party.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * A document is a version specific composition.
 */
export class CompositionRelatesTo extends fhir.BackboneElement {
    /**
     * Default constructor for CompositionRelatesTo - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'CompositionRelatesTo';
        this.__targetIsChoice = true;
        if (source['code']) {
            this.code = source.code;
        }
        else {
            this.code = null;
        }
        if (source['target']) {
            this.target = source.target;
        }
        else if (source['targetIdentifier']) {
            this.target = new fhir.Identifier(source.targetIdentifier);
        }
        else if (source['targetReference']) {
            this.target = new fhir.Reference(source.targetReference);
        }
        else {
            this.target = null;
        }
    }
    /**
     * Required-bound Value Set for code
     */
    static codeRequiredValueSet() {
        return DocumentRelationshipTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['code']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property code:DocumentRelationshipTypeValueSetEnum fhir: Composition.relatesTo.code:code", }));
        }
        if (!this['target']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property target: fhir: Composition.relatesTo.target[x]:", }));
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * The event needs to be consistent with the type element, though can provide further information if desired.
 */
export class CompositionEvent extends fhir.BackboneElement {
    /**
     * Default constructor for CompositionEvent - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'CompositionEvent';
        /**
         * An event can further specialize the act inherent in the typeCode, such as where it is simply "Procedure Report" and the procedure was a "colonoscopy". If one or more eventCodes are included, they SHALL NOT conflict with the values inherent in the classCode, practiceSettingCode or typeCode, as such a conflict would create an ambiguous situation. This short list of codes is provided to be used as key words for certain types of queries.
         */
        this.code = [];
        /**
         * The description and/or reference of the event(s) being documented. For example, this could be used to document such a colonoscopy or an appendectomy.
         */
        this.detail = [];
        if (source['code']) {
            this.code = source.code.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['period']) {
            this.period = new fhir.Period(source.period);
        }
        if (source['detail']) {
            this.detail = source.detail.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return V3ActCodeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["code"]) {
            this.code.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["period"]) {
            outcome.issue.push(...this.period.doModelValidation().issue);
        }
        if (this["detail"]) {
            this.detail.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * The root of the sections that make up the composition.
 */
export class CompositionSection extends fhir.BackboneElement {
    /**
     * Default constructor for CompositionSection - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'CompositionSection';
        /**
         * Identifies who is responsible for the information in this section, not necessarily who typed it in.
         */
        this.author = [];
        /**
         * If there are no entries in the list, an emptyReason SHOULD be provided.
         */
        this.entry = [];
        /**
         * Nested sections are primarily used to help human readers navigate to particular portions of the document.
         */
        this.section = [];
        if (source['title']) {
            this.title = new fhir.FhirString({ value: source.title });
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['author']) {
            this.author = source.author.map((x) => new fhir.Reference(x));
        }
        if (source['focus']) {
            this.focus = new fhir.Reference(source.focus);
        }
        if (source['text']) {
            this.text = new fhir.Narrative(source.text);
        }
        if (source['mode']) {
            this.mode = source.mode;
        }
        if (source['orderedBy']) {
            this.orderedBy = new fhir.CodeableConcept(source.orderedBy);
        }
        if (source['entry']) {
            this.entry = source.entry.map((x) => new fhir.Reference(x));
        }
        if (source['emptyReason']) {
            this.emptyReason = new fhir.CodeableConcept(source.emptyReason);
        }
        if (source['section']) {
            this.section = source.section.map((x) => new fhir.CompositionSection(x));
        }
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return DocSectionCodesValueSet;
    }
    /**
     * Required-bound Value Set for mode
     */
    static modeRequiredValueSet() {
        return ListModeValueSet;
    }
    /**
     * Preferred-bound Value Set for orderedBy
     */
    static orderedByPreferredValueSet() {
        return ListOrderValueSet;
    }
    /**
     * Preferred-bound Value Set for emptyReason
     */
    static emptyReasonPreferredValueSet() {
        return ListEmptyReasonValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["title"]) {
            outcome.issue.push(...this.title.doModelValidation().issue);
        }
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (this["author"]) {
            this.author.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["focus"]) {
            outcome.issue.push(...this.focus.doModelValidation().issue);
        }
        if (this["text"]) {
            outcome.issue.push(...this.text.doModelValidation().issue);
        }
        if (this["orderedBy"]) {
            outcome.issue.push(...this.orderedBy.doModelValidation().issue);
        }
        if (this["entry"]) {
            this.entry.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["emptyReason"]) {
            outcome.issue.push(...this.emptyReason.doModelValidation().issue);
        }
        if (this["section"]) {
            this.section.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).
 */
export class Composition extends fhir.DomainResource {
    /**
     * Default constructor for Composition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'Composition';
        /**
         * This is a metadata field from [XDS/MHD](http://wiki.ihe.net/index.php?title=Mobile_access_to_Health_Documents_(MHD)).
         */
        this.category = [];
        /**
         * Identifies who is responsible for the information in the composition, not necessarily who typed it in.
         */
        this.author = [];
        /**
         * Only list each attester once.
         */
        this.attester = [];
        /**
         * A document is a version specific composition.
         */
        this.relatesTo = [];
        /**
         * The event needs to be consistent with the type element, though can provide further information if desired.
         */
        this.event = [];
        /**
         * The root of the sections that make up the composition.
         */
        this.section = [];
        this.resourceType = 'Composition';
        if (source['identifier']) {
            this.identifier = new fhir.Identifier(source.identifier);
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['type']) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        else {
            this.type = null;
        }
        if (source['category']) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        else {
            this.date = null;
        }
        if (source['author']) {
            this.author = source.author.map((x) => new fhir.Reference(x));
        }
        else {
            this.author = null;
        }
        if (source['title']) {
            this.title = new fhir.FhirString({ value: source.title });
        }
        else {
            this.title = null;
        }
        if (source['confidentiality']) {
            this.confidentiality = new fhir.FhirCode({ value: source.confidentiality });
        }
        if (source['attester']) {
            this.attester = source.attester.map((x) => new fhir.CompositionAttester(x));
        }
        if (source['custodian']) {
            this.custodian = new fhir.Reference(source.custodian);
        }
        if (source['relatesTo']) {
            this.relatesTo = source.relatesTo.map((x) => new fhir.CompositionRelatesTo(x));
        }
        if (source['event']) {
            this.event = source.event.map((x) => new fhir.CompositionEvent(x));
        }
        if (source['section']) {
            this.section = source.section.map((x) => new fhir.CompositionSection(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return CompositionStatusValueSet;
    }
    /**
     * Preferred-bound Value Set for type
     */
    static typePreferredValueSet() {
        return DocTypecodesValueSet;
    }
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet() {
        return DocumentClasscodesValueSet;
    }
    /**
     * Required-bound Value Set for confidentiality
     */
    static confidentialityRequiredValueSet() {
        return V3ConfidentialityClassificationValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'Composition' fhir: Composition.resourceType:'Composition'", }));
        }
        if (this["identifier"]) {
            outcome.issue.push(...this.identifier.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:CompositionStatusValueSetEnum fhir: Composition.status:code", }));
        }
        if (!this['type']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property type:fhir.CodeableConcept fhir: Composition.type:CodeableConcept", }));
        }
        if (this["type"]) {
            outcome.issue.push(...this.type.doModelValidation().issue);
        }
        if (this["category"]) {
            this.category.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["subject"]) {
            outcome.issue.push(...this.subject.doModelValidation().issue);
        }
        if (this["encounter"]) {
            outcome.issue.push(...this.encounter.doModelValidation().issue);
        }
        if (!this['date']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property date:fhir.FhirDateTime fhir: Composition.date:dateTime", }));
        }
        if (this["date"]) {
            outcome.issue.push(...this.date.doModelValidation().issue);
        }
        if (!this['author']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property author:fhir.Reference[] fhir: Composition.author:Reference", }));
        }
        else if (!Array.isArray(this.author)) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.StructuralIssue, diagnostics: "Found scalar in array property author:fhir.Reference[] fhir: Composition.author:Reference", }));
        }
        else if (this.author.length === 0) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property author:fhir.Reference[] fhir: Composition.author:Reference", }));
        }
        if (this["author"]) {
            this.author.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['title']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property title:fhir.FhirString fhir: Composition.title:string", }));
        }
        if (this["title"]) {
            outcome.issue.push(...this.title.doModelValidation().issue);
        }
        if (this["confidentiality"]) {
            outcome.issue.push(...this.confidentiality.doModelValidation().issue);
        }
        if (this["attester"]) {
            this.attester.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["custodian"]) {
            outcome.issue.push(...this.custodian.doModelValidation().issue);
        }
        if (this["relatesTo"]) {
            this.relatesTo.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["event"]) {
            this.event.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["section"]) {
            this.section.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=Composition.js.map