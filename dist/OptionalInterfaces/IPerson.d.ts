import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Link to a resource that concerns the same actual person.
 */
export interface IPersonLink extends fhirInterfaces.IBackboneElement {
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: PersonLinkAssuranceEnum | undefined;
    _assurance?: fhirInterfaces.IElement | undefined;
    /**
     * The resource to which this actual person is associated.
     */
    target?: fhirInterfaces.IReference | undefined;
}
/**
 * Code Values for the Person.link.assurance field
 */
export declare enum PersonLinkAssuranceEnum {
    LEVEL1 = "level1",
    LEVEL2 = "level2",
    LEVEL3 = "level3",
    LEVEL4 = "level4"
}
/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export interface IPerson extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Person";
    /**
     * Whether this person's record is in active use.
     */
    active?: boolean | undefined;
    _active?: fhirInterfaces.IElement | undefined;
    /**
     * Person may have multiple addresses with different uses or applicable periods.
     */
    address?: fhirInterfaces.IAddress[] | undefined;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown.
     */
    birthDate?: string | undefined;
    _birthDate?: fhirInterfaces.IElement | undefined;
    /**
     * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
     */
    gender?: PersonGenderEnum | undefined;
    _gender?: fhirInterfaces.IElement | undefined;
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: fhirInterfaces.IPersonLink[] | undefined;
    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: fhirInterfaces.IReference | undefined;
    /**
     * Person may have multiple names with different uses or applicable periods.
     */
    name?: fhirInterfaces.IHumanName[] | undefined;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: fhirInterfaces.IAttachment | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
     */
    telecom?: fhirInterfaces.IContactPoint[] | undefined;
}
/**
 * Code Values for the Person.gender field
 */
export declare enum PersonGenderEnum {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IPerson.d.ts.map