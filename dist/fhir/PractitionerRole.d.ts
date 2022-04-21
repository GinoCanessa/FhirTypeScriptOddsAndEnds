import * as fhir from '../fhir.js';
import { DaysOfWeekValueSetType, DaysOfWeekValueSetEnum } from '../fhirValueSets/DaysOfWeekValueSet.js';
import { PractitionerRoleValueSetType } from '../fhirValueSets/PractitionerRoleValueSet.js';
import { C80PracticeCodesValueSetType } from '../fhirValueSets/C80PracticeCodesValueSet.js';
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export declare type IPractitionerRoleAvailableTime = fhir.IBackboneElement & {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: DaysOfWeekValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.daysOfWeek
     */
    _daysOfWeek?: fhir.IFhirElement[] | undefined;
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.allDay
     */
    _allDay?: fhir.IFhirElement | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.availableStartTime
     */
    _availableStartTime?: fhir.IFhirElement | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.availableEndTime
     */
    _availableEndTime?: fhir.IFhirElement | undefined;
};
/**
 * The practitioner is not available or performing this role during this period of time due to the provided reason.
 */
export declare type IPractitionerRoleNotAvailable = fhir.IBackboneElement & {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: PractitionerRole.notAvailable.description
     */
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
     * Business Identifiers that are specific to a role/location.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.active
     */
    _active?: fhir.IFhirElement | undefined;
    /**
     * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Practitioner that is able to provide the defined services for the organization.
     */
    practitioner?: fhir.IReference | undefined;
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    organization?: fhir.IReference | undefined;
    /**
     * A person may have more than one role.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * Specific specialty of the practitioner.
     */
    specialty?: fhir.ICodeableConcept[] | undefined;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location?: fhir.IReference[] | undefined;
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService?: fhir.IReference[] | undefined;
    /**
     * Contact details that are specific to the role/location/service.
     */
    telecom?: fhir.IContactPoint[] | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhir.IPractitionerRoleAvailableTime[] | undefined;
    /**
     * The practitioner is not available or performing this role during this period of time due to the provided reason.
     */
    notAvailable?: fhir.IPractitionerRoleNotAvailable[] | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availabilityExceptions
     */
    _availabilityExceptions?: fhir.IFhirElement | undefined;
    /**
     * Technical endpoints providing access to services operated for the practitioner with this role.
     */
    endpoint?: fhir.IReference[] | undefined;
};
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export declare class PractitionerRoleAvailableTime extends fhir.BackboneElement implements IPractitionerRoleAvailableTime {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: DaysOfWeekValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.daysOfWeek
     */
    _daysOfWeek?: fhir.FhirElement[] | undefined;
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.allDay
     */
    _allDay?: fhir.FhirElement | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.availableStartTime
     */
    _availableStartTime?: fhir.FhirElement | undefined;
    /**
     * The timezone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availableTime.availableEndTime
     */
    _availableEndTime?: fhir.FhirElement | undefined;
    /**
     * Default constructor for PractitionerRoleAvailableTime - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPractitionerRoleAvailableTime>);
    /**
     * Required-bound Value Set for daysOfWeek
     */
    daysOfWeekRequiredValueSet(): DaysOfWeekValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The practitioner is not available or performing this role during this period of time due to the provided reason.
 */
export declare class PractitionerRoleNotAvailable extends fhir.BackboneElement implements IPractitionerRoleNotAvailable {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: PractitionerRole.notAvailable.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Service is not available (seasonally or for a public holiday) from this date.
     */
    during?: fhir.Period | undefined;
    /**
     * Default constructor for PractitionerRoleNotAvailable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPractitionerRoleNotAvailable>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.
 */
export declare class PractitionerRole extends fhir.DomainResource implements IPractitionerRole {
    /**
     * Resource Type Name
     */
    resourceType: "PractitionerRole";
    /**
     * Business Identifiers that are specific to a role/location.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.active
     */
    _active?: fhir.FhirElement | undefined;
    /**
     * The period during which the person is authorized to act as a practitioner in these role(s) for the organization.
     */
    period?: fhir.Period | undefined;
    /**
     * Practitioner that is able to provide the defined services for the organization.
     */
    practitioner?: fhir.Reference | undefined;
    /**
     * The organization where the Practitioner performs the roles associated.
     */
    organization?: fhir.Reference | undefined;
    /**
     * A person may have more than one role.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Specific specialty of the practitioner.
     */
    specialty?: fhir.CodeableConcept[] | undefined;
    /**
     * The location(s) at which this practitioner provides care.
     */
    location?: fhir.Reference[] | undefined;
    /**
     * The list of healthcare services that this worker provides for this role's Organization/Location(s).
     */
    healthcareService?: fhir.Reference[] | undefined;
    /**
     * Contact details that are specific to the role/location/service.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhir.PractitionerRoleAvailableTime[] | undefined;
    /**
     * The practitioner is not available or performing this role during this period of time due to the provided reason.
     */
    notAvailable?: fhir.PractitionerRoleNotAvailable[] | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    /**
     * Extended properties for primitive element: PractitionerRole.availabilityExceptions
     */
    _availabilityExceptions?: fhir.FhirElement | undefined;
    /**
     * Technical endpoints providing access to services operated for the practitioner with this role.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * Default constructor for PractitionerRole - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPractitionerRole>);
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): PractitionerRoleValueSetType;
    /**
     * Preferred-bound Value Set for specialty
     */
    specialtyPreferredValueSet(): C80PracticeCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=PractitionerRole.d.ts.map