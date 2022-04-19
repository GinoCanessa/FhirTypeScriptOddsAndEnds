// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
export class ImplementationGuideDependsOn extends fhir.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDependsOn - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["packageId"]) {
            this.packageId = source.packageId;
        }
        if (source["_packageId"]) {
            this._packageId = new fhir.FhirElement(source._packageId);
        }
        this.uri = null;
        if (source["uri"]) {
            this.uri = source.uri;
        }
        if (this.uri === undefined) {
            this.uri = null;
        }
        if (source["_uri"]) {
            this._uri = new fhir.FhirElement(source._uri);
        }
        if (source["version"]) {
            this.version = source.version;
        }
        if (source["_version"]) {
            this._version = new fhir.FhirElement(source._version);
        }
    }
    /**
     * Check if the current ImplementationGuideDependsOn contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["uri"] === undefined) {
            missingElements.push("uri");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuideDependsOn from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuideDependsOn(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDependsOn is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
export class ImplementationGuideGlobal extends fhir.BackboneElement {
    /**
     * Default constructor for ImplementationGuideGlobal - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.profile = null;
        if (source["profile"]) {
            this.profile = source.profile;
        }
        if (this.profile === undefined) {
            this.profile = null;
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
     * Check if the current ImplementationGuideGlobal contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["profile"] === undefined) {
            missingElements.push("profile");
        }
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuideGlobal from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuideGlobal(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideGlobal is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
export class ImplementationGuideDefinitionGrouping extends fhir.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinitionGrouping - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
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
    }
    /**
     * Check if the current ImplementationGuideDefinitionGrouping contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["name"] === undefined) {
            missingElements.push("name");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuideDefinitionGrouping from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuideDefinitionGrouping(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinitionGrouping is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export class ImplementationGuideDefinitionResource extends fhir.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinitionResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["exampleBoolean"]) {
            this.exampleBoolean = source.exampleBoolean;
        }
        if (source["_exampleBoolean"]) {
            this._exampleBoolean = new fhir.FhirElement(source._exampleBoolean);
        }
        if (source["exampleCanonical"]) {
            this.exampleCanonical = source.exampleCanonical;
        }
        if (source["_exampleCanonical"]) {
            this._exampleCanonical = new fhir.FhirElement(source._exampleCanonical);
        }
        if (source["fhirVersion"]) {
            this.fhirVersion = source.fhirVersion.map((x) => (x));
        }
        if (source["_fhirVersion"]) {
            this._fhirVersion = source._fhirVersion.map((x) => new fhir.FhirElement(x));
        }
        if (source["groupingId"]) {
            this.groupingId = source.groupingId;
        }
        if (source["_groupingId"]) {
            this._groupingId = new fhir.FhirElement(source._groupingId);
        }
        if (source["name"]) {
            this.name = source.name;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        this.reference = null;
        if (source["reference"]) {
            this.reference = new fhir.Reference(source.reference);
        }
        if (this.reference === undefined) {
            this.reference = null;
        }
    }
    /**
     * Check if the current ImplementationGuideDefinitionResource contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["reference"] === undefined) {
            missingElements.push("reference");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuideDefinitionResource from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuideDefinitionResource(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinitionResource is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
export class ImplementationGuideDefinitionPage extends fhir.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinitionPage - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.generation = null;
        if (source["generation"]) {
            this.generation = source.generation;
        }
        if (this.generation === undefined) {
            this.generation = null;
        }
        if (source["_generation"]) {
            this._generation = new fhir.FhirElement(source._generation);
        }
        if (source["nameUrl"]) {
            this.nameUrl = source.nameUrl;
        }
        if (source["_nameUrl"]) {
            this._nameUrl = new fhir.FhirElement(source._nameUrl);
        }
        if (source["nameReference"]) {
            this.nameReference = new fhir.Reference(source.nameReference);
        }
        if (source["page"]) {
            this.page = source.page.map((x) => new fhir.ImplementationGuideDefinitionPage(x));
        }
        this.title = null;
        if (source["title"]) {
            this.title = source.title;
        }
        if (this.title === undefined) {
            this.title = null;
        }
        if (source["_title"]) {
            this._title = new fhir.FhirElement(source._title);
        }
    }
    /**
     * Check if the current ImplementationGuideDefinitionPage contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["generation"] === undefined) {
            missingElements.push("generation");
        }
        if (this["title"] === undefined) {
            missingElements.push("title");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuideDefinitionPage from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuideDefinitionPage(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinitionPage is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Defines how IG is built by tools.
 */
export class ImplementationGuideDefinitionParameter extends fhir.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinitionParameter - initializes any required elements to null if a value is not provided.
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
        this.value = null;
        if (source["value"]) {
            this.value = source.value;
        }
        if (this.value === undefined) {
            this.value = null;
        }
        if (source["_value"]) {
            this._value = new fhir.FhirElement(source._value);
        }
    }
    /**
     * Check if the current ImplementationGuideDefinitionParameter contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["value"] === undefined) {
            missingElements.push("value");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuideDefinitionParameter from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuideDefinitionParameter(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinitionParameter is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A template for building resources.
 */
export class ImplementationGuideDefinitionTemplate extends fhir.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinitionTemplate - initializes any required elements to null if a value is not provided.
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
        if (source["scope"]) {
            this.scope = source.scope;
        }
        if (source["_scope"]) {
            this._scope = new fhir.FhirElement(source._scope);
        }
        this.source = null;
        if (source["source"]) {
            this.source = source.source;
        }
        if (this.source === undefined) {
            this.source = null;
        }
        if (source["_source"]) {
            this._source = new fhir.FhirElement(source._source);
        }
    }
    /**
     * Check if the current ImplementationGuideDefinitionTemplate contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["source"] === undefined) {
            missingElements.push("source");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuideDefinitionTemplate from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuideDefinitionTemplate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinitionTemplate is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 */
export class ImplementationGuideDefinition extends fhir.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["grouping"]) {
            this.grouping = source.grouping.map((x) => new fhir.ImplementationGuideDefinitionGrouping(x));
        }
        if (source["page"]) {
            this.page = new fhir.ImplementationGuideDefinitionPage(source.page);
        }
        if (source["parameter"]) {
            this.parameter = source.parameter.map((x) => new fhir.ImplementationGuideDefinitionParameter(x));
        }
        this.resource = null;
        if (source["resource"]) {
            this.resource = source.resource.map((x) => new fhir.ImplementationGuideDefinitionResource(x));
        }
        if (this.resource === undefined) {
            this.resource = null;
        }
        if (source["template"]) {
            this.template = source.template.map((x) => new fhir.ImplementationGuideDefinitionTemplate(x));
        }
    }
    /**
     * Check if the current ImplementationGuideDefinition contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if ((!this["resource"]) || (this["resource"].length === 0)) {
            missingElements.push("resource");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuideDefinition from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuideDefinition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinition is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
export class ImplementationGuideManifestResource extends fhir.BackboneElement {
    /**
     * Default constructor for ImplementationGuideManifestResource - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["exampleBoolean"]) {
            this.exampleBoolean = source.exampleBoolean;
        }
        if (source["_exampleBoolean"]) {
            this._exampleBoolean = new fhir.FhirElement(source._exampleBoolean);
        }
        if (source["exampleCanonical"]) {
            this.exampleCanonical = source.exampleCanonical;
        }
        if (source["_exampleCanonical"]) {
            this._exampleCanonical = new fhir.FhirElement(source._exampleCanonical);
        }
        this.reference = null;
        if (source["reference"]) {
            this.reference = new fhir.Reference(source.reference);
        }
        if (this.reference === undefined) {
            this.reference = null;
        }
        if (source["relativePath"]) {
            this.relativePath = source.relativePath;
        }
        if (source["_relativePath"]) {
            this._relativePath = new fhir.FhirElement(source._relativePath);
        }
    }
    /**
     * Check if the current ImplementationGuideManifestResource contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["reference"] === undefined) {
            missingElements.push("reference");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuideManifestResource from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuideManifestResource(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideManifestResource is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Information about a page within the IG.
 */
export class ImplementationGuideManifestPage extends fhir.BackboneElement {
    /**
     * Default constructor for ImplementationGuideManifestPage - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["anchor"]) {
            this.anchor = source.anchor.map((x) => (x));
        }
        if (source["_anchor"]) {
            this._anchor = source._anchor.map((x) => new fhir.FhirElement(x));
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
        if (source["title"]) {
            this.title = source.title;
        }
        if (source["_title"]) {
            this._title = new fhir.FhirElement(source._title);
        }
    }
    /**
     * Check if the current ImplementationGuideManifestPage contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["name"] === undefined) {
            missingElements.push("name");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuideManifestPage from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuideManifestPage(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideManifestPage is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
export class ImplementationGuideManifest extends fhir.BackboneElement {
    /**
     * Default constructor for ImplementationGuideManifest - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["image"]) {
            this.image = source.image.map((x) => (x));
        }
        if (source["_image"]) {
            this._image = source._image.map((x) => new fhir.FhirElement(x));
        }
        if (source["other"]) {
            this.other = source.other.map((x) => (x));
        }
        if (source["_other"]) {
            this._other = source._other.map((x) => new fhir.FhirElement(x));
        }
        if (source["page"]) {
            this.page = source.page.map((x) => new fhir.ImplementationGuideManifestPage(x));
        }
        if (source["rendering"]) {
            this.rendering = source.rendering;
        }
        if (source["_rendering"]) {
            this._rendering = new fhir.FhirElement(source._rendering);
        }
        this.resource = null;
        if (source["resource"]) {
            this.resource = source.resource.map((x) => new fhir.ImplementationGuideManifestResource(x));
        }
        if (this.resource === undefined) {
            this.resource = null;
        }
    }
    /**
     * Check if the current ImplementationGuideManifest contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if ((!this["resource"]) || (this["resource"].length === 0)) {
            missingElements.push("resource");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuideManifest from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuideManifest(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideManifest is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
export class ImplementationGuide extends fhir.DomainResource {
    /**
     * Default constructor for ImplementationGuide - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'ImplementationGuide';
        if (source["contact"]) {
            this.contact = source.contact.map((x) => new fhir.ContactDetail(x));
        }
        if (source["copyright"]) {
            this.copyright = source.copyright;
        }
        if (source["_copyright"]) {
            this._copyright = new fhir.FhirElement(source._copyright);
        }
        if (source["date"]) {
            this.date = source.date;
        }
        if (source["_date"]) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source["definition"]) {
            this.definition = new fhir.ImplementationGuideDefinition(source.definition);
        }
        if (source["dependsOn"]) {
            this.dependsOn = source.dependsOn.map((x) => new fhir.ImplementationGuideDependsOn(x));
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
        this.fhirVersion = null;
        if (source["fhirVersion"]) {
            this.fhirVersion = source.fhirVersion.map((x) => (x));
        }
        if (this.fhirVersion === undefined) {
            this.fhirVersion = null;
        }
        if (source["_fhirVersion"]) {
            this._fhirVersion = source._fhirVersion.map((x) => new fhir.FhirElement(x));
        }
        if (source["global"]) {
            this.global = source.global.map((x) => new fhir.ImplementationGuideGlobal(x));
        }
        if (source["jurisdiction"]) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["license"]) {
            this.license = source.license;
        }
        if (source["_license"]) {
            this._license = new fhir.FhirElement(source._license);
        }
        if (source["manifest"]) {
            this.manifest = new fhir.ImplementationGuideManifest(source.manifest);
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
        this.packageId = null;
        if (source["packageId"]) {
            this.packageId = source.packageId;
        }
        if (this.packageId === undefined) {
            this.packageId = null;
        }
        if (source["_packageId"]) {
            this._packageId = new fhir.FhirElement(source._packageId);
        }
        if (source["publisher"]) {
            this.publisher = source.publisher;
        }
        if (source["_publisher"]) {
            this._publisher = new fhir.FhirElement(source._publisher);
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
        if (source["title"]) {
            this.title = source.title;
        }
        if (source["_title"]) {
            this._title = new fhir.FhirElement(source._title);
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
     * Check if the current ImplementationGuide contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if ((!this["fhirVersion"]) || (this["fhirVersion"].length === 0)) {
            missingElements.push("fhirVersion");
        }
        if (this["name"] === undefined) {
            missingElements.push("name");
        }
        if (this["packageId"] === undefined) {
            missingElements.push("packageId");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        if (this["url"] === undefined) {
            missingElements.push("url");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImplementationGuide from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new ImplementationGuide(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuide is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the ImplementationGuide.definition.page.generation field
 */
export var ImplementationGuideDefinitionPageGenerationEnum;
(function (ImplementationGuideDefinitionPageGenerationEnum) {
    ImplementationGuideDefinitionPageGenerationEnum["HTML"] = "html";
    ImplementationGuideDefinitionPageGenerationEnum["MARKDOWN"] = "markdown";
    ImplementationGuideDefinitionPageGenerationEnum["XML"] = "xml";
    ImplementationGuideDefinitionPageGenerationEnum["GENERATED"] = "generated";
})(ImplementationGuideDefinitionPageGenerationEnum || (ImplementationGuideDefinitionPageGenerationEnum = {}));
/**
 * Code Values for the ImplementationGuide.definition.parameter.code field
 */
export var ImplementationGuideDefinitionParameterCodeEnum;
(function (ImplementationGuideDefinitionParameterCodeEnum) {
    ImplementationGuideDefinitionParameterCodeEnum["APPLY"] = "apply";
    ImplementationGuideDefinitionParameterCodeEnum["PATH_RESOURCE"] = "path-resource";
    ImplementationGuideDefinitionParameterCodeEnum["PATH_PAGES"] = "path-pages";
    ImplementationGuideDefinitionParameterCodeEnum["PATH_TX_CACHE"] = "path-tx-cache";
    ImplementationGuideDefinitionParameterCodeEnum["EXPANSION_PARAMETER"] = "expansion-parameter";
    ImplementationGuideDefinitionParameterCodeEnum["RULE_BROKEN_LINKS"] = "rule-broken-links";
    ImplementationGuideDefinitionParameterCodeEnum["GENERATE_XML"] = "generate-xml";
    ImplementationGuideDefinitionParameterCodeEnum["GENERATE_JSON"] = "generate-json";
    ImplementationGuideDefinitionParameterCodeEnum["GENERATE_TURTLE"] = "generate-turtle";
    ImplementationGuideDefinitionParameterCodeEnum["HTML_TEMPLATE"] = "html-template";
})(ImplementationGuideDefinitionParameterCodeEnum || (ImplementationGuideDefinitionParameterCodeEnum = {}));
/**
 * Code Values for the ImplementationGuide.status field
 */
export var ImplementationGuideStatusEnum;
(function (ImplementationGuideStatusEnum) {
    ImplementationGuideStatusEnum["DRAFT"] = "draft";
    ImplementationGuideStatusEnum["ACTIVE"] = "active";
    ImplementationGuideStatusEnum["RETIRED"] = "retired";
    ImplementationGuideStatusEnum["UNKNOWN"] = "unknown";
})(ImplementationGuideStatusEnum || (ImplementationGuideStatusEnum = {}));
//# sourceMappingURL=ImplementationGuide.js.map