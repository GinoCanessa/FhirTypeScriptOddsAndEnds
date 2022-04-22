// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Goal

import * as fhir from '../fhir.js'

import { ObservationCodesValueSet, ObservationCodesValueSetType, ObservationCodesValueSetEnum } from '../fhirValueSets/ObservationCodesValueSet.js'
import { GoalStatusValueSet, GoalStatusValueSetType, GoalStatusValueSetEnum } from '../fhirValueSets/GoalStatusValueSet.js'
import { GoalAchievementValueSet, GoalAchievementValueSetType, GoalAchievementValueSetEnum } from '../fhirValueSets/GoalAchievementValueSet.js'
import { GoalCategoryValueSet, GoalCategoryValueSetType, GoalCategoryValueSetEnum } from '../fhirValueSets/GoalCategoryValueSet.js'
import { GoalPriorityValueSet, GoalPriorityValueSetType, GoalPriorityValueSetEnum } from '../fhirValueSets/GoalPriorityValueSet.js'
import { ClinicalFindingsValueSet, ClinicalFindingsValueSetType, ClinicalFindingsValueSetEnum } from '../fhirValueSets/ClinicalFindingsValueSet.js'
import { GoalStartEventValueSet, GoalStartEventValueSetType, GoalStartEventValueSetEnum } from '../fhirValueSets/GoalStartEventValueSet.js'

/**
 * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
 */
export type IGoalTarget = fhir.IBackboneElement & { 
  /**
   * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   */
  measure?: fhir.ICodeableConcept|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailQuantity?: fhir.IQuantity|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailRange?: fhir.IRange|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailString?: string|undefined;
  /**
   * Extended properties for primitive element: Goal.target.detail[x]
   */
  _detailString?: fhir.IFhirElement|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailBoolean?: boolean|undefined;
  /**
   * Extended properties for primitive element: Goal.target.detail[x]
   */
  _detailBoolean?: fhir.IFhirElement|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailInteger?: number|undefined;
  /**
   * Extended properties for primitive element: Goal.target.detail[x]
   */
  _detailInteger?: fhir.IFhirElement|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  detailRatio?: fhir.IRatio|undefined;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDate?: string|undefined;
  /**
   * Extended properties for primitive element: Goal.target.due[x]
   */
  _dueDate?: fhir.IFhirElement|undefined;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  dueDuration?: fhir.IDuration|undefined;
}

/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export type IGoal = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "Goal";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * This element is labeled as a modifier because the lifecycleStatus contains codes that mark the resource as not currently valid.
   */
  lifecycleStatus: GoalStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: Goal.lifecycleStatus
   */
  _lifecycleStatus?: fhir.IFhirElement|undefined;
  /**
   * Describes the progression, or lack thereof, towards the goal against the target.
   */
  achievementStatus?: fhir.ICodeableConcept|undefined;
  /**
   * Indicates a category the goal falls within.
   */
  category?: fhir.ICodeableConcept[]|undefined;
  /**
   * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspective, different practitioners' perspectives, family member's perspectives)
   * The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
   */
  priority?: fhir.ICodeableConcept|undefined;
  /**
   * If no code is available, use CodeableConcept.text.
   */
  description: fhir.ICodeableConcept|null;
  /**
   * Identifies the patient, group or organization for whom the goal is being established.
   */
  subject: fhir.IReference|null;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  startDate?: string|undefined;
  /**
   * Extended properties for primitive element: Goal.start[x]
   */
  _startDate?: fhir.IFhirElement|undefined;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  startCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
   */
  target?: fhir.IGoalTarget[]|undefined;
  /**
   * To see the date for past statuses, query history.
   */
  statusDate?: string|undefined;
  /**
   * Extended properties for primitive element: Goal.statusDate
   */
  _statusDate?: fhir.IFhirElement|undefined;
  /**
   * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
   */
  statusReason?: string|undefined;
  /**
   * Extended properties for primitive element: Goal.statusReason
   */
  _statusReason?: fhir.IFhirElement|undefined;
  /**
   * This is the individual responsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
   */
  expressedBy?: fhir.IReference|undefined;
  /**
   * The identified conditions and other health record elements that are intended to be addressed by the goal.
   */
  addresses?: fhir.IReference[]|undefined;
  /**
   * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * Note that this should not duplicate the goal status.
   */
  outcomeCode?: fhir.ICodeableConcept[]|undefined;
  /**
   * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
   */
  outcomeReference?: fhir.IReference[]|undefined;
}

/**
 * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
 */
export class GoalTarget extends fhir.BackboneElement implements IGoalTarget {
  /**
   * The parameter whose value is being tracked, e.g. body weight, blood pressure, or hemoglobin A1c level.
   */
  public measure?: fhir.CodeableConcept|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  public detailQuantity?: fhir.Quantity|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  public detailRange?: fhir.Range|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  public detailCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  public detailString?: string|undefined;
  /**
   * Extended properties for primitive element: Goal.target.detail[x]
   */
  public _detailString?: fhir.FhirElement|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  public detailBoolean?: boolean|undefined;
  /**
   * Extended properties for primitive element: Goal.target.detail[x]
   */
  public _detailBoolean?: fhir.FhirElement|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  public detailInteger?: number|undefined;
  /**
   * Extended properties for primitive element: Goal.target.detail[x]
   */
  public _detailInteger?: fhir.FhirElement|undefined;
  /**
   * A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Goal.target.measure defines a coded value.
   */
  public detailRatio?: fhir.Ratio|undefined;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  public dueDate?: string|undefined;
  /**
   * Extended properties for primitive element: Goal.target.due[x]
   */
  public _dueDate?: fhir.FhirElement|undefined;
  /**
   * Indicates either the date or the duration after start by which the goal should be met.
   */
  public dueDuration?: fhir.Duration|undefined;
  /**
   * Default constructor for GoalTarget - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IGoalTarget> = { }) {
    super(source);
    if (source['measure']) { this.measure = new fhir.CodeableConcept(source.measure!); }
    if (source['detailQuantity']) { this.detailQuantity = new fhir.Quantity(source.detailQuantity!); }
    if (source['detailRange']) { this.detailRange = new fhir.Range(source.detailRange!); }
    if (source['detailCodeableConcept']) { this.detailCodeableConcept = new fhir.CodeableConcept(source.detailCodeableConcept!); }
    if (source['detailString']) { this.detailString = source.detailString; }
    if (source['_detailString']) { this._detailString = new fhir.FhirElement(source._detailString!); }
    if (source['detailBoolean']) { this.detailBoolean = source.detailBoolean; }
    if (source['_detailBoolean']) { this._detailBoolean = new fhir.FhirElement(source._detailBoolean!); }
    if (source['detailInteger']) { this.detailInteger = source.detailInteger; }
    if (source['_detailInteger']) { this._detailInteger = new fhir.FhirElement(source._detailInteger!); }
    if (source['detailRatio']) { this.detailRatio = new fhir.Ratio(source.detailRatio!); }
    if (source['dueDate']) { this.dueDate = source.dueDate; }
    if (source['_dueDate']) { this._dueDate = new fhir.FhirElement(source._dueDate!); }
    if (source['dueDuration']) { this.dueDuration = new fhir.Duration(source.dueDuration!); }
  }
  /**
   * Example-bound Value Set for measure
   */
  public static measureExampleValueSet():ObservationCodesValueSetType {
    return ObservationCodesValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["measure"]) { results.push(...this.measure.doModelValidation()); }
    if (this["detailQuantity"]) { results.push(...this.detailQuantity.doModelValidation()); }
    if (this["detailRange"]) { results.push(...this.detailRange.doModelValidation()); }
    if (this["detailCodeableConcept"]) { results.push(...this.detailCodeableConcept.doModelValidation()); }
    if (this["_detailString"]) { results.push(...this._detailString.doModelValidation()); }
    if (this["_detailBoolean"]) { results.push(...this._detailBoolean.doModelValidation()); }
    if (this["_detailInteger"]) { results.push(...this._detailInteger.doModelValidation()); }
    if (this["detailRatio"]) { results.push(...this.detailRatio.doModelValidation()); }
    if (this["_dueDate"]) { results.push(...this._dueDate.doModelValidation()); }
    if (this["dueDuration"]) { results.push(...this.dueDuration.doModelValidation()); }
    return results;
  }
}

/**
 * Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.
 */
export class Goal extends fhir.DomainResource implements IGoal {
  /**
   * Resource Type Name
   */
  public resourceType: "Goal";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * This element is labeled as a modifier because the lifecycleStatus contains codes that mark the resource as not currently valid.
   */
  public lifecycleStatus: GoalStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: Goal.lifecycleStatus
   */
  public _lifecycleStatus?: fhir.FhirElement|undefined;
  /**
   * Describes the progression, or lack thereof, towards the goal against the target.
   */
  public achievementStatus?: fhir.CodeableConcept|undefined;
  /**
   * Indicates a category the goal falls within.
   */
  public category?: fhir.CodeableConcept[]|undefined;
  /**
   * Extensions are available to track priorities as established by each participant (i.e. Priority from the patient's perspective, different practitioners' perspectives, family member's perspectives)
   * The ordinal extension on Coding can be used to convey a numerically comparable ranking to priority.  (Keep in mind that different coding systems may use a "low value=important".
   */
  public priority?: fhir.CodeableConcept|undefined;
  /**
   * If no code is available, use CodeableConcept.text.
   */
  public description: fhir.CodeableConcept|null;
  /**
   * Identifies the patient, group or organization for whom the goal is being established.
   */
  public subject: fhir.Reference|null;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  public startDate?: string|undefined;
  /**
   * Extended properties for primitive element: Goal.start[x]
   */
  public _startDate?: fhir.FhirElement|undefined;
  /**
   * The date or event after which the goal should begin being pursued.
   */
  public startCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * When multiple targets are present for a single goal instance, all targets must be met for the overall goal to be met.
   */
  public target?: fhir.GoalTarget[]|undefined;
  /**
   * To see the date for past statuses, query history.
   */
  public statusDate?: string|undefined;
  /**
   * Extended properties for primitive element: Goal.statusDate
   */
  public _statusDate?: fhir.FhirElement|undefined;
  /**
   * This will typically be captured for statuses such as rejected, on-hold or cancelled, but could be present for others.
   */
  public statusReason?: string|undefined;
  /**
   * Extended properties for primitive element: Goal.statusReason
   */
  public _statusReason?: fhir.FhirElement|undefined;
  /**
   * This is the individual responsible for establishing the goal, not necessarily who recorded it.  (For that, use the Provenance resource.).
   */
  public expressedBy?: fhir.Reference|undefined;
  /**
   * The identified conditions and other health record elements that are intended to be addressed by the goal.
   */
  public addresses?: fhir.Reference[]|undefined;
  /**
   * May be used for progress notes, concerns or other related information that doesn't actually describe the goal itself.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Note that this should not duplicate the goal status.
   */
  public outcomeCode?: fhir.CodeableConcept[]|undefined;
  /**
   * The goal outcome is independent of the outcome of the related activities.  For example, if the Goal is to achieve a target body weight of 150 lb and a care plan activity is defined to diet, then the care plan’s activity outcome could be calories consumed whereas goal outcome is an observation for the actual body weight measured.
   */
  public outcomeReference?: fhir.Reference[]|undefined;
  /**
   * Default constructor for Goal - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IGoal> = { }) {
    super(source);
    this.resourceType = 'Goal';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['lifecycleStatus']) { this.lifecycleStatus = source.lifecycleStatus; }
    else { this.lifecycleStatus = null; }
    if (source['_lifecycleStatus']) { this._lifecycleStatus = new fhir.FhirElement(source._lifecycleStatus!); }
    if (source['achievementStatus']) { this.achievementStatus = new fhir.CodeableConcept(source.achievementStatus!); }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    if (source['priority']) { this.priority = new fhir.CodeableConcept(source.priority!); }
    if (source['description']) { this.description = new fhir.CodeableConcept(source.description!); }
    else { this.description = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject!); }
    else { this.subject = null; }
    if (source['startDate']) { this.startDate = source.startDate; }
    if (source['_startDate']) { this._startDate = new fhir.FhirElement(source._startDate!); }
    if (source['startCodeableConcept']) { this.startCodeableConcept = new fhir.CodeableConcept(source.startCodeableConcept!); }
    if (source['target']) { this.target = source.target.map((x) => new fhir.GoalTarget(x)); }
    if (source['statusDate']) { this.statusDate = source.statusDate; }
    if (source['_statusDate']) { this._statusDate = new fhir.FhirElement(source._statusDate!); }
    if (source['statusReason']) { this.statusReason = source.statusReason; }
    if (source['_statusReason']) { this._statusReason = new fhir.FhirElement(source._statusReason!); }
    if (source['expressedBy']) { this.expressedBy = new fhir.Reference(source.expressedBy!); }
    if (source['addresses']) { this.addresses = source.addresses.map((x) => new fhir.Reference(x)); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    if (source['outcomeCode']) { this.outcomeCode = source.outcomeCode.map((x) => new fhir.CodeableConcept(x)); }
    if (source['outcomeReference']) { this.outcomeReference = source.outcomeReference.map((x) => new fhir.Reference(x)); }
  }
  /**
   * Required-bound Value Set for lifecycleStatus
   */
  public static lifecycleStatusRequiredValueSet():GoalStatusValueSetType {
    return GoalStatusValueSet;
  }
  /**
   * Preferred-bound Value Set for achievementStatus
   */
  public static achievementStatusPreferredValueSet():GoalAchievementValueSetType {
    return GoalAchievementValueSet;
  }
  /**
   * Example-bound Value Set for category
   */
  public static categoryExampleValueSet():GoalCategoryValueSetType {
    return GoalCategoryValueSet;
  }
  /**
   * Preferred-bound Value Set for priority
   */
  public static priorityPreferredValueSet():GoalPriorityValueSetType {
    return GoalPriorityValueSet;
  }
  /**
   * Example-bound Value Set for description
   */
  public static descriptionExampleValueSet():ClinicalFindingsValueSetType {
    return ClinicalFindingsValueSet;
  }
  /**
   * Example-bound Value Set for startDate
   */
  public static startDateExampleValueSet():GoalStartEventValueSetType {
    return GoalStartEventValueSet;
  }
  /**
   * Example-bound Value Set for startCodeableConcept
   */
  public static startCodeableConceptExampleValueSet():GoalStartEventValueSetType {
    return GoalStartEventValueSet;
  }
  /**
   * Example-bound Value Set for outcomeCode
   */
  public static outcomeCodeExampleValueSet():ClinicalFindingsValueSetType {
    return ClinicalFindingsValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: Goal.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["lifecycleStatus"]) { results.push(["lifecycleStatus",'Missing required element: Goal.lifecycleStatus']); }
    if (this["_lifecycleStatus"]) { results.push(...this._lifecycleStatus.doModelValidation()); }
    if (this["achievementStatus"]) { results.push(...this.achievementStatus.doModelValidation()); }
    if (this["category"]) { this.category.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["priority"]) { results.push(...this.priority.doModelValidation()); }
    if (!this["description"]) { results.push(["description",'Missing required element: Goal.description']); }
    if (this["description"]) { results.push(...this.description.doModelValidation()); }
    if (!this["subject"]) { results.push(["subject",'Missing required element: Goal.subject']); }
    if (this["subject"]) { results.push(...this.subject.doModelValidation()); }
    if (this["_startDate"]) { results.push(...this._startDate.doModelValidation()); }
    if (this["startCodeableConcept"]) { results.push(...this.startCodeableConcept.doModelValidation()); }
    if (this["target"]) { this.target.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_statusDate"]) { results.push(...this._statusDate.doModelValidation()); }
    if (this["_statusReason"]) { results.push(...this._statusReason.doModelValidation()); }
    if (this["expressedBy"]) { results.push(...this.expressedBy.doModelValidation()); }
    if (this["addresses"]) { this.addresses.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["note"]) { this.note.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["outcomeCode"]) { this.outcomeCode.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["outcomeReference"]) { this.outcomeReference.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
