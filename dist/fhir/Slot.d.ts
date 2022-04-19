import * as fhir from '../fhir';
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export declare type ISlot = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Slot";
    /**
     * The style of appointment or patient that may be booked in the slot (not service type).
     */
    appointmentType?: fhir.ICodeableConcept | undefined;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: string | undefined;
    _comment?: fhir.IFhirElement | undefined;
    /**
     * Date/Time that the slot is to conclude.
     */
    end: string | null;
    _end?: fhir.IFhirElement | undefined;
    /**
     * External Ids for this item.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: boolean | undefined;
    _overbooked?: fhir.IFhirElement | undefined;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule: fhir.IReference | null;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.ICodeableConcept[] | undefined;
    /**
     * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
     */
    serviceType?: fhir.ICodeableConcept[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.ICodeableConcept[] | undefined;
    /**
     * Date/Time that the slot is to begin.
     */
    start: string | null;
    _start?: fhir.IFhirElement | undefined;
    /**
     * busy | free | busy-unavailable | busy-tentative | entered-in-error.
     */
    status: SlotStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export declare class Slot extends fhir.DomainResource implements fhir.ISlot {
    /**
     * Resource Type Name
     */
    resourceType: "Slot";
    /**
     * The style of appointment or patient that may be booked in the slot (not service type).
     */
    appointmentType?: fhir.CodeableConcept | undefined;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: string | undefined;
    _comment?: fhir.FhirElement | undefined;
    /**
     * Date/Time that the slot is to conclude.
     */
    end: string | null;
    _end?: fhir.FhirElement | undefined;
    /**
     * External Ids for this item.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: boolean | undefined;
    _overbooked?: fhir.FhirElement | undefined;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule: fhir.Reference | null;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConcept[] | undefined;
    /**
     * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
     */
    serviceType?: fhir.CodeableConcept[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.CodeableConcept[] | undefined;
    /**
     * Date/Time that the slot is to begin.
     */
    start: string | null;
    _start?: fhir.FhirElement | undefined;
    /**
     * busy | free | busy-unavailable | busy-tentative | entered-in-error.
     */
    status: SlotStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Slot - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISlot>);
    /**
     * Check if the current Slot contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a Slot from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.ISlot): Slot;
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