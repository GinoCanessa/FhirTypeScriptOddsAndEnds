// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: GuidanceResponse

import * as fhir from '../fhir.js'

import { GuidanceResponseStatusValueSet, GuidanceResponseStatusValueSetType, GuidanceResponseStatusValueSetEnum } from '../fhirValueSets/GuidanceResponseStatusValueSet.js'

/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
export type IGuidanceResponse = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "GuidanceResponse";
  /**
   * The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
   */
  requestIdentifier?: fhir.IIdentifier|undefined;
  /**
   * Allows a service to provide  unique, business identifiers for the response.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleUri?: string|undefined;
  /**
   * Extended properties for primitive element: GuidanceResponse.module[x]
   */
  _moduleUri?: fhir.IFhirElement|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleCanonical?: string|undefined;
  /**
   * Extended properties for primitive element: GuidanceResponse.module[x]
   */
  _moduleCanonical?: fhir.IFhirElement|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  moduleCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: GuidanceResponseStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: GuidanceResponse.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * The patient for which the request was processed.
   */
  subject?: fhir.IReference|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official copmletion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: fhir.IReference|undefined;
  /**
   * Indicates when the guidance response was processed.
   */
  occurrenceDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: GuidanceResponse.occurrenceDateTime
   */
  _occurrenceDateTime?: fhir.IFhirElement|undefined;
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
   * Provides a mechanism to communicate additional information about the response.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
   */
  evaluationMessage?: fhir.IReference[]|undefined;
  /**
   * The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
   */
  outputParameters?: fhir.IReference|undefined;
  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  result?: fhir.IReference|undefined;
  /**
   * If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
   */
  dataRequirement?: fhir.IDataRequirement[]|undefined;
}

/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
export class GuidanceResponse extends fhir.DomainResource implements IGuidanceResponse {
  /**
   * Resource Type Name
   */
  public resourceType: "GuidanceResponse";
  /**
   * The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
   */
  public requestIdentifier?: fhir.Identifier|undefined;
  /**
   * Allows a service to provide  unique, business identifiers for the response.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  public moduleUri?: string|undefined;
  /**
   * Extended properties for primitive element: GuidanceResponse.module[x]
   */
  public _moduleUri?: fhir.FhirElement|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  public moduleCanonical?: string|undefined;
  /**
   * Extended properties for primitive element: GuidanceResponse.module[x]
   */
  public _moduleCanonical?: fhir.FhirElement|undefined;
  /**
   * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
   */
  public moduleCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: GuidanceResponseStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: GuidanceResponse.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * The patient for which the request was processed.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official copmletion of an encounter but still be tied to the context of the encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Indicates when the guidance response was processed.
   */
  public occurrenceDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: GuidanceResponse.occurrenceDateTime
   */
  public _occurrenceDateTime?: fhir.FhirElement|undefined;
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
   * Provides a mechanism to communicate additional information about the response.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
   */
  public evaluationMessage?: fhir.Reference[]|undefined;
  /**
   * The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
   */
  public outputParameters?: fhir.Reference|undefined;
  /**
   * The actions, if any, produced by the evaluation of the artifact.
   */
  public result?: fhir.Reference|undefined;
  /**
   * If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
   */
  public dataRequirement?: fhir.DataRequirement[]|undefined;
  /**
   * Default constructor for GuidanceResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IGuidanceResponse> = { }) {
    super(source);
    this.resourceType = 'GuidanceResponse';
    if (source['requestIdentifier']) { this.requestIdentifier = new fhir.Identifier(source.requestIdentifier!); }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['moduleUri']) { this.moduleUri = source.moduleUri; }
    if (source['_moduleUri']) { this._moduleUri = new fhir.FhirElement(source._moduleUri!); }
    if (source['moduleCanonical']) { this.moduleCanonical = source.moduleCanonical; }
    if (source['_moduleCanonical']) { this._moduleCanonical = new fhir.FhirElement(source._moduleCanonical!); }
    if (source['moduleCodeableConcept']) { this.moduleCodeableConcept = new fhir.CodeableConcept(source.moduleCodeableConcept!); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject!); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source['occurrenceDateTime']) { this.occurrenceDateTime = source.occurrenceDateTime; }
    if (source['_occurrenceDateTime']) { this._occurrenceDateTime = new fhir.FhirElement(source._occurrenceDateTime!); }
    if (source['performer']) { this.performer = new fhir.Reference(source.performer!); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    if (source['evaluationMessage']) { this.evaluationMessage = source.evaluationMessage.map((x) => new fhir.Reference(x)); }
    if (source['outputParameters']) { this.outputParameters = new fhir.Reference(source.outputParameters!); }
    if (source['result']) { this.result = new fhir.Reference(source.result!); }
    if (source['dataRequirement']) { this.dataRequirement = source.dataRequirement.map((x) => new fhir.DataRequirement(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public statusRequiredValueSet():GuidanceResponseStatusValueSetType {
    return GuidanceResponseStatusValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: GuidanceResponse.resourceType']); }
    if (this["requestIdentifier"]) { results.push(...this.requestIdentifier.doModelValidation()); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_moduleUri"]) { results.push(...this._moduleUri.doModelValidation()); }
    if (this["_moduleCanonical"]) { results.push(...this._moduleCanonical.doModelValidation()); }
    if (this["moduleCodeableConcept"]) { results.push(...this.moduleCodeableConcept.doModelValidation()); }
    if (!this["status"]) { results.push(["status",'Missing required element: GuidanceResponse.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["subject"]) { results.push(...this.subject.doModelValidation()); }
    if (this["encounter"]) { results.push(...this.encounter.doModelValidation()); }
    if (this["_occurrenceDateTime"]) { results.push(...this._occurrenceDateTime.doModelValidation()); }
    if (this["performer"]) { results.push(...this.performer.doModelValidation()); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["note"]) { this.note.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["evaluationMessage"]) { this.evaluationMessage.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["outputParameters"]) { results.push(...this.outputParameters.doModelValidation()); }
    if (this["result"]) { results.push(...this.result.doModelValidation()); }
    if (this["dataRequirement"]) { this.dataRequirement.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
