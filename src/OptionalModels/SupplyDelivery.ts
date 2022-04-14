// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * The item that is being delivered or has been supplied.
 */
export class SupplyDeliverySuppliedItem extends fhirModels.BackboneElement implements fhirInterfaces.ISupplyDeliverySuppliedItem {
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemCodeableConcept?: fhirModels.CodeableConcept|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemReference?: fhirModels.Reference|undefined;
  /**
   * The amount of supply that has been dispensed. Includes unit of measure.
   */
  quantity?: fhirModels.Quantity|undefined;
  /**
   * Default constructor for SupplyDeliverySuppliedItem from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISupplyDeliverySuppliedItem>) {
    super(source);
    if (source["itemCodeableConcept"] !== undefined) { this.itemCodeableConcept = new fhirModels.CodeableConcept(source.itemCodeableConcept); }
    if (source["itemReference"] !== undefined) { this.itemReference = new fhirModels.Reference(source.itemReference); }
    if (source["quantity"] !== undefined) { this.quantity = new fhirModels.Quantity(source.quantity); }
  }
  /**
   * Factory function to create a SupplyDeliverySuppliedItem from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISupplyDeliverySuppliedItem):SupplyDeliverySuppliedItem {
    var dest:SupplyDeliverySuppliedItem = new SupplyDeliverySuppliedItem(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SupplyDeliverySuppliedItem is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SupplyDeliverySuppliedItem contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Record of delivery of what is supplied.
 */
export class SupplyDelivery extends fhirModels.DomainResource implements fhirInterfaces.ISupplyDelivery {
  /**
   * Resource Type Name
   */
  readonly resourceType = "SupplyDelivery";
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  basedOn?: fhirModels.Reference[]|undefined;
  /**
   * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
   */
  destination?: fhirModels.Reference|undefined;
  /**
   * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
   */
  identifier?: fhirModels.Identifier[]|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrenceDateTime?: string|undefined;
  _occurrenceDateTime?: fhirModels.Element|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrencePeriod?: fhirModels.Period|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrenceTiming?: fhirModels.Timing|undefined;
  /**
   * Not to be used to link an event to an Encounter - use Event.context for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  partOf?: fhirModels.Reference[]|undefined;
  /**
   * A link to a resource representing the person whom the delivered item is for.
   */
  patient?: fhirModels.Reference|undefined;
  /**
   * Identifies the person who picked up the Supply.
   */
  receiver?: fhirModels.Reference[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: SupplyDeliveryStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * The item that is being delivered or has been supplied.
   */
  suppliedItem?: fhirModels.SupplyDeliverySuppliedItem|undefined;
  /**
   * The individual responsible for dispensing the medication, supplier or device.
   */
  supplier?: fhirModels.Reference|undefined;
  /**
   * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  type?: fhirModels.CodeableConcept|undefined;
  /**
   * Default constructor for SupplyDelivery from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.ISupplyDelivery>) {
    super(source);
    if ((source['resourceType'] !== "SupplyDelivery") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a SupplyDelivery'; }
    if (source["basedOn"] !== undefined) { this.basedOn = source.basedOn.map((x) => new fhirModels.Reference(x)); }
    if (source["destination"] !== undefined) { this.destination = new fhirModels.Reference(source.destination); }
    if (source["identifier"] !== undefined) { this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x)); }
    if (source["occurrenceDateTime"] !== undefined) { this.occurrenceDateTime = source.occurrenceDateTime; }
    if (source["_occurrenceDateTime"] !== undefined) { this._occurrenceDateTime = new fhirModels.Element(source._occurrenceDateTime); }
    if (source["occurrencePeriod"] !== undefined) { this.occurrencePeriod = new fhirModels.Period(source.occurrencePeriod); }
    if (source["occurrenceTiming"] !== undefined) { this.occurrenceTiming = new fhirModels.Timing(source.occurrenceTiming); }
    if (source["partOf"] !== undefined) { this.partOf = source.partOf.map((x) => new fhirModels.Reference(x)); }
    if (source["patient"] !== undefined) { this.patient = new fhirModels.Reference(source.patient); }
    if (source["receiver"] !== undefined) { this.receiver = source.receiver.map((x) => new fhirModels.Reference(x)); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["suppliedItem"] !== undefined) { this.suppliedItem = new fhirModels.SupplyDeliverySuppliedItem(source.suppliedItem); }
    if (source["supplier"] !== undefined) { this.supplier = new fhirModels.Reference(source.supplier); }
    if (source["type"] !== undefined) { this.type = new fhirModels.CodeableConcept(source.type); }
  }
  /**
   * Factory function to create a SupplyDelivery from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.ISupplyDelivery):SupplyDelivery {
    var dest:SupplyDelivery = new SupplyDelivery(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `SupplyDelivery is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current SupplyDelivery contains all required elements.
   */
  override checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Code Values for the SupplyDelivery.status field
 */
export enum SupplyDeliveryStatusEnum {
  IN_PROGRESS = "in-progress",
  COMPLETED = "completed",
  ABANDONED = "abandoned",
  ENTERED_IN_ERROR = "entered-in-error",
}
