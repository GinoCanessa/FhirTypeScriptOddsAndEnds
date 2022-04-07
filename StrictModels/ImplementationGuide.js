var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../strictmodels';
/**
 * Another implementation guide that this implementation depends on. Typically, an implementation guide uses value sets, profiles etc.defined in other implementation guides.
 */
var ImplementationGuideDependsOn = /** @class */ (function (_super) {
    __extends(ImplementationGuideDependsOn, _super);
    /**
     * Default constructor for ImplementationGuideDependsOn from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuideDependsOn(source) {
        var _this = _super.call(this, source) || this;
        if (source["packageId"] !== undefined) {
            _this.packageId = source.packageId;
        }
        if (source["_packageId"] !== undefined) {
            _this._packageId = new fhirModels.Element(source._packageId);
        }
        {
            _this.uri = source.uri;
        }
        if (source["_uri"] !== undefined) {
            _this._uri = new fhirModels.Element(source._uri);
        }
        if (source["version"] !== undefined) {
            _this.version = source.version;
        }
        if (source["_version"] !== undefined) {
            _this._version = new fhirModels.Element(source._version);
        }
        return _this;
    }
    return ImplementationGuideDependsOn;
}(fhirModels.BackboneElement));
export { ImplementationGuideDependsOn };
/**
 * See [Default Profiles](implementationguide.html#default) for a discussion of which resources are 'covered' by an implementation guide.
 */
var ImplementationGuideGlobal = /** @class */ (function (_super) {
    __extends(ImplementationGuideGlobal, _super);
    /**
     * Default constructor for ImplementationGuideGlobal from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuideGlobal(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.profile = source.profile;
        }
        if (source["_profile"] !== undefined) {
            _this._profile = new fhirModels.Element(source._profile);
        }
        {
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
        }
        return _this;
    }
    return ImplementationGuideGlobal;
}(fhirModels.BackboneElement));
export { ImplementationGuideGlobal };
/**
 * Groupings are arbitrary sub-divisions of content. Typically, they are used to help build Table of Contents automatically.
 */
var ImplementationGuideDefinitionGrouping = /** @class */ (function (_super) {
    __extends(ImplementationGuideDefinitionGrouping, _super);
    /**
     * Default constructor for ImplementationGuideDefinitionGrouping from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuideDefinitionGrouping(source) {
        var _this = _super.call(this, source) || this;
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        return _this;
    }
    return ImplementationGuideDefinitionGrouping;
}(fhirModels.BackboneElement));
export { ImplementationGuideDefinitionGrouping };
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
var ImplementationGuideDefinitionResource = /** @class */ (function (_super) {
    __extends(ImplementationGuideDefinitionResource, _super);
    /**
     * Default constructor for ImplementationGuideDefinitionResource from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuideDefinitionResource(source) {
        var _this = _super.call(this, source) || this;
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["exampleBoolean"] !== undefined) {
            _this.exampleBoolean = source.exampleBoolean;
        }
        if (source["_exampleBoolean"] !== undefined) {
            _this._exampleBoolean = new fhirModels.Element(source._exampleBoolean);
        }
        if (source["exampleCanonical"] !== undefined) {
            _this.exampleCanonical = source.exampleCanonical;
        }
        if (source["_exampleCanonical"] !== undefined) {
            _this._exampleCanonical = new fhirModels.Element(source._exampleCanonical);
        }
        if (source["fhirVersion"] !== undefined) {
            _this.fhirVersion = source.fhirVersion.map(function (x) { return (x); });
        }
        if (source["_fhirVersion"] !== undefined) {
            _this._fhirVersion = source._fhirVersion.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["groupingId"] !== undefined) {
            _this.groupingId = source.groupingId;
        }
        if (source["_groupingId"] !== undefined) {
            _this._groupingId = new fhirModels.Element(source._groupingId);
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        {
            _this.reference = new fhirModels.Reference(source.reference);
        }
        return _this;
    }
    return ImplementationGuideDefinitionResource;
}(fhirModels.BackboneElement));
export { ImplementationGuideDefinitionResource };
/**
 * Pages automatically become sections if they have sub-pages. By convention, the home page is called index.html.
 */
var ImplementationGuideDefinitionPage = /** @class */ (function (_super) {
    __extends(ImplementationGuideDefinitionPage, _super);
    /**
     * Default constructor for ImplementationGuideDefinitionPage from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuideDefinitionPage(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.generation = source.generation;
        }
        if (source["_generation"] !== undefined) {
            _this._generation = new fhirModels.Element(source._generation);
        }
        if (source["nameUrl"] !== undefined) {
            _this.nameUrl = source.nameUrl;
        }
        if (source["_nameUrl"] !== undefined) {
            _this._nameUrl = new fhirModels.Element(source._nameUrl);
        }
        if (source["nameReference"] !== undefined) {
            _this.nameReference = new fhirModels.Reference(source.nameReference);
        }
        if (source["page"] !== undefined) {
            _this.page = source.page.map(function (x) { return new fhirModels.ImplementationGuideDefinitionPage(x); });
        }
        {
            _this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            _this._title = new fhirModels.Element(source._title);
        }
        return _this;
    }
    return ImplementationGuideDefinitionPage;
}(fhirModels.BackboneElement));
export { ImplementationGuideDefinitionPage };
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
 * Defines how IG is built by tools.
 */
var ImplementationGuideDefinitionParameter = /** @class */ (function (_super) {
    __extends(ImplementationGuideDefinitionParameter, _super);
    /**
     * Default constructor for ImplementationGuideDefinitionParameter from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuideDefinitionParameter(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.code = source.code;
        }
        if (source["_code"] !== undefined) {
            _this._code = new fhirModels.Element(source._code);
        }
        {
            _this.value = source.value;
        }
        if (source["_value"] !== undefined) {
            _this._value = new fhirModels.Element(source._value);
        }
        return _this;
    }
    return ImplementationGuideDefinitionParameter;
}(fhirModels.BackboneElement));
export { ImplementationGuideDefinitionParameter };
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
 * A template for building resources.
 */
var ImplementationGuideDefinitionTemplate = /** @class */ (function (_super) {
    __extends(ImplementationGuideDefinitionTemplate, _super);
    /**
     * Default constructor for ImplementationGuideDefinitionTemplate from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuideDefinitionTemplate(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.code = source.code;
        }
        if (source["_code"] !== undefined) {
            _this._code = new fhirModels.Element(source._code);
        }
        if (source["scope"] !== undefined) {
            _this.scope = source.scope;
        }
        if (source["_scope"] !== undefined) {
            _this._scope = new fhirModels.Element(source._scope);
        }
        {
            _this.source = source.source;
        }
        if (source["_source"] !== undefined) {
            _this._source = new fhirModels.Element(source._source);
        }
        return _this;
    }
    return ImplementationGuideDefinitionTemplate;
}(fhirModels.BackboneElement));
export { ImplementationGuideDefinitionTemplate };
/**
 * Principally, this consists of information abuot source resource and file locations, and build parameters and templates.
 */
var ImplementationGuideDefinition = /** @class */ (function (_super) {
    __extends(ImplementationGuideDefinition, _super);
    /**
     * Default constructor for ImplementationGuideDefinition from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuideDefinition(source) {
        var _this = _super.call(this, source) || this;
        if (source["grouping"] !== undefined) {
            _this.grouping = source.grouping.map(function (x) { return new fhirModels.ImplementationGuideDefinitionGrouping(x); });
        }
        if (source["page"] !== undefined) {
            _this.page = new fhirModels.ImplementationGuideDefinitionPage(source.page);
        }
        if (source["parameter"] !== undefined) {
            _this.parameter = source.parameter.map(function (x) { return new fhirModels.ImplementationGuideDefinitionParameter(x); });
        }
        {
            _this.resource = source.resource.map(function (x) { return new fhirModels.ImplementationGuideDefinitionResource(x); });
        }
        if (source["template"] !== undefined) {
            _this.template = source.template.map(function (x) { return new fhirModels.ImplementationGuideDefinitionTemplate(x); });
        }
        return _this;
    }
    return ImplementationGuideDefinition;
}(fhirModels.BackboneElement));
export { ImplementationGuideDefinition };
/**
 * A resource that is part of the implementation guide. Conformance resources (value set, structure definition, capability statements etc.) are obvious candidates for inclusion, but any kind of resource can be included as an example resource.
 */
var ImplementationGuideManifestResource = /** @class */ (function (_super) {
    __extends(ImplementationGuideManifestResource, _super);
    /**
     * Default constructor for ImplementationGuideManifestResource from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuideManifestResource(source) {
        var _this = _super.call(this, source) || this;
        if (source["exampleBoolean"] !== undefined) {
            _this.exampleBoolean = source.exampleBoolean;
        }
        if (source["_exampleBoolean"] !== undefined) {
            _this._exampleBoolean = new fhirModels.Element(source._exampleBoolean);
        }
        if (source["exampleCanonical"] !== undefined) {
            _this.exampleCanonical = source.exampleCanonical;
        }
        if (source["_exampleCanonical"] !== undefined) {
            _this._exampleCanonical = new fhirModels.Element(source._exampleCanonical);
        }
        {
            _this.reference = new fhirModels.Reference(source.reference);
        }
        if (source["relativePath"] !== undefined) {
            _this.relativePath = source.relativePath;
        }
        if (source["_relativePath"] !== undefined) {
            _this._relativePath = new fhirModels.Element(source._relativePath);
        }
        return _this;
    }
    return ImplementationGuideManifestResource;
}(fhirModels.BackboneElement));
export { ImplementationGuideManifestResource };
/**
 * Information about a page within the IG.
 */
var ImplementationGuideManifestPage = /** @class */ (function (_super) {
    __extends(ImplementationGuideManifestPage, _super);
    /**
     * Default constructor for ImplementationGuideManifestPage from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuideManifestPage(source) {
        var _this = _super.call(this, source) || this;
        if (source["anchor"] !== undefined) {
            _this.anchor = source.anchor.map(function (x) { return (x); });
        }
        if (source["_anchor"] !== undefined) {
            _this._anchor = source._anchor.map(function (x) { return new fhirModels.Element(x); });
        }
        {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["title"] !== undefined) {
            _this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            _this._title = new fhirModels.Element(source._title);
        }
        return _this;
    }
    return ImplementationGuideManifestPage;
}(fhirModels.BackboneElement));
export { ImplementationGuideManifestPage };
/**
 * Information about an assembled implementation guide, created by the publication tooling.
 */
var ImplementationGuideManifest = /** @class */ (function (_super) {
    __extends(ImplementationGuideManifest, _super);
    /**
     * Default constructor for ImplementationGuideManifest from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuideManifest(source) {
        var _this = _super.call(this, source) || this;
        if (source["image"] !== undefined) {
            _this.image = source.image.map(function (x) { return (x); });
        }
        if (source["_image"] !== undefined) {
            _this._image = source._image.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["other"] !== undefined) {
            _this.other = source.other.map(function (x) { return (x); });
        }
        if (source["_other"] !== undefined) {
            _this._other = source._other.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["page"] !== undefined) {
            _this.page = source.page.map(function (x) { return new fhirModels.ImplementationGuideManifestPage(x); });
        }
        if (source["rendering"] !== undefined) {
            _this.rendering = source.rendering;
        }
        if (source["_rendering"] !== undefined) {
            _this._rendering = new fhirModels.Element(source._rendering);
        }
        {
            _this.resource = source.resource.map(function (x) { return new fhirModels.ImplementationGuideManifestResource(x); });
        }
        return _this;
    }
    return ImplementationGuideManifest;
}(fhirModels.BackboneElement));
export { ImplementationGuideManifest };
/**
 * A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.
 */
var ImplementationGuide = /** @class */ (function (_super) {
    __extends(ImplementationGuide, _super);
    /**
     * Default constructor for ImplementationGuide from an object that MAY NOT contain all required elements.
     */
    function ImplementationGuide(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "ImplementationGuide";
        if ((source['resourceType'] !== "ImplementationGuide") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a ImplementationGuide';
        }
        if (source["contact"] !== undefined) {
            _this.contact = source.contact.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["copyright"] !== undefined) {
            _this.copyright = source.copyright;
        }
        if (source["_copyright"] !== undefined) {
            _this._copyright = new fhirModels.Element(source._copyright);
        }
        if (source["date"] !== undefined) {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["definition"] !== undefined) {
            _this.definition = new fhirModels.ImplementationGuideDefinition(source.definition);
        }
        if (source["dependsOn"] !== undefined) {
            _this.dependsOn = source.dependsOn.map(function (x) { return new fhirModels.ImplementationGuideDependsOn(x); });
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["experimental"] !== undefined) {
            _this.experimental = source.experimental;
        }
        if (source["_experimental"] !== undefined) {
            _this._experimental = new fhirModels.Element(source._experimental);
        }
        {
            _this.fhirVersion = source.fhirVersion.map(function (x) { return (x); });
        }
        if (source["_fhirVersion"] !== undefined) {
            _this._fhirVersion = source._fhirVersion.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["global"] !== undefined) {
            _this.global = source.global.map(function (x) { return new fhirModels.ImplementationGuideGlobal(x); });
        }
        if (source["jurisdiction"] !== undefined) {
            _this.jurisdiction = source.jurisdiction.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["license"] !== undefined) {
            _this.license = source.license;
        }
        if (source["_license"] !== undefined) {
            _this._license = new fhirModels.Element(source._license);
        }
        if (source["manifest"] !== undefined) {
            _this.manifest = new fhirModels.ImplementationGuideManifest(source.manifest);
        }
        {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        {
            _this.packageId = source.packageId;
        }
        if (source["_packageId"] !== undefined) {
            _this._packageId = new fhirModels.Element(source._packageId);
        }
        if (source["publisher"] !== undefined) {
            _this.publisher = source.publisher;
        }
        if (source["_publisher"] !== undefined) {
            _this._publisher = new fhirModels.Element(source._publisher);
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["title"] !== undefined) {
            _this.title = source.title;
        }
        if (source["_title"] !== undefined) {
            _this._title = new fhirModels.Element(source._title);
        }
        {
            _this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            _this._url = new fhirModels.Element(source._url);
        }
        if (source["useContext"] !== undefined) {
            _this.useContext = source.useContext.map(function (x) { return new fhirModels.UsageContext(x); });
        }
        if (source["version"] !== undefined) {
            _this.version = source.version;
        }
        if (source["_version"] !== undefined) {
            _this._version = new fhirModels.Element(source._version);
        }
        return _this;
    }
    return ImplementationGuide;
}(fhirModels.DomainResource));
export { ImplementationGuide };
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