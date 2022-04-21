import * as fhir from '../fhir.js';
import { DaysOfWeekValueSetType, DaysOfWeekValueSetEnum } from '../fhirValueSets/DaysOfWeekValueSet.js';
import { ServiceCategoryValueSetType } from '../fhirValueSets/ServiceCategoryValueSet.js';
import { ServiceTypeValueSetType } from '../fhirValueSets/ServiceTypeValueSet.js';
import { C80PracticeCodesValueSetType } from '../fhirValueSets/C80PracticeCodesValueSet.js';
import { ServiceProvisionConditionsValueSetType } from '../fhirValueSets/ServiceProvisionConditionsValueSet.js';
import { ProgramValueSetType } from '../fhirValueSets/ProgramValueSet.js';
import { LanguagesValueSetType } from '../fhirValueSets/LanguagesValueSet.js';
import { ServiceReferralMethodValueSetType } from '../fhirValueSets/ServiceReferralMethodValueSet.js';
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
    /**
     * Extended properties for primitive element: HealthcareService.eligibility.comment
     */
    _comment?: fhir.IFhirElement | undefined;
};
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export declare type IHealthcareServiceAvailableTime = fhir.IBackboneElement & {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: DaysOfWeekValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.daysOfWeek
     */
    _daysOfWeek?: fhir.IFhirElement[] | undefined;
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.allDay
     */
    _allDay?: fhir.IFhirElement | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.availableStartTime
     */
    _availableStartTime?: fhir.IFhirElement | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.availableEndTime
     */
    _availableEndTime?: fhir.IFhirElement | undefined;
};
/**
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
export declare type IHealthcareServiceNotAvailable = fhir.IBackboneElement & {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: HealthcareService.notAvailable.description
     */
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
     * External identifiers for this item.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.active
     */
    _active?: fhir.IFhirElement | undefined;
    /**
     * This property is recommended to be the same as the Location's managingOrganization, and if not provided should be interpreted as such. If the Location does not have a managing Organization, then this property should be populated.
     */
    providedBy?: fhir.IReference | undefined;
    /**
     * Selecting a Service Category then determines the list of relevant service types that can be selected in the primary service type.
     */
    category?: fhir.ICodeableConcept[] | undefined;
    /**
     * The specific type of service that may be delivered or performed.
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty?: fhir.ICodeableConcept[] | undefined;
    /**
     * The location(s) where this healthcare service may be provided.
     */
    location?: fhir.IReference[] | undefined;
    /**
     * Further description of the service as it would be presented to a consumer while searching.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.name
     */
    _name?: fhir.IFhirElement | undefined;
    /**
     * Would expect that a user would not see this information on a search results, and it would only be available when viewing the complete details of the service.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.comment
     */
    _comment?: fhir.IFhirElement | undefined;
    /**
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.extraDetails
     */
    _extraDetails?: fhir.IFhirElement | undefined;
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */
    photo?: fhir.IAttachment | undefined;
    /**
     * If this is empty, then refer to the location's contacts.
     */
    telecom?: fhir.IContactPoint[] | undefined;
    /**
     * The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual domains too (mode = kind), such as a physical area (tri-state area) and some other attribute (covered by Example Care Organization). These types of Locations are often not managed by any specific organization. This could also include generic locations such as "in-home".
     */
    coverageArea?: fhir.IReference[] | undefined;
    /**
     * The provision means being commissioned by, contractually obliged or financially sourced. Types of costings that may apply to this healthcare service, such if the service may be available for free, some discounts available, or fees apply.
     */
    serviceProvisionCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility?: fhir.IHealthcareServiceEligibility[] | undefined;
    /**
     * Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs, Homeless Program, ….
     */
    program?: fhir.ICodeableConcept[] | undefined;
    /**
     * These could be such things as is wheelchair accessible.
     */
    characteristic?: fhir.ICodeableConcept[] | undefined;
    /**
     * When using this property it indicates that the service is available with this language, it is not derived from the practitioners, and not all are required to use this language, just that this language is available while scheduling.
     */
    communication?: fhir.ICodeableConcept[] | undefined;
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */
    appointmentRequired?: boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.appointmentRequired
     */
    _appointmentRequired?: fhir.IFhirElement | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhir.IHealthcareServiceAvailableTime[] | undefined;
    /**
     * The HealthcareService is not available during this period of time due to the provided reason.
     */
    notAvailable?: fhir.IHealthcareServiceNotAvailable[] | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availabilityExceptions
     */
    _availabilityExceptions?: fhir.IFhirElement | undefined;
    /**
     * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
     */
    endpoint?: fhir.IReference[] | undefined;
};
/**
 * Does this service have specific eligibility requirements that need to be met in order to use the service?
 */
export declare class HealthcareServiceEligibility extends fhir.BackboneElement implements IHealthcareServiceEligibility {
    /**
     * Coded value for the eligibility.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The description of service eligibility should, in general, not exceed one or two paragraphs. It should be sufficient for a prospective consumer to determine if they are likely to be eligible or not. Where eligibility requirements and conditions are complex, it may simply be noted that an eligibility assessment is required. Where eligibility is determined by an outside source, such as an Act of Parliament, this should be noted, preferably with a reference to a commonly available copy of the source document such as a web page.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.eligibility.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * Default constructor for HealthcareServiceEligibility - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IHealthcareServiceEligibility>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * More detailed availability information may be provided in associated Schedule/Slot resources.
 */
export declare class HealthcareServiceAvailableTime extends fhir.BackboneElement implements IHealthcareServiceAvailableTime {
    /**
     * Indicates which days of the week are available between the start and end Times.
     */
    daysOfWeek?: DaysOfWeekValueSetEnum[] | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.daysOfWeek
     */
    _daysOfWeek?: fhir.FhirElement[] | undefined;
    /**
     * Is this always available? (hence times are irrelevant) e.g. 24 hour service.
     */
    allDay?: boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.allDay
     */
    _allDay?: fhir.FhirElement | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableStartTime?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.availableStartTime
     */
    _availableStartTime?: fhir.FhirElement | undefined;
    /**
     * The time zone is expected to be for where this HealthcareService is provided at.
     */
    availableEndTime?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availableTime.availableEndTime
     */
    _availableEndTime?: fhir.FhirElement | undefined;
    /**
     * Default constructor for HealthcareServiceAvailableTime - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IHealthcareServiceAvailableTime>);
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
 * The HealthcareService is not available during this period of time due to the provided reason.
 */
export declare class HealthcareServiceNotAvailable extends fhir.BackboneElement implements IHealthcareServiceNotAvailable {
    /**
     * The reason that can be presented to the user as to why this time is not available.
     */
    description: string | null;
    /**
     * Extended properties for primitive element: HealthcareService.notAvailable.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * Service is not available (seasonally or for a public holiday) from this date.
     */
    during?: fhir.Period | undefined;
    /**
     * Default constructor for HealthcareServiceNotAvailable - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IHealthcareServiceNotAvailable>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The details of a healthcare service available at a location.
 */
export declare class HealthcareService extends fhir.DomainResource implements IHealthcareService {
    /**
     * Resource Type Name
     */
    resourceType: "HealthcareService";
    /**
     * External identifiers for this item.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.active
     */
    _active?: fhir.FhirElement | undefined;
    /**
     * This property is recommended to be the same as the Location's managingOrganization, and if not provided should be interpreted as such. If the Location does not have a managing Organization, then this property should be populated.
     */
    providedBy?: fhir.Reference | undefined;
    /**
     * Selecting a Service Category then determines the list of relevant service types that can be selected in the primary service type.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * The specific type of service that may be delivered or performed.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Collection of specialties handled by the service site. This is more of a medical term.
     */
    specialty?: fhir.CodeableConcept[] | undefined;
    /**
     * The location(s) where this healthcare service may be provided.
     */
    location?: fhir.Reference[] | undefined;
    /**
     * Further description of the service as it would be presented to a consumer while searching.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.name
     */
    _name?: fhir.FhirElement | undefined;
    /**
     * Would expect that a user would not see this information on a search results, and it would only be available when viewing the complete details of the service.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.comment
     */
    _comment?: fhir.FhirElement | undefined;
    /**
     * Extra details about the service that can't be placed in the other fields.
     */
    extraDetails?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.extraDetails
     */
    _extraDetails?: fhir.FhirElement | undefined;
    /**
     * If there is a photo/symbol associated with this HealthcareService, it may be included here to facilitate quick identification of the service in a list.
     */
    photo?: fhir.Attachment | undefined;
    /**
     * If this is empty, then refer to the location's contacts.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * The locations referenced by the coverage area can include both specific locations, including areas, and also conceptual domains too (mode = kind), such as a physical area (tri-state area) and some other attribute (covered by Example Care Organization). These types of Locations are often not managed by any specific organization. This could also include generic locations such as "in-home".
     */
    coverageArea?: fhir.Reference[] | undefined;
    /**
     * The provision means being commissioned by, contractually obliged or financially sourced. Types of costings that may apply to this healthcare service, such if the service may be available for free, some discounts available, or fees apply.
     */
    serviceProvisionCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Does this service have specific eligibility requirements that need to be met in order to use the service?
     */
    eligibility?: fhir.HealthcareServiceEligibility[] | undefined;
    /**
     * Programs are often defined externally to an Organization, commonly by governments; e.g. Home and Community Care Programs, Homeless Program, ….
     */
    program?: fhir.CodeableConcept[] | undefined;
    /**
     * These could be such things as is wheelchair accessible.
     */
    characteristic?: fhir.CodeableConcept[] | undefined;
    /**
     * When using this property it indicates that the service is available with this language, it is not derived from the practitioners, and not all are required to use this language, just that this language is available while scheduling.
     */
    communication?: fhir.CodeableConcept[] | undefined;
    /**
     * Ways that the service accepts referrals, if this is not provided then it is implied that no referral is required.
     */
    referralMethod?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates whether or not a prospective consumer will require an appointment for a particular service at a site to be provided by the Organization. Indicates if an appointment is required for access to this service.
     */
    appointmentRequired?: boolean | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.appointmentRequired
     */
    _appointmentRequired?: fhir.FhirElement | undefined;
    /**
     * More detailed availability information may be provided in associated Schedule/Slot resources.
     */
    availableTime?: fhir.HealthcareServiceAvailableTime[] | undefined;
    /**
     * The HealthcareService is not available during this period of time due to the provided reason.
     */
    notAvailable?: fhir.HealthcareServiceNotAvailable[] | undefined;
    /**
     * A description of site availability exceptions, e.g. public holiday availability. Succinctly describing all possible exceptions to normal site availability as details in the available Times and not available Times.
     */
    availabilityExceptions?: string | undefined;
    /**
     * Extended properties for primitive element: HealthcareService.availabilityExceptions
     */
    _availabilityExceptions?: fhir.FhirElement | undefined;
    /**
     * Technical endpoints providing access to services operated for the specific healthcare services defined at this resource.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * Default constructor for HealthcareService - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IHealthcareService>);
    /**
     * Example-bound Value Set for category
     */
    categoryExampleValueSet(): ServiceCategoryValueSetType;
    /**
     * Example-bound Value Set for type
     */
    typeExampleValueSet(): ServiceTypeValueSetType;
    /**
     * Preferred-bound Value Set for specialty
     */
    specialtyPreferredValueSet(): C80PracticeCodesValueSetType;
    /**
     * Example-bound Value Set for serviceProvisionCode
     */
    serviceProvisionCodeExampleValueSet(): ServiceProvisionConditionsValueSetType;
    /**
     * Example-bound Value Set for program
     */
    programExampleValueSet(): ProgramValueSetType;
    /**
     * Preferred-bound Value Set for communication
     */
    communicationPreferredValueSet(): LanguagesValueSetType;
    /**
     * Example-bound Value Set for referralMethod
     */
    referralMethodExampleValueSet(): ServiceReferralMethodValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=HealthcareService.d.ts.map