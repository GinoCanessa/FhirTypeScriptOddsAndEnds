import * as fhir from '../fhir.js';
import { ServiceCategoryValueSetType } from '../fhirValueSets/ServiceCategoryValueSet.js';
import { ServiceTypeValueSetType } from '../fhirValueSets/ServiceTypeValueSet.js';
import { C80PracticeCodesValueSetType } from '../fhirValueSets/C80PracticeCodesValueSet.js';
import { V20276ValueSetType } from '../fhirValueSets/V20276ValueSet.js';
import { SlotstatusValueSetType } from '../fhirValueSets/SlotstatusValueSet.js';
import { SlotstatusValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the Slot type.
 */
export interface SlotArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Slot" | undefined;
    /**
     * External Ids for this item.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
     */
    serviceType?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The style of appointment or patient that may be booked in the slot (not service type).
     */
    appointmentType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule: fhir.ReferenceArgs | null;
    /**
     * busy | free | busy-unavailable | busy-tentative | entered-in-error.
     */
    status: SlotstatusValueSetEnum | null;
    /**
     * Date/Time that the slot is to begin.
     */
    start: fhir.FhirInstant | string | undefined;
    /**
     * Date/Time that the slot is to conclude.
     */
    end: fhir.FhirInstant | string | undefined;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: fhir.FhirString | string | undefined;
}
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export declare class Slot extends fhir.DomainResource {
    readonly __dataType: string;
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
     * Date/Time that the slot is to begin.
     */
    start: fhir.FhirInstant | null;
    /**
     * Date/Time that the slot is to conclude.
     */
    end: fhir.FhirInstant | null;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: fhir.FhirBoolean | undefined;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for Slot - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SlotArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for serviceCategory
     */
    static serviceCategoryExampleValueSet(): ServiceCategoryValueSetType;
    /**
     * Example-bound Value Set for serviceType
     */
    static serviceTypeExampleValueSet(): ServiceTypeValueSetType;
    /**
     * Preferred-bound Value Set for specialty
     */
    static specialtyPreferredValueSet(): C80PracticeCodesValueSetType;
    /**
     * Preferred-bound Value Set for appointmentType
     */
    static appointmentTypePreferredValueSet(): V20276ValueSetType;
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): SlotstatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Slot.d.ts.map