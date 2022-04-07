import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export declare class Slot extends fhirModels.DomainResource implements fhirInterfaces.ISlot {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Slot";
    /**
     * The style of appointment or patient that may be booked in the slot (not service type).
     */
    appointmentType?: fhirModels.CodeableConcept | undefined;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * Date/Time that the slot is to conclude.
     */
    end?: string | undefined;
    _end?: fhirModels.Element | undefined;
    /**
     * External Ids for this item.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: boolean | undefined;
    _overbooked?: fhirModels.Element | undefined;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule?: fhirModels.Reference | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
     */
    serviceType?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Date/Time that the slot is to begin.
     */
    start?: string | undefined;
    _start?: fhirModels.Element | undefined;
    /**
     * busy | free | busy-unavailable | busy-tentative | entered-in-error.
     */
    status?: SlotStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for Slot from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISlot>);
    /**
     * Factory function to create a Slot from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISlot): Slot;
    /**
     * Check if the current Slot contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the Slot.status field
 */
export declare enum SlotStatusEnum {
    BUSY = "busy",
    FREE = "free",
    BUSY_UNAVAILABLE = "busy-unavailable",
    BUSY_TENTATIVE = "busy-tentative",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=Slot.d.ts.map