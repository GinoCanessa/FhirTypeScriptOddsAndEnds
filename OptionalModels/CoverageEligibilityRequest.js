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
exports.CoverageEligibilityRequestStatusEnum = exports.CoverageEligibilityRequestPurposeEnum = exports.CoverageEligibilityRequest = exports.CoverageEligibilityRequestItem = exports.CoverageEligibilityRequestItemDiagnosis = exports.CoverageEligibilityRequestInsurance = exports.CoverageEligibilityRequestSupportingInfo = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
class CoverageEligibilityRequestSupportingInfo extends fhirModels.BackboneElement {
    /**
     * Default constructor for CoverageEligibilityRequestSupportingInfo from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["appliesToAll"] !== undefined) {
            this.appliesToAll = source.appliesToAll;
        }
        if (source["_appliesToAll"] !== undefined) {
            this._appliesToAll = new fhirModels.Element(source._appliesToAll);
        }
        if (source["information"] !== undefined) {
            this.information = new fhirModels.Reference(source.information);
        }
        if (source["sequence"] !== undefined) {
            this.sequence = source.sequence;
        }
        if (source["_sequence"] !== undefined) {
            this._sequence = new fhirModels.Element(source._sequence);
        }
    }
    /**
     * Factory function to create a CoverageEligibilityRequestSupportingInfo from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new CoverageEligibilityRequestSupportingInfo(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageEligibilityRequestSupportingInfo is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current CoverageEligibilityRequestSupportingInfo contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["information"] === undefined) {
            missingElements.push("information");
        }
        if (this["sequence"] === undefined) {
            missingElements.push("sequence");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.CoverageEligibilityRequestSupportingInfo = CoverageEligibilityRequestSupportingInfo;
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
class CoverageEligibilityRequestInsurance extends fhirModels.BackboneElement {
    /**
     * Default constructor for CoverageEligibilityRequestInsurance from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["businessArrangement"] !== undefined) {
            this.businessArrangement = source.businessArrangement;
        }
        if (source["_businessArrangement"] !== undefined) {
            this._businessArrangement = new fhirModels.Element(source._businessArrangement);
        }
        if (source["coverage"] !== undefined) {
            this.coverage = new fhirModels.Reference(source.coverage);
        }
        if (source["focal"] !== undefined) {
            this.focal = source.focal;
        }
        if (source["_focal"] !== undefined) {
            this._focal = new fhirModels.Element(source._focal);
        }
    }
    /**
     * Factory function to create a CoverageEligibilityRequestInsurance from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new CoverageEligibilityRequestInsurance(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageEligibilityRequestInsurance is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current CoverageEligibilityRequestInsurance contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["coverage"] === undefined) {
            missingElements.push("coverage");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.CoverageEligibilityRequestInsurance = CoverageEligibilityRequestInsurance;
/**
 * Patient diagnosis for which care is sought.
 */
class CoverageEligibilityRequestItemDiagnosis extends fhirModels.BackboneElement {
    /**
     * Default constructor for CoverageEligibilityRequestItemDiagnosis from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["diagnosisCodeableConcept"] !== undefined) {
            this.diagnosisCodeableConcept = new fhirModels.CodeableConcept(source.diagnosisCodeableConcept);
        }
        if (source["diagnosisReference"] !== undefined) {
            this.diagnosisReference = new fhirModels.Reference(source.diagnosisReference);
        }
    }
    /**
     * Factory function to create a CoverageEligibilityRequestItemDiagnosis from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new CoverageEligibilityRequestItemDiagnosis(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageEligibilityRequestItemDiagnosis is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current CoverageEligibilityRequestItemDiagnosis contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.CoverageEligibilityRequestItemDiagnosis = CoverageEligibilityRequestItemDiagnosis;
/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
class CoverageEligibilityRequestItem extends fhirModels.BackboneElement {
    /**
     * Default constructor for CoverageEligibilityRequestItem from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        if (source["category"] !== undefined) {
            this.category = new fhirModels.CodeableConcept(source.category);
        }
        if (source["detail"] !== undefined) {
            this.detail = source.detail.map((x) => new fhirModels.Reference(x));
        }
        if (source["diagnosis"] !== undefined) {
            this.diagnosis = source.diagnosis.map((x) => new fhirModels.CoverageEligibilityRequestItemDiagnosis(x));
        }
        if (source["facility"] !== undefined) {
            this.facility = new fhirModels.Reference(source.facility);
        }
        if (source["modifier"] !== undefined) {
            this.modifier = source.modifier.map((x) => new fhirModels.CodeableConcept(x));
        }
        if (source["productOrService"] !== undefined) {
            this.productOrService = new fhirModels.CodeableConcept(source.productOrService);
        }
        if (source["provider"] !== undefined) {
            this.provider = new fhirModels.Reference(source.provider);
        }
        if (source["quantity"] !== undefined) {
            this.quantity = new fhirModels.Quantity(source.quantity);
        }
        if (source["supportingInfoSequence"] !== undefined) {
            this.supportingInfoSequence = source.supportingInfoSequence.map((x) => (x));
        }
        if (source["_supportingInfoSequence"] !== undefined) {
            this._supportingInfoSequence = source._supportingInfoSequence.map((x) => new fhirModels.Element(x));
        }
        if (source["unitPrice"] !== undefined) {
            this.unitPrice = new fhirModels.Money(source.unitPrice);
        }
    }
    /**
     * Factory function to create a CoverageEligibilityRequestItem from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new CoverageEligibilityRequestItem(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageEligibilityRequestItem is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current CoverageEligibilityRequestItem contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.CoverageEligibilityRequestItem = CoverageEligibilityRequestItem;
/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
class CoverageEligibilityRequest extends fhirModels.DomainResource {
    /**
     * Default constructor for CoverageEligibilityRequest from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "CoverageEligibilityRequest";
        if ((source['resourceType'] !== "CoverageEligibilityRequest") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a CoverageEligibilityRequest';
        }
        if (source["created"] !== undefined) {
            this.created = source.created;
        }
        if (source["_created"] !== undefined) {
            this._created = new fhirModels.Element(source._created);
        }
        if (source["enterer"] !== undefined) {
            this.enterer = new fhirModels.Reference(source.enterer);
        }
        if (source["facility"] !== undefined) {
            this.facility = new fhirModels.Reference(source.facility);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["insurance"] !== undefined) {
            this.insurance = source.insurance.map((x) => new fhirModels.CoverageEligibilityRequestInsurance(x));
        }
        if (source["insurer"] !== undefined) {
            this.insurer = new fhirModels.Reference(source.insurer);
        }
        if (source["item"] !== undefined) {
            this.item = source.item.map((x) => new fhirModels.CoverageEligibilityRequestItem(x));
        }
        if (source["patient"] !== undefined) {
            this.patient = new fhirModels.Reference(source.patient);
        }
        if (source["priority"] !== undefined) {
            this.priority = new fhirModels.CodeableConcept(source.priority);
        }
        if (source["provider"] !== undefined) {
            this.provider = new fhirModels.Reference(source.provider);
        }
        if (source["purpose"] !== undefined) {
            this.purpose = source.purpose.map((x) => (x));
        }
        if (source["_purpose"] !== undefined) {
            this._purpose = source._purpose.map((x) => new fhirModels.Element(x));
        }
        if (source["servicedDate"] !== undefined) {
            this.servicedDate = source.servicedDate;
        }
        if (source["_servicedDate"] !== undefined) {
            this._servicedDate = new fhirModels.Element(source._servicedDate);
        }
        if (source["servicedPeriod"] !== undefined) {
            this.servicedPeriod = new fhirModels.Period(source.servicedPeriod);
        }
        if (source["status"] !== undefined) {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
        if (source["supportingInfo"] !== undefined) {
            this.supportingInfo = source.supportingInfo.map((x) => new fhirModels.CoverageEligibilityRequestSupportingInfo(x));
        }
    }
    /**
     * Factory function to create a CoverageEligibilityRequest from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new CoverageEligibilityRequest(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageEligibilityRequest is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current CoverageEligibilityRequest contains all required elements.
     */
    checkRequiredElements() {
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
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.CoverageEligibilityRequest = CoverageEligibilityRequest;
/**
 * Code Values for the CoverageEligibilityRequest.purpose field
 */
var CoverageEligibilityRequestPurposeEnum;
(function (CoverageEligibilityRequestPurposeEnum) {
    CoverageEligibilityRequestPurposeEnum["AUTH_REQUIREMENTS"] = "auth-requirements";
    CoverageEligibilityRequestPurposeEnum["BENEFITS"] = "benefits";
    CoverageEligibilityRequestPurposeEnum["DISCOVERY"] = "discovery";
    CoverageEligibilityRequestPurposeEnum["VALIDATION"] = "validation";
})(CoverageEligibilityRequestPurposeEnum = exports.CoverageEligibilityRequestPurposeEnum || (exports.CoverageEligibilityRequestPurposeEnum = {}));
/**
 * Code Values for the CoverageEligibilityRequest.status field
 */
var CoverageEligibilityRequestStatusEnum;
(function (CoverageEligibilityRequestStatusEnum) {
    CoverageEligibilityRequestStatusEnum["ACTIVE"] = "active";
    CoverageEligibilityRequestStatusEnum["CANCELLED"] = "cancelled";
    CoverageEligibilityRequestStatusEnum["DRAFT"] = "draft";
    CoverageEligibilityRequestStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(CoverageEligibilityRequestStatusEnum = exports.CoverageEligibilityRequestStatusEnum || (exports.CoverageEligibilityRequestStatusEnum = {}));
//# sourceMappingURL=CoverageEligibilityRequest.js.map