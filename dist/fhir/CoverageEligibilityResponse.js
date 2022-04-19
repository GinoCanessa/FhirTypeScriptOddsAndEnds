// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * Benefits used to date.
 */
export class CoverageEligibilityResponseInsuranceItemBenefit extends fhir.BackboneElement {
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItemBenefit - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["allowedUnsignedInt"]) {
            this.allowedUnsignedInt = source.allowedUnsignedInt;
        }
        if (source["_allowedUnsignedInt"]) {
            this._allowedUnsignedInt = new fhir.FhirElement(source._allowedUnsignedInt);
        }
        if (source["allowedString"]) {
            this.allowedString = source.allowedString;
        }
        if (source["_allowedString"]) {
            this._allowedString = new fhir.FhirElement(source._allowedString);
        }
        if (source["allowedMoney"]) {
            this.allowedMoney = new fhir.Money(source.allowedMoney);
        }
        this.type = null;
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (this.type === undefined) {
            this.type = null;
        }
        if (source["usedUnsignedInt"]) {
            this.usedUnsignedInt = source.usedUnsignedInt;
        }
        if (source["_usedUnsignedInt"]) {
            this._usedUnsignedInt = new fhir.FhirElement(source._usedUnsignedInt);
        }
        if (source["usedString"]) {
            this.usedString = source.usedString;
        }
        if (source["_usedString"]) {
            this._usedString = new fhir.FhirElement(source._usedString);
        }
        if (source["usedMoney"]) {
            this.usedMoney = new fhir.Money(source.usedMoney);
        }
    }
    /**
     * Check if the current CoverageEligibilityResponseInsuranceItemBenefit contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a CoverageEligibilityResponseInsuranceItemBenefit from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new CoverageEligibilityResponseInsuranceItemBenefit(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageEligibilityResponseInsuranceItemBenefit is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
export class CoverageEligibilityResponseInsuranceItem extends fhir.BackboneElement {
    /**
     * Default constructor for CoverageEligibilityResponseInsuranceItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["authorizationRequired"]) {
            this.authorizationRequired = source.authorizationRequired;
        }
        if (source["_authorizationRequired"]) {
            this._authorizationRequired = new fhir.FhirElement(source._authorizationRequired);
        }
        if (source["authorizationSupporting"]) {
            this.authorizationSupporting = source.authorizationSupporting.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["authorizationUrl"]) {
            this.authorizationUrl = source.authorizationUrl;
        }
        if (source["_authorizationUrl"]) {
            this._authorizationUrl = new fhir.FhirElement(source._authorizationUrl);
        }
        if (source["benefit"]) {
            this.benefit = source.benefit.map((x) => new fhir.CoverageEligibilityResponseInsuranceItemBenefit(x));
        }
        if (source["category"]) {
            this.category = new fhir.CodeableConcept(source.category);
        }
        if (source["description"]) {
            this.description = source.description;
        }
        if (source["_description"]) {
            this._description = new fhir.FhirElement(source._description);
        }
        if (source["excluded"]) {
            this.excluded = source.excluded;
        }
        if (source["_excluded"]) {
            this._excluded = new fhir.FhirElement(source._excluded);
        }
        if (source["modifier"]) {
            this.modifier = source.modifier.map((x) => new fhir.CodeableConcept(x));
        }
        if (source["name"]) {
            this.name = source.name;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        if (source["network"]) {
            this.network = new fhir.CodeableConcept(source.network);
        }
        if (source["productOrService"]) {
            this.productOrService = new fhir.CodeableConcept(source.productOrService);
        }
        if (source["provider"]) {
            this.provider = new fhir.Reference(source.provider);
        }
        if (source["term"]) {
            this.term = new fhir.CodeableConcept(source.term);
        }
        if (source["unit"]) {
            this.unit = new fhir.CodeableConcept(source.unit);
        }
    }
    /**
     * Check if the current CoverageEligibilityResponseInsuranceItem contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a CoverageEligibilityResponseInsuranceItem from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new CoverageEligibilityResponseInsuranceItem(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageEligibilityResponseInsuranceItem is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export class CoverageEligibilityResponseInsurance extends fhir.BackboneElement {
    /**
     * Default constructor for CoverageEligibilityResponseInsurance - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["benefitPeriod"]) {
            this.benefitPeriod = new fhir.Period(source.benefitPeriod);
        }
        this.coverage = null;
        if (source["coverage"]) {
            this.coverage = new fhir.Reference(source.coverage);
        }
        if (this.coverage === undefined) {
            this.coverage = null;
        }
        if (source["inforce"]) {
            this.inforce = source.inforce;
        }
        if (source["_inforce"]) {
            this._inforce = new fhir.FhirElement(source._inforce);
        }
        if (source["item"]) {
            this.item = source.item.map((x) => new fhir.CoverageEligibilityResponseInsuranceItem(x));
        }
    }
    /**
     * Check if the current CoverageEligibilityResponseInsurance contains all required elements.
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
    /**
     * Factory function to create a CoverageEligibilityResponseInsurance from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new CoverageEligibilityResponseInsurance(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageEligibilityResponseInsurance is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Errors encountered during the processing of the request.
 */
export class CoverageEligibilityResponseError extends fhir.BackboneElement {
    /**
     * Default constructor for CoverageEligibilityResponseError - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.code = null;
        if (source["code"]) {
            this.code = new fhir.CodeableConcept(source.code);
        }
        if (this.code === undefined) {
            this.code = null;
        }
    }
    /**
     * Check if the current CoverageEligibilityResponseError contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["code"] === undefined) {
            missingElements.push("code");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a CoverageEligibilityResponseError from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new CoverageEligibilityResponseError(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageEligibilityResponseError is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export class CoverageEligibilityResponse extends fhir.DomainResource {
    /**
     * Default constructor for CoverageEligibilityResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'CoverageEligibilityResponse';
        this.created = null;
        if (source["created"]) {
            this.created = source.created;
        }
        if (this.created === undefined) {
            this.created = null;
        }
        if (source["_created"]) {
            this._created = new fhir.FhirElement(source._created);
        }
        if (source["disposition"]) {
            this.disposition = source.disposition;
        }
        if (source["_disposition"]) {
            this._disposition = new fhir.FhirElement(source._disposition);
        }
        if (source["error"]) {
            this.error = source.error.map((x) => new fhir.CoverageEligibilityResponseError(x));
        }
        if (source["form"]) {
            this.form = new fhir.CodeableConcept(source.form);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["insurance"]) {
            this.insurance = source.insurance.map((x) => new fhir.CoverageEligibilityResponseInsurance(x));
        }
        this.insurer = null;
        if (source["insurer"]) {
            this.insurer = new fhir.Reference(source.insurer);
        }
        if (this.insurer === undefined) {
            this.insurer = null;
        }
        this.outcome = null;
        if (source["outcome"]) {
            this.outcome = source.outcome;
        }
        if (this.outcome === undefined) {
            this.outcome = null;
        }
        if (source["_outcome"]) {
            this._outcome = new fhir.FhirElement(source._outcome);
        }
        this.patient = null;
        if (source["patient"]) {
            this.patient = new fhir.Reference(source.patient);
        }
        if (this.patient === undefined) {
            this.patient = null;
        }
        if (source["preAuthRef"]) {
            this.preAuthRef = source.preAuthRef;
        }
        if (source["_preAuthRef"]) {
            this._preAuthRef = new fhir.FhirElement(source._preAuthRef);
        }
        this.purpose = null;
        if (source["purpose"]) {
            this.purpose = source.purpose.map((x) => (x));
        }
        if (this.purpose === undefined) {
            this.purpose = null;
        }
        if (source["_purpose"]) {
            this._purpose = source._purpose.map((x) => new fhir.FhirElement(x));
        }
        this.request = null;
        if (source["request"]) {
            this.request = new fhir.Reference(source.request);
        }
        if (this.request === undefined) {
            this.request = null;
        }
        if (source["requestor"]) {
            this.requestor = new fhir.Reference(source.requestor);
        }
        if (source["servicedDate"]) {
            this.servicedDate = source.servicedDate;
        }
        if (source["_servicedDate"]) {
            this._servicedDate = new fhir.FhirElement(source._servicedDate);
        }
        if (source["servicedPeriod"]) {
            this.servicedPeriod = new fhir.Period(source.servicedPeriod);
        }
        this.status = null;
        if (source["status"]) {
            this.status = source.status;
        }
        if (this.status === undefined) {
            this.status = null;
        }
        if (source["_status"]) {
            this._status = new fhir.FhirElement(source._status);
        }
    }
    /**
     * Check if the current CoverageEligibilityResponse contains all required elements.
     */
    checkRequiredElements() {
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
        if ((!this["purpose"]) || (this["purpose"].length === 0)) {
            missingElements.push("purpose");
        }
        if (this["request"] === undefined) {
            missingElements.push("request");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a CoverageEligibilityResponse from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new CoverageEligibilityResponse(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageEligibilityResponse is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
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
//# sourceMappingURL=CoverageEligibilityResponse.js.map