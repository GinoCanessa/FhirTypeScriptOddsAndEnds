var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhirModels from '../optionalmodels';
/**
 * Information about the primary source(s) involved in validation.
 */
var VerificationResultPrimarySource = /** @class */ (function (_super) {
    __extends(VerificationResultPrimarySource, _super);
    /**
     * Default constructor for VerificationResultPrimarySource from an object that MAY NOT contain all required elements.
     */
    function VerificationResultPrimarySource(source) {
        var _this = _super.call(this, source) || this;
        if (source["canPushUpdates"] !== undefined) {
            _this.canPushUpdates = new fhirModels.CodeableConcept(source.canPushUpdates);
        }
        if (source["communicationMethod"] !== undefined) {
            _this.communicationMethod = source.communicationMethod.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["pushTypeAvailable"] !== undefined) {
            _this.pushTypeAvailable = source.pushTypeAvailable.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["type"] !== undefined) {
            _this.type = source.type.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["validationDate"] !== undefined) {
            _this.validationDate = source.validationDate;
        }
        if (source["_validationDate"] !== undefined) {
            _this._validationDate = new fhirModels.Element(source._validationDate);
        }
        if (source["validationStatus"] !== undefined) {
            _this.validationStatus = new fhirModels.CodeableConcept(source.validationStatus);
        }
        if (source["who"] !== undefined) {
            _this.who = new fhirModels.Reference(source.who);
        }
        return _this;
    }
    /**
     * Factory function to create a VerificationResultPrimarySource from an object that MUST contain all required elements.
     */
    VerificationResultPrimarySource.CreateStrict = function (source) {
        var dest = new VerificationResultPrimarySource(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "VerificationResultPrimarySource is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current VerificationResultPrimarySource contains all required elements.
     */
    VerificationResultPrimarySource.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return VerificationResultPrimarySource;
}(fhirModels.BackboneElement));
export { VerificationResultPrimarySource };
/**
 * Information about the entity attesting to information.
 */
var VerificationResultAttestation = /** @class */ (function (_super) {
    __extends(VerificationResultAttestation, _super);
    /**
     * Default constructor for VerificationResultAttestation from an object that MAY NOT contain all required elements.
     */
    function VerificationResultAttestation(source) {
        var _this = _super.call(this, source) || this;
        if (source["communicationMethod"] !== undefined) {
            _this.communicationMethod = new fhirModels.CodeableConcept(source.communicationMethod);
        }
        if (source["date"] !== undefined) {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["onBehalfOf"] !== undefined) {
            _this.onBehalfOf = new fhirModels.Reference(source.onBehalfOf);
        }
        if (source["proxyIdentityCertificate"] !== undefined) {
            _this.proxyIdentityCertificate = source.proxyIdentityCertificate;
        }
        if (source["_proxyIdentityCertificate"] !== undefined) {
            _this._proxyIdentityCertificate = new fhirModels.Element(source._proxyIdentityCertificate);
        }
        if (source["proxySignature"] !== undefined) {
            _this.proxySignature = new fhirModels.Signature(source.proxySignature);
        }
        if (source["sourceIdentityCertificate"] !== undefined) {
            _this.sourceIdentityCertificate = source.sourceIdentityCertificate;
        }
        if (source["_sourceIdentityCertificate"] !== undefined) {
            _this._sourceIdentityCertificate = new fhirModels.Element(source._sourceIdentityCertificate);
        }
        if (source["sourceSignature"] !== undefined) {
            _this.sourceSignature = new fhirModels.Signature(source.sourceSignature);
        }
        if (source["who"] !== undefined) {
            _this.who = new fhirModels.Reference(source.who);
        }
        return _this;
    }
    /**
     * Factory function to create a VerificationResultAttestation from an object that MUST contain all required elements.
     */
    VerificationResultAttestation.CreateStrict = function (source) {
        var dest = new VerificationResultAttestation(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "VerificationResultAttestation is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current VerificationResultAttestation contains all required elements.
     */
    VerificationResultAttestation.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return VerificationResultAttestation;
}(fhirModels.BackboneElement));
export { VerificationResultAttestation };
/**
 * Information about the entity validating information.
 */
var VerificationResultValidator = /** @class */ (function (_super) {
    __extends(VerificationResultValidator, _super);
    /**
     * Default constructor for VerificationResultValidator from an object that MAY NOT contain all required elements.
     */
    function VerificationResultValidator(source) {
        var _this = _super.call(this, source) || this;
        if (source["attestationSignature"] !== undefined) {
            _this.attestationSignature = new fhirModels.Signature(source.attestationSignature);
        }
        if (source["identityCertificate"] !== undefined) {
            _this.identityCertificate = source.identityCertificate;
        }
        if (source["_identityCertificate"] !== undefined) {
            _this._identityCertificate = new fhirModels.Element(source._identityCertificate);
        }
        if (source["organization"] !== undefined) {
            _this.organization = new fhirModels.Reference(source.organization);
        }
        return _this;
    }
    /**
     * Factory function to create a VerificationResultValidator from an object that MUST contain all required elements.
     */
    VerificationResultValidator.CreateStrict = function (source) {
        var dest = new VerificationResultValidator(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "VerificationResultValidator is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current VerificationResultValidator contains all required elements.
     */
    VerificationResultValidator.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["organization"] === undefined) {
            missingElements.push("organization");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return VerificationResultValidator;
}(fhirModels.BackboneElement));
export { VerificationResultValidator };
/**
 * Describes validation requirements, source(s), status and dates for one or more elements.
 */
var VerificationResult = /** @class */ (function (_super) {
    __extends(VerificationResult, _super);
    /**
     * Default constructor for VerificationResult from an object that MAY NOT contain all required elements.
     */
    function VerificationResult(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "VerificationResult";
        if ((source['resourceType'] !== "VerificationResult") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a VerificationResult';
        }
        if (source["attestation"] !== undefined) {
            _this.attestation = new fhirModels.VerificationResultAttestation(source.attestation);
        }
        if (source["failureAction"] !== undefined) {
            _this.failureAction = new fhirModels.CodeableConcept(source.failureAction);
        }
        if (source["frequency"] !== undefined) {
            _this.frequency = new fhirModels.Timing(source.frequency);
        }
        if (source["lastPerformed"] !== undefined) {
            _this.lastPerformed = source.lastPerformed;
        }
        if (source["_lastPerformed"] !== undefined) {
            _this._lastPerformed = new fhirModels.Element(source._lastPerformed);
        }
        if (source["need"] !== undefined) {
            _this.need = new fhirModels.CodeableConcept(source.need);
        }
        if (source["nextScheduled"] !== undefined) {
            _this.nextScheduled = source.nextScheduled;
        }
        if (source["_nextScheduled"] !== undefined) {
            _this._nextScheduled = new fhirModels.Element(source._nextScheduled);
        }
        if (source["primarySource"] !== undefined) {
            _this.primarySource = source.primarySource.map(function (x) { return new fhirModels.VerificationResultPrimarySource(x); });
        }
        if (source["status"] !== undefined) {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["statusDate"] !== undefined) {
            _this.statusDate = source.statusDate;
        }
        if (source["_statusDate"] !== undefined) {
            _this._statusDate = new fhirModels.Element(source._statusDate);
        }
        if (source["target"] !== undefined) {
            _this.target = source.target.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["targetLocation"] !== undefined) {
            _this.targetLocation = source.targetLocation.map(function (x) { return (x); });
        }
        if (source["_targetLocation"] !== undefined) {
            _this._targetLocation = source._targetLocation.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["validationProcess"] !== undefined) {
            _this.validationProcess = source.validationProcess.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["validationType"] !== undefined) {
            _this.validationType = new fhirModels.CodeableConcept(source.validationType);
        }
        if (source["validator"] !== undefined) {
            _this.validator = source.validator.map(function (x) { return new fhirModels.VerificationResultValidator(x); });
        }
        return _this;
    }
    /**
     * Factory function to create a VerificationResult from an object that MUST contain all required elements.
     */
    VerificationResult.CreateStrict = function (source) {
        var dest = new VerificationResult(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "VerificationResult is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current VerificationResult contains all required elements.
     */
    VerificationResult.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return VerificationResult;
}(fhirModels.DomainResource));
export { VerificationResult };
/**
 * Code Values for the VerificationResult.status field
 */
export var VerificationResultStatusEnum;
(function (VerificationResultStatusEnum) {
    VerificationResultStatusEnum["ATTESTED"] = "attested";
    VerificationResultStatusEnum["VALIDATED"] = "validated";
    VerificationResultStatusEnum["IN_PROCESS"] = "in-process";
    VerificationResultStatusEnum["REQ_REVALID"] = "req-revalid";
    VerificationResultStatusEnum["VAL_FAIL"] = "val-fail";
    VerificationResultStatusEnum["REVAL_FAIL"] = "reval-fail";
})(VerificationResultStatusEnum || (VerificationResultStatusEnum = {}));
