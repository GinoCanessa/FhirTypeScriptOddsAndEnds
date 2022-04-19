// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Compartment Consistency Rules.
 */
export class GraphDefinitionLinkTargetCompartment extends fhir.BackboneElement {
    /**
     * Default constructor for GraphDefinitionLinkTargetCompartment - initializes any required elements to null if a value is not provided.
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
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["expression"]) {
            this.expression = source.expression;
        }
        if (source["_expression"]) {
            this._expression = new fhir.FhirElement(source._expression);
        }
        this.rule = null;
        if (source["rule"]) {
            this.rule = source.rule;
        }
        if (this.rule === undefined) {
            this.rule = null;
        }
        if (source["_rule"]) {
            this._rule = new fhir.FhirElement(source._rule);
        }
        this.use = null;
        if (source["use"]) {
            this.use = source.use;
        }
        if (this.use === undefined) {
            this.use = null;
        }
        if (source["_use"]) {
            this._use = new fhir.FhirElement(source._use);
        }
    }
    /**
     * Check if the current GraphDefinitionLinkTargetCompartment contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["rule"] === undefined) {
            missingElements.push("rule");
        }
        if (this["use"] === undefined) {
            missingElements.push("use");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a GraphDefinitionLinkTargetCompartment from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new GraphDefinitionLinkTargetCompartment(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `GraphDefinitionLinkTargetCompartment is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Potential target for the link.
 */
export class GraphDefinitionLinkTarget extends fhir.BackboneElement {
    /**
     * Default constructor for GraphDefinitionLinkTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["compartment"]) {
            this.compartment = source.compartment.map((x) => new fhir.GraphDefinitionLinkTargetCompartment(x));
        }
        if (source["link"]) {
            this.link = source.link.map((x) => new fhir.GraphDefinitionLink(x));
        }
        if (source["params"]) {
            this.params = source.params;
        }
        if (source["_params"]) {
            this._params = new fhir.FhirElement(source._params);
        }
        if (source["profile"]) {
            this.profile = source.profile;
        }
        if (source["_profile"]) {
            this._profile = new fhir.FhirElement(source._profile);
        }
        this.type = null;
        if (source["type"]) {
            this.type = source.type;
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["_type"]) {
            this._type = new fhir.FhirElement(source._type);
        }
    }
    /**
     * Check if the current GraphDefinitionLinkTarget contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a GraphDefinitionLinkTarget from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new GraphDefinitionLinkTarget(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `GraphDefinitionLinkTarget is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Links this graph makes rules about.
 */
export class GraphDefinitionLink extends fhir.BackboneElement {
    /**
     * Default constructor for GraphDefinitionLink - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["max"]) {
            this.max = source.max;
        }
        if (source["_max"]) {
            this._max = new fhir.FhirElement(source._max);
        }
        if (source["min"]) {
            this.min = source.min;
        }
        if (source["_min"]) {
            this._min = new fhir.FhirElement(source._min);
        }
        if (source["path"]) {
            this.path = source.path;
        }
        if (source["_path"]) {
            this._path = new fhir.FhirElement(source._path);
        }
        if (source["sliceName"]) {
            this.sliceName = source.sliceName;
        }
        if (source["_sliceName"]) {
            this._sliceName = new fhir.FhirElement(source._sliceName);
        }
        if (source["target"]) {
            this.target = source.target.map((x) => new fhir.GraphDefinitionLinkTarget(x));
        }
    }
    /**
     * Check if the current GraphDefinitionLink contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a GraphDefinitionLink from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new GraphDefinitionLink(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `GraphDefinitionLink is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.
 */
export class GraphDefinition extends fhir.DomainResource {
    /**
     * Default constructor for GraphDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'GraphDefinition';
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
        if (source["jurisdiction"]) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["link"]) {
            this.link = source.link.map((x) => new fhir.GraphDefinitionLink(x));
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
        if (source["profile"]) {
            this.profile = source.profile;
        }
        if (source["_profile"]) {
            this._profile = new fhir.FhirElement(source._profile);
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
        this.start = null;
        if (source["start"]) {
            this.start = source.start;
        }
        if (this.start === undefined) {
            this.start = null;
        }
        if (source["_start"]) {
            this._start = new fhir.FhirElement(source._start);
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
        if (source["url"]) {
            this.url = source.url;
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
     * Check if the current GraphDefinition contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["name"] === undefined) {
            missingElements.push("name");
        }
        if (this["start"] === undefined) {
            missingElements.push("start");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a GraphDefinition from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new GraphDefinition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `GraphDefinition is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the GraphDefinition.link.target.compartment.code field
 */
export var GraphDefinitionLinkTargetCompartmentCodeEnum;
(function (GraphDefinitionLinkTargetCompartmentCodeEnum) {
    GraphDefinitionLinkTargetCompartmentCodeEnum["PATIENT"] = "Patient";
    GraphDefinitionLinkTargetCompartmentCodeEnum["ENCOUNTER"] = "Encounter";
    GraphDefinitionLinkTargetCompartmentCodeEnum["RELATEDPERSON"] = "RelatedPerson";
    GraphDefinitionLinkTargetCompartmentCodeEnum["PRACTITIONER"] = "Practitioner";
    GraphDefinitionLinkTargetCompartmentCodeEnum["DEVICE"] = "Device";
})(GraphDefinitionLinkTargetCompartmentCodeEnum || (GraphDefinitionLinkTargetCompartmentCodeEnum = {}));
/**
 * Code Values for the GraphDefinition.link.target.compartment.rule field
 */
export var GraphDefinitionLinkTargetCompartmentRuleEnum;
(function (GraphDefinitionLinkTargetCompartmentRuleEnum) {
    GraphDefinitionLinkTargetCompartmentRuleEnum["IDENTICAL"] = "identical";
    GraphDefinitionLinkTargetCompartmentRuleEnum["MATCHING"] = "matching";
    GraphDefinitionLinkTargetCompartmentRuleEnum["DIFFERENT"] = "different";
    GraphDefinitionLinkTargetCompartmentRuleEnum["CUSTOM"] = "custom";
})(GraphDefinitionLinkTargetCompartmentRuleEnum || (GraphDefinitionLinkTargetCompartmentRuleEnum = {}));
/**
 * Code Values for the GraphDefinition.link.target.compartment.use field
 */
export var GraphDefinitionLinkTargetCompartmentUseEnum;
(function (GraphDefinitionLinkTargetCompartmentUseEnum) {
    GraphDefinitionLinkTargetCompartmentUseEnum["CONDITION"] = "condition";
    GraphDefinitionLinkTargetCompartmentUseEnum["REQUIREMENT"] = "requirement";
})(GraphDefinitionLinkTargetCompartmentUseEnum || (GraphDefinitionLinkTargetCompartmentUseEnum = {}));
/**
 * Code Values for the GraphDefinition.status field
 */
export var GraphDefinitionStatusEnum;
(function (GraphDefinitionStatusEnum) {
    GraphDefinitionStatusEnum["DRAFT"] = "draft";
    GraphDefinitionStatusEnum["ACTIVE"] = "active";
    GraphDefinitionStatusEnum["RETIRED"] = "retired";
    GraphDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(GraphDefinitionStatusEnum || (GraphDefinitionStatusEnum = {}));
//# sourceMappingURL=GraphDefinition.js.map