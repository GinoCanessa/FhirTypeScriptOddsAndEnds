import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Link to a resource that concerns the same actual person.
 */
export declare class PersonLink extends fhirModels.BackboneElement implements fhirInterfaces.IPersonLink {
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: PersonLinkAssuranceEnum | undefined;
    _assurance?: fhirModels.Element | undefined;
    /**
     * The resource to which this actual person is associated.
     */
    target?: fhirModels.Reference | undefined;
    /**
     * Default constructor for PersonLink from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPersonLink>);
    /**
     * Factory function to create a PersonLink from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPersonLink): PersonLink;
    /**
     * Check if the current PersonLink contains all required elements.
     */
    checkRequiredElements(): string[];
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
export declare class Person extends fhirModels.DomainResource implements fhirInterfaces.IPerson {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Person";
    /**
     * Whether this person's record is in active use.
     */
    active?: boolean | undefined;
    _active?: fhirModels.Element | undefined;
    /**
     * Person may have multiple addresses with different uses or applicable periods.
     */
    address?: fhirModels.Address[] | undefined;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown.
     */
    birthDate?: string | undefined;
    _birthDate?: fhirModels.Element | undefined;
    /**
     * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
     */
    gender?: PersonGenderEnum | undefined;
    _gender?: fhirModels.Element | undefined;
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: fhirModels.PersonLink[] | undefined;
    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: fhirModels.Reference | undefined;
    /**
     * Person may have multiple names with different uses or applicable periods.
     */
    name?: fhirModels.HumanName[] | undefined;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: fhirModels.Attachment | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Default constructor for Person from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IPerson>);
    /**
     * Factory function to create a Person from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IPerson): Person;
    /**
     * Check if the current Person contains all required elements.
     */
    checkRequiredElements(): string[];
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