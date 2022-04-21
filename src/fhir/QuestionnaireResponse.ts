// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: QuestionnaireResponse

import * as fhir from '../fhir.js'

import { QuestionnaireAnswersStatusValueSet, QuestionnaireAnswersStatusValueSetType, QuestionnaireAnswersStatusValueSetEnum } from '../fhirValueSets/QuestionnaireAnswersStatusValueSet.js'

/**
 * The value is nested because we cannot have a repeating structure that has variable type.
 */
export type IQuestionnaireResponseItemAnswer = fhir.IBackboneElement & { 
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueBoolean?: boolean|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  _valueBoolean?: fhir.IFhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueDecimal?: number|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  _valueDecimal?: fhir.IFhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueInteger?: number|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  _valueInteger?: fhir.IFhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueDate?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  _valueDate?: fhir.IFhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  _valueDateTime?: fhir.IFhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueTime?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  _valueTime?: fhir.IFhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueString?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  _valueString?: fhir.IFhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueUri?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  _valueUri?: fhir.IFhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueAttachment?: fhir.IAttachment|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueCoding?: fhir.ICoding|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueQuantity?: fhir.IQuantity|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  valueReference?: fhir.IReference|undefined;
  /**
   * Nested groups and/or questions found within this particular answer.
   */
  item?: fhir.IQuestionnaireResponseItem[]|undefined;
}

/**
 * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
 */
export type IQuestionnaireResponseItem = fhir.IBackboneElement & { 
  /**
   * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   */
  linkId: string|null;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.linkId
   */
  _linkId?: fhir.IFhirElement|undefined;
  /**
   * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].
   * There is no need for this element if the item pointed to by the linkId has a definition listed.
   */
  definition?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.definition
   */
  _definition?: fhir.IFhirElement|undefined;
  /**
   * Text that is displayed above the contents of the group or as the text of the question being answered.
   */
  text?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.text
   */
  _text?: fhir.IFhirElement|undefined;
  /**
   * The value is nested because we cannot have a repeating structure that has variable type.
   */
  answer?: fhir.IQuestionnaireResponseItemAnswer[]|undefined;
  /**
   * Questions or sub-groups nested beneath a question or group.
   */
  item?: fhir.IQuestionnaireResponseItem[]|undefined;
}

/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
export type IQuestionnaireResponse = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "QuestionnaireResponse";
  /**
   * A business identifier assigned to a particular completed (or partially completed) questionnaire.
   */
  identifier?: fhir.IIdentifier|undefined;
  /**
   * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
   */
  basedOn?: fhir.IReference[]|undefined;
  /**
   * Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the child questionnaire.  For relationships to referrals, and other types of requests, use basedOn.
   */
  partOf?: fhir.IReference[]|undefined;
  /**
   * If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).
   */
  questionnaire?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.questionnaire
   */
  _questionnaire?: fhir.IFhirElement|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: QuestionnaireAnswersStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.
   */
  subject?: fhir.IReference|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.
   */
  encounter?: fhir.IReference|undefined;
  /**
   * May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured.
   * This element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.
   */
  authored?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.authored
   */
  _authored?: fhir.IFhirElement|undefined;
  /**
   * Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation.  Authoring by device would indicate that some portion of the questionnaire had been auto-populated.
   */
  author?: fhir.IReference|undefined;
  /**
   * If not specified, no inference can be made about who provided the data.
   */
  source?: fhir.IReference|undefined;
  /**
   * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
   */
  item?: fhir.IQuestionnaireResponseItem[]|undefined;
}

/**
 * The value is nested because we cannot have a repeating structure that has variable type.
 */
export class QuestionnaireResponseItemAnswer extends fhir.BackboneElement implements IQuestionnaireResponseItemAnswer {
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueBoolean?: boolean|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  public _valueBoolean?: fhir.FhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueDecimal?: number|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  public _valueDecimal?: fhir.FhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueInteger?: number|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  public _valueInteger?: fhir.FhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueDate?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  public _valueDate?: fhir.FhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  public _valueDateTime?: fhir.FhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueTime?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  public _valueTime?: fhir.FhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueString?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  public _valueString?: fhir.FhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueUri?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.answer.value[x]
   */
  public _valueUri?: fhir.FhirElement|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueAttachment?: fhir.Attachment|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueCoding?: fhir.Coding|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueQuantity?: fhir.Quantity|undefined;
  /**
   * More complex structures (Attachment, Resource and Quantity) will typically be limited to electronic forms that can expose an appropriate user interface to capture the components and enforce the constraints of a complex data type.  Additional complex types can be introduced through extensions. Must match the datatype specified by Questionnaire.item.type in the corresponding Questionnaire.
   */
  public valueReference?: fhir.Reference|undefined;
  /**
   * Nested groups and/or questions found within this particular answer.
   */
  public item?: fhir.QuestionnaireResponseItem[]|undefined;
  /**
   * Default constructor for QuestionnaireResponseItemAnswer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IQuestionnaireResponseItemAnswer> = { }) {
    super(source);
    if (source['valueBoolean']) { this.valueBoolean = source.valueBoolean; }
    if (source['_valueBoolean']) { this._valueBoolean = new fhir.FhirElement(source._valueBoolean!); }
    if (source['valueDecimal']) { this.valueDecimal = source.valueDecimal; }
    if (source['_valueDecimal']) { this._valueDecimal = new fhir.FhirElement(source._valueDecimal!); }
    if (source['valueInteger']) { this.valueInteger = source.valueInteger; }
    if (source['_valueInteger']) { this._valueInteger = new fhir.FhirElement(source._valueInteger!); }
    if (source['valueDate']) { this.valueDate = source.valueDate; }
    if (source['_valueDate']) { this._valueDate = new fhir.FhirElement(source._valueDate!); }
    if (source['valueDateTime']) { this.valueDateTime = source.valueDateTime; }
    if (source['_valueDateTime']) { this._valueDateTime = new fhir.FhirElement(source._valueDateTime!); }
    if (source['valueTime']) { this.valueTime = source.valueTime; }
    if (source['_valueTime']) { this._valueTime = new fhir.FhirElement(source._valueTime!); }
    if (source['valueString']) { this.valueString = source.valueString; }
    if (source['_valueString']) { this._valueString = new fhir.FhirElement(source._valueString!); }
    if (source['valueUri']) { this.valueUri = source.valueUri; }
    if (source['_valueUri']) { this._valueUri = new fhir.FhirElement(source._valueUri!); }
    if (source['valueAttachment']) { this.valueAttachment = new fhir.Attachment(source.valueAttachment!); }
    if (source['valueCoding']) { this.valueCoding = new fhir.Coding(source.valueCoding!); }
    if (source['valueQuantity']) { this.valueQuantity = new fhir.Quantity(source.valueQuantity!); }
    if (source['valueReference']) { this.valueReference = new fhir.Reference(source.valueReference!); }
    if (source['item']) { this.item = source.item.map((x) => new fhir.QuestionnaireResponseItem(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_valueBoolean"]) { results.push(...this._valueBoolean.doModelValidation()); }
    if (this["_valueDecimal"]) { results.push(...this._valueDecimal.doModelValidation()); }
    if (this["_valueInteger"]) { results.push(...this._valueInteger.doModelValidation()); }
    if (this["_valueDate"]) { results.push(...this._valueDate.doModelValidation()); }
    if (this["_valueDateTime"]) { results.push(...this._valueDateTime.doModelValidation()); }
    if (this["_valueTime"]) { results.push(...this._valueTime.doModelValidation()); }
    if (this["_valueString"]) { results.push(...this._valueString.doModelValidation()); }
    if (this["_valueUri"]) { results.push(...this._valueUri.doModelValidation()); }
    if (this["valueAttachment"]) { results.push(...this.valueAttachment.doModelValidation()); }
    if (this["valueCoding"]) { results.push(...this.valueCoding.doModelValidation()); }
    if (this["valueQuantity"]) { results.push(...this.valueQuantity.doModelValidation()); }
    if (this["valueReference"]) { results.push(...this.valueReference.doModelValidation()); }
    if (this["item"]) { this.item.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

/**
 * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
 */
export class QuestionnaireResponseItem extends fhir.BackboneElement implements IQuestionnaireResponseItem {
  /**
   * The item from the Questionnaire that corresponds to this item in the QuestionnaireResponse resource.
   */
  public linkId: string|null;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.linkId
   */
  public _linkId?: fhir.FhirElement|undefined;
  /**
   * The ElementDefinition must be in a [StructureDefinition](structuredefinition.html#), and must have a fragment identifier that identifies the specific data element by its id (Element.id). E.g. http://hl7.org/fhir/StructureDefinition/Observation#Observation.value[x].
   * There is no need for this element if the item pointed to by the linkId has a definition listed.
   */
  public definition?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.definition
   */
  public _definition?: fhir.FhirElement|undefined;
  /**
   * Text that is displayed above the contents of the group or as the text of the question being answered.
   */
  public text?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.item.text
   */
  public _text?: fhir.FhirElement|undefined;
  /**
   * The value is nested because we cannot have a repeating structure that has variable type.
   */
  public answer?: fhir.QuestionnaireResponseItemAnswer[]|undefined;
  /**
   * Questions or sub-groups nested beneath a question or group.
   */
  public item?: fhir.QuestionnaireResponseItem[]|undefined;
  /**
   * Default constructor for QuestionnaireResponseItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IQuestionnaireResponseItem> = { }) {
    super(source);
    if (source['linkId']) { this.linkId = source.linkId; }
    else { this.linkId = null; }
    if (source['_linkId']) { this._linkId = new fhir.FhirElement(source._linkId!); }
    if (source['definition']) { this.definition = source.definition; }
    if (source['_definition']) { this._definition = new fhir.FhirElement(source._definition!); }
    if (source['text']) { this.text = source.text; }
    if (source['_text']) { this._text = new fhir.FhirElement(source._text!); }
    if (source['answer']) { this.answer = source.answer.map((x) => new fhir.QuestionnaireResponseItemAnswer(x)); }
    if (source['item']) { this.item = source.item.map((x) => new fhir.QuestionnaireResponseItem(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["linkId"]) { results.push(["linkId",'Missing required element: QuestionnaireResponse.item.linkId']); }
    if (this["_linkId"]) { results.push(...this._linkId.doModelValidation()); }
    if (this["_definition"]) { results.push(...this._definition.doModelValidation()); }
    if (this["_text"]) { results.push(...this._text.doModelValidation()); }
    if (this["answer"]) { this.answer.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["item"]) { this.item.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}

/**
 * A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.
 */
export class QuestionnaireResponse extends fhir.DomainResource implements IQuestionnaireResponse {
  /**
   * Resource Type Name
   */
  public resourceType: "QuestionnaireResponse";
  /**
   * A business identifier assigned to a particular completed (or partially completed) questionnaire.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * The order, proposal or plan that is fulfilled in whole or in part by this QuestionnaireResponse.  For example, a ServiceRequest seeking an intake assessment or a decision support recommendation to assess for post-partum depression.
   */
  public basedOn?: fhir.Reference[]|undefined;
  /**
   * Composition of questionnaire responses will be handled by the parent questionnaire having answers that reference the child questionnaire.  For relationships to referrals, and other types of requests, use basedOn.
   */
  public partOf?: fhir.Reference[]|undefined;
  /**
   * If a QuestionnaireResponse references a Questionnaire, then the QuestionnaireResponse structure must be consistent with the Questionnaire (i.e. questions must be organized into the same groups, nested questions must still be nested, etc.).
   */
  public questionnaire?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.questionnaire
   */
  public _questionnaire?: fhir.FhirElement|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: QuestionnaireAnswersStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * If the Questionnaire declared a subjectType, the resource pointed to by this element must be an instance of one of the listed types.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. A questionnaire that was initiated during an encounter but not fully completed during the encounter would still generally be associated with the encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * May be different from the lastUpdateTime of the resource itself, because that reflects when the data was known to the server, not when the data was captured.
   * This element is optional to allow for systems that might not know the value, however it SHOULD be populated if possible.
   */
  public authored?: string|undefined;
  /**
   * Extended properties for primitive element: QuestionnaireResponse.authored
   */
  public _authored?: fhir.FhirElement|undefined;
  /**
   * Mapping a subject's answers to multiple choice options and determining what to put in the textual answer is a matter of interpretation.  Authoring by device would indicate that some portion of the questionnaire had been auto-populated.
   */
  public author?: fhir.Reference|undefined;
  /**
   * If not specified, no inference can be made about who provided the data.
   */
  public source?: fhir.Reference|undefined;
  /**
   * Groups cannot have answers and therefore must nest directly within item. When dealing with questions, nesting must occur within each answer because some questions may have multiple answers (and the nesting occurs for each answer).
   */
  public item?: fhir.QuestionnaireResponseItem[]|undefined;
  /**
   * Default constructor for QuestionnaireResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IQuestionnaireResponse> = { }) {
    super(source);
    this.resourceType = 'QuestionnaireResponse';
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier!); }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    if (source['questionnaire']) { this.questionnaire = source.questionnaire; }
    if (source['_questionnaire']) { this._questionnaire = new fhir.FhirElement(source._questionnaire!); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject!); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source['authored']) { this.authored = source.authored; }
    if (source['_authored']) { this._authored = new fhir.FhirElement(source._authored!); }
    if (source['author']) { this.author = new fhir.Reference(source.author!); }
    if (source['source']) { this.source = new fhir.Reference(source.source!); }
    if (source['item']) { this.item = source.item.map((x) => new fhir.QuestionnaireResponseItem(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public statusRequiredValueSet():QuestionnaireAnswersStatusValueSetType {
    return QuestionnaireAnswersStatusValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: QuestionnaireResponse.resourceType']); }
    if (this["identifier"]) { results.push(...this.identifier.doModelValidation()); }
    if (this["basedOn"]) { this.basedOn.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["partOf"]) { this.partOf.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_questionnaire"]) { results.push(...this._questionnaire.doModelValidation()); }
    if (!this["status"]) { results.push(["status",'Missing required element: QuestionnaireResponse.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["subject"]) { results.push(...this.subject.doModelValidation()); }
    if (this["encounter"]) { results.push(...this.encounter.doModelValidation()); }
    if (this["_authored"]) { results.push(...this._authored.doModelValidation()); }
    if (this["author"]) { results.push(...this.author.doModelValidation()); }
    if (this["source"]) { results.push(...this.source.doModelValidation()); }
    if (this["item"]) { this.item.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
