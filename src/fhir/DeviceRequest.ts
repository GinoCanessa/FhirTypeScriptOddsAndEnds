// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Specific parameters for the ordered item.  For example, the prism value for lenses.
 */
export type IDeviceRequestParameter = fhir.IBackboneElement & {
  /**
   * A code or string that identifies the device detail being asserted.
   */
  code?: fhir.ICodeableConcept|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueQuantity?: fhir.IQuantity|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueRange?: fhir.IRange|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueBoolean?: boolean|undefined;
  _valueBoolean?: fhir.IFhirElement|undefined;
}
/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export type IDeviceRequest = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "DeviceRequest";
  /**
   * When the request transitioned to being actionable.
   */
  authoredOn?: string|undefined;
  _authoredOn?: fhir.IFhirElement|undefined;
  /**
   * Plan/proposal/order fulfilled by this request.
   */
  basedOn?: fhir.IReference[]|undefined;
  /**
   * The details of the device to be used.
   */
  codeReference?: fhir.IReference|undefined;
  /**
   * The details of the device to be used.
   */
  codeCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * An encounter that provides additional context in which this request is made.
   */
  encounter?: fhir.IReference|undefined;
  /**
   * Composite request this is part of.
   */
  groupIdentifier?: fhir.IIdentifier|undefined;
  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  instantiatesCanonical?: string[]|undefined;
  _instantiatesCanonical?: fhir.IFhirElement[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[]|undefined;
  _instantiatesUri?: fhir.IFhirElement[]|undefined;
  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
   */
  insurance?: fhir.IReference[]|undefined;
  /**
   * Whether the request is a proposal, plan, an original order or a reflex order.
   */
  intent: DeviceRequestIntentEnum|null;
  _intent?: fhir.IFhirElement|undefined;
  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrenceDateTime?: string|undefined;
  _occurrenceDateTime?: fhir.IFhirElement|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrencePeriod?: fhir.IPeriod|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrenceTiming?: fhir.ITiming|undefined;
  /**
   * Specific parameters for the ordered item.  For example, the prism value for lenses.
   */
  parameter?: fhir.IDeviceRequestParameter[]|undefined;
  /**
   * The desired performer for doing the diagnostic testing.
   */
  performer?: fhir.IReference|undefined;
  /**
   * Desired type of performer for doing the diagnostic testing.
   */
  performerType?: fhir.ICodeableConcept|undefined;
  /**
   * Indicates how quickly the {{title}} should be addressed with respect to other requests.
   */
  priority?: DeviceRequestPriorityEnum|undefined;
  _priority?: fhir.IFhirElement|undefined;
  /**
   * The request takes the place of the referenced completed or terminated request(s).
   */
  priorRequest?: fhir.IReference[]|undefined;
  /**
   * Reason or justification for the use of this device.
   */
  reasonCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * Reason or justification for the use of this device.
   */
  reasonReference?: fhir.IReference[]|undefined;
  /**
   * This might not include provenances for all versions of the request - only those deemed "relevant" or important.
   * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
   * All Provenances should have some historical version of this Request as their subject.
   */
  relevantHistory?: fhir.IReference[]|undefined;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  requester?: fhir.IReference|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
   */
  status?: DeviceRequestStatusEnum|undefined;
  _status?: fhir.IFhirElement|undefined;
  /**
   * The patient who will use the device.
   */
  subject: fhir.IReference|null;
  /**
   * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).
   */
  supportingInfo?: fhir.IReference[]|undefined;
}
/**
 * Specific parameters for the ordered item.  For example, the prism value for lenses.
 */
export class DeviceRequestParameter extends fhir.BackboneElement implements fhir.IDeviceRequestParameter {
  /**
   * A code or string that identifies the device detail being asserted.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  public valueCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  public valueQuantity?: fhir.Quantity|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  public valueRange?: fhir.Range|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  public valueBoolean?: boolean|undefined;
  public _valueBoolean?: fhir.FhirElement|undefined;
  /**
   * Default constructor for DeviceRequestParameter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDeviceRequestParameter> = {}) {
    super(source);
    if (source["code"]) { this.code = new fhir.CodeableConcept(source.code!); }
    if (source["valueCodeableConcept"]) { this.valueCodeableConcept = new fhir.CodeableConcept(source.valueCodeableConcept!); }
    if (source["valueQuantity"]) { this.valueQuantity = new fhir.Quantity(source.valueQuantity!); }
    if (source["valueRange"]) { this.valueRange = new fhir.Range(source.valueRange!); }
    if (source["valueBoolean"]) { this.valueBoolean = source.valueBoolean; }
    if (source["_valueBoolean"]) { this._valueBoolean = new fhir.FhirElement(source._valueBoolean!); }
  }
  /**
   * Check if the current DeviceRequestParameter contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DeviceRequestParameter from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDeviceRequestParameter):DeviceRequestParameter {
    var dest:DeviceRequestParameter = new DeviceRequestParameter(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DeviceRequestParameter is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export class DeviceRequest extends fhir.DomainResource implements fhir.IDeviceRequest {
  /**
   * Resource Type Name
   */
  public override resourceType: "DeviceRequest";
  /**
   * When the request transitioned to being actionable.
   */
  public authoredOn?: string|undefined;
  public _authoredOn?: fhir.FhirElement|undefined;
  /**
   * Plan/proposal/order fulfilled by this request.
   */
  public basedOn?: fhir.Reference[]|undefined;
  /**
   * The details of the device to be used.
   */
  public codeReference?: fhir.Reference|undefined;
  /**
   * The details of the device to be used.
   */
  public codeCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * An encounter that provides additional context in which this request is made.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Composite request this is part of.
   */
  public groupIdentifier?: fhir.Identifier|undefined;
  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public instantiatesCanonical?: string[]|undefined;
  public _instantiatesCanonical?: fhir.FhirElement[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  public instantiatesUri?: string[]|undefined;
  public _instantiatesUri?: fhir.FhirElement[]|undefined;
  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
   */
  public insurance?: fhir.Reference[]|undefined;
  /**
   * Whether the request is a proposal, plan, an original order or a reflex order.
   */
  public intent: DeviceRequestIntentEnum|null;
  public _intent?: fhir.FhirElement|undefined;
  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  public occurrenceDateTime?: string|undefined;
  public _occurrenceDateTime?: fhir.FhirElement|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  public occurrencePeriod?: fhir.Period|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  public occurrenceTiming?: fhir.Timing|undefined;
  /**
   * Specific parameters for the ordered item.  For example, the prism value for lenses.
   */
  public parameter?: fhir.DeviceRequestParameter[]|undefined;
  /**
   * The desired performer for doing the diagnostic testing.
   */
  public performer?: fhir.Reference|undefined;
  /**
   * Desired type of performer for doing the diagnostic testing.
   */
  public performerType?: fhir.CodeableConcept|undefined;
  /**
   * Indicates how quickly the {{title}} should be addressed with respect to other requests.
   */
  public priority?: DeviceRequestPriorityEnum|undefined;
  public _priority?: fhir.FhirElement|undefined;
  /**
   * The request takes the place of the referenced completed or terminated request(s).
   */
  public priorRequest?: fhir.Reference[]|undefined;
  /**
   * Reason or justification for the use of this device.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined;
  /**
   * Reason or justification for the use of this device.
   */
  public reasonReference?: fhir.Reference[]|undefined;
  /**
   * This might not include provenances for all versions of the request - only those deemed "relevant" or important.
   * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
   * All Provenances should have some historical version of this Request as their subject.
   */
  public relevantHistory?: fhir.Reference[]|undefined;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  public requester?: fhir.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
   */
  public status?: DeviceRequestStatusEnum|undefined;
  public _status?: fhir.FhirElement|undefined;
  /**
   * The patient who will use the device.
   */
  public subject: fhir.Reference|null;
  /**
   * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).
   */
  public supportingInfo?: fhir.Reference[]|undefined;
  /**
   * Default constructor for DeviceRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IDeviceRequest> = {}) {
    super(source);
    this.resourceType = 'DeviceRequest';
    if (source["authoredOn"]) { this.authoredOn = source.authoredOn; }
    if (source["_authoredOn"]) { this._authoredOn = new fhir.FhirElement(source._authoredOn!); }
    if (source["basedOn"]) { this.basedOn = source.basedOn.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["codeReference"]) { this.codeReference = new fhir.Reference(source.codeReference!); }
    if (source["codeCodeableConcept"]) { this.codeCodeableConcept = new fhir.CodeableConcept(source.codeCodeableConcept!); }
    if (source["encounter"]) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source["groupIdentifier"]) { this.groupIdentifier = new fhir.Identifier(source.groupIdentifier!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["instantiatesCanonical"]) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => (x)); }
    if (source["_instantiatesCanonical"]) { this._instantiatesCanonical = source._instantiatesCanonical.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["instantiatesUri"]) { this.instantiatesUri = source.instantiatesUri.map((x) => (x)); }
    if (source["_instantiatesUri"]) { this._instantiatesUri = source._instantiatesUri.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["insurance"]) { this.insurance = source.insurance.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    this.intent = null;
    if (source["intent"]) { this.intent = source.intent; }
    if (this.intent === undefined) { this.intent = null }
    if (source["_intent"]) { this._intent = new fhir.FhirElement(source._intent!); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["occurrenceDateTime"]) { this.occurrenceDateTime = source.occurrenceDateTime; }
    if (source["_occurrenceDateTime"]) { this._occurrenceDateTime = new fhir.FhirElement(source._occurrenceDateTime!); }
    if (source["occurrencePeriod"]) { this.occurrencePeriod = new fhir.Period(source.occurrencePeriod!); }
    if (source["occurrenceTiming"]) { this.occurrenceTiming = new fhir.Timing(source.occurrenceTiming!); }
    if (source["parameter"]) { this.parameter = source.parameter.map((x:Partial<fhir.IDeviceRequestParameter>) => new fhir.DeviceRequestParameter(x)); }
    if (source["performer"]) { this.performer = new fhir.Reference(source.performer!); }
    if (source["performerType"]) { this.performerType = new fhir.CodeableConcept(source.performerType!); }
    if (source["priority"]) { this.priority = source.priority; }
    if (source["_priority"]) { this._priority = new fhir.FhirElement(source._priority!); }
    if (source["priorRequest"]) { this.priorRequest = source.priorRequest.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["reasonCode"]) { this.reasonCode = source.reasonCode.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["reasonReference"]) { this.reasonReference = source.reasonReference.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["relevantHistory"]) { this.relevantHistory = source.relevantHistory.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["requester"]) { this.requester = new fhir.Reference(source.requester!); }
    if (source["status"]) { this.status = source.status; }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    this.subject = null;
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
    if (this.subject === undefined) { this.subject = null }
    if (source["supportingInfo"]) { this.supportingInfo = source.supportingInfo.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
  }
  /**
   * Check if the current DeviceRequest contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["intent"] === undefined) { missingElements.push("intent"); }
    if (this["subject"] === undefined) { missingElements.push("subject"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a DeviceRequest from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IDeviceRequest):DeviceRequest {
    var dest:DeviceRequest = new DeviceRequest(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `DeviceRequest is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the DeviceRequest.intent field
 */
export enum DeviceRequestIntentEnum {
  PROPOSAL = "proposal",
  PLAN = "plan",
  DIRECTIVE = "directive",
  ORDER = "order",
  ORIGINAL_ORDER = "original-order",
  REFLEX_ORDER = "reflex-order",
  FILLER_ORDER = "filler-order",
  INSTANCE_ORDER = "instance-order",
  OPTION = "option",
}
/**
 * Code Values for the DeviceRequest.priority field
 */
export enum DeviceRequestPriorityEnum {
  ROUTINE = "routine",
  URGENT = "urgent",
  ASAP = "asap",
  STAT = "stat",
}
/**
 * Code Values for the DeviceRequest.status field
 */
export enum DeviceRequestStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  ON_HOLD = "on-hold",
  REVOKED = "revoked",
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
  UNKNOWN = "unknown",
}
