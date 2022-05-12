// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: VerificationResult
import * as fhir from '../fhir.js';
import { VerificationresultPrimarySourceTypeValueSet, } from '../fhirValueSets/VerificationresultPrimarySourceTypeValueSet.js';
import { VerificationresultCommunicationMethodValueSet, } from '../fhirValueSets/VerificationresultCommunicationMethodValueSet.js';
import { VerificationresultValidationStatusValueSet, } from '../fhirValueSets/VerificationresultValidationStatusValueSet.js';
import { VerificationresultCanPushUpdatesValueSet, } from '../fhirValueSets/VerificationresultCanPushUpdatesValueSet.js';
import { VerificationresultPushTypeAvailableValueSet, } from '../fhirValueSets/VerificationresultPushTypeAvailableValueSet.js';
import { VerificationresultNeedValueSet, } from '../fhirValueSets/VerificationresultNeedValueSet.js';
import { VerificationresultStatusValueSet, } from '../fhirValueSets/VerificationresultStatusValueSet.js';
import { VerificationresultValidationTypeValueSet, } from '../fhirValueSets/VerificationresultValidationTypeValueSet.js';
import { VerificationresultValidationProcessValueSet, } from '../fhirValueSets/VerificationresultValidationProcessValueSet.js';
import { VerificationresultFailureActionValueSet, } from '../fhirValueSets/VerificationresultFailureActionValueSet.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Information about the primary source(s) involved in validation.
 */
export class VerificationResultPrimarySource extends fhir.BackboneElement {
    /**
     * Default constructor for VerificationResultPrimarySource - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'VerificationResultPrimarySource';
        /**
         * Type of primary source (License Board; Primary Education; Continuing Education; Postal Service; Relationship owner; Registration Authority; legal source; issuing source; authoritative source).
         */
        this.type = [];
        /**
         * Method for communicating with the primary source (manual; API; Push).
         */
        this.communicationMethod = [];
        /**
         * Type of alerts/updates the primary source can send (specific requested changes; any changes; as defined by source).
         */
        this.pushTypeAvailable = [];
        if (source['who']) {
            this.who = new fhir.Reference(source.who);
        }
        if (source['type']) {
            this.type = source.type.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['communicationMethod']) {
            this.communicationMethod = source.communicationMethod.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['validationStatus']) {
            this.validationStatus = new fhir.CodeableConcept(source.validationStatus);
        }
        if (source['validationDate']) {
            this.validationDate = new fhir.FhirDateTime({ value: source.validationDate });
        }
        if (source['canPushUpdates']) {
            this.canPushUpdates = new fhir.CodeableConcept(source.canPushUpdates);
        }
        if (source['pushTypeAvailable']) {
            this.pushTypeAvailable = source.pushTypeAvailable.map((x) => new fhir.CodeableConcept(x));
        }
    }
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet() {
        return VerificationresultPrimarySourceTypeValueSet;
    }
    /**
     * Example-bound Value Set for communicationMethod
     */
    static communicationMethodExampleValueSet() {
        return VerificationresultCommunicationMethodValueSet;
    }
    /**
     * Preferred-bound Value Set for validationStatus
     */
    static validationStatusPreferredValueSet() {
        return VerificationresultValidationStatusValueSet;
    }
    /**
     * Preferred-bound Value Set for canPushUpdates
     */
    static canPushUpdatesPreferredValueSet() {
        return VerificationresultCanPushUpdatesValueSet;
    }
    /**
     * Preferred-bound Value Set for pushTypeAvailable
     */
    static pushTypeAvailablePreferredValueSet() {
        return VerificationresultPushTypeAvailableValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["who"]) {
            outcome.issue.push(...this.who.doModelValidation().issue);
        }
        if (this["type"]) {
            this.type.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["communicationMethod"]) {
            this.communicationMethod.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["validationStatus"]) {
            outcome.issue.push(...this.validationStatus.doModelValidation().issue);
        }
        if (this["validationDate"]) {
            outcome.issue.push(...this.validationDate.doModelValidation().issue);
        }
        if (this["canPushUpdates"]) {
            outcome.issue.push(...this.canPushUpdates.doModelValidation().issue);
        }
        if (this["pushTypeAvailable"]) {
            this.pushTypeAvailable.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Information about the entity attesting to information.
 */
export class VerificationResultAttestation extends fhir.BackboneElement {
    /**
     * Default constructor for VerificationResultAttestation - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'VerificationResultAttestation';
        if (source['who']) {
            this.who = new fhir.Reference(source.who);
        }
        if (source['onBehalfOf']) {
            this.onBehalfOf = new fhir.Reference(source.onBehalfOf);
        }
        if (source['communicationMethod']) {
            this.communicationMethod = new fhir.CodeableConcept(source.communicationMethod);
        }
        if (source['date']) {
            this.date = new fhir.FhirDate({ value: source.date });
        }
        if (source['sourceIdentityCertificate']) {
            this.sourceIdentityCertificate = new fhir.FhirString({ value: source.sourceIdentityCertificate });
        }
        if (source['proxyIdentityCertificate']) {
            this.proxyIdentityCertificate = new fhir.FhirString({ value: source.proxyIdentityCertificate });
        }
        if (source['proxySignature']) {
            this.proxySignature = new fhir.Signature(source.proxySignature);
        }
        if (source['sourceSignature']) {
            this.sourceSignature = new fhir.Signature(source.sourceSignature);
        }
    }
    /**
     * Example-bound Value Set for communicationMethod
     */
    static communicationMethodExampleValueSet() {
        return VerificationresultCommunicationMethodValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (this["who"]) {
            outcome.issue.push(...this.who.doModelValidation().issue);
        }
        if (this["onBehalfOf"]) {
            outcome.issue.push(...this.onBehalfOf.doModelValidation().issue);
        }
        if (this["communicationMethod"]) {
            outcome.issue.push(...this.communicationMethod.doModelValidation().issue);
        }
        if (this["date"]) {
            outcome.issue.push(...this.date.doModelValidation().issue);
        }
        if (this["sourceIdentityCertificate"]) {
            outcome.issue.push(...this.sourceIdentityCertificate.doModelValidation().issue);
        }
        if (this["proxyIdentityCertificate"]) {
            outcome.issue.push(...this.proxyIdentityCertificate.doModelValidation().issue);
        }
        if (this["proxySignature"]) {
            outcome.issue.push(...this.proxySignature.doModelValidation().issue);
        }
        if (this["sourceSignature"]) {
            outcome.issue.push(...this.sourceSignature.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Information about the entity validating information.
 */
export class VerificationResultValidator extends fhir.BackboneElement {
    /**
     * Default constructor for VerificationResultValidator - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'VerificationResultValidator';
        if (source['organization']) {
            this.organization = new fhir.Reference(source.organization);
        }
        else {
            this.organization = null;
        }
        if (source['identityCertificate']) {
            this.identityCertificate = new fhir.FhirString({ value: source.identityCertificate });
        }
        if (source['attestationSignature']) {
            this.attestationSignature = new fhir.Signature(source.attestationSignature);
        }
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['organization']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property organization:fhir.Reference fhir: VerificationResult.validator.organization:Reference", }));
        }
        if (this["organization"]) {
            outcome.issue.push(...this.organization.doModelValidation().issue);
        }
        if (this["identityCertificate"]) {
            outcome.issue.push(...this.identityCertificate.doModelValidation().issue);
        }
        if (this["attestationSignature"]) {
            outcome.issue.push(...this.attestationSignature.doModelValidation().issue);
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
export class VerificationResult extends fhir.DomainResource {
    /**
     * Default constructor for VerificationResult - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}, options = {}) {
        super(source, options);
        this.__dataType = 'VerificationResult';
        /**
         * A resource that was validated.
         */
        this.target = [];
        /**
         * The fhirpath location(s) within the resource that was validated.
         */
        this.targetLocation = [];
        /**
         * The primary process by which the target is validated (edit check; value set; primary source; multiple sources; standalone; in context).
         */
        this.validationProcess = [];
        /**
         * Information about the primary source(s) involved in validation.
         */
        this.primarySource = [];
        /**
         * Information about the entity validating information.
         */
        this.validator = [];
        this.resourceType = 'VerificationResult';
        if (source['target']) {
            this.target = source.target.map((x) => new fhir.Reference(x));
        }
        if (source['targetLocation']) {
            this.targetLocation = source.targetLocation.map((x) => new fhir.FhirString({ value: x }));
        }
        if (source['need']) {
            this.need = new fhir.CodeableConcept(source.need);
        }
        if (source['status']) {
            this.status = source.status;
        }
        else {
            this.status = null;
        }
        if (source['statusDate']) {
            this.statusDate = new fhir.FhirDateTime({ value: source.statusDate });
        }
        if (source['validationType']) {
            this.validationType = new fhir.CodeableConcept(source.validationType);
        }
        if (source['validationProcess']) {
            this.validationProcess = source.validationProcess.map((x) => new fhir.CodeableConcept(x));
        }
        if (source['frequency']) {
            this.frequency = new fhir.Timing(source.frequency);
        }
        if (source['lastPerformed']) {
            this.lastPerformed = new fhir.FhirDateTime({ value: source.lastPerformed });
        }
        if (source['nextScheduled']) {
            this.nextScheduled = new fhir.FhirDate({ value: source.nextScheduled });
        }
        if (source['failureAction']) {
            this.failureAction = new fhir.CodeableConcept(source.failureAction);
        }
        if (source['primarySource']) {
            this.primarySource = source.primarySource.map((x) => new fhir.VerificationResultPrimarySource(x));
        }
        if (source['attestation']) {
            this.attestation = new fhir.VerificationResultAttestation(source.attestation);
        }
        if (source['validator']) {
            this.validator = source.validator.map((x) => new fhir.VerificationResultValidator(x));
        }
    }
    /**
     * Preferred-bound Value Set for need
     */
    static needPreferredValueSet() {
        return VerificationresultNeedValueSet;
    }
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet() {
        return VerificationresultStatusValueSet;
    }
    /**
     * Preferred-bound Value Set for validationType
     */
    static validationTypePreferredValueSet() {
        return VerificationresultValidationTypeValueSet;
    }
    /**
     * Example-bound Value Set for validationProcess
     */
    static validationProcessExampleValueSet() {
        return VerificationresultValidationProcessValueSet;
    }
    /**
     * Preferred-bound Value Set for failureAction
     */
    static failureActionPreferredValueSet() {
        return VerificationresultFailureActionValueSet;
    }
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation() {
        var outcome = super.doModelValidation();
        if (!this['resourceType']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property resourceType:'VerificationResult' fhir: VerificationResult.resourceType:'VerificationResult'", }));
        }
        if (this["target"]) {
            this.target.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["targetLocation"]) {
            this.targetLocation.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["need"]) {
            outcome.issue.push(...this.need.doModelValidation().issue);
        }
        if (!this['status']) {
            outcome.issue.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing, diagnostics: "Missing required property status:VerificationresultStatusValueSetEnum fhir: VerificationResult.status:code", }));
        }
        if (this["statusDate"]) {
            outcome.issue.push(...this.statusDate.doModelValidation().issue);
        }
        if (this["validationType"]) {
            outcome.issue.push(...this.validationType.doModelValidation().issue);
        }
        if (this["validationProcess"]) {
            this.validationProcess.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["frequency"]) {
            outcome.issue.push(...this.frequency.doModelValidation().issue);
        }
        if (this["lastPerformed"]) {
            outcome.issue.push(...this.lastPerformed.doModelValidation().issue);
        }
        if (this["nextScheduled"]) {
            outcome.issue.push(...this.nextScheduled.doModelValidation().issue);
        }
        if (this["failureAction"]) {
            outcome.issue.push(...this.failureAction.doModelValidation().issue);
        }
        if (this["primarySource"]) {
            this.primarySource.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        if (this["attestation"]) {
            outcome.issue.push(...this.attestation.doModelValidation().issue);
        }
        if (this["validator"]) {
            this.validator.forEach((x) => { outcome.issue.push(...x.doModelValidation().issue); });
        }
        return outcome;
    }
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON() {
        return fhir.fhirToJson(this);
    }
}
//# sourceMappingURL=VerificationResult.js.map