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
import * as fhirModels from '../optionalmodels';
/**
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.
 */
var Identifier = /** @class */ (function (_super) {
    __extends(Identifier, _super);
    /**
     * Default constructor for Identifier from an object that MAY NOT contain all required elements.
     */
    function Identifier(source) {
        var _this = _super.call(this, source) || this;
        if (source["assigner"] !== undefined) {
            _this.assigner = new fhirModels.Reference(source.assigner);
        }
        if (source["period"] !== undefined) {
            _this.period = new fhirModels.Period(source.period);
        }
        if (source["system"] !== undefined) {
            _this.system = source.system;
        }
        if (source["_system"] !== undefined) {
            _this._system = new fhirModels.Element(source._system);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        if (source["use"] !== undefined) {
            _this.use = source.use;
        }
        if (source["_use"] !== undefined) {
            _this._use = new fhirModels.Element(source._use);
        }
        if (source["value"] !== undefined) {
            _this.value = source.value;
        }
        if (source["_value"] !== undefined) {
            _this._value = new fhirModels.Element(source._value);
        }
        return _this;
    }
    /**
     * Factory function to create a Identifier from an object that MUST contain all required elements.
     */
    Identifier.CreateStrict = function (source) {
        var dest = new Identifier(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "Identifier is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current Identifier contains all required elements.
     */
    Identifier.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return Identifier;
}(fhirModels.Element));
export { Identifier };
/**
 * Code Values for the Identifier.use field
 */
export var IdentifierUseEnum;
(function (IdentifierUseEnum) {
    IdentifierUseEnum["USUAL"] = "usual";
    IdentifierUseEnum["OFFICIAL"] = "official";
    IdentifierUseEnum["TEMP"] = "temp";
    IdentifierUseEnum["SECONDARY"] = "secondary";
    IdentifierUseEnum["OLD"] = "old";
})(IdentifierUseEnum || (IdentifierUseEnum = {}));
