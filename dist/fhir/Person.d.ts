import * as fhir from '../fhir';
/**
 * Link to a resource that concerns the same actual person.
 */
export declare type IPersonLink = fhir.IBackboneElement & {
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: PersonLinkAssuranceEnum | undefined;
    _assurance?: fhir.IFhirElement | undefined;
    /**
     * The resource to which this actual person is associated.
     */
    target: fhir.IReference | null;
};
/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export declare type IPerson = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Person";
    /**
     * Whether this person's record is in active use.
     */
    active?: boolean | undefined;
    _active?: fhir.IFhirElement | undefined;
    /**
     * Person may have multiple addresses with different uses or applicable periods.
     */
    address?: fhir.IAddress[] | undefined;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown.
     */
    birthDate?: string | undefined;
    _birthDate?: fhir.IFhirElement | undefined;
    /**
     * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
     */
    gender?: PersonGenderEnum | undefined;
    _gender?: fhir.IFhirElement | undefined;
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: fhir.IPersonLink[] | undefined;
    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: fhir.IReference | undefined;
    /**
     * Person may have multiple names with different uses or applicable periods.
     */
    name?: fhir.IHumanName[] | undefined;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: fhir.IAttachment | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
     */
    telecom?: fhir.IContactPoint[] | undefined;
};
/**
 * Link to a resource that concerns the same actual person.
 */
export declare class PersonLink extends fhir.BackboneElement implements fhir.IPersonLink {
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: PersonLinkAssuranceEnum | undefined;
    _assurance?: fhir.FhirElement | undefined;
    /**
     * The resource to which this actual person is associated.
     */
    target: fhir.Reference | null;
    /**
     * Default constructor for PersonLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPersonLink>);
    /**
     * Check if the current PersonLink contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a PersonLink from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IPersonLink): PersonLink;
}
/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export declare class Person extends fhir.DomainResource implements fhir.IPerson {
    /**
     * Resource Type Name
     */
    resourceType: "Person";
    /**
     * Whether this person's record is in active use.
     */
    active?: boolean | undefined;
    _active?: fhir.FhirElement | undefined;
    /**
     * Person may have multiple addresses with different uses or applicable periods.
     */
    address?: fhir.Address[] | undefined;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown.
     */
    birthDate?: string | undefined;
    _birthDate?: fhir.FhirElement | undefined;
    /**
     * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
     */
    gender?: PersonGenderEnum | undefined;
    _gender?: fhir.FhirElement | undefined;
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: fhir.PersonLink[] | undefined;
    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: fhir.Reference | undefined;
    /**
     * Person may have multiple names with different uses or applicable periods.
     */
    name?: fhir.HumanName[] | undefined;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: fhir.Attachment | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Default constructor for Person - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IPerson>);
    /**
     * Check if the current Person contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Person from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IPerson): Person;
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
 * Code Values for the Person.gender field
 */
export declare enum PersonGenderEnum {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=Person.d.ts.map