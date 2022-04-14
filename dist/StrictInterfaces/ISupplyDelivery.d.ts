import * as fhirInterfaces from '../strictinterfaces';
/**
 * The item that is being delivered or has been supplied.
 */
export interface ISupplyDeliverySuppliedItem extends fhirInterfaces.IBackboneElement {
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
     */
    itemCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
     */
    itemReference?: fhirInterfaces.IReference | undefined;
    /**
     * The amount of supply that has been dispensed. Includes unit of measure.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
}
/**
 * Record of delivery of what is supplied.
 */
export interface ISupplyDelivery extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "SupplyDelivery";
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn?: fhirInterfaces.IReference[] | undefined;
    /**
     * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
     */
    destination?: fhirInterfaces.IReference | undefined;
    /**
     * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrencePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrenceTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * Not to be used to link an event to an Encounter - use Event.context for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf?: fhirInterfaces.IReference[] | undefined;
    /**
     * A link to a resource representing the person whom the delivered item is for.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * Identifies the person who picked up the Supply.
     */
    receiver?: fhirInterfaces.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: SupplyDeliveryStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The item that is being delivered or has been supplied.
     */
    suppliedItem?: fhirInterfaces.ISupplyDeliverySuppliedItem | undefined;
    /**
     * The individual responsible for dispensing the medication, supplier or device.
     */
    supplier?: fhirInterfaces.IReference | undefined;
    /**
     * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Code Values for the SupplyDelivery.status field
 */
export declare enum SupplyDeliveryStatusEnum {
    IN_PROGRESS = "in-progress",
    COMPLETED = "completed",
    ABANDONED = "abandoned",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=ISupplyDelivery.d.ts.map