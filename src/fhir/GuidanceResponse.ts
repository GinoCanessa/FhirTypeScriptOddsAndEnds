// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
export type IGuidanceResponse = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "GuidanceResponse";
  /**
   * If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
   */
  dataRequirement?: fhir.IDataRequirement[]|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official copmletion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: fhir.IReference|undefined;
  /**
   * Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
   */
  evaluationMessage?: fhir.IReference[]|undefined;
  /**
   * Allows a service to provide  unique, business identifiers for the response.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleUri?: string|undefined;
  _moduleUri?: fhir.IFhirElement|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleCanonical?: string|undefined;
  _moduleCanonical?: fhir.IFhirElement|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * Provides a mechanism to communicate additional information about the response.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * Indicates when the guidance response was processed.
   */
  occurrenceDateTime?: string|undefined;
  _occurrenceDateTime?: fhir.IFhirElement|undefined;
  /**
   * The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
   */
  outputParameters?: fhir.IReference|undefined;
  /**
   * Provides a reference to the device that performed the guidance.
   */
  performer?: fhir.IReference|undefined;
  /**
   * Describes the reason for the guidance response in coded or textual form.
   */
  reasonCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
   */
  reasonReference?: fhir.IReference[]|undefined;
  /**
   * The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
   */
  requestIdentifier?: fhir.IIdentifier|undefined;
  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  result?: fhir.IReference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: GuidanceResponseStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * The patient for which the request was processed.
   */
  subject?: fhir.IReference|undefined;
}
/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
export class GuidanceResponse extends fhir.DomainResource implements fhir.IGuidanceResponse {
  /**
   * Resource Type Name
   */
  public override resourceType: "GuidanceResponse";
  /**
   * If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
   */
  public dataRequirement?: fhir.DataRequirement[]|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official copmletion of an encounter but still be tied to the context of the encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
   */
  public evaluationMessage?: fhir.Reference[]|undefined;
  /**
   * Allows a service to provide  unique, business identifiers for the response.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  public moduleUri?: string|undefined;
  public _moduleUri?: fhir.FhirElement|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  public moduleCanonical?: string|undefined;
  public _moduleCanonical?: fhir.FhirElement|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  public moduleCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Provides a mechanism to communicate additional information about the response.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Indicates when the guidance response was processed.
   */
  public occurrenceDateTime?: string|undefined;
  public _occurrenceDateTime?: fhir.FhirElement|undefined;
  /**
   * The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
   */
  public outputParameters?: fhir.Reference|undefined;
  /**
   * Provides a reference to the device that performed the guidance.
   */
  public performer?: fhir.Reference|undefined;
  /**
   * Describes the reason for the guidance response in coded or textual form.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined;
  /**
   * Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
   */
  public reasonReference?: fhir.Reference[]|undefined;
  /**
   * The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
   */
  public requestIdentifier?: fhir.Identifier|undefined;
  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  public result?: fhir.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: GuidanceResponseStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * The patient for which the request was processed.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * Default constructor for GuidanceResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IGuidanceResponse> = {}) {
    super(source);
    this.resourceType = 'GuidanceResponse';
    if (source["dataRequirement"]) { this.dataRequirement = source.dataRequirement.map((x:Partial<fhir.IDataRequirement>) => new fhir.DataRequirement(x)); }
    if (source["encounter"]) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source["evaluationMessage"]) { this.evaluationMessage = source.evaluationMessage.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["moduleUri"]) { this.moduleUri = source.moduleUri; }
    if (source["_moduleUri"]) { this._moduleUri = new fhir.FhirElement(source._moduleUri!); }
    if (source["moduleCanonical"]) { this.moduleCanonical = source.moduleCanonical; }
    if (source["_moduleCanonical"]) { this._moduleCanonical = new fhir.FhirElement(source._moduleCanonical!); }
    if (source["moduleCodeableConcept"]) { this.moduleCodeableConcept = new fhir.CodeableConcept(source.moduleCodeableConcept!); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["occurrenceDateTime"]) { this.occurrenceDateTime = source.occurrenceDateTime; }
    if (source["_occurrenceDateTime"]) { this._occurrenceDateTime = new fhir.FhirElement(source._occurrenceDateTime!); }
    if (source["outputParameters"]) { this.outputParameters = new fhir.Reference(source.outputParameters!); }
    if (source["performer"]) { this.performer = new fhir.Reference(source.performer!); }
    if (source["reasonCode"]) { this.reasonCode = source.reasonCode.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["reasonReference"]) { this.reasonReference = source.reasonReference.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["requestIdentifier"]) { this.requestIdentifier = new fhir.Identifier(source.requestIdentifier!); }
    if (source["result"]) { this.result = new fhir.Reference(source.result!); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
  }
  /**
   * Check if the current GuidanceResponse contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a GuidanceResponse from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IGuidanceResponse):GuidanceResponse {
    var dest:GuidanceResponse = new GuidanceResponse(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `GuidanceResponse is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the GuidanceResponse.status field
 */
export enum GuidanceResponseStatusEnum {
  SUCCESS = "success",
  DATA_REQUESTED = "data-requested",
  DATA_REQUIRED = "data-required",
  IN_PROGRESS = "in-progress",
  FAILURE = "failure",
  ENTERED_IN_ERROR = "entered-in-error",
}
