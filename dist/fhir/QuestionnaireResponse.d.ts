import * as fhir from '../fhir';
/**
 * The value is nested because we cannot have a repeating structure that has variable type.
 */
export declare type IQuestionnaireResponseItemAnswer = fhir.IBackboneElement & {
    /**
     * Nested groups and/or questions found within this particular answer.
     */
    item?: fhir.IQuestionnaireResponseItem[] | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhir.IFhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.IFhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDate?: string | undefined;
    _valueDate?: fhir.IFhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.IFhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueTime?: string | undefined;
    _valueTime?: fhir.IFhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueString?: string | undefined;
    _valueString?: fhir.IFhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueUri?: string | undefined;
    _valueUri?: fhir.IFhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueAttachment?: fhir.IAttachment | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueCoding?: fhir.ICoding | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueReference?: fhir.IReference | undefined;
};
/**
 * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
 */
export declare type IQuestionnaireResponseItem = fhir.IBackboneElement & {
    /**
     * The value is nested because we cannot have a repeating structure that has variable type.
     */
    answer?: fhir.IQuestionnaireResponseItemAnswer[] | undefined;
    /**
     * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].
     * There is no need for this element if the item pointed to by the linkId has a definition listed.
     */
    definition?: string | undefined;
    _definition?: fhir.IFhirElement | undefined;
    /**
     * Questions or sub-groups nested beneath a question or group.
     */
    item?: fhir.IQuestionnaireResponseItem[] | undefined;
    /**
     * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
     */
    linkId: string | null;
    _linkId?: fhir.IFhirElement | undefined;
    /**
     * Text that is displayed above the contents of the group or as the text of the question being answered.
     */
    text?: string | undefined;
    _text?: fhir.IFhirElement | undefined;
};
/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
export declare type IQuestionnaireResponse = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "QuestionnaireResponse";
    /**
     * Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation.  Authoring by device would indicate that some portion of the questionnaire had been auto-populated.
     */
    author?: fhir.IReference | undefined;
    /**
     * May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured.
     * This element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.
     */
    authored?: string | undefined;
    _authored?: fhir.IFhirElement | undefined;
    /**
     * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * A business identifier assigned to a particular completed (or partially completed) questionnaire.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
     */
    item?: fhir.IQuestionnaireResponseItem[] | undefined;
    /**
     * Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the child questionnaire.  For relationships to referrals, and other types of requests, use basedOn.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).
     */
    questionnaire?: string | undefined;
    _questionnaire?: fhir.IFhirElement | undefined;
    /**
     * If not specified, no inference can be made about who provided the data.
     */
    source?: fhir.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: QuestionnaireResponseStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.
     */
    subject?: fhir.IReference | undefined;
};
/**
 * The value is nested because we cannot have a repeating structure that has variable type.
 */
export declare class QuestionnaireResponseItemAnswer extends fhir.BackboneElement implements fhir.IQuestionnaireResponseItemAnswer {
    /**
     * Nested groups and/or questions found within this particular answer.
     */
    item?: fhir.QuestionnaireResponseItem[] | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDecimal?: number | undefined;
    _valueDecimal?: fhir.FhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueInteger?: number | undefined;
    _valueInteger?: fhir.FhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDate?: string | undefined;
    _valueDate?: fhir.FhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueDateTime?: string | undefined;
    _valueDateTime?: fhir.FhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueTime?: string | undefined;
    _valueTime?: fhir.FhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueString?: string | undefined;
    _valueString?: fhir.FhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueUri?: string | undefined;
    _valueUri?: fhir.FhirElement | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueCoding?: fhir.Coding | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Default constructor for QuestionnaireResponseItemAnswer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IQuestionnaireResponseItemAnswer>);
    /**
     * Check if the current QuestionnaireResponseItemAnswer contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a QuestionnaireResponseItemAnswer from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IQuestionnaireResponseItemAnswer): QuestionnaireResponseItemAnswer;
}
/**
 * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
 */
export declare class QuestionnaireResponseItem extends fhir.BackboneElement implements fhir.IQuestionnaireResponseItem {
    /**
     * The value is nested because we cannot have a repeating structure that has variable type.
     */
    answer?: fhir.QuestionnaireResponseItemAnswer[] | undefined;
    /**
     * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].
     * There is no need for this element if the item pointed to by the linkId has a definition listed.
     */
    definition?: string | undefined;
    _definition?: fhir.FhirElement | undefined;
    /**
     * Questions or sub-groups nested beneath a question or group.
     */
    item?: fhir.QuestionnaireResponseItem[] | undefined;
    /**
     * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
     */
    linkId: string | null;
    _linkId?: fhir.FhirElement | undefined;
    /**
     * Text that is displayed above the contents of the group or as the text of the question being answered.
     */
    text?: string | undefined;
    _text?: fhir.FhirElement | undefined;
    /**
     * Default constructor for QuestionnaireResponseItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IQuestionnaireResponseItem>);
    /**
     * Check if the current QuestionnaireResponseItem contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a QuestionnaireResponseItem from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IQuestionnaireResponseItem): QuestionnaireResponseItem;
}
/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
export declare class QuestionnaireResponse extends fhir.DomainResource implements fhir.IQuestionnaireResponse {
    /**
     * Resource Type Name
     */
    resourceType: "QuestionnaireResponse";
    /**
     * Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation.  Authoring by device would indicate that some portion of the questionnaire had been auto-populated.
     */
    author?: fhir.Reference | undefined;
    /**
     * May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured.
     * This element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.
     */
    authored?: string | undefined;
    _authored?: fhir.FhirElement | undefined;
    /**
     * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * A business identifier assigned to a particular completed (or partially completed) questionnaire.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
     */
    item?: fhir.QuestionnaireResponseItem[] | undefined;
    /**
     * Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the child questionnaire.  For relationships to referrals, and other types of requests, use basedOn.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).
     */
    questionnaire?: string | undefined;
    _questionnaire?: fhir.FhirElement | undefined;
    /**
     * If not specified, no inference can be made about who provided the data.
     */
    source?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: QuestionnaireResponseStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Default constructor for QuestionnaireResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IQuestionnaireResponse>);
    /**
     * Check if the current QuestionnaireResponse contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a QuestionnaireResponse from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IQuestionnaireResponse): QuestionnaireResponse;
}
/**
 * Code Values for the QuestionnaireResponse.status field
 */
export declare enum QuestionnaireResponseStatusEnum {
    IN_PROGRESS = "in-progress",
    COMPLETED = "completed",
    AMENDED = "amended",
    ENTERED_IN_ERROR = "entered-in-error",
    STOPPED = "stopped"
}
//# sourceMappingURL=QuestionnaireResponse.d.ts.map