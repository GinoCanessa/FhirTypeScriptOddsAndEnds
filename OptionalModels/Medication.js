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
 * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
 */
var MedicationIngredient = /** @class */ (function (_super) {
    __extends(MedicationIngredient, _super);
    /**
     * Default constructor for MedicationIngredient from an object that MAY NOT contain all required elements.
     */
    function MedicationIngredient(source) {
        var _this = _super.call(this, source) || this;
        if (source["isActive"] !== undefined) {
            _this.isActive = source.isActive;
        }
        if (source["_isActive"] !== undefined) {
            _this._isActive = new fhirModels.Element(source._isActive);
        }
        if (source["itemCodeableConcept"] !== undefined) {
            _this.itemCodeableConcept = new fhirModels.CodeableConcept(source.itemCodeableConcept);
        }
        if (source["itemReference"] !== undefined) {
            _this.itemReference = new fhirModels.Reference(source.itemReference);
        }
        if (source["strength"] !== undefined) {
            _this.strength = new fhirModels.Ratio(source.strength);
        }
        return _this;
    }
    /**
     * Factory function to create a MedicationIngredient from an object that MUST contain all required elements.
     */
    MedicationIngredient.CreateStrict = function (source) {
        var dest = new MedicationIngredient(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "MedicationIngredient is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current MedicationIngredient contains all required elements.
     */
    MedicationIngredient.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return MedicationIngredient;
}(fhirModels.BackboneElement));
export { MedicationIngredient };
/**
 * Information that only applies to packages (not products).
 */
var MedicationBatch = /** @class */ (function (_super) {
    __extends(MedicationBatch, _super);
    /**
     * Default constructor for MedicationBatch from an object that MAY NOT contain all required elements.
     */
    function MedicationBatch(source) {
        var _this = _super.call(this, source) || this;
        if (source["expirationDate"] !== undefined) {
            _this.expirationDate = source.expirationDate;
        }
        if (source["_expirationDate"] !== undefined) {
            _this._expirationDate = new fhirModels.Element(source._expirationDate);
        }
        if (source["lotNumber"] !== undefined) {
            _this.lotNumber = source.lotNumber;
        }
        if (source["_lotNumber"] !== undefined) {
            _this._lotNumber = new fhirModels.Element(source._lotNumber);
        }
        return _this;
    }
    /**
     * Factory function to create a MedicationBatch from an object that MUST contain all required elements.
     */
    MedicationBatch.CreateStrict = function (source) {
        var dest = new MedicationBatch(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "MedicationBatch is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current MedicationBatch contains all required elements.
     */
    MedicationBatch.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return MedicationBatch;
}(fhirModels.BackboneElement));
export { MedicationBatch };
/**
 * This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.
 */
var Medication = /** @class */ (function (_super) {
    __extends(Medication, _super);
    /**
     * Default constructor for Medication from an object that MAY NOT contain all required elements.
     */
    function Medication(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Medication";
        if ((source['resourceType'] !== "Medication") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Medication';
        }
        if (source["amount"] !== undefined) {
            _this.amount = new fhirModels.Ratio(source.amount);
        }
        if (source["batch"] !== undefined) {
            _this.batch = new fhirModels.MedicationBatch(source.batch);
        }
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["form"] !== undefined) {
            _this.form = new fhirModels.CodeableConcept(source.form);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["ingredient"] !== undefined) {
            _this.ingredient = source.ingredient.map(function (x) { return new fhirModels.MedicationIngredient(x); });
        }
        if (source["manufacturer"] !== undefined) {
            _this.manufacturer = new fhirModels.Reference(source.manufacturer);
        }
        if (source["status"] !== undefined) {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        return _this;
    }
    /**
     * Factory function to create a Medication from an object that MUST contain all required elements.
     */
    Medication.CreateStrict = function (source) {
        var dest = new Medication(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "Medication is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current Medication contains all required elements.
     */
    Medication.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return Medication;
}(fhirModels.DomainResource));
export { Medication };
/**
 * Code Values for the Medication.status field
 */
export var MedicationStatusEnum;
(function (MedicationStatusEnum) {
    MedicationStatusEnum["ACTIVE"] = "active";
    MedicationStatusEnum["INACTIVE"] = "inactive";
    MedicationStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(MedicationStatusEnum || (MedicationStatusEnum = {}));
