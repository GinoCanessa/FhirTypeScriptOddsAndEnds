import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Does this service have specific eligibility requirements that need to be met in order to use the service?
 */
export interface IHealthcareServiceEligibility extends fhirInterfaces.IBackboneElement {
    /**
     * Coded value for the eligibility.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The description of service eligibility should, in general, not exceed one or two paragraphs. It should be sufficient for a prospective consumer to determine if they are likely to be eligible or not. Where eligibility requirements and conditions are complex, it may simply be noted that an eligibility assessment is required. Where eligibility is determined by an outside source, such as an Act of Parliament, this should be noted, preferably with a reference to a commonly available copy of the source document such as a web page.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
}
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export interface IHealthcareServiceAvailableTime extends fhirInterfaces.IBackboneElement {
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    _allDay?: fhirInterfaces.IElement | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    _availableEndTime?: fhirInterfaces.IElement | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    _availableStartTime?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: HealthcareServiceAvailableTimeDaysOfWeekEnum[] | undefined;
    _daysOfWeek?: fhirInterfaces.IElement[] | undefined;
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
export interface IHealthcareServiceNotAvailable extends fhirInterfaces.IBackboneElement {
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
 * The details of a healthcare service available at a location.
 */
export interface IHealthcareService extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "HealthcareService";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */
    appointmentRequired?: boolean | undefined;
    _appointmentRequired?: fhirInterfaces.IElement | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    _availabilityExceptions?: fhirInterfaces.IElement | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhirInterfaces.IHealthcareServiceAvailableTime[] | undefined;
    /**
     * Selecting a Service Category then determines the list of relevant service types that can be selected in the primary service type.
     */
    category?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * These could be such things as is wheelchair accessible.
     */
    characteristic?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Would expect that a user would not see this information on a search results, and it would only be available when viewing the complete details of the service.
     */
    comment?: string | undefined;
    _comment?: fhirInterfaces.IElement | undefined;
    /**
     * When using this property it indicates that the service is available with this language, it is not derived from the practitioners, and not all are required to use this language, just that this language is available while scheduling.
     */
    communication?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual domains too (mode = kind), such as a physical area (tri-state area) and some other attribute (covered by Example Care Organization). These types of Locations are often not managed by any specific organization. This could also include generic locations such as "in-home".
     */
    coverageArea?: fhirInterfaces.IReference[] | undefined;
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility?: fhirInterfaces.IHealthcareServiceEligibility[] | undefined;
    /**
     * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
     */
    endpoint?: fhirInterfaces.IReference[] | undefined;
    /**
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: string | undefined;
    _extraDetails?: fhirInterfaces.IElement | undefined;
    /**
     * External identifiers for this item.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The location(s) where this healthcare service may be provided.
     */
    location?: fhirInterfaces.IReference[] | undefined;
    /**
     * Further description of the service as it would be presented to a consumer while searching.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * The HealthcareService is not available during this period of time due to the provided reason.
     */
    notAvailable?: fhirInterfaces.IHealthcareServiceNotAvailable[] | undefined;
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */
    photo?: fhirInterfaces.IAttachment | undefined;
    /**
     * Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs, Homeless Program, ….
     */
    program?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * This property is recommended to be the same as the Location's managingOrganization, and if not provided should be interpreted as such. If the Location does not have a managing Organization, then this property should be populated.
     */
    providedBy?: fhirInterfaces.IReference | undefined;
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The provision means being commissioned by, contractually obliged or financially sourced. Types of costings that may apply to this healthcare service, such if the service may be available for free, some discounts available, or fees apply.
     */
    serviceProvisionCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * If this is empty, then refer to the location's contacts.
     */
    telecom?: fhirInterfaces.IContactPoint[] | undefined;
    /**
     * The specific type of service that may be delivered or performed.
     */
    type?: fhirInterfaces.ICodeableConcept[] | undefined;
}
//# sourceMappingURL=IHealthcareService.d.ts.map