import * as fhir from '../fhirJson.js';
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export interface OrganizationContact extends fhir.BackboneElement {
    /**
     * Indicates a purpose for which the contact can be reached.
     */
    purpose?: fhir.CodeableConcept | undefined;
    /**
     * A name associated with the contact.
     */
    name?: fhir.HumanName | undefined;
    /**
     * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Visiting or postal addresses for the contact.
     */
    address?: fhir.Address | undefined;
}
/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
export interface Organization extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Organization";
    /**
     * Identifier for the organization that is used to identify the organization across multiple disparate systems.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This active flag is not intended to be used to mark an organization as temporarily closed or under construction. Instead the Location(s) within the Organization should have the suspended status. If further details of the reason for the suspension are required, then an extension on this element should be used.
     * This element is labeled as a modifier because it may be used to mark that the resource was created in error.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Organization.active
     */
    _active?: fhir.FhirElement;
    /**
     * Organizations can be corporations, wards, sections, clinical teams, government departments, etc. Note that code is generally a classifier of the type of organization; in many applications, codes are used to identity a particular organization (say, ward) as opposed to another of the same type - these are identifiers, not codes
     * When considering if multiple types are appropriate, you should evaluate if child organizations would be a more appropriate use of the concept, as different types likely are in different sub-areas of the organization. This is most likely to be used where type values have orthogonal values, such as a religious, academic and medical center.
     * We expect that some jurisdictions will profile this optionality to be a single cardinality.
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * If the name of an organization changes, consider putting the old name in the alias column so that it can still be located through searches.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Organization.name
     */
    _name?: fhir.FhirElement;
    /**
     * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
     */
    alias?: string[] | undefined;
    /**
     * Extended properties for primitive element: Organization.alias
     */
    _alias?: (fhir.FhirElement | null)[];
    /**
     * The use code 'home' is not to be used. Note that these contacts are not the contact details of people who are employed by or represent the organization, but official contacts for the organization itself.
     */
    telecom?: fhir.ContactPoint[] | undefined;
    /**
     * Organization may have multiple addresses with different uses or applicable periods. The use code 'home' is not to be used.
     */
    address?: fhir.Address[] | undefined;
    /**
     * The organization of which this organization forms a part.
     */
    partOf?: fhir.Reference | undefined;
    /**
     * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
     */
    contact?: fhir.OrganizationContact[] | undefined;
    /**
     * Technical endpoints providing access to services operated for the organization.
     */
    endpoint?: fhir.Reference[] | undefined;
}
//# sourceMappingURL=Organization.d.ts.map