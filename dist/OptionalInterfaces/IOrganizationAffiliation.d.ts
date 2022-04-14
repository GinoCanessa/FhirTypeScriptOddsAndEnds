import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export interface IOrganizationAffiliation extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "OrganizationAffiliation";
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    _active?: fhirInterfaces.IElement | undefined;
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint?: fhirInterfaces.IReference[] | undefined;
    /**
     * Healthcare services provided through the role.
     */
    healthcareService?: fhirInterfaces.IReference[] | undefined;
    /**
     * Business identifiers that are specific to this role.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The location(s) at which the role occurs.
     */
    location?: fhirInterfaces.IReference[] | undefined;
    /**
     * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
     */
    network?: fhirInterfaces.IReference[] | undefined;
    /**
     * Organization where the role is available (primary organization/has members).
     */
    organization?: fhirInterfaces.IReference | undefined;
    /**
     * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
     */
    participatingOrganization?: fhirInterfaces.IReference | undefined;
    /**
     * The period during which the participatingOrganization is affiliated with the primary organization.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Contact details at the participatingOrganization relevant to this Affiliation.
     */
    telecom?: fhirInterfaces.IContactPoint[] | undefined;
}
//# sourceMappingURL=IOrganizationAffiliation.d.ts.map