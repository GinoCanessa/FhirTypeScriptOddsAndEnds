"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplementationGuideStatusEnum = exports.ImplementationGuide = exports.ImplementationGuideManifest = exports.ImplementationGuideManifestPage = exports.ImplementationGuideManifestResource = exports.ImplementationGuideDefinition = exports.ImplementationGuideDefinitionTemplate = exports.ImplementationGuideDefinitionParameterCodeEnum = exports.ImplementationGuideDefinitionParameter = exports.ImplementationGuideDefinitionPageGenerationEnum = exports.ImplementationGuideDefinitionPage = exports.ImplementationGuideDefinitionResource = exports.ImplementationGuideDefinitionGrouping = exports.ImplementationGuideGlobal = exports.ImplementationGuideDependsOn = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
class ImplementationGuideDependsOn extends fhirModels.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDependsOn from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["packageId"] !== undefined) {
            this.packageId = source.packageId;
        }
        if (source["_packageId"] !== undefined) {
            this._packageId = new fhirModels.Element(source._packageId);
        }
        if (source["uri"] !== undefined) {
            this.uri = source.uri;
        }
        if (source["_uri"] !== undefined) {
            this._uri = new fhirModels.Element(source._uri);
        }
        if (source["version"] !== undefined) {
            this.version = source.version;
        }
        if (source["_version"] !== undefined) {
            this._version = new fhirModels.Element(source._version);
        }
    }
    /**
     * Factory function to create a ImplementationGuideDependsOn from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuideDependsOn(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDependsOn is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
}
exports.ImplementationGuideDependsOn = ImplementationGuideDependsOn;
/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
class ImplementationGuideGlobal extends fhirModels.BackboneElement {
    /**
     * Default constructor for ImplementationGuideGlobal from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["profile"] !== undefined) {
            this.profile = source.profile;
        }
        if (source["_profile"] !== undefined) {
            this._profile = new fhirModels.Element(source._profile);
        }
        if (source["type"] !== undefined) {
            this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            this._type = new fhirModels.Element(source._type);
        }
    }
    /**
     * Factory function to create a ImplementationGuideGlobal from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuideGlobal(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideGlobal is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
}
exports.ImplementationGuideGlobal = ImplementationGuideGlobal;
/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
class ImplementationGuideDefinitionGrouping extends fhirModels.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinitionGrouping from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
    }
    /**
     * Factory function to create a ImplementationGuideDefinitionGrouping from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuideDefinitionGrouping(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinitionGrouping is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
}
exports.ImplementationGuideDefinitionGrouping = ImplementationGuideDefinitionGrouping;
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
class ImplementationGuideDefinitionResource extends fhirModels.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinitionResource from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["exampleBoolean"] !== undefined) {
            this.exampleBoolean = source.exampleBoolean;
        }
        if (source["_exampleBoolean"] !== undefined) {
            this._exampleBoolean = new fhirModels.Element(source._exampleBoolean);
        }
        if (source["exampleCanonical"] !== undefined) {
            this.exampleCanonical = source.exampleCanonical;
        }
        if (source["_exampleCanonical"] !== undefined) {
            this._exampleCanonical = new fhirModels.Element(source._exampleCanonical);
        }
        if (source["fhirVersion"] !== undefined) {
            this.fhirVersion = source.fhirVersion.map((x) => (x));
        }
        if (source["_fhirVersion"] !== undefined) {
            this._fhirVersion = source._fhirVersion.map((x) => new fhirModels.Element(x));
        }
        if (source["groupingId"] !== undefined) {
            this.groupingId = source.groupingId;
        }
        if (source["_groupingId"] !== undefined) {
            this._groupingId = new fhirModels.Element(source._groupingId);
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["reference"] !== undefined) {
            this.reference = new fhirModels.Reference(source.reference);
        }
    }
    /**
     * Factory function to create a ImplementationGuideDefinitionResource from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuideDefinitionResource(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinitionResource is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
}
exports.ImplementationGuideDefinitionResource = ImplementationGuideDefinitionResource;
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
class ImplementationGuideDefinitionPage extends fhirModels.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinitionPage from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["generation"] !== undefined) {
            this.generation = source.generation;
        }
        if (source["_generation"] !== undefined) {
            this._generation = new fhirModels.Element(source._generation);
        }
        if (source["nameUrl"] !== undefined) {
            this.nameUrl = source.nameUrl;
        }
        if (source["_nameUrl"] !== undefined) {
            this._nameUrl = new fhirModels.Element(source._nameUrl);
        }
        if (source["nameReference"] !== undefined) {
            this.nameReference = new fhirModels.Reference(source.nameReference);
        }
        if (source["page"] !== undefined) {
            this.page = source.page.map((x) => new fhirModels.ImplementationGuideDefinitionPage(x));
        }
        if (source["title"] !== undefined) {
            this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            this._title = new fhirModels.Element(source._title);
        }
    }
    /**
     * Factory function to create a ImplementationGuideDefinitionPage from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuideDefinitionPage(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinitionPage is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
}
exports.ImplementationGuideDefinitionPage = ImplementationGuideDefinitionPage;
/**
 * Code Values for the ImplementationGuide.definition.page.generation field
 */
var ImplementationGuideDefinitionPageGenerationEnum;
(function (ImplementationGuideDefinitionPageGenerationEnum) {
    ImplementationGuideDefinitionPageGenerationEnum["HTML"] = "html";
    ImplementationGuideDefinitionPageGenerationEnum["MARKDOWN"] = "markdown";
    ImplementationGuideDefinitionPageGenerationEnum["XML"] = "xml";
    ImplementationGuideDefinitionPageGenerationEnum["GENERATED"] = "generated";
})(ImplementationGuideDefinitionPageGenerationEnum = exports.ImplementationGuideDefinitionPageGenerationEnum || (exports.ImplementationGuideDefinitionPageGenerationEnum = {}));
/**
 * Defines how IG is built by tools.
 */
class ImplementationGuideDefinitionParameter extends fhirModels.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinitionParameter from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["code"] !== undefined) {
            this.code = source.code;
        }
        if (source["_code"] !== undefined) {
            this._code = new fhirModels.Element(source._code);
        }
        if (source["value"] !== undefined) {
            this.value = source.value;
        }
        if (source["_value"] !== undefined) {
            this._value = new fhirModels.Element(source._value);
        }
    }
    /**
     * Factory function to create a ImplementationGuideDefinitionParameter from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuideDefinitionParameter(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinitionParameter is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
}
exports.ImplementationGuideDefinitionParameter = ImplementationGuideDefinitionParameter;
/**
 * Code Values for the ImplementationGuide.definition.parameter.code field
 */
var ImplementationGuideDefinitionParameterCodeEnum;
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
})(ImplementationGuideDefinitionParameterCodeEnum = exports.ImplementationGuideDefinitionParameterCodeEnum || (exports.ImplementationGuideDefinitionParameterCodeEnum = {}));
/**
 * A template for building resources.
 */
class ImplementationGuideDefinitionTemplate extends fhirModels.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinitionTemplate from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["code"] !== undefined) {
            this.code = source.code;
        }
        if (source["_code"] !== undefined) {
            this._code = new fhirModels.Element(source._code);
        }
        if (source["scope"] !== undefined) {
            this.scope = source.scope;
        }
        if (source["_scope"] !== undefined) {
            this._scope = new fhirModels.Element(source._scope);
        }
        if (source["source"] !== undefined) {
            this.source = source.source;
        }
        if (source["_source"] !== undefined) {
            this._source = new fhirModels.Element(source._source);
        }
    }
    /**
     * Factory function to create a ImplementationGuideDefinitionTemplate from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuideDefinitionTemplate(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinitionTemplate is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
}
exports.ImplementationGuideDefinitionTemplate = ImplementationGuideDefinitionTemplate;
/**
 * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 */
class ImplementationGuideDefinition extends fhirModels.BackboneElement {
    /**
     * Default constructor for ImplementationGuideDefinition from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["grouping"] !== undefined) {
            this.grouping = source.grouping.map((x) => new fhirModels.ImplementationGuideDefinitionGrouping(x));
        }
        if (source["page"] !== undefined) {
            this.page = new fhirModels.ImplementationGuideDefinitionPage(source.page);
        }
        if (source["parameter"] !== undefined) {
            this.parameter = source.parameter.map((x) => new fhirModels.ImplementationGuideDefinitionParameter(x));
        }
        if (source["resource"] !== undefined) {
            this.resource = source.resource.map((x) => new fhirModels.ImplementationGuideDefinitionResource(x));
        }
        if (source["template"] !== undefined) {
            this.template = source.template.map((x) => new fhirModels.ImplementationGuideDefinitionTemplate(x));
        }
    }
    /**
     * Factory function to create a ImplementationGuideDefinition from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuideDefinition(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideDefinition is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current ImplementationGuideDefinition contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if ((this["resource"] === undefined) || (this["resource"].length === 0)) {
            missingElements.push("resource");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.ImplementationGuideDefinition = ImplementationGuideDefinition;
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
class ImplementationGuideManifestResource extends fhirModels.BackboneElement {
    /**
     * Default constructor for ImplementationGuideManifestResource from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["exampleBoolean"] !== undefined) {
            this.exampleBoolean = source.exampleBoolean;
        }
        if (source["_exampleBoolean"] !== undefined) {
            this._exampleBoolean = new fhirModels.Element(source._exampleBoolean);
        }
        if (source["exampleCanonical"] !== undefined) {
            this.exampleCanonical = source.exampleCanonical;
        }
        if (source["_exampleCanonical"] !== undefined) {
            this._exampleCanonical = new fhirModels.Element(source._exampleCanonical);
        }
        if (source["reference"] !== undefined) {
            this.reference = new fhirModels.Reference(source.reference);
        }
        if (source["relativePath"] !== undefined) {
            this.relativePath = source.relativePath;
        }
        if (source["_relativePath"] !== undefined) {
            this._relativePath = new fhirModels.Element(source._relativePath);
        }
    }
    /**
     * Factory function to create a ImplementationGuideManifestResource from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuideManifestResource(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideManifestResource is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
}
exports.ImplementationGuideManifestResource = ImplementationGuideManifestResource;
/**
 * Information about a page within the IG.
 */
class ImplementationGuideManifestPage extends fhirModels.BackboneElement {
    /**
     * Default constructor for ImplementationGuideManifestPage from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["anchor"] !== undefined) {
            this.anchor = source.anchor.map((x) => (x));
        }
        if (source["_anchor"] !== undefined) {
            this._anchor = source._anchor.map((x) => new fhirModels.Element(x));
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["title"] !== undefined) {
            this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            this._title = new fhirModels.Element(source._title);
        }
    }
    /**
     * Factory function to create a ImplementationGuideManifestPage from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuideManifestPage(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideManifestPage is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
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
}
exports.ImplementationGuideManifestPage = ImplementationGuideManifestPage;
/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
class ImplementationGuideManifest extends fhirModels.BackboneElement {
    /**
     * Default constructor for ImplementationGuideManifest from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["image"] !== undefined) {
            this.image = source.image.map((x) => (x));
        }
        if (source["_image"] !== undefined) {
            this._image = source._image.map((x) => new fhirModels.Element(x));
        }
        if (source["other"] !== undefined) {
            this.other = source.other.map((x) => (x));
        }
        if (source["_other"] !== undefined) {
            this._other = source._other.map((x) => new fhirModels.Element(x));
        }
        if (source["page"] !== undefined) {
            this.page = source.page.map((x) => new fhirModels.ImplementationGuideManifestPage(x));
        }
        if (source["rendering"] !== undefined) {
            this.rendering = source.rendering;
        }
        if (source["_rendering"] !== undefined) {
            this._rendering = new fhirModels.Element(source._rendering);
        }
        if (source["resource"] !== undefined) {
            this.resource = source.resource.map((x) => new fhirModels.ImplementationGuideManifestResource(x));
        }
    }
    /**
     * Factory function to create a ImplementationGuideManifest from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuideManifest(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuideManifest is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current ImplementationGuideManifest contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if ((this["resource"] === undefined) || (this["resource"].length === 0)) {
            missingElements.push("resource");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.ImplementationGuideManifest = ImplementationGuideManifest;
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
class ImplementationGuide extends fhirModels.DomainResource {
    /**
     * Default constructor for ImplementationGuide from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "ImplementationGuide";
        if ((source['resourceType'] !== "ImplementationGuide") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a ImplementationGuide';
        }
        if (source["contact"] !== undefined) {
            this.contact = source.contact.map((x) => new fhirModels.ContactDetail(x));
        }
        if (source["copyright"] !== undefined) {
            this.copyright = source.copyright;
        }
        if (source["_copyright"] !== undefined) {
            this._copyright = new fhirModels.Element(source._copyright);
        }
        if (source["date"] !== undefined) {
            this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            this._date = new fhirModels.Element(source._date);
        }
        if (source["definition"] !== undefined) {
            this.definition = new fhirModels.ImplementationGuideDefinition(source.definition);
        }
        if (source["dependsOn"] !== undefined) {
            this.dependsOn = source.dependsOn.map((x) => new fhirModels.ImplementationGuideDependsOn(x));
        }
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["experimental"] !== undefined) {
            this.experimental = source.experimental;
        }
        if (source["_experimental"] !== undefined) {
            this._experimental = new fhirModels.Element(source._experimental);
        }
        if (source["fhirVersion"] !== undefined) {
            this.fhirVersion = source.fhirVersion.map((x) => (x));
        }
        if (source["_fhirVersion"] !== undefined) {
            this._fhirVersion = source._fhirVersion.map((x) => new fhirModels.Element(x));
        }
        if (source["global"] !== undefined) {
            this.global = source.global.map((x) => new fhirModels.ImplementationGuideGlobal(x));
        }
        if (source["jurisdiction"] !== undefined) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["license"] !== undefined) {
            this.license = source.license;
        }
        if (source["_license"] !== undefined) {
            this._license = new fhirModels.Element(source._license);
        }
        if (source["manifest"] !== undefined) {
            this.manifest = new fhirModels.ImplementationGuideManifest(source.manifest);
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["packageId"] !== undefined) {
            this.packageId = source.packageId;
        }
        if (source["_packageId"] !== undefined) {
            this._packageId = new fhirModels.Element(source._packageId);
        }
        if (source["publisher"] !== undefined) {
            this.publisher = source.publisher;
        }
        if (source["_publisher"] !== undefined) {
            this._publisher = new fhirModels.Element(source._publisher);
        }
        if (source["status"] !== undefined) {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
        if (source["title"] !== undefined) {
            this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            this._title = new fhirModels.Element(source._title);
        }
        if (source["url"] !== undefined) {
            this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            this._url = new fhirModels.Element(source._url);
        }
        if (source["useContext"] !== undefined) {
            this.useContext = source.useContext.map((x) => new fhirModels.UsageContext(x));
        }
        if (source["version"] !== undefined) {
            this.version = source.version;
        }
        if (source["_version"] !== undefined) {
            this._version = new fhirModels.Element(source._version);
        }
    }
    /**
     * Factory function to create a ImplementationGuide from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new ImplementationGuide(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImplementationGuide is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current ImplementationGuide contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if ((this["fhirVersion"] === undefined) || (this["fhirVersion"].length === 0)) {
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
}
exports.ImplementationGuide = ImplementationGuide;
/**
 * Code Values for the ImplementationGuide.status field
 */
var ImplementationGuideStatusEnum;
(function (ImplementationGuideStatusEnum) {
    ImplementationGuideStatusEnum["DRAFT"] = "draft";
    ImplementationGuideStatusEnum["ACTIVE"] = "active";
    ImplementationGuideStatusEnum["RETIRED"] = "retired";
    ImplementationGuideStatusEnum["UNKNOWN"] = "unknown";
})(ImplementationGuideStatusEnum = exports.ImplementationGuideStatusEnum || (exports.ImplementationGuideStatusEnum = {}));
//# sourceMappingURL=ImplementationGuide.js.map