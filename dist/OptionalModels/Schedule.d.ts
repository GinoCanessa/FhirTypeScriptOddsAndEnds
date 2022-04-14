import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A container for slots of time that may be available for booking appointments.
 */
export declare class Schedule extends fhirModels.DomainResource implements fhirInterfaces.ISchedule {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Schedule";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhirModels.Element | undefined;
    /**
     * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselves cannot be scheduled without the other, and thus only make sense to the system exposing them as a group. Common examples of this are where the combination of a practitioner and a room (Location) are always required by a system.
     */
    actor?: fhirModels.Reference[] | undefined;
    /**
     * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * External Ids for this item.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */
    planningHorizon?: fhirModels.Period | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for Schedule from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.ISchedule>);
    /**
     * Factory function to create a Schedule from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.ISchedule): Schedule;
    /**
     * Check if the current Schedule contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Schedule.d.ts.map