import * as fhirInterfaces from '../optionalinterfaces';
/**
 * A container for slots of time that may be available for booking appointments.
 */
export interface ISchedule extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Schedule";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhirInterfaces.IElement | undefined;
    /**
     * The capacity to support multiple referenced resource types should be used in cases where the specific resources themselves cannot be scheduled without the other, and thus only make sense to the system exposing them as a group. Common examples of this are where the combination of a practitioner and a room (Location) are always required by a system.
     */
    actor?: fhirInterfaces.IReference[] | undefined;
    /**
     * Comments on the availability to describe any extended information. Such as custom constraints on the slots that may be associated.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * External Ids for this item.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The period of time that the slots that reference this Schedule resource cover (even if none exist). These  cover the amount of time that an organization's planning horizon; the interval for which they are currently accepting appointments. This does not define a "template" for planning outside these dates.
     */
    planningHorizon?: fhirInterfaces.IPeriod | undefined;
    /**
     * A broad categorization of the service that is to be performed during this appointment.
     */
    serviceCategory?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The specific service that is to be performed during this appointment.
     */
    serviceType?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The specialty of a practitioner that would be required to perform the service requested in this appointment.
     */
    specialty?: fhirInterfaces.ICodeableConcept[] | undefined;
}
//# sourceMappingURL=ISchedule.d.ts.map