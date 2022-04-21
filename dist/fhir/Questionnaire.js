// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Questionnaire
import * as fhir from '../fhir.js';
import { QuestionnaireEnableOperatorValueSet } from '../fhirValueSets/QuestionnaireEnableOperatorValueSet.js';
import { QuestionnaireQuestionsValueSet } from '../fhirValueSets/QuestionnaireQuestionsValueSet.js';
import { ItemTypeValueSet } from '../fhirValueSets/ItemTypeValueSet.js';
import { QuestionnaireEnableBehaviorValueSet } from '../fhirValueSets/QuestionnaireEnableBehaviorValueSet.js';
import { PublicationStatusValueSet } from '../fhirValueSets/PublicationStatusValueSet.js';
import { ResourceTypesValueSet } from '../fhirValueSets/ResourceTypesValueSet.js';
/**
 * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
 */
export class QuestionnaireItemEnableWhen extends fhir.BackboneElement {
    /**
     * Default constructor for QuestionnaireItemEnableWhen - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['question']) {
            this.question = source.question;
        }
        else {
            this.question = null;
        }
        if (source['_question']) {
            this._question = new fhir.FhirElement(source._question);
        }
        if (source['operator']) {
            this.operator = source.operator;
        }
        else {
            this.operator = null;
        }
        if (source['_operator']) {
            this._operator = new fhir.FhirElement(source._operator);
        }
        if (source['answerBoolean']) {
            this.answerBoolean = source.answerBoolean;
        }
        if (source['_answerBoolean']) {
            this._answerBoolean = new fhir.FhirElement(source._answerBoolean);
        }
        if (source['answerDecimal']) {
            this.answerDecimal = source.answerDecimal;
        }
        if (source['_answerDecimal']) {
            this._answerDecimal = new fhir.FhirElement(source._answerDecimal);
        }
        if (source['answerInteger']) {
            this.answerInteger = source.answerInteger;
        }
        if (source['_answerInteger']) {
            this._answerInteger = new fhir.FhirElement(source._answerInteger);
        }
        if (source['answerDate']) {
            this.answerDate = source.answerDate;
        }
        if (source['_answerDate']) {
            this._answerDate = new fhir.FhirElement(source._answerDate);
        }
        if (source['answerDateTime']) {
            this.answerDateTime = source.answerDateTime;
        }
        if (source['_answerDateTime']) {
            this._answerDateTime = new fhir.FhirElement(source._answerDateTime);
        }
        if (source['answerTime']) {
            this.answerTime = source.answerTime;
        }
        if (source['_answerTime']) {
            this._answerTime = new fhir.FhirElement(source._answerTime);
        }
        if (source['answerString']) {
            this.answerString = source.answerString;
        }
        if (source['_answerString']) {
            this._answerString = new fhir.FhirElement(source._answerString);
        }
        if (source['answerCoding']) {
            this.answerCoding = new fhir.Coding(source.answerCoding);
        }
        if (source['answerQuantity']) {
            this.answerQuantity = new fhir.Quantity(source.answerQuantity);
        }
        if (source['answerReference']) {
            this.answerReference = new fhir.Reference(source.answerReference);
        }
    }
    /**
     * Required-bound Value Set for operator
     */
    operatorRequiredValueSet() {
        return QuestionnaireEnableOperatorValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["question"]) {
            results.push(["question", 'Missing required element: Questionnaire.item.enableWhen.question']);
        }
        if (this["_question"]) {
            results.push(...this._question.doModelValidation());
        }
        if (!this["operator"]) {
            results.push(["operator", 'Missing required element: Questionnaire.item.enableWhen.operator']);
        }
        if (this["_operator"]) {
            results.push(...this._operator.doModelValidation());
        }
        if (this["_answerBoolean"]) {
            results.push(...this._answerBoolean.doModelValidation());
        }
        if (this["_answerDecimal"]) {
            results.push(...this._answerDecimal.doModelValidation());
        }
        if (this["_answerInteger"]) {
            results.push(...this._answerInteger.doModelValidation());
        }
        if (this["_answerDate"]) {
            results.push(...this._answerDate.doModelValidation());
        }
        if (this["_answerDateTime"]) {
            results.push(...this._answerDateTime.doModelValidation());
        }
        if (this["_answerTime"]) {
            results.push(...this._answerTime.doModelValidation());
        }
        if (this["_answerString"]) {
            results.push(...this._answerString.doModelValidation());
        }
        if (this["answerCoding"]) {
            results.push(...this.answerCoding.doModelValidation());
        }
        if (this["answerQuantity"]) {
            results.push(...this.answerQuantity.doModelValidation());
        }
        if (this["answerReference"]) {
            results.push(...this.answerReference.doModelValidation());
        }
        return results;
    }
}
/**
 * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
 */
export class QuestionnaireItemAnswerOption extends fhir.BackboneElement {
    /**
     * Default constructor for QuestionnaireItemAnswerOption - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['valueInteger']) {
            this.valueInteger = source.valueInteger;
        }
        if (source['_valueInteger']) {
            this._valueInteger = new fhir.FhirElement(source._valueInteger);
        }
        if (source['valueDate']) {
            this.valueDate = source.valueDate;
        }
        if (source['_valueDate']) {
            this._valueDate = new fhir.FhirElement(source._valueDate);
        }
        if (source['valueTime']) {
            this.valueTime = source.valueTime;
        }
        if (source['_valueTime']) {
            this._valueTime = new fhir.FhirElement(source._valueTime);
        }
        if (source['valueString']) {
            this.valueString = source.valueString;
        }
        if (source['_valueString']) {
            this._valueString = new fhir.FhirElement(source._valueString);
        }
        if (source['valueCoding']) {
            this.valueCoding = new fhir.Coding(source.valueCoding);
        }
        if (source['valueReference']) {
            this.valueReference = new fhir.Reference(source.valueReference);
        }
        if (source['initialSelected']) {
            this.initialSelected = source.initialSelected;
        }
        if (source['_initialSelected']) {
            this._initialSelected = new fhir.FhirElement(source._initialSelected);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["_valueInteger"]) {
            results.push(...this._valueInteger.doModelValidation());
        }
        if (this["_valueDate"]) {
            results.push(...this._valueDate.doModelValidation());
        }
        if (this["_valueTime"]) {
            results.push(...this._valueTime.doModelValidation());
        }
        if (this["_valueString"]) {
            results.push(...this._valueString.doModelValidation());
        }
        if (this["valueCoding"]) {
            results.push(...this.valueCoding.doModelValidation());
        }
        if (this["valueReference"]) {
            results.push(...this.valueReference.doModelValidation());
        }
        if (this["_initialSelected"]) {
            results.push(...this._initialSelected.doModelValidation());
        }
        return results;
    }
}
/**
 * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
 */
export class QuestionnaireItemInitial extends fhir.BackboneElement {
    /**
     * Default constructor for QuestionnaireItemInitial - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['valueBoolean']) {
            this.valueBoolean = source.valueBoolean;
        }
        if (source['_valueBoolean']) {
            this._valueBoolean = new fhir.FhirElement(source._valueBoolean);
        }
        if (source['valueDecimal']) {
            this.valueDecimal = source.valueDecimal;
        }
        if (source['_valueDecimal']) {
            this._valueDecimal = new fhir.FhirElement(source._valueDecimal);
        }
        if (source['valueInteger']) {
            this.valueInteger = source.valueInteger;
        }
        if (source['_valueInteger']) {
            this._valueInteger = new fhir.FhirElement(source._valueInteger);
        }
        if (source['valueDate']) {
            this.valueDate = source.valueDate;
        }
        if (source['_valueDate']) {
            this._valueDate = new fhir.FhirElement(source._valueDate);
        }
        if (source['valueDateTime']) {
            this.valueDateTime = source.valueDateTime;
        }
        if (source['_valueDateTime']) {
            this._valueDateTime = new fhir.FhirElement(source._valueDateTime);
        }
        if (source['valueTime']) {
            this.valueTime = source.valueTime;
        }
        if (source['_valueTime']) {
            this._valueTime = new fhir.FhirElement(source._valueTime);
        }
        if (source['valueString']) {
            this.valueString = source.valueString;
        }
        if (source['_valueString']) {
            this._valueString = new fhir.FhirElement(source._valueString);
        }
        if (source['valueUri']) {
            this.valueUri = source.valueUri;
        }
        if (source['_valueUri']) {
            this._valueUri = new fhir.FhirElement(source._valueUri);
        }
        if (source['valueAttachment']) {
            this.valueAttachment = new fhir.Attachment(source.valueAttachment);
        }
        if (source['valueCoding']) {
            this.valueCoding = new fhir.Coding(source.valueCoding);
        }
        if (source['valueQuantity']) {
            this.valueQuantity = new fhir.Quantity(source.valueQuantity);
        }
        if (source['valueReference']) {
            this.valueReference = new fhir.Reference(source.valueReference);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["_valueBoolean"]) {
            results.push(...this._valueBoolean.doModelValidation());
        }
        if (this["_valueDecimal"]) {
            results.push(...this._valueDecimal.doModelValidation());
        }
        if (this["_valueInteger"]) {
            results.push(...this._valueInteger.doModelValidation());
        }
        if (this["_valueDate"]) {
            results.push(...this._valueDate.doModelValidation());
        }
        if (this["_valueDateTime"]) {
            results.push(...this._valueDateTime.doModelValidation());
        }
        if (this["_valueTime"]) {
            results.push(...this._valueTime.doModelValidation());
        }
        if (this["_valueString"]) {
            results.push(...this._valueString.doModelValidation());
        }
        if (this["_valueUri"]) {
            results.push(...this._valueUri.doModelValidation());
        }
        if (this["valueAttachment"]) {
            results.push(...this.valueAttachment.doModelValidation());
        }
        if (this["valueCoding"]) {
            results.push(...this.valueCoding.doModelValidation());
        }
        if (this["valueQuantity"]) {
            results.push(...this.valueQuantity.doModelValidation());
        }
        if (this["valueReference"]) {
            results.push(...this.valueReference.doModelValidation());
        }
        return results;
    }
}
/**
 * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
 */
export class QuestionnaireItem extends fhir.BackboneElement {
    /**
     * Default constructor for QuestionnaireItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['linkId']) {
            this.linkId = source.linkId;
        }
        else {
            this.linkId = null;
        }
        if (source['_linkId']) {
            this._linkId = new fhir.FhirElement(source._linkId);
        }
        if (source['definition']) {
            this.definition = source.definition;
        }
        if (source['_definition']) {
            this._definition = new fhir.FhirElement(source._definition);
        }
        if (source['code']) {
            this.code = source.code.map((x) => new fhir.Coding(x));
        }
        if (source['prefix']) {
            this.prefix = source.prefix;
        }
        if (source['_prefix']) {
            this._prefix = new fhir.FhirElement(source._prefix);
        }
        if (source['text']) {
            this.text = source.text;
        }
        if (source['_text']) {
            this._text = new fhir.FhirElement(source._text);
        }
        if (source['type']) {
            this.type = source.type;
        }
        else {
            this.type = null;
        }
        if (source['_type']) {
            this._type = new fhir.FhirElement(source._type);
        }
        if (source['enableWhen']) {
            this.enableWhen = source.enableWhen.map((x) => new fhir.QuestionnaireItemEnableWhen(x));
        }
        if (source['enableBehavior']) {
            this.enableBehavior = source.enableBehavior;
        }
        if (source['_enableBehavior']) {
            this._enableBehavior = new fhir.FhirElement(source._enableBehavior);
        }
        if (source['required']) {
            this.required = source.required;
        }
        if (source['_required']) {
            this._required = new fhir.FhirElement(source._required);
        }
        if (source['repeats']) {
            this.repeats = source.repeats;
        }
        if (source['_repeats']) {
            this._repeats = new fhir.FhirElement(source._repeats);
        }
        if (source['readOnly']) {
            this.readOnly = source.readOnly;
        }
        if (source['_readOnly']) {
            this._readOnly = new fhir.FhirElement(source._readOnly);
        }
        if (source['maxLength']) {
            this.maxLength = source.maxLength;
        }
        if (source['_maxLength']) {
            this._maxLength = new fhir.FhirElement(source._maxLength);
        }
        if (source['answerValueSet']) {
            this.answerValueSet = source.answerValueSet;
        }
        if (source['_answerValueSet']) {
            this._answerValueSet = new fhir.FhirElement(source._answerValueSet);
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
    codeExampleValueSet() {
        return QuestionnaireQuestionsValueSet;
    }
    /**
     * Required-bound Value Set for type
     */
    typeRequiredValueSet() {
        return ItemTypeValueSet;
    }
    /**
     * Required-bound Value Set for enableBehavior
     */
    enableBehaviorRequiredValueSet() {
        return QuestionnaireEnableBehaviorValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["linkId"]) {
            results.push(["linkId", 'Missing required element: Questionnaire.item.linkId']);
        }
        if (this["_linkId"]) {
            results.push(...this._linkId.doModelValidation());
        }
        if (this["_definition"]) {
            results.push(...this._definition.doModelValidation());
        }
        if (this["code"]) {
            this.code.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_prefix"]) {
            results.push(...this._prefix.doModelValidation());
        }
        if (this["_text"]) {
            results.push(...this._text.doModelValidation());
        }
        if (!this["type"]) {
            results.push(["type", 'Missing required element: Questionnaire.item.type']);
        }
        if (this["_type"]) {
            results.push(...this._type.doModelValidation());
        }
        if (this["enableWhen"]) {
            this.enableWhen.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_enableBehavior"]) {
            results.push(...this._enableBehavior.doModelValidation());
        }
        if (this["_required"]) {
            results.push(...this._required.doModelValidation());
        }
        if (this["_repeats"]) {
            results.push(...this._repeats.doModelValidation());
        }
        if (this["_readOnly"]) {
            results.push(...this._readOnly.doModelValidation());
        }
        if (this["_maxLength"]) {
            results.push(...this._maxLength.doModelValidation());
        }
        if (this["_answerValueSet"]) {
            results.push(...this._answerValueSet.doModelValidation());
        }
        if (this["answerOption"]) {
            this.answerOption.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["initial"]) {
            this.initial.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["item"]) {
            this.item.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
export class Questionnaire extends fhir.DomainResource {
    /**
     * Default constructor for Questionnaire - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Questionnaire';
        if (source['url']) {
            this.url = source.url;
        }
        if (source['_url']) {
            this._url = new fhir.FhirElement(source._url);
        }
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['version']) {
            this.version = source.version;
        }
        if (source['_version']) {
            this._version = new fhir.FhirElement(source._version);
        }
        if (source['name']) {
            this.name = source.name;
        }
        if (source['_name']) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source['title']) {
            this.title = source.title;
        }
        if (source['_title']) {
            this._title = new fhir.FhirElement(source._title);
        }
        if (source['derivedFrom']) {
            this.derivedFrom = source.derivedFrom.map((x) => (x));
        }
        if (source['_derivedFrom']) {
            this._derivedFrom = source._derivedFrom.map((x) => new fhir.FhirElement(x));
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
        if (source['experimental']) {
            this.experimental = source.experimental;
        }
        if (source['_experimental']) {
            this._experimental = new fhir.FhirElement(source._experimental);
        }
        if (source['subjectType']) {
            this.subjectType = source.subjectType.map((x) => (x));
        }
        if (source['_subjectType']) {
            this._subjectType = source._subjectType.map((x) => new fhir.FhirElement(x));
        }
        if (source['date']) {
            this.date = source.date;
        }
        if (source['_date']) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source['publisher']) {
            this.publisher = source.publisher;
        }
        if (source['_publisher']) {
            this._publisher = new fhir.FhirElement(source._publisher);
        }
        if (source['contact']) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source['description']) {
            this.description = source.description;
        }
        if (source['_description']) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source['useContext']) {
            this.useContext = source.useContext.map((x) => new fhir.UsageContext(x));
        }
        if (source['jurisdiction']) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['purpose']) {
            this.purpose = source.purpose;
        }
        if (source['_purpose']) {
            this._purpose = new fhir.FhirElement(source._purpose);
        }
        if (source['copyright']) {
            this.copyright = source.copyright;
        }
        if (source['_copyright']) {
            this._copyright = new fhir.FhirElement(source._copyright);
        }
        if (source['approvalDate']) {
            this.approvalDate = source.approvalDate;
        }
        if (source['_approvalDate']) {
            this._approvalDate = new fhir.FhirElement(source._approvalDate);
        }
        if (source['lastReviewDate']) {
            this.lastReviewDate = source.lastReviewDate;
        }
        if (source['_lastReviewDate']) {
            this._lastReviewDate = new fhir.FhirElement(source._lastReviewDate);
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
    statusRequiredValueSet() {
        return PublicationStatusValueSet;
    }
    /**
     * Required-bound Value Set for subjectType
     */
    subjectTypeRequiredValueSet() {
        return ResourceTypesValueSet;
    }
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet() {
        return QuestionnaireQuestionsValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: Questionnaire.resourceType']);
        }
        if (this["_url"]) {
            results.push(...this._url.doModelValidation());
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_version"]) {
            results.push(...this._version.doModelValidation());
        }
        if (this["_name"]) {
            results.push(...this._name.doModelValidation());
        }
        if (this["_title"]) {
            results.push(...this._title.doModelValidation());
        }
        if (this["_derivedFrom"]) {
            this._derivedFrom.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (!this["status"]) {
            results.push(["status", 'Missing required element: Questionnaire.status']);
        }
        if (this["_status"]) {
            results.push(...this._status.doModelValidation());
        }
        if (this["_experimental"]) {
            results.push(...this._experimental.doModelValidation());
        }
        if (this["_subjectType"]) {
            this._subjectType.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_date"]) {
            results.push(...this._date.doModelValidation());
        }
        if (this["_publisher"]) {
            results.push(...this._publisher.doModelValidation());
        }
        if (this["contact"]) {
            this.contact.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_description"]) {
            results.push(...this._description.doModelValidation());
        }
        if (this["useContext"]) {
            this.useContext.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["jurisdiction"]) {
            this.jurisdiction.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_purpose"]) {
            results.push(...this._purpose.doModelValidation());
        }
        if (this["_copyright"]) {
            results.push(...this._copyright.doModelValidation());
        }
        if (this["_approvalDate"]) {
            results.push(...this._approvalDate.doModelValidation());
        }
        if (this["_lastReviewDate"]) {
            results.push(...this._lastReviewDate.doModelValidation());
        }
        if (this["effectivePeriod"]) {
            results.push(...this.effectivePeriod.doModelValidation());
        }
        if (this["code"]) {
            this.code.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["item"]) {
            this.item.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
//# sourceMappingURL=Questionnaire.js.map