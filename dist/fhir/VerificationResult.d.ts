import * as fhir from '../fhir.js';
import { VerificationresultPrimarySourceTypeValueSetType } from '../fhirValueSets/VerificationresultPrimarySourceTypeValueSet.js';
import { VerificationresultCommunicationMethodValueSetType } from '../fhirValueSets/VerificationresultCommunicationMethodValueSet.js';
import { VerificationresultValidationStatusValueSetType } from '../fhirValueSets/VerificationresultValidationStatusValueSet.js';
import { VerificationresultCanPushUpdatesValueSetType } from '../fhirValueSets/VerificationresultCanPushUpdatesValueSet.js';
import { VerificationresultPushTypeAvailableValueSetType } from '../fhirValueSets/VerificationresultPushTypeAvailableValueSet.js';
import { VerificationresultNeedValueSetType } from '../fhirValueSets/VerificationresultNeedValueSet.js';
import { VerificationresultStatusValueSetType, VerificationresultStatusValueSetEnum } from '../fhirValueSets/VerificationresultStatusValueSet.js';
import { VerificationresultValidationTypeValueSetType } from '../fhirValueSets/VerificationresultValidationTypeValueSet.js';
import { VerificationresultValidationProcessValueSetType } from '../fhirValueSets/VerificationresultValidationProcessValueSet.js';
import { VerificationresultFailureActionValueSetType } from '../fhirValueSets/VerificationresultFailureActionValueSet.js';
/**
 * Information about the primary source(s) involved in validation.
 */
export declare type IVerificationResultPrimarySource = fhir.IBackboneElement & {
    /**
     * Reference to the primary source.
     */
    who?: fhir.IReference | undefined;
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
     */
    type?: fhir.ICodeableConcept[] | undefined;
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod?: fhir.ICodeableConcept[] | undefined;
    /**
     * Status of the validation of the target against the primary source (successful; failed; unknown).
     */
    validationStatus?: fhir.ICodeableConcept | undefined;
    /**
     * When the target was validated against the primary source.
     */
    validationDate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.primarySource.validationDate
     */
    _validationDate?: fhir.IFhirElement | undefined;
    /**
     * Ability of the primary source to push updates/alerts (yes; no; undetermined).
     */
    canPushUpdates?: fhir.ICodeableConcept | undefined;
    /**
     * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
     */
    pushTypeAvailable?: fhir.ICodeableConcept[] | undefined;
};
/**
 * Information about the entity attesting to information.
 */
export declare type IVerificationResultAttestation = fhir.IBackboneElement & {
    /**
     * The individual or organization attesting to information.
     */
    who?: fhir.IReference | undefined;
    /**
     * When the who is asserting on behalf of another (organization or individual).
     */
    onBehalfOf?: fhir.IReference | undefined;
    /**
     * The method by which attested information was submitted/retrieved (manual; API; Push).
     */
    communicationMethod?: fhir.ICodeableConcept | undefined;
    /**
     * The date the information was attested to.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.sourceIdentityCertificate
     */
    _sourceIdentityCertificate?: fhir.IFhirElement | undefined;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.proxyIdentityCertificate
     */
    _proxyIdentityCertificate?: fhir.IFhirElement | undefined;
    /**
     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
     */
    proxySignature?: fhir.ISignature | undefined;
    /**
     * Signed assertion by the attestation source that they have attested to the information.
     */
    sourceSignature?: fhir.ISignature | undefined;
};
/**
 * Information about the entity validating information.
 */
export declare type IVerificationResultValidator = fhir.IBackboneElement & {
    /**
     * Reference to the organization validating information.
     */
    organization: fhir.IReference | null;
    /**
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.validator.identityCertificate
     */
    _identityCertificate?: fhir.IFhirElement | undefined;
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: fhir.ISignature | undefined;
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
     * A resource that was validated.
     */
    target?: fhir.IReference[] | undefined;
    /**
     * The fhirpath location(s) within the resource that was validated.
     */
    targetLocation?: string[] | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.targetLocation
     */
    _targetLocation?: fhir.IFhirElement[] | undefined;
    /**
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: fhir.ICodeableConcept | undefined;
    /**
     * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
     */
    status: VerificationresultStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: VerificationResult.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * When the validation status was updated.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.statusDate
     */
    _statusDate?: fhir.IFhirElement | undefined;
    /**
     * What the target is validated against (nothing; primary source; multiple sources).
     */
    validationType?: fhir.ICodeableConcept | undefined;
    /**
     * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
     */
    validationProcess?: fhir.ICodeableConcept[] | undefined;
    /**
     * Frequency of revalidation.
     */
    frequency?: fhir.ITiming | undefined;
    /**
     * The date/time validation was last completed (including failed validations).
     */
    lastPerformed?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.lastPerformed
     */
    _lastPerformed?: fhir.IFhirElement | undefined;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.nextScheduled
     */
    _nextScheduled?: fhir.IFhirElement | undefined;
    /**
     * The result if validation fails (fatal; warning; record only; none).
     */
    failureAction?: fhir.ICodeableConcept | undefined;
    /**
     * Information about the primary source(s) involved in validation.
     */
    primarySource?: fhir.IVerificationResultPrimarySource[] | undefined;
    /**
     * Information about the entity attesting to information.
     */
    attestation?: fhir.IVerificationResultAttestation | undefined;
    /**
     * Information about the entity validating information.
     */
    validator?: fhir.IVerificationResultValidator[] | undefined;
};
/**
 * Information about the primary source(s) involved in validation.
 */
export declare class VerificationResultPrimarySource extends fhir.BackboneElement implements IVerificationResultPrimarySource {
    /**
     * Reference to the primary source.
     */
    who?: fhir.Reference | undefined;
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
     */
    type?: fhir.CodeableConcept[] | undefined;
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod?: fhir.CodeableConcept[] | undefined;
    /**
     * Status of the validation of the target against the primary source (successful; failed; unknown).
     */
    validationStatus?: fhir.CodeableConcept | undefined;
    /**
     * When the target was validated against the primary source.
     */
    validationDate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.primarySource.validationDate
     */
    _validationDate?: fhir.FhirElement | undefined;
    /**
     * Ability of the primary source to push updates/alerts (yes; no; undetermined).
     */
    canPushUpdates?: fhir.CodeableConcept | undefined;
    /**
     * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
     */
    pushTypeAvailable?: fhir.CodeableConcept[] | undefined;
    /**
     * Default constructor for VerificationResultPrimarySource - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IVerificationResultPrimarySource>);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): VerificationresultPrimarySourceTypeValueSetType;
    /**
     * Example-bound Value Set for communicationMethod
     */
    static communicationMethodExampleValueSet(): VerificationresultCommunicationMethodValueSetType;
    /**
     * Preferred-bound Value Set for validationStatus
     */
    static validationStatusPreferredValueSet(): VerificationresultValidationStatusValueSetType;
    /**
     * Preferred-bound Value Set for canPushUpdates
     */
    static canPushUpdatesPreferredValueSet(): VerificationresultCanPushUpdatesValueSetType;
    /**
     * Preferred-bound Value Set for pushTypeAvailable
     */
    static pushTypeAvailablePreferredValueSet(): VerificationresultPushTypeAvailableValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about the entity attesting to information.
 */
export declare class VerificationResultAttestation extends fhir.BackboneElement implements IVerificationResultAttestation {
    /**
     * The individual or organization attesting to information.
     */
    who?: fhir.Reference | undefined;
    /**
     * When the who is asserting on behalf of another (organization or individual).
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * The method by which attested information was submitted/retrieved (manual; API; Push).
     */
    communicationMethod?: fhir.CodeableConcept | undefined;
    /**
     * The date the information was attested to.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.sourceIdentityCertificate
     */
    _sourceIdentityCertificate?: fhir.FhirElement | undefined;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.attestation.proxyIdentityCertificate
     */
    _proxyIdentityCertificate?: fhir.FhirElement | undefined;
    /**
     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
     */
    proxySignature?: fhir.Signature | undefined;
    /**
     * Signed assertion by the attestation source that they have attested to the information.
     */
    sourceSignature?: fhir.Signature | undefined;
    /**
     * Default constructor for VerificationResultAttestation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IVerificationResultAttestation>);
    /**
     * Example-bound Value Set for communicationMethod
     */
    static communicationMethodExampleValueSet(): VerificationresultCommunicationMethodValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Information about the entity validating information.
 */
export declare class VerificationResultValidator extends fhir.BackboneElement implements IVerificationResultValidator {
    /**
     * Reference to the organization validating information.
     */
    organization: fhir.Reference | null;
    /**
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.validator.identityCertificate
     */
    _identityCertificate?: fhir.FhirElement | undefined;
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: fhir.Signature | undefined;
    /**
     * Default constructor for VerificationResultValidator - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IVerificationResultValidator>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export declare class VerificationResult extends fhir.DomainResource implements IVerificationResult {
    /**
     * Resource Type Name
     */
    resourceType: "VerificationResult";
    /**
     * A resource that was validated.
     */
    target?: fhir.Reference[] | undefined;
    /**
     * The fhirpath location(s) within the resource that was validated.
     */
    targetLocation?: string[] | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.targetLocation
     */
    _targetLocation?: fhir.FhirElement[] | undefined;
    /**
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: fhir.CodeableConcept | undefined;
    /**
     * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
     */
    status: VerificationresultStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: VerificationResult.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * When the validation status was updated.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.statusDate
     */
    _statusDate?: fhir.FhirElement | undefined;
    /**
     * What the target is validated against (nothing; primary source; multiple sources).
     */
    validationType?: fhir.CodeableConcept | undefined;
    /**
     * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
     */
    validationProcess?: fhir.CodeableConcept[] | undefined;
    /**
     * Frequency of revalidation.
     */
    frequency?: fhir.Timing | undefined;
    /**
     * The date/time validation was last completed (including failed validations).
     */
    lastPerformed?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.lastPerformed
     */
    _lastPerformed?: fhir.FhirElement | undefined;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: string | undefined;
    /**
     * Extended properties for primitive element: VerificationResult.nextScheduled
     */
    _nextScheduled?: fhir.FhirElement | undefined;
    /**
     * The result if validation fails (fatal; warning; record only; none).
     */
    failureAction?: fhir.CodeableConcept | undefined;
    /**
     * Information about the primary source(s) involved in validation.
     */
    primarySource?: fhir.VerificationResultPrimarySource[] | undefined;
    /**
     * Information about the entity attesting to information.
     */
    attestation?: fhir.VerificationResultAttestation | undefined;
    /**
     * Information about the entity validating information.
     */
    validator?: fhir.VerificationResultValidator[] | undefined;
    /**
     * Default constructor for VerificationResult - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IVerificationResult>);
    /**
     * Preferred-bound Value Set for need
     */
    static needPreferredValueSet(): VerificationresultNeedValueSetType;
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): VerificationresultStatusValueSetType;
    /**
     * Preferred-bound Value Set for validationType
     */
    static validationTypePreferredValueSet(): VerificationresultValidationTypeValueSetType;
    /**
     * Example-bound Value Set for validationProcess
     */
    static validationProcessExampleValueSet(): VerificationresultValidationProcessValueSetType;
    /**
     * Preferred-bound Value Set for failureAction
     */
    static failureActionPreferredValueSet(): VerificationresultFailureActionValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=VerificationResult.d.ts.map