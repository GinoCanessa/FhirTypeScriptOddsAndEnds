// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Flag

import * as fhir from '../fhir.js';

import { FlagStatusValueSet, FlagStatusValueSetType,} from '../fhirValueSets/FlagStatusValueSet.js';
import { FlagStatusValueSetEnum } from '../valueSetEnums.js';
import { FlagCategoryValueSet, FlagCategoryValueSetType,} from '../fhirValueSets/FlagCategoryValueSet.js';
import { FlagCategoryValueSetEnum } from '../valueSetEnums.js';
import { FlagCodeValueSet, FlagCodeValueSetType,} from '../fhirValueSets/FlagCodeValueSet.js';
import { FlagCodeValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the Flag type.
 */
export interface FlagArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Flag"|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: FlagStatusValueSetEnum|null;
  /**
   * The value set will often need to be adjusted based on local business rules and usage context.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The person, organization or device that created the flag.
   */
  author?: fhir.ReferenceArgs|undefined;
}

/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export class Flag extends fhir.DomainResource {
  readonly __dataType:string = 'Flag';
  /**
   * Resource Type Name
   */
  public resourceType: "Flag";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: FlagStatusValueSetEnum|null;
  /**
   * The value set will often need to be adjusted based on local business rules and usage context.
   */
  public category?: fhir.CodeableConcept[]|undefined = [];
  /**
   * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
   */
  public subject: fhir.Reference|null;
  /**
   * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
   */
  public period?: fhir.Period|undefined;
  /**
   * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The person, organization or device that created the flag.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Default constructor for Flag - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<FlagArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Flag';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():FlagStatusValueSetType {
    return FlagStatusValueSet;
  }
  /**
   * Example-bound Value Set for category
   */
  public static categoryExampleValueSet():FlagCategoryValueSetType {
    return FlagCategoryValueSet;
  }
  /**
   * Example-bound Value Set for code
   */
  public static codeExampleValueSet():FlagCodeValueSetType {
    return FlagCodeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'Flag' fhir: Flag.resourceType:'Flag'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property status:FlagStatusValueSetEnum fhir: Flag.status:code", }));
    }
    if (this["category"]) { this.category.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['code']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property code:fhir.CodeableConcept fhir: Flag.code:CodeableConcept", }));
    }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (!this['subject']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property subject:fhir.Reference fhir: Flag.subject:Reference", }));
    }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["period"]) { outcome.issue!.push(...this.period.doModelValidation().issue!); }
    if (this["encounter"]) { outcome.issue!.push(...this.encounter.doModelValidation().issue!); }
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
