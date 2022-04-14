import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export interface ISlot extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Slot";
    /**
     * The style of appointment or patient that may be booked in the slot (not service type).
     */
    appointmentType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * Date/Time that the slot is to conclude.
     */
    end?: string | undefined;
    _end?: fhirInterfaces.IElement | undefined;
    /**
     * External Ids for this item.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: boolean | undefined;
    _overbooked?: fhirInterfaces.IElement | undefined;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule?: fhirInterfaces.IReference | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
     */
    serviceType?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Date/Time that the slot is to begin.
     */
    start?: string | undefined;
    _start?: fhirInterfaces.IElement | undefined;
    /**
     * busy | free | busy-unavailable | busy-tentative | entered-in-error.
     */
    status?: SlotStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=ISlot.d.ts.map