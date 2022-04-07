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
 * Multiple identifiers may exist, either due to duplicate registration, regional rules, needs of different communication technologies, etc.
 */
var NamingSystemUniqueId = /** @class */ (function (_super) {
    __extends(NamingSystemUniqueId, _super);
    /**
     * Default constructor for NamingSystemUniqueId from an object that MAY NOT contain all required elements.
     */
    function NamingSystemUniqueId(source) {
        var _this = _super.call(this, source) || this;
        if (source["comment"] !== undefined) {
            _this.comment = source.comment;
        }
        if (source["_comment"] !== undefined) {
            _this._comment = new fhirModels.Element(source._comment);
        }
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Period(source.period);
        }
        if (source["preferred"] !== undefined) {
            _this.preferred = source.preferred;
        }
        if (source["_preferred"] !== undefined) {
            _this._preferred = new fhirModels.Element(source._preferred);
        }
        {
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
        }
        {
            _this.value = source.value;
        }
        if (source["_value"] !== undefined) {
            _this._value = new fhirModels.Element(source._value);
        }
        return _this;
    }
    return NamingSystemUniqueId;
}(fhirModels.BackboneElement));
export { NamingSystemUniqueId };
/**
 * Code Values for the NamingSystem.uniqueId.type field
 */
export var NamingSystemUniqueIdTypeEnum;
(function (NamingSystemUniqueIdTypeEnum) {
    NamingSystemUniqueIdTypeEnum["OID"] = "oid";
    NamingSystemUniqueIdTypeEnum["UUID"] = "uuid";
    NamingSystemUniqueIdTypeEnum["URI"] = "uri";
    NamingSystemUniqueIdTypeEnum["OTHER"] = "other";
})(NamingSystemUniqueIdTypeEnum || (NamingSystemUniqueIdTypeEnum = {}));
/**
 * A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.
 */
var NamingSystem = /** @class */ (function (_super) {
    __extends(NamingSystem, _super);
    /**
     * Default constructor for NamingSystem from an object that MAY NOT contain all required elements.
     */
    function NamingSystem(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "NamingSystem";
        if ((source['resourceType'] !== "NamingSystem") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a NamingSystem';
        }
        if (source["contact"] !== undefined) {
            _this.contact = source.contact.map(function (x) { return new fhirModels.ContactDetail(x); });
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
        if (source["publisher"] !== undefined) {
            _this.publisher = source.publisher;
        }
        if (source["_publisher"] !== undefined) {
            _this._publisher = new fhirModels.Element(source._publisher);
        }
        if (source["responsible"] !== undefined) {
            _this.responsible = source.responsible;
        }
        if (source["_responsible"] !== undefined) {
            _this._responsible = new fhirModels.Element(source._responsible);
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        {
            _this.uniqueId = source.uniqueId.map(function (x) { return new fhirModels.NamingSystemUniqueId(x); });
        }
        if (source["usage"] !== undefined) {
            _this.usage = source.usage;
        }
        if (source["_usage"] !== undefined) {
            _this._usage = new fhirModels.Element(source._usage);
        }
        if (source["useContext"] !== undefined) {
            _this.useContext = source.useContext.map(function (x) { return new fhirModels.UsageContext(x); });
        }
        return _this;
    }
    return NamingSystem;
}(fhirModels.DomainResource));
export { NamingSystem };
/**
 * Code Values for the NamingSystem.kind field
 */
export var NamingSystemKindEnum;
(function (NamingSystemKindEnum) {
    NamingSystemKindEnum["CODESYSTEM"] = "codesystem";
    NamingSystemKindEnum["IDENTIFIER"] = "identifier";
    NamingSystemKindEnum["ROOT"] = "root";
})(NamingSystemKindEnum || (NamingSystemKindEnum = {}));
/**
 * Code Values for the NamingSystem.status field
 */
export var NamingSystemStatusEnum;
(function (NamingSystemStatusEnum) {
    NamingSystemStatusEnum["DRAFT"] = "draft";
    NamingSystemStatusEnum["ACTIVE"] = "active";
    NamingSystemStatusEnum["RETIRED"] = "retired";
    NamingSystemStatusEnum["UNKNOWN"] = "unknown";
})(NamingSystemStatusEnum || (NamingSystemStatusEnum = {}));
