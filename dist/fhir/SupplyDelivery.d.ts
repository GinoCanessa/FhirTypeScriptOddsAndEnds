import * as fhir from '../fhir';
/**
 * The item that is being delivered or has been supplied.
 */
export declare type ISupplyDeliverySuppliedItem = fhir.IBackboneElement & {
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
     */
    itemCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
     */
    itemReference?: fhir.IReference | undefined;
    /**
     * The amount of supply that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.IQuantity | undefined;
};
/**
 * Record of delivery of what is supplied.
 */
export declare type ISupplyDelivery = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyDelivery";
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
     */
    destination?: fhir.IReference | undefined;
    /**
     * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.IFhirElement | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrencePeriod?: fhir.IPeriod | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrenceTiming?: fhir.ITiming | undefined;
    /**
     * Not to be used to link an event to an Encounter - use Event.context for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * A link to a resource representing the person whom the delivered item is for.
     */
    patient?: fhir.IReference | undefined;
    /**
     * Identifies the person who picked up the Supply.
     */
    receiver?: fhir.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: SupplyDeliveryStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The item that is being delivered or has been supplied.
     */
    suppliedItem?: fhir.ISupplyDeliverySuppliedItem | undefined;
    /**
     * The individual responsible for dispensing the medication, supplier or device.
     */
    supplier?: fhir.IReference | undefined;
    /**
     * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhir.ICodeableConcept | undefined;
};
/**
 * The item that is being delivered or has been supplied.
 */
export declare class SupplyDeliverySuppliedItem extends fhir.BackboneElement implements fhir.ISupplyDeliverySuppliedItem {
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * The amount of supply that has been dispensed. Includes unit of measure.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Default constructor for SupplyDeliverySuppliedItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISupplyDeliverySuppliedItem>);
    /**
     * Check if the current SupplyDeliverySuppliedItem contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SupplyDeliverySuppliedItem from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISupplyDeliverySuppliedItem): SupplyDeliverySuppliedItem;
}
/**
 * Record of delivery of what is supplied.
 */
export declare class SupplyDelivery extends fhir.DomainResource implements fhir.ISupplyDelivery {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyDelivery";
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
     */
    destination?: fhir.Reference | undefined;
    /**
     * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.FhirElement | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * [The list of types may be constrained as appropriate for the type of event].
     */
    occurrenceTiming?: fhir.Timing | undefined;
    /**
     * Not to be used to link an event to an Encounter - use Event.context for that.
     * [The allowed reference resources may be adjusted as appropriate for the event resource].
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * A link to a resource representing the person whom the delivered item is for.
     */
    patient?: fhir.Reference | undefined;
    /**
     * Identifies the person who picked up the Supply.
     */
    receiver?: fhir.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: SupplyDeliveryStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * The item that is being delivered or has been supplied.
     */
    suppliedItem?: fhir.SupplyDeliverySuppliedItem | undefined;
    /**
     * The individual responsible for dispensing the medication, supplier or device.
     */
    supplier?: fhir.Reference | undefined;
    /**
     * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for SupplyDelivery - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISupplyDelivery>);
    /**
     * Check if the current SupplyDelivery contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a SupplyDelivery from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISupplyDelivery): SupplyDelivery;
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
//# sourceMappingURL=SupplyDelivery.d.ts.map