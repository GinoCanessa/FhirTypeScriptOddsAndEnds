// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImmunizationRecommendation
import * as fhir from '../fhir.js';
import { ImmunizationRecommendationDateCriterionValueSet, } from '../fhirValueSets/ImmunizationRecommendationDateCriterionValueSet.js';
import { VaccineCodeValueSet, } from '../fhirValueSets/VaccineCodeValueSet.js';
import { ImmunizationRecommendationTargetDiseaseValueSet, } from '../fhirValueSets/ImmunizationRecommendationTargetDiseaseValueSet.js';
import { ImmunizationRecommendationStatusValueSet, } from '../fhirValueSets/ImmunizationRecommendationStatusValueSet.js';
import { ImmunizationRecommendationReasonValueSet, } from '../fhirValueSets/ImmunizationRecommendationReasonValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export class ImmunizationRecommendationRecommendationDateCriterion extends fhir.BackboneElement {
    /**
     * Default constructor for ImmunizationRecommendationRecommendationDateCriterion - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ImmunizationRecommendationRecommendationDateCriterion';
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        else {
            this.code = null;
        }
        if (source['value']) {
            this.value = new fhir.FhirDateTime({ value: source.value });
        }
        else {
            this.value = null;
        }
    }
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet() {
        return ImmunizationRecommendationDateCriterionValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['code']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property code:fhir.CodeableConcept fhir: ImmunizationRecommendation.recommendation.dateCriterion.code:CodeableConcept", }));
        }
        if (this["code"]) {
            outcome.issue.push(...this.code.doModelValidation().issue);
        }
        if (!this['value']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property value:fhir.FhirDateTime fhir: ImmunizationRecommendation.recommendation.dateCriterion.value:dateTime", }));
        }
        if (this["value"]) {
            outcome.issue.push(...this.value.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Vaccine administration recommendations.
 */
export class ImmunizationRecommendationRecommendation extends fhir.BackboneElement {
    /**
     * Default constructor for ImmunizationRecommendationRecommendation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ImmunizationRecommendationRecommendation';
        /**
         * Vaccine(s) or vaccine group that pertain to the recommendation.
         */
        this.vaccineCode = [];
        /**
         * Vaccine(s) which should not be used to fulfill the recommendation.
         */
        this.contraindicatedVaccineCode = [];
        /**
         * The reason for the assigned forecast status.
         */
        this.forecastReason = [];
        /**
         * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
         */
        this.dateCriterion = [];
        this.__doseNumberIsChoice = true;
        this.__seriesDosesIsChoice = true;
        /**
         * Immunization event history and/or evaluation that supports the status and recommendation.
         */
        this.supportingImmunization = [];
        /**
         * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
         */
        this.supportingPatientInformation = [];
        if (source['vaccineCode']) {
            this.vaccineCode = source.vaccineCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['targetDisease']) {
            this.targetDisease = new fhir.CodeableConcept(source.targetDisease);
        }
        if (source['contraindicatedVaccineCode']) {
            this.contraindicatedVaccineCode = source.contraindicatedVaccineCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['forecastStatus']) {
            this.forecastStatus = new fhir.CodeableConcept(source.forecastStatus);
        }
        else {
            this.forecastStatus = null;
        }
        if (source['forecastReason']) {
            this.forecastReason = source.forecastReason.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['dateCriterion']) {
            this.dateCriterion = source.dateCriterion.map((x) => new fhir.ImmunizationRecommendationRecommendationDateCriterion(x));
        }
        if (source['description']) {
            this.description = new fhir.FhirString({ value: source.description });
        }
        if (source['series']) {
            this.series = new fhir.FhirString({ value: source.series });
        }
        if (source['doseNumber']) {
            this.doseNumber = source.doseNumber;
        }
        else if (source['doseNumberPositiveInt']) {
            this.doseNumber = new fhir.FhirPositiveInt({ value: source.doseNumberPositiveInt });
        }
        else if (source['doseNumberString']) {
            this.doseNumber = new fhir.FhirString({ value: source.doseNumberString });
        }
        if (source['seriesDoses']) {
            this.seriesDoses = source.seriesDoses;
        }
        else if (source['seriesDosesPositiveInt']) {
            this.seriesDoses = new fhir.FhirPositiveInt({ value: source.seriesDosesPositiveInt });
        }
        else if (source['seriesDosesString']) {
            this.seriesDoses = new fhir.FhirString({ value: source.seriesDosesString });
        }
        if (source['supportingImmunization']) {
            this.supportingImmunization = source.supportingImmunization.map((x) => new fhir.Reference(x));
        }
        if (source['supportingPatientInformation']) {
            this.supportingPatientInformation = source.supportingPatientInformation.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Example-bound Value Set for vaccineCode
     */
    static vaccineCodeExampleValueSet() {
        return VaccineCodeValueSet;
    }
    /**
     * Example-bound Value Set for targetDisease
     */
    static targetDiseaseExampleValueSet() {
        return ImmunizationRecommendationTargetDiseaseValueSet;
    }
    /**
     * Example-bound Value Set for contraindicatedVaccineCode
     */
    static contraindicatedVaccineCodeExampleValueSet() {
        return VaccineCodeValueSet;
    }
    /**
     * Example-bound Value Set for forecastStatus
     */
    static forecastStatusExampleValueSet() {
        return ImmunizationRecommendationStatusValueSet;
    }
    /**
     * Example-bound Value Set for forecastReason
     */
    static forecastReasonExampleValueSet() {
        return ImmunizationRecommendationReasonValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["vaccineCode"]) {
            this.vaccineCode.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["targetDisease"]) {
            outcome.issue.push(...this.targetDisease.doModelValidation().issue);
        }
        if (this["contraindicatedVaccineCode"]) {
            this.contraindicatedVaccineCode.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['forecastStatus']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property forecastStatus:fhir.CodeableConcept fhir: ImmunizationRecommendation.recommendation.forecastStatus:CodeableConcept", }));
        }
        if (this["forecastStatus"]) {
            outcome.issue.push(...this.forecastStatus.doModelValidation().issue);
        }
        if (this["forecastReason"]) {
            this.forecastReason.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["dateCriterion"]) {
            this.dateCriterion.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["description"]) {
            outcome.issue.push(...this.description.doModelValidation().issue);
        }
        if (this["series"]) {
            outcome.issue.push(...this.series.doModelValidation().issue);
        }
        if (this["supportingImmunization"]) {
            this.supportingImmunization.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["supportingPatientInformation"]) {
            this.supportingPatientInformation.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export class ImmunizationRecommendation extends fhir.DomainResource {
    /**
     * Default constructor for ImmunizationRecommendation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'ImmunizationRecommendation';
        /**
         * A unique identifier assigned to this particular recommendation record.
         */
        this.identifier = [];
        /**
         * Vaccine administration recommendations.
         */
        this.recommendation = [];
        this.resourceType = 'ImmunizationRecommendation';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        else {
            this.patient = null;
        }
        if (source['date']) {
            this.date = new fhir.FhirDateTime({ value: source.date });
        }
        else {
            this.date = null;
        }
        if (source['authority']) {
            this.authority = new fhir.Reference(source.authority);
        }
        if (source['recommendation']) {
            this.recommendation = source.recommendation.map((x) => new fhir.ImmunizationRecommendationRecommendation(x));
        }
        else {
            this.recommendation = null;
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'ImmunizationRecommendation' fhir: ImmunizationRecommendation.resourceType:'ImmunizationRecommendation'", }));
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (!this['patient']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property patient:fhir.Reference fhir: ImmunizationRecommendation.patient:Reference", }));
        }
        if (this["patient"]) {
            outcome.issue.push(...this.patient.doModelValidation().issue);
        }
        if (!this['date']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property date:fhir.FhirDateTime fhir: ImmunizationRecommendation.date:dateTime", }));
        }
        if (this["date"]) {
            outcome.issue.push(...this.date.doModelValidation().issue);
        }
        if (this["authority"]) {
            outcome.issue.push(...this.authority.doModelValidation().issue);
        }
        if (!this['recommendation']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property recommendation:fhir.ImmunizationRecommendationRecommendation[] fhir: ImmunizationRecommendation.recommendation:recommendation", }));
        }
        else if (!Array.isArray(this.recommendation)) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.StructuralIssue, diagnostics: "Found scalar in array property recommendation:fhir.ImmunizationRecommendationRecommendation[] fhir: ImmunizationRecommendation.recommendation:recommendation", }));
        }
        else if (this.recommendation.length === 0) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property recommendation:fhir.ImmunizationRecommendationRecommendation[] fhir: ImmunizationRecommendation.recommendation:recommendation", }));
        }
        if (this["recommendation"]) {
            this.recommendation.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=ImmunizationRecommendation.js.map