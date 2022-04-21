// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImmunizationEvaluation
import * as fhir from '../fhir.js';
import { ImmunizationEvaluationStatusValueSet } from '../fhirValueSets/ImmunizationEvaluationStatusValueSet.js';
import { ImmunizationEvaluationTargetDiseaseValueSet } from '../fhirValueSets/ImmunizationEvaluationTargetDiseaseValueSet.js';
import { ImmunizationEvaluationDoseStatusValueSet } from '../fhirValueSets/ImmunizationEvaluationDoseStatusValueSet.js';
import { ImmunizationEvaluationDoseStatusReasonValueSet } from '../fhirValueSets/ImmunizationEvaluationDoseStatusReasonValueSet.js';
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export class ImmunizationEvaluation extends fhir.DomainResource {
    /**
     * Default constructor for ImmunizationEvaluation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'ImmunizationEvaluation';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['_status']) {
            this._status = new fhir.FhirElement(source._status);
        }
        if (source['patient']) {
            this.patient = new fhir.Reference(source.patient);
        }
        else {
            this.patient = null;
        }
        if (source['date']) {
            this.date = source.date;
        }
        if (source['_date']) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source['authority']) {
            this.authority = new fhir.Reference(source.authority);
        }
        if (source['targetDisease']) {
            this.targetDisease = new fhir.CodeableConcept(source.targetDisease);
        }
        else {
            this.targetDisease = null;
        }
        if (source['immunizationEvent']) {
            this.immunizationEvent = new fhir.Reference(source.immunizationEvent);
        }
        else {
            this.immunizationEvent = null;
        }
        if (source['doseStatus']) {
            this.doseStatus = new fhir.CodeableConcept(source.doseStatus);
        }
        else {
            this.doseStatus = null;
        }
        if (source['doseStatusReason']) {
            this.doseStatusReason = source.doseStatusReason.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['description']) {
            this.description = source.description;
        }
        if (source['_description']) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source['series']) {
            this.series = source.series;
        }
        if (source['_series']) {
            this._series = new fhir.FhirElement(source._series);
        }
        if (source['doseNumberPositiveInt']) {
            this.doseNumberPositiveInt = source.doseNumberPositiveInt;
        }
        if (source['_doseNumberPositiveInt']) {
            this._doseNumberPositiveInt = new fhir.FhirElement(source._doseNumberPositiveInt);
        }
        if (source['doseNumberString']) {
            this.doseNumberString = source.doseNumberString;
        }
        if (source['_doseNumberString']) {
            this._doseNumberString = new fhir.FhirElement(source._doseNumberString);
        }
        if (source['seriesDosesPositiveInt']) {
            this.seriesDosesPositiveInt = source.seriesDosesPositiveInt;
        }
        if (source['_seriesDosesPositiveInt']) {
            this._seriesDosesPositiveInt = new fhir.FhirElement(source._seriesDosesPositiveInt);
        }
        if (source['seriesDosesString']) {
            this.seriesDosesString = source.seriesDosesString;
        }
        if (source['_seriesDosesString']) {
            this._seriesDosesString = new fhir.FhirElement(source._seriesDosesString);
        }
    }
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet() {
        return ImmunizationEvaluationStatusValueSet;
    }
    /**
     * Example-bound Value Set for targetDisease
     */
    targetDiseaseExampleValueSet() {
        return ImmunizationEvaluationTargetDiseaseValueSet;
    }
    /**
     * Example-bound Value Set for doseStatus
     */
    doseStatusExampleValueSet() {
        return ImmunizationEvaluationDoseStatusValueSet;
    }
    /**
     * Example-bound Value Set for doseStatusReason
     */
    doseStatusReasonExampleValueSet() {
        return ImmunizationEvaluationDoseStatusReasonValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: ImmunizationEvaluation.resourceType']);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (!this["status"]) {
            results.push(["status", 'Missing required element: ImmunizationEvaluation.status']);
        }
        if (this["_status"]) {
            results.push(...this._status.doModelValidation());
        }
        if (!this["patient"]) {
            results.push(["patient", 'Missing required element: ImmunizationEvaluation.patient']);
        }
        if (this["patient"]) {
            results.push(...this.patient.doModelValidation());
        }
        if (this["_date"]) {
            results.push(...this._date.doModelValidation());
        }
        if (this["authority"]) {
            results.push(...this.authority.doModelValidation());
        }
        if (!this["targetDisease"]) {
            results.push(["targetDisease", 'Missing required element: ImmunizationEvaluation.targetDisease']);
        }
        if (this["targetDisease"]) {
            results.push(...this.targetDisease.doModelValidation());
        }
        if (!this["immunizationEvent"]) {
            results.push(["immunizationEvent", 'Missing required element: ImmunizationEvaluation.immunizationEvent']);
        }
        if (this["immunizationEvent"]) {
            results.push(...this.immunizationEvent.doModelValidation());
        }
        if (!this["doseStatus"]) {
            results.push(["doseStatus", 'Missing required element: ImmunizationEvaluation.doseStatus']);
        }
        if (this["doseStatus"]) {
            results.push(...this.doseStatus.doModelValidation());
        }
        if (this["doseStatusReason"]) {
            this.doseStatusReason.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_description"]) {
            results.push(...this._description.doModelValidation());
        }
        if (this["_series"]) {
            results.push(...this._series.doModelValidation());
        }
        if (this["_doseNumberPositiveInt"]) {
            results.push(...this._doseNumberPositiveInt.doModelValidation());
        }
        if (this["_doseNumberString"]) {
            results.push(...this._doseNumberString.doModelValidation());
        }
        if (this["_seriesDosesPositiveInt"]) {
            results.push(...this._seriesDosesPositiveInt.doModelValidation());
        }
        if (this["_seriesDosesString"]) {
            results.push(...this._seriesDosesString.doModelValidation());
        }
        return results;
    }
}
//# sourceMappingURL=ImmunizationEvaluation.js.map