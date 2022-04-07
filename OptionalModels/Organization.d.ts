import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export declare class OrganizationContact extends fhirModels.BackboneElement implements fhirInterfaces.IOrganizationContact {
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: fhirModels.Address | undefined;
    /**
     * A name associated with the contact.
     */
    name?: fhirModels.HumanName | undefined;
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: fhirModels.CodeableConcept | undefined;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Default constructor for OrganizationContact from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IOrganizationContact>);
    /**
     * Factory function to create a OrganizationContact from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IOrganizationContact): OrganizationContact;
    /**
     * Check if the current OrganizationContact contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
export declare class Organization extends fhirModels.DomainResource implements fhirInterfaces.IOrganization {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Organization";
    /**
     * This active flag is not intended to be used to mark an organization as temporarily closed or under construction. Instead the Location(s) within the Organization should have the suspended status. If further details of the reason for the suspension are required, then an extension on this element should be used.
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    _active?: fhirModels.Element | undefined;
    /**
     * Organization may have multiple addresses with different uses or applicable periods. The use code 'home' is not to be used.
     */
    address?: fhirModels.Address[] | undefined;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
     */
    alias?: string[] | undefined;
    _alias?: fhirModels.Element[] | undefined;
    /**
     * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
     */
    contact?: fhirModels.OrganizationContact[] | undefined;
    /**
     * Technical endpoints providing access to services operated for the organization.
     */
    endpoint?: fhirModels.Reference[] | undefined;
    /**
     * Identifier for the organization that is used to identify the organization across multiple disparate systems.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * If the name of an organization changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * The organization of which this organization forms a part.
     */
    partOf?: fhirModels.Reference | undefined;
    /**
     * The use code 'home' is not to be used. Note that these contacts are not the contact details of people who are employed by or represent the organization, but official contacts for the organization itself.
     */
    telecom?: fhirModels.ContactPoint[] | undefined;
    /**
     * Organizations can be corporations, wards, sections, clinical teams, government departments, etc. Note that code is generally a classifier of the type of organization; in many applications, codes are used to identity a particular organization (say, ward) as opposed to another of the same type - these are identifiers, not codes
     * When considering if multiple types are appropriate, you should evaluate if child organizations would be a more appropriate use of the concept, as different types likely are in different sub-areas of the organization. This is most likely to be used where type values have orthogonal values, such as a religious, academic and medical center.
     * We expect that some jurisdictions will profile this optionality to be a single cardinality.
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Default constructor for Organization from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IOrganization>);
    /**
     * Factory function to create a Organization from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IOrganization): Organization;
    /**
     * Check if the current Organization contains all required elements.
     */
    checkRequiredElements(): string[];
}
//# sourceMappingURL=Organization.d.ts.map