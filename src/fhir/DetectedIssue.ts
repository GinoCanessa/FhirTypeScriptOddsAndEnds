// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DetectedIssue

import * as fhir from '../fhir.js';

import { ManifestationOrSymptomValueSet, ManifestationOrSymptomValueSetType,} from '../fhirValueSets/ManifestationOrSymptomValueSet.js';
import { ManifestationOrSymptomValueSetEnum } from '../valueSetEnums.js';
import { DetectedissueMitigationActionValueSet, DetectedissueMitigationActionValueSetType,} from '../fhirValueSets/DetectedissueMitigationActionValueSet.js';
import { DetectedissueMitigationActionValueSetEnum } from '../valueSetEnums.js';
import { ObservationStatusValueSet, ObservationStatusValueSetType,} from '../fhirValueSets/ObservationStatusValueSet.js';
import { ObservationStatusValueSetEnum } from '../valueSetEnums.js';
import { DetectedissueCategoryValueSet, DetectedissueCategoryValueSetType,} from '../fhirValueSets/DetectedissueCategoryValueSet.js';
import { DetectedissueCategoryValueSetEnum } from '../valueSetEnums.js';
import { DetectedissueSeverityValueSet, DetectedissueSeverityValueSetType,} from '../fhirValueSets/DetectedissueSeverityValueSet.js';
import { DetectedissueSeverityValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the DetectedIssueEvidence type.
 */
export interface DetectedIssueEvidenceArgs extends fhir.BackboneElementArgs {
  /**
   * A manifestation that led to the recording of this detected issue.
   */
  code?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
   */
  detail?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 */
export class DetectedIssueEvidence extends fhir.BackboneElement {
  readonly __dataType:string = 'DetectedIssueEvidence';
  /**
   * A manifestation that led to the recording of this detected issue.
   */
  public code?: fhir.CodeableConcept[]|undefined = [];
  /**
   * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
   */
  public detail?: fhir.Reference[]|undefined = [];
  /**
   * Default constructor for DetectedIssueEvidence - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DetectedIssueEvidenceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = source.code.map((x) => new fhir.CodeableConcept(x)); }
    if (source['detail']) { this.detail = source.detail.map((x) => new fhir.Reference(x)); }
  }
  /**
   * Example-bound Value Set for code
   */
  public static codeExampleValueSet():ManifestationOrSymptomValueSetType {
    return ManifestationOrSymptomValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["code"]) { this.code.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["detail"]) { this.detail.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
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
 * Valid arguments for the DetectedIssueMitigation type.
 */
export interface DetectedIssueMitigationArgs extends fhir.BackboneElementArgs {
  /**
   * The "text" component can be used for detail or when no appropriate code exists.
   */
  action: fhir.CodeableConceptArgs|null;
  /**
   * This might not be the same as when the mitigating step was actually taken.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
   */
  author?: fhir.ReferenceArgs|undefined;
}

/**
 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export class DetectedIssueMitigation extends fhir.BackboneElement {
  readonly __dataType:string = 'DetectedIssueMitigation';
  /**
   * The "text" component can be used for detail or when no appropriate code exists.
   */
  public action: fhir.CodeableConcept|null;
  /**
   * This might not be the same as when the mitigating step was actually taken.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Default constructor for DetectedIssueMitigation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DetectedIssueMitigationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['action']) { this.action = new fhir.CodeableConcept(source.action); }
    else { this.action = null; }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
  }
  /**
   * Preferred-bound Value Set for action
   */
  public static actionPreferredValueSet():DetectedissueMitigationActionValueSetType {
    return DetectedissueMitigationActionValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['action']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property action:fhir.CodeableConcept fhir: DetectedIssue.mitigation.action:CodeableConcept", }));
    }
    if (this["action"]) { outcome.issue!.push(...this.action.doModelValidation().issue!); }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["author"]) { outcome.issue!.push(...this.author.doModelValidation().issue!); }
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
 * Valid arguments for the DetectedIssue type.
 */
export interface DetectedIssueArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DetectedIssue"|undefined;
  /**
   * Business identifier associated with the detected issue record.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
   */
  status: ObservationStatusValueSetEnum|null;
  /**
   * Identifies the general type of issue identified.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
   */
  severity?: DetectedissueSeverityValueSetEnum|undefined;
  /**
   * Indicates the patient whose record the detected issue is associated with.
   */
  patient?: fhir.ReferenceArgs|undefined;
  /**
   * The date or period when the detected issue was initially identified.
   */
  identified?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * The date or period when the detected issue was initially identified.
   */
  identifiedDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The date or period when the detected issue was initially identified.
   */
  identifiedPeriod?: fhir.PeriodArgs|undefined;
  /**
   * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
   */
  implicated?: fhir.ReferenceArgs[]|undefined;
  /**
   * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
   */
  evidence?: fhir.DetectedIssueEvidenceArgs[]|undefined;
  /**
   * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
   */
  detail?: fhir.FhirString|string|undefined;
  /**
   * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
   */
  reference?: fhir.FhirUri|string|undefined;
  /**
   * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
   */
  mitigation?: fhir.DetectedIssueMitigationArgs[]|undefined;
}

/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export class DetectedIssue extends fhir.DomainResource {
  readonly __dataType:string = 'DetectedIssue';
  /**
   * Resource Type Name
   */
  public resourceType: "DetectedIssue";
  /**
   * Business identifier associated with the detected issue record.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
   */
  public status: ObservationStatusValueSetEnum|null;
  /**
   * Identifies the general type of issue identified.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
   */
  public severity?: DetectedissueSeverityValueSetEnum|undefined;
  /**
   * Indicates the patient whose record the detected issue is associated with.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * The date or period when the detected issue was initially identified.
   */
  public identified?: (fhir.FhirDateTime|fhir.Period)|undefined;
  readonly __identifiedIsChoice:true = true;
  /**
   * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
   */
  public author?: fhir.Reference|undefined;
  /**
   * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
   */
  public implicated?: fhir.Reference[]|undefined = [];
  /**
   * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
   */
  public evidence?: fhir.DetectedIssueEvidence[]|undefined = [];
  /**
   * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
   */
  public detail?: fhir.FhirString|undefined;
  /**
   * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
   */
  public reference?: fhir.FhirUri|undefined;
  /**
   * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
   */
  public mitigation?: fhir.DetectedIssueMitigation[]|undefined = [];
  /**
   * Default constructor for DetectedIssue - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DetectedIssueArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DetectedIssue';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['severity']) { this.severity = source.severity; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    if (source['identified']) { this.identified = source.identified; }
    else if (source['identifiedDateTime']) { this.identified = new fhir.FhirDateTime({value: source.identifiedDateTime}); }
    else if (source['identifiedPeriod']) { this.identified = new fhir.Period(source.identifiedPeriod); }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
    if (source['implicated']) { this.implicated = source.implicated.map((x) => new fhir.Reference(x)); }
    if (source['evidence']) { this.evidence = source.evidence.map((x) => new fhir.DetectedIssueEvidence(x)); }
    if (source['detail']) { this.detail = new fhir.FhirString({value: source.detail}); }
    if (source['reference']) { this.reference = new fhir.FhirUri({value: source.reference}); }
    if (source['mitigation']) { this.mitigation = source.mitigation.map((x) => new fhir.DetectedIssueMitigation(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():ObservationStatusValueSetType {
    return ObservationStatusValueSet;
  }
  /**
   * Preferred-bound Value Set for code
   */
  public static codePreferredValueSet():DetectedissueCategoryValueSetType {
    return DetectedissueCategoryValueSet;
  }
  /**
   * Required-bound Value Set for severity
   */
  public static severityRequiredValueSet():DetectedissueSeverityValueSetType {
    return DetectedissueSeverityValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'DetectedIssue' fhir: DetectedIssue.resourceType:'DetectedIssue'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:ObservationStatusValueSetEnum fhir: DetectedIssue.status:code", }));
    }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["patient"]) { outcome.issue!.push(...this.patient.doModelValidation().issue!); }
    if (this["author"]) { outcome.issue!.push(...this.author.doModelValidation().issue!); }
    if (this["implicated"]) { this.implicated.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["evidence"]) { this.evidence.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["detail"]) { outcome.issue!.push(...this.detail.doModelValidation().issue!); }
    if (this["reference"]) { outcome.issue!.push(...this.reference.doModelValidation().issue!); }
    if (this["mitigation"]) { this.mitigation.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
