// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels'
import * as fhirInterfaces from '../optionalinterfaces'
/**
 * Information about the primary source(s) involved in validation.
 */
export class VerificationResultPrimarySource extends fhirModels.BackboneElement implements fhirInterfaces.IVerificationResultPrimarySource {
  /**
   * Ability of the primary source to push updates/alerts (yes; no; undetermined).
   */
  canPushUpdates?: fhirModels.CodeableConcept|undefined;
  /**
   * Method for communicating with the primary source (manual; API; Push).
   */
  communicationMethod?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
   */
  pushTypeAvailable?: fhirModels.CodeableConcept[]|undefined;
  /**
   * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
   */
  type?: fhirModels.CodeableConcept[]|undefined;
  /**
   * When the target was validated against the primary source.
   */
  validationDate?: string|undefined;
  _validationDate?: fhirModels.Element|undefined;
  /**
   * Status of the validation of the target against the primary source (successful; failed; unknown).
   */
  validationStatus?: fhirModels.CodeableConcept|undefined;
  /**
   * Reference to the primary source.
   */
  who?: fhirModels.Reference|undefined;
  /**
   * Default constructor for VerificationResultPrimarySource from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IVerificationResultPrimarySource>) {
    super(source);
    if (source["canPushUpdates"] !== undefined) { this.canPushUpdates = new fhirModels.CodeableConcept(source.canPushUpdates); }
    if (source["communicationMethod"] !== undefined) { this.communicationMethod = source.communicationMethod.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["pushTypeAvailable"] !== undefined) { this.pushTypeAvailable = source.pushTypeAvailable.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["type"] !== undefined) { this.type = source.type.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["validationDate"] !== undefined) { this.validationDate = source.validationDate; }
    if (source["_validationDate"] !== undefined) { this._validationDate = new fhirModels.Element(source._validationDate); }
    if (source["validationStatus"] !== undefined) { this.validationStatus = new fhirModels.CodeableConcept(source.validationStatus); }
    if (source["who"] !== undefined) { this.who = new fhirModels.Reference(source.who); }
  }
  /**
   * Factory function to create a VerificationResultPrimarySource from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IVerificationResultPrimarySource):VerificationResultPrimarySource {
    var dest:VerificationResultPrimarySource = new VerificationResultPrimarySource(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `VerificationResultPrimarySource is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current VerificationResultPrimarySource contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Information about the entity attesting to information.
 */
export class VerificationResultAttestation extends fhirModels.BackboneElement implements fhirInterfaces.IVerificationResultAttestation {
  /**
   * The method by which attested information was submitted/retrieved (manual; API; Push).
   */
  communicationMethod?: fhirModels.CodeableConcept|undefined;
  /**
   * The date the information was attested to.
   */
  date?: string|undefined;
  _date?: fhirModels.Element|undefined;
  /**
   * When the who is asserting on behalf of another (organization or individual).
   */
  onBehalfOf?: fhirModels.Reference|undefined;
  /**
   * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
   */
  proxyIdentityCertificate?: string|undefined;
  _proxyIdentityCertificate?: fhirModels.Element|undefined;
  /**
   * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
   */
  proxySignature?: fhirModels.Signature|undefined;
  /**
   * A digital identity certificate associated with the attestation source.
   */
  sourceIdentityCertificate?: string|undefined;
  _sourceIdentityCertificate?: fhirModels.Element|undefined;
  /**
   * Signed assertion by the attestation source that they have attested to the information.
   */
  sourceSignature?: fhirModels.Signature|undefined;
  /**
   * The individual or organization attesting to information.
   */
  who?: fhirModels.Reference|undefined;
  /**
   * Default constructor for VerificationResultAttestation from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IVerificationResultAttestation>) {
    super(source);
    if (source["communicationMethod"] !== undefined) { this.communicationMethod = new fhirModels.CodeableConcept(source.communicationMethod); }
    if (source["date"] !== undefined) { this.date = source.date; }
    if (source["_date"] !== undefined) { this._date = new fhirModels.Element(source._date); }
    if (source["onBehalfOf"] !== undefined) { this.onBehalfOf = new fhirModels.Reference(source.onBehalfOf); }
    if (source["proxyIdentityCertificate"] !== undefined) { this.proxyIdentityCertificate = source.proxyIdentityCertificate; }
    if (source["_proxyIdentityCertificate"] !== undefined) { this._proxyIdentityCertificate = new fhirModels.Element(source._proxyIdentityCertificate); }
    if (source["proxySignature"] !== undefined) { this.proxySignature = new fhirModels.Signature(source.proxySignature); }
    if (source["sourceIdentityCertificate"] !== undefined) { this.sourceIdentityCertificate = source.sourceIdentityCertificate; }
    if (source["_sourceIdentityCertificate"] !== undefined) { this._sourceIdentityCertificate = new fhirModels.Element(source._sourceIdentityCertificate); }
    if (source["sourceSignature"] !== undefined) { this.sourceSignature = new fhirModels.Signature(source.sourceSignature); }
    if (source["who"] !== undefined) { this.who = new fhirModels.Reference(source.who); }
  }
  /**
   * Factory function to create a VerificationResultAttestation from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IVerificationResultAttestation):VerificationResultAttestation {
    var dest:VerificationResultAttestation = new VerificationResultAttestation(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `VerificationResultAttestation is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current VerificationResultAttestation contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Information about the entity validating information.
 */
export class VerificationResultValidator extends fhirModels.BackboneElement implements fhirInterfaces.IVerificationResultValidator {
  /**
   * Signed assertion by the validator that they have validated the information.
   */
  attestationSignature?: fhirModels.Signature|undefined;
  /**
   * A digital identity certificate associated with the validator.
   */
  identityCertificate?: string|undefined;
  _identityCertificate?: fhirModels.Element|undefined;
  /**
   * Reference to the organization validating information.
   */
  organization?: fhirModels.Reference|undefined;
  /**
   * Default constructor for VerificationResultValidator from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IVerificationResultValidator>) {
    super(source);
    if (source["attestationSignature"] !== undefined) { this.attestationSignature = new fhirModels.Signature(source.attestationSignature); }
    if (source["identityCertificate"] !== undefined) { this.identityCertificate = source.identityCertificate; }
    if (source["_identityCertificate"] !== undefined) { this._identityCertificate = new fhirModels.Element(source._identityCertificate); }
    if (source["organization"] !== undefined) { this.organization = new fhirModels.Reference(source.organization); }
  }
  /**
   * Factory function to create a VerificationResultValidator from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IVerificationResultValidator):VerificationResultValidator {
    var dest:VerificationResultValidator = new VerificationResultValidator(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `VerificationResultValidator is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current VerificationResultValidator contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["organization"] === undefined) { missingElements.push("organization"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
  }
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export class VerificationResult extends fhirModels.DomainResource implements fhirInterfaces.IVerificationResult {
  /**
   * Resource Type Name
   */
  readonly resourceType = "VerificationResult";
  /**
   * Information about the entity attesting to information.
   */
  attestation?: fhirModels.VerificationResultAttestation|undefined;
  /**
   * The result if validation fails (fatal; warning; record only; none).
   */
  failureAction?: fhirModels.CodeableConcept|undefined;
  /**
   * Frequency of revalidation.
   */
  frequency?: fhirModels.Timing|undefined;
  /**
   * The date/time validation was last completed (including failed validations).
   */
  lastPerformed?: string|undefined;
  _lastPerformed?: fhirModels.Element|undefined;
  /**
   * The frequency with which the target must be validated (none; initial; periodic).
   */
  need?: fhirModels.CodeableConcept|undefined;
  /**
   * The date when target is next validated, if appropriate.
   */
  nextScheduled?: string|undefined;
  _nextScheduled?: fhirModels.Element|undefined;
  /**
   * Information about the primary source(s) involved in validation.
   */
  primarySource?: fhirModels.VerificationResultPrimarySource[]|undefined;
  /**
   * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
   */
  status?: VerificationResultStatusEnum|undefined;
  _status?: fhirModels.Element|undefined;
  /**
   * When the validation status was updated.
   */
  statusDate?: string|undefined;
  _statusDate?: fhirModels.Element|undefined;
  /**
   * A resource that was validated.
   */
  target?: fhirModels.Reference[]|undefined;
  /**
   * The fhirpath location(s) within the resource that was validated.
   */
  targetLocation?: string[]|undefined;
  _targetLocation?: fhirModels.Element[]|undefined;
  /**
   * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
   */
  validationProcess?: fhirModels.CodeableConcept[]|undefined;
  /**
   * What the target is validated against (nothing; primary source; multiple sources).
   */
  validationType?: fhirModels.CodeableConcept|undefined;
  /**
   * Information about the entity validating information.
   */
  validator?: fhirModels.VerificationResultValidator[]|undefined;
  /**
   * Default constructor for VerificationResult from an object that MAY NOT contain all required elements.
   */
  constructor(source:Partial<fhirInterfaces.IVerificationResult>) {
    super(source);
    if ((source['resourceType'] !== "VerificationResult") || (source['resourceType'] !== undefined)) { throw 'Invalid resourceType for a VerificationResult'; }
    if (source["attestation"] !== undefined) { this.attestation = new fhirModels.VerificationResultAttestation(source.attestation); }
    if (source["failureAction"] !== undefined) { this.failureAction = new fhirModels.CodeableConcept(source.failureAction); }
    if (source["frequency"] !== undefined) { this.frequency = new fhirModels.Timing(source.frequency); }
    if (source["lastPerformed"] !== undefined) { this.lastPerformed = source.lastPerformed; }
    if (source["_lastPerformed"] !== undefined) { this._lastPerformed = new fhirModels.Element(source._lastPerformed); }
    if (source["need"] !== undefined) { this.need = new fhirModels.CodeableConcept(source.need); }
    if (source["nextScheduled"] !== undefined) { this.nextScheduled = source.nextScheduled; }
    if (source["_nextScheduled"] !== undefined) { this._nextScheduled = new fhirModels.Element(source._nextScheduled); }
    if (source["primarySource"] !== undefined) { this.primarySource = source.primarySource.map((x) => new fhirModels.VerificationResultPrimarySource(x)); }
    if (source["status"] !== undefined) { this.status = source.status; }
    if (source["_status"] !== undefined) { this._status = new fhirModels.Element(source._status); }
    if (source["statusDate"] !== undefined) { this.statusDate = source.statusDate; }
    if (source["_statusDate"] !== undefined) { this._statusDate = new fhirModels.Element(source._statusDate); }
    if (source["target"] !== undefined) { this.target = source.target.map((x) => new fhirModels.Reference(x)); }
    if (source["targetLocation"] !== undefined) { this.targetLocation = source.targetLocation.map((x) => (x)); }
    if (source["_targetLocation"] !== undefined) { this._targetLocation = source._targetLocation.map((x) => new fhirModels.Element(x)); }
    if (source["validationProcess"] !== undefined) { this.validationProcess = source.validationProcess.map((x) => new fhirModels.CodeableConcept(x)); }
    if (source["validationType"] !== undefined) { this.validationType = new fhirModels.CodeableConcept(source.validationType); }
    if (source["validator"] !== undefined) { this.validator = source.validator.map((x) => new fhirModels.VerificationResultValidator(x)); }
  }
  /**
   * Factory function to create a VerificationResult from an object that MUST contain all required elements.
   */
  static CreateStrict(source:fhirInterfaces.IVerificationResult):VerificationResult {
    var dest:VerificationResult = new VerificationResult(source);
    var missingElements:string[] = dest.checkRequiredElements();
    if (missingElements.length !== 0) {
    throw `VerificationResult is missing elements: ${missingElements.join(", ")}`
     }
    return dest;
  }
  /**
   * Check if the current VerificationResult contains all required elements.
   */
  checkRequiredElements():string[] {
    var missingElements:string[] = [];
    if (this["status"] === undefined) { missingElements.push("status"); }
    var parentMissing:string[] = super.checkRequiredElements();
    missingElements.push(...parentMissing);
    return missingElements;
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