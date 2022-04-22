// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyDelivery

import * as fhir from '../fhir.js'

import { SupplyItemValueSet, SupplyItemValueSetType, SupplyItemValueSetEnum } from '../fhirValueSets/SupplyItemValueSet.js'
import { SupplydeliveryStatusValueSet, SupplydeliveryStatusValueSetType, SupplydeliveryStatusValueSetEnum } from '../fhirValueSets/SupplydeliveryStatusValueSet.js'
import { SupplydeliveryTypeValueSet, SupplydeliveryTypeValueSetType, SupplydeliveryTypeValueSetEnum } from '../fhirValueSets/SupplydeliveryTypeValueSet.js'

/**
 * The item that is being delivered or has been supplied.
 */
export type ISupplyDeliverySuppliedItem = fhir.IBackboneElement & { 
  /**
   * The amount of supply that has been dispensed. Includes unit of measure.
   */
  quantity?: fhir.IQuantity|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemReference?: fhir.IReference|undefined;
}

/**
 * Record of delivery of what is supplied.
 */
export type ISupplyDelivery = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "SupplyDelivery";
  /**
   * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  basedOn?: fhir.IReference[]|undefined;
  /**
   * Not to be used to link an event to an Encounter - use Event.context for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  partOf?: fhir.IReference[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: SupplydeliveryStatusValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: SupplyDelivery.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * A link to a resource representing the person whom the delivered item is for.
   */
  patient?: fhir.IReference|undefined;
  /**
   * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * The item that is being delivered or has been supplied.
   */
  suppliedItem?: fhir.ISupplyDeliverySuppliedItem|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrenceDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: SupplyDelivery.occurrence[x]
   */
  _occurrenceDateTime?: fhir.IFhirElement|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrencePeriod?: fhir.IPeriod|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrenceTiming?: fhir.ITiming|undefined;
  /**
   * The individual responsible for dispensing the medication, supplier or device.
   */
  supplier?: fhir.IReference|undefined;
  /**
   * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
   */
  destination?: fhir.IReference|undefined;
  /**
   * Identifies the person who picked up the Supply.
   */
  receiver?: fhir.IReference[]|undefined;
}

/**
 * The item that is being delivered or has been supplied.
 */
export class SupplyDeliverySuppliedItem extends fhir.BackboneElement implements ISupplyDeliverySuppliedItem {
  /**
   * The amount of supply that has been dispensed. Includes unit of measure.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  public itemCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  public itemReference?: fhir.Reference|undefined;
  /**
   * Default constructor for SupplyDeliverySuppliedItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISupplyDeliverySuppliedItem> = { }) {
    super(source);
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity!); }
    if (source['itemCodeableConcept']) { this.itemCodeableConcept = new fhir.CodeableConcept(source.itemCodeableConcept!); }
    if (source['itemReference']) { this.itemReference = new fhir.Reference(source.itemReference!); }
  }
  /**
   * Example-bound Value Set for itemCodeableConcept
   */
  public static itemCodeableConceptExampleValueSet():SupplyItemValueSetType {
    return SupplyItemValueSet;
  }
  /**
   * Example-bound Value Set for itemReference
   */
  public static itemReferenceExampleValueSet():SupplyItemValueSetType {
    return SupplyItemValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["quantity"]) { results.push(...this.quantity.doModelValidation()); }
    if (this["itemCodeableConcept"]) { results.push(...this.itemCodeableConcept.doModelValidation()); }
    if (this["itemReference"]) { results.push(...this.itemReference.doModelValidation()); }
    return results;
  }
}

/**
 * Record of delivery of what is supplied.
 */
export class SupplyDelivery extends fhir.DomainResource implements ISupplyDelivery {
  /**
   * Resource Type Name
   */
  public resourceType: "SupplyDelivery";
  /**
   * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  public basedOn?: fhir.Reference[]|undefined;
  /**
   * Not to be used to link an event to an Encounter - use Event.context for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  public partOf?: fhir.Reference[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status?: SupplydeliveryStatusValueSetEnum|undefined;
  /**
   * Extended properties for primitive element: SupplyDelivery.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * A link to a resource representing the person whom the delivered item is for.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The item that is being delivered or has been supplied.
   */
  public suppliedItem?: fhir.SupplyDeliverySuppliedItem|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  public occurrenceDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: SupplyDelivery.occurrence[x]
   */
  public _occurrenceDateTime?: fhir.FhirElement|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  public occurrencePeriod?: fhir.Period|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  public occurrenceTiming?: fhir.Timing|undefined;
  /**
   * The individual responsible for dispensing the medication, supplier or device.
   */
  public supplier?: fhir.Reference|undefined;
  /**
   * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
   */
  public destination?: fhir.Reference|undefined;
  /**
   * Identifies the person who picked up the Supply.
   */
  public receiver?: fhir.Reference[]|undefined;
  /**
   * Default constructor for SupplyDelivery - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ISupplyDelivery> = { }) {
    super(source);
    this.resourceType = 'SupplyDelivery';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    if (source['status']) { this.status = source.status; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient!); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source['suppliedItem']) { this.suppliedItem = new fhir.SupplyDeliverySuppliedItem(source.suppliedItem!); }
    if (source['occurrenceDateTime']) { this.occurrenceDateTime = source.occurrenceDateTime; }
    if (source['_occurrenceDateTime']) { this._occurrenceDateTime = new fhir.FhirElement(source._occurrenceDateTime!); }
    if (source['occurrencePeriod']) { this.occurrencePeriod = new fhir.Period(source.occurrencePeriod!); }
    if (source['occurrenceTiming']) { this.occurrenceTiming = new fhir.Timing(source.occurrenceTiming!); }
    if (source['supplier']) { this.supplier = new fhir.Reference(source.supplier!); }
    if (source['destination']) { this.destination = new fhir.Reference(source.destination!); }
    if (source['receiver']) { this.receiver = source.receiver.map((x) => new fhir.Reference(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():SupplydeliveryStatusValueSetType {
    return SupplydeliveryStatusValueSet;
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():SupplydeliveryTypeValueSetType {
    return SupplydeliveryTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: SupplyDelivery.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["basedOn"]) { this.basedOn.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["partOf"]) { this.partOf.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["patient"]) { results.push(...this.patient.doModelValidation()); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["suppliedItem"]) { results.push(...this.suppliedItem.doModelValidation()); }
    if (this["_occurrenceDateTime"]) { results.push(...this._occurrenceDateTime.doModelValidation()); }
    if (this["occurrencePeriod"]) { results.push(...this.occurrencePeriod.doModelValidation()); }
    if (this["occurrenceTiming"]) { results.push(...this.occurrenceTiming.doModelValidation()); }
    if (this["supplier"]) { results.push(...this.supplier.doModelValidation()); }
    if (this["destination"]) { results.push(...this.destination.doModelValidation()); }
    if (this["receiver"]) { this.receiver.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
