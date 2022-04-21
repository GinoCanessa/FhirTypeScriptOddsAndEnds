import * as fhir from '../fhir.js';
import { ServiceCategoryValueSetType } from '../fhirValueSets/ServiceCategoryValueSet.js';
import { ServiceTypeValueSetType } from '../fhirValueSets/ServiceTypeValueSet.js';
import { C80PracticeCodesValueSetType } from '../fhirValueSets/C80PracticeCodesValueSet.js';
/**
 * A container for slots of time that may be available for booking appointments.
 */
export declare type ISchedule = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Schedule";
    /**
     * External Ids for this item.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Schedule.active
     */
    _active?: fhir.IFhirElement | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.ICodeableConcept[] | undefined;
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType?: fhir.ICodeableConcept[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.ICodeableConcept[] | undefined;
    /**
     * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselves cannot be scheduled without the other, and thus only make sense to the system exposing them as a group. Common examples of this are where the combination of a practitioner and a room (Location) are always required by a system.
     */
    actor: fhir.IReference[] | null;
    /**
     * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */
    planningHorizon?: fhir.IPeriod | undefined;
    /**
     * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Schedule.comment
     */
    _comment?: fhir.IFhirElement | undefined;
};
/**
 * A container for slots of time that may be available for booking appointments.
 */
export declare class Schedule extends fhir.DomainResource implements ISchedule {
    /**
     * Resource Type Name
     */
    resourceType: "Schedule";
    /**
     * External Ids for this item.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Schedule.active
     */
    _active?: fhir.FhirElement | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhir.CodeableConcept[] | undefined;
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType?: fhir.CodeableConcept[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhir.CodeableConcept[] | undefined;
    /**
     * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselves cannot be scheduled without the other, and thus only make sense to the system exposing them as a group. Common examples of this are where the combination of a practitioner and a room (Location) are always required by a system.
     */
    actor: fhir.Reference[] | null;
    /**
     * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */
    planningHorizon?: fhir.Period | undefined;
    /**
     * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Schedule.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Schedule - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISchedule>);
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
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Schedule.d.ts.map