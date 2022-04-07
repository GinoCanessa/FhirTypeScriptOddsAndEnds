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
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
var SubstanceInstance = /** @class */ (function (_super) {
    __extends(SubstanceInstance, _super);
    /**
     * Default constructor for SubstanceInstance from an object that MAY NOT contain all required elements.
     */
    function SubstanceInstance(source) {
        var _this = _super.call(this, source) || this;
        if (source["expiry"] !== undefined) {
            _this.expiry = source.expiry;
        }
        if (source["_expiry"] !== undefined) {
            _this._expiry = new fhirModels.Element(source._expiry);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = new fhirModels.Identifier(source.identifier);
        }
        if (source["quantity"] !== undefined) {
            _this.quantity = new fhirModels.Quantity(source.quantity);
        }
        return _this;
    }
    return SubstanceInstance;
}(fhirModels.BackboneElement));
export { SubstanceInstance };
/**
 * A substance can be composed of other substances.
 */
var SubstanceIngredient = /** @class */ (function (_super) {
    __extends(SubstanceIngredient, _super);
    /**
     * Default constructor for SubstanceIngredient from an object that MAY NOT contain all required elements.
     */
    function SubstanceIngredient(source) {
        var _this = _super.call(this, source) || this;
        if (source["quantity"] !== undefined) {
            _this.quantity = new fhirModels.Ratio(source.quantity);
        }
        if (source["substanceCodeableConcept"] !== undefined) {
            _this.substanceCodeableConcept = new fhirModels.CodeableConcept(source.substanceCodeableConcept);
        }
        if (source["substanceReference"] !== undefined) {
            _this.substanceReference = new fhirModels.Reference(source.substanceReference);
        }
        return _this;
    }
    return SubstanceIngredient;
}(fhirModels.BackboneElement));
export { SubstanceIngredient };
/**
 * A homogeneous material with a definite composition.
 */
var Substance = /** @class */ (function (_super) {
    __extends(Substance, _super);
    /**
     * Default constructor for Substance from an object that MAY NOT contain all required elements.
     */
    function Substance(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Substance";
        if ((source['resourceType'] !== "Substance") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Substance';
        }
        if (source["category"] !== undefined) {
            _this.category = source.category.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["ingredient"] !== undefined) {
            _this.ingredient = source.ingredient.map(function (x) { return new fhirModels.SubstanceIngredient(x); });
        }
        if (source["instance"] !== undefined) {
            _this.instance = source.instance.map(function (x) { return new fhirModels.SubstanceInstance(x); });
        }
        if (source["status"] !== undefined) {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        return _this;
    }
    return Substance;
}(fhirModels.DomainResource));
export { Substance };
/**
 * Code Values for the Substance.status field
 */
export var SubstanceStatusEnum;
(function (SubstanceStatusEnum) {
    SubstanceStatusEnum["ACTIVE"] = "active";
    SubstanceStatusEnum["INACTIVE"] = "inactive";
    SubstanceStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(SubstanceStatusEnum || (SubstanceStatusEnum = {}));