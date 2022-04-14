import * as fhirInterfaces from '../optionalinterfaces';
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export interface IPractitionerRoleAvailableTime extends fhirInterfaces.IBackboneElement {
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    _allDay?: fhirInterfaces.IElement | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    _availableEndTime?: fhirInterfaces.IElement | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    _availableStartTime?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: PractitionerRoleAvailableTimeDaysOfWeekEnum[] | undefined;
    _daysOfWeek?: fhirInterfaces.IElement[] | undefined;
}
/**
 * Code Values for the PractitionerRole.availableTime.daysOfWeek field
 */
export declare enum PractitionerRoleAvailableTimeDaysOfWeekEnum {
    MON = "mon",
    TUE = "tue",
    WED = "wed",
    THU = "thu",
    FRI = "fri",
    SAT = "sat",
    SUN = "sun"
}
/**
 * The practitioner is not available or performing this role during this period of time due to the provided reason.
 */
export interface IPractitionerRoleNotAvailable extends fhirInterfaces.IBackboneElement {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Service is not available (seasonally or for a public holiday) from this date.
     */
    during?: fhirInterfaces.IPeriod | undefined;
}
/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export interface IPractitionerRole extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "PractitionerRole";
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    _active?: fhirInterfaces.IElement | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    _availabilityExceptions?: fhirInterfaces.IElement | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhirInterfaces.IPractitionerRoleAvailableTime[] | undefined;
    /**
     * A person may have more than one role.
     */
    code?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Technical endpoints providing access to services operated for the practitioner with this role.
     */
    endpoint?: fhirInterfaces.IReference[] | undefined;
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService?: fhirInterfaces.IReference[] | undefined;
    /**
     * Business Identifiers that are specific to a role/location.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location?: fhirInterfaces.IReference[] | undefined;
    /**
     * The practitioner is not available or performing this role during this period of time due to the provided reason.
     */
    notAvailable?: fhirInterfaces.IPractitionerRoleNotAvailable[] | undefined;
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    organization?: fhirInterfaces.IReference | undefined;
    /**
     * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * Practitioner that is able to provide the defined services for the organization.
     */
    practitioner?: fhirInterfaces.IReference | undefined;
    /**
     * Specific specialty of the practitioner.
     */
    specialty?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Contact details that are specific to the role/location/service.
     */
    telecom?: fhirInterfaces.IContactPoint[] | undefined;
}
//# sourceMappingURL=IPractitionerRole.d.ts.map