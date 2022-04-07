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
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
var CoverageEligibilityRequestSupportingInfo = /** @class */ (function (_super) {
    __extends(CoverageEligibilityRequestSupportingInfo, _super);
    /**
     * Default constructor for CoverageEligibilityRequestSupportingInfo from an object that MAY NOT contain all required elements.
     */
    function CoverageEligibilityRequestSupportingInfo(source) {
        var _this = _super.call(this, source) || this;
        if (source["appliesToAll"] !== undefined) {
            _this.appliesToAll = source.appliesToAll;
        }
        if (source["_appliesToAll"] !== undefined) {
            _this._appliesToAll = new fhirModels.Element(source._appliesToAll);
        }
        if (source["information"] !== undefined) {
            _this.information = new fhirModels.Reference(source.information);
        }
        if (source["sequence"] !== undefined) {
            _this.sequence = source.sequence;
        }
        if (source["_sequence"] !== undefined) {
            _this._sequence = new fhirModels.Element(source._sequence);
        }
        return _this;
    }
    /**
     * Factory function to create a CoverageEligibilityRequestSupportingInfo from an object that MUST contain all required elements.
     */
    CoverageEligibilityRequestSupportingInfo.CreateStrict = function (source) {
        var dest = new CoverageEligibilityRequestSupportingInfo(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CoverageEligibilityRequestSupportingInfo is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CoverageEligibilityRequestSupportingInfo contains all required elements.
     */
    CoverageEligibilityRequestSupportingInfo.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["information"] === undefined) {
            missingElements.push("information");
        }
        if (this["sequence"] === undefined) {
            missingElements.push("sequence");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CoverageEligibilityRequestSupportingInfo;
}(fhirModels.BackboneElement));
export { CoverageEligibilityRequestSupportingInfo };
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
var CoverageEligibilityRequestInsurance = /** @class */ (function (_super) {
    __extends(CoverageEligibilityRequestInsurance, _super);
    /**
     * Default constructor for CoverageEligibilityRequestInsurance from an object that MAY NOT contain all required elements.
     */
    function CoverageEligibilityRequestInsurance(source) {
        var _this = _super.call(this, source) || this;
        if (source["businessArrangement"] !== undefined) {
            _this.businessArrangement = source.businessArrangement;
        }
        if (source["_businessArrangement"] !== undefined) {
            _this._businessArrangement = new fhirModels.Element(source._businessArrangement);
        }
        if (source["coverage"] !== undefined) {
            _this.coverage = new fhirModels.Reference(source.coverage);
        }
        if (source["focal"] !== undefined) {
            _this.focal = source.focal;
        }
        if (source["_focal"] !== undefined) {
            _this._focal = new fhirModels.Element(source._focal);
        }
        return _this;
    }
    /**
     * Factory function to create a CoverageEligibilityRequestInsurance from an object that MUST contain all required elements.
     */
    CoverageEligibilityRequestInsurance.CreateStrict = function (source) {
        var dest = new CoverageEligibilityRequestInsurance(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CoverageEligibilityRequestInsurance is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CoverageEligibilityRequestInsurance contains all required elements.
     */
    CoverageEligibilityRequestInsurance.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["coverage"] === undefined) {
            missingElements.push("coverage");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CoverageEligibilityRequestInsurance;
}(fhirModels.BackboneElement));
export { CoverageEligibilityRequestInsurance };
/**
 * Patient diagnosis for which care is sought.
 */
var CoverageEligibilityRequestItemDiagnosis = /** @class */ (function (_super) {
    __extends(CoverageEligibilityRequestItemDiagnosis, _super);
    /**
     * Default constructor for CoverageEligibilityRequestItemDiagnosis from an object that MAY NOT contain all required elements.
     */
    function CoverageEligibilityRequestItemDiagnosis(source) {
        var _this = _super.call(this, source) || this;
        if (source["diagnosisCodeableConcept"] !== undefined) {
            _this.diagnosisCodeableConcept = new fhirModels.CodeableConcept(source.diagnosisCodeableConcept);
        }
        if (source["diagnosisReference"] !== undefined) {
            _this.diagnosisReference = new fhirModels.Reference(source.diagnosisReference);
        }
        return _this;
    }
    /**
     * Factory function to create a CoverageEligibilityRequestItemDiagnosis from an object that MUST contain all required elements.
     */
    CoverageEligibilityRequestItemDiagnosis.CreateStrict = function (source) {
        var dest = new CoverageEligibilityRequestItemDiagnosis(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CoverageEligibilityRequestItemDiagnosis is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CoverageEligibilityRequestItemDiagnosis contains all required elements.
     */
    CoverageEligibilityRequestItemDiagnosis.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CoverageEligibilityRequestItemDiagnosis;
}(fhirModels.BackboneElement));
export { CoverageEligibilityRequestItemDiagnosis };
/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
var CoverageEligibilityRequestItem = /** @class */ (function (_super) {
    __extends(CoverageEligibilityRequestItem, _super);
    /**
     * Default constructor for CoverageEligibilityRequestItem from an object that MAY NOT contain all required elements.
     */
    function CoverageEligibilityRequestItem(source) {
        var _this = _super.call(this, source) || this;
        if (source["category"] !== undefined) {
            _this.category = new fhirModels.CodeableConcept(source.category);
        }
        if (source["detail"] !== undefined) {
            _this.detail = source.detail.map(function (x) { return new fhirModels.Reference(x); });
        }
        if (source["diagnosis"] !== undefined) {
            _this.diagnosis = source.diagnosis.map(function (x) { return new fhirModels.CoverageEligibilityRequestItemDiagnosis(x); });
        }
        if (source["facility"] !== undefined) {
            _this.facility = new fhirModels.Reference(source.facility);
        }
        if (source["modifier"] !== undefined) {
            _this.modifier = source.modifier.map(function (x) { return new fhirModels.CodeableConcept(x); });
        }
        if (source["productOrService"] !== undefined) {
            _this.productOrService = new fhirModels.CodeableConcept(source.productOrService);
        }
        if (source["provider"] !== undefined) {
            _this.provider = new fhirModels.Reference(source.provider);
        }
        if (source["quantity"] !== undefined) {
            _this.quantity = new fhirModels.Quantity(source.quantity);
        }
        if (source["supportingInfoSequence"] !== undefined) {
            _this.supportingInfoSequence = source.supportingInfoSequence.map(function (x) { return (x); });
        }
        if (source["_supportingInfoSequence"] !== undefined) {
            _this._supportingInfoSequence = source._supportingInfoSequence.map(function (x) { return new fhirModels.Element(x); });
        }
        if (source["unitPrice"] !== undefined) {
            _this.unitPrice = new fhirModels.Money(source.unitPrice);
        }
        return _this;
    }
    /**
     * Factory function to create a CoverageEligibilityRequestItem from an object that MUST contain all required elements.
     */
    CoverageEligibilityRequestItem.CreateStrict = function (source) {
        var dest = new CoverageEligibilityRequestItem(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CoverageEligibilityRequestItem is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CoverageEligibilityRequestItem contains all required elements.
     */
    CoverageEligibilityRequestItem.prototype.checkRequiredElements = function () {
        var missingElements = [];
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CoverageEligibilityRequestItem;
}(fhirModels.BackboneElement));
export { CoverageEligibilityRequestItem };
/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
var CoverageEligibilityRequest = /** @class */ (function (_super) {
    __extends(CoverageEligibilityRequest, _super);
    /**
     * Default constructor for CoverageEligibilityRequest from an object that MAY NOT contain all required elements.
     */
    function CoverageEligibilityRequest(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "CoverageEligibilityRequest";
        if ((source['resourceType'] !== "CoverageEligibilityRequest") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a CoverageEligibilityRequest';
        }
        if (source["created"] !== undefined) {
            _this.created = source.created;
        }
        if (source["_created"] !== undefined) {
            _this._created = new fhirModels.Element(source._created);
        }
        if (source["enterer"] !== undefined) {
            _this.enterer = new fhirModels.Reference(source.enterer);
        }
        if (source["facility"] !== undefined) {
            _this.facility = new fhirModels.Reference(source.facility);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["insurance"] !== undefined) {
            _this.insurance = source.insurance.map(function (x) { return new fhirModels.CoverageEligibilityRequestInsurance(x); });
        }
        if (source["insurer"] !== undefined) {
            _this.insurer = new fhirModels.Reference(source.insurer);
        }
        if (source["item"] !== undefined) {
            _this.item = source.item.map(function (x) { return new fhirModels.CoverageEligibilityRequestItem(x); });
        }
        if (source["patient"] !== undefined) {
            _this.patient = new fhirModels.Reference(source.patient);
        }
        if (source["priority"] !== undefined) {
            _this.priority = new fhirModels.CodeableConcept(source.priority);
        }
        if (source["provider"] !== undefined) {
            _this.provider = new fhirModels.Reference(source.provider);
        }
        if (source["purpose"] !== undefined) {
            _this.purpose = source.purpose.map(function (x) { return (x); });
        }
        if (source["_purpose"] !== undefined) {
            _this._purpose = source._purpose.map(function (x) { return new fhirModels.Element(x); });
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
        if (source["supportingInfo"] !== undefined) {
            _this.supportingInfo = source.supportingInfo.map(function (x) { return new fhirModels.CoverageEligibilityRequestSupportingInfo(x); });
        }
        return _this;
    }
    /**
     * Factory function to create a CoverageEligibilityRequest from an object that MUST contain all required elements.
     */
    CoverageEligibilityRequest.CreateStrict = function (source) {
        var dest = new CoverageEligibilityRequest(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw "CoverageEligibilityRequest is missing elements: ".concat(missingElements.join(", "));
        }
        return dest;
    };
    /**
     * Check if the current CoverageEligibilityRequest contains all required elements.
     */
    CoverageEligibilityRequest.prototype.checkRequiredElements = function () {
        var missingElements = [];
        if (this["created"] === undefined) {
            missingElements.push("created");
        }
        if (this["insurer"] === undefined) {
            missingElements.push("insurer");
        }
        if (this["patient"] === undefined) {
            missingElements.push("patient");
        }
        if ((this["purpose"] === undefined) || (this["purpose"].length === 0)) {
            missingElements.push("purpose");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = _super.prototype.checkRequiredElements.call(this);
        missingElements.push.apply(missingElements, parentMissing);
        return missingElements;
    };
    return CoverageEligibilityRequest;
}(fhirModels.DomainResource));
export { CoverageEligibilityRequest };
/**
 * Code Values for the CoverageEligibilityRequest.purpose field
 */
export var CoverageEligibilityRequestPurposeEnum;
(function (CoverageEligibilityRequestPurposeEnum) {
    CoverageEligibilityRequestPurposeEnum["AUTH_REQUIREMENTS"] = "auth-requirements";
    CoverageEligibilityRequestPurposeEnum["BENEFITS"] = "benefits";
    CoverageEligibilityRequestPurposeEnum["DISCOVERY"] = "discovery";
    CoverageEligibilityRequestPurposeEnum["VALIDATION"] = "validation";
})(CoverageEligibilityRequestPurposeEnum || (CoverageEligibilityRequestPurposeEnum = {}));
/**
 * Code Values for the CoverageEligibilityRequest.status field
 */
export var CoverageEligibilityRequestStatusEnum;
(function (CoverageEligibilityRequestStatusEnum) {
    CoverageEligibilityRequestStatusEnum["ACTIVE"] = "active";
    CoverageEligibilityRequestStatusEnum["CANCELLED"] = "cancelled";
    CoverageEligibilityRequestStatusEnum["DRAFT"] = "draft";
    CoverageEligibilityRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(CoverageEligibilityRequestStatusEnum || (CoverageEligibilityRequestStatusEnum = {}));
