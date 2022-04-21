import * as fhir from '../fhir.js';
import { ServiceCategoryValueSetType } from '../fhirValueSets/ServiceCategoryValueSet.js';
import { ServiceTypeValueSetType } from '../fhirValueSets/ServiceTypeValueSet.js';
import { C80PracticeCodesValueSetType } from '../fhirValueSets/C80PracticeCodesValueSet.js';
import { V20276ValueSetType } from '../fhirValueSets/V20276ValueSet.js';
import { SlotstatusValueSetType, SlotstatusValueSetEnum } from '../fhirValueSets/SlotstatusValueSet.js';
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export declare type ISlot = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Slot";
    /**
     * External Ids for this item.
     */
    identifier?: fhir.IIdentifier[] | undefined;
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
     * The style of appointment or patient that may be booked in the slot (not service type).
     */
    appointmentType?: fhir.ICodeableConcept | undefined;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule: fhir.IReference | null;
    /**
     * busy | free | busy-unavailable | busy-tentative | entered-in-error.
     */
    status: SlotstatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Slot.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Date/Time that the slot is to begin.
     */
    start: string | null;
    /**
     * Extended properties for primitive element: Slot.start
     */
    _start?: fhir.IFhirElement | undefined;
    /**
     * Date/Time that the slot is to conclude.
     */
    end: string | null;
    /**
     * Extended properties for primitive element: Slot.end
     */
    _end?: fhir.IFhirElement | undefined;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: boolean | undefined;
    /**
     * Extended properties for primitive element: Slot.overbooked
     */
    _overbooked?: fhir.IFhirElement | undefined;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Slot.comment
     */
    _comment?: fhir.IFhirElement | undefined;
};
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export declare class Slot extends fhir.DomainResource implements ISlot {
    /**
     * Resource Type Name
     */
    resourceType: "Slot";
    /**
     * External Ids for this item.
     */
    identifier?: fhir.Identifier[] | undefined;
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
     * The style of appointment or patient that may be booked in the slot (not service type).
     */
    appointmentType?: fhir.CodeableConcept | undefined;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule: fhir.Reference | null;
    /**
     * busy | free | busy-unavailable | busy-tentative | entered-in-error.
     */
    status: SlotstatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: Slot.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Date/Time that the slot is to begin.
     */
    start: string | null;
    /**
     * Extended properties for primitive element: Slot.start
     */
    _start?: fhir.FhirElement | undefined;
    /**
     * Date/Time that the slot is to conclude.
     */
    end: string | null;
    /**
     * Extended properties for primitive element: Slot.end
     */
    _end?: fhir.FhirElement | undefined;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: boolean | undefined;
    /**
     * Extended properties for primitive element: Slot.overbooked
     */
    _overbooked?: fhir.FhirElement | undefined;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Slot.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Slot - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISlot>);
    /**
     * Example-bound Value Set for serviceCategory
     */
    serviceCategoryExampleValueSet(): ServiceCategoryValueSetType;
    /**
     * Example-bound Value Set for serviceType
     */
    serviceTypeExampleValueSet(): ServiceTypeValueSetType;
    /**
     * Preferred-bound Value Set for specialty
     */
    specialtyPreferredValueSet(): C80PracticeCodesValueSetType;
    /**
     * Preferred-bound Value Set for appointmentType
     */
    appointmentTypePreferredValueSet(): V20276ValueSetType;
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet(): SlotstatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Slot.d.ts.map