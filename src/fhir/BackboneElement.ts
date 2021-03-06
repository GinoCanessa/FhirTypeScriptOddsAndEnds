// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: BackboneElement

import * as fhir from '../fhir.js';

import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the BackboneElement type.
 */
export interface BackboneElementArgs extends fhir.FhirElementArgs {
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  modifierExtension?: fhir.ExtensionArgs[]|undefined;
}

/**
 * Base definition for all elements that are defined inside a resource - but not those in a data type.
 */
export class BackboneElement extends fhir.FhirElement {
  readonly __dataType:string = 'BackboneElement';
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  public modifierExtension?: fhir.Extension[]|undefined = [];
  /**
   * Default constructor for BackboneElement - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<BackboneElementArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['modifierExtension']) { this.modifierExtension = source.modifierExtension.map((x) => new fhir.Extension(x)); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["modifierExtension"]) { this.modifierExtension.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
