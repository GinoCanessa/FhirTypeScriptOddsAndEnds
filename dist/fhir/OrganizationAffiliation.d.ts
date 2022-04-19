import * as fhir from '../fhir';
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export declare type IOrganizationAffiliation = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "OrganizationAffiliation";
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    _active?: fhir.IFhirElement | undefined;
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint?: fhir.IReference[] | undefined;
    /**
     * Healthcare services provided through the role.
     */
    healthcareService?: fhir.IReference[] | undefined;
    /**
     * Business identifiers that are specific to this role.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The location(s) at which the role occurs.
     */
    location?: fhir.IReference[] | undefined;
    /**
     * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
     */
    network?: fhir.IReference[] | undefined;
    /**
     * Organization where the role is available (primary organization/has members).
     */
    organization?: fhir.IReference | undefined;
    /**
     * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
     */
    participatingOrganization?: fhir.IReference | undefined;
    /**
     * The period during which the participatingOrganization is affiliated with the primary organization.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty?: fhir.ICodeableConcept[] | undefined;
    /**
     * Contact details at the participatingOrganization relevant to this Affiliation.
     */
    telecom?: fhir.IContactPoint[] | undefined;
};
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export declare class OrganizationAffiliation extends fhir.DomainResource implements fhir.IOrganizationAffiliation {
    /**
     * Resource Type Name
     */
    resourceType: "OrganizationAffiliation";
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    _active?: fhir.FhirElement | undefined;
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * Healthcare services provided through the role.
     */
    healthcareService?: fhir.Reference[] | undefined;
    /**
     * Business identifiers that are specific to this role.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The location(s) at which the role occurs.
     */
    location?: fhir.Reference[] | undefined;
    /**
     * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
     */
    network?: fhir.Reference[] | undefined;
    /**
     * Organization where the role is available (primary organization/has members).
     */
    organization?: fhir.Reference | undefined;
    /**
     * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
     */
    participatingOrganization?: fhir.Reference | undefined;
    /**
     * The period during which the participatingOrganization is affiliated with the primary organization.
     */
    period?: fhir.Period | undefined;
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty?: fhir.CodeableConcept[] | undefined;
    /**
     * Contact details at the participatingOrganization relevant to this Affiliation.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Default constructor for OrganizationAffiliation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IOrganizationAffiliation>);
    /**
     * Check if the current OrganizationAffiliation contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a OrganizationAffiliation from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IOrganizationAffiliation): OrganizationAffiliation;
}
//# sourceMappingURL=OrganizationAffiliation.d.ts.map