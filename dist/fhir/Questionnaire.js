// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Questionnaire
import * as fhir from '../fhir.js';
import { QuestionnaireEnableOperatorValueSet, } from '../fhirValueSets/QuestionnaireEnableOperatorValueSet.js';
import { QuestionnaireQuestionsValueSet, } from '../fhirValueSets/QuestionnaireQuestionsValueSet.js';
import { ItemTypeValueSet, } from '../fhirValueSets/ItemTypeValueSet.js';
import { QuestionnaireEnableBehaviorValueSet, } from '../fhirValueSets/QuestionnaireEnableBehaviorValueSet.js';
import { PublicationStatusValueSet, } from '../fhirValueSets/PublicationStatusValueSet.js';
import { ResourceTypesValueSet, } from '../fhirValueSets/ResourceTypesValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
 */
export class QuestionnaireItemEnableWhen extends fhir.BackboneElement {
    /**
     * Default constructor for QuestionnaireItemEnableWhen - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'QuestionnaireItemEnableWhen';
        this.__answerIsChoice = true;
        if (source['question']) {
            this.question = new fhir.FhirString({ value: source.question });
        }
        else {
            this.question = null;
        }
        if (source['operator']) {
            this.operator = source.operator;
        }
        else {
            this.operator = null;
        }
        if (source['answer']) {
            this.answer = source.answer;
        }
        else if (source['answerBoolean']) {
            this.answer = new fhir.FhirBoolean({ value: source.answerBoolean });
        }
        else if (source['answerDecimal']) {
            this.answer = new fhir.FhirDecimal({ value: source.answerDecimal });
        }
        else if (source['answerInteger']) {
            this.answer = new fhir.FhirInteger({ value: source.answerInteger });
        }
        else if (source['answerDate']) {
            this.answer = new fhir.FhirDate({ value: source.answerDate });
        }
        else if (source['answerDateTime']) {
            this.answer = new fhir.FhirDateTime({ value: source.answerDateTime });
        }
        else if (source['answerTime']) {
            this.answer = new fhir.FhirTime({ value: source.answerTime });
        }
        else if (source['answerString']) {
            this.answer = new fhir.FhirString({ value: source.answerString });
        }
        else if (source['answerCoding']) {
            this.answer = new fhir.Coding(source.answerCoding);
        }
        else if (source['answerQuantity']) {
            this.answer = new fhir.Quantity(source.answerQuantity);
        }
        else if (source['answerReference']) {
            this.answer = new fhir.Reference(source.answerReference);
        }
        else {
            this.answer = null;
        }
    }
    /**
     * Required-bound Value Set for operator
     */
    static operatorRequiredValueSet() {
        return QuestionnaireEnableOperatorValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['question']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property question:fhir.FhirString fhir: Questionnaire.item.enableWhen.question:string", }));
        }
        if (this["question"]) {
            outcome.issue.push(...this.question.doModelValidation().issue);
        }
        if (!this['operator']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property operator:QuestionnaireEnableOperatorValueSetEnum fhir: Questionnaire.item.enableWhen.operator:code", }));
        }
        if (!this['answer']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property answer: fhir: Questionnaire.item.enableWhen.answer[x]:", }));
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
 * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
 */
export class QuestionnaireItemAnswerOption extends fhir.BackboneElement {
    /**
     * Default constructor for QuestionnaireItemAnswerOption - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'QuestionnaireItemAnswerOption';
        this.__valueIsChoice = true;
        if (source['value']) {
            this.value = source.value;
        }
        else if (source['valueInteger']) {
            this.value = new fhir.FhirInteger({ value: source.valueInteger });
        }
        else if (source['valueDate']) {
            this.value = new fhir.FhirDate({ value: source.valueDate });
        }
        else if (source['valueTime']) {
            this.value = new fhir.FhirTime({ value: source.valueTime });
        }
        else if (source['valueString']) {
            this.value = new fhir.FhirString({ value: source.valueString });
        }
        else if (source['valueCoding']) {
            this.value = new fhir.Coding(source.valueCoding);
        }
        else if (source['valueReference']) {
            this.value = new fhir.Reference(source.valueReference);
        }
        else {
            this.value = null;
        }
        if (source['initialSelected']) {
            this.initialSelected = new fhir.FhirBoolean({ value: source.initialSelected });
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['value']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property value: fhir: Questionnaire.item.answerOption.value[x]:", }));
        }
        if (this["initialSelected"]) {
            outcome.issue.push(...this.initialSelected.doModelValidation().issue);
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
 * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
 */
export class QuestionnaireItemInitial extends fhir.BackboneElement {
    /**
     * Default constructor for QuestionnaireItemInitial - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'QuestionnaireItemInitial';
        this.__valueIsChoice = true;
        if (source['value']) {
            this.value = source.value;
        }
        else if (source['valueBoolean']) {
            this.value = new fhir.FhirBoolean({ value: source.valueBoolean });
        }
        else if (source['valueDecimal']) {
            this.value = new fhir.FhirDecimal({ value: source.valueDecimal });
        }
        else if (source['valueInteger']) {
            this.value = new fhir.FhirInteger({ value: source.valueInteger });
        }
        else if (source['valueDate']) {
            this.value = new fhir.FhirDate({ value: source.valueDate });
        }
        else if (source['valueDateTime']) {
            this.value = new fhir.FhirDateTime({ value: source.valueDateTime });
        }
        else if (source['valueTime']) {
            this.value = new fhir.FhirTime({ value: source.valueTime });
        }
        else if (source['valueString']) {
            this.value = new fhir.FhirString({ value: source.valueString });
        }
        else if (source['valueUri']) {
            this.value = new fhir.FhirUri({ value: source.valueUri });
        }
        else if (source['valueAttachment']) {
            this.value = new fhir.Attachment(source.valueAttachment);
        }
        else if (source['valueCoding']) {
            this.value = new fhir.Coding(source.valueCoding);
        }
        else if (source['valueQuantity']) {
            this.value = new fhir.Quantity(source.valueQuantity);
        }
        else if (source['valueReference']) {
            this.value = new fhir.Reference(source.valueReference);
        }
        else {
            this.value = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['value']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property value: fhir: Questionnaire.item.initial.value[x]:", }));
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
 * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
 */
export class QuestionnaireItem extends fhir.BackboneElement {
    /**
     * Default constructor for QuestionnaireItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'QuestionnaireItem';
        /**
         * The value may come from the ElementDefinition referred to by .definition.
         */
        this.code = [];
        /**
         * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
         */
        this.enableWhen = [];
        /**
         * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
         */
        this.answerOption = [];
        /**
         * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
         */
        this.initial = [];
        /**
         * There is no specified limit to the depth of nesting.  However, Questionnaire authors are encouraged to consider the impact on the user and user interface of overly deep nesting.
         */
        this.item = [];
        if (source['linkId']) {
            this.linkId = new fhir.FhirString({ value: source.linkId });
        }
        else {
            this.linkId = null;
        }
        if (source['definition']) {
            this.definition = new fhir.FhirUri({ value: source.definition });
        }
        if (source['code']) {
            this.code = source.code.map((x) => new fhir.Coding(x));
        }
        if (source['prefix']) {
            this.prefix = new fhir.FhirString({ value: source.prefix });
        }
        if (source['text']) {
            this.text = new fhir.FhirString({ value: source.text });
        }
        if (source['type']) {
            this.type = source.type;
        }
        else {
            this.type = null;
        }
        if (source['enableWhen']) {
            this.enableWhen = source.enableWhen.map((x) => new fhir.QuestionnaireItemEnableWhen(x));
        }
        if (source['enableBehavior']) {
            this.enableBehavior = source.enableBehavior;
        }
        if (source['required']) {
            this.required = new fhir.FhirBoolean({ value: source.required });
        }
        if (source['repeats']) {
            this.repeats = new fhir.FhirBoolean({ value: source.repeats });
        }
        if (source['readOnly']) {
            this.readOnly = new fhir.FhirBoolean({ value: source.readOnly });
        }
        if (source['maxLength']) {
            this.maxLength = new fhir.FhirInteger({ value: source.maxLength });
        }
        if (source['answerValueSet']) {
            this.answerValueSet = new fhir.FhirCanonical({ value: source.answerValueSet });
        }
        if (source['answerOption']) {
            this.answerOption = source.answerOption.map((x) => new fhir.QuestionnaireItemAnswerOption(x));
        }
        if (source['initial']) {
            this.initial = source.initial.map((x) => new fhir.QuestionnaireItemInitial(x));
        }
        if (source['item']) {
            this.item = source.item.map((x) => new fhir.QuestionnaireItem(x));
        }
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return QuestionnaireQuestionsValueSet;
    }
    /**
     * Required-bound Value Set for type
     */
    static typeRequiredValueSet() {
        return ItemTypeValueSet;
    }
    /**
     * Required-bound Value Set for enableBehavior
     */
    static enableBehaviorRequiredValueSet() {
        return QuestionnaireEnableBehaviorValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['linkId']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property linkId:fhir.FhirString fhir: Questionnaire.item.linkId:string", }));
        }
        if (this["linkId"]) {
            outcome.issue.push(...this.linkId.doModelValidation().issue);
        }
        if (this["definition"]) {
            outcome.issue.push(...this.definition.doModelValidation().issue);
        }
        if (this["code"]) {
            this.code.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["prefix"]) {
            outcome.issue.push(...this.prefix.doModelValidation().issue);
        }
        if (this["text"]) {
            outcome.issue.push(...this.text.doModelValidation().issue);
        }
        if (!this['type']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property type:ItemTypeValueSetEnum fhir: Questionnaire.item.type:code", }));
        }
        if (this["enableWhen"]) {
            this.enableWhen.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["required"]) {
            outcome.issue.push(...this.required.doModelValidation().issue);
        }
        if (this["repeats"]) {
            outcome.issue.push(...this.repeats.doModelValidation().issue);
        }
        if (this["readOnly"]) {
            outcome.issue.push(...this.readOnly.doModelValidation().issue);
        }
        if (this["maxLength"]) {
            outcome.issue.push(...this.maxLength.doModelValidation().issue);
        }
        if (this["answerValueSet"]) {
            outcome.issue.push(...this.answerValueSet.doModelValidation().issue);
        }
        if (this["answerOption"]) {
            this.answerOption.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["initial"]) {
            this.initial.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["item"]) {
            this.item.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
export class Questionnaire extends fhir.DomainResource {
    /**
     * Default constructor for Questionnaire - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'Questionnaire';
        /**
         * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this questionnaire outside of FHIR, where it is not possible to use the logical URI.
         */
        this.identifier = [];
        /**
         * The URL of a Questionnaire that this Questionnaire is based on.
         */
        this.derivedFrom = [];
        /**
         * If none are specified, then the subject is unlimited.
         */
        this.subjectType = [];
        /**
         * May be a web site, an email address, a telephone number, etc.
         */
        this.contact = [];
        /**
         * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
         */
        this.useContext = [];
        /**
         * It may be possible for the questionnaire to be used in jurisdictions other than those for which it was originally designed or intended.
         */
        this.jurisdiction = [];
        /**
         * An identifier for this question or group of questions in a particular terminology such as LOINC.
         */
        this.code = [];
        /**
         * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
         */
        this.item = [];
        this.resourceType = 'Questionnaire';
        if (source['url']) {
            this.url = new fhir.FhirUri({ value: source.url });
        }
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['version']) {
            this.version = new fhir.FhirString({ value: source.version });
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['title']) {
            this.title = new fhir.FhirString({ value: source.title });
        }
        if (source['derivedFrom']) {
            this.derivedFrom = source.derivedFrom.map((x) => new fhir.FhirCanonical({ value: x }));
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['experimental']) {
            this.experimental = new fhir.FhirBoolean({ value: source.experimental });
        }
        if (source['subjectType']) {
            this.subjectType = source.subjectType.map((x) => new fhir.FhirCode({ value: x }));
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        if (source['publisher']) {
            this.publisher = new fhir.FhirString({ value: source.publisher });
        }
        if (source['contact']) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source['description']) {
            this.description = new fhir.FhirMarkdown({ value: source.description });
        }
        if (source['useContext']) {
            this.useContext = source.useContext.map((x) => new fhir.UsageContext(x));
        }
        if (source['jurisdiction']) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['purpose']) {
            this.purpose = new fhir.FhirMarkdown({ value: source.purpose });
        }
        if (source['copyright']) {
            this.copyright = new fhir.FhirMarkdown({ value: source.copyright });
        }
        if (source['approvalDate']) {
            this.approvalDate = new fhir.FhirDate({ value: source.approvalDate });
        }
        if (source['lastReviewDate']) {
            this.lastReviewDate = new fhir.FhirDate({ value: source.lastReviewDate });
        }
        if (source['effectivePeriod']) {
            this.effectivePeriod = new fhir.Period(source.effectivePeriod);
        }
        if (source['code']) {
            this.code = source.code.map((x) => new fhir.Coding(x));
        }
        if (source['item']) {
            this.item = source.item.map((x) => new fhir.QuestionnaireItem(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return PublicationStatusValueSet;
    }
    /**
     * Required-bound Value Set for subjectType
     */
    static subjectTypeRequiredValueSet() {
        return ResourceTypesValueSet;
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return QuestionnaireQuestionsValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'Questionnaire' fhir: Questionnaire.resourceType:'Questionnaire'", }));
        }
        if (this["url"]) {
            outcome.issue.push(...this.url.doModelValidation().issue);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["version"]) {
            outcome.issue.push(...this.version.doModelValidation().issue);
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (this["title"]) {
            outcome.issue.push(...this.title.doModelValidation().issue);
        }
        if (this["derivedFrom"]) {
            this.derivedFrom.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:PublicationStatusValueSetEnum fhir: Questionnaire.status:code", }));
        }
        if (this["experimental"]) {
            outcome.issue.push(...this.experimental.doModelValidation().issue);
        }
        if (this["subjectType"]) {
            this.subjectType.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["date"]) {
            outcome.issue.push(...this.date.doModelValidation().issue);
        }
        if (this["publisher"]) {
            outcome.issue.push(...this.publisher.doModelValidation().issue);
        }
        if (this["contact"]) {
            this.contact.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["useContext"]) {
            this.useContext.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["jurisdiction"]) {
            this.jurisdiction.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["purpose"]) {
            outcome.issue.push(...this.purpose.doModelValidation().issue);
        }
        if (this["copyright"]) {
            outcome.issue.push(...this.copyright.doModelValidation().issue);
        }
        if (this["approvalDate"]) {
            outcome.issue.push(...this.approvalDate.doModelValidation().issue);
        }
        if (this["lastReviewDate"]) {
            outcome.issue.push(...this.lastReviewDate.doModelValidation().issue);
        }
        if (this["effectivePeriod"]) {
            outcome.issue.push(...this.effectivePeriod.doModelValidation().issue);
        }
        if (this["code"]) {
            this.code.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["item"]) {
            this.item.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
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
//# sourceMappingURL=Questionnaire.js.map