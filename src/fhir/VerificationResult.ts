// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir'
/**
 * Information about the primary source(s) involved in validation.
 */
export type IVerificationResultPrimarySource = fhir.IBackboneElement & {
  /**
   * Ability of the primary source to push updates/alerts (yes; no; undetermined).
   */
  canPushUpdates?: fhir.ICodeableConcept|undefined;
  /**
   * Method for communicating with the primary source (manual; API; Push).
   */
  communicationMethod?: fhir.ICodeableConcept[]|undefined;
  /**
   * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
   */
  pushTypeAvailable?: fhir.ICodeableConcept[]|undefined;
  /**
   * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
   */
  type?: fhir.ICodeableConcept[]|undefined;
  /**
   * When the target was validated against the primary source.
   */
  validationDate?: string|undefined;
  _validationDate?: fhir.IFhirElement|undefined;
  /**
   * Status of the validation of the target against the primary source (successful; failed; unknown).
   */
  validationStatus?: fhir.ICodeableConcept|undefined;
  /**
   * Reference to the primary source.
   */
  who?: fhir.IReference|undefined;
}
/**
 * Information about the entity attesting to information.
 */
export type IVerificationResultAttestation = fhir.IBackboneElement & {
  /**
   * The method by which attested information was submitted/retrieved (manual; API; Push).
   */
  communicationMethod?: fhir.ICodeableConcept|undefined;
  /**
   * The date the information was attested to.
   */
  date?: string|undefined;
  _date?: fhir.IFhirElement|undefined;
  /**
   * When the who is asserting on behalf of another (organization or individual).
   */
  onBehalfOf?: fhir.IReference|undefined;
  /**
   * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
   */
  proxyIdentityCertificate?: string|undefined;
  _proxyIdentityCertificate?: fhir.IFhirElement|undefined;
  /**
   * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
   */
  proxySignature?: fhir.ISignature|undefined;
  /**
   * A digital identity certificate associated with the attestation source.
   */
  sourceIdentityCertificate?: string|undefined;
  _sourceIdentityCertificate?: fhir.IFhirElement|undefined;
  /**
   * Signed assertion by the attestation source that they have attested to the information.
   */
  sourceSignature?: fhir.ISignature|undefined;
  /**
   * The individual or organization attesting to information.
   */
  who?: fhir.IReference|undefined;
}
/**
 * Information about the entity validating information.
 */
export type IVerificationResultValidator = fhir.IBackboneElement & {
  /**
   * Signed assertion by the validator that they have validated the information.
   */
  attestationSignature?: fhir.ISignature|undefined;
  /**
   * A digital identity certificate associated with the validator.
   */
  identityCertificate?: string|undefined;
  _identityCertificate?: fhir.IFhirElement|undefined;
  /**
   * Reference to the organization validating information.
   */
  organization: fhir.IReference|null;
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export type IVerificationResult = fhir.IDomainResource & {
  /**
   * Resource Type Name
   */
  resourceType: "VerificationResult";
  /**
   * Information about the entity attesting to information.
   */
  attestation?: fhir.IVerificationResultAttestation|undefined;
  /**
   * The result if validation fails (fatal; warning; record only; none).
   */
  failureAction?: fhir.ICodeableConcept|undefined;
  /**
   * Frequency of revalidation.
   */
  frequency?: fhir.ITiming|undefined;
  /**
   * The date/time validation was last completed (including failed validations).
   */
  lastPerformed?: string|undefined;
  _lastPerformed?: fhir.IFhirElement|undefined;
  /**
   * The frequency with which the target must be validated (none; initial; periodic).
   */
  need?: fhir.ICodeableConcept|undefined;
  /**
   * The date when target is next validated, if appropriate.
   */
  nextScheduled?: string|undefined;
  _nextScheduled?: fhir.IFhirElement|undefined;
  /**
   * Information about the primary source(s) involved in validation.
   */
  primarySource?: fhir.IVerificationResultPrimarySource[]|undefined;
  /**
   * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
   */
  status: VerificationResultStatusEnum|null;
  _status?: fhir.IFhirElement|undefined;
  /**
   * When the validation status was updated.
   */
  statusDate?: string|undefined;
  _statusDate?: fhir.IFhirElement|undefined;
  /**
   * A resource that was validated.
   */
  target?: fhir.IReference[]|undefined;
  /**
   * The fhirpath location(s) within the resource that was validated.
   */
  targetLocation?: string[]|undefined;
  _targetLocation?: fhir.IFhirElement[]|undefined;
  /**
   * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
   */
  validationProcess?: fhir.ICodeableConcept[]|undefined;
  /**
   * What the target is validated against (nothing; primary source; multiple sources).
   */
  validationType?: fhir.ICodeableConcept|undefined;
  /**
   * Information about the entity validating information.
   */
  validator?: fhir.IVerificationResultValidator[]|undefined;
}
/**
 * Information about the primary source(s) involved in validation.
 */
export class VerificationResultPrimarySource extends fhir.BackboneElement implements fhir.IVerificationResultPrimarySource {
  /**
   * Ability of the primary source to push updates/alerts (yes; no; undetermined).
   */
  public canPushUpdates?: fhir.CodeableConcept|undefined;
  /**
   * Method for communicating with the primary source (manual; API; Push).
   */
  public communicationMethod?: fhir.CodeableConcept[]|undefined;
  /**
   * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
   */
  public pushTypeAvailable?: fhir.CodeableConcept[]|undefined;
  /**
   * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
   */
  public type?: fhir.CodeableConcept[]|undefined;
  /**
   * When the target was validated against the primary source.
   */
  public validationDate?: string|undefined;
  public _validationDate?: fhir.FhirElement|undefined;
  /**
   * Status of the validation of the target against the primary source (successful; failed; unknown).
   */
  public validationStatus?: fhir.CodeableConcept|undefined;
  /**
   * Reference to the primary source.
   */
  public who?: fhir.Reference|undefined;
  /**
   * Default constructor for VerificationResultPrimarySource - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IVerificationResultPrimarySource> = {}) {
    super(source);
    if (source["canPushUpdates"]) { this.canPushUpdates = new fhir.CodeableConcept(source.canPushUpdates!); }
    if (source["communicationMethod"]) { this.communicationMethod = source.communicationMethod.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["pushTypeAvailable"]) { this.pushTypeAvailable = source.pushTypeAvailable.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["type"]) { this.type = source.type.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["validationDate"]) { this.validationDate = source.validationDate; }
    if (source["_validationDate"]) { this._validationDate = new fhir.FhirElement(source._validationDate!); }
    if (source["validationStatus"]) { this.validationStatus = new fhir.CodeableConcept(source.validationStatus!); }
    if (source["who"]) { this.who = new fhir.Reference(source.who!); }
  }
  /**
   * Check if the current VerificationResultPrimarySource contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a VerificationResultPrimarySource from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IVerificationResultPrimarySource):VerificationResultPrimarySource {
    var dest:VerificationResultPrimarySource = new VerificationResultPrimarySource(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `VerificationResultPrimarySource is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Information about the entity attesting to information.
 */
export class VerificationResultAttestation extends fhir.BackboneElement implements fhir.IVerificationResultAttestation {
  /**
   * The method by which attested information was submitted/retrieved (manual; API; Push).
   */
  public communicationMethod?: fhir.CodeableConcept|undefined;
  /**
   * The date the information was attested to.
   */
  public date?: string|undefined;
  public _date?: fhir.FhirElement|undefined;
  /**
   * When the who is asserting on behalf of another (organization or individual).
   */
  public onBehalfOf?: fhir.Reference|undefined;
  /**
   * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
   */
  public proxyIdentityCertificate?: string|undefined;
  public _proxyIdentityCertificate?: fhir.FhirElement|undefined;
  /**
   * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
   */
  public proxySignature?: fhir.Signature|undefined;
  /**
   * A digital identity certificate associated with the attestation source.
   */
  public sourceIdentityCertificate?: string|undefined;
  public _sourceIdentityCertificate?: fhir.FhirElement|undefined;
  /**
   * Signed assertion by the attestation source that they have attested to the information.
   */
  public sourceSignature?: fhir.Signature|undefined;
  /**
   * The individual or organization attesting to information.
   */
  public who?: fhir.Reference|undefined;
  /**
   * Default constructor for VerificationResultAttestation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IVerificationResultAttestation> = {}) {
    super(source);
    if (source["communicationMethod"]) { this.communicationMethod = new fhir.CodeableConcept(source.communicationMethod!); }
    if (source["date"]) { this.date = source.date; }
    if (source["_date"]) { this._date = new fhir.FhirElement(source._date!); }
    if (source["onBehalfOf"]) { this.onBehalfOf = new fhir.Reference(source.onBehalfOf!); }
    if (source["proxyIdentityCertificate"]) { this.proxyIdentityCertificate = source.proxyIdentityCertificate; }
    if (source["_proxyIdentityCertificate"]) { this._proxyIdentityCertificate = new fhir.FhirElement(source._proxyIdentityCertificate!); }
    if (source["proxySignature"]) { this.proxySignature = new fhir.Signature(source.proxySignature!); }
    if (source["sourceIdentityCertificate"]) { this.sourceIdentityCertificate = source.sourceIdentityCertificate; }
    if (source["_sourceIdentityCertificate"]) { this._sourceIdentityCertificate = new fhir.FhirElement(source._sourceIdentityCertificate!); }
    if (source["sourceSignature"]) { this.sourceSignature = new fhir.Signature(source.sourceSignature!); }
    if (source["who"]) { this.who = new fhir.Reference(source.who!); }
  }
  /**
   * Check if the current VerificationResultAttestation contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a VerificationResultAttestation from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IVerificationResultAttestation):VerificationResultAttestation {
    var dest:VerificationResultAttestation = new VerificationResultAttestation(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `VerificationResultAttestation is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Information about the entity validating information.
 */
export class VerificationResultValidator extends fhir.BackboneElement implements fhir.IVerificationResultValidator {
  /**
   * Signed assertion by the validator that they have validated the information.
   */
  public attestationSignature?: fhir.Signature|undefined;
  /**
   * A digital identity certificate associated with the validator.
   */
  public identityCertificate?: string|undefined;
  public _identityCertificate?: fhir.FhirElement|undefined;
  /**
   * Reference to the organization validating information.
   */
  public organization: fhir.Reference|null;
  /**
   * Default constructor for VerificationResultValidator - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IVerificationResultValidator> = {}) {
    super(source);
    if (source["attestationSignature"]) { this.attestationSignature = new fhir.Signature(source.attestationSignature!); }
    if (source["identityCertificate"]) { this.identityCertificate = source.identityCertificate; }
    if (source["_identityCertificate"]) { this._identityCertificate = new fhir.FhirElement(source._identityCertificate!); }
    this.organization = null;
    if (source["organization"]) { this.organization = new fhir.Reference(source.organization!); }
    if (this.organization === undefined) { this.organization = null }
  }
  /**
   * Check if the current VerificationResultValidator contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["organization"] === undefined) { missingElements.push("organization"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a VerificationResultValidator from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IVerificationResultValidator):VerificationResultValidator {
    var dest:VerificationResultValidator = new VerificationResultValidator(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `VerificationResultValidator is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export class VerificationResult extends fhir.DomainResource implements fhir.IVerificationResult {
  /**
   * Resource Type Name
   */
  public override resourceType: "VerificationResult";
  /**
   * Information about the entity attesting to information.
   */
  public attestation?: fhir.VerificationResultAttestation|undefined;
  /**
   * The result if validation fails (fatal; warning; record only; none).
   */
  public failureAction?: fhir.CodeableConcept|undefined;
  /**
   * Frequency of revalidation.
   */
  public frequency?: fhir.Timing|undefined;
  /**
   * The date/time validation was last completed (including failed validations).
   */
  public lastPerformed?: string|undefined;
  public _lastPerformed?: fhir.FhirElement|undefined;
  /**
   * The frequency with which the target must be validated (none; initial; periodic).
   */
  public need?: fhir.CodeableConcept|undefined;
  /**
   * The date when target is next validated, if appropriate.
   */
  public nextScheduled?: string|undefined;
  public _nextScheduled?: fhir.FhirElement|undefined;
  /**
   * Information about the primary source(s) involved in validation.
   */
  public primarySource?: fhir.VerificationResultPrimarySource[]|undefined;
  /**
   * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
   */
  public status: VerificationResultStatusEnum|null;
  public _status?: fhir.FhirElement|undefined;
  /**
   * When the validation status was updated.
   */
  public statusDate?: string|undefined;
  public _statusDate?: fhir.FhirElement|undefined;
  /**
   * A resource that was validated.
   */
  public target?: fhir.Reference[]|undefined;
  /**
   * The fhirpath location(s) within the resource that was validated.
   */
  public targetLocation?: string[]|undefined;
  public _targetLocation?: fhir.FhirElement[]|undefined;
  /**
   * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
   */
  public validationProcess?: fhir.CodeableConcept[]|undefined;
  /**
   * What the target is validated against (nothing; primary source; multiple sources).
   */
  public validationType?: fhir.CodeableConcept|undefined;
  /**
   * Information about the entity validating information.
   */
  public validator?: fhir.VerificationResultValidator[]|undefined;
  /**
   * Default constructor for VerificationResult - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<fhir.IVerificationResult> = {}) {
    super(source);
    this.resourceType = 'VerificationResult';
    if (source["attestation"]) { this.attestation = new fhir.VerificationResultAttestation(source.attestation!); }
    if (source["failureAction"]) { this.failureAction = new fhir.CodeableConcept(source.failureAction!); }
    if (source["frequency"]) { this.frequency = new fhir.Timing(source.frequency!); }
    if (source["lastPerformed"]) { this.lastPerformed = source.lastPerformed; }
    if (source["_lastPerformed"]) { this._lastPerformed = new fhir.FhirElement(source._lastPerformed!); }
    if (source["need"]) { this.need = new fhir.CodeableConcept(source.need!); }
    if (source["nextScheduled"]) { this.nextScheduled = source.nextScheduled; }
    if (source["_nextScheduled"]) { this._nextScheduled = new fhir.FhirElement(source._nextScheduled!); }
    if (source["primarySource"]) { this.primarySource = source.primarySource.map((x:Partial<fhir.IVerificationResultPrimarySource>) => new fhir.VerificationResultPrimarySource(x)); }
    this.status = null;
    if (source["status"]) { this.status = source.status; }
    if (this.status === undefined) { this.status = null }
    if (source["_status"]) { this._status = new fhir.FhirElement(source._status!); }
    if (source["statusDate"]) { this.statusDate = source.statusDate; }
    if (source["_statusDate"]) { this._statusDate = new fhir.FhirElement(source._statusDate!); }
    if (source["target"]) { this.target = source.target.map((x:Partial<fhir.IReference>) => new fhir.Reference(x)); }
    if (source["targetLocation"]) { this.targetLocation = source.targetLocation.map((x) => (x)); }
    if (source["_targetLocation"]) { this._targetLocation = source._targetLocation.map((x:Partial<fhir.IFhirElement>) => new fhir.FhirElement(x)); }
    if (source["validationProcess"]) { this.validationProcess = source.validationProcess.map((x:Partial<fhir.ICodeableConcept>) => new fhir.CodeableConcept(x)); }
    if (source["validationType"]) { this.validationType = new fhir.CodeableConcept(source.validationType!); }
    if (source["validator"]) { this.validator = source.validator.map((x:Partial<fhir.IVerificationResultValidator>) => new fhir.VerificationResultValidator(x)); }
  }
  /**
   * Check if the current VerificationResult contains all required elements.
   */
  override CheckRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.CheckRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
  /**
   * Factory function to create a VerificationResult from an object that MUST contain all required elements.
   */
  static override FromStrict(source:fhir.IVerificationResult):VerificationResult {
    var dest:VerificationResult = new VerificationResult(source);
    var missingElements:string[] = dest.CheckRequiredElements();
    if (missingElements.length !== 0) { throw `VerificationResult is missing elements: ${missingElements.join(", ")}` }
    return dest;
  }
}
/**
 * Code Values for the VerificationResult.status field
 */
export enum VerificationResultStatusEnum {
  ATTESTED = "attested",
  VALIDATED = "validated",
  IN_PROCESS = "in-process",
  REQ_REVALID = "req-revalid",
  VAL_FAIL = "val-fail",
  REVAL_FAIL = "reval-fail",
}
