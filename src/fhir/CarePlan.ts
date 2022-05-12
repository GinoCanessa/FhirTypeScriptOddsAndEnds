// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: CarePlan

import * as fhir from '../fhir.js';

import { CarePlanActivityKindValueSet, CarePlanActivityKindValueSetType,} from '../fhirValueSets/CarePlanActivityKindValueSet.js';
import { CarePlanActivityKindValueSetEnum } from '../valueSetEnums.js';
import { ProcedureCodeValueSet, ProcedureCodeValueSetType,} from '../fhirValueSets/ProcedureCodeValueSet.js';
import { ProcedureCodeValueSetEnum } from '../valueSetEnums.js';
import { ClinicalFindingsValueSet, ClinicalFindingsValueSetType,} from '../fhirValueSets/ClinicalFindingsValueSet.js';
import { ClinicalFindingsValueSetEnum } from '../valueSetEnums.js';
import { CarePlanActivityStatusValueSet, CarePlanActivityStatusValueSetType,} from '../fhirValueSets/CarePlanActivityStatusValueSet.js';
import { CarePlanActivityStatusValueSetEnum } from '../valueSetEnums.js';
import { CarePlanActivityOutcomeValueSet, CarePlanActivityOutcomeValueSetType,} from '../fhirValueSets/CarePlanActivityOutcomeValueSet.js';
import { CarePlanActivityOutcomeValueSetEnum } from '../valueSetEnums.js';
import { RequestStatusValueSet, RequestStatusValueSetType,} from '../fhirValueSets/RequestStatusValueSet.js';
import { RequestStatusValueSetEnum } from '../valueSetEnums.js';
import { CarePlanIntentValueSet, CarePlanIntentValueSetType,} from '../fhirValueSets/CarePlanIntentValueSet.js';
import { CarePlanIntentValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the CarePlanActivityDetail type.
 */
export interface CarePlanActivityDetailArgs extends fhir.BackboneElementArgs {
  /**
   * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
   */
  kind?: CarePlanActivityKindValueSetEnum|undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   */
  instantiatesCanonical?: fhir.FhirCanonical[]|string[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: fhir.FhirUri[]|string[]|undefined;
  /**
   * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   */
  goal?: fhir.ReferenceArgs[]|undefined;
  /**
   * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.  
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
   */
  status: CarePlanActivityStatusValueSetEnum|null;
  /**
   * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
   */
  statusReason?: fhir.CodeableConceptArgs|undefined;
  /**
   * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
   */
  doNotPerform?: fhir.FhirBoolean|boolean|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduled?: fhir.Timing|fhir.Period|fhir.FhirString|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledTiming?: fhir.TimingArgs|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  scheduledString?: fhir.FhirString|string|undefined;
  /**
   * May reference a specific clinical location or may identify a type of location.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * A performer MAY also be a participant in the care plan.
   */
  performer?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  product?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  productReference?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies the quantity expected to be consumed in a given day.
   */
  dailyAmount?: fhir.QuantityArgs|undefined;
  /**
   * Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  description?: fhir.FhirString|string|undefined;
}

/**
 * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
 */
export class CarePlanActivityDetail extends fhir.BackboneElement {
  readonly __dataType:string = 'CarePlanActivityDetail';
  /**
   * A description of the kind of resource the in-line definition of a care plan activity is representing.  The CarePlan.activity.detail is an in-line definition when a resource is not referenced using CarePlan.activity.reference.  For example, a MedicationRequest, a ServiceRequest, or a CommunicationRequest.
   */
  public kind?: CarePlanActivityKindValueSetEnum|undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan activity.
   */
  public instantiatesCanonical?: fhir.FhirCanonical[]|undefined = [];
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  public instantiatesUri?: fhir.FhirUri[]|undefined = [];
  /**
   * Tends to be less relevant for activities involving particular products.  Codes should not convey negation - use "prohibited" instead.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * This could be a diagnosis code.  If a full condition record exists or additional detail is needed, use reasonCondition instead.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined = [];
  /**
   * Conditions can be identified at the activity level that are not identified as reasons for the overall plan.
   */
  public reasonReference?: fhir.Reference[]|undefined = [];
  /**
   * Internal reference that identifies the goals that this activity is intended to contribute towards meeting.
   */
  public goal?: fhir.Reference[]|undefined = [];
  /**
   * Some aspects of status can be inferred based on the resources linked in actionTaken.  Note that "status" is only as current as the plan was most recently updated.  
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the activity.
   */
  public status: CarePlanActivityStatusValueSetEnum|null;
  /**
   * Will generally not be present if status is "complete".  Be sure to prompt to update this (or at least remove the existing value) if the status is changed.
   */
  public statusReason?: fhir.CodeableConcept|undefined;
  /**
   * This element is labeled as a modifier because it marks an activity as an activity that is not to be performed.
   */
  public doNotPerform?: fhir.FhirBoolean|undefined;
  /**
   * The period, timing or frequency upon which the described activity is to occur.
   */
  public scheduled?: (fhir.Timing|fhir.Period|fhir.FhirString)|undefined;
  readonly __scheduledIsChoice:true = true;
  /**
   * May reference a specific clinical location or may identify a type of location.
   */
  public location?: fhir.Reference|undefined;
  /**
   * A performer MAY also be a participant in the care plan.
   */
  public performer?: fhir.Reference[]|undefined = [];
  /**
   * Identifies the food, drug or other product to be consumed or supplied in the activity.
   */
  public product?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  readonly __productIsChoice:true = true;
  /**
   * Identifies the quantity expected to be consumed in a given day.
   */
  public dailyAmount?: fhir.Quantity|undefined;
  /**
   * Identifies the quantity expected to be supplied, administered or consumed by the subject.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * This provides a textual description of constraints on the intended activity occurrence, including relation to other activities.  It may also include objectives, pre-conditions and end-conditions.  Finally, it may convey specifics about the activity such as body site, method, route, etc.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Default constructor for CarePlanActivityDetail - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CarePlanActivityDetailArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['kind']) { this.kind = source.kind; }
    if (source['instantiatesCanonical']) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => new fhir.FhirCanonical({value: x})); }
    if (source['instantiatesUri']) { this.instantiatesUri = source.instantiatesUri.map((x) => new fhir.FhirUri({value: x})); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    if (source['goal']) { this.goal = source.goal.map((x) => new fhir.Reference(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['statusReason']) { this.statusReason = new fhir.CodeableConcept(source.statusReason); }
    if (source['doNotPerform']) { this.doNotPerform = new fhir.FhirBoolean({value: source.doNotPerform}); }
    if (source['scheduled']) { this.scheduled = source.scheduled; }
    else if (source['scheduledTiming']) { this.scheduled = new fhir.Timing(source.scheduledTiming); }
    else if (source['scheduledPeriod']) { this.scheduled = new fhir.Period(source.scheduledPeriod); }
    else if (source['scheduledString']) { this.scheduled = new fhir.FhirString({value: source.scheduledString}); }
    if (source['location']) { this.location = new fhir.Reference(source.location); }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.Reference(x)); }
    if (source['product']) { this.product = source.product; }
    else if (source['productCodeableConcept']) { this.product = new fhir.CodeableConcept(source.productCodeableConcept); }
    else if (source['productReference']) { this.product = new fhir.Reference(source.productReference); }
    if (source['dailyAmount']) { this.dailyAmount = new fhir.Quantity(source.dailyAmount); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
  }
  /**
   * Required-bound Value Set for kind
   */
  public static kindRequiredValueSet():CarePlanActivityKindValueSetType {
    return CarePlanActivityKindValueSet;
  }
  /**
   * Example-bound Value Set for code
   */
  public static codeExampleValueSet():ProcedureCodeValueSetType {
    return ProcedureCodeValueSet;
  }
  /**
   * Example-bound Value Set for reasonCode
   */
  public static reasonCodeExampleValueSet():ClinicalFindingsValueSetType {
    return ClinicalFindingsValueSet;
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():CarePlanActivityStatusValueSetType {
    return CarePlanActivityStatusValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["instantiatesCanonical"]) { this.instantiatesCanonical.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["instantiatesUri"]) { this.instantiatesUri.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["goal"]) { this.goal.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:CarePlanActivityStatusValueSetEnum fhir: CarePlan.activity.detail.status:code", }));
    }
    if (this["statusReason"]) { outcome.issue!.push(...this.statusReason.doModelValidation().issue!); }
    if (this["doNotPerform"]) { outcome.issue!.push(...this.doNotPerform.doModelValidation().issue!); }
    if (this["location"]) { outcome.issue!.push(...this.location.doModelValidation().issue!); }
    if (this["performer"]) { this.performer.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["dailyAmount"]) { outcome.issue!.push(...this.dailyAmount.doModelValidation().issue!); }
    if (this["quantity"]) { outcome.issue!.push(...this.quantity.doModelValidation().issue!); }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the CarePlanActivity type.
 */
export interface CarePlanActivityArgs extends fhir.BackboneElementArgs {
  /**
   * Note that this should not duplicate the activity status (e.g. completed or in progress).
   */
  outcomeCodeableConcept?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lbs and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
   */
  outcomeReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
   */
  progress?: fhir.AnnotationArgs[]|undefined;
  /**
   * Standard extension exists ([resource-pertainsToGoal](extension-resource-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.  
   * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed independently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
   */
  reference?: fhir.ReferenceArgs|undefined;
  /**
   * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
   */
  detail?: fhir.CarePlanActivityDetailArgs|undefined;
}

/**
 * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
 */
export class CarePlanActivity extends fhir.BackboneElement {
  readonly __dataType:string = 'CarePlanActivity';
  /**
   * Note that this should not duplicate the activity status (e.g. completed or in progress).
   */
  public outcomeCodeableConcept?: fhir.CodeableConcept[]|undefined = [];
  /**
   * The activity outcome is independent of the outcome of the related goal(s).  For example, if the goal is to achieve a target body weight of 150 lbs and an activity is defined to diet, then the activity outcome could be calories consumed whereas the goal outcome is an observation for the actual body weight measured.
   */
  public outcomeReference?: fhir.Reference[]|undefined = [];
  /**
   * This element should NOT be used to describe the activity to be performed - that occurs either within the resource pointed to by activity.detail.reference or in activity.detail.description.
   */
  public progress?: fhir.Annotation[]|undefined = [];
  /**
   * Standard extension exists ([resource-pertainsToGoal](extension-resource-pertainstogoal.html)) that allows goals to be referenced from any of the referenced resources in CarePlan.activity.reference.  
   * The goal should be visible when the resource referenced by CarePlan.activity.reference is viewed independently from the CarePlan.  Requests that are pointed to by a CarePlan using this element should *not* point to this CarePlan using the "basedOn" element.  i.e. Requests that are part of a CarePlan are not "based on" the CarePlan.
   */
  public reference?: fhir.Reference|undefined;
  /**
   * A simple summary of a planned activity suitable for a general care plan system (e.g. form driven) that doesn't know about specific resources such as procedure etc.
   */
  public detail?: fhir.CarePlanActivityDetail|undefined;
  /**
   * Default constructor for CarePlanActivity - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CarePlanActivityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['outcomeCodeableConcept']) { this.outcomeCodeableConcept = source.outcomeCodeableConcept.map((x) => new fhir.CodeableConcept(x)); }
    if (source['outcomeReference']) { this.outcomeReference = source.outcomeReference.map((x) => new fhir.Reference(x)); }
    if (source['progress']) { this.progress = source.progress.map((x) => new fhir.Annotation(x)); }
    if (source['reference']) { this.reference = new fhir.Reference(source.reference); }
    if (source['detail']) { this.detail = new fhir.CarePlanActivityDetail(source.detail); }
  }
  /**
   * Example-bound Value Set for outcomeCodeableConcept
   */
  public static outcomeCodeableConceptExampleValueSet():CarePlanActivityOutcomeValueSetType {
    return CarePlanActivityOutcomeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["outcomeCodeableConcept"]) { this.outcomeCodeableConcept.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["outcomeReference"]) { this.outcomeReference.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["progress"]) { this.progress.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["reference"]) { outcome.issue!.push(...this.reference.doModelValidation().issue!); }
    if (this["detail"]) { outcome.issue!.push(...this.detail.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the CarePlan type.
 */
export interface CarePlanArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "CarePlan"|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
   */
  instantiatesCanonical?: fhir.FhirCanonical[]|string[]|undefined;
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  instantiatesUri?: fhir.FhirUri[]|string[]|undefined;
  /**
   * A care plan that is fulfilled in whole or in part by this care plan.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
   */
  replaces?: fhir.ReferenceArgs[]|undefined;
  /**
   * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the plan as not currently valid.
   */
  status: RequestStatusValueSetEnum|null;
  /**
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  intent: CarePlanIntentValueSetEnum|null;
  /**
   * There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Human-friendly name for the care plan.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * A description of the scope and nature of the plan.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Identifies the patient or group whose intended care is described by the plan.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. CarePlan activities conducted as a result of the care plan may well occur as part of other encounters.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
   */
  created?: fhir.FhirDateTime|string|undefined;
  /**
   * The author may also be a contributor.  For example, an organization can be an author, but not listed as a contributor.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * Collaborative care plans may have multiple contributors.
   */
  contributor?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
   */
  careTeam?: fhir.ReferenceArgs[]|undefined;
  /**
   * When the diagnosis is related to an allergy or intolerance, the Condition and AllergyIntolerance resources can both be used. However, to be actionable for decision support, using Condition alone is not sufficient as the allergy or intolerance condition needs to be represented as an AllergyIntolerance.
   */
  addresses?: fhir.ReferenceArgs[]|undefined;
  /**
   * Use "concern" to identify specific conditions addressed by the care plan.
   */
  supportingInfo?: fhir.ReferenceArgs[]|undefined;
  /**
   * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
   */
  goal?: fhir.ReferenceArgs[]|undefined;
  /**
   * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
   */
  activity?: fhir.CarePlanActivityArgs[]|undefined;
  /**
   * General notes about the care plan not covered elsewhere.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.
 */
export class CarePlan extends fhir.DomainResource {
  readonly __dataType:string = 'CarePlan';
  /**
   * Resource Type Name
   */
  public resourceType: "CarePlan";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * The URL pointing to a FHIR-defined protocol, guideline, questionnaire or other definition that is adhered to in whole or in part by this CarePlan.
   */
  public instantiatesCanonical?: fhir.FhirCanonical[]|undefined = [];
  /**
   * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
   */
  public instantiatesUri?: fhir.FhirUri[]|undefined = [];
  /**
   * A care plan that is fulfilled in whole or in part by this care plan.
   */
  public basedOn?: fhir.Reference[]|undefined = [];
  /**
   * The replacement could be because the initial care plan was immediately rejected (due to an issue) or because the previous care plan was completed, but the need for the action described by the care plan remains ongoing.
   */
  public replaces?: fhir.Reference[]|undefined = [];
  /**
   * Each care plan is an independent request, such that having a care plan be part of another care plan can cause issues with cascading statuses.  As such, this element is still being discussed.
   */
  public partOf?: fhir.Reference[]|undefined = [];
  /**
   * The unknown code is not to be used to convey other statuses.  The unknown code should be used when one of the statuses applies, but the authoring system doesn't know the current state of the care plan.
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the plan as not currently valid.
   */
  public status: RequestStatusValueSetEnum|null;
  /**
   * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
   */
  public intent: CarePlanIntentValueSetEnum|null;
  /**
   * There may be multiple axes of categorization and one plan may serve multiple purposes.  In some cases, this may be redundant with references to CarePlan.concern.
   */
  public category?: fhir.CodeableConcept[]|undefined = [];
  /**
   * Human-friendly name for the care plan.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * A description of the scope and nature of the plan.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Identifies the patient or group whose intended care is described by the plan.
   */
  public subject: fhir.Reference|null;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. CarePlan activities conducted as a result of the care plan may well occur as part of other encounters.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * Any activities scheduled as part of the plan should be constrained to the specified period regardless of whether the activities are planned within a single encounter/episode or across multiple encounters/episodes (e.g. the longitudinal management of a chronic condition).
   */
  public period?: fhir.Period|undefined;
  /**
   * Represents when this particular CarePlan record was created in the system, which is often a system-generated date.
   */
  public created?: fhir.FhirDateTime|undefined;
  /**
   * The author may also be a contributor.  For example, an organization can be an author, but not listed as a contributor.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Collaborative care plans may have multiple contributors.
   */
  public contributor?: fhir.Reference[]|undefined = [];
  /**
   * Identifies all people and organizations who are expected to be involved in the care envisioned by this plan.
   */
  public careTeam?: fhir.Reference[]|undefined = [];
  /**
   * When the diagnosis is related to an allergy or intolerance, the Condition and AllergyIntolerance resources can both be used. However, to be actionable for decision support, using Condition alone is not sufficient as the allergy or intolerance condition needs to be represented as an AllergyIntolerance.
   */
  public addresses?: fhir.Reference[]|undefined = [];
  /**
   * Use "concern" to identify specific conditions addressed by the care plan.
   */
  public supportingInfo?: fhir.Reference[]|undefined = [];
  /**
   * Goal can be achieving a particular change or merely maintaining a current state or even slowing a decline.
   */
  public goal?: fhir.Reference[]|undefined = [];
  /**
   * Identifies a planned action to occur as part of the plan.  For example, a medication to be used, lab tests to perform, self-monitoring, education, etc.
   */
  public activity?: fhir.CarePlanActivity[]|undefined = [];
  /**
   * General notes about the care plan not covered elsewhere.
   */
  public note?: fhir.Annotation[]|undefined = [];
  /**
   * Default constructor for CarePlan - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CarePlanArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'CarePlan';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['instantiatesCanonical']) { this.instantiatesCanonical = source.instantiatesCanonical.map((x) => new fhir.FhirCanonical({value: x})); }
    if (source['instantiatesUri']) { this.instantiatesUri = source.instantiatesUri.map((x) => new fhir.FhirUri({value: x})); }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    if (source['replaces']) { this.replaces = source.replaces.map((x) => new fhir.Reference(x)); }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['intent']) { this.intent = source.intent; }
    else { this.intent = null; }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
    if (source['contributor']) { this.contributor = source.contributor.map((x) => new fhir.Reference(x)); }
    if (source['careTeam']) { this.careTeam = source.careTeam.map((x) => new fhir.Reference(x)); }
    if (source['addresses']) { this.addresses = source.addresses.map((x) => new fhir.Reference(x)); }
    if (source['supportingInfo']) { this.supportingInfo = source.supportingInfo.map((x) => new fhir.Reference(x)); }
    if (source['goal']) { this.goal = source.goal.map((x) => new fhir.Reference(x)); }
    if (source['activity']) { this.activity = source.activity.map((x) => new fhir.CarePlanActivity(x)); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():RequestStatusValueSetType {
    return RequestStatusValueSet;
  }
  /**
   * Required-bound Value Set for intent
   */
  public static intentRequiredValueSet():CarePlanIntentValueSetType {
    return CarePlanIntentValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'CarePlan' fhir: CarePlan.resourceType:'CarePlan'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["instantiatesCanonical"]) { this.instantiatesCanonical.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["instantiatesUri"]) { this.instantiatesUri.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["basedOn"]) { this.basedOn.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["replaces"]) { this.replaces.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["partOf"]) { this.partOf.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:RequestStatusValueSetEnum fhir: CarePlan.status:code", }));
    }
    if (!this['intent']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property intent:CarePlanIntentValueSetEnum fhir: CarePlan.intent:code", }));
    }
    if (this["category"]) { this.category.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["title"]) { outcome.issue!.push(...this.title.doModelValidation().issue!); }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (!this['subject']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property subject:fhir.Reference fhir: CarePlan.subject:Reference", }));
    }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["encounter"]) { outcome.issue!.push(...this.encounter.doModelValidation().issue!); }
    if (this["period"]) { outcome.issue!.push(...this.period.doModelValidation().issue!); }
    if (this["created"]) { outcome.issue!.push(...this.created.doModelValidation().issue!); }
    if (this["author"]) { outcome.issue!.push(...this.author.doModelValidation().issue!); }
    if (this["contributor"]) { this.contributor.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["careTeam"]) { this.careTeam.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["addresses"]) { this.addresses.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["supportingInfo"]) { this.supportingInfo.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["goal"]) { this.goal.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["activity"]) { this.activity.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["note"]) { this.note.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
