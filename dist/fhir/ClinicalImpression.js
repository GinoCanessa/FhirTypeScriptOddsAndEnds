// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ClinicalImpression
import * as fhir from '../fhir.js';
import { InvestigationSetsValueSet } from '../fhirValueSets/InvestigationSetsValueSet.js';
import { ConditionCodeValueSet } from '../fhirValueSets/ConditionCodeValueSet.js';
import { ClinicalimpressionStatusValueSet } from '../fhirValueSets/ClinicalimpressionStatusValueSet.js';
import { ClinicalimpressionPrognosisValueSet } from '../fhirValueSets/ClinicalimpressionPrognosisValueSet.js';
/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export class ClinicalImpressionInvestigation extends fhir.BackboneElement {
    /**
     * Default constructor for ClinicalImpressionInvestigation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        else {
            this.code = null;
        }
        if (source['item']) {
            this.item = source.item.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Example-bound Value Set for code
     */
    codeExampleValueSet() {
        return InvestigationSetsValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["code"]) {
            results.push(["code", 'Missing required element: ClinicalImpression.investigation.code']);
        }
        if (this["code"]) {
            results.push(...this.code.doModelValidation());
        }
        if (this["item"]) {
            this.item.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export class ClinicalImpressionFinding extends fhir.BackboneElement {
    /**
     * Default constructor for ClinicalImpressionFinding - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['itemCodeableConcept']) {
            this.itemCodeableConcept = new fhir.CodeableConcept(source.itemCodeableConcept);
        }
        if (source['itemReference']) {
            this.itemReference = new fhir.Reference(source.itemReference);
        }
        if (source['basis']) {
            this.basis = source.basis;
        }
        if (source['_basis']) {
            this._basis = new fhir.FhirElement(source._basis);
        }
    }
    /**
     * Example-bound Value Set for itemCodeableConcept
     */
    itemCodeableConceptExampleValueSet() {
        return ConditionCodeValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["itemCodeableConcept"]) {
            results.push(...this.itemCodeableConcept.doModelValidation());
        }
        if (this["itemReference"]) {
            results.push(...this.itemReference.doModelValidation());
        }
        if (this["_basis"]) {
            results.push(...this._basis.doModelValidation());
        }
        return results;
    }
}
/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 */
export class ClinicalImpression extends fhir.DomainResource {
    /**
     * Default constructor for ClinicalImpression - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'ClinicalImpression';
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
        if (source['statusReason']) {
            this.statusReason = new fhir.CodeableConcept(source.statusReason);
        }
        if (source['code']) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (source['description']) {
            this.description = source.description;
        }
        if (source['_description']) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        else {
            this.subject = null;
        }
        if (source['encounter']) {
            this.encounter = new fhir.Reference(source.encounter);
        }
        if (source['effectiveDateTime']) {
            this.effectiveDateTime = source.effectiveDateTime;
        }
        if (source['_effectiveDateTime']) {
            this._effectiveDateTime = new fhir.FhirElement(source._effectiveDateTime);
        }
        if (source['effectivePeriod']) {
            this.effectivePeriod = new fhir.Period(source.effectivePeriod);
        }
        if (source['date']) {
            this.date = source.date;
        }
        if (source['_date']) {
            this._date = new fhir.FhirElement(source._date);
        }
        if (source['assessor']) {
            this.assessor = new fhir.Reference(source.assessor);
        }
        if (source['previous']) {
            this.previous = new fhir.Reference(source.previous);
        }
        if (source['problem']) {
            this.problem = source.problem.map((x) => new fhir.Reference(x));
        }
        if (source['investigation']) {
            this.investigation = source.investigation.map((x) => new fhir.ClinicalImpressionInvestigation(x));
        }
        if (source['protocol']) {
            this.protocol = source.protocol.map((x) => (x));
        }
        if (source['_protocol']) {
            this._protocol = source._protocol.map((x) => new fhir.FhirElement(x));
        }
        if (source['summary']) {
            this.summary = source.summary;
        }
        if (source['_summary']) {
            this._summary = new fhir.FhirElement(source._summary);
        }
        if (source['finding']) {
            this.finding = source.finding.map((x) => new fhir.ClinicalImpressionFinding(x));
        }
        if (source['prognosisCodeableConcept']) {
            this.prognosisCodeableConcept = source.prognosisCodeableConcept.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['prognosisReference']) {
            this.prognosisReference = source.prognosisReference.map((x) => new fhir.Reference(x));
        }
        if (source['supportingInfo']) {
            this.supportingInfo = source.supportingInfo.map((x) => new fhir.Reference(x));
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
    }
    /**
     * Required-bound Value Set for status
     */
    statusRequiredValueSet() {
        return ClinicalimpressionStatusValueSet;
    }
    /**
     * Example-bound Value Set for prognosisCodeableConcept
     */
    prognosisCodeableConceptExampleValueSet() {
        return ClinicalimpressionPrognosisValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: ClinicalImpression.resourceType']);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (!this["status"]) {
            results.push(["status", 'Missing required element: ClinicalImpression.status']);
        }
        if (this["_status"]) {
            results.push(...this._status.doModelValidation());
        }
        if (this["statusReason"]) {
            results.push(...this.statusReason.doModelValidation());
        }
        if (this["code"]) {
            results.push(...this.code.doModelValidation());
        }
        if (this["_description"]) {
            results.push(...this._description.doModelValidation());
        }
        if (!this["subject"]) {
            results.push(["subject", 'Missing required element: ClinicalImpression.subject']);
        }
        if (this["subject"]) {
            results.push(...this.subject.doModelValidation());
        }
        if (this["encounter"]) {
            results.push(...this.encounter.doModelValidation());
        }
        if (this["_effectiveDateTime"]) {
            results.push(...this._effectiveDateTime.doModelValidation());
        }
        if (this["effectivePeriod"]) {
            results.push(...this.effectivePeriod.doModelValidation());
        }
        if (this["_date"]) {
            results.push(...this._date.doModelValidation());
        }
        if (this["assessor"]) {
            results.push(...this.assessor.doModelValidation());
        }
        if (this["previous"]) {
            results.push(...this.previous.doModelValidation());
        }
        if (this["problem"]) {
            this.problem.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["investigation"]) {
            this.investigation.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_protocol"]) {
            this._protocol.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_summary"]) {
            results.push(...this._summary.doModelValidation());
        }
        if (this["finding"]) {
            this.finding.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["prognosisCodeableConcept"]) {
            this.prognosisCodeableConcept.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["prognosisReference"]) {
            this.prognosisReference.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["supportingInfo"]) {
            this.supportingInfo.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["note"]) {
            this.note.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
//# sourceMappingURL=ClinicalImpression.js.map