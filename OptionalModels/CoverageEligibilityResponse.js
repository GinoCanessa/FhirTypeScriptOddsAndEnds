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
 * Benefits used to date.
 */
var CoverageEligibilityResponseInsuranceItemBenefit = /** @class */ (function (_super) {
    __extends(CoverageEligibilityResponseInsuranceItemBenefit, _super);
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItemBenefit from an object that MAY NOT contain all required elements.
     */
    function CoverageEligibilityResponseInsuranceItemBenefit(source) {
        var _this = _super.call(this, source) || this;
        if (source["allowedUnsignedInt"] !== undefined) {
            _this.allowedUnsignedInt = source.allowedUnsignedInt;
        }
        if (source["_allowedUnsignedInt"] !== undefined) {
            _this._allowedUnsignedInt = new fhirModels.Element(source._allowedUnsignedInt);
        }
        if (source["allowedString"] !== undefined) {
            _this.allowedString = source.allowedString;
        }
        if (source["_allowedString"] !== undefined) {
            _this._allowedString = new fhirModels.Element(source._allowedString);
        }
        if (source["allowedMoney"] !== undefined) {
            _this.allowedMoney = new fhirModels.Money(source.allowedMoney);
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        if (source["usedUnsignedInt"] !== undefined) {
            _this.usedUnsignedInt = source.usedUnsignedInt;
        }
        if (source["_usedUnsignedInt"] !== undefined) {
            _this._usedUnsignedInt = new fhirModels.Element(source._usedUnsignedInt);
        }
        if (source["usedString"] !== undefined) {
            _this.usedString = source.usedString;
        }
        if (source["_usedString"] !== undefined) {
            _this._usedString = new fhirModels.Element(source._usedString);
        }
        if (source["usedMoney"] !== undefined) {
            _this.usedMoney = new fhirModels.Money(source.usedMoney);
        }
        return _this;
    }
    /**
     * Factory function to create a CoverageEligibilityResponseInsuranceItemBenefit from an object that MUST contain all required elements.
     */
    CoverageEligibilityResponseInsuranceItemBenefit.CreateStrict = function (source) {
        var dest = new CoverageEligibilityResponseInsuranceItemBenefit(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CoverageEligibilityResponseInsuranceItemBenefit is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CoverageEligibilityResponseInsuranceItemBenefit contains all required elements.
     */
    CoverageEligibilityResponseInsuranceItemBenefit.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CoverageEligibilityResponseInsuranceItemBenefit;
}(fhirModels.BackboneElement));
export { CoverageEligibilityResponseInsuranceItemBenefit };
/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
var CoverageEligibilityResponseInsuranceItem = /** @class */ (function (_super) {
    __extends(CoverageEligibilityResponseInsuranceItem, _super);
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItem from an object that MAY NOT contain all required elements.
     */
    function CoverageEligibilityResponseInsuranceItem(source) {
        var _this = _super.call(this, source) || this;
        if (source["authorizationRequired"] !== undefined) {
            _this.authorizationRequired = source.authorizationRequired;
        }
        if (source["_authorizationRequired"] !== undefined) {
            _this._authorizationRequired = new fhirModels.Element(source._authorizationRequired);
        }
        if (source["authorizationSupporting"] !== undefined) {
            _this.authorizationSupporting = source.authorizationSupporting.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["authorizationUrl"] !== undefined) {
            _this.authorizationUrl = source.authorizationUrl;
        }
        if (source["_authorizationUrl"] !== undefined) {
            _this._authorizationUrl = new fhirModels.Element(source._authorizationUrl);
        }
        if (source["benefit"] !== undefined) {
            _this.benefit = source.benefit.map(function (x) { return new fhirModels.CoverageEligibilityResponseInsuranceItemBenefit(x); });
        }
        if (source["category"] !== undefined) {
            _this.category = new fhirModels.CodeableConcept(source.category);
        }
        if (source["description"] !== undefined) {
            _this.description = source.description;
        }
        if (source["_description"] !== undefined) {
            _this._description = new fhirModels.Element(source._description);
        }
        if (source["excluded"] !== undefined) {
            _this.excluded = source.excluded;
        }
        if (source["_excluded"] !== undefined) {
            _this._excluded = new fhirModels.Element(source._excluded);
        }
        if (source["modifier"] !== undefined) {
            _this.modifier = source.modifier.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["name"] !== undefined) {
            _this.name = source.name;
        }
        if (source["_name"] !== undefined) {
            _this._name = new fhirModels.Element(source._name);
        }
        if (source["network"] !== undefined) {
            _this.network = new fhirModels.CodeableConcept(source.network);
        }
        if (source["productOrService"] !== undefined) {
            _this.productOrService = new fhirModels.CodeableConcept(source.productOrService);
        }
        if (source["provider"] !== undefined) {
            _this.provider = new fhirModels.Reference(source.provider);
        }
        if (source["term"] !== undefined) {
            _this.term = new fhirModels.CodeableConcept(source.term);
        }
        if (source["unit"] !== undefined) {
            _this.unit = new fhirModels.CodeableConcept(source.unit);
        }
        return _this;
    }
    /**
     * Factory function to create a CoverageEligibilityResponseInsuranceItem from an object that MUST contain all required elements.
     */
    CoverageEligibilityResponseInsuranceItem.CreateStrict = function (source) {
        var dest = new CoverageEligibilityResponseInsuranceItem(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CoverageEligibilityResponseInsuranceItem is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CoverageEligibilityResponseInsuranceItem contains all required elements.
     */
    CoverageEligibilityResponseInsuranceItem.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CoverageEligibilityResponseInsuranceItem;
}(fhirModels.BackboneElement));
export { CoverageEligibilityResponseInsuranceItem };
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
var CoverageEligibilityResponseInsurance = /** @class */ (function (_super) {
    __extends(CoverageEligibilityResponseInsurance, _super);
    /**
     * Default constructor for CoverageEligibilityResponseInsurance from an object that MAY NOT contain all required elements.
     */
    function CoverageEligibilityResponseInsurance(source) {
        var _this = _super.call(this, source) || this;
        if (source["benefitPeriod"] !== undefined) {
            _this.benefitPeriod = new fhirModels.Period(source.benefitPeriod);
        }
        if (source["coverage"] !== undefined) {
            _this.coverage = new fhirModels.Reference(source.coverage);
        }
        if (source["inforce"] !== undefined) {
            _this.inforce = source.inforce;
        }
        if (source["_inforce"] !== undefined) {
            _this._inforce = new fhirModels.Element(source._inforce);
        }
        if (source["item"] !== undefined) {
            _this.item = source.item.map(function (x) { return new fhirModels.CoverageEligibilityResponseInsuranceItem(x); });
        }
        return _this;
    }
    /**
     * Factory function to create a CoverageEligibilityResponseInsurance from an object that MUST contain all required elements.
     */
    CoverageEligibilityResponseInsurance.CreateStrict = function (source) {
        var dest = new CoverageEligibilityResponseInsurance(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CoverageEligibilityResponseInsurance is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CoverageEligibilityResponseInsurance contains all required elements.
     */
    CoverageEligibilityResponseInsurance.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["coverage"] === undefined) {
            missingElements.push("coverage");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CoverageEligibilityResponseInsurance;
}(fhirModels.BackboneElement));
export { CoverageEligibilityResponseInsurance };
/**
 * Errors encountered during the processing of the request.
 */
var CoverageEligibilityResponseError = /** @class */ (function (_super) {
    __extends(CoverageEligibilityResponseError, _super);
    /**
     * Default constructor for CoverageEligibilityResponseError from an object that MAY NOT contain all required elements.
     */
    function CoverageEligibilityResponseError(source) {
        var _this = _super.call(this, source) || this;
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        return _this;
    }
    /**
     * Factory function to create a CoverageEligibilityResponseError from an object that MUST contain all required elements.
     */
    CoverageEligibilityResponseError.CreateStrict = function (source) {
        var dest = new CoverageEligibilityResponseError(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CoverageEligibilityResponseError is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CoverageEligibilityResponseError contains all required elements.
     */
    CoverageEligibilityResponseError.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CoverageEligibilityResponseError;
}(fhirModels.BackboneElement));
export { CoverageEligibilityResponseError };
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
var CoverageEligibilityResponse = /** @class */ (function (_super) {
    __extends(CoverageEligibilityResponse, _super);
    /**
     * Default constructor for CoverageEligibilityResponse from an object that MAY NOT contain all required elements.
     */
    function CoverageEligibilityResponse(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "CoverageEligibilityResponse";
        if ((source['resourceType'] !== "CoverageEligibilityResponse") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a CoverageEligibilityResponse';
        }
        if (source["created"] !== undefined) {
            _this.created = source.created;
        }
        if (source["_created"] !== undefined) {
            _this._created = new fhirModels.Element(source._created);
        }
        if (source["disposition"] !== undefined) {
            _this.disposition = source.disposition;
        }
        if (source["_disposition"] !== undefined) {
            _this._disposition = new fhirModels.Element(source._disposition);
        }
        if (source["error"] !== undefined) {
            _this.error = source.error.map(function (x) { return new fhirModels.CoverageEligibilityResponseError(x); });
        }
        if (source["form"] !== undefined) {
            _this.form = new fhirModels.CodeableConcept(source.form);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["insurance"] !== undefined) {
            _this.insurance = source.insurance.map(function (x) { return new fhirModels.CoverageEligibilityResponseInsurance(x); });
        }
        if (source["insurer"] !== undefined) {
            _this.insurer = new fhirModels.Reference(source.insurer);
        }
        if (source["outcome"] !== undefined) {
            _this.outcome = source.outcome;
        }
        if (source["_outcome"] !== undefined) {
            _this._outcome = new fhirModels.Element(source._outcome);
        }
        if (source["patient"] !== undefined) {
            _this.patient = new fhirModels.Reference(source.patient);
        }
        if (source["preAuthRef"] !== undefined) {
            _this.preAuthRef = source.preAuthRef;
        }
        if (source["_preAuthRef"] !== undefined) {
            _this._preAuthRef = new fhirModels.Element(source._preAuthRef);
        }
        if (source["purpose"] !== undefined) {
            _this.purpose = source.purpose.map(function (x) { return (x); });
        }
        if (source["_purpose"] !== undefined) {
            _this._purpose = source._purpose.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["request"] !== undefined) {
            _this.request = new fhirModels.Reference(source.request);
        }
        if (source["requestor"] !== undefined) {
            _this.requestor = new fhirModels.Reference(source.requestor);
        }
        if (source["servicedDate"] !== undefined) {
            _this.servicedDate = source.servicedDate;
        }
        if (source["_servicedDate"] !== undefined) {
            _this._servicedDate = new fhirModels.Element(source._servicedDate);
        }
        if (source["servicedPeriod"] !== undefined) {
            _this.servicedPeriod = new fhirModels.Period(source.servicedPeriod);
        }
        if (source["status"] !== undefined) {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        return _this;
    }
    /**
     * Factory function to create a CoverageEligibilityResponse from an object that MUST contain all required elements.
     */
    CoverageEligibilityResponse.CreateStrict = function (source) {
        var dest = new CoverageEligibilityResponse(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CoverageEligibilityResponse is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CoverageEligibilityResponse contains all required elements.
     */
    CoverageEligibilityResponse.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["created"] === undefined) {
            missingElements.push("created");
        }
        if (this["insurer"] === undefined) {
            missingElements.push("insurer");
        }
        if (this["outcome"] === undefined) {
            missingElements.push("outcome");
        }
        if (this["patient"] === undefined) {
            missingElements.push("patient");
        }
        if ((this["purpose"] === undefined) || (this["purpose"].length === 0)) {
            missingElements.push("purpose");
        }
        if (this["request"] === undefined) {
            missingElements.push("request");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CoverageEligibilityResponse;
}(fhirModels.DomainResource));
export { CoverageEligibilityResponse };
/**
 * Code Values for the CoverageEligibilityResponse.outcome field
 */
export var CoverageEligibilityResponseOutcomeEnum;
(function (CoverageEligibilityResponseOutcomeEnum) {
    CoverageEligibilityResponseOutcomeEnum["QUEUED"] = "queued";
    CoverageEligibilityResponseOutcomeEnum["COMPLETE"] = "complete";
    CoverageEligibilityResponseOutcomeEnum["ERROR"] = "error";
    CoverageEligibilityResponseOutcomeEnum["PARTIAL"] = "partial";
})(CoverageEligibilityResponseOutcomeEnum || (CoverageEligibilityResponseOutcomeEnum = {}));
/**
 * Code Values for the CoverageEligibilityResponse.purpose field
 */
export var CoverageEligibilityResponsePurposeEnum;
(function (CoverageEligibilityResponsePurposeEnum) {
    CoverageEligibilityResponsePurposeEnum["AUTH_REQUIREMENTS"] = "auth-requirements";
    CoverageEligibilityResponsePurposeEnum["BENEFITS"] = "benefits";
    CoverageEligibilityResponsePurposeEnum["DISCOVERY"] = "discovery";
    CoverageEligibilityResponsePurposeEnum["VALIDATION"] = "validation";
})(CoverageEligibilityResponsePurposeEnum || (CoverageEligibilityResponsePurposeEnum = {}));
/**
 * Code Values for the CoverageEligibilityResponse.status field
 */
export var CoverageEligibilityResponseStatusEnum;
(function (CoverageEligibilityResponseStatusEnum) {
    CoverageEligibilityResponseStatusEnum["ACTIVE"] = "active";
    CoverageEligibilityResponseStatusEnum["CANCELLED"] = "cancelled";
    CoverageEligibilityResponseStatusEnum["DRAFT"] = "draft";
    CoverageEligibilityResponseStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(CoverageEligibilityResponseStatusEnum || (CoverageEligibilityResponseStatusEnum = {}));
