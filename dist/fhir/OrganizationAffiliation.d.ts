import * as fhir from '../fhir.js';
import { OrganizationRoleValueSetType } from '../fhirValueSets/OrganizationRoleValueSet.js';
import { C80PracticeCodesValueSetType } from '../fhirValueSets/C80PracticeCodesValueSet.js';
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export declare type IOrganizationAffiliation = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "OrganizationAffiliation";
    /**
     * Business identifiers that are specific to this role.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: OrganizationAffiliation.active
     */
    _active?: fhir.IFhirElement | undefined;
    /**
     * The period during which the participatingOrganization is affiliated with the primary organization.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * Organization where the role is available (primary organization/has members).
     */
    organization?: fhir.IReference | undefined;
    /**
     * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
     */
    participatingOrganization?: fhir.IReference | undefined;
    /**
     * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
     */
    network?: fhir.IReference[] | undefined;
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code?: fhir.ICodeableConcept[] | undefined;
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty?: fhir.ICodeableConcept[] | undefined;
    /**
     * The location(s) at which the role occurs.
     */
    location?: fhir.IReference[] | undefined;
    /**
     * Healthcare services provided through the role.
     */
    healthcareService?: fhir.IReference[] | undefined;
    /**
     * Contact details at the participatingOrganization relevant to this Affiliation.
     */
    telecom?: fhir.IContactPoint[] | undefined;
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint?: fhir.IReference[] | undefined;
};
/**
 * Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.
 */
export declare class OrganizationAffiliation extends fhir.DomainResource implements IOrganizationAffiliation {
    /**
     * Resource Type Name
     */
    resourceType: "OrganizationAffiliation";
    /**
     * Business identifiers that are specific to this role.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * If this value is false, you may refer to the period to see when the role was in active use. If there is no period specified, no inference can be made about when it was active.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: OrganizationAffiliation.active
     */
    _active?: fhir.FhirElement | undefined;
    /**
     * The period during which the participatingOrganization is affiliated with the primary organization.
     */
    period?: fhir.Period | undefined;
    /**
     * Organization where the role is available (primary organization/has members).
     */
    organization?: fhir.Reference | undefined;
    /**
     * The Participating Organization provides/performs the role(s) defined by the code to the Primary Organization (e.g. providing services or is a member of).
     */
    participatingOrganization?: fhir.Reference | undefined;
    /**
     * Health insurance provider network in which the participatingOrganization provides the role's services (if defined) at the indicated locations (if defined).
     */
    network?: fhir.Reference[] | undefined;
    /**
     * Definition of the role the participatingOrganization plays in the association.
     */
    code?: fhir.CodeableConcept[] | undefined;
    /**
     * Specific specialty of the participatingOrganization in the context of the role.
     */
    specialty?: fhir.CodeableConcept[] | undefined;
    /**
     * The location(s) at which the role occurs.
     */
    location?: fhir.Reference[] | undefined;
    /**
     * Healthcare services provided through the role.
     */
    healthcareService?: fhir.Reference[] | undefined;
    /**
     * Contact details at the participatingOrganization relevant to this Affiliation.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Technical endpoints providing access to services operated for this role.
     */
    endpoint?: fhir.Reference[] | undefined;
    /**
     * Default constructor for OrganizationAffiliation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IOrganizationAffiliation>);
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet(): OrganizationRoleValueSetType;
    /**
     * Preferred-bound Value Set for specialty
     */
    specialtyPreferredValueSet(): C80PracticeCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=OrganizationAffiliation.d.ts.map