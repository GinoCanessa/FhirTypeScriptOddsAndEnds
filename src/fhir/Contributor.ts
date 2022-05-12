// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Contributor

import * as fhir from '../fhir.js';

import { ContributorTypeValueSet, ContributorTypeValueSetType,} from '../fhirValueSets/ContributorTypeValueSet.js';
import { ContributorTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the Contributor type.
 */
export interface ContributorArgs extends fhir.FhirElementArgs {
  /**
   * The type of contributor.
   */
  type: ContributorTypeValueSetEnum|null;
  /**
   * The name of the individual or organization responsible for the contribution.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Contact details to assist a user in finding and communicating with the contributor.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
}

/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export class Contributor extends fhir.FhirElement {
  readonly __dataType:string = 'Contributor';
  /**
   * The type of contributor.
   */
  public type: ContributorTypeValueSetEnum|null;
  /**
   * The name of the individual or organization responsible for the contribution.
   */
  public name: fhir.FhirString|null;
  /**
   * Contact details to assist a user in finding and communicating with the contributor.
   */
  public contact?: fhir.ContactDetail[]|undefined = [];
  /**
   * Default constructor for Contributor - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ContributorArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = source.type; }
    else { this.type = null; }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    else { this.name = null; }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():ContributorTypeValueSetType {
    return ContributorTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property type:ContributorTypeValueSetEnum fhir: Contributor.type:code", }));
    }
    if (!this['name']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property name:fhir.FhirString fhir: Contributor.name:string", }));
    }
    if (this["name"]) { outcome.issue!.push(...this.name.doModelValidation().issue!); }
    if (this["contact"]) { this.contact.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
