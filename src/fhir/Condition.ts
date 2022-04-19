// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export type IConditionStage = fhir.IBackboneElement & {
  /**
   * Reference to a formal record of the evidence on which the staging assessment is based.
   */
  assessment?: fhir.IReference[]|undefined;
  /**
   * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
   */
  summary?: fhir.ICodeableConcept|undefined;
  /**
   * The kind of staging, such as pathological or clinical staging.
   */
  type?: fhir.ICodeableConcept|undefined;
}
/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
export type IConditionEvidence = fhir.IBackboneElement & {
  /**
   * A manifestation or symptom that led to the recording of this condition.
   */
  code?: fhir.ICodeableConcept[]|undefined;
  /**
   * Links to other relevant information, including pathology reports.
   */
  detail?: fhir.IReference[]|undefined;
}
/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 */
export type ICondition = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "Condition";
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementDateTime?: string|undefined;
  _abatementDateTime?: fhir.IFhirElement|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementAge?: fhir.IAge|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementPeriod?: fhir.IPeriod|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementRange?: fhir.IRange|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementString?: string|undefined;
  _abatementString?: fhir.IFhirElement|undefined;
  /**
   * Individual who is making the condition statement.
   */
  asserter?: fhir.IReference|undefined;
  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  bodySite?: fhir.ICodeableConcept[]|undefined;
  /**
   * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
   */
  category?: fhir.ICodeableConcept[]|undefined;
  /**
   * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  clinicalStatus?: fhir.ICodeableConcept|undefined;
  /**
   * Identification of the condition, problem or diagnosis.
   */
  code?: fhir.ICodeableConcept|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
   */
  encounter?: fhir.IReference|undefined;
  /**
   * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
   */
  evidence?: fhir.IConditionEvidence[]|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetDateTime?: string|undefined;
  _onsetDateTime?: fhir.IFhirElement|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetAge?: fhir.IAge|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetPeriod?: fhir.IPeriod|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetRange?: fhir.IRange|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetString?: string|undefined;
  _onsetString?: fhir.IFhirElement|undefined;
  /**
   * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
   */
  recordedDate?: string|undefined;
  _recordedDate?: fhir.IFhirElement|undefined;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: fhir.IReference|undefined;
  /**
   * Coding of the severity with a terminology is preferred, where possible.
   */
  severity?: fhir.ICodeableConcept|undefined;
  /**
   * Clinical stage or grade of a condition. May include formal severity assessments.
   */
  stage?: fhir.IConditionStage[]|undefined;
  /**
   * Indicates the patient or group who the condition record is associated with.
   */
  subject: fhir.IReference|null;
  /**
   * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
   * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  verificationStatus?: fhir.ICodeableConcept|undefined;
}
/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export class ConditionStage extends fhir.BackboneElement implements fhir.IConditionStage {
  /**
   * Reference to a formal record of the evidence on which the staging assessment is based.
   */
  public assessment?: fhir.Reference[]|undefined;
  /**
   * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
   */
  public summary?: fhir.CodeableConcept|undefined;
  /**
   * The kind of staging, such as pathological or clinical staging.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for ConditionStage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IConditionStage> = {}) {
    super(source);
    if (source["assessment"]) { this.assessment = source.assessment.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["summary"]) { this.summary = new fhir.CodeableConcept(source.summary!); }
    if (source["type"]) { this.type = new fhir.CodeableConcept(source.type!); }
  }
  /**
   * Check if the current ConditionStage contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ConditionStage from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IConditionStage):ConditionStage {
    var dest:ConditionStage = new ConditionStage(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `ConditionStage is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
export class ConditionEvidence extends fhir.BackboneElement implements fhir.IConditionEvidence {
  /**
   * A manifestation or symptom that led to the recording of this condition.
   */
  public code?: fhir.CodeableConcept[]|undefined;
  /**
   * Links to other relevant information, including pathology reports.
   */
  public detail?: fhir.Reference[]|undefined;
  /**
   * Default constructor for ConditionEvidence - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IConditionEvidence> = {}) {
    super(source);
    if (source["code"]) { this.code = source.code.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["detail"]) { this.detail = source.detail.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
  }
  /**
   * Check if the current ConditionEvidence contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a ConditionEvidence from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IConditionEvidence):ConditionEvidence {
    var dest:ConditionEvidence = new ConditionEvidence(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `ConditionEvidence is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 */
export class Condition extends fhir.DomainResource implements fhir.ICondition {
  /**
   * Resource Type Name
   */
  public override resourceType: "Condition";
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  public abatementDateTime?: string|undefined;
  public _abatementDateTime?: fhir.FhirElement|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  public abatementAge?: fhir.Age|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  public abatementPeriod?: fhir.Period|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  public abatementRange?: fhir.Range|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  public abatementString?: string|undefined;
  public _abatementString?: fhir.FhirElement|undefined;
  /**
   * Individual who is making the condition statement.
   */
  public asserter?: fhir.Reference|undefined;
  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  public bodySite?: fhir.CodeableConcept[]|undefined;
  /**
   * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
   */
  public category?: fhir.CodeableConcept[]|undefined;
  /**
   * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  public clinicalStatus?: fhir.CodeableConcept|undefined;
  /**
   * Identification of the condition, problem or diagnosis.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
   */
  public evidence?: fhir.ConditionEvidence[]|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  public onsetDateTime?: string|undefined;
  public _onsetDateTime?: fhir.FhirElement|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  public onsetAge?: fhir.Age|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  public onsetPeriod?: fhir.Period|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  public onsetRange?: fhir.Range|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  public onsetString?: string|undefined;
  public _onsetString?: fhir.FhirElement|undefined;
  /**
   * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
   */
  public recordedDate?: string|undefined;
  public _recordedDate?: fhir.FhirElement|undefined;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  public recorder?: fhir.Reference|undefined;
  /**
   * Coding of the severity with a terminology is preferred, where possible.
   */
  public severity?: fhir.CodeableConcept|undefined;
  /**
   * Clinical stage or grade of a condition. May include formal severity assessments.
   */
  public stage?: fhir.ConditionStage[]|undefined;
  /**
   * Indicates the patient or group who the condition record is associated with.
   */
  public subject: fhir.Reference|null;
  /**
   * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
   * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  public verificationStatus?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for Condition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.ICondition> = {}) {
    super(source);
    this.resourceType = 'Condition';
    if (source["abatementDateTime"]) { this.abatementDateTime = source.abatementDateTime; }
    if (source["_abatementDateTime"]) { this._abatementDateTime = new fhir.FhirElement(source._abatementDateTime!); }
    if (source["abatementAge"]) { this.abatementAge = new fhir.Age(source.abatementAge!); }
    if (source["abatementPeriod"]) { this.abatementPeriod = new fhir.Period(source.abatementPeriod!); }
    if (source["abatementRange"]) { this.abatementRange = new fhir.Range(source.abatementRange!); }
    if (source["abatementString"]) { this.abatementString = source.abatementString; }
    if (source["_abatementString"]) { this._abatementString = new fhir.FhirElement(source._abatementString!); }
    if (source["asserter"]) { this.asserter = new fhir.Reference(source.asserter!); }
    if (source["bodySite"]) { this.bodySite = source.bodySite.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["category"]) { this.category = source.category.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["clinicalStatus"]) { this.clinicalStatus = new fhir.CodeableConcept(source.clinicalStatus!); }
    if (source["code"]) { this.code = new fhir.CodeableConcept(source.code!); }
    if (source["encounter"]) { this.encounter = new fhir.Reference(source.encounter!); }
    if (source["evidence"]) { this.evidence = source.evidence.map((x:Partial<fhir.IConditionEvidence>) => new fhir.ConditionEvidence(x)); }
    if (source["identifier"]) { this.identifier = source.identifier.map((x:Partial<fhir.IIdentifier>) => new fhir.Identifier(x)); }
    if (source["note"]) { this.note = source.note.map((x:Partial<fhir.IAnnotation>) => new fhir.Annotation(x)); }
    if (source["onsetDateTime"]) { this.onsetDateTime = source.onsetDateTime; }
    if (source["_onsetDateTime"]) { this._onsetDateTime = new fhir.FhirElement(source._onsetDateTime!); }
    if (source["onsetAge"]) { this.onsetAge = new fhir.Age(source.onsetAge!); }
    if (source["onsetPeriod"]) { this.onsetPeriod = new fhir.Period(source.onsetPeriod!); }
    if (source["onsetRange"]) { this.onsetRange = new fhir.Range(source.onsetRange!); }
    if (source["onsetString"]) { this.onsetString = source.onsetString; }
    if (source["_onsetString"]) { this._onsetString = new fhir.FhirElement(source._onsetString!); }
    if (source["recordedDate"]) { this.recordedDate = source.recordedDate; }
    if (source["_recordedDate"]) { this._recordedDate = new fhir.FhirElement(source._recordedDate!); }
    if (source["recorder"]) { this.recorder = new fhir.Reference(source.recorder!); }
    if (source["severity"]) { this.severity = new fhir.CodeableConcept(source.severity!); }
    if (source["stage"]) { this.stage = source.stage.map((x:Partial<fhir.IConditionStage>) => new fhir.ConditionStage(x)); }
    this.subject = null;
    if (source["subject"]) { this.subject = new fhir.Reference(source.subject!); }
    if (this.subject === undefined) { this.subject = null }
    if (source["verificationStatus"]) { this.verificationStatus = new fhir.CodeableConcept(source.verificationStatus!); }
  }
  /**
   * Check if the current Condition contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["subject"] === undefined) { missingElements.push("subject"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a Condition from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.ICondition):Condition {
    var dest:Condition = new Condition(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `Condition is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}