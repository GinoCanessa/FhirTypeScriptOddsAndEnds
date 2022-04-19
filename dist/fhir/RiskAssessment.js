// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export class RiskAssessmentPrediction extends fhir.BackboneElement {
    /**
     * Default constructor for RiskAssessmentPrediction - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["outcome"]) {
            this.outcome = new fhir.CodeableConcept(source.outcome);
        }
        if (source["probabilityDecimal"]) {
            this.probabilityDecimal = source.probabilityDecimal;
        }
        if (source["_probabilityDecimal"]) {
            this._probabilityDecimal = new fhir.FhirElement(source._probabilityDecimal);
        }
        if (source["probabilityRange"]) {
            this.probabilityRange = new fhir.Range(source.probabilityRange);
        }
        if (source["qualitativeRisk"]) {
            this.qualitativeRisk = new fhir.CodeableConcept(source.qualitativeRisk);
        }
        if (source["rationale"]) {
            this.rationale = source.rationale;
        }
        if (source["_rationale"]) {
            this._rationale = new fhir.FhirElement(source._rationale);
        }
        if (source["relativeRisk"]) {
            this.relativeRisk = source.relativeRisk;
        }
        if (source["_relativeRisk"]) {
            this._relativeRisk = new fhir.FhirElement(source._relativeRisk);
        }
        if (source["whenPeriod"]) {
            this.whenPeriod = new fhir.Period(source.whenPeriod);
        }
        if (source["whenRange"]) {
            this.whenRange = new fhir.Range(source.whenRange);
        }
    }
    /**
     * Check if the current RiskAssessmentPrediction contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a RiskAssessmentPrediction from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new RiskAssessmentPrediction(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `RiskAssessmentPrediction is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export class RiskAssessment extends fhir.DomainResource {
    /**
     * Default constructor for RiskAssessment - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'RiskAssessment';
        if (source["basedOn"]) {
            this.basedOn = new fhir.Reference(source.basedOn);
        }
        if (source["basis"]) {
            this.basis = source.basis.map((x) => new fhir.Reference(x));
        }
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source["condition"]) {
            this.condition = new fhir.Reference(source.condition);
        }
        if (source["encounter"]) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["method"]) {
            this.method = new fhir.CodeableConcept(source.method);
        }
        if (source["mitigation"]) {
            this.mitigation = source.mitigation;
        }
        if (source["_mitigation"]) {
            this._mitigation = new fhir.FhirElement(source._mitigation);
        }
        if (source["note"]) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source["occurrenceDateTime"]) {
            this.occurrenceDateTime = source.occurrenceDateTime;
        }
        if (source["_occurrenceDateTime"]) {
            this._occurrenceDateTime = new fhir.FhirElement(source._occurrenceDateTime);
        }
        if (source["occurrencePeriod"]) {
            this.occurrencePeriod = new fhir.Period(source.occurrencePeriod);
        }
        if (source["parent"]) {
            this.parent = new fhir.Reference(source.parent);
        }
        if (source["performer"]) {
            this.performer = new fhir.Reference(source.performer);
        }
        if (source["prediction"]) {
            this.prediction = source.prediction.map((x) => new fhir.RiskAssessmentPrediction(x));
        }
        if (source["reasonCode"]) {
            this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["reasonReference"]) {
            this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x));
        }
        this.status = null;
        if (source["status"]) {
            this.status = source.status;
        }
        if (this.status === undefined) {
            this.status = null;
        }
        if (source["_status"]) {
            this._status = new fhir.FhirElement(source._status);
        }
        this.subject = null;
        if (source["subject"]) {
            this.subject = new fhir.Reference(source.subject);
        }
        if (this.subject === undefined) {
            this.subject = null;
        }
    }
    /**
     * Check if the current RiskAssessment contains all required elements.
     */
    CheckRequiredElements() {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        if (this["subject"] === undefined) {
            missingElements.push("subject");
        }
        var parentMissing = super.CheckRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a RiskAssessment from an object that MUST contain all required elements.
     */
    static FromStrict(source) {
        var dest = new RiskAssessment(source);
        var missingElements = dest.CheckRequiredElements();
        if (missingElements.length !== 0) {
            throw `RiskAssessment is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the RiskAssessment.status field
 */
export var RiskAssessmentStatusEnum;
(function (RiskAssessmentStatusEnum) {
    RiskAssessmentStatusEnum["REGISTERED"] = "registered";
    RiskAssessmentStatusEnum["PRELIMINARY"] = "preliminary";
    RiskAssessmentStatusEnum["FINAL"] = "final";
    RiskAssessmentStatusEnum["AMENDED"] = "amended";
    RiskAssessmentStatusEnum["CORRECTED"] = "corrected";
    RiskAssessmentStatusEnum["CANCELLED"] = "cancelled";
    RiskAssessmentStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
    RiskAssessmentStatusEnum["UNKNOWN"] = "unknown";
})(RiskAssessmentStatusEnum || (RiskAssessmentStatusEnum = {}));
//# sourceMappingURL=RiskAssessment.js.map