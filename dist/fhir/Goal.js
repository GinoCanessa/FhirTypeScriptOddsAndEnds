// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Goal
import * as fhir from '../fhir.js';
import { ObservationCodesValueSet } from '../fhirValueSets/ObservationCodesValueSet.js';
import { GoalStatusValueSet } from '../fhirValueSets/GoalStatusValueSet.js';
import { GoalAchievementValueSet } from '../fhirValueSets/GoalAchievementValueSet.js';
import { GoalCategoryValueSet } from '../fhirValueSets/GoalCategoryValueSet.js';
import { GoalPriorityValueSet } from '../fhirValueSets/GoalPriorityValueSet.js';
import { ClinicalFindingsValueSet } from '../fhirValueSets/ClinicalFindingsValueSet.js';
import { GoalStartEventValueSet } from '../fhirValueSets/GoalStartEventValueSet.js';
/**
 * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
 */
export class GoalTarget extends fhir.BackboneElement {
    /**
     * Default constructor for GoalTarget - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source['measure']) {
            this.measure = new fhir.CodeableConcept(source.measure);
        }
        if (source['detailQuantity']) {
            this.detailQuantity = new fhir.Quantity(source.detailQuantity);
        }
        if (source['detailRange']) {
            this.detailRange = new fhir.Range(source.detailRange);
        }
        if (source['detailCodeableConcept']) {
            this.detailCodeableConcept = new fhir.CodeableConcept(source.detailCodeableConcept);
        }
        if (source['detailString']) {
            this.detailString = source.detailString;
        }
        if (source['_detailString']) {
            this._detailString = new fhir.FhirElement(source._detailString);
        }
        if (source['detailBoolean']) {
            this.detailBoolean = source.detailBoolean;
        }
        if (source['_detailBoolean']) {
            this._detailBoolean = new fhir.FhirElement(source._detailBoolean);
        }
        if (source['detailInteger']) {
            this.detailInteger = source.detailInteger;
        }
        if (source['_detailInteger']) {
            this._detailInteger = new fhir.FhirElement(source._detailInteger);
        }
        if (source['detailRatio']) {
            this.detailRatio = new fhir.Ratio(source.detailRatio);
        }
        if (source['dueDate']) {
            this.dueDate = source.dueDate;
        }
        if (source['_dueDate']) {
            this._dueDate = new fhir.FhirElement(source._dueDate);
        }
        if (source['dueDuration']) {
            this.dueDuration = new fhir.Duration(source.dueDuration);
        }
    }
    /**
     * Example-bound Value Set for measure
     */
    static measureExampleValueSet() {
        return ObservationCodesValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (this["measure"]) {
            results.push(...this.measure.doModelValidation());
        }
        if (this["detailQuantity"]) {
            results.push(...this.detailQuantity.doModelValidation());
        }
        if (this["detailRange"]) {
            results.push(...this.detailRange.doModelValidation());
        }
        if (this["detailCodeableConcept"]) {
            results.push(...this.detailCodeableConcept.doModelValidation());
        }
        if (this["_detailString"]) {
            results.push(...this._detailString.doModelValidation());
        }
        if (this["_detailBoolean"]) {
            results.push(...this._detailBoolean.doModelValidation());
        }
        if (this["_detailInteger"]) {
            results.push(...this._detailInteger.doModelValidation());
        }
        if (this["detailRatio"]) {
            results.push(...this.detailRatio.doModelValidation());
        }
        if (this["_dueDate"]) {
            results.push(...this._dueDate.doModelValidation());
        }
        if (this["dueDuration"]) {
            results.push(...this.dueDuration.doModelValidation());
        }
        return results;
    }
}
/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export class Goal extends fhir.DomainResource {
    /**
     * Default constructor for Goal - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Goal';
        if (source['identifier']) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source['lifecycleStatus']) {
            this.lifecycleStatus = source.lifecycleStatus;
        }
        else {
            this.lifecycleStatus = null;
        }
        if (source['_lifecycleStatus']) {
            this._lifecycleStatus = new fhir.FhirElement(source._lifecycleStatus);
        }
        if (source['achievementStatus']) {
            this.achievementStatus = new fhir.CodeableConcept(source.achievementStatus);
        }
        if (source['category']) {
            this.category = source.category.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['priority']) {
            this.priority = new fhir.CodeableConcept(source.priority);
        }
        if (source['description']) {
            this.description = new fhir.CodeableConcept(source.description);
        }
        else {
            this.description = null;
        }
        if (source['subject']) {
            this.subject = new fhir.Reference(source.subject);
        }
        else {
            this.subject = null;
        }
        if (source['startDate']) {
            this.startDate = source.startDate;
        }
        if (source['_startDate']) {
            this._startDate = new fhir.FhirElement(source._startDate);
        }
        if (source['startCodeableConcept']) {
            this.startCodeableConcept = new fhir.CodeableConcept(source.startCodeableConcept);
        }
        if (source['target']) {
            this.target = source.target.map((x) => new fhir.GoalTarget(x));
        }
        if (source['statusDate']) {
            this.statusDate = source.statusDate;
        }
        if (source['_statusDate']) {
            this._statusDate = new fhir.FhirElement(source._statusDate);
        }
        if (source['statusReason']) {
            this.statusReason = source.statusReason;
        }
        if (source['_statusReason']) {
            this._statusReason = new fhir.FhirElement(source._statusReason);
        }
        if (source['expressedBy']) {
            this.expressedBy = new fhir.Reference(source.expressedBy);
        }
        if (source['addresses']) {
            this.addresses = source.addresses.map((x) => new fhir.Reference(x));
        }
        if (source['note']) {
            this.note = source.note.map((x) => new fhir.Annotation(x));
        }
        if (source['outcomeCode']) {
            this.outcomeCode = source.outcomeCode.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['outcomeReference']) {
            this.outcomeReference = source.outcomeReference.map((x) => new fhir.Reference(x));
        }
    }
    /**
     * Required-bound Value Set for lifecycleStatus
     */
    static lifecycleStatusRequiredValueSet() {
        return GoalStatusValueSet;
    }
    /**
     * Preferred-bound Value Set for achievementStatus
     */
    static achievementStatusPreferredValueSet() {
        return GoalAchievementValueSet;
    }
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet() {
        return GoalCategoryValueSet;
    }
    /**
     * Preferred-bound Value Set for priority
     */
    static priorityPreferredValueSet() {
        return GoalPriorityValueSet;
    }
    /**
     * Example-bound Value Set for description
     */
    static descriptionExampleValueSet() {
        return ClinicalFindingsValueSet;
    }
    /**
     * Example-bound Value Set for startDate
     */
    static startDateExampleValueSet() {
        return GoalStartEventValueSet;
    }
    /**
     * Example-bound Value Set for startCodeableConcept
     */
    static startCodeableConceptExampleValueSet() {
        return GoalStartEventValueSet;
    }
    /**
     * Example-bound Value Set for outcomeCode
     */
    static outcomeCodeExampleValueSet() {
        return ClinicalFindingsValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var results = super.doModelValidation();
        if (!this["resourceType"]) {
            results.push(["resourceType", 'Missing required element: Goal.resourceType']);
        }
        if (this["identifier"]) {
            this.identifier.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (!this["lifecycleStatus"]) {
            results.push(["lifecycleStatus", 'Missing required element: Goal.lifecycleStatus']);
        }
        if (this["_lifecycleStatus"]) {
            results.push(...this._lifecycleStatus.doModelValidation());
        }
        if (this["achievementStatus"]) {
            results.push(...this.achievementStatus.doModelValidation());
        }
        if (this["category"]) {
            this.category.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["priority"]) {
            results.push(...this.priority.doModelValidation());
        }
        if (!this["description"]) {
            results.push(["description", 'Missing required element: Goal.description']);
        }
        if (this["description"]) {
            results.push(...this.description.doModelValidation());
        }
        if (!this["subject"]) {
            results.push(["subject", 'Missing required element: Goal.subject']);
        }
        if (this["subject"]) {
            results.push(...this.subject.doModelValidation());
        }
        if (this["_startDate"]) {
            results.push(...this._startDate.doModelValidation());
        }
        if (this["startCodeableConcept"]) {
            results.push(...this.startCodeableConcept.doModelValidation());
        }
        if (this["target"]) {
            this.target.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["_statusDate"]) {
            results.push(...this._statusDate.doModelValidation());
        }
        if (this["_statusReason"]) {
            results.push(...this._statusReason.doModelValidation());
        }
        if (this["expressedBy"]) {
            results.push(...this.expressedBy.doModelValidation());
        }
        if (this["addresses"]) {
            this.addresses.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["note"]) {
            this.note.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["outcomeCode"]) {
            this.outcomeCode.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        if (this["outcomeReference"]) {
            this.outcomeReference.forEach((x) => { results.push(...x.doModelValidation()); });
        }
        return results;
    }
}
//# sourceMappingURL=Goal.js.map