import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export declare class PractitionerRoleAvailableTime extends fhirModels.BackboneElement implements fhirInterfaces.IPractitionerRoleAvailableTime {
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    _allDay?: fhirModels.Element | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    _availableEndTime?: fhirModels.Element | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    _availableStartTime?: fhirModels.Element | undefined;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: PractitionerRoleAvailableTimeDaysOfWeekEnum[] | undefined;
    _daysOfWeek?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for PractitionerRoleAvailableTime from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPractitionerRoleAvailableTime>);
    /**
     * Factory function to create a PractitionerRoleAvailableTime from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPractitionerRoleAvailableTime): PractitionerRoleAvailableTime;
    /**
     * Check if the current PractitionerRoleAvailableTime contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class PractitionerRoleNotAvailable extends fhirModels.BackboneElement implements fhirInterfaces.IPractitionerRoleNotAvailable {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Service is not available (seasonally or for a public holiday) from this date.
     */
    during?: fhirModels.Period | undefined;
    /**
     * Default constructor for PractitionerRoleNotAvailable from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPractitionerRoleNotAvailable>);
    /**
     * Factory function to create a PractitionerRoleNotAvailable from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPractitionerRoleNotAvailable): PractitionerRoleNotAvailable;
    /**
     * Check if the current PractitionerRoleNotAvailable contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export declare class PractitionerRole extends fhirModels.DomainResource implements fhirInterfaces.IPractitionerRole {
    /**
     * Resource Type Name
     */
    readonly resourceType = "PractitionerRole";
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    _active?: fhirModels.Element | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    _availabilityExceptions?: fhirModels.Element | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhirModels.PractitionerRoleAvailableTime[] | undefined;
    /**
     * A person may have more than one role.
     */
    code?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Technical endpoints providing access to services operated for the practitioner with this role.
     */
    endpoint?: fhirModels.Reference[] | undefined;
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService?: fhirModels.Reference[] | undefined;
    /**
     * Business Identifiers that are specific to a role/location.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location?: fhirModels.Reference[] | undefined;
    /**
     * The practitioner is not available or performing this role during this period of time due to the provided reason.
     */
    notAvailable?: fhirModels.PractitionerRoleNotAvailable[] | undefined;
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    organization?: fhirModels.Reference | undefined;
    /**
     * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Practitioner that is able to provide the defined services for the organization.
     */
    practitioner?: fhirModels.Reference | undefined;
    /**
     * Specific specialty of the practitioner.
     */
    specialty?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Contact details that are specific to the role/location/service.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Default constructor for PractitionerRole from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPractitionerRole>);
    /**
     * Factory function to create a PractitionerRole from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPractitionerRole): PractitionerRole;
    /**
     * Check if the current PractitionerRole contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=PractitionerRole.d.ts.map