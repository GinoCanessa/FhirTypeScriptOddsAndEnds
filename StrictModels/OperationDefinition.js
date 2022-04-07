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
 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 */
var OperationDefinitionParameterBinding = /** @class */ (function (_super) {
    __extends(OperationDefinitionParameterBinding, _super);
    /**
     * Default constructor for OperationDefinitionParameterBinding from an object that MAY NOT contain all required elements.
     */
    function OperationDefinitionParameterBinding(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.strength = source.strength;
        }
        if (source["_strength"] !== undefined) {
            _this._strength = new fhirModels.Element(source._strength);
        }
        {
            _this.valueSet = source.valueSet;
        }
        if (source["_valueSet"] !== undefined) {
            _this._valueSet = new fhirModels.Element(source._valueSet);
        }
        return _this;
    }
    return OperationDefinitionParameterBinding;
}(fhirModels.BackboneElement));
export { OperationDefinitionParameterBinding };
/**
 * Code Values for the OperationDefinition.parameter.binding.strength field
 */
export var OperationDefinitionParameterBindingStrengthEnum;
(function (OperationDefinitionParameterBindingStrengthEnum) {
    OperationDefinitionParameterBindingStrengthEnum["REQUIRED"] = "required";
    OperationDefinitionParameterBindingStrengthEnum["EXTENSIBLE"] = "extensible";
    OperationDefinitionParameterBindingStrengthEnum["PREFERRED"] = "preferred";
    OperationDefinitionParameterBindingStrengthEnum["EXAMPLE"] = "example";
})(OperationDefinitionParameterBindingStrengthEnum || (OperationDefinitionParameterBindingStrengthEnum = {}));
/**
 * Resolution applies if the referenced parameter exists.
 */
var OperationDefinitionParameterReferencedFrom = /** @class */ (function (_super) {
    __extends(OperationDefinitionParameterReferencedFrom, _super);
    /**
     * Default constructor for OperationDefinitionParameterReferencedFrom from an object that MAY NOT contain all required elements.
     */
    function OperationDefinitionParameterReferencedFrom(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.source = source.source;
        }
        if (source["_source"] !== undefined) {
            _this._source = new fhirModels.Element(source._source);
        }
        if (source["sourceId"] !== undefined) {
            _this.sourceId = source.sourceId;
        }
        if (source["_sourceId"] !== undefined) {
            _this._sourceId = new fhirModels.Element(source._sourceId);
        }
        return _this;
    }
    return OperationDefinitionParameterReferencedFrom;
}(fhirModels.BackboneElement));
export { OperationDefinitionParameterReferencedFrom };
/**
 * Query Definitions only have one output parameter, named "result". This might not be described, but can be to allow a profile to be defined.
 */
var OperationDefinitionParameter = /** @class */ (function (_super) {
    __extends(OperationDefinitionParameter, _super);
    /**
     * Default constructor for OperationDefinitionParameter from an object that MAY NOT contain all required elements.
     */
    function OperationDefinitionParameter(source) {
        var _this = _super.call(this, source) || this;
        if (source["binding"] !== undefined) {
            _this.binding = new fhirModels.OperationDefinitionParameterBinding(source.binding);
        }
        if (source["documentation"] !== undefined) {
            _this.documentation = source.documentation;
        }
        if (source["_documentation"] !== undefined) {
            _this._documentation = new fhirModels.Element(source._documentation);
        }
        {
            _this.max = source.max;
        }
        if (source["_max"] !== undefined) {
            _this._max = new fhirModels.Element(source._max);
        }
        {
            _this.min = source.min;
        }
        if (source["_min"] !== undefined) {
            _this._min = new fhirModels.Element(source._min);
        }
        {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["part"] !== undefined) {
            _this.part = source.part.map(function (x) { return new fhirModels.OperationDefinitionParameter(x); });
        }
        if (source["referencedFrom"] !== undefined) {
            _this.referencedFrom = source.referencedFrom.map(function (x) { return new fhirModels.OperationDefinitionParameterReferencedFrom(x); });
        }
        if (source["searchType"] !== undefined) {
            _this.searchType = source.searchType;
        }
        if (source["_searchType"] !== undefined) {
            _this._searchType = new fhirModels.Element(source._searchType);
        }
        if (source["targetProfile"] !== undefined) {
            _this.targetProfile = source.targetProfile.map(function (x) { return (x); });
        }
        if (source["_targetProfile"] !== undefined) {
            _this._targetProfile = source._targetProfile.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["type"] !== undefined) {
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
        }
        {
            _this.use = source.use;
        }
        if (source["_use"] !== undefined) {
            _this._use = new fhirModels.Element(source._use);
        }
        return _this;
    }
    return OperationDefinitionParameter;
}(fhirModels.BackboneElement));
export { OperationDefinitionParameter };
/**
 * Code Values for the OperationDefinition.parameter.searchType field
 */
export var OperationDefinitionParameterSearchTypeEnum;
(function (OperationDefinitionParameterSearchTypeEnum) {
    OperationDefinitionParameterSearchTypeEnum["NUMBER"] = "number";
    OperationDefinitionParameterSearchTypeEnum["DATE"] = "date";
    OperationDefinitionParameterSearchTypeEnum["STRING"] = "string";
    OperationDefinitionParameterSearchTypeEnum["TOKEN"] = "token";
    OperationDefinitionParameterSearchTypeEnum["REFERENCE"] = "reference";
    OperationDefinitionParameterSearchTypeEnum["COMPOSITE"] = "composite";
    OperationDefinitionParameterSearchTypeEnum["QUANTITY"] = "quantity";
    OperationDefinitionParameterSearchTypeEnum["URI"] = "uri";
    OperationDefinitionParameterSearchTypeEnum["SPECIAL"] = "special";
})(OperationDefinitionParameterSearchTypeEnum || (OperationDefinitionParameterSearchTypeEnum = {}));
/**
 * Code Values for the OperationDefinition.parameter.use field
 */
export var OperationDefinitionParameterUseEnum;
(function (OperationDefinitionParameterUseEnum) {
    OperationDefinitionParameterUseEnum["IN"] = "in";
    OperationDefinitionParameterUseEnum["OUT"] = "out";
})(OperationDefinitionParameterUseEnum || (OperationDefinitionParameterUseEnum = {}));
/**
 * The combinations are suggestions as to which sets of parameters to use together, but the combinations are not intended to be authoritative.
 */
var OperationDefinitionOverload = /** @class */ (function (_super) {
    __extends(OperationDefinitionOverload, _super);
    /**
     * Default constructor for OperationDefinitionOverload from an object that MAY NOT contain all required elements.
     */
    function OperationDefinitionOverload(source) {
        var _this = _super.call(this, source) || this;
        if (source["comment"] !== undefined) {
            _this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            _this._comment = new fhirModels.Element(source._comment);
        }
        if (source["parameterName"] !== undefined) {
            _this.parameterName = source.parameterName.map(function (x) { return (x); });
        }
        if (source["_parameterName"] !== undefined) {
            _this._parameterName = source._parameterName.map(function (x) { return new fhirModels.Element(x); });
        }
        return _this;
    }
    return OperationDefinitionOverload;
}(fhirModels.BackboneElement));
export { OperationDefinitionOverload };
/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
var OperationDefinition = /** @class */ (function (_super) {
    __extends(OperationDefinition, _super);
    /**
     * Default constructor for OperationDefinition from an object that MAY NOT contain all required elements.
     */
    function OperationDefinition(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "OperationDefinition";
        if ((source['resourceType'] !== "OperationDefinition") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a OperationDefinition';
        }
        if (source["affectsState"] !== undefined) {
            _this.affectsState = source.affectsState;
        }
        if (source["_affectsState"] !== undefined) {
            _this._affectsState = new fhirModels.Element(source._affectsState);
        }
        if (source["base"] !== undefined) {
            _this.base = source.base;
        }
        if (source["_base"] !== undefined) {
            _this._base = new fhirModels.Element(source._base);
        }
        {
            _this.code = source.code;
        }
        if (source["_code"] !== undefined) {
            _this._code = new fhirModels.Element(source._code);
        }
        if (source["comment"] !== undefined) {
            _this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            _this._comment = new fhirModels.Element(source._comment);
        }
        if (source["contact"] !== undefined) {
            _this.contact = source.contact.map(function (x) { return new fhirModels.ContactDetail(x); });
        }
        if (source["date"] !== undefined) {
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
        if (source["experimental"] !== undefined) {
            _this.experimental = source.experimental;
        }
        if (source["_experimental"] !== undefined) {
            _this._experimental = new fhirModels.Element(source._experimental);
        }
        if (source["inputProfile"] !== undefined) {
            _this.inputProfile = source.inputProfile;
        }
        if (source["_inputProfile"] !== undefined) {
            _this._inputProfile = new fhirModels.Element(source._inputProfile);
        }
        {
            _this.instance = source.instance;
        }
        if (source["_instance"] !== undefined) {
            _this._instance = new fhirModels.Element(source._instance);
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
        {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["outputProfile"] !== undefined) {
            _this.outputProfile = source.outputProfile;
        }
        if (source["_outputProfile"] !== undefined) {
            _this._outputProfile = new fhirModels.Element(source._outputProfile);
        }
        if (source["overload"] !== undefined) {
            _this.overload = source.overload.map(function (x) { return new fhirModels.OperationDefinitionOverload(x); });
        }
        if (source["parameter"] !== undefined) {
            _this.parameter = source.parameter.map(function (x) { return new fhirModels.OperationDefinitionParameter(x); });
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
        if (source["resource"] !== undefined) {
            _this.resource = source.resource.map(function (x) { return (x); });
        }
        if (source["_resource"] !== undefined) {
            _this._resource = source._resource.map(function (x) { return new fhirModels.Element(x); });
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        {
            _this.system = source.system;
        }
        if (source["_system"] !== undefined) {
            _this._system = new fhirModels.Element(source._system);
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
        if (source["url"] !== undefined) {
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
    return OperationDefinition;
}(fhirModels.DomainResource));
export { OperationDefinition };
/**
 * Code Values for the OperationDefinition.kind field
 */
export var OperationDefinitionKindEnum;
(function (OperationDefinitionKindEnum) {
    OperationDefinitionKindEnum["OPERATION"] = "operation";
    OperationDefinitionKindEnum["QUERY"] = "query";
})(OperationDefinitionKindEnum || (OperationDefinitionKindEnum = {}));
/**
 * Code Values for the OperationDefinition.status field
 */
export var OperationDefinitionStatusEnum;
(function (OperationDefinitionStatusEnum) {
    OperationDefinitionStatusEnum["DRAFT"] = "draft";
    OperationDefinitionStatusEnum["ACTIVE"] = "active";
    OperationDefinitionStatusEnum["RETIRED"] = "retired";
    OperationDefinitionStatusEnum["UNKNOWN"] = "unknown";
})(OperationDefinitionStatusEnum || (OperationDefinitionStatusEnum = {}));
