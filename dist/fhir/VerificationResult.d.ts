import * as fhir from '../fhir';
/**
 * Information about the primary source(s) involved in validation.
 */
export declare type IVerificationResultPrimarySource = fhir.IBackboneElement & {
    /**
     * Ability of the primary source to push updates/alerts (yes; no; undetermined).
     */
    canPushUpdates?: fhir.ICodeableConcept | undefined;
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod?: fhir.ICodeableConcept[] | undefined;
    /**
     * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
     */
    pushTypeAvailable?: fhir.ICodeableConcept[] | undefined;
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * When the target was validated against the primary source.
     */
    validationDate?: string | undefined;
    _validationDate?: fhir.IFhirElement | undefined;
    /**
     * Status of the validation of the target against the primary source (successful; failed; unknown).
     */
    validationStatus?: fhir.ICodeableConcept | undefined;
    /**
     * Reference to the primary source.
     */
    who?: fhir.IReference | undefined;
};
/**
 * Information about the entity attesting to information.
 */
export declare type IVerificationResultAttestation = fhir.IBackboneElement & {
    /**
     * The method by which attested information was submitted/retrieved (manual; API; Push).
     */
    communicationMethod?: fhir.ICodeableConcept | undefined;
    /**
     * The date the information was attested to.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * When the who is asserting on behalf of another (organization or individual).
     */
    onBehalfOf?: fhir.IReference | undefined;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: string | undefined;
    _proxyIdentityCertificate?: fhir.IFhirElement | undefined;
    /**
     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
     */
    proxySignature?: fhir.ISignature | undefined;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: string | undefined;
    _sourceIdentityCertificate?: fhir.IFhirElement | undefined;
    /**
     * Signed assertion by the attestation source that they have attested to the information.
     */
    sourceSignature?: fhir.ISignature | undefined;
    /**
     * The individual or organization attesting to information.
     */
    who?: fhir.IReference | undefined;
};
/**
 * Information about the entity validating information.
 */
export declare type IVerificationResultValidator = fhir.IBackboneElement & {
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: fhir.ISignature | undefined;
    /**
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: string | undefined;
    _identityCertificate?: fhir.IFhirElement | undefined;
    /**
     * Reference to the organization validating information.
     */
    organization: fhir.IReference | null;
};
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export declare type IVerificationResult = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "VerificationResult";
    /**
     * Information about the entity attesting to information.
     */
    attestation?: fhir.IVerificationResultAttestation | undefined;
    /**
     * The result if validation fails (fatal; warning; record only; none).
     */
    failureAction?: fhir.ICodeableConcept | undefined;
    /**
     * Frequency of revalidation.
     */
    frequency?: fhir.ITiming | undefined;
    /**
     * The date/time validation was last completed (including failed validations).
     */
    lastPerformed?: string | undefined;
    _lastPerformed?: fhir.IFhirElement | undefined;
    /**
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: fhir.ICodeableConcept | undefined;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: string | undefined;
    _nextScheduled?: fhir.IFhirElement | undefined;
    /**
     * Information about the primary source(s) involved in validation.
     */
    primarySource?: fhir.IVerificationResultPrimarySource[] | undefined;
    /**
     * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
     */
    status: VerificationResultStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * When the validation status was updated.
     */
    statusDate?: string | undefined;
    _statusDate?: fhir.IFhirElement | undefined;
    /**
     * A resource that was validated.
     */
    target?: fhir.IReference[] | undefined;
    /**
     * The fhirpath location(s) within the resource that was validated.
     */
    targetLocation?: string[] | undefined;
    _targetLocation?: fhir.IFhirElement[] | undefined;
    /**
     * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
     */
    validationProcess?: fhir.ICodeableConcept[] | undefined;
    /**
     * What the target is validated against (nothing; primary source; multiple sources).
     */
    validationType?: fhir.ICodeableConcept | undefined;
    /**
     * Information about the entity validating information.
     */
    validator?: fhir.IVerificationResultValidator[] | undefined;
};
/**
 * Information about the primary source(s) involved in validation.
 */
export declare class VerificationResultPrimarySource extends fhir.BackboneElement implements fhir.IVerificationResultPrimarySource {
    /**
     * Ability of the primary source to push updates/alerts (yes; no; undetermined).
     */
    canPushUpdates?: fhir.CodeableConcept | undefined;
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod?: fhir.CodeableConcept[] | undefined;
    /**
     * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
     */
    pushTypeAvailable?: fhir.CodeableConcept[] | undefined;
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * When the target was validated against the primary source.
     */
    validationDate?: string | undefined;
    _validationDate?: fhir.FhirElement | undefined;
    /**
     * Status of the validation of the target against the primary source (successful; failed; unknown).
     */
    validationStatus?: fhir.CodeableConcept | undefined;
    /**
     * Reference to the primary source.
     */
    who?: fhir.Reference | undefined;
    /**
     * Default constructor for VerificationResultPrimarySource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IVerificationResultPrimarySource>);
    /**
     * Check if the current VerificationResultPrimarySource contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a VerificationResultPrimarySource from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IVerificationResultPrimarySource): VerificationResultPrimarySource;
}
/**
 * Information about the entity attesting to information.
 */
export declare class VerificationResultAttestation extends fhir.BackboneElement implements fhir.IVerificationResultAttestation {
    /**
     * The method by which attested information was submitted/retrieved (manual; API; Push).
     */
    communicationMethod?: fhir.CodeableConcept | undefined;
    /**
     * The date the information was attested to.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * When the who is asserting on behalf of another (organization or individual).
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: string | undefined;
    _proxyIdentityCertificate?: fhir.FhirElement | undefined;
    /**
     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
     */
    proxySignature?: fhir.Signature | undefined;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: string | undefined;
    _sourceIdentityCertificate?: fhir.FhirElement | undefined;
    /**
     * Signed assertion by the attestation source that they have attested to the information.
     */
    sourceSignature?: fhir.Signature | undefined;
    /**
     * The individual or organization attesting to information.
     */
    who?: fhir.Reference | undefined;
    /**
     * Default constructor for VerificationResultAttestation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IVerificationResultAttestation>);
    /**
     * Check if the current VerificationResultAttestation contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a VerificationResultAttestation from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IVerificationResultAttestation): VerificationResultAttestation;
}
/**
 * Information about the entity validating information.
 */
export declare class VerificationResultValidator extends fhir.BackboneElement implements fhir.IVerificationResultValidator {
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: fhir.Signature | undefined;
    /**
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: string | undefined;
    _identityCertificate?: fhir.FhirElement | undefined;
    /**
     * Reference to the organization validating information.
     */
    organization: fhir.Reference | null;
    /**
     * Default constructor for VerificationResultValidator - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IVerificationResultValidator>);
    /**
     * Check if the current VerificationResultValidator contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a VerificationResultValidator from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IVerificationResultValidator): VerificationResultValidator;
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export declare class VerificationResult extends fhir.DomainResource implements fhir.IVerificationResult {
    /**
     * Resource Type Name
     */
    resourceType: "VerificationResult";
    /**
     * Information about the entity attesting to information.
     */
    attestation?: fhir.VerificationResultAttestation | undefined;
    /**
     * The result if validation fails (fatal; warning; record only; none).
     */
    failureAction?: fhir.CodeableConcept | undefined;
    /**
     * Frequency of revalidation.
     */
    frequency?: fhir.Timing | undefined;
    /**
     * The date/time validation was last completed (including failed validations).
     */
    lastPerformed?: string | undefined;
    _lastPerformed?: fhir.FhirElement | undefined;
    /**
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: fhir.CodeableConcept | undefined;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: string | undefined;
    _nextScheduled?: fhir.FhirElement | undefined;
    /**
     * Information about the primary source(s) involved in validation.
     */
    primarySource?: fhir.VerificationResultPrimarySource[] | undefined;
    /**
     * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
     */
    status: VerificationResultStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * When the validation status was updated.
     */
    statusDate?: string | undefined;
    _statusDate?: fhir.FhirElement | undefined;
    /**
     * A resource that was validated.
     */
    target?: fhir.Reference[] | undefined;
    /**
     * The fhirpath location(s) within the resource that was validated.
     */
    targetLocation?: string[] | undefined;
    _targetLocation?: fhir.FhirElement[] | undefined;
    /**
     * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
     */
    validationProcess?: fhir.CodeableConcept[] | undefined;
    /**
     * What the target is validated against (nothing; primary source; multiple sources).
     */
    validationType?: fhir.CodeableConcept | undefined;
    /**
     * Information about the entity validating information.
     */
    validator?: fhir.VerificationResultValidator[] | undefined;
    /**
     * Default constructor for VerificationResult - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IVerificationResult>);
    /**
     * Check if the current VerificationResult contains all required elements.
     */
    checkRequiredElements(): string[];
    /**
     * Factory function to create a VerificationResult from an object that MUST contain all required elements.
     */
    static fromStrict(source: fhir.IVerificationResult): VerificationResult;
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
//# sourceMappingURL=VerificationResult.d.ts.map