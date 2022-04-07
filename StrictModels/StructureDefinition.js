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
 * An external specification that the content is mapped to.
 */
var StructureDefinitionMapping = /** @class */ (function (_super) {
    __extends(StructureDefinitionMapping, _super);
    /**
     * Default constructor for StructureDefinitionMapping from an object that MAY NOT contain all required elements.
     */
    function StructureDefinitionMapping(source) {
        var _this = _super.call(this, source) || this;
        if (source["comment"] !== undefined) {
            _this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            _this._comment = new fhirModels.Element(source._comment);
        }
        {
            _this.identity = source.identity;
        }
        if (source["_identity"] !== undefined) {
            _this._identity = new fhirModels.Element(source._identity);
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["uri"] !== undefined) {
            _this.uri = source.uri;
        }
        if (source["_uri"] !== undefined) {
            _this._uri = new fhirModels.Element(source._uri);
        }
        return _this;
    }
    return StructureDefinitionMapping;
}(fhirModels.BackboneElement));
export { StructureDefinitionMapping };
/**
 * Identifies the types of resource or data type elements to which the extension can be applied.
 */
var StructureDefinitionContext = /** @class */ (function (_super) {
    __extends(StructureDefinitionContext, _super);
    /**
     * Default constructor for StructureDefinitionContext from an object that MAY NOT contain all required elements.
     */
    function StructureDefinitionContext(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.expression = source.expression;
        }
        if (source["_expression"] !== undefined) {
            _this._expression = new fhirModels.Element(source._expression);
        }
        {
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
        }
        return _this;
    }
    return StructureDefinitionContext;
}(fhirModels.BackboneElement));
export { StructureDefinitionContext };
/**
 * Code Values for the StructureDefinition.context.type field
 */
export var StructureDefinitionContextTypeEnum;
(function (StructureDefinitionContextTypeEnum) {
    StructureDefinitionContextTypeEnum["FHIRPATH"] = "fhirpath";
    StructureDefinitionContextTypeEnum["ELEMENT"] = "element";
    StructureDefinitionContextTypeEnum["EXTENSION"] = "extension";
})(StructureDefinitionContextTypeEnum || (StructureDefinitionContextTypeEnum = {}));
/**
 * A snapshot view is expressed in a standalone form that can be used and interpreted without considering the base StructureDefinition.
 */
var StructureDefinitionSnapshot = /** @class */ (function (_super) {
    __extends(StructureDefinitionSnapshot, _super);
    /**
     * Default constructor for StructureDefinitionSnapshot from an object that MAY NOT contain all required elements.
     */
    function StructureDefinitionSnapshot(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.element = source.element.map(function (x) { return new fhirModels.ElementDefinition(x); });
        }
        return _this;
    }
    return StructureDefinitionSnapshot;
}(fhirModels.BackboneElement));
export { StructureDefinitionSnapshot };
/**
 * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
 */
var StructureDefinitionDifferential = /** @class */ (function (_super) {
    __extends(StructureDefinitionDifferential, _super);
    /**
     * Default constructor for StructureDefinitionDifferential from an object that MAY NOT contain all required elements.
     */
    function StructureDefinitionDifferential(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.element = source.element.map(function (x) { return new fhirModels.ElementDefinition(x); });
        }
        return _this;
    }
    return StructureDefinitionDifferential;
}(fhirModels.BackboneElement));
export { StructureDefinitionDifferential };
/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.
 */
var StructureDefinition = /** @class */ (function (_super) {
    __extends(StructureDefinition, _super);
    /**
     * Default constructor for StructureDefinition from an object that MAY NOT contain all required elements.
     */
    function StructureDefinition(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "StructureDefinition";
        if ((source['resourceType'] !== "StructureDefinition") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a StructureDefinition';
        }
        {
            _this.abstract = source.abstract;
        }
        if (source["_abstract"] !== undefined) {
            _this._abstract = new fhirModels.Element(source._abstract);
        }
        if (source["baseDefinition"] !== undefined) {
            _this.baseDefinition = source.baseDefinition;
        }
        if (source["_baseDefinition"] !== undefined) {
            _this._baseDefinition = new fhirModels.Element(source._baseDefinition);
        }
        if (source["contact"] !== undefined) {
            _this.contact = source.contact.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["context"] !== undefined) {
            _this.context = source.context.map(function (x) { return new fhirModels.StructureDefinitionContext(x); });
        }
        if (source["contextInvariant"] !== undefined) {
            _this.contextInvariant = source.contextInvariant.map(function (x) { return (x); });
        }
        if (source["_contextInvariant"] !== undefined) {
            _this._contextInvariant = source._contextInvariant.map(function (x) { return new fhirModels.Element(x); });
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
        if (source["derivation"] !== undefined) {
            _this.derivation = source.derivation;
        }
        if (source["_derivation"] !== undefined) {
            _this._derivation = new fhirModels.Element(source._derivation);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["differential"] !== undefined) {
            _this.differential = new fhirModels.StructureDefinitionDifferential(source.differential);
        }
        if (source["experimental"] !== undefined) {
            _this.experimental = source.experimental;
        }
        if (source["_experimental"] !== undefined) {
            _this._experimental = new fhirModels.Element(source._experimental);
        }
        if (source["fhirVersion"] !== undefined) {
            _this.fhirVersion = source.fhirVersion;
        }
        if (source["_fhirVersion"] !== undefined) {
            _this._fhirVersion = new fhirModels.Element(source._fhirVersion);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["jurisdiction"] !== undefined) {
            _this.jurisdiction = source.jurisdiction.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["keyword"] !== undefined) {
            _this.keyword = source.keyword.map(function (x) { return new fhirModels.Coding(x); });
        }
        {
            _this.kind = source.kind;
        }
        if (source["_kind"] !== undefined) {
            _this._kind = new fhirModels.Element(source._kind);
        }
        if (source["mapping"] !== undefined) {
            _this.mapping = source.mapping.map(function (x) { return new fhirModels.StructureDefinitionMapping(x); });
        }
        {
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
        if (source["snapshot"] !== undefined) {
            _this.snapshot = new fhirModels.StructureDefinitionSnapshot(source.snapshot);
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
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
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
    return StructureDefinition;
}(fhirModels.DomainResource));
export { StructureDefinition };
/**
 * Code Values for the StructureDefinition.derivation field
 */
export var StructureDefinitionDerivationEnum;
(function (StructureDefinitionDerivationEnum) {
    StructureDefinitionDerivationEnum["SPECIALIZATION"] = "specialization";
    StructureDefinitionDerivationEnum["CONSTRAINT"] = "constraint";
})(StructureDefinitionDerivationEnum || (StructureDefinitionDerivationEnum = {}));
/**
 * Code Values for the StructureDefinition.kind field
 */
export var StructureDefinitionKindEnum;
(function (StructureDefinitionKindEnum) {
    StructureDefinitionKindEnum["PRIMITIVE_TYPE"] = "primitive-type";
    StructureDefinitionKindEnum["COMPLEX_TYPE"] = "complex-type";
    StructureDefinitionKindEnum["RESOURCE"] = "resource";
    StructureDefinitionKindEnum["LOGICAL"] = "logical";
})(StructureDefinitionKindEnum || (StructureDefinitionKindEnum = {}));
/**
 * Code Values for the StructureDefinition.status field
 */
export var StructureDefinitionStatusEnum;
(function (StructureDefinitionStatusEnum) {
    StructureDefinitionStatusEnum["DRAFT"] = "draft";
    StructureDefinitionStatusEnum["ACTIVE"] = "active";
    StructureDefinitionStatusEnum["RETIRED"] = "retired";
    StructureDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(StructureDefinitionStatusEnum || (StructureDefinitionStatusEnum = {}));
