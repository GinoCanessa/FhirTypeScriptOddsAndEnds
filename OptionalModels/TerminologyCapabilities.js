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
exports.TerminologyCapabilitiesStatusEnum = exports.TerminologyCapabilitiesKindEnum = exports.TerminologyCapabilitiesCodeSearchEnum = exports.TerminologyCapabilities = exports.TerminologyCapabilitiesClosure = exports.TerminologyCapabilitiesTranslation = exports.TerminologyCapabilitiesValidateCode = exports.TerminologyCapabilitiesExpansion = exports.TerminologyCapabilitiesExpansionParameter = exports.TerminologyCapabilitiesCodeSystem = exports.TerminologyCapabilitiesCodeSystemVersion = exports.TerminologyCapabilitiesCodeSystemVersionFilter = exports.TerminologyCapabilitiesImplementation = exports.TerminologyCapabilitiesSoftware = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
 */
class TerminologyCapabilitiesSoftware extends fhirModels.BackboneElement {
    /**
     * Default constructor for TerminologyCapabilitiesSoftware from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["version"] !== undefined) {
            this.version = source.version;
        }
        if (source["_version"] !== undefined) {
            this._version = new fhirModels.Element(source._version);
        }
    }
    /**
     * Factory function to create a TerminologyCapabilitiesSoftware from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new TerminologyCapabilitiesSoftware(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TerminologyCapabilitiesSoftware is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current TerminologyCapabilitiesSoftware contains all required elements.
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
exports.TerminologyCapabilitiesSoftware = TerminologyCapabilitiesSoftware;
/**
 * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
class TerminologyCapabilitiesImplementation extends fhirModels.BackboneElement {
    /**
     * Default constructor for TerminologyCapabilitiesImplementation from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["url"] !== undefined) {
            this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            this._url = new fhirModels.Element(source._url);
        }
    }
    /**
     * Factory function to create a TerminologyCapabilitiesImplementation from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new TerminologyCapabilitiesImplementation(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TerminologyCapabilitiesImplementation is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current TerminologyCapabilitiesImplementation contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["description"] === undefined) {
            missingElements.push("description");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.TerminologyCapabilitiesImplementation = TerminologyCapabilitiesImplementation;
/**
 * Filter Properties supported.
 */
class TerminologyCapabilitiesCodeSystemVersionFilter extends fhirModels.BackboneElement {
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersionFilter from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["code"] !== undefined) {
            this.code = source.code;
        }
        if (source["_code"] !== undefined) {
            this._code = new fhirModels.Element(source._code);
        }
        if (source["op"] !== undefined) {
            this.op = source.op.map((x) => (x));
        }
        if (source["_op"] !== undefined) {
            this._op = source._op.map((x) => new fhirModels.Element(x));
        }
    }
    /**
     * Factory function to create a TerminologyCapabilitiesCodeSystemVersionFilter from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new TerminologyCapabilitiesCodeSystemVersionFilter(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TerminologyCapabilitiesCodeSystemVersionFilter is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current TerminologyCapabilitiesCodeSystemVersionFilter contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if ((this["op"] === undefined) || (this["op"].length === 0)) {
            missingElements.push("op");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.TerminologyCapabilitiesCodeSystemVersionFilter = TerminologyCapabilitiesCodeSystemVersionFilter;
/**
 * Language translations might not be available for all codes.
 */
class TerminologyCapabilitiesCodeSystemVersion extends fhirModels.BackboneElement {
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersion from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["code"] !== undefined) {
            this.code = source.code;
        }
        if (source["_code"] !== undefined) {
            this._code = new fhirModels.Element(source._code);
        }
        if (source["compositional"] !== undefined) {
            this.compositional = source.compositional;
        }
        if (source["_compositional"] !== undefined) {
            this._compositional = new fhirModels.Element(source._compositional);
        }
        if (source["filter"] !== undefined) {
            this.filter = source.filter.map((x) => new fhirModels.TerminologyCapabilitiesCodeSystemVersionFilter(x));
        }
        if (source["isDefault"] !== undefined) {
            this.isDefault = source.isDefault;
        }
        if (source["_isDefault"] !== undefined) {
            this._isDefault = new fhirModels.Element(source._isDefault);
        }
        if (source["language"] !== undefined) {
            this.language = source.language.map((x) => (x));
        }
        if (source["_language"] !== undefined) {
            this._language = source._language.map((x) => new fhirModels.Element(x));
        }
        if (source["property"] !== undefined) {
            this.property = source.property.map((x) => (x));
        }
        if (source["_property"] !== undefined) {
            this._property = source._property.map((x) => new fhirModels.Element(x));
        }
    }
    /**
     * Factory function to create a TerminologyCapabilitiesCodeSystemVersion from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new TerminologyCapabilitiesCodeSystemVersion(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TerminologyCapabilitiesCodeSystemVersion is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current TerminologyCapabilitiesCodeSystemVersion contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.TerminologyCapabilitiesCodeSystemVersion = TerminologyCapabilitiesCodeSystemVersion;
/**
 * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
 */
class TerminologyCapabilitiesCodeSystem extends fhirModels.BackboneElement {
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystem from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["subsumption"] !== undefined) {
            this.subsumption = source.subsumption;
        }
        if (source["_subsumption"] !== undefined) {
            this._subsumption = new fhirModels.Element(source._subsumption);
        }
        if (source["uri"] !== undefined) {
            this.uri = source.uri;
        }
        if (source["_uri"] !== undefined) {
            this._uri = new fhirModels.Element(source._uri);
        }
        if (source["version"] !== undefined) {
            this.version = source.version.map((x) => new fhirModels.TerminologyCapabilitiesCodeSystemVersion(x));
        }
    }
    /**
     * Factory function to create a TerminologyCapabilitiesCodeSystem from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new TerminologyCapabilitiesCodeSystem(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TerminologyCapabilitiesCodeSystem is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current TerminologyCapabilitiesCodeSystem contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.TerminologyCapabilitiesCodeSystem = TerminologyCapabilitiesCodeSystem;
/**
 * Supported expansion parameter.
 */
class TerminologyCapabilitiesExpansionParameter extends fhirModels.BackboneElement {
    /**
     * Default constructor for TerminologyCapabilitiesExpansionParameter from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["documentation"] !== undefined) {
            this.documentation = source.documentation;
        }
        if (source["_documentation"] !== undefined) {
            this._documentation = new fhirModels.Element(source._documentation);
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
    }
    /**
     * Factory function to create a TerminologyCapabilitiesExpansionParameter from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new TerminologyCapabilitiesExpansionParameter(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TerminologyCapabilitiesExpansionParameter is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current TerminologyCapabilitiesExpansionParameter contains all required elements.
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
exports.TerminologyCapabilitiesExpansionParameter = TerminologyCapabilitiesExpansionParameter;
/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
 */
class TerminologyCapabilitiesExpansion extends fhirModels.BackboneElement {
    /**
     * Default constructor for TerminologyCapabilitiesExpansion from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["hierarchical"] !== undefined) {
            this.hierarchical = source.hierarchical;
        }
        if (source["_hierarchical"] !== undefined) {
            this._hierarchical = new fhirModels.Element(source._hierarchical);
        }
        if (source["incomplete"] !== undefined) {
            this.incomplete = source.incomplete;
        }
        if (source["_incomplete"] !== undefined) {
            this._incomplete = new fhirModels.Element(source._incomplete);
        }
        if (source["paging"] !== undefined) {
            this.paging = source.paging;
        }
        if (source["_paging"] !== undefined) {
            this._paging = new fhirModels.Element(source._paging);
        }
        if (source["parameter"] !== undefined) {
            this.parameter = source.parameter.map((x) => new fhirModels.TerminologyCapabilitiesExpansionParameter(x));
        }
        if (source["textFilter"] !== undefined) {
            this.textFilter = source.textFilter;
        }
        if (source["_textFilter"] !== undefined) {
            this._textFilter = new fhirModels.Element(source._textFilter);
        }
    }
    /**
     * Factory function to create a TerminologyCapabilitiesExpansion from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new TerminologyCapabilitiesExpansion(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TerminologyCapabilitiesExpansion is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current TerminologyCapabilitiesExpansion contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.TerminologyCapabilitiesExpansion = TerminologyCapabilitiesExpansion;
/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
 */
class TerminologyCapabilitiesValidateCode extends fhirModels.BackboneElement {
    /**
     * Default constructor for TerminologyCapabilitiesValidateCode from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["translations"] !== undefined) {
            this.translations = source.translations;
        }
        if (source["_translations"] !== undefined) {
            this._translations = new fhirModels.Element(source._translations);
        }
    }
    /**
     * Factory function to create a TerminologyCapabilitiesValidateCode from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new TerminologyCapabilitiesValidateCode(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TerminologyCapabilitiesValidateCode is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current TerminologyCapabilitiesValidateCode contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["translations"] === undefined) {
            missingElements.push("translations");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.TerminologyCapabilitiesValidateCode = TerminologyCapabilitiesValidateCode;
/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
 */
class TerminologyCapabilitiesTranslation extends fhirModels.BackboneElement {
    /**
     * Default constructor for TerminologyCapabilitiesTranslation from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["needsMap"] !== undefined) {
            this.needsMap = source.needsMap;
        }
        if (source["_needsMap"] !== undefined) {
            this._needsMap = new fhirModels.Element(source._needsMap);
        }
    }
    /**
     * Factory function to create a TerminologyCapabilitiesTranslation from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new TerminologyCapabilitiesTranslation(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TerminologyCapabilitiesTranslation is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current TerminologyCapabilitiesTranslation contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["needsMap"] === undefined) {
            missingElements.push("needsMap");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.TerminologyCapabilitiesTranslation = TerminologyCapabilitiesTranslation;
/**
 * Whether the $closure operation is supported.
 */
class TerminologyCapabilitiesClosure extends fhirModels.BackboneElement {
    /**
     * Default constructor for TerminologyCapabilitiesClosure from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["translation"] !== undefined) {
            this.translation = source.translation;
        }
        if (source["_translation"] !== undefined) {
            this._translation = new fhirModels.Element(source._translation);
        }
    }
    /**
     * Factory function to create a TerminologyCapabilitiesClosure from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new TerminologyCapabilitiesClosure(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TerminologyCapabilitiesClosure is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current TerminologyCapabilitiesClosure contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.TerminologyCapabilitiesClosure = TerminologyCapabilitiesClosure;
/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
class TerminologyCapabilities extends fhirModels.DomainResource {
    /**
     * Default constructor for TerminologyCapabilities from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "TerminologyCapabilities";
        if ((source['resourceType'] !== "TerminologyCapabilities") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a TerminologyCapabilities';
        }
        if (source["closure"] !== undefined) {
            this.closure = new fhirModels.TerminologyCapabilitiesClosure(source.closure);
        }
        if (source["codeSearch"] !== undefined) {
            this.codeSearch = source.codeSearch;
        }
        if (source["_codeSearch"] !== undefined) {
            this._codeSearch = new fhirModels.Element(source._codeSearch);
        }
        if (source["codeSystem"] !== undefined) {
            this.codeSystem = source.codeSystem.map((x) => new fhirModels.TerminologyCapabilitiesCodeSystem(x));
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
        if (source["description"] !== undefined) {
            this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            this._description = new fhirModels.Element(source._description);
        }
        if (source["expansion"] !== undefined) {
            this.expansion = new fhirModels.TerminologyCapabilitiesExpansion(source.expansion);
        }
        if (source["experimental"] !== undefined) {
            this.experimental = source.experimental;
        }
        if (source["_experimental"] !== undefined) {
            this._experimental = new fhirModels.Element(source._experimental);
        }
        if (source["implementation"] !== undefined) {
            this.implementation = new fhirModels.TerminologyCapabilitiesImplementation(source.implementation);
        }
        if (source["jurisdiction"] !== undefined) {
            this.jurisdiction = source.jurisdiction.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["kind"] !== undefined) {
            this.kind = source.kind;
        }
        if (source["_kind"] !== undefined) {
            this._kind = new fhirModels.Element(source._kind);
        }
        if (source["lockedDate"] !== undefined) {
            this.lockedDate = source.lockedDate;
        }
        if (source["_lockedDate"] !== undefined) {
            this._lockedDate = new fhirModels.Element(source._lockedDate);
        }
        if (source["name"] !== undefined) {
            this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            this._name = new fhirModels.Element(source._name);
        }
        if (source["publisher"] !== undefined) {
            this.publisher = source.publisher;
        }
        if (source["_publisher"] !== undefined) {
            this._publisher = new fhirModels.Element(source._publisher);
        }
        if (source["purpose"] !== undefined) {
            this.purpose = source.purpose;
        }
        if (source["_purpose"] !== undefined) {
            this._purpose = new fhirModels.Element(source._purpose);
        }
        if (source["software"] !== undefined) {
            this.software = new fhirModels.TerminologyCapabilitiesSoftware(source.software);
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
        if (source["translation"] !== undefined) {
            this.translation = new fhirModels.TerminologyCapabilitiesTranslation(source.translation);
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
        if (source["validateCode"] !== undefined) {
            this.validateCode = new fhirModels.TerminologyCapabilitiesValidateCode(source.validateCode);
        }
        if (source["version"] !== undefined) {
            this.version = source.version;
        }
        if (source["_version"] !== undefined) {
            this._version = new fhirModels.Element(source._version);
        }
    }
    /**
     * Factory function to create a TerminologyCapabilities from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new TerminologyCapabilities(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `TerminologyCapabilities is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current TerminologyCapabilities contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["date"] === undefined) {
            missingElements.push("date");
        }
        if (this["kind"] === undefined) {
            missingElements.push("kind");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.TerminologyCapabilities = TerminologyCapabilities;
/**
 * Code Values for the TerminologyCapabilities.codeSearch field
 */
var TerminologyCapabilitiesCodeSearchEnum;
(function (TerminologyCapabilitiesCodeSearchEnum) {
    TerminologyCapabilitiesCodeSearchEnum["EXPLICIT"] = "explicit";
    TerminologyCapabilitiesCodeSearchEnum["ALL"] = "all";
})(TerminologyCapabilitiesCodeSearchEnum = exports.TerminologyCapabilitiesCodeSearchEnum || (exports.TerminologyCapabilitiesCodeSearchEnum = {}));
/**
 * Code Values for the TerminologyCapabilities.kind field
 */
var TerminologyCapabilitiesKindEnum;
(function (TerminologyCapabilitiesKindEnum) {
    TerminologyCapabilitiesKindEnum["INSTANCE"] = "instance";
    TerminologyCapabilitiesKindEnum["CAPABILITY"] = "capability";
    TerminologyCapabilitiesKindEnum["REQUIREMENTS"] = "requirements";
})(TerminologyCapabilitiesKindEnum = exports.TerminologyCapabilitiesKindEnum || (exports.TerminologyCapabilitiesKindEnum = {}));
/**
 * Code Values for the TerminologyCapabilities.status field
 */
var TerminologyCapabilitiesStatusEnum;
(function (TerminologyCapabilitiesStatusEnum) {
    TerminologyCapabilitiesStatusEnum["DRAFT"] = "draft";
    TerminologyCapabilitiesStatusEnum["ACTIVE"] = "active";
    TerminologyCapabilitiesStatusEnum["RETIRED"] = "retired";
    TerminologyCapabilitiesStatusEnum["UNKNOWN"] = "unknown";
})(TerminologyCapabilitiesStatusEnum = exports.TerminologyCapabilitiesStatusEnum || (exports.TerminologyCapabilitiesStatusEnum = {}));
//# sourceMappingURL=TerminologyCapabilities.js.map