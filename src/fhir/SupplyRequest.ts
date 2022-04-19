// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export type ISupplyRequestParameter = fhir.IBackboneElement & {
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
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export type ISupplyRequest = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "SupplyRequest";
  /**
   * When the request was made.
   */
  authoredOn?: string|undefined;
  _authoredOn?: fhir.IFhirElement|undefined;
  /**
   * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
   */
  category?: fhir.ICodeableConcept|undefined;
  /**
   * Where the supply is expected to come from.
   */
  deliverFrom?: fhir.IReference|undefined;
  /**
   * Where the supply is destined to go.
   */
  deliverTo?: fhir.IReference|undefined;
  /**
   * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   */
  itemCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   */
  itemReference?: fhir.IReference|undefined;
  /**
   * When the request should be fulfilled.
   */
  occurrenceDateTime?: string|undefined;
  _occurrenceDateTime?: fhir.IFhirElement|undefined;
  /**
   * When the request should be fulfilled.
   */
  occurrencePeriod?: fhir.IPeriod|undefined;
  /**
   * When the request should be fulfilled.
   */
  occurrenceTiming?: fhir.ITiming|undefined;
  /**
   * Specific parameters for the ordered item.  For example, the size of the indicated item.
   */
  parameter?: fhir.ISupplyRequestParameter[]|undefined;
  /**
   * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
   */
  priority?: SupplyRequestPriorityEnum|undefined;
  _priority?: fhir.IFhirElement|undefined;
  /**
   * The amount that is being ordered of the indicated item.
   */
  quantity: fhir.IQuantity|null;
  /**
   * The reason why the supply item was requested.
   */
  reasonCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * The reason why the supply item was requested.
   */
  reasonReference?: fhir.IReference[]|undefined;
  /**
   * The device, practitioner, etc. who initiated the request.
   */
  requester?: fhir.IReference|undefined;
  /**
   * Status of the supply request.
   */
  status?: SupplyRequestStatusEnum|undefined;
  _status?: fhir.IFhirElement|undefined;
  /**
   * Who is intended to fulfill the request.
   */
  supplier?: fhir.IReference[]|undefined;
}
/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export class SupplyRequestParameter extends fhir.BackboneElement implements fhir.ISupplyRequestParameter {
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
   * Default constructor for SupplyRequestParameter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ISupplyRequestParameter> = {}) {
    super(source);
    if (source["code"]) { this.code = new fhir.CodeableConcept(source.code!); }
    if (source["valueCodeableConcept"]) { this.valueCodeableConcept = new fhir.CodeableConcept(source.valueCodeableConcept!); }
    if (source["valueQuantity"]) { this.valueQuantity = new fhir.Quantity(source.valueQuantity!); }
    if (source["valueRange"]) { this.valueRange = new fhir.Range(source.valueRange!); }
    if (source["valueBoolean"]) { this.valueBoolean = source.valueBoolean; }
    if (source["_valueBoolean"]) { this._valueBoolean = new fhir.FhirElement(source._valueBoolean!); }
  }
  /**
   * Check if the current SupplyRequestParameter contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a SupplyRequestParameter from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.ISupplyRequestParameter):SupplyRequestParameter {
    var dest:SupplyRequestParameter = new SupplyRequestParameter(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `SupplyRequestParameter is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export class SupplyRequest extends fhir.DomainResource implements fhir.ISupplyRequest {
  /**
   * Resource Type Name
   */
  public override resourceType: "SupplyRequest";
  /**
   * When the request was made.
   */
  public authoredOn?: string|undefined;
  public _authoredOn?: fhir.FhirElement|undefined;
  /**
   * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * Where the supply is expected to come from.
   */
  public deliverFrom?: fhir.Reference|undefined;
  /**
   * Where the supply is destined to go.
   */
  public deliverTo?: fhir.Reference|undefined;
  /**
   * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   */
  public itemCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
   */
  public itemReference?: fhir.Reference|undefined;
  /**
   * When the request should be fulfilled.
   */
  public occurrenceDateTime?: string|undefined;
  public _occurrenceDateTime?: fhir.FhirElement|undefined;
  /**
   * When the request should be fulfilled.
   */
  public occurrencePeriod?: fhir.Period|undefined;
  /**
   * When the request should be fulfilled.
   */
  public occurrenceTiming?: fhir.Timing|undefined;
  /**
   * Specific parameters for the ordered item.  For example, the size of the indicated item.
   */
  public parameter?: fhir.SupplyRequestParameter[]|undefined;
  /**
   * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
   */
  public priority?: SupplyRequestPriorityEnum|undefined;
  public _priority?: fhir.FhirElement|undefined;
  /**
   * The amount that is being ordered of the indicated item.
   */
  public quantity: fhir.Quantity|null;
  /**
   * The reason why the supply item was requested.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined;
  /**
   * The reason why the supply item was requested.
   */
  public reasonReference?: fhir.Reference[]|undefined;
  /**
   * The device, practitioner, etc. who initiated the request.
   */
  public requester?: fhir.Reference|undefined;
  /**
   * Status of the supply request.
   */
  public status?: SupplyRequestStatusEnum|undefined;
  public _status?: fhir.FhirElement|undefined;
  /**
   * Who is intended to fulfill the request.
   */
  public supplier?: fhir.Reference[]|undefined;
  /**
   * Default constructor for SupplyRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ISupplyRequest> = {}) {
    super(source);
    this.resourceType = 'SupplyRequest';
    if (source["authoredOn"]) { this.authoredOn = source.authoredOn; }
    if (source["_authoredOn"]) { this._authoredOn = new fhir.FhirElement(source._authoredOn!); }
    if (source["category"]) { this.category = new fhir.CodeableConcept(source.category!); }
    if (source["deliverFrom"]) { this.deliverFrom = new fhir.Reference(source.deliverFrom!); }
    if (source["deliverTo"]) { this.deliverTo = new fhir.Reference(source.deliverTo!); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["itemCodeableConcept"]) { this.itemCodeableConcept = new fhir.CodeableConcept(source.itemCodeableConcept!); }
    if (source["itemReference"]) { this.itemReference = new fhir.Reference(source.itemReference!); }
    if (source["occurrenceDateTime"]) { this.occurrenceDateTime = source.occurrenceDateTime; }
    if (source["_occurrenceDateTime"]) { this._occurrenceDateTime = new fhir.FhirElement(source._occurrenceDateTime!); }
    if (source["occurrencePeriod"]) { this.occurrencePeriod = new fhir.Period(source.occurrencePeriod!); }
    if (source["occurrenceTiming"]) { this.occurrenceTiming = new fhir.Timing(source.occurrenceTiming!); }
    if (source["parameter"]) { this.parameter = source.parameter.map((x:Partial<fhir.ISupplyRequestParameter>) => new fhir.SupplyRequestParameter(x)); }
    if (source["priority"]) { this.priority = source.priority; }
    if (source["_priority"]) { this._priority = new fhir.FhirElement(source._priority!); }
    this.quantity = null;
    if (source["quantity"]) { this.quantity = new fhir.Quantity(source.quantity!); }
    if (this.quantity === undefined) { this.quantity = null }
    if (source["reasonCode"]) { this.reasonCode = source.reasonCode.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["reasonReference"]) { this.reasonReference = source.reasonReference.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["requester"]) { this.requester = new fhir.Reference(source.requester!); }
    if (source["status"]) { this.status = source.status; }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["supplier"]) { this.supplier = source.supplier.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
  }
  /**
   * Check if the current SupplyRequest contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["quantity"] === undefined) { missingElements.push("quantity"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a SupplyRequest from an object that MUST contain all required elements.
   */
  static override fromStrict(source:fhir.ISupplyRequest):SupplyRequest {
    var dest:SupplyRequest = new SupplyRequest(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) { throw `SupplyRequest is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the SupplyRequest.priority field
 */
export enum SupplyRequestPriorityEnum {
  ROUTINE = "routine",
  URGENT = "urgent",
  ASAP = "asap",
  STAT = "stat",
}
/**
 * Code Values for the SupplyRequest.status field
 */
export enum SupplyRequestStatusEnum {
  DRAFT = "draft",
  ACTIVE = "active",
  SUSPENDED = "suspended",
  CANCELLED = "cancelled",
  COMPLETED = "completed",
  ENTERED_IN_ERROR = "entered-in-error",
  UNKNOWN = "unknown",
}
