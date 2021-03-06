// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: Meta

import * as fhir from '../fhir.js';

import { SecurityLabelsValueSet, SecurityLabelsValueSetType,} from '../fhirValueSets/SecurityLabelsValueSet.js';
import { SecurityLabelsValueSetEnum } from '../valueSetEnums.js';
import { CommonTagsValueSet, CommonTagsValueSetType,} from '../fhirValueSets/CommonTagsValueSet.js';
import { CommonTagsValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the Meta type.
 */
export interface MetaArgs extends fhir.FhirElementArgs {
  /**
   * The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.
   */
  versionId?: fhir.FhirId|string|undefined;
  /**
   * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last-Modified and SHOULD have the same value on a [read](http.html#read) interaction.
   */
  lastUpdated?: fhir.FhirInstant|string|undefined;
  /**
   * In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated source is allowed; for additional provenance details, a full Provenance resource should be used. 
   * This element can be used to indicate where the current master source of a resource that has a canonical URL if the resource is no longer hosted at the canonical URL.
   */
  source?: fhir.FhirUri|string|undefined;
  /**
   * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
   */
  profile?: fhir.FhirCanonical[]|string[]|undefined;
  /**
   * The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  security?: fhir.CodingArgs[]|undefined;
  /**
   * The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  tag?: fhir.CodingArgs[]|undefined;
}

/**
 * The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
 */
export class Meta extends fhir.FhirElement {
  readonly __dataType:string = 'Meta';
  /**
   * The server assigns this value, and ignores what the client specifies, except in the case that the server is imposing version integrity on updates/deletes.
   */
  public versionId?: fhir.FhirId|undefined;
  /**
   * This value is always populated except when the resource is first being created. The server / resource manager sets this value; what a client provides is irrelevant. This is equivalent to the HTTP Last-Modified and SHOULD have the same value on a [read](http.html#read) interaction.
   */
  public lastUpdated?: fhir.FhirInstant|undefined;
  /**
   * In the provenance resource, this corresponds to Provenance.entity.what[x]. The exact use of the source (and the implied Provenance.entity.role) is left to implementer discretion. Only one nominated source is allowed; for additional provenance details, a full Provenance resource should be used. 
   * This element can be used to indicate where the current master source of a resource that has a canonical URL if the resource is no longer hosted at the canonical URL.
   */
  public source?: fhir.FhirUri|undefined;
  /**
   * It is up to the server and/or other infrastructure of policy to determine whether/how these claims are verified and/or updated over time.  The list of profile URLs is a set.
   */
  public profile?: fhir.FhirCanonical[]|undefined = [];
  /**
   * The security labels can be updated without changing the stated version of the resource. The list of security labels is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  public security?: fhir.Coding[]|undefined = [];
  /**
   * The tags can be updated without changing the stated version of the resource. The list of tags is a set. Uniqueness is based the system/code, and version and display are ignored.
   */
  public tag?: fhir.Coding[]|undefined = [];
  /**
   * Default constructor for Meta - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<MetaArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['versionId']) { this.versionId = new fhir.FhirId({value: source.versionId}); }
    if (source['lastUpdated']) { this.lastUpdated = new fhir.FhirInstant({value: source.lastUpdated}); }
    if (source['source']) { this.source = new fhir.FhirUri({value: source.source}); }
    if (source['profile']) { this.profile = source.profile.map((x) => new fhir.FhirCanonical({value: x})); }
    if (source['security']) { this.security = source.security.map((x) => new fhir.Coding(x)); }
    if (source['tag']) { this.tag = source.tag.map((x) => new fhir.Coding(x)); }
  }
  /**
   * Extensible-bound Value Set for security
   */
  public static securityExtensibleValueSet():SecurityLabelsValueSetType {
    return SecurityLabelsValueSet;
  }
  /**
   * Example-bound Value Set for tag
   */
  public static tagExampleValueSet():CommonTagsValueSetType {
    return CommonTagsValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["versionId"]) { outcome.issue!.push(...this.versionId.doModelValidation().issue!); }
    if (this["lastUpdated"]) { outcome.issue!.push(...this.lastUpdated.doModelValidation().issue!); }
    if (this["source"]) { outcome.issue!.push(...this.source.doModelValidation().issue!); }
    if (this["profile"]) { this.profile.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["security"]) { this.security.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["tag"]) { this.tag.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
