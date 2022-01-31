// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirInterfaces from '../strictinterfaces'
/**
 * The value is nested because we cannot have a repeating structure that has variable type.
 */
export interface IQuestionnaireResponseItemAnswer extends fhirInterfaces.IBackboneElement {
  /**
   * Nested groups and/or questions found within this particular answer.
   */
  item?: fhirInterfaces.IQuestionnaireResponseItem[]|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueBoolean?: boolean|undefined;
  _valueBoolean?: fhirInterfaces.IElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueDecimal?: number|undefined;
  _valueDecimal?: fhirInterfaces.IElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueInteger?: number|undefined;
  _valueInteger?: fhirInterfaces.IElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueDate?: string|undefined;
  _valueDate?: fhirInterfaces.IElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueDateTime?: string|undefined;
  _valueDateTime?: fhirInterfaces.IElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueTime?: string|undefined;
  _valueTime?: fhirInterfaces.IElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueString?: string|undefined;
  _valueString?: fhirInterfaces.IElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueUri?: string|undefined;
  _valueUri?: fhirInterfaces.IElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueAttachment?: fhirInterfaces.IAttachment|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueCoding?: fhirInterfaces.ICoding|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueQuantity?: fhirInterfaces.IQuantity|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueReference?: fhirInterfaces.IReference|undefined;
}
/**
 * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
 */
export interface IQuestionnaireResponseItem extends fhirInterfaces.IBackboneElement {
  /**
   * The value is nested because we cannot have a repeating structure that has variable type.
   */
  answer?: fhirInterfaces.IQuestionnaireResponseItemAnswer[]|undefined;
  /**
   * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].
   * There is no need for this element if the item pointed to by the linkId has a definition listed.
   */
  definition?: string|undefined;
  _definition?: fhirInterfaces.IElement|undefined;
  /**
   * Questions or sub-groups nested beneath a question or group.
   */
  item?: fhirInterfaces.IQuestionnaireResponseItem[]|undefined;
  /**
   * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   */
  linkId: string;
  _linkId?: fhirInterfaces.IElement|undefined;
  /**
   * Text that is displayed above the contents of the group or as the text of the question being answered.
   */
  text?: string|undefined;
  _text?: fhirInterfaces.IElement|undefined;
}
/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
export interface IQuestionnaireResponse extends fhirInterfaces.IDomainResource {
  /**
   * Resource Type Name
   */
  readonly resourceType: "QuestionnaireResponse";
  /**
   * Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation.  Authoring by device would indicate that some portion of the questionnaire had been auto-populated.
   */
  author?: fhirInterfaces.IReference|undefined;
  /**
   * May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured.
   * This element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.
   */
  authored?: string|undefined;
  _authored?: fhirInterfaces.IElement|undefined;
  /**
   * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
   */
  basedOn?: fhirInterfaces.IReference[]|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.
   */
  encounter?: fhirInterfaces.IReference|undefined;
  /**
   * A business identifier assigned to a particular completed (or partially completed) questionnaire.
   */
  identifier?: fhirInterfaces.IIdentifier|undefined;
  /**
   * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
   */
  item?: fhirInterfaces.IQuestionnaireResponseItem[]|undefined;
  /**
   * Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the child questionnaire.  For relationships to referrals, and other types of requests, use basedOn.
   */
  partOf?: fhirInterfaces.IReference[]|undefined;
  /**
   * If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).
   */
  questionnaire?: string|undefined;
  _questionnaire?: fhirInterfaces.IElement|undefined;
  /**
   * If not specified, no inference can be made about who provided the data.
   */
  source?: fhirInterfaces.IReference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: QuestionnaireResponseStatusEnum;
  _status?: fhirInterfaces.IElement|undefined;
  /**
   * If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.
   */
  subject?: fhirInterfaces.IReference|undefined;
}
/**
 * Code Values for the QuestionnaireResponse.status field
 */
export enum QuestionnaireResponseStatusEnum {
  IN_PROGRESS = "in-progress",
  COMPLETED = "completed",
  AMENDED = "amended",
  ENTERED_IN_ERROR = "entered-in-error",
  STOPPED = "stopped",
}