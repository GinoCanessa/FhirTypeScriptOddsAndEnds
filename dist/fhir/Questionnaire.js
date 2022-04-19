// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
 */
export class QuestionnaireItemEnableWhen extends fhir.BackboneElement {
    /**
     * Default constructor for QuestionnaireItemEnableWhen - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["answerBoolean"]) {
            this.answerBoolean = source.answerBoolean;
        }
        if (source["_answerBoolean"]) {
            this._answerBoolean = new fhir.FhirElement(source._answerBoolean);
        }
        if (source["answerDecimal"]) {
            this.answerDecimal = source.answerDecimal;
        }
        if (source["_answerDecimal"]) {
            this._answerDecimal = new fhir.FhirElement(source._answerDecimal);
        }
        if (source["answerInteger"]) {
            this.answerInteger = source.answerInteger;
        }
        if (source["_answerInteger"]) {
            this._answerInteger = new fhir.FhirElement(source._answerInteger);
        }
        if (source["answerDate"]) {
            this.answerDate = source.answerDate;
        }
        if (source["_answerDate"]) {
            this._answerDate = new fhir.FhirElement(source._answerDate);
        }
        if (source["answerDateTime"]) {
            this.answerDateTime = source.answerDateTime;
        }
        if (source["_answerDateTime"]) {
            this._answerDateTime = new fhir.FhirElement(source._answerDateTime);
        }
        if (source["answerTime"]) {
            this.answerTime = source.answerTime;
        }
        if (source["_answerTime"]) {
            this._answerTime = new fhir.FhirElement(source._answerTime);
        }
        if (source["answerString"]) {
            this.answerString = source.answerString;
        }
        if (source["_answerString"]) {
            this._answerString = new fhir.FhirElement(source._answerString);
        }
        if (source["answerCoding"]) {
            this.answerCoding = new fhir.Coding(source.answerCoding);
        }
        if (source["answerQuantity"]) {
            this.answerQuantity = new fhir.Quantity(source.answerQuantity);
        }
        if (source["answerReference"]) {
            this.answerReference = new fhir.Reference(source.answerReference);
        }
        this.operator = null;
        if (source["operator"]) {
            this.operator = source.operator;
        }
        if (this.operator === undefined) {
            this.operator = null;
        }
        if (source["_operator"]) {
            this._operator = new fhir.FhirElement(source._operator);
        }
        this.question = null;
        if (source["question"]) {
            this.question = source.question;
        }
        if (this.question === undefined) {
            this.question = null;
        }
        if (source["_question"]) {
            this._question = new fhir.FhirElement(source._question);
        }
    }
    /**
     * Check if the current QuestionnaireItemEnableWhen contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["operator"] === undefined) {
            missingElements.push("operator");
        }
        if (this["question"] === undefined) {
            missingElements.push("question");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a QuestionnaireItemEnableWhen from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new QuestionnaireItemEnableWhen(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `QuestionnaireItemEnableWhen is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
        if (source["initialSelected"]) {
            this.initialSelected = source.initialSelected;
        }
        if (source["_initialSelected"]) {
            this._initialSelected = new fhir.FhirElement(source._initialSelected);
        }
        if (source["valueInteger"]) {
            this.valueInteger = source.valueInteger;
        }
        if (source["_valueInteger"]) {
            this._valueInteger = new fhir.FhirElement(source._valueInteger);
        }
        if (source["valueDate"]) {
            this.valueDate = source.valueDate;
        }
        if (source["_valueDate"]) {
            this._valueDate = new fhir.FhirElement(source._valueDate);
        }
        if (source["valueTime"]) {
            this.valueTime = source.valueTime;
        }
        if (source["_valueTime"]) {
            this._valueTime = new fhir.FhirElement(source._valueTime);
        }
        if (source["valueString"]) {
            this.valueString = source.valueString;
        }
        if (source["_valueString"]) {
            this._valueString = new fhir.FhirElement(source._valueString);
        }
        if (source["valueCoding"]) {
            this.valueCoding = new fhir.Coding(source.valueCoding);
        }
        if (source["valueReference"]) {
            this.valueReference = new fhir.Reference(source.valueReference);
        }
    }
    /**
     * Check if the current QuestionnaireItemAnswerOption contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a QuestionnaireItemAnswerOption from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new QuestionnaireItemAnswerOption(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `QuestionnaireItemAnswerOption is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
        if (source["valueBoolean"]) {
            this.valueBoolean = source.valueBoolean;
        }
        if (source["_valueBoolean"]) {
            this._valueBoolean = new fhir.FhirElement(source._valueBoolean);
        }
        if (source["valueDecimal"]) {
            this.valueDecimal = source.valueDecimal;
        }
        if (source["_valueDecimal"]) {
            this._valueDecimal = new fhir.FhirElement(source._valueDecimal);
        }
        if (source["valueInteger"]) {
            this.valueInteger = source.valueInteger;
        }
        if (source["_valueInteger"]) {
            this._valueInteger = new fhir.FhirElement(source._valueInteger);
        }
        if (source["valueDate"]) {
            this.valueDate = source.valueDate;
        }
        if (source["_valueDate"]) {
            this._valueDate = new fhir.FhirElement(source._valueDate);
        }
        if (source["valueDateTime"]) {
            this.valueDateTime = source.valueDateTime;
        }
        if (source["_valueDateTime"]) {
            this._valueDateTime = new fhir.FhirElement(source._valueDateTime);
        }
        if (source["valueTime"]) {
            this.valueTime = source.valueTime;
        }
        if (source["_valueTime"]) {
            this._valueTime = new fhir.FhirElement(source._valueTime);
        }
        if (source["valueString"]) {
            this.valueString = source.valueString;
        }
        if (source["_valueString"]) {
            this._valueString = new fhir.FhirElement(source._valueString);
        }
        if (source["valueUri"]) {
            this.valueUri = source.valueUri;
        }
        if (source["_valueUri"]) {
            this._valueUri = new fhir.FhirElement(source._valueUri);
        }
        if (source["valueAttachment"]) {
            this.valueAttachment = new fhir.Attachment(source.valueAttachment);
        }
        if (source["valueCoding"]) {
            this.valueCoding = new fhir.Coding(source.valueCoding);
        }
        if (source["valueQuantity"]) {
            this.valueQuantity = new fhir.Quantity(source.valueQuantity);
        }
        if (source["valueReference"]) {
            this.valueReference = new fhir.Reference(source.valueReference);
        }
    }
    /**
     * Check if the current QuestionnaireItemInitial contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a QuestionnaireItemInitial from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new QuestionnaireItemInitial(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `QuestionnaireItemInitial is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
        if (source["answerOption"]) {
            this.answerOption = source.answerOption.map((x) => new fhir.QuestionnaireItemAnswerOption(x));
        }
        if (source["answerValueSet"]) {
            this.answerValueSet = source.answerValueSet;
        }
        if (source["_answerValueSet"]) {
            this._answerValueSet = new fhir.FhirElement(source._answerValueSet);
        }
        if (source["code"]) {
            this.code = source.code.map((x) => new fhir.Coding(x));
        }
        if (source["definition"]) {
            this.definition = source.definition;
        }
        if (source["_definition"]) {
            this._definition = new fhir.FhirElement(source._definition);
        }
        if (source["enableBehavior"]) {
            this.enableBehavior = source.enableBehavior;
        }
        if (source["_enableBehavior"]) {
            this._enableBehavior = new fhir.FhirElement(source._enableBehavior);
        }
        if (source["enableWhen"]) {
            this.enableWhen = source.enableWhen.map((x) => new fhir.QuestionnaireItemEnableWhen(x));
        }
        if (source["initial"]) {
            this.initial = source.initial.map((x) => new fhir.QuestionnaireItemInitial(x));
        }
        if (source["item"]) {
            this.item = source.item.map((x) => new fhir.QuestionnaireItem(x));
        }
        this.linkId = null;
        if (source["linkId"]) {
            this.linkId = source.linkId;
        }
        if (this.linkId === undefined) {
            this.linkId = null;
        }
        if (source["_linkId"]) {
            this._linkId = new fhir.FhirElement(source._linkId);
        }
        if (source["maxLength"]) {
            this.maxLength = source.maxLength;
        }
        if (source["_maxLength"]) {
            this._maxLength = new fhir.FhirElement(source._maxLength);
        }
        if (source["prefix"]) {
            this.prefix = source.prefix;
        }
        if (source["_prefix"]) {
            this._prefix = new fhir.FhirElement(source._prefix);
        }
        if (source["readOnly"]) {
            this.readOnly = source.readOnly;
        }
        if (source["_readOnly"]) {
            this._readOnly = new fhir.FhirElement(source._readOnly);
        }
        if (source["repeats"]) {
            this.repeats = source.repeats;
        }
        if (source["_repeats"]) {
            this._repeats = new fhir.FhirElement(source._repeats);
        }
        if (source["required"]) {
            this.required = source.required;
        }
        if (source["_required"]) {
            this._required = new fhir.FhirElement(source._required);
        }
        if (source["text"]) {
            this.text = source.text;
        }
        if (source["_text"]) {
            this._text = new fhir.FhirElement(source._text);
        }
        this.type = null;
        if (source["type"]) {
            this.type = source.type;
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["_type"]) {
            this._type = new fhir.FhirElement(source._type);
        }
    }
    /**
     * Check if the current QuestionnaireItem contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["linkId"] === undefined) {
            missingElements.push("linkId");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a QuestionnaireItem from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new QuestionnaireItem(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `QuestionnaireItem is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
        if (source["approvalDate"]) {
            this.approvalDate = source.approvalDate;
        }
        if (source["_approvalDate"]) {
            this._approvalDate = new fhir.FhirElement(source._approvalDate);
        }
        if (source["code"]) {
            this.code = source.code.map((x) => new fhir.Coding(x));
        }
        if (source["contact"]) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source["copyright"]) {
            this.copyright = source.copyright;
        }
        if (source["_copyright"]) {
            this._copyright = new fhir.FhirElement(source._copyright);
        }
        if (source["date"]) {
            this.date = source.date;
        }
        if (source["_date"]) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source["derivedFrom"]) {
            this.derivedFrom = source.derivedFrom.map((x) => (x));
        }
        if (source["_derivedFrom"]) {
            this._derivedFrom = source._derivedFrom.map((x) => new fhir.FhirElement(x));
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["effectivePeriod"]) {
            this.effectivePeriod = new fhir.Period(source.effectivePeriod);
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
        if (source["item"]) {
            this.item = source.item.map((x) => new fhir.QuestionnaireItem(x));
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
        if (source["subjectType"]) {
            this.subjectType = source.subjectType.map((x) => (x));
        }
        if (source["_subjectType"]) {
            this._subjectType = source._subjectType.map((x) => new fhir.FhirElement(x));
        }
        if (source["title"]) {
            this.title = source.title;
        }
        if (source["_title"]) {
            this._title = new fhir.FhirElement(source._title);
        }
        if (source["url"]) {
            this.url = source.url;
        }
        if (source["_url"]) {
            this._url = new fhir.FhirElement(source._url);
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
     * Check if the current Questionnaire contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Questionnaire from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new Questionnaire(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `Questionnaire is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the Questionnaire.item.enableWhen.operator field
 */
export var QuestionnaireItemEnableWhenOperatorEnum;
(function (QuestionnaireItemEnableWhenOperatorEnum) {
    QuestionnaireItemEnableWhenOperatorEnum["EXISTS"] = "exists";
    QuestionnaireItemEnableWhenOperatorEnum["EQUALS"] = "=";
    QuestionnaireItemEnableWhenOperatorEnum["NOT_EQUALS"] = "!=";
    QuestionnaireItemEnableWhenOperatorEnum["GREATER_THAN"] = ">";
    QuestionnaireItemEnableWhenOperatorEnum["LESS_THAN"] = "<";
    QuestionnaireItemEnableWhenOperatorEnum["GREATER_THAN_OR_EQUALS"] = ">=";
    QuestionnaireItemEnableWhenOperatorEnum["LESS_THAN_OR_EQUALS"] = "<=";
})(QuestionnaireItemEnableWhenOperatorEnum || (QuestionnaireItemEnableWhenOperatorEnum = {}));
/**
 * Code Values for the Questionnaire.item.enableBehavior field
 */
export var QuestionnaireItemEnableBehaviorEnum;
(function (QuestionnaireItemEnableBehaviorEnum) {
    QuestionnaireItemEnableBehaviorEnum["ALL"] = "all";
    QuestionnaireItemEnableBehaviorEnum["ANY"] = "any";
})(QuestionnaireItemEnableBehaviorEnum || (QuestionnaireItemEnableBehaviorEnum = {}));
/**
 * Code Values for the Questionnaire.item.type field
 */
export var QuestionnaireItemTypeEnum;
(function (QuestionnaireItemTypeEnum) {
    QuestionnaireItemTypeEnum["GROUP"] = "group";
    QuestionnaireItemTypeEnum["DISPLAY"] = "display";
    QuestionnaireItemTypeEnum["QUESTION"] = "question";
    QuestionnaireItemTypeEnum["BOOLEAN"] = "boolean";
    QuestionnaireItemTypeEnum["DECIMAL"] = "decimal";
    QuestionnaireItemTypeEnum["INTEGER"] = "integer";
    QuestionnaireItemTypeEnum["DATE"] = "date";
    QuestionnaireItemTypeEnum["DATETIME"] = "dateTime";
    QuestionnaireItemTypeEnum["TIME"] = "time";
    QuestionnaireItemTypeEnum["STRING"] = "string";
    QuestionnaireItemTypeEnum["TEXT"] = "text";
    QuestionnaireItemTypeEnum["URL"] = "url";
    QuestionnaireItemTypeEnum["CHOICE"] = "choice";
    QuestionnaireItemTypeEnum["OPEN_CHOICE"] = "open-choice";
    QuestionnaireItemTypeEnum["ATTACHMENT"] = "attachment";
    QuestionnaireItemTypeEnum["REFERENCE"] = "reference";
    QuestionnaireItemTypeEnum["QUANTITY"] = "quantity";
})(QuestionnaireItemTypeEnum || (QuestionnaireItemTypeEnum = {}));
/**
 * Code Values for the Questionnaire.status field
 */
export var QuestionnaireStatusEnum;
(function (QuestionnaireStatusEnum) {
    QuestionnaireStatusEnum["DRAFT"] = "draft";
    QuestionnaireStatusEnum["ACTIVE"] = "active";
    QuestionnaireStatusEnum["RETIRED"] = "retired";
    QuestionnaireStatusEnum["UNKNOWN"] = "unknown";
})(QuestionnaireStatusEnum || (QuestionnaireStatusEnum = {}));
//# sourceMappingURL=Questionnaire.js.map