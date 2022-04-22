import * as fhir from '../fhir.js';
import { IdentityAssuranceLevelValueSetType, IdentityAssuranceLevelValueSetEnum } from '../fhirValueSets/IdentityAssuranceLevelValueSet.js';
import { AdministrativeGenderValueSetType, AdministrativeGenderValueSetEnum } from '../fhirValueSets/AdministrativeGenderValueSet.js';
/**
 * Link to a resource that concerns the same actual person.
 */
export declare type IPersonLink = fhir.IBackboneElement & {
    /**
     * The resource to which this actual person is associated.
     */
    target: fhir.IReference | null;
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: IdentityAssuranceLevelValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Person.link.assurance
     */
    _assurance?: fhir.IFhirElement | undefined;
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
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Person may have multiple names with different uses or applicable periods.
     */
    name?: fhir.IHumanName[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
     */
    telecom?: fhir.IContactPoint[] | undefined;
    /**
     * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
     */
    gender?: AdministrativeGenderValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Person.gender
     */
    _gender?: fhir.IFhirElement | undefined;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: Person.birthDate
     */
    _birthDate?: fhir.IFhirElement | undefined;
    /**
     * Person may have multiple addresses with different uses or applicable periods.
     */
    address?: fhir.IAddress[] | undefined;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: fhir.IAttachment | undefined;
    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: fhir.IReference | undefined;
    /**
     * Whether this person's record is in active use.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Person.active
     */
    _active?: fhir.IFhirElement | undefined;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: fhir.IPersonLink[] | undefined;
};
/**
 * Link to a resource that concerns the same actual person.
 */
export declare class PersonLink extends fhir.BackboneElement implements IPersonLink {
    /**
     * The resource to which this actual person is associated.
     */
    target: fhir.Reference | null;
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: IdentityAssuranceLevelValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Person.link.assurance
     */
    _assurance?: fhir.FhirElement | undefined;
    /**
     * Default constructor for PersonLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPersonLink>);
    /**
     * Required-bound Value Set for assurance
     */
    static assuranceRequiredValueSet(): IdentityAssuranceLevelValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export declare class Person extends fhir.DomainResource implements IPerson {
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
    gender?: AdministrativeGenderValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Person.gender
     */
    _gender?: fhir.FhirElement | undefined;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown.
     */
    birthDate?: string | undefined;
    /**
     * Extended properties for primitive element: Person.birthDate
     */
    _birthDate?: fhir.FhirElement | undefined;
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
    _active?: fhir.FhirElement | undefined;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: fhir.PersonLink[] | undefined;
    /**
     * Default constructor for Person - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IPerson>);
    /**
     * Required-bound Value Set for gender
     */
    static genderRequiredValueSet(): AdministrativeGenderValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Person.d.ts.map