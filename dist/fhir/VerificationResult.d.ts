import * as fhir from '../fhir.js';
import { VerificationresultPrimarySourceTypeValueSetType } from '../fhirValueSets/VerificationresultPrimarySourceTypeValueSet.js';
import { VerificationresultCommunicationMethodValueSetType } from '../fhirValueSets/VerificationresultCommunicationMethodValueSet.js';
import { VerificationresultValidationStatusValueSetType } from '../fhirValueSets/VerificationresultValidationStatusValueSet.js';
import { VerificationresultCanPushUpdatesValueSetType } from '../fhirValueSets/VerificationresultCanPushUpdatesValueSet.js';
import { VerificationresultPushTypeAvailableValueSetType } from '../fhirValueSets/VerificationresultPushTypeAvailableValueSet.js';
import { VerificationresultNeedValueSetType } from '../fhirValueSets/VerificationresultNeedValueSet.js';
import { VerificationresultStatusValueSetType } from '../fhirValueSets/VerificationresultStatusValueSet.js';
import { VerificationresultStatusValueSetEnum } from '../valueSetEnums.js';
import { VerificationresultValidationTypeValueSetType } from '../fhirValueSets/VerificationresultValidationTypeValueSet.js';
import { VerificationresultValidationProcessValueSetType } from '../fhirValueSets/VerificationresultValidationProcessValueSet.js';
import { VerificationresultFailureActionValueSetType } from '../fhirValueSets/VerificationresultFailureActionValueSet.js';
/**
 * Valid arguments for the VerificationResultPrimarySource type.
 */
export interface VerificationResultPrimarySourceArgs extends fhir.BackboneElementArgs {
    /**
     * Reference to the primary source.
     */
    who?: fhir.ReferenceArgs | undefined;
    /**
     * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
     */
    type?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Method for communicating with the primary source (manual; API; Push).
     */
    communicationMethod?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Status of the validation of the target against the primary source (successful; failed; unknown).
     */
    validationStatus?: fhir.CodeableConceptArgs | undefined;
    /**
     * When the target was validated against the primary source.
     */
    validationDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Ability of the primary source to push updates/alerts (yes; no; undetermined).
     */
    canPushUpdates?: fhir.CodeableConceptArgs | undefined;
    /**
     * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
     */
    pushTypeAvailable?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Information about the primary source(s) involved in validation.
 */
export declare class VerificationResultPrimarySource extends fhir.BackboneElement {
    readonly __dataType: string;
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
    validationDate?: fhir.FhirDateTime | undefined;
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
    constructor(source?: Partial<VerificationResultPrimarySourceArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the VerificationResultAttestation type.
 */
export interface VerificationResultAttestationArgs extends fhir.BackboneElementArgs {
    /**
     * The individual or organization attesting to information.
     */
    who?: fhir.ReferenceArgs | undefined;
    /**
     * When the who is asserting on behalf of another (organization or individual).
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
    /**
     * The method by which attested information was submitted/retrieved (manual; API; Push).
     */
    communicationMethod?: fhir.CodeableConceptArgs | undefined;
    /**
     * The date the information was attested to.
     */
    date?: fhir.FhirDate | string | undefined;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: fhir.FhirString | string | undefined;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: fhir.FhirString | string | undefined;
    /**
     * Signed assertion by the proxy entity indicating that they have the right to submit attested information on behalf of the attestation source.
     */
    proxySignature?: fhir.SignatureArgs | undefined;
    /**
     * Signed assertion by the attestation source that they have attested to the information.
     */
    sourceSignature?: fhir.SignatureArgs | undefined;
}
/**
 * Information about the entity attesting to information.
 */
export declare class VerificationResultAttestation extends fhir.BackboneElement {
    readonly __dataType: string;
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
    date?: fhir.FhirDate | undefined;
    /**
     * A digital identity certificate associated with the attestation source.
     */
    sourceIdentityCertificate?: fhir.FhirString | undefined;
    /**
     * A digital identity certificate associated with the proxy entity submitting attested information on behalf of the attestation source.
     */
    proxyIdentityCertificate?: fhir.FhirString | undefined;
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
    constructor(source?: Partial<VerificationResultAttestationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for communicationMethod
     */
    static communicationMethodExampleValueSet(): VerificationresultCommunicationMethodValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the VerificationResultValidator type.
 */
export interface VerificationResultValidatorArgs extends fhir.BackboneElementArgs {
    /**
     * Reference to the organization validating information.
     */
    organization: fhir.ReferenceArgs | null;
    /**
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: fhir.FhirString | string | undefined;
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: fhir.SignatureArgs | undefined;
}
/**
 * Information about the entity validating information.
 */
export declare class VerificationResultValidator extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Reference to the organization validating information.
     */
    organization: fhir.Reference | null;
    /**
     * A digital identity certificate associated with the validator.
     */
    identityCertificate?: fhir.FhirString | undefined;
    /**
     * Signed assertion by the validator that they have validated the information.
     */
    attestationSignature?: fhir.Signature | undefined;
    /**
     * Default constructor for VerificationResultValidator - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<VerificationResultValidatorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the VerificationResult type.
 */
export interface VerificationResultArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "VerificationResult" | undefined;
    /**
     * A resource that was validated.
     */
    target?: fhir.ReferenceArgs[] | undefined;
    /**
     * The fhirpath location(s) within the resource that was validated.
     */
    targetLocation?: fhir.FhirString[] | string[] | undefined;
    /**
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: fhir.CodeableConceptArgs | undefined;
    /**
     * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
     */
    status: VerificationresultStatusValueSetEnum | null;
    /**
     * When the validation status was updated.
     */
    statusDate?: fhir.FhirDateTime | string | undefined;
    /**
     * What the target is validated against (nothing; primary source; multiple sources).
     */
    validationType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
     */
    validationProcess?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Frequency of revalidation.
     */
    frequency?: fhir.TimingArgs | undefined;
    /**
     * The date/time validation was last completed (including failed validations).
     */
    lastPerformed?: fhir.FhirDateTime | string | undefined;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: fhir.FhirDate | string | undefined;
    /**
     * The result if validation fails (fatal; warning; record only; none).
     */
    failureAction?: fhir.CodeableConceptArgs | undefined;
    /**
     * Information about the primary source(s) involved in validation.
     */
    primarySource?: fhir.VerificationResultPrimarySourceArgs[] | undefined;
    /**
     * Information about the entity attesting to information.
     */
    attestation?: fhir.VerificationResultAttestationArgs | undefined;
    /**
     * Information about the entity validating information.
     */
    validator?: fhir.VerificationResultValidatorArgs[] | undefined;
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export declare class VerificationResult extends fhir.DomainResource {
    readonly __dataType: string;
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
    targetLocation?: fhir.FhirString[] | undefined;
    /**
     * The frequency with which the target must be validated (none; initial; periodic).
     */
    need?: fhir.CodeableConcept | undefined;
    /**
     * The validation status of the target (attested; validated; in process; requires revalidation; validation failed; revalidation failed).
     */
    status: VerificationresultStatusValueSetEnum | null;
    /**
     * When the validation status was updated.
     */
    statusDate?: fhir.FhirDateTime | undefined;
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
    lastPerformed?: fhir.FhirDateTime | undefined;
    /**
     * The date when target is next validated, if appropriate.
     */
    nextScheduled?: fhir.FhirDate | undefined;
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
    constructor(source?: Partial<VerificationResultArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=VerificationResult.d.ts.map