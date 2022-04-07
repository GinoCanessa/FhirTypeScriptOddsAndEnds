import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export declare class OrganizationAffiliation extends fhirModels.DomainResource implements fhirInterfaces.IOrganizationAffiliation {
    /**
     * Resource Type Name
     */
    readonly resourceType = "OrganizationAffiliation";
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    _active?: fhirModels.Element | undefined;
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint?: fhirModels.Reference[] | undefined;
    /**
     * Healthcare services provided through the role.
     */
    healthcareService?: fhirModels.Reference[] | undefined;
    /**
     * Business identifiers that are specific to this role.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The location(s) at which the role occurs.
     */
    location?: fhirModels.Reference[] | undefined;
    /**
     * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
     */
    network?: fhirModels.Reference[] | undefined;
    /**
     * Organization where the role is available (primary organization/has members).
     */
    organization?: fhirModels.Reference | undefined;
    /**
     * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
     */
    participatingOrganization?: fhirModels.Reference | undefined;
    /**
     * The period during which the participatingOrganization is affiliated with the primary organization.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Contact details at the participatingOrganization relevant to this Affiliation.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Default constructor for OrganizationAffiliation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IOrganizationAffiliation>);
    /**
     * Factory function to create a OrganizationAffiliation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IOrganizationAffiliation): OrganizationAffiliation;
    /**
     * Check if the current OrganizationAffiliation contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=OrganizationAffiliation.d.ts.map