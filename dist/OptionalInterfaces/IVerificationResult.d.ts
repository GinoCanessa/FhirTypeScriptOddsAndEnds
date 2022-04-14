import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Information about the primary source(s) involved in validation.
 */
export interface IVerificationResultPrimarySource extends fhirInterfaces.IBackboneElement {
    /**
     * Ability of the primary source to push updates/alerts (yes; no; undetermined).
     */
    canPushUpdates?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
     */
    pushTypeAvailable?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
     */
    type?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * When the target was validated against the primary source.
     */
    validationDate?: string | undefined;
    _validationDate?: fhirInterfaces.IElement | undefined;
    /**
     * Status of the validation of the target against the primary source (successful; failed; unknown).
     */
    validationStatus?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Reference to the primary source.
     */
    who?: fhirInterfaces.IReference | undefined;
}
/**
 * Information about the entity attesting to information.
 */
export interface IVerificationResultAttestation extends fhirInterfaces.IBackboneElement {
    /**
     * The method by which attested information was submitted/retrieved (manual; API; Push).
     */
    communicationMethod?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The date the information was attested to.
     */
    date?: string | undefined;
    _date?: fhirInterfaces.IElement | undefined;
    /**
     * When the who is asserting on behalf of another (organization or individual).
     */
    onBehalfOf?: fhirInterfaces.IReference | undefined;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: string | undefined;
    _proxyIdentityCertificate?: fhirInterfaces.IElement | undefined;
    /**
     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
     */
    proxySignature?: fhirInterfaces.ISignature | undefined;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: string | undefined;
    _sourceIdentityCertificate?: fhirInterfaces.IElement | undefined;
    /**
     * Signed assertion by the attestation source that they have attested to the information.
     */
    sourceSignature?: fhirInterfaces.ISignature | undefined;
    /**
     * The individual or organization attesting to information.
     */
    who?: fhirInterfaces.IReference | undefined;
}
/**
 * Information about the entity validating information.
 */
export interface IVerificationResultValidator extends fhirInterfaces.IBackboneElement {
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: fhirInterfaces.ISignature | undefined;
    /**
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: string | undefined;
    _identityCertificate?: fhirInterfaces.IElement | undefined;
    /**
     * Reference to the organization validating information.
     */
    organization?: fhirInterfaces.IReference | undefined;
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export interface IVerificationResult extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "VerificationResult";
    /**
     * Information about the entity attesting to information.
     */
    attestation?: fhirInterfaces.IVerificationResultAttestation | undefined;
    /**
     * The result if validation fails (fatal; warning; record only; none).
     */
    failureAction?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Frequency of revalidation.
     */
    frequency?: fhirInterfaces.ITiming | undefined;
    /**
     * The date/time validation was last completed (including failed validations).
     */
    lastPerformed?: string | undefined;
    _lastPerformed?: fhirInterfaces.IElement | undefined;
    /**
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: string | undefined;
    _nextScheduled?: fhirInterfaces.IElement | undefined;
    /**
     * Information about the primary source(s) involved in validation.
     */
    primarySource?: fhirInterfaces.IVerificationResultPrimarySource[] | undefined;
    /**
     * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
     */
    status?: VerificationResultStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * When the validation status was updated.
     */
    statusDate?: string | undefined;
    _statusDate?: fhirInterfaces.IElement | undefined;
    /**
     * A resource that was validated.
     */
    target?: fhirInterfaces.IReference[] | undefined;
    /**
     * The fhirpath location(s) within the resource that was validated.
     */
    targetLocation?: string[] | undefined;
    _targetLocation?: fhirInterfaces.IElement[] | undefined;
    /**
     * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
     */
    validationProcess?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * What the target is validated against (nothing; primary source; multiple sources).
     */
    validationType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Information about the entity validating information.
     */
    validator?: fhirInterfaces.IVerificationResultValidator[] | undefined;
}
/**
 * Code Values for the VerificationResult.status field
 */
export declare enum VerificationResultStatusEnum {
    ATTESTED = "attested",
    VALIDATED = "validated",
    IN_PROCESS = "in-process",
    REQ_REVALID = "req-revalid",
    VAL_FAIL = "val-fail",
    REVAL_FAIL = "reval-fail"
}
//# sourceMappingURL=IVerificationResult.d.ts.map