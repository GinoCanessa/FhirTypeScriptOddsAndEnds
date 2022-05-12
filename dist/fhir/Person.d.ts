import * as fhir from '../fhir.js';
import { IdentityAssuranceLevelValueSetType } from '../fhirValueSets/IdentityAssuranceLevelValueSet.js';
import { IdentityAssuranceLevelValueSetEnum } from '../valueSetEnums.js';
import { AdministrativeGenderValueSetType } from '../fhirValueSets/AdministrativeGenderValueSet.js';
import { AdministrativeGenderValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the PersonLink type.
 */
export interface PersonLinkArgs extends fhir.BackboneElementArgs {
    /**
     * The resource to which this actual person is associated.
     */
    target: fhir.ReferenceArgs | null;
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: IdentityAssuranceLevelValueSetEnum | undefined;
}
/**
 * Link to a resource that concerns the same actual person.
 */
export declare class PersonLink extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The resource to which this actual person is associated.
     */
    target: fhir.Reference | null;
    /**
     * Level of assurance that this link is associated with the target resource.
     */
    assurance?: IdentityAssuranceLevelValueSetEnum | undefined;
    /**
     * Default constructor for PersonLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PersonLinkArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for assurance
     */
    static assuranceRequiredValueSet(): IdentityAssuranceLevelValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the Person type.
 */
export interface PersonArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Person" | undefined;
    /**
     * Identifier for a person within a particular scope.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Person may have multiple names with different uses or applicable periods.
     */
    name?: fhir.HumanNameArgs[] | undefined;
    /**
     * Person may have multiple ways to be contacted with different uses or applicable periods.  May need to have options for contacting the person urgently and also to help with identification.
     */
    telecom?: fhir.ContactPointArgs[] | undefined;
    /**
     * The gender might not match the biological sex as determined by genetics, or the individual's preferred identification. Note that for both humans and particularly animals, there are other legitimate possibilities than M and F, though a clear majority of systems and contexts only support M and F.
     */
    gender?: AdministrativeGenderValueSetEnum | undefined;
    /**
     * At least an estimated year should be provided as a guess if the real DOB is unknown.
     */
    birthDate?: fhir.FhirDate | string | undefined;
    /**
     * Person may have multiple addresses with different uses or applicable periods.
     */
    address?: fhir.AddressArgs[] | undefined;
    /**
     * An image that can be displayed as a thumbnail of the person to enhance the identification of the individual.
     */
    photo?: fhir.AttachmentArgs | undefined;
    /**
     * The organization that is the custodian of the person record.
     */
    managingOrganization?: fhir.ReferenceArgs | undefined;
    /**
     * Whether this person's record is in active use.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: fhir.PersonLinkArgs[] | undefined;
}
/**
 * Demographics and administrative information about a person independent of a specific health-related context.
 */
export declare class Person extends fhir.DomainResource {
    readonly __dataType: string;
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
     * At least an estimated year should be provided as a guess if the real DOB is unknown.
     */
    birthDate?: fhir.FhirDate | undefined;
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
    active?: fhir.FhirBoolean | undefined;
    /**
     * Link to a resource that concerns the same actual person.
     */
    link?: fhir.PersonLink[] | undefined;
    /**
     * Default constructor for Person - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PersonArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for gender
     */
    static genderRequiredValueSet(): AdministrativeGenderValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=Person.d.ts.map