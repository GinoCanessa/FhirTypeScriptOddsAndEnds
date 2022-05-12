import * as fhir from '../fhirJson.js';
/**
 * Link to a resource that concerns the same actual person.
 */
export interface PersonLink extends fhir.BackboneElement {
    /**
     * The resource to which this actual person is associated.
     */
    target: fhir.Reference | null;
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: 'level1' | 'level2' | 'level3' | 'level4' | undefined;
}
/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export interface Person extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Person";
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Person may have multiple names with different uses or applicable periods.
     */
    name?: fhir.HumanName[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
     */
    gender?: 'female' | 'male' | 'other' | 'unknown' | undefined;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: Person.birthDate
     */
    _birthDate?: fhir.FhirElement;
    /**
     * Person may have multiple addresses with different uses or applicable periods.
     */
    address?: fhir.Address[] | undefined;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: fhir.Attachment | undefined;
    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * Whether this person's record is in active use.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Person.active
     */
    _active?: fhir.FhirElement;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: fhir.PersonLink[] | undefined;
}
//# sourceMappingURL=Person.d.ts.map