// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export class ImmunizationRecommendationRecommendationDateCriterion extends fhir.BackboneElement {
    /**
     * Default constructor for ImmunizationRecommendationRecommendationDateCriterion - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.code = null;
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (this.code === undefined) {
            this.code = null;
        }
        this.value = null;
        if (source["value"]) {
            this.value = source.value;
        }
        if (this.value === undefined) {
            this.value = null;
        }
        if (source["_value"]) {
            this._value = new fhir.FhirElement(source._value);
        }
    }
    /**
     * Check if the current ImmunizationRecommendationRecommendationDateCriterion contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        if (this["value"] === undefined) {
            missingElements.push("value");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImmunizationRecommendationRecommendationDateCriterion from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new ImmunizationRecommendationRecommendationDateCriterion(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImmunizationRecommendationRecommendationDateCriterion is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Vaccine administration recommendations.
 */
export class ImmunizationRecommendationRecommendation extends fhir.BackboneElement {
    /**
     * Default constructor for ImmunizationRecommendationRecommendation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["contraindicatedVaccineCode"]) {
            this.contraindicatedVaccineCode = source.contraindicatedVaccineCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["dateCriterion"]) {
            this.dateCriterion = source.dateCriterion.map((x) => new fhir.ImmunizationRecommendationRecommendationDateCriterion(x));
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["doseNumberPositiveInt"]) {
            this.doseNumberPositiveInt = source.doseNumberPositiveInt;
        }
        if (source["_doseNumberPositiveInt"]) {
            this._doseNumberPositiveInt = new fhir.FhirElement(source._doseNumberPositiveInt);
        }
        if (source["doseNumberString"]) {
            this.doseNumberString = source.doseNumberString;
        }
        if (source["_doseNumberString"]) {
            this._doseNumberString = new fhir.FhirElement(source._doseNumberString);
        }
        if (source["forecastReason"]) {
            this.forecastReason = source.forecastReason.map((x) => new fhir.CodeableConcept(x));
        }
        this.forecastStatus = null;
        if (source["forecastStatus"]) {
            this.forecastStatus = new fhir.CodeableConcept(source.forecastStatus);
        }
        if (this.forecastStatus === undefined) {
            this.forecastStatus = null;
        }
        if (source["series"]) {
            this.series = source.series;
        }
        if (source["_series"]) {
            this._series = new fhir.FhirElement(source._series);
        }
        if (source["seriesDosesPositiveInt"]) {
            this.seriesDosesPositiveInt = source.seriesDosesPositiveInt;
        }
        if (source["_seriesDosesPositiveInt"]) {
            this._seriesDosesPositiveInt = new fhir.FhirElement(source._seriesDosesPositiveInt);
        }
        if (source["seriesDosesString"]) {
            this.seriesDosesString = source.seriesDosesString;
        }
        if (source["_seriesDosesString"]) {
            this._seriesDosesString = new fhir.FhirElement(source._seriesDosesString);
        }
        if (source["supportingImmunization"]) {
            this.supportingImmunization = source.supportingImmunization.map((x) => new fhir.Reference(x));
        }
        if (source["supportingPatientInformation"]) {
            this.supportingPatientInformation = source.supportingPatientInformation.map((x) => new fhir.Reference(x));
        }
        if (source["targetDisease"]) {
            this.targetDisease = new fhir.CodeableConcept(source.targetDisease);
        }
        if (source["vaccineCode"]) {
            this.vaccineCode = source.vaccineCode.map((x) => new fhir.CodeableConcept(x));
        }
    }
    /**
     * Check if the current ImmunizationRecommendationRecommendation contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["forecastStatus"] === undefined) {
            missingElements.push("forecastStatus");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImmunizationRecommendationRecommendation from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new ImmunizationRecommendationRecommendation(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImmunizationRecommendationRecommendation is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export class ImmunizationRecommendation extends fhir.DomainResource {
    /**
     * Default constructor for ImmunizationRecommendation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'ImmunizationRecommendation';
        if (source["authority"]) {
            this.authority = new fhir.Reference(source.authority);
        }
        this.date = null;
        if (source["date"]) {
            this.date = source.date;
        }
        if (this.date === undefined) {
            this.date = null;
        }
        if (source["_date"]) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        this.patient = null;
        if (source["patient"]) {
            this.patient = new fhir.Reference(source.patient);
        }
        if (this.patient === undefined) {
            this.patient = null;
        }
        this.recommendation = null;
        if (source["recommendation"]) {
            this.recommendation = source.recommendation.map((x) => new fhir.ImmunizationRecommendationRecommendation(x));
        }
        if (this.recommendation === undefined) {
            this.recommendation = null;
        }
    }
    /**
     * Check if the current ImmunizationRecommendation contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["date"] === undefined) {
            missingElements.push("date");
        }
        if (this["patient"] === undefined) {
            missingElements.push("patient");
        }
        if ((!this["recommendation"]) || (this["recommendation"].length === 0)) {
            missingElements.push("recommendation");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a ImmunizationRecommendation from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new ImmunizationRecommendation(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `ImmunizationRecommendation is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
//# sourceMappingURL=ImmunizationRecommendation.js.map