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
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
var ImmunizationRecommendationRecommendationDateCriterion = /** @class */ (function (_super) {
    __extends(ImmunizationRecommendationRecommendationDateCriterion, _super);
    /**
     * Default constructor for ImmunizationRecommendationRecommendationDateCriterion from an object that MAY NOT contain all required elements.
     */
    function ImmunizationRecommendationRecommendationDateCriterion(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        {
            _this.value = source.value;
        }
        if (source["_value"] !== undefined) {
            _this._value = new fhirModels.Element(source._value);
        }
        return _this;
    }
    return ImmunizationRecommendationRecommendationDateCriterion;
}(fhirModels.BackboneElement));
export { ImmunizationRecommendationRecommendationDateCriterion };
/**
 * Vaccine administration recommendations.
 */
var ImmunizationRecommendationRecommendation = /** @class */ (function (_super) {
    __extends(ImmunizationRecommendationRecommendation, _super);
    /**
     * Default constructor for ImmunizationRecommendationRecommendation from an object that MAY NOT contain all required elements.
     */
    function ImmunizationRecommendationRecommendation(source) {
        var _this = _super.call(this, source) || this;
        if (source["contraindicatedVaccineCode"] !== undefined) {
            _this.contraindicatedVaccineCode = source.contraindicatedVaccineCode.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["dateCriterion"] !== undefined) {
            _this.dateCriterion = source.dateCriterion.map(function (x) { return new fhirModels.ImmunizationRecommendationRecommendationDateCriterion(x); });
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["doseNumberPositiveInt"] !== undefined) {
            _this.doseNumberPositiveInt = source.doseNumberPositiveInt;
        }
        if (source["_doseNumberPositiveInt"] !== undefined) {
            _this._doseNumberPositiveInt = new fhirModels.Element(source._doseNumberPositiveInt);
        }
        if (source["doseNumberString"] !== undefined) {
            _this.doseNumberString = source.doseNumberString;
        }
        if (source["_doseNumberString"] !== undefined) {
            _this._doseNumberString = new fhirModels.Element(source._doseNumberString);
        }
        if (source["forecastReason"] !== undefined) {
            _this.forecastReason = source.forecastReason.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        {
            _this.forecastStatus = new fhirModels.CodeableConcept(source.forecastStatus);
        }
        if (source["series"] !== undefined) {
            _this.series = source.series;
        }
        if (source["_series"] !== undefined) {
            _this._series = new fhirModels.Element(source._series);
        }
        if (source["seriesDosesPositiveInt"] !== undefined) {
            _this.seriesDosesPositiveInt = source.seriesDosesPositiveInt;
        }
        if (source["_seriesDosesPositiveInt"] !== undefined) {
            _this._seriesDosesPositiveInt = new fhirModels.Element(source._seriesDosesPositiveInt);
        }
        if (source["seriesDosesString"] !== undefined) {
            _this.seriesDosesString = source.seriesDosesString;
        }
        if (source["_seriesDosesString"] !== undefined) {
            _this._seriesDosesString = new fhirModels.Element(source._seriesDosesString);
        }
        if (source["supportingImmunization"] !== undefined) {
            _this.supportingImmunization = source.supportingImmunization.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["supportingPatientInformation"] !== undefined) {
            _this.supportingPatientInformation = source.supportingPatientInformation.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["targetDisease"] !== undefined) {
            _this.targetDisease = new fhirModels.CodeableConcept(source.targetDisease);
        }
        if (source["vaccineCode"] !== undefined) {
            _this.vaccineCode = source.vaccineCode.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        return _this;
    }
    return ImmunizationRecommendationRecommendation;
}(fhirModels.BackboneElement));
export { ImmunizationRecommendationRecommendation };
/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
var ImmunizationRecommendation = /** @class */ (function (_super) {
    __extends(ImmunizationRecommendation, _super);
    /**
     * Default constructor for ImmunizationRecommendation from an object that MAY NOT contain all required elements.
     */
    function ImmunizationRecommendation(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "ImmunizationRecommendation";
        if ((source['resourceType'] !== "ImmunizationRecommendation") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a ImmunizationRecommendation';
        }
        if (source["authority"] !== undefined) {
            _this.authority = new fhirModels.Reference(source.authority);
        }
        {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        {
            _this.patient = new fhirModels.Reference(source.patient);
        }
        {
            _this.recommendation = source.recommendation.map(function (x) { return new fhirModels.ImmunizationRecommendationRecommendation(x); });
        }
        return _this;
    }
    return ImmunizationRecommendation;
}(fhirModels.DomainResource));
export { ImmunizationRecommendation };
