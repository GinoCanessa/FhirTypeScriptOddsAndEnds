import * as fhir from '../fhir';
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export declare type IPractitionerRoleAvailableTime = fhir.IBackboneElement & {
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    _allDay?: fhir.IFhirElement | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    _availableEndTime?: fhir.IFhirElement | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    _availableStartTime?: fhir.IFhirElement | undefined;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: PractitionerRoleAvailableTimeDaysOfWeekEnum[] | undefined;
    _daysOfWeek?: fhir.IFhirElement[] | undefined;
};
/**
 * The practitioner is not available or performing this role during this period of time due to the provided reason.
 */
export declare type IPractitionerRoleNotAvailable = fhir.IBackboneElement & {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description: string | null;
    _description?: fhir.IFhirElement | undefined;
    /**
     * Service is not available (seasonally or for a public holiday) from this date.
     */
    during?: fhir.IPeriod | undefined;
};
/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export declare type IPractitionerRole = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "PractitionerRole";
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    _active?: fhir.IFhirElement | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    _availabilityExceptions?: fhir.IFhirElement | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhir.IPractitionerRoleAvailableTime[] | undefined;
    /**
     * A person may have more than one role.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * Technical endpoints providing access to services operated for the practitioner with this role.
     */
    endpoint?: fhir.IReference[] | undefined;
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService?: fhir.IReference[] | undefined;
    /**
     * Business Identifiers that are specific to a role/location.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location?: fhir.IReference[] | undefined;
    /**
     * The practitioner is not available or performing this role during this period of time due to the provided reason.
     */
    notAvailable?: fhir.IPractitionerRoleNotAvailable[] | undefined;
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    organization?: fhir.IReference | undefined;
    /**
     * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Practitioner that is able to provide the defined services for the organization.
     */
    practitioner?: fhir.IReference | undefined;
    /**
     * Specific specialty of the practitioner.
     */
    specialty?: fhir.ICodeableConcept[] | undefined;
    /**
     * Contact details that are specific to the role/location/service.
     */
    telecom?: fhir.IContactPoint[] | undefined;
};
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export declare class PractitionerRoleAvailableTime extends fhir.BackboneElement implements fhir.IPractitionerRoleAvailableTime {
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    _allDay?: fhir.FhirElement | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    _availableEndTime?: fhir.FhirElement | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    _availableStartTime?: fhir.FhirElement | undefined;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: PractitionerRoleAvailableTimeDaysOfWeekEnum[] | undefined;
    _daysOfWeek?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for PractitionerRoleAvailableTime - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPractitionerRoleAvailableTime>);
    /**
     * Check if the current PractitionerRoleAvailableTime contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a PractitionerRoleAvailableTime from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IPractitionerRoleAvailableTime): PractitionerRoleAvailableTime;
}
/**
 * The practitioner is not available or performing this role during this period of time due to the provided reason.
 */
export declare class PractitionerRoleNotAvailable extends fhir.BackboneElement implements fhir.IPractitionerRoleNotAvailable {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description: string | null;
    _description?: fhir.FhirElement | undefined;
    /**
     * Service is not available (seasonally or for a public holiday) from this date.
     */
    during?: fhir.Period | undefined;
    /**
     * Default constructor for PractitionerRoleNotAvailable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPractitionerRoleNotAvailable>);
    /**
     * Check if the current PractitionerRoleNotAvailable contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a PractitionerRoleNotAvailable from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IPractitionerRoleNotAvailable): PractitionerRoleNotAvailable;
}
/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export declare class PractitionerRole extends fhir.DomainResource implements fhir.IPractitionerRole {
    /**
     * Resource Type Name
     */
    resourceType: "PractitionerRole";
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    _active?: fhir.FhirElement | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    _availabilityExceptions?: fhir.FhirElement | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhir.PractitionerRoleAvailableTime[] | undefined;
    /**
     * A person may have more than one role.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Technical endpoints providing access to services operated for the practitioner with this role.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService?: fhir.Reference[] | undefined;
    /**
     * Business Identifiers that are specific to a role/location.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location?: fhir.Reference[] | undefined;
    /**
     * The practitioner is not available or performing this role during this period of time due to the provided reason.
     */
    notAvailable?: fhir.PractitionerRoleNotAvailable[] | undefined;
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    organization?: fhir.Reference | undefined;
    /**
     * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
     */
    period?: fhir.Period | undefined;
    /**
     * Practitioner that is able to provide the defined services for the organization.
     */
    practitioner?: fhir.Reference | undefined;
    /**
     * Specific specialty of the practitioner.
     */
    specialty?: fhir.CodeableConcept[] | undefined;
    /**
     * Contact details that are specific to the role/location/service.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Default constructor for PractitionerRole - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPractitionerRole>);
    /**
     * Check if the current PractitionerRole contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a PractitionerRole from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IPractitionerRole): PractitionerRole;
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
//# sourceMappingURL=PractitionerRole.d.ts.map