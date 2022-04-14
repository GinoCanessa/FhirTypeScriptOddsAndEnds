"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationResultStatusEnum = exports.VerificationResult = exports.VerificationResultValidator = exports.VerificationResultAttestation = exports.VerificationResultPrimarySource = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../strictmodels"));
/**
 * Information about the primary source(s) involved in validation.
 */
class VerificationResultPrimarySource extends fhirModels.BackboneElement {
    /**
     * Default constructor for VerificationResultPrimarySource from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["canPushUpdates"] !== undefined) {
            this.canPushUpdates = new fhirModels.CodeableConcept(source.canPushUpdates);
        }
        if (source["communicationMethod"] !== undefined) {
            this.communicationMethod = source.communicationMethod.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["pushTypeAvailable"] !== undefined) {
            this.pushTypeAvailable = source.pushTypeAvailable.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["type"] !== undefined) {
            this.type = source.type.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["validationDate"] !== undefined) {
            this.validationDate = source.validationDate;
        }
        if (source["_validationDate"] !== undefined) {
            this._validationDate = new fhirModels.Element(source._validationDate);
        }
        if (source["validationStatus"] !== undefined) {
            this.validationStatus = new fhirModels.CodeableConcept(source.validationStatus);
        }
        if (source["who"] !== undefined) {
            this.who = new fhirModels.Reference(source.who);
        }
    }
}
exports.VerificationResultPrimarySource = VerificationResultPrimarySource;
/**
 * Information about the entity attesting to information.
 */
class VerificationResultAttestation extends fhirModels.BackboneElement {
    /**
     * Default constructor for VerificationResultAttestation from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["communicationMethod"] !== undefined) {
            this.communicationMethod = new fhirModels.CodeableConcept(source.communicationMethod);
        }
        if (source["date"] !== undefined) {
            this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            this._date = new fhirModels.Element(source._date);
        }
        if (source["onBehalfOf"] !== undefined) {
            this.onBehalfOf = new fhirModels.Reference(source.onBehalfOf);
        }
        if (source["proxyIdentityCertificate"] !== undefined) {
            this.proxyIdentityCertificate = source.proxyIdentityCertificate;
        }
        if (source["_proxyIdentityCertificate"] !== undefined) {
            this._proxyIdentityCertificate = new fhirModels.Element(source._proxyIdentityCertificate);
        }
        if (source["proxySignature"] !== undefined) {
            this.proxySignature = new fhirModels.Signature(source.proxySignature);
        }
        if (source["sourceIdentityCertificate"] !== undefined) {
            this.sourceIdentityCertificate = source.sourceIdentityCertificate;
        }
        if (source["_sourceIdentityCertificate"] !== undefined) {
            this._sourceIdentityCertificate = new fhirModels.Element(source._sourceIdentityCertificate);
        }
        if (source["sourceSignature"] !== undefined) {
            this.sourceSignature = new fhirModels.Signature(source.sourceSignature);
        }
        if (source["who"] !== undefined) {
            this.who = new fhirModels.Reference(source.who);
        }
    }
}
exports.VerificationResultAttestation = VerificationResultAttestation;
/**
 * Information about the entity validating information.
 */
class VerificationResultValidator extends fhirModels.BackboneElement {
    /**
     * Default constructor for VerificationResultValidator from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["attestationSignature"] !== undefined) {
            this.attestationSignature = new fhirModels.Signature(source.attestationSignature);
        }
        if (source["identityCertificate"] !== undefined) {
            this.identityCertificate = source.identityCertificate;
        }
        if (source["_identityCertificate"] !== undefined) {
            this._identityCertificate = new fhirModels.Element(source._identityCertificate);
        }
        {
            this.organization = new fhirModels.Reference(source.organization);
        }
    }
}
exports.VerificationResultValidator = VerificationResultValidator;
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
class VerificationResult extends fhirModels.DomainResource {
    /**
     * Default constructor for VerificationResult from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "VerificationResult";
        if ((source['resourceType'] !== "VerificationResult") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a VerificationResult';
        }
        if (source["attestation"] !== undefined) {
            this.attestation = new fhirModels.VerificationResultAttestation(source.attestation);
        }
        if (source["failureAction"] !== undefined) {
            this.failureAction = new fhirModels.CodeableConcept(source.failureAction);
        }
        if (source["frequency"] !== undefined) {
            this.frequency = new fhirModels.Timing(source.frequency);
        }
        if (source["lastPerformed"] !== undefined) {
            this.lastPerformed = source.lastPerformed;
        }
        if (source["_lastPerformed"] !== undefined) {
            this._lastPerformed = new fhirModels.Element(source._lastPerformed);
        }
        if (source["need"] !== undefined) {
            this.need = new fhirModels.CodeableConcept(source.need);
        }
        if (source["nextScheduled"] !== undefined) {
            this.nextScheduled = source.nextScheduled;
        }
        if (source["_nextScheduled"] !== undefined) {
            this._nextScheduled = new fhirModels.Element(source._nextScheduled);
        }
        if (source["primarySource"] !== undefined) {
            this.primarySource = source.primarySource.map((x) => new fhirModels.VerificationResultPrimarySource(x));
        }
        {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
        if (source["statusDate"] !== undefined) {
            this.statusDate = source.statusDate;
        }
        if (source["_statusDate"] !== undefined) {
            this._statusDate = new fhirModels.Element(source._statusDate);
        }
        if (source["target"] !== undefined) {
            this.target = source.target.map((x) => new fhirModels.Reference(x));
        }
        if (source["targetLocation"] !== undefined) {
            this.targetLocation = source.targetLocation.map((x) => (x));
        }
        if (source["_targetLocation"] !== undefined) {
            this._targetLocation = source._targetLocation.map((x) => new fhirModels.Element(x));
        }
        if (source["validationProcess"] !== undefined) {
            this.validationProcess = source.validationProcess.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["validationType"] !== undefined) {
            this.validationType = new fhirModels.CodeableConcept(source.validationType);
        }
        if (source["validator"] !== undefined) {
            this.validator = source.validator.map((x) => new fhirModels.VerificationResultValidator(x));
        }
    }
}
exports.VerificationResult = VerificationResult;
/**
 * Code Values for the VerificationResult.status field
 */
var VerificationResultStatusEnum;
(function (VerificationResultStatusEnum) {
    VerificationResultStatusEnum["ATTESTED"] = "attested";
    VerificationResultStatusEnum["VALIDATED"] = "validated";
    VerificationResultStatusEnum["IN_PROCESS"] = "in-process";
    VerificationResultStatusEnum["REQ_REVALID"] = "req-revalid";
    VerificationResultStatusEnum["VAL_FAIL"] = "val-fail";
    VerificationResultStatusEnum["REVAL_FAIL"] = "reval-fail";
})(VerificationResultStatusEnum = exports.VerificationResultStatusEnum || (exports.VerificationResultStatusEnum = {}));
//# sourceMappingURL=VerificationResult.js.map