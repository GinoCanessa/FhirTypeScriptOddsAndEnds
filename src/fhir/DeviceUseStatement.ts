// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceUseStatement

import * as fhir from '../fhir.js';

import { DeviceStatementStatusValueSet, DeviceStatementStatusValueSetType,} from '../fhirValueSets/DeviceStatementStatusValueSet.js';
import { DeviceStatementStatusValueSetEnum } from '../valueSetEnums.js';
import { BodySiteValueSet, BodySiteValueSetType,} from '../fhirValueSets/BodySiteValueSet.js';
import { BodySiteValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the DeviceUseStatement type.
 */
export interface DeviceUseStatementArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DeviceUseStatement"|undefined;
  /**
   * An external identifier for this statement such as an IRI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
   * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
   */
  status: DeviceStatementStatusValueSetEnum|null;
  /**
   * The patient who used the device.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The most common use cases for deriving a DeviceUseStatement comes from creating it from a request or from an observation or a claim. it should be noted that the amount of information that is available varies from the type resource that you derive the DeviceUseStatement from.
   */
  derivedFrom?: fhir.ReferenceArgs[]|undefined;
  /**
   * How often the device was used.
   */
  timing?: fhir.Timing|fhir.Period|fhir.FhirDateTime|undefined;
  /**
   * How often the device was used.
   */
  timingTiming?: fhir.TimingArgs|undefined;
  /**
   * How often the device was used.
   */
  timingPeriod?: fhir.PeriodArgs|undefined;
  /**
   * How often the device was used.
   */
  timingDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The time at which the statement was made/recorded.
   */
  recordedOn?: fhir.FhirDateTime|string|undefined;
  /**
   * Who reported the device was being used by the patient.
   */
  source?: fhir.ReferenceArgs|undefined;
  /**
   * The details of the device used.
   */
  device: fhir.ReferenceArgs|null;
  /**
   * Reason or justification for the use of the device.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates another resource whose existence justifies this DeviceUseStatement.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
   */
  bodySite?: fhir.CodeableConceptArgs|undefined;
  /**
   * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export class DeviceUseStatement extends fhir.DomainResource {
  readonly __dataType:string = 'DeviceUseStatement';
  /**
   * Resource Type Name
   */
  public resourceType: "DeviceUseStatement";
  /**
   * An external identifier for this statement such as an IRI.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
   */
  public basedOn?: fhir.Reference[]|undefined = [];
  /**
   * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
   * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
   */
  public status: DeviceStatementStatusValueSetEnum|null;
  /**
   * The patient who used the device.
   */
  public subject: fhir.Reference|null;
  /**
   * The most common use cases for deriving a DeviceUseStatement comes from creating it from a request or from an observation or a claim. it should be noted that the amount of information that is available varies from the type resource that you derive the DeviceUseStatement from.
   */
  public derivedFrom?: fhir.Reference[]|undefined = [];
  /**
   * How often the device was used.
   */
  public timing?: (fhir.Timing|fhir.Period|fhir.FhirDateTime)|undefined;
  readonly __timingIsChoice:true = true;
  /**
   * The time at which the statement was made/recorded.
   */
  public recordedOn?: fhir.FhirDateTime|undefined;
  /**
   * Who reported the device was being used by the patient.
   */
  public source?: fhir.Reference|undefined;
  /**
   * The details of the device used.
   */
  public device: fhir.Reference|null;
  /**
   * Reason or justification for the use of the device.
   */
  public reasonCode?: fhir.CodeableConcept[]|undefined = [];
  /**
   * Indicates another resource whose existence justifies this DeviceUseStatement.
   */
  public reasonReference?: fhir.Reference[]|undefined = [];
  /**
   * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
   */
  public bodySite?: fhir.CodeableConcept|undefined;
  /**
   * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
   */
  public note?: fhir.Annotation[]|undefined = [];
  /**
   * Default constructor for DeviceUseStatement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceUseStatementArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DeviceUseStatement';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['derivedFrom']) { this.derivedFrom = source.derivedFrom.map((x) => new fhir.Reference(x)); }
    if (source['timing']) { this.timing = source.timing; }
    else if (source['timingTiming']) { this.timing = new fhir.Timing(source.timingTiming); }
    else if (source['timingPeriod']) { this.timing = new fhir.Period(source.timingPeriod); }
    else if (source['timingDateTime']) { this.timing = new fhir.FhirDateTime({value: source.timingDateTime}); }
    if (source['recordedOn']) { this.recordedOn = new fhir.FhirDateTime({value: source.recordedOn}); }
    if (source['source']) { this.source = new fhir.Reference(source.source); }
    if (source['device']) { this.device = new fhir.Reference(source.device); }
    else { this.device = null; }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    if (source['bodySite']) { this.bodySite = new fhir.CodeableConcept(source.bodySite); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():DeviceStatementStatusValueSetType {
    return DeviceStatementStatusValueSet;
  }
  /**
   * Example-bound Value Set for bodySite
   */
  public static bodySiteExampleValueSet():BodySiteValueSetType {
    return BodySiteValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'DeviceUseStatement' fhir: DeviceUseStatement.resourceType:'DeviceUseStatement'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["basedOn"]) { this.basedOn.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:DeviceStatementStatusValueSetEnum fhir: DeviceUseStatement.status:code", }));
    }
    if (!this['subject']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property subject:fhir.Reference fhir: DeviceUseStatement.subject:Reference", }));
    }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["derivedFrom"]) { this.derivedFrom.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["recordedOn"]) { outcome.issue!.push(...this.recordedOn.doModelValidation().issue!); }
    if (this["source"]) { outcome.issue!.push(...this.source.doModelValidation().issue!); }
    if (!this['device']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property device:fhir.Reference fhir: DeviceUseStatement.device:Reference", }));
    }
    if (this["device"]) { outcome.issue!.push(...this.device.doModelValidation().issue!); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["bodySite"]) { outcome.issue!.push(...this.bodySite.doModelValidation().issue!); }
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
