import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Information about the primary source(s) involved in validation.
 */
export declare class VerificationResultPrimarySource extends fhirModels.BackboneElement implements fhirInterfaces.IVerificationResultPrimarySource {
    /**
     * Ability of the primary source to push updates/alerts (yes; no; undetermined).
     */
    canPushUpdates?: fhirModels.CodeableConcept | undefined;
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
     */
    pushTypeAvailable?: fhirModels.CodeableConcept[] | undefined;
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
     */
    type?: fhirModels.CodeableConcept[] | undefined;
    /**
     * When the target was validated against the primary source.
     */
    validationDate?: string | undefined;
    _validationDate?: fhirModels.Element | undefined;
    /**
     * Status of the validation of the target against the primary source (successful; failed; unknown).
     */
    validationStatus?: fhirModels.CodeableConcept | undefined;
    /**
     * Reference to the primary source.
     */
    who?: fhirModels.Reference | undefined;
    /**
     * Default constructor for VerificationResultPrimarySource from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IVerificationResultPrimarySource>);
    /**
     * Factory function to create a VerificationResultPrimarySource from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IVerificationResultPrimarySource): VerificationResultPrimarySource;
    /**
     * Check if the current VerificationResultPrimarySource contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Information about the entity attesting to information.
 */
export declare class VerificationResultAttestation extends fhirModels.BackboneElement implements fhirInterfaces.IVerificationResultAttestation {
    /**
     * The method by which attested information was submitted/retrieved (manual; API; Push).
     */
    communicationMethod?: fhirModels.CodeableConcept | undefined;
    /**
     * The date the information was attested to.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * When the who is asserting on behalf of another (organization or individual).
     */
    onBehalfOf?: fhirModels.Reference | undefined;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: string | undefined;
    _proxyIdentityCertificate?: fhirModels.Element | undefined;
    /**
     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
     */
    proxySignature?: fhirModels.Signature | undefined;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: string | undefined;
    _sourceIdentityCertificate?: fhirModels.Element | undefined;
    /**
     * Signed assertion by the attestation source that they have attested to the information.
     */
    sourceSignature?: fhirModels.Signature | undefined;
    /**
     * The individual or organization attesting to information.
     */
    who?: fhirModels.Reference | undefined;
    /**
     * Default constructor for VerificationResultAttestation from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IVerificationResultAttestation>);
    /**
     * Factory function to create a VerificationResultAttestation from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IVerificationResultAttestation): VerificationResultAttestation;
    /**
     * Check if the current VerificationResultAttestation contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Information about the entity validating information.
 */
export declare class VerificationResultValidator extends fhirModels.BackboneElement implements fhirInterfaces.IVerificationResultValidator {
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: fhirModels.Signature | undefined;
    /**
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: string | undefined;
    _identityCertificate?: fhirModels.Element | undefined;
    /**
     * Reference to the organization validating information.
     */
    organization?: fhirModels.Reference | undefined;
    /**
     * Default constructor for VerificationResultValidator from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IVerificationResultValidator>);
    /**
     * Factory function to create a VerificationResultValidator from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IVerificationResultValidator): VerificationResultValidator;
    /**
     * Check if the current VerificationResultValidator contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export declare class VerificationResult extends fhirModels.DomainResource implements fhirInterfaces.IVerificationResult {
    /**
     * Resource Type Name
     */
    readonly resourceType = "VerificationResult";
    /**
     * Information about the entity attesting to information.
     */
    attestation?: fhirModels.VerificationResultAttestation | undefined;
    /**
     * The result if validation fails (fatal; warning; record only; none).
     */
    failureAction?: fhirModels.CodeableConcept | undefined;
    /**
     * Frequency of revalidation.
     */
    frequency?: fhirModels.Timing | undefined;
    /**
     * The date/time validation was last completed (including failed validations).
     */
    lastPerformed?: string | undefined;
    _lastPerformed?: fhirModels.Element | undefined;
    /**
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: fhirModels.CodeableConcept | undefined;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: string | undefined;
    _nextScheduled?: fhirModels.Element | undefined;
    /**
     * Information about the primary source(s) involved in validation.
     */
    primarySource?: fhirModels.VerificationResultPrimarySource[] | undefined;
    /**
     * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
     */
    status?: VerificationResultStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * When the validation status was updated.
     */
    statusDate?: string | undefined;
    _statusDate?: fhirModels.Element | undefined;
    /**
     * A resource that was validated.
     */
    target?: fhirModels.Reference[] | undefined;
    /**
     * The fhirpath location(s) within the resource that was validated.
     */
    targetLocation?: string[] | undefined;
    _targetLocation?: fhirModels.Element[] | undefined;
    /**
     * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
     */
    validationProcess?: fhirModels.CodeableConcept[] | undefined;
    /**
     * What the target is validated against (nothing; primary source; multiple sources).
     */
    validationType?: fhirModels.CodeableConcept | undefined;
    /**
     * Information about the entity validating information.
     */
    validator?: fhirModels.VerificationResultValidator[] | undefined;
    /**
     * Default constructor for VerificationResult from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IVerificationResult>);
    /**
     * Factory function to create a VerificationResult from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IVerificationResult): VerificationResult;
    /**
     * Check if the current VerificationResult contains all required elements.
     */
    checkRequiredElements(): string[];
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