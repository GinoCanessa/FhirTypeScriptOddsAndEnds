import * as fhirInterfaces from '../strictinterfaces';
/**
 * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
 */
export interface IQuestionnaireItemEnableWhen extends fhirInterfaces.IBackboneElement {
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerBoolean?: boolean | undefined;
    _answerBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerDecimal?: number | undefined;
    _answerDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerInteger?: number | undefined;
    _answerInteger?: fhirInterfaces.IElement | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerDate?: string | undefined;
    _answerDate?: fhirInterfaces.IElement | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerDateTime?: string | undefined;
    _answerDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerTime?: string | undefined;
    _answerTime?: fhirInterfaces.IElement | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerString?: string | undefined;
    _answerString?: fhirInterfaces.IElement | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * A value that the referenced question is tested using the specified operator in order for the item to be enabled.
     */
    answerReference?: fhirInterfaces.IReference | undefined;
    /**
     * Specifies the criteria by which the question is enabled.
     */
    operator: QuestionnaireItemEnableWhenOperatorEnum;
    _operator?: fhirInterfaces.IElement | undefined;
    /**
     * If multiple question occurrences are present for the same question (same linkId), then this refers to the nearest question occurrence reachable by tracing first the "ancestor" axis and then the "preceding" axis and then the "following" axis.
     */
    question: string;
    _question?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Questionnaire.item.enableWhen.operator field
 */
export declare enum QuestionnaireItemEnableWhenOperatorEnum {
    EXISTS = "exists",
    EQUALS = "=",
    NOT_EQUALS = "!=",
    GREATER_THAN = ">",
    LESS_THAN = "<",
    GREATER_THAN_OR_EQUALS = ">=",
    LESS_THAN_OR_EQUALS = "<="
}
/**
 * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
 */
export interface IQuestionnaireItemAnswerOption extends fhirInterfaces.IBackboneElement {
    /**
     * Use this instead of initial[v] if answerValueSet is present.
     */
    initialSelected?: boolean | undefined;
    _initialSelected?: fhirInterfaces.IElement | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirInterfaces.IElement | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirInterfaces.IElement | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueString?: string | undefined;
    _valueString?: fhirInterfaces.IElement | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * The data type of the value must agree with the item.type.
     */
    valueReference?: fhirInterfaces.IReference | undefined;
}
/**
 * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
 */
export interface IQuestionnaireItemInitial extends fhirInterfaces.IBackboneElement {
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhirInterfaces.IElement | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhirInterfaces.IElement | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueDate?: string | undefined;
    _valueDate?: fhirInterfaces.IElement | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueTime?: string | undefined;
    _valueTime?: fhirInterfaces.IElement | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueString?: string | undefined;
    _valueString?: fhirInterfaces.IElement | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueUri?: string | undefined;
    _valueUri?: fhirInterfaces.IElement | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueAttachment?: fhirInterfaces.IAttachment | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueCoding?: fhirInterfaces.ICoding | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The type of the initial value must be consistent with the type of the item.
     */
    valueReference?: fhirInterfaces.IReference | undefined;
}
/**
 * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
 */
export interface IQuestionnaireItem extends fhirInterfaces.IBackboneElement {
    /**
     * This element can be used when the value set machinery of answerValueSet is deemed too cumbersome or when there's a need to capture possible answers that are not codes.
     */
    answerOption?: fhirInterfaces.IQuestionnaireItemAnswerOption[] | undefined;
    /**
     * LOINC defines many useful value sets for questionnaire responses. See [LOINC Answer Lists](loinc.html#alist). The value may come from the ElementDefinition referred to by .definition.
     */
    answerValueSet?: string | undefined;
    _answerValueSet?: fhirInterfaces.IElement | undefined;
    /**
     * The value may come from the ElementDefinition referred to by .definition.
     */
    code?: fhirInterfaces.ICoding[] | undefined;
    /**
     * The uri refers to an ElementDefinition in a [StructureDefinition](structuredefinition.html#) and always starts with the [canonical URL](references.html#canonical) for the target resource. When referring to a StructureDefinition, a fragment identifier is used to specify the element definition by its id [Element.id](element-definitions.html#Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x]. In the absence of a fragment identifier, the first/root element definition in the target is the matching element definition.
     */
    definition?: string | undefined;
    _definition?: fhirInterfaces.IElement | undefined;
    /**
     * This element must be specified if more than one enableWhen value is provided.
     */
    enableBehavior?: QuestionnaireItemEnableBehaviorEnum | undefined;
    _enableBehavior?: fhirInterfaces.IElement | undefined;
    /**
     * If multiple repetitions of this extension are present, the item should be enabled when the condition for *any* of the repetitions is true.  I.e. treat "enableWhen"s as being joined by an "or" clause.  This element is a modifier because if enableWhen is present for an item, "required" is ignored unless one of the enableWhen conditions is met. When an item is disabled, all of its descendants are disabled, regardless of what their own enableWhen logic might evaluate to.
     */
    enableWhen?: fhirInterfaces.IQuestionnaireItemEnableWhen[] | undefined;
    /**
     * The user is allowed to change the value and override the default (unless marked as read-only). If the user doesn't change the value, then this initial value will be persisted when the QuestionnaireResponse is initially created.  Note that initial values can influence results.  The data type of initial[x] must agree with the item.type, and only repeating items can have more then one initial value.
     */
    initial?: fhirInterfaces.IQuestionnaireItemInitial[] | undefined;
    /**
     * There is no specified limit to the depth of nesting.  However, Questionnaire authors are encouraged to consider the impact on the user and user interface of overly deep nesting.
     */
    item?: fhirInterfaces.IQuestionnaireItem[] | undefined;
    /**
     * This ''can'' be a meaningful identifier (e.g. a LOINC code) but is not intended to have any meaning.  GUIDs or sequential numbers are appropriate here.
     */
    linkId: string;
    _linkId?: fhirInterfaces.IElement | undefined;
    /**
     * For base64binary, reflects the number of characters representing the encoded data, not the number of bytes of the binary data. The value may come from the ElementDefinition referred to by .definition.
     */
    maxLength?: number | undefined;
    _maxLength?: fhirInterfaces.IElement | undefined;
    /**
     * These are generally unique within a questionnaire, though this is not guaranteed. Some questionnaires may have multiple questions with the same label with logic to control which gets exposed.  Typically, these won't be used for "display" items, though such use is not prohibited.  Systems SHOULD NOT generate their own prefixes if prefixes are defined for any items within a Questionnaire.
     */
    prefix?: string | undefined;
    _prefix?: fhirInterfaces.IElement | undefined;
    /**
     * The value of readOnly elements can be established by asserting  extensions for defaultValues, linkages that support pre-population and/or extensions that support calculation based on other answers.
     */
    readOnly?: boolean | undefined;
    _readOnly?: fhirInterfaces.IElement | undefined;
    /**
     * If a question is marked as repeats=true, then multiple answers can be provided for the question in the corresponding QuestionnaireResponse.  When rendering the questionnaire, it is up to the rendering software whether to render the question text for each answer repetition (i.e. "repeat the question") or to simply allow entry/selection of multiple answers for the question (repeat the answers).  Which is most appropriate visually may depend on the type of answer as well as whether there are nested items.
     * The resulting QuestionnaireResponse will be populated the same way regardless of rendering - one 'question' item with multiple answer values.
     *  The value may come from the ElementDefinition referred to by .definition.
     */
    repeats?: boolean | undefined;
    _repeats?: fhirInterfaces.IElement | undefined;
    /**
     * Questionnaire.item.required only has meaning for elements that are conditionally enabled with enableWhen if the condition evaluates to true.  If an item that contains other items is marked as required, that does not automatically make the contained elements required (though required groups must contain at least one child element). The value may come from the ElementDefinition referred to by .definition.
     */
    required?: boolean | undefined;
    _required?: fhirInterfaces.IElement | undefined;
    /**
     * When using this element to represent the name of a section, use group type item and also make sure to limit the text element to a short string suitable for display as a section heading.  Group item instructions should be included as a display type item within the group.
     */
    text?: string | undefined;
    _text?: fhirInterfaces.IElement | undefined;
    /**
     * Additional constraints on the type of answer can be conveyed by extensions. The value may come from the ElementDefinition referred to by .definition.
     */
    type: QuestionnaireItemTypeEnum;
    _type?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Questionnaire.item.enableBehavior field
 */
export declare enum QuestionnaireItemEnableBehaviorEnum {
    ALL = "all",
    ANY = "any"
}
/**
 * Code Values for the Questionnaire.item.type field
 */
export declare enum QuestionnaireItemTypeEnum {
    GROUP = "group",
    DISPLAY = "display",
    QUESTION = "question",
    BOOLEAN = "boolean",
    DECIMAL = "decimal",
    INTEGER = "integer",
    DATE = "date",
    DATETIME = "dateTime",
    TIME = "time",
    STRING = "string",
    TEXT = "text",
    URL = "url",
    CHOICE = "choice",
    OPEN_CHOICE = "open-choice",
    ATTACHMENT = "attachment",
    REFERENCE = "reference",
    QUANTITY = "quantity"
}
/**
 * A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.
 */
export interface IQuestionnaire extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Questionnaire";
    /**
     * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
     */
    approvalDate?: string | undefined;
    _approvalDate?: fhirInterfaces.IElement | undefined;
    /**
     * An identifier for this question or group of questions in a particular terminology such as LOINC.
     */
    code?: fhirInterfaces.ICoding[] | undefined;
    /**
     * May be a web site, an email address, a telephone number, etc.
     */
    contact?: fhirInterfaces.IContactDetail[] | undefined;
    /**
     * A copyright statement relating to the questionnaire and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the questionnaire.
     */
    copyright?: string | undefined;
    _copyright?: fhirInterfaces.IElement | undefined;
    /**
     * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the questionnaire. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * The URL of a Questionnaire that this Questionnaire is based on.
     */
    derivedFrom?: string[] | undefined;
    _derivedFrom?: fhirInterfaces.IElement[] | undefined;
    /**
     * This description can be used to capture details such as why the questionnaire was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the questionnaire as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the questionnaire is presumed to be the predominant language in the place the questionnaire was created).
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * The effective period for a questionnaire  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
     */
    effectivePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Allows filtering of questionnaires that are appropriate for use versus not.
     */
    experimental?: boolean | undefined;
    _experimental?: fhirInterfaces.IElement | undefined;
    /**
     * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this questionnaire outside of FHIR, where it is not possible to use the logical URI.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The content of the questionnaire is constructed from an ordered, hierarchical collection of items.
     */
    item?: fhirInterfaces.IQuestionnaireItem[] | undefined;
    /**
     * It may be possible for the questionnaire to be used in jurisdictions other than those for which it was originally designed or intended.
     */
    jurisdiction?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * If specified, this date follows the original approval date.
     */
    lastReviewDate?: string | undefined;
    _lastReviewDate?: fhirInterfaces.IElement | undefined;
    /**
     * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Usually an organization but may be an individual. The publisher (or steward) of the questionnaire is the organization or individual primarily responsible for the maintenance and upkeep of the questionnaire. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the questionnaire. This item SHOULD be populated unless the information is available from context.
     */
    publisher?: string | undefined;
    _publisher?: fhirInterfaces.IElement | undefined;
    /**
     * This element does not describe the usage of the questionnaire. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this questionnaire.
     */
    purpose?: string | undefined;
    _purpose?: fhirInterfaces.IElement | undefined;
    /**
     * Allows filtering of questionnaires that are appropriate for use versus not.
     */
    status: QuestionnaireStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * If none are specified, then the subject is unlimited.
     */
    subjectType?: string[] | undefined;
    _subjectType?: fhirInterfaces.IElement[] | undefined;
    /**
     * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
     */
    title?: string | undefined;
    _title?: fhirInterfaces.IElement | undefined;
    /**
     * The name of the referenced questionnaire can be conveyed using the http://hl7.org/fhir/StructureDefinition/display extension.
     */
    url?: string | undefined;
    _url?: fhirInterfaces.IElement | undefined;
    /**
     * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
     */
    useContext?: fhirInterfaces.IUsageContext[] | undefined;
    /**
     * There may be different questionnaire instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the questionnaire with the format [url]|[version].
     */
    version?: string | undefined;
    _version?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the Questionnaire.status field
 */
export declare enum QuestionnaireStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    RETIRED = "retired",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IQuestionnaire.d.ts.map