// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Information about how a resource is related to the compartment.
 */
export class CompartmentDefinitionResource extends fhir.BackboneElement {
    /**
     * Default constructor for CompartmentDefinitionResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.code = null;
        if (source["code"]) {
            this.code = source.code;
        }
        if (this.code === undefined) {
            this.code = null;
        }
        if (source["_code"]) {
            this._code = new fhir.FhirElement(source._code);
        }
        if (source["documentation"]) {
            this.documentation = source.documentation;
        }
        if (source["_documentation"]) {
            this._documentation = new fhir.FhirElement(source._documentation);
        }
        if (source["param"]) {
            this.param = source.param.map((x) => (x));
        }
        if (source["_param"]) {
            this._param = source._param.map((x) => new fhir.FhirElement(x));
        }
    }
    /**
     * Check if the current CompartmentDefinitionResource contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a CompartmentDefinitionResource from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new CompartmentDefinitionResource(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `CompartmentDefinitionResource is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
        this.code = null;
        if (source["code"]) {
            this.code = source.code;
        }
        if (this.code === undefined) {
            this.code = null;
        }
        if (source["_code"]) {
            this._code = new fhir.FhirElement(source._code);
        }
        if (source["contact"]) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source["date"]) {
            this.date = source.date;
        }
        if (source["_date"]) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["experimental"]) {
            this.experimental = source.experimental;
        }
        if (source["_experimental"]) {
            this._experimental = new fhir.FhirElement(source._experimental);
        }
        this.name = null;
        if (source["name"]) {
            this.name = source.name;
        }
        if (this.name === undefined) {
            this.name = null;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source["publisher"]) {
            this.publisher = source.publisher;
        }
        if (source["_publisher"]) {
            this._publisher = new fhir.FhirElement(source._publisher);
        }
        if (source["purpose"]) {
            this.purpose = source.purpose;
        }
        if (source["_purpose"]) {
            this._purpose = new fhir.FhirElement(source._purpose);
        }
        if (source["resource"]) {
            this.resource = source.resource.map((x) => new fhir.CompartmentDefinitionResource(x));
        }
        this.search = null;
        if (source["search"]) {
            this.search = source.search;
        }
        if (this.search === undefined) {
            this.search = null;
        }
        if (source["_search"]) {
            this._search = new fhir.FhirElement(source._search);
        }
        this.status = null;
        if (source["status"]) {
            this.status = source.status;
        }
        if (this.status === undefined) {
            this.status = null;
        }
        if (source["_status"]) {
            this._status = new fhir.FhirElement(source._status);
        }
        this.url = null;
        if (source["url"]) {
            this.url = source.url;
        }
        if (this.url === undefined) {
            this.url = null;
        }
        if (source["_url"]) {
            this._url = new fhir.FhirElement(source._url);
        }
        if (source["useContext"]) {
            this.useContext = source.useContext.map((x) => new fhir.UsageContext(x));
        }
        if (source["version"]) {
            this.version = source.version;
        }
        if (source["_version"]) {
            this._version = new fhir.FhirElement(source._version);
        }
    }
    /**
     * Check if the current CompartmentDefinition contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["name"] === undefined) {
            missingElements.push("name");
        }
        if (this["search"] === undefined) {
            missingElements.push("search");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        if (this["url"] === undefined) {
            missingElements.push("url");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a CompartmentDefinition from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new CompartmentDefinition(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `CompartmentDefinition is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the CompartmentDefinition.code field
 */
export var CompartmentDefinitionCodeEnum;
(function (CompartmentDefinitionCodeEnum) {
    CompartmentDefinitionCodeEnum["PATIENT"] = "Patient";
    CompartmentDefinitionCodeEnum["ENCOUNTER"] = "Encounter";
    CompartmentDefinitionCodeEnum["RELATEDPERSON"] = "RelatedPerson";
    CompartmentDefinitionCodeEnum["PRACTITIONER"] = "Practitioner";
    CompartmentDefinitionCodeEnum["DEVICE"] = "Device";
})(CompartmentDefinitionCodeEnum || (CompartmentDefinitionCodeEnum = {}));
/**
 * Code Values for the CompartmentDefinition.status field
 */
export var CompartmentDefinitionStatusEnum;
(function (CompartmentDefinitionStatusEnum) {
    CompartmentDefinitionStatusEnum["DRAFT"] = "draft";
    CompartmentDefinitionStatusEnum["ACTIVE"] = "active";
    CompartmentDefinitionStatusEnum["RETIRED"] = "retired";
    CompartmentDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(CompartmentDefinitionStatusEnum || (CompartmentDefinitionStatusEnum = {}));
//# sourceMappingURL=CompartmentDefinition.js.map