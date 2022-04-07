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
 * Characteristics e.g. a products onset of action.
 */
var MedicinalProductPharmaceuticalCharacteristics = /** @class */ (function (_super) {
    __extends(MedicinalProductPharmaceuticalCharacteristics, _super);
    /**
     * Default constructor for MedicinalProductPharmaceuticalCharacteristics from an object that MAY NOT contain all required elements.
     */
    function MedicinalProductPharmaceuticalCharacteristics(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["status"] !== undefined) {
            _this.status = new fhirModels.CodeableConcept(source.status);
        }
        return _this;
    }
    /**
     * Factory function to create a MedicinalProductPharmaceuticalCharacteristics from an object that MUST contain all required elements.
     */
    MedicinalProductPharmaceuticalCharacteristics.CreateStrict = function (source) {
        var dest = new MedicinalProductPharmaceuticalCharacteristics(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "MedicinalProductPharmaceuticalCharacteristics is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current MedicinalProductPharmaceuticalCharacteristics contains all required elements.
     */
    MedicinalProductPharmaceuticalCharacteristics.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return MedicinalProductPharmaceuticalCharacteristics;
}(fhirModels.BackboneElement));
export { MedicinalProductPharmaceuticalCharacteristics };
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
var MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod = /** @class */ (function (_super) {
    __extends(MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod, _super);
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod from an object that MAY NOT contain all required elements.
     */
    function MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(source) {
        var _this = _super.call(this, source) || this;
        if (source["supportingInformation"] !== undefined) {
            _this.supportingInformation = source.supportingInformation;
        }
        if (source["_supportingInformation"] !== undefined) {
            _this._supportingInformation = new fhirModels.Element(source._supportingInformation);
        }
        if (source["tissue"] !== undefined) {
            _this.tissue = new fhirModels.CodeableConcept(source.tissue);
        }
        if (source["value"] !== undefined) {
            _this.value = new fhirModels.Quantity(source.value);
        }
        return _this;
    }
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod from an object that MUST contain all required elements.
     */
    MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod.CreateStrict = function (source) {
        var dest = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod contains all required elements.
     */
    MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["tissue"] === undefined) {
            missingElements.push("tissue");
        }
        if (this["value"] === undefined) {
            missingElements.push("value");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod;
}(fhirModels.BackboneElement));
export { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod };
/**
 * A species for which this route applies.
 */
var MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies = /** @class */ (function (_super) {
    __extends(MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies, _super);
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies from an object that MAY NOT contain all required elements.
     */
    function MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["withdrawalPeriod"] !== undefined) {
            _this.withdrawalPeriod = source.withdrawalPeriod.map(function (x) { return new fhirModels.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpeciesWithdrawalPeriod(x); });
        }
        return _this;
    }
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies from an object that MUST contain all required elements.
     */
    MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies.CreateStrict = function (source) {
        var dest = new MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies contains all required elements.
     */
    MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies;
}(fhirModels.BackboneElement));
export { MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies };
/**
 * The path by which the pharmaceutical product is taken into or makes contact with the body.
 */
var MedicinalProductPharmaceuticalRouteOfAdministration = /** @class */ (function (_super) {
    __extends(MedicinalProductPharmaceuticalRouteOfAdministration, _super);
    /**
     * Default constructor for MedicinalProductPharmaceuticalRouteOfAdministration from an object that MAY NOT contain all required elements.
     */
    function MedicinalProductPharmaceuticalRouteOfAdministration(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["firstDose"] !== undefined) {
            _this.firstDose = new fhirModels.Quantity(source.firstDose);
        }
        if (source["maxDosePerDay"] !== undefined) {
            _this.maxDosePerDay = new fhirModels.Quantity(source.maxDosePerDay);
        }
        if (source["maxDosePerTreatmentPeriod"] !== undefined) {
            _this.maxDosePerTreatmentPeriod = new fhirModels.Ratio(source.maxDosePerTreatmentPeriod);
        }
        if (source["maxSingleDose"] !== undefined) {
            _this.maxSingleDose = new fhirModels.Quantity(source.maxSingleDose);
        }
        if (source["maxTreatmentPeriod"] !== undefined) {
            _this.maxTreatmentPeriod = new fhirModels.Duration(source.maxTreatmentPeriod);
        }
        if (source["targetSpecies"] !== undefined) {
            _this.targetSpecies = source.targetSpecies.map(function (x) { return new fhirModels.MedicinalProductPharmaceuticalRouteOfAdministrationTargetSpecies(x); });
        }
        return _this;
    }
    /**
     * Factory function to create a MedicinalProductPharmaceuticalRouteOfAdministration from an object that MUST contain all required elements.
     */
    MedicinalProductPharmaceuticalRouteOfAdministration.CreateStrict = function (source) {
        var dest = new MedicinalProductPharmaceuticalRouteOfAdministration(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "MedicinalProductPharmaceuticalRouteOfAdministration is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current MedicinalProductPharmaceuticalRouteOfAdministration contains all required elements.
     */
    MedicinalProductPharmaceuticalRouteOfAdministration.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return MedicinalProductPharmaceuticalRouteOfAdministration;
}(fhirModels.BackboneElement));
export { MedicinalProductPharmaceuticalRouteOfAdministration };
/**
 * A pharmaceutical product described in terms of its composition and dose form.
 */
var MedicinalProductPharmaceutical = /** @class */ (function (_super) {
    __extends(MedicinalProductPharmaceutical, _super);
    /**
     * Default constructor for MedicinalProductPharmaceutical from an object that MAY NOT contain all required elements.
     */
    function MedicinalProductPharmaceutical(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "MedicinalProductPharmaceutical";
        if ((source['resourceType'] !== "MedicinalProductPharmaceutical") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a MedicinalProductPharmaceutical';
        }
        if (source["administrableDoseForm"] !== undefined) {
            _this.administrableDoseForm = new fhirModels.CodeableConcept(source.administrableDoseForm);
        }
        if (source["characteristics"] !== undefined) {
            _this.characteristics = source.characteristics.map(function (x) { return new fhirModels.MedicinalProductPharmaceuticalCharacteristics(x); });
        }
        if (source["device"] !== undefined) {
            _this.device = source.device.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["ingredient"] !== undefined) {
            _this.ingredient = source.ingredient.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["routeOfAdministration"] !== undefined) {
            _this.routeOfAdministration = source.routeOfAdministration.map(function (x) { return new fhirModels.MedicinalProductPharmaceuticalRouteOfAdministration(x); });
        }
        if (source["unitOfPresentation"] !== undefined) {
            _this.unitOfPresentation = new fhirModels.CodeableConcept(source.unitOfPresentation);
        }
        return _this;
    }
    /**
     * Factory function to create a MedicinalProductPharmaceutical from an object that MUST contain all required elements.
     */
    MedicinalProductPharmaceutical.CreateStrict = function (source) {
        var dest = new MedicinalProductPharmaceutical(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "MedicinalProductPharmaceutical is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current MedicinalProductPharmaceutical contains all required elements.
     */
    MedicinalProductPharmaceutical.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["administrableDoseForm"] === undefined) {
            missingElements.push("administrableDoseForm");
        }
        if ((this["routeOfAdministration"] === undefined) || (this["routeOfAdministration"].length === 0)) {
            missingElements.push("routeOfAdministration");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return MedicinalProductPharmaceutical;
}(fhirModels.DomainResource));
export { MedicinalProductPharmaceutical };