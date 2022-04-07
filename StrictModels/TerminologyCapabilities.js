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
 * Software that is covered by this terminology capability statement.  It is used when the statement describes the capabilities of a particular software version, independent of an installation.
 */
var TerminologyCapabilitiesSoftware = /** @class */ (function (_super) {
    __extends(TerminologyCapabilitiesSoftware, _super);
    /**
     * Default constructor for TerminologyCapabilitiesSoftware from an object that MAY NOT contain all required elements.
     */
    function TerminologyCapabilitiesSoftware(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["version"] !== undefined) {
            _this.version = source.version;
        }
        if (source["_version"] !== undefined) {
            _this._version = new fhirModels.Element(source._version);
        }
        return _this;
    }
    return TerminologyCapabilitiesSoftware;
}(fhirModels.BackboneElement));
export { TerminologyCapabilitiesSoftware };
/**
 * Identifies a specific implementation instance that is described by the terminology capability statement - i.e. a particular installation, rather than the capabilities of a software program.
 */
var TerminologyCapabilitiesImplementation = /** @class */ (function (_super) {
    __extends(TerminologyCapabilitiesImplementation, _super);
    /**
     * Default constructor for TerminologyCapabilitiesImplementation from an object that MAY NOT contain all required elements.
     */
    function TerminologyCapabilitiesImplementation(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["url"] !== undefined) {
            _this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            _this._url = new fhirModels.Element(source._url);
        }
        return _this;
    }
    return TerminologyCapabilitiesImplementation;
}(fhirModels.BackboneElement));
export { TerminologyCapabilitiesImplementation };
/**
 * Filter Properties supported.
 */
var TerminologyCapabilitiesCodeSystemVersionFilter = /** @class */ (function (_super) {
    __extends(TerminologyCapabilitiesCodeSystemVersionFilter, _super);
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersionFilter from an object that MAY NOT contain all required elements.
     */
    function TerminologyCapabilitiesCodeSystemVersionFilter(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.code = source.code;
        }
        if (source["_code"] !== undefined) {
            _this._code = new fhirModels.Element(source._code);
        }
        {
            _this.op = source.op.map(function (x) { return (x); });
        }
        if (source["_op"] !== undefined) {
            _this._op = source._op.map(function (x) { return new fhirModels.Element(x); });
        }
        return _this;
    }
    return TerminologyCapabilitiesCodeSystemVersionFilter;
}(fhirModels.BackboneElement));
export { TerminologyCapabilitiesCodeSystemVersionFilter };
/**
 * Language translations might not be available for all codes.
 */
var TerminologyCapabilitiesCodeSystemVersion = /** @class */ (function (_super) {
    __extends(TerminologyCapabilitiesCodeSystemVersion, _super);
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystemVersion from an object that MAY NOT contain all required elements.
     */
    function TerminologyCapabilitiesCodeSystemVersion(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = source.code;
        }
        if (source["_code"] !== undefined) {
            _this._code = new fhirModels.Element(source._code);
        }
        if (source["compositional"] !== undefined) {
            _this.compositional = source.compositional;
        }
        if (source["_compositional"] !== undefined) {
            _this._compositional = new fhirModels.Element(source._compositional);
        }
        if (source["filter"] !== undefined) {
            _this.filter = source.filter.map(function (x) { return new fhirModels.TerminologyCapabilitiesCodeSystemVersionFilter(x); });
        }
        if (source["isDefault"] !== undefined) {
            _this.isDefault = source.isDefault;
        }
        if (source["_isDefault"] !== undefined) {
            _this._isDefault = new fhirModels.Element(source._isDefault);
        }
        if (source["language"] !== undefined) {
            _this.language = source.language.map(function (x) { return (x); });
        }
        if (source["_language"] !== undefined) {
            _this._language = source._language.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["property"] !== undefined) {
            _this.property = source.property.map(function (x) { return (x); });
        }
        if (source["_property"] !== undefined) {
            _this._property = source._property.map(function (x) { return new fhirModels.Element(x); });
        }
        return _this;
    }
    return TerminologyCapabilitiesCodeSystemVersion;
}(fhirModels.BackboneElement));
export { TerminologyCapabilitiesCodeSystemVersion };
/**
 * The code system - identified by its system URL - may also be declared explicitly as a Code System Resource at /CodeSystem, but it might not be.
 */
var TerminologyCapabilitiesCodeSystem = /** @class */ (function (_super) {
    __extends(TerminologyCapabilitiesCodeSystem, _super);
    /**
     * Default constructor for TerminologyCapabilitiesCodeSystem from an object that MAY NOT contain all required elements.
     */
    function TerminologyCapabilitiesCodeSystem(source) {
        var _this = _super.call(this, source) || this;
        if (source["subsumption"] !== undefined) {
            _this.subsumption = source.subsumption;
        }
        if (source["_subsumption"] !== undefined) {
            _this._subsumption = new fhirModels.Element(source._subsumption);
        }
        if (source["uri"] !== undefined) {
            _this.uri = source.uri;
        }
        if (source["_uri"] !== undefined) {
            _this._uri = new fhirModels.Element(source._uri);
        }
        if (source["version"] !== undefined) {
            _this.version = source.version.map(function (x) { return new fhirModels.TerminologyCapabilitiesCodeSystemVersion(x); });
        }
        return _this;
    }
    return TerminologyCapabilitiesCodeSystem;
}(fhirModels.BackboneElement));
export { TerminologyCapabilitiesCodeSystem };
/**
 * Supported expansion parameter.
 */
var TerminologyCapabilitiesExpansionParameter = /** @class */ (function (_super) {
    __extends(TerminologyCapabilitiesExpansionParameter, _super);
    /**
     * Default constructor for TerminologyCapabilitiesExpansionParameter from an object that MAY NOT contain all required elements.
     */
    function TerminologyCapabilitiesExpansionParameter(source) {
        var _this = _super.call(this, source) || this;
        if (source["documentation"] !== undefined) {
            _this.documentation = source.documentation;
        }
        if (source["_documentation"] !== undefined) {
            _this._documentation = new fhirModels.Element(source._documentation);
        }
        {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        return _this;
    }
    return TerminologyCapabilitiesExpansionParameter;
}(fhirModels.BackboneElement));
export { TerminologyCapabilitiesExpansionParameter };
/**
 * Information about the [ValueSet/$expand](valueset-operation-expand.html) operation.
 */
var TerminologyCapabilitiesExpansion = /** @class */ (function (_super) {
    __extends(TerminologyCapabilitiesExpansion, _super);
    /**
     * Default constructor for TerminologyCapabilitiesExpansion from an object that MAY NOT contain all required elements.
     */
    function TerminologyCapabilitiesExpansion(source) {
        var _this = _super.call(this, source) || this;
        if (source["hierarchical"] !== undefined) {
            _this.hierarchical = source.hierarchical;
        }
        if (source["_hierarchical"] !== undefined) {
            _this._hierarchical = new fhirModels.Element(source._hierarchical);
        }
        if (source["incomplete"] !== undefined) {
            _this.incomplete = source.incomplete;
        }
        if (source["_incomplete"] !== undefined) {
            _this._incomplete = new fhirModels.Element(source._incomplete);
        }
        if (source["paging"] !== undefined) {
            _this.paging = source.paging;
        }
        if (source["_paging"] !== undefined) {
            _this._paging = new fhirModels.Element(source._paging);
        }
        if (source["parameter"] !== undefined) {
            _this.parameter = source.parameter.map(function (x) { return new fhirModels.TerminologyCapabilitiesExpansionParameter(x); });
        }
        if (source["textFilter"] !== undefined) {
            _this.textFilter = source.textFilter;
        }
        if (source["_textFilter"] !== undefined) {
            _this._textFilter = new fhirModels.Element(source._textFilter);
        }
        return _this;
    }
    return TerminologyCapabilitiesExpansion;
}(fhirModels.BackboneElement));
export { TerminologyCapabilitiesExpansion };
/**
 * Information about the [ValueSet/$validate-code](valueset-operation-validate-code.html) operation.
 */
var TerminologyCapabilitiesValidateCode = /** @class */ (function (_super) {
    __extends(TerminologyCapabilitiesValidateCode, _super);
    /**
     * Default constructor for TerminologyCapabilitiesValidateCode from an object that MAY NOT contain all required elements.
     */
    function TerminologyCapabilitiesValidateCode(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.translations = source.translations;
        }
        if (source["_translations"] !== undefined) {
            _this._translations = new fhirModels.Element(source._translations);
        }
        return _this;
    }
    return TerminologyCapabilitiesValidateCode;
}(fhirModels.BackboneElement));
export { TerminologyCapabilitiesValidateCode };
/**
 * Information about the [ConceptMap/$translate](conceptmap-operation-translate.html) operation.
 */
var TerminologyCapabilitiesTranslation = /** @class */ (function (_super) {
    __extends(TerminologyCapabilitiesTranslation, _super);
    /**
     * Default constructor for TerminologyCapabilitiesTranslation from an object that MAY NOT contain all required elements.
     */
    function TerminologyCapabilitiesTranslation(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.needsMap = source.needsMap;
        }
        if (source["_needsMap"] !== undefined) {
            _this._needsMap = new fhirModels.Element(source._needsMap);
        }
        return _this;
    }
    return TerminologyCapabilitiesTranslation;
}(fhirModels.BackboneElement));
export { TerminologyCapabilitiesTranslation };
/**
 * Whether the $closure operation is supported.
 */
var TerminologyCapabilitiesClosure = /** @class */ (function (_super) {
    __extends(TerminologyCapabilitiesClosure, _super);
    /**
     * Default constructor for TerminologyCapabilitiesClosure from an object that MAY NOT contain all required elements.
     */
    function TerminologyCapabilitiesClosure(source) {
        var _this = _super.call(this, source) || this;
        if (source["translation"] !== undefined) {
            _this.translation = source.translation;
        }
        if (source["_translation"] !== undefined) {
            _this._translation = new fhirModels.Element(source._translation);
        }
        return _this;
    }
    return TerminologyCapabilitiesClosure;
}(fhirModels.BackboneElement));
export { TerminologyCapabilitiesClosure };
/**
 * A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.
 */
var TerminologyCapabilities = /** @class */ (function (_super) {
    __extends(TerminologyCapabilities, _super);
    /**
     * Default constructor for TerminologyCapabilities from an object that MAY NOT contain all required elements.
     */
    function TerminologyCapabilities(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "TerminologyCapabilities";
        if ((source['resourceType'] !== "TerminologyCapabilities") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a TerminologyCapabilities';
        }
        if (source["closure"] !== undefined) {
            _this.closure = new fhirModels.TerminologyCapabilitiesClosure(source.closure);
        }
        if (source["codeSearch"] !== undefined) {
            _this.codeSearch = source.codeSearch;
        }
        if (source["_codeSearch"] !== undefined) {
            _this._codeSearch = new fhirModels.Element(source._codeSearch);
        }
        if (source["codeSystem"] !== undefined) {
            _this.codeSystem = source.codeSystem.map(function (x) { return new fhirModels.TerminologyCapabilitiesCodeSystem(x); });
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
        {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["expansion"] !== undefined) {
            _this.expansion = new fhirModels.TerminologyCapabilitiesExpansion(source.expansion);
        }
        if (source["experimental"] !== undefined) {
            _this.experimental = source.experimental;
        }
        if (source["_experimental"] !== undefined) {
            _this._experimental = new fhirModels.Element(source._experimental);
        }
        if (source["implementation"] !== undefined) {
            _this.implementation = new fhirModels.TerminologyCapabilitiesImplementation(source.implementation);
        }
        if (source["jurisdiction"] !== undefined) {
            _this.jurisdiction = source.jurisdiction.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        {
            _this.kind = source.kind;
        }
        if (source["_kind"] !== undefined) {
            _this._kind = new fhirModels.Element(source._kind);
        }
        if (source["lockedDate"] !== undefined) {
            _this.lockedDate = source.lockedDate;
        }
        if (source["_lockedDate"] !== undefined) {
            _this._lockedDate = new fhirModels.Element(source._lockedDate);
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["publisher"] !== undefined) {
            _this.publisher = source.publisher;
        }
        if (source["_publisher"] !== undefined) {
            _this._publisher = new fhirModels.Element(source._publisher);
        }
        if (source["purpose"] !== undefined) {
            _this.purpose = source.purpose;
        }
        if (source["_purpose"] !== undefined) {
            _this._purpose = new fhirModels.Element(source._purpose);
        }
        if (source["software"] !== undefined) {
            _this.software = new fhirModels.TerminologyCapabilitiesSoftware(source.software);
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
        if (source["translation"] !== undefined) {
            _this.translation = new fhirModels.TerminologyCapabilitiesTranslation(source.translation);
        }
        if (source["url"] !== undefined) {
            _this.url = source.url;
        }
        if (source["_url"] !== undefined) {
            _this._url = new fhirModels.Element(source._url);
        }
        if (source["useContext"] !== undefined) {
            _this.useContext = source.useContext.map(function (x) { return new fhirModels.UsageContext(x); });
        }
        if (source["validateCode"] !== undefined) {
            _this.validateCode = new fhirModels.TerminologyCapabilitiesValidateCode(source.validateCode);
        }
        if (source["version"] !== undefined) {
            _this.version = source.version;
        }
        if (source["_version"] !== undefined) {
            _this._version = new fhirModels.Element(source._version);
        }
        return _this;
    }
    return TerminologyCapabilities;
}(fhirModels.DomainResource));
export { TerminologyCapabilities };
/**
 * Code Values for the TerminologyCapabilities.codeSearch field
 */
export var TerminologyCapabilitiesCodeSearchEnum;
(function (TerminologyCapabilitiesCodeSearchEnum) {
    TerminologyCapabilitiesCodeSearchEnum["EXPLICIT"] = "explicit";
    TerminologyCapabilitiesCodeSearchEnum["ALL"] = "all";
})(TerminologyCapabilitiesCodeSearchEnum || (TerminologyCapabilitiesCodeSearchEnum = {}));
/**
 * Code Values for the TerminologyCapabilities.kind field
 */
export var TerminologyCapabilitiesKindEnum;
(function (TerminologyCapabilitiesKindEnum) {
    TerminologyCapabilitiesKindEnum["INSTANCE"] = "instance";
    TerminologyCapabilitiesKindEnum["CAPABILITY"] = "capability";
    TerminologyCapabilitiesKindEnum["REQUIREMENTS"] = "requirements";
})(TerminologyCapabilitiesKindEnum || (TerminologyCapabilitiesKindEnum = {}));
/**
 * Code Values for the TerminologyCapabilities.status field
 */
export var TerminologyCapabilitiesStatusEnum;
(function (TerminologyCapabilitiesStatusEnum) {
    TerminologyCapabilitiesStatusEnum["DRAFT"] = "draft";
    TerminologyCapabilitiesStatusEnum["ACTIVE"] = "active";
    TerminologyCapabilitiesStatusEnum["RETIRED"] = "retired";
    TerminologyCapabilitiesStatusEnum["UNKNOWN"] = "unknown";
})(TerminologyCapabilitiesStatusEnum || (TerminologyCapabilitiesStatusEnum = {}));
