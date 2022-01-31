// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels'
import * as fhirInterfaces from '../strictinterfaces'
/**
 * Specific parameters for the ordered item.  For example, the prism value for lenses.
 */
export class DeviceRequestParameter extends fhirModels.BackboneElement implements fhirInterfaces.IDeviceRequestParameter {
  /**
   * A code or string that identifies the device detail being asserted.
   */
  code?: fhirModels.CodeableConcept|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueQuantity?: fhirModels.Quantity|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueRange?: fhirModels.Range|undefined;
  /**
   * Range means device should have a value that falls somewhere within the specified range.
   */
  valueBoolean?: boolean|undefined;
  _valueBoolean?: fhirModels.Element|undefined;
  /**
   * Default constructor for DeviceRequestParameter from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IDeviceRequestParameter) {
    super(source);
    if (source["code"] !== undefined) {
      this.code = new fhirModels.CodeableConcept(source.code);
    }
    if (source["valueCodeableConcept"] !== undefined) {
      this.valueCodeableConcept = new fhirModels.CodeableConcept(source.valueCodeableConcept);
    }
    if (source["valueQuantity"] !== undefined) {
      this.valueQuantity = new fhirModels.Quantity(source.valueQuantity);
    }
    if (source["valueRange"] !== undefined) {
      this.valueRange = new fhirModels.Range(source.valueRange);
    }
    if (source["valueBoolean"] !== undefined) {
      this.valueBoolean = source.valueBoolean;
    }
    if (source["_valueBoolean"] !== undefined) {
      this._valueBoolean = new fhirModels.Element(source._valueBoolean);
    }
  }
}
/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export class DeviceRequest extends fhirModels.DomainResource implements fhirInterfaces.IDeviceRequest {
  /**
   * Resource Type Name
   */
  readonly resourceType = "DeviceRequest";
  /**
   * When the request transitioned to being actionable.
   */
  authoredOn?: string|undefined;
  _authoredOn?: fhirModels.Element|undefined;
  /**
   * Plan/proposal/order fulfilled by this request.
   */
  basedOn?: fhirModels.Reference[]|undefined;
  /**
   * The details of the device to be used.
   */
  codeReference?: fhirModels.Reference|undefined;
  /**
   * The details of the device to be used.
   */
  codeCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * An encounter that provides additional context in which this request is made.
   */
  encounter?: fhirModels.Reference|undefined;
  /**
   * Composite request this is part of.
   */
  groupIdentifier?: fhirModels.Identifier|undefined;
  /**
   * Identifiers assigned to this order by the orderer or by the receiver.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  instantiatesCanonical?: string[]|undefined;
  _instantiatesCanonical?: fhirModels.Element[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: string[]|undefined;
  _instantiatesUri?: fhirModels.Element[]|undefined;
  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
   */
  insurance?: fhirModels.Reference[]|undefined;
  /**
   * Whether the request is a proposal, plan, an original order or a reflex order.
   */
  intent: DeviceRequestIntentEnum;
  _intent?: fhirModels.Element|undefined;
  /**
   * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  note?: fhirModels.Annotation[]|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrenceDateTime?: string|undefined;
  _occurrenceDateTime?: fhirModels.Element|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrencePeriod?: fhirModels.Period|undefined;
  /**
   * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
   */
  occurrenceTiming?: fhirModels.Timing|undefined;
  /**
   * Specific parameters for the ordered item.  For example, the prism value for lenses.
   */
  parameter?: fhirModels.DeviceRequestParameter[]|undefined;
  /**
   * The desired performer for doing the diagnostic testing.
   */
  performer?: fhirModels.Reference|undefined;
  /**
   * Desired type of performer for doing the diagnostic testing.
   */
  performerType?: fhirModels.CodeableConcept|undefined;
  /**
   * Indicates how quickly the {{title}} should be addressed with respect to other requests.
   */
  priority?: DeviceRequestPriorityEnum|undefined;
  _priority?: fhirModels.Element|undefined;
  /**
   * The request takes the place of the referenced completed or terminated request(s).
   */
  priorRequest?: fhirModels.Reference[]|undefined;
  /**
   * Reason or justification for the use of this device.
   */
  reasonCode?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Reason or justification for the use of this device.
   */
  reasonReference?: fhirModels.Reference[]|undefined;
  /**
   * This might not include provenances for all versions of the request - only those deemed "relevant" or important.
   * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
   * All Provenances should have some historical version of this Request as their subject.
   */
  relevantHistory?: fhirModels.Reference[]|undefined;
  /**
   * The individual who initiated the request and has responsibility for its activation.
   */
  requester?: fhirModels.Reference|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
   */
  status?: DeviceRequestStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * The patient who will use the device.
   */
  subject: fhirModels.Reference;
  /**
   * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).
   */
  supportingInfo?: fhirModels.Reference[]|undefined;
  /**
   * Default constructor for DeviceRequest from an object that MAY NOT contain all required elements.
   */
  constructor(source:fhirInterfaces.IDeviceRequest) {
    super(source);
    if ((source['resourceType'] !== "DeviceRequest") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a DeviceRequest'; }
    if (source["authoredOn"] !== undefined) {
      this.authoredOn = source.authoredOn;
    }
    if (source["_authoredOn"] !== undefined) {
      this._authoredOn = new fhirModels.Element(source._authoredOn);
    }
    if (source["basedOn"] !== undefined) {
      this.basedOn = source.basedOn.map((x) => new fhirModels.Reference(x));
    }
    if (source["codeReference"] !== undefined) {
      this.codeReference = new fhirModels.Reference(source.codeReference);
    }
    if (source["codeCodeableConcept"] !== undefined) {
      this.codeCodeableConcept = new fhirModels.CodeableConcept(source.codeCodeableConcept);
    }
    if (source["encounter"] !== undefined) {
      this.encounter = new fhirModels.Reference(source.encounter);
    }
    if (source["groupIdentifier"] !== undefined) {
      this.groupIdentifier = new fhirModels.Identifier(source.groupIdentifier);
    }
    if (source["identifier"] !== undefined) {
      this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
    }
    if (source["instantiatesCanonical"] !== undefined) {
      this.instantiatesCanonical = source.instantiatesCanonical.map((x) => (x));
    }
    if (source["_instantiatesCanonical"] !== undefined) {
      this._instantiatesCanonical = source._instantiatesCanonical.map((x) => new fhirModels.Element(x));
    }
    if (source["instantiatesUri"] !== undefined) {
      this.instantiatesUri = source.instantiatesUri.map((x) => (x));
    }
    if (source["_instantiatesUri"] !== undefined) {
      this._instantiatesUri = source._instantiatesUri.map((x) => new fhirModels.Element(x));
    }
    if (source["insurance"] !== undefined) {
      this.insurance = source.insurance.map((x) => new fhirModels.Reference(x));
    }
    {
      this.intent = source.intent;
    }
    if (source["_intent"] !== undefined) {
      this._intent = new fhirModels.Element(source._intent);
    }
    if (source["note"] !== undefined) {
      this.note = source.note.map((x) => new fhirModels.Annotation(x));
    }
    if (source["occurrenceDateTime"] !== undefined) {
      this.occurrenceDateTime = source.occurrenceDateTime;
    }
    if (source["_occurrenceDateTime"] !== undefined) {
      this._occurrenceDateTime = new fhirModels.Element(source._occurrenceDateTime);
    }
    if (source["occurrencePeriod"] !== undefined) {
      this.occurrencePeriod = new fhirModels.Period(source.occurrencePeriod);
    }
    if (source["occurrenceTiming"] !== undefined) {
      this.occurrenceTiming = new fhirModels.Timing(source.occurrenceTiming);
    }
    if (source["parameter"] !== undefined) {
      this.parameter = source.parameter.map((x) => new fhirModels.DeviceRequestParameter(x));
    }
    if (source["performer"] !== undefined) {
      this.performer = new fhirModels.Reference(source.performer);
    }
    if (source["performerType"] !== undefined) {
      this.performerType = new fhirModels.CodeableConcept(source.performerType);
    }
    if (source["priority"] !== undefined) {
      this.priority = source.priority;
    }
    if (source["_priority"] !== undefined) {
      this._priority = new fhirModels.Element(source._priority);
    }
    if (source["priorRequest"] !== undefined) {
      this.priorRequest = source.priorRequest.map((x) => new fhirModels.Reference(x));
    }
    if (source["reasonCode"] !== undefined) {
      this.reasonCode = source.reasonCode.map((x) => new fhirModels.CodeableConcept(x));
    }
    if (source["reasonReference"] !== undefined) {
      this.reasonReference = source.reasonReference.map((x) => new fhirModels.Reference(x));
    }
    if (source["relevantHistory"] !== undefined) {
      this.relevantHistory = source.relevantHistory.map((x) => new fhirModels.Reference(x));
    }
    if (source["requester"] !== undefined) {
      this.requester = new fhirModels.Reference(source.requester);
    }
    if (source["status"] !== undefined) {
      this.status = source.status;
    }
    if (source["_status"] !== undefined) {
      this._status = new fhirModels.Element(source._status);
    }
    {
      this.subject = new fhirModels.Reference(source.subject);
    }
    if (source["supportingInfo"] !== undefined) {
      this.supportingInfo = source.supportingInfo.map((x) => new fhirModels.Reference(x));
    }
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
