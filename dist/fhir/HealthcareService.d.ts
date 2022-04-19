import * as fhir from '../fhir';
/**
 * Does this service have specific eligibility requirements that need to be met in order to use the service?
 */
export declare type IHealthcareServiceEligibility = fhir.IBackboneElement & {
    /**
     * Coded value for the eligibility.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * The description of service eligibility should, in general, not exceed one or two paragraphs. It should be sufficient for a prospective consumer to determine if they are likely to be eligible or not. Where eligibility requirements and conditions are complex, it may simply be noted that an eligibility assessment is required. Where eligibility is determined by an outside source, such as an Act of Parliament, this should be noted, preferably with a reference to a commonly available copy of the source document such as a web page.
     */
    comment?: string | undefined;
    _comment?: fhir.IFhirElement | undefined;
};
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export declare type IHealthcareServiceAvailableTime = fhir.IBackboneElement & {
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    _allDay?: fhir.IFhirElement | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    _availableEndTime?: fhir.IFhirElement | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    _availableStartTime?: fhir.IFhirElement | undefined;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: HealthcareServiceAvailableTimeDaysOfWeekEnum[] | undefined;
    _daysOfWeek?: fhir.IFhirElement[] | undefined;
};
/**
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
export declare type IHealthcareServiceNotAvailable = fhir.IBackboneElement & {
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
 * The details of a healthcare service available at a location.
 */
export declare type IHealthcareService = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "HealthcareService";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhir.IFhirElement | undefined;
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */
    appointmentRequired?: boolean | undefined;
    _appointmentRequired?: fhir.IFhirElement | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    _availabilityExceptions?: fhir.IFhirElement | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhir.IHealthcareServiceAvailableTime[] | undefined;
    /**
     * Selecting a Service Category then determines the list of relevant service types that can be selected in the primary service type.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * These could be such things as is wheelchair accessible.
     */
    characteristic?: fhir.ICodeableConcept[] | undefined;
    /**
     * Would expect that a user would not see this information on a search results, and it would only be available when viewing the complete details of the service.
     */
    comment?: string | undefined;
    _comment?: fhir.IFhirElement | undefined;
    /**
     * When using this property it indicates that the service is available with this language, it is not derived from the practitioners, and not all are required to use this language, just that this language is available while scheduling.
     */
    communication?: fhir.ICodeableConcept[] | undefined;
    /**
     * The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual domains too (mode = kind), such as a physical area (tri-state area) and some other attribute (covered by Example Care Organization). These types of Locations are often not managed by any specific organization. This could also include generic locations such as "in-home".
     */
    coverageArea?: fhir.IReference[] | undefined;
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility?: fhir.IHealthcareServiceEligibility[] | undefined;
    /**
     * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
     */
    endpoint?: fhir.IReference[] | undefined;
    /**
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: string | undefined;
    _extraDetails?: fhir.IFhirElement | undefined;
    /**
     * External identifiers for this item.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The location(s) where this healthcare service may be provided.
     */
    location?: fhir.IReference[] | undefined;
    /**
     * Further description of the service as it would be presented to a consumer while searching.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * The HealthcareService is not available during this period of time due to the provided reason.
     */
    notAvailable?: fhir.IHealthcareServiceNotAvailable[] | undefined;
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */
    photo?: fhir.IAttachment | undefined;
    /**
     * Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs, Homeless Program, ….
     */
    program?: fhir.ICodeableConcept[] | undefined;
    /**
     * This property is recommended to be the same as the Location's managingOrganization, and if not provided should be interpreted as such. If the Location does not have a managing Organization, then this property should be populated.
     */
    providedBy?: fhir.IReference | undefined;
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod?: fhir.ICodeableConcept[] | undefined;
    /**
     * The provision means being commissioned by, contractually obliged or financially sourced. Types of costings that may apply to this healthcare service, such if the service may be available for free, some discounts available, or fees apply.
     */
    serviceProvisionCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty?: fhir.ICodeableConcept[] | undefined;
    /**
     * If this is empty, then refer to the location's contacts.
     */
    telecom?: fhir.IContactPoint[] | undefined;
    /**
     * The specific type of service that may be delivered or performed.
     */
    type?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Does this service have specific eligibility requirements that need to be met in order to use the service?
 */
export declare class HealthcareServiceEligibility extends fhir.BackboneElement implements fhir.IHealthcareServiceEligibility {
    /**
     * Coded value for the eligibility.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The description of service eligibility should, in general, not exceed one or two paragraphs. It should be sufficient for a prospective consumer to determine if they are likely to be eligible or not. Where eligibility requirements and conditions are complex, it may simply be noted that an eligibility assessment is required. Where eligibility is determined by an outside source, such as an Act of Parliament, this should be noted, preferably with a reference to a commonly available copy of the source document such as a web page.
     */
    comment?: string | undefined;
    _comment?: fhir.FhirElement | undefined;
    /**
     * Default constructor for HealthcareServiceEligibility - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IHealthcareServiceEligibility>);
    /**
     * Check if the current HealthcareServiceEligibility contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a HealthcareServiceEligibility from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IHealthcareServiceEligibility): HealthcareServiceEligibility;
}
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export declare class HealthcareServiceAvailableTime extends fhir.BackboneElement implements fhir.IHealthcareServiceAvailableTime {
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    _allDay?: fhir.FhirElement | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    _availableEndTime?: fhir.FhirElement | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    _availableStartTime?: fhir.FhirElement | undefined;
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: HealthcareServiceAvailableTimeDaysOfWeekEnum[] | undefined;
    _daysOfWeek?: fhir.FhirElement[] | undefined;
    /**
     * Default constructor for HealthcareServiceAvailableTime - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IHealthcareServiceAvailableTime>);
    /**
     * Check if the current HealthcareServiceAvailableTime contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a HealthcareServiceAvailableTime from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IHealthcareServiceAvailableTime): HealthcareServiceAvailableTime;
}
/**
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
export declare class HealthcareServiceNotAvailable extends fhir.BackboneElement implements fhir.IHealthcareServiceNotAvailable {
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
     * Default constructor for HealthcareServiceNotAvailable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IHealthcareServiceNotAvailable>);
    /**
     * Check if the current HealthcareServiceNotAvailable contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a HealthcareServiceNotAvailable from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IHealthcareServiceNotAvailable): HealthcareServiceNotAvailable;
}
/**
 * The details of a healthcare service available at a location.
 */
export declare class HealthcareService extends fhir.DomainResource implements fhir.IHealthcareService {
    /**
     * Resource Type Name
     */
    resourceType: "HealthcareService";
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhir.FhirElement | undefined;
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */
    appointmentRequired?: boolean | undefined;
    _appointmentRequired?: fhir.FhirElement | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    _availabilityExceptions?: fhir.FhirElement | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhir.HealthcareServiceAvailableTime[] | undefined;
    /**
     * Selecting a Service Category then determines the list of relevant service types that can be selected in the primary service type.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * These could be such things as is wheelchair accessible.
     */
    characteristic?: fhir.CodeableConcept[] | undefined;
    /**
     * Would expect that a user would not see this information on a search results, and it would only be available when viewing the complete details of the service.
     */
    comment?: string | undefined;
    _comment?: fhir.FhirElement | undefined;
    /**
     * When using this property it indicates that the service is available with this language, it is not derived from the practitioners, and not all are required to use this language, just that this language is available while scheduling.
     */
    communication?: fhir.CodeableConcept[] | undefined;
    /**
     * The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual domains too (mode = kind), such as a physical area (tri-state area) and some other attribute (covered by Example Care Organization). These types of Locations are often not managed by any specific organization. This could also include generic locations such as "in-home".
     */
    coverageArea?: fhir.Reference[] | undefined;
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility?: fhir.HealthcareServiceEligibility[] | undefined;
    /**
     * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: string | undefined;
    _extraDetails?: fhir.FhirElement | undefined;
    /**
     * External identifiers for this item.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The location(s) where this healthcare service may be provided.
     */
    location?: fhir.Reference[] | undefined;
    /**
     * Further description of the service as it would be presented to a consumer while searching.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * The HealthcareService is not available during this period of time due to the provided reason.
     */
    notAvailable?: fhir.HealthcareServiceNotAvailable[] | undefined;
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */
    photo?: fhir.Attachment | undefined;
    /**
     * Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs, Homeless Program, ….
     */
    program?: fhir.CodeableConcept[] | undefined;
    /**
     * This property is recommended to be the same as the Location's managingOrganization, and if not provided should be interpreted as such. If the Location does not have a managing Organization, then this property should be populated.
     */
    providedBy?: fhir.Reference | undefined;
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod?: fhir.CodeableConcept[] | undefined;
    /**
     * The provision means being commissioned by, contractually obliged or financially sourced. Types of costings that may apply to this healthcare service, such if the service may be available for free, some discounts available, or fees apply.
     */
    serviceProvisionCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty?: fhir.CodeableConcept[] | undefined;
    /**
     * If this is empty, then refer to the location's contacts.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * The specific type of service that may be delivered or performed.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for HealthcareService - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IHealthcareService>);
    /**
     * Check if the current HealthcareService contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a HealthcareService from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IHealthcareService): HealthcareService;
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
//# sourceMappingURL=HealthcareService.d.ts.map