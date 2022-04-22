// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: CompartmentDefinition
import * as fhir from '../fhir.js';
import { ResourceTypesValueSet } from '../fhirValueSets/ResourceTypesValueSet.js';
import { PublicationStatusValueSet } from '../fhirValueSets/PublicationStatusValueSet.js';
import { CompartmentTypeValueSet } from '../fhirValueSets/CompartmentTypeValueSet.js';
/**
 * Information about how a resource is related to the compartment.
 */
export class CompartmentDefinitionResource extends fhir.BackboneElement {
    /**
     * Default constructor for CompartmentDefinitionResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['code']) {
            this.code = source.code;
        }
        else {
            this.code = null;
        }
        if (source['_code']) {
            this._code = new fhir.FhirElement(source._code);
        }
        if (source['param']) {
            this.param = source.param.map((x) => (x));
        }
        if (source['_param']) {
            this._param = source._param.map((x) => new fhir.FhirElement(x));
        }
        if (source['documentation']) {
            this.documentation = source.documentation;
        }
        if (source['_documentation']) {
            this._documentation = new fhir.FhirElement(source._documentation);
        }
    }
    /**
     * Required-bound Value Set for code
     */
    static codeRequiredValueSet() {
        return ResourceTypesValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["code"]) {
            results.push(["code", 'Missing required element: CompartmentDefinition.resource.code']);
        }
        if (this["_code"]) {
            results.push(...this._code.doModelValidation());
        }
        if (this["_param"]) {
            this._param.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_documentation"]) {
            results.push(...this._documentation.doModelValidation());
        }
        return results;
    }
}
/**
 * A compartment definition that defines how resources are accessed on a server.
 */
export class CompartmentDefinition extends fhir.DomainResource {
    /**
     * Default constructor for CompartmentDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'CompartmentDefinition';
        if (source['url']) {
            this.url = source.url;
        }
        else {
            this.url = null;
        }
        if (source['_url']) {
            this._url = new fhir.FhirElement(source._url);
        }
        if (source['version']) {
            this.version = source.version;
        }
        if (source['_version']) {
            this._version = new fhir.FhirElement(source._version);
        }
        if (source['name']) {
            this.name = source.name;
        }
        else {
            this.name = null;
        }
        if (source['_name']) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source['experimental']) {
            this.experimental = source.experimental;
        }
        if (source['_experimental']) {
            this._experimental = new fhir.FhirElement(source._experimental);
        }
        if (source['date']) {
            this.date = source.date;
        }
        if (source['_date']) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source['publisher']) {
            this.publisher = source.publisher;
        }
        if (source['_publisher']) {
            this._publisher = new fhir.FhirElement(source._publisher);
        }
        if (source['contact']) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source['description']) {
            this.description = source.description;
        }
        if (source['_description']) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source['useContext']) {
            this.useContext = source.useContext.map((x) => new fhir.UsageContext(x));
        }
        if (source['purpose']) {
            this.purpose = source.purpose;
        }
        if (source['_purpose']) {
            this._purpose = new fhir.FhirElement(source._purpose);
        }
        if (source['code']) {
            this.code = source.code;
        }
        else {
            this.code = null;
        }
        if (source['_code']) {
            this._code = new fhir.FhirElement(source._code);
        }
        if (source['search']) {
            this.search = source.search;
        }
        else {
            this.search = null;
        }
        if (source['_search']) {
            this._search = new fhir.FhirElement(source._search);
        }
        if (source['resource']) {
            this.resource = source.resource.map((x) => new fhir.CompartmentDefinitionResource(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return PublicationStatusValueSet;
    }
    /**
     * Required-bound Value Set for code
     */
    static codeRequiredValueSet() {
        return CompartmentTypeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: CompartmentDefinition.resourceType']);
        }
        if (!this["url"]) {
            results.push(["url", 'Missing required element: CompartmentDefinition.url']);
        }
        if (this["_url"]) {
            results.push(...this._url.doModelValidation());
        }
        if (this["_version"]) {
            results.push(...this._version.doModelValidation());
        }
        if (!this["name"]) {
            results.push(["name", 'Missing required element: CompartmentDefinition.name']);
        }
        if (this["_name"]) {
            results.push(...this._name.doModelValidation());
        }
        if (!this["status"]) {
            results.push(["status", 'Missing required element: CompartmentDefinition.status']);
        }
        if (this["_status"]) {
            results.push(...this._status.doModelValidation());
        }
        if (this["_experimental"]) {
            results.push(...this._experimental.doModelValidation());
        }
        if (this["_date"]) {
            results.push(...this._date.doModelValidation());
        }
        if (this["_publisher"]) {
            results.push(...this._publisher.doModelValidation());
        }
        if (this["contact"]) {
            this.contact.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_description"]) {
            results.push(...this._description.doModelValidation());
        }
        if (this["useContext"]) {
            this.useContext.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_purpose"]) {
            results.push(...this._purpose.doModelValidation());
        }
        if (!this["code"]) {
            results.push(["code", 'Missing required element: CompartmentDefinition.code']);
        }
        if (this["_code"]) {
            results.push(...this._code.doModelValidation());
        }
        if (!this["search"]) {
            results.push(["search", 'Missing required element: CompartmentDefinition.search']);
        }
        if (this["_search"]) {
            results.push(...this._search.doModelValidation());
        }
        if (this["resource"]) {
            this.resource.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
//# sourceMappingURL=CompartmentDefinition.js.map