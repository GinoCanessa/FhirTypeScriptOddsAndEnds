import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Does this service have specific eligibility requirements that need to be met in order to use the service?
 */
export declare class HealthcareServiceEligibility extends fhirModels.BackboneElement implements fhirInterfaces.IHealthcareServiceEligibility {
    /**
     * Coded value for the eligibility.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * The description of service eligibility should, in general, not exceed one or two paragraphs. It should be sufficient for a prospective consumer to determine if they are likely to be eligible or not. Where eligibility requirements and conditions are complex, it may simply be noted that an eligibility assessment is required. Where eligibility is determined by an outside source, such as an Act of Parliament, this should be noted, preferably with a reference to a commonly available copy of the source document such as a web page.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * Default constructor for HealthcareServiceEligibility from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IHealthcareServiceEligibility>);
    /**
     * Factory function to create a HealthcareServiceEligibility from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IHealthcareServiceEligibility): HealthcareServiceEligibility;
    /**
     * Check if the current HealthcareServiceEligibility contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export declare class HealthcareServiceAvailableTime extends fhirModels.BackboneElement implements fhirInterfaces.IHealthcareServiceAvailableTime {
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    _allDay?: fhirModels.Element | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    _availableEndTime?: fhirModels.Element | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    _availableStartTime?: fhirModels.Element | undefined;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: HealthcareServiceAvailableTimeDaysOfWeekEnum[] | undefined;
    _daysOfWeek?: fhirModels.Element[] | undefined;
    /**
     * Default constructor for HealthcareServiceAvailableTime from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IHealthcareServiceAvailableTime>);
    /**
     * Factory function to create a HealthcareServiceAvailableTime from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IHealthcareServiceAvailableTime): HealthcareServiceAvailableTime;
    /**
     * Check if the current HealthcareServiceAvailableTime contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the HealthcareService.availableTime.daysOfWeek field
 */
export declare enum HealthcareServiceAvailableTimeDaysOfWeekEnum {
    MON = "mon",
    TUE = "tue",
    WED = "wed",
    THU = "thu",
    FRI = "fri",
    SAT = "sat",
    SUN = "sun"
}
/**
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
export declare class HealthcareServiceNotAvailable extends fhirModels.BackboneElement implements fhirInterfaces.IHealthcareServiceNotAvailable {
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
     * Default constructor for HealthcareServiceNotAvailable from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IHealthcareServiceNotAvailable>);
    /**
     * Factory function to create a HealthcareServiceNotAvailable from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IHealthcareServiceNotAvailable): HealthcareServiceNotAvailable;
    /**
     * Check if the current HealthcareServiceNotAvailable contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The details of a healthcare service available at a location.
 */
export declare class HealthcareService extends fhirModels.DomainResource implements fhirInterfaces.IHealthcareService {
    /**
     * Resource Type Name
     */
    readonly resourceType = "HealthcareService";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhirModels.Element | undefined;
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */
    appointmentRequired?: boolean | undefined;
    _appointmentRequired?: fhirModels.Element | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    _availabilityExceptions?: fhirModels.Element | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhirModels.HealthcareServiceAvailableTime[] | undefined;
    /**
     * Selecting a Service Category then determines the list of relevant service types that can be selected in the primary service type.
     */
    category?: fhirModels.CodeableConcept[] | undefined;
    /**
     * These could be such things as is wheelchair accessible.
     */
    characteristic?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Would expect that a user would not see this information on a search results, and it would only be available when viewing the complete details of the service.
     */
    comment?: string | undefined;
    _comment?: fhirModels.Element | undefined;
    /**
     * When using this property it indicates that the service is available with this language, it is not derived from the practitioners, and not all are required to use this language, just that this language is available while scheduling.
     */
    communication?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual domains too (mode = kind), such as a physical area (tri-state area) and some other attribute (covered by Example Care Organization). These types of Locations are often not managed by any specific organization. This could also include generic locations such as "in-home".
     */
    coverageArea?: fhirModels.Reference[] | undefined;
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility?: fhirModels.HealthcareServiceEligibility[] | undefined;
    /**
     * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
     */
    endpoint?: fhirModels.Reference[] | undefined;
    /**
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: string | undefined;
    _extraDetails?: fhirModels.Element | undefined;
    /**
     * External identifiers for this item.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The location(s) where this healthcare service may be provided.
     */
    location?: fhirModels.Reference[] | undefined;
    /**
     * Further description of the service as it would be presented to a consumer while searching.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The HealthcareService is not available during this period of time due to the provided reason.
     */
    notAvailable?: fhirModels.HealthcareServiceNotAvailable[] | undefined;
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */
    photo?: fhirModels.Attachment | undefined;
    /**
     * Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs, Homeless Program, ….
     */
    program?: fhirModels.CodeableConcept[] | undefined;
    /**
     * This property is recommended to be the same as the Location's managingOrganization, and if not provided should be interpreted as such. If the Location does not have a managing Organization, then this property should be populated.
     */
    providedBy?: fhirModels.Reference | undefined;
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The provision means being commissioned by, contractually obliged or financially sourced. Types of costings that may apply to this healthcare service, such if the service may be available for free, some discounts available, or fees apply.
     */
    serviceProvisionCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty?: fhirModels.CodeableConcept[] | undefined;
    /**
     * If this is empty, then refer to the location's contacts.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * The specific type of service that may be delivered or performed.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for HealthcareService from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IHealthcareService>);
    /**
     * Factory function to create a HealthcareService from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IHealthcareService): HealthcareService;
    /**
     * Check if the current HealthcareService contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=HealthcareService.d.ts.map