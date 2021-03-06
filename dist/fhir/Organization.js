// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Organization
import * as fhir from '../fhir.js';
import { ContactentityTypeValueSet, } from '../fhirValueSets/ContactentityTypeValueSet.js';
import { OrganizationTypeValueSet, } from '../fhirValueSets/OrganizationTypeValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export class OrganizationContact extends fhir.BackboneElement {
    /**
     * Default constructor for OrganizationContact - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'OrganizationContact';
        /**
         * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
         */
        this.telecom = [];
        if (source['purpose']) {
            this.purpose = new fhir.CodeableConcept(source.purpose);
        }
        if (source['name']) {
            this.name = new fhir.HumanName(source.name);
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        if (source['address']) {
            this.address = new fhir.Address(source.address);
        }
    }
    /**
     * Extensible-bound Value Set for purpose
     */
    static purposeExtensibleValueSet() {
        return ContactentityTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["purpose"]) {
            outcome.issue.push(...this.purpose.doModelValidation().issue);
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (this["telecom"]) {
            this.telecom.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["address"]) {
            outcome.issue.push(...this.address.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.
 */
export class Organization extends fhir.DomainResource {
    /**
     * Default constructor for Organization - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'Organization';
        /**
         * Identifier for the organization that is used to identify the organization across multiple disparate systems.
         */
        this.identifier = [];
        /**
         * Organizations can be corporations, wards, sections, clinical teams, government departments, etc. Note that code is generally a classifier of the type of organization; in many applications, codes are used to identity a particular organization (say, ward) as opposed to another of the same type - these are identifiers, not codes
         * When considering if multiple types are appropriate, you should evaluate if child organizations would be a more appropriate use of the concept, as different types likely are in different sub-areas of the organization. This is most likely to be used where type values have orthogonal values, such as a religious, academic and medical center.
         * We expect that some jurisdictions will profile this optionality to be a single cardinality.
         */
        this.type = [];
        /**
         * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the organization.
         */
        this.alias = [];
        /**
         * The use code 'home' is not to be used. Note that these contacts are not the contact details of people who are employed by or represent the organization, but official contacts for the organization itself.
         */
        this.telecom = [];
        /**
         * Organization may have multiple addresses with different uses or applicable periods. The use code 'home' is not to be used.
         */
        this.address = [];
        /**
         * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
         */
        this.contact = [];
        /**
         * Technical endpoints providing access to services operated for the organization.
         */
        this.endpoint = [];
        this.resourceType = 'Organization';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['active']) {
            this.active = new fhir.FhirBoolean({ value: source.active });
        }
        if (source['type']) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['name']) {
            this.name = new fhir.FhirString({ value: source.name });
        }
        if (source['alias']) {
            this.alias = source.alias.map((x) => new fhir.FhirString({ value: x }));
        }
        if (source['telecom']) {
            this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x));
        }
        if (source['address']) {
            this.address = source.address.map((x) => new fhir.Address(x));
        }
        if (source['partOf']) {
            this.partOf = new fhir.Reference(source.partOf);
        }
        if (source['contact']) {
            this.contact = source.contact.map((x) => new fhir.OrganizationContact(x));
        }
        if (source['endpoint']) {
            this.endpoint = source.endpoint.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet() {
        return OrganizationTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'Organization' fhir: Organization.resourceType:'Organization'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["active"]) {
            outcome.issue.push(...this.active.doModelValidation().issue);
        }
        if (this["type"]) {
            this.type.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["name"]) {
            outcome.issue.push(...this.name.doModelValidation().issue);
        }
        if (this["alias"]) {
            this.alias.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["telecom"]) {
            this.telecom.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["address"]) {
            this.address.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["partOf"]) {
            outcome.issue.push(...this.partOf.doModelValidation().issue);
        }
        if (this["contact"]) {
            this.contact.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["endpoint"]) {
            this.endpoint.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=Organization.js.map