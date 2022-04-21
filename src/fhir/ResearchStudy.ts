// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ResearchStudy

import * as fhir from '../fhir.js'

import { ResearchStudyObjectiveTypeValueSet, ResearchStudyObjectiveTypeValueSetType, ResearchStudyObjectiveTypeValueSetEnum } from '../fhirValueSets/ResearchStudyObjectiveTypeValueSet.js'
import { ResearchStudyStatusValueSet, ResearchStudyStatusValueSetType, ResearchStudyStatusValueSetEnum } from '../fhirValueSets/ResearchStudyStatusValueSet.js'
import { ResearchStudyPrimPurpTypeValueSet, ResearchStudyPrimPurpTypeValueSetType, ResearchStudyPrimPurpTypeValueSetEnum } from '../fhirValueSets/ResearchStudyPrimPurpTypeValueSet.js'
import { ResearchStudyPhaseValueSet, ResearchStudyPhaseValueSetType, ResearchStudyPhaseValueSetEnum } from '../fhirValueSets/ResearchStudyPhaseValueSet.js'
import { ConditionCodeValueSet, ConditionCodeValueSetType, ConditionCodeValueSetEnum } from '../fhirValueSets/ConditionCodeValueSet.js'
import { ResearchStudyReasonStoppedValueSet, ResearchStudyReasonStoppedValueSetType, ResearchStudyReasonStoppedValueSetEnum } from '../fhirValueSets/ResearchStudyReasonStoppedValueSet.js'

/**
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
export type IResearchStudyArm = fhir.IBackboneElement & { 
  /**
   * Unique, human-readable label for this arm of the study.
   */
  name: string|null;
  /**
   * Extended properties for primitive element: ResearchStudy.arm.name
   */
  _name?: fhir.IFhirElement|undefined;
  /**
   * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
   */
  type?: fhir.ICodeableConcept|undefined;
  /**
   * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.arm.description
   */
  _description?: fhir.IFhirElement|undefined;
}

/**
 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 */
export type IResearchStudyObjective = fhir.IBackboneElement & { 
  /**
   * Unique, human-readable label for this objective of the study.
   */
  name?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.objective.name
   */
  _name?: fhir.IFhirElement|undefined;
  /**
   * The kind of study objective.
   */
  type?: fhir.ICodeableConcept|undefined;
}

/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export type IResearchStudy = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "ResearchStudy";
  /**
   * Identifiers assigned to this research study by the sponsor or other systems.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * A short, descriptive user-friendly label for the study.
   */
  title?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.title
   */
  _title?: fhir.IFhirElement|undefined;
  /**
   * The set of steps expected to be performed as part of the execution of the study.
   */
  protocol?: fhir.IReference[]|undefined;
  /**
   * A larger research study of which this particular study is a component or step.
   */
  partOf?: fhir.IReference[]|undefined;
  /**
   * The current state of the study.
   */
  status: ResearchStudyStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: ResearchStudy.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
   */
  primaryPurposeType?: fhir.ICodeableConcept|undefined;
  /**
   * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
   */
  phase?: fhir.ICodeableConcept|undefined;
  /**
   * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
   */
  category?: fhir.ICodeableConcept[]|undefined;
  /**
   * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
   */
  focus?: fhir.ICodeableConcept[]|undefined;
  /**
   * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
   */
  condition?: fhir.ICodeableConcept[]|undefined;
  /**
   * Contact details to assist a user in learning more about or engaging with the study.
   */
  contact?: fhir.IContactDetail[]|undefined;
  /**
   * Citations, references and other related documents.
   */
  relatedArtifact?: fhir.IRelatedArtifact[]|undefined;
  /**
   * Key terms to aid in searching for or filtering the study.
   */
  keyword?: fhir.ICodeableConcept[]|undefined;
  /**
   * Indicates a country, state or other region where the study is taking place.
   */
  location?: fhir.ICodeableConcept[]|undefined;
  /**
   * A full description of how the study is being conducted.
   */
  description?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.description
   */
  _description?: fhir.IFhirElement|undefined;
  /**
   * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
   */
  enrollment?: fhir.IReference[]|undefined;
  /**
   * Identifies the start date and the expected (or actual, depending on status) end date for the study.
   */
  period?: fhir.IPeriod|undefined;
  /**
   * An organization that initiates the investigation and is legally responsible for the study.
   */
  sponsor?: fhir.IReference|undefined;
  /**
   * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
   */
  principalInvestigator?: fhir.IReference|undefined;
  /**
   * A facility in which study activities are conducted.
   */
  site?: fhir.IReference[]|undefined;
  /**
   * A description and/or code explaining the premature termination of the study.
   */
  reasonStopped?: fhir.ICodeableConcept|undefined;
  /**
   * Comments made about the study by the performer, subject or other participants.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
   */
  arm?: fhir.IResearchStudyArm[]|undefined;
  /**
   * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
   */
  objective?: fhir.IResearchStudyObjective[]|undefined;
}

/**
 * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
 */
export class ResearchStudyArm extends fhir.BackboneElement implements IResearchStudyArm {
  /**
   * Unique, human-readable label for this arm of the study.
   */
  public name: string|null;
  /**
   * Extended properties for primitive element: ResearchStudy.arm.name
   */
  public _name?: fhir.FhirElement|undefined;
  /**
   * Categorization of study arm, e.g. experimental, active comparator, placebo comparater.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * A succinct description of the path through the study that would be followed by a subject adhering to this arm.
   */
  public description?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.arm.description
   */
  public _description?: fhir.FhirElement|undefined;
  /**
   * Default constructor for ResearchStudyArm - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IResearchStudyArm> = { }) {
    super(source);
    if (source['name']) { this.name = source.name; }
    else { this.name = null; }
    if (source['_name']) { this._name = new fhir.FhirElement(source._name!); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
    if (source['description']) { this.description = source.description; }
    if (source['_description']) { this._description = new fhir.FhirElement(source._description!); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["name"]) { results.push(["name",'Missing required element: ResearchStudy.arm.name']); }
    if (this["_name"]) { results.push(...this._name.doModelValidation()); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    if (this["_description"]) { results.push(...this._description.doModelValidation()); }
    return results;
  }
}

/**
 * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
 */
export class ResearchStudyObjective extends fhir.BackboneElement implements IResearchStudyObjective {
  /**
   * Unique, human-readable label for this objective of the study.
   */
  public name?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.objective.name
   */
  public _name?: fhir.FhirElement|undefined;
  /**
   * The kind of study objective.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for ResearchStudyObjective - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IResearchStudyObjective> = { }) {
    super(source);
    if (source['name']) { this.name = source.name; }
    if (source['_name']) { this._name = new fhir.FhirElement(source._name!); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type!); }
  }
  /**
   * Preferred-bound Value Set for type
   */
  public typePreferredValueSet():ResearchStudyObjectiveTypeValueSetType {
    return ResearchStudyObjectiveTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["_name"]) { results.push(...this._name.doModelValidation()); }
    if (this["type"]) { results.push(...this.type.doModelValidation()); }
    return results;
  }
}

/**
 * A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.
 */
export class ResearchStudy extends fhir.DomainResource implements IResearchStudy {
  /**
   * Resource Type Name
   */
  public resourceType: "ResearchStudy";
  /**
   * Identifiers assigned to this research study by the sponsor or other systems.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * A short, descriptive user-friendly label for the study.
   */
  public title?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.title
   */
  public _title?: fhir.FhirElement|undefined;
  /**
   * The set of steps expected to be performed as part of the execution of the study.
   */
  public protocol?: fhir.Reference[]|undefined;
  /**
   * A larger research study of which this particular study is a component or step.
   */
  public partOf?: fhir.Reference[]|undefined;
  /**
   * The current state of the study.
   */
  public status: ResearchStudyStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: ResearchStudy.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * The type of study based upon the intent of the study's activities. A classification of the intent of the study.
   */
  public primaryPurposeType?: fhir.CodeableConcept|undefined;
  /**
   * The stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
   */
  public phase?: fhir.CodeableConcept|undefined;
  /**
   * Codes categorizing the type of study such as investigational vs. observational, type of blinding, type of randomization, safety vs. efficacy, etc.
   */
  public category?: fhir.CodeableConcept[]|undefined;
  /**
   * The medication(s), food(s), therapy(ies), device(s) or other concerns or interventions that the study is seeking to gain more information about.
   */
  public focus?: fhir.CodeableConcept[]|undefined;
  /**
   * The condition that is the focus of the study.  For example, In a study to examine risk factors for Lupus, might have as an inclusion criterion "healthy volunteer", but the target condition code would be a Lupus SNOMED code.
   */
  public condition?: fhir.CodeableConcept[]|undefined;
  /**
   * Contact details to assist a user in learning more about or engaging with the study.
   */
  public contact?: fhir.ContactDetail[]|undefined;
  /**
   * Citations, references and other related documents.
   */
  public relatedArtifact?: fhir.RelatedArtifact[]|undefined;
  /**
   * Key terms to aid in searching for or filtering the study.
   */
  public keyword?: fhir.CodeableConcept[]|undefined;
  /**
   * Indicates a country, state or other region where the study is taking place.
   */
  public location?: fhir.CodeableConcept[]|undefined;
  /**
   * A full description of how the study is being conducted.
   */
  public description?: string|undefined;
  /**
   * Extended properties for primitive element: ResearchStudy.description
   */
  public _description?: fhir.FhirElement|undefined;
  /**
   * The Group referenced should not generally enumerate specific subjects.  Subjects will be linked to the study using the ResearchSubject resource.
   */
  public enrollment?: fhir.Reference[]|undefined;
  /**
   * Identifies the start date and the expected (or actual, depending on status) end date for the study.
   */
  public period?: fhir.Period|undefined;
  /**
   * An organization that initiates the investigation and is legally responsible for the study.
   */
  public sponsor?: fhir.Reference|undefined;
  /**
   * A researcher in a study who oversees multiple aspects of the study, such as concept development, protocol writing, protocol submission for IRB approval, participant recruitment, informed consent, data collection, analysis, interpretation and presentation.
   */
  public principalInvestigator?: fhir.Reference|undefined;
  /**
   * A facility in which study activities are conducted.
   */
  public site?: fhir.Reference[]|undefined;
  /**
   * A description and/or code explaining the premature termination of the study.
   */
  public reasonStopped?: fhir.CodeableConcept|undefined;
  /**
   * Comments made about the study by the performer, subject or other participants.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Describes an expected sequence of events for one of the participants of a study.  E.g. Exposure to drug A, wash-out, exposure to drug B, wash-out, follow-up.
   */
  public arm?: fhir.ResearchStudyArm[]|undefined;
  /**
   * A goal that the study is aiming to achieve in terms of a scientific question to be answered by the analysis of data collected during the study.
   */
  public objective?: fhir.ResearchStudyObjective[]|undefined;
  /**
   * Default constructor for ResearchStudy - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IResearchStudy> = { }) {
    super(source);
    this.resourceType = 'ResearchStudy';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['title']) { this.title = source.title; }
    if (source['_title']) { this._title = new fhir.FhirElement(source._title!); }
    if (source['protocol']) { this.protocol = source.protocol.map((x) => new fhir.Reference(x)); }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['primaryPurposeType']) { this.primaryPurposeType = new fhir.CodeableConcept(source.primaryPurposeType!); }
    if (source['phase']) { this.phase = new fhir.CodeableConcept(source.phase!); }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    if (source['focus']) { this.focus = source.focus.map((x) => new fhir.CodeableConcept(x)); }
    if (source['condition']) { this.condition = source.condition.map((x) => new fhir.CodeableConcept(x)); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    if (source['relatedArtifact']) { this.relatedArtifact = source.relatedArtifact.map((x) => new fhir.RelatedArtifact(x)); }
    if (source['keyword']) { this.keyword = source.keyword.map((x) => new fhir.CodeableConcept(x)); }
    if (source['location']) { this.location = source.location.map((x) => new fhir.CodeableConcept(x)); }
    if (source['description']) { this.description = source.description; }
    if (source['_description']) { this._description = new fhir.FhirElement(source._description!); }
    if (source['enrollment']) { this.enrollment = source.enrollment.map((x) => new fhir.Reference(x)); }
    if (source['period']) { this.period = new fhir.Period(source.period!); }
    if (source['sponsor']) { this.sponsor = new fhir.Reference(source.sponsor!); }
    if (source['principalInvestigator']) { this.principalInvestigator = new fhir.Reference(source.principalInvestigator!); }
    if (source['site']) { this.site = source.site.map((x) => new fhir.Reference(x)); }
    if (source['reasonStopped']) { this.reasonStopped = new fhir.CodeableConcept(source.reasonStopped!); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    if (source['arm']) { this.arm = source.arm.map((x) => new fhir.ResearchStudyArm(x)); }
    if (source['objective']) { this.objective = source.objective.map((x) => new fhir.ResearchStudyObjective(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public statusRequiredValueSet():ResearchStudyStatusValueSetType {
    return ResearchStudyStatusValueSet;
  }
  /**
   * Extensible-bound Value Set for primaryPurposeType
   */
  public primaryPurposeTypeExtensibleValueSet():ResearchStudyPrimPurpTypeValueSetType {
    return ResearchStudyPrimPurpTypeValueSet;
  }
  /**
   * Example-bound Value Set for phase
   */
  public phaseExampleValueSet():ResearchStudyPhaseValueSetType {
    return ResearchStudyPhaseValueSet;
  }
  /**
   * Example-bound Value Set for condition
   */
  public conditionExampleValueSet():ConditionCodeValueSetType {
    return ConditionCodeValueSet;
  }
  /**
   * Example-bound Value Set for reasonStopped
   */
  public reasonStoppedExampleValueSet():ResearchStudyReasonStoppedValueSetType {
    return ResearchStudyReasonStoppedValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: ResearchStudy.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_title"]) { results.push(...this._title.doModelValidation()); }
    if (this["protocol"]) { this.protocol.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["partOf"]) { this.partOf.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["status"]) { results.push(["status",'Missing required element: ResearchStudy.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["primaryPurposeType"]) { results.push(...this.primaryPurposeType.doModelValidation()); }
    if (this["phase"]) { results.push(...this.phase.doModelValidation()); }
    if (this["category"]) { this.category.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["focus"]) { this.focus.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["condition"]) { this.condition.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["contact"]) { this.contact.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["relatedArtifact"]) { this.relatedArtifact.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["keyword"]) { this.keyword.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["location"]) { this.location.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_description"]) { results.push(...this._description.doModelValidation()); }
    if (this["enrollment"]) { this.enrollment.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["period"]) { results.push(...this.period.doModelValidation()); }
    if (this["sponsor"]) { results.push(...this.sponsor.doModelValidation()); }
    if (this["principalInvestigator"]) { results.push(...this.principalInvestigator.doModelValidation()); }
    if (this["site"]) { this.site.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["reasonStopped"]) { results.push(...this.reasonStopped.doModelValidation()); }
    if (this["note"]) { this.note.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["arm"]) { this.arm.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["objective"]) { this.objective.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
