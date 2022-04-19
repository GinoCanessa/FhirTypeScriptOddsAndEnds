// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import * as fhir from '../fhir';
/**
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export class CoverageClass extends fhir.BackboneElement {
    /**
     * Default constructor for CoverageClass - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["name"]) {
            this.name = source.name;
        }
        if (source["_name"]) {
            this._name = new fhir.FhirElement(source._name);
        }
        this.type = null;
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (this.type === undefined) {
            this.type = null;
        }
        this.value = null;
        if (source["value"]) {
            this.value = source.value;
        }
        if (this.value === undefined) {
            this.value = null;
        }
        if (source["_value"]) {
            this._value = new fhir.FhirElement(source._value);
        }
    }
    /**
     * Check if the current CoverageClass contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["type"] === undefined) {
            missingElements.push("type");
        }
        if (this["value"] === undefined) {
            missingElements.push("value");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a CoverageClass from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new CoverageClass(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageClass is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export class CoverageCostToBeneficiaryException extends fhir.BackboneElement {
    /**
     * Default constructor for CoverageCostToBeneficiaryException - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
        this.type = null;
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (this.type === undefined) {
            this.type = null;
        }
    }
    /**
     * Check if the current CoverageCostToBeneficiaryException contains all required elements.
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
     * Factory function to create a CoverageCostToBeneficiaryException from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new CoverageCostToBeneficiaryException(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageCostToBeneficiaryException is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export class CoverageCostToBeneficiary extends fhir.BackboneElement {
    /**
     * Default constructor for CoverageCostToBeneficiary - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        if (source["exception"]) {
            this.exception = source.exception.map((x) => new fhir.CoverageCostToBeneficiaryException(x));
        }
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
        if (source["valueQuantity"]) {
            this.valueQuantity = new fhir.Quantity(source.valueQuantity);
        }
        if (source["valueMoney"]) {
            this.valueMoney = new fhir.Money(source.valueMoney);
        }
    }
    /**
     * Check if the current CoverageCostToBeneficiary contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a CoverageCostToBeneficiary from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new CoverageCostToBeneficiary(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `CoverageCostToBeneficiary is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export class Coverage extends fhir.DomainResource {
    /**
     * Default constructor for Coverage - initializes any required elements to null if a value is not provided.
     */
    constructor(source = {}) {
        super(source);
        this.resourceType = 'Coverage';
        this.beneficiary = null;
        if (source["beneficiary"]) {
            this.beneficiary = new fhir.Reference(source.beneficiary);
        }
        if (this.beneficiary === undefined) {
            this.beneficiary = null;
        }
        if (source["class"]) {
            this.class = source.class.map((x) => new fhir.CoverageClass(x));
        }
        if (source["contract"]) {
            this.contract = source.contract.map((x) => new fhir.Reference(x));
        }
        if (source["costToBeneficiary"]) {
            this.costToBeneficiary = source.costToBeneficiary.map((x) => new fhir.CoverageCostToBeneficiary(x));
        }
        if (source["dependent"]) {
            this.dependent = source.dependent;
        }
        if (source["_dependent"]) {
            this._dependent = new fhir.FhirElement(source._dependent);
        }
        if (source["identifier"]) {
            this.identifier = source.identifier.map((x) => new fhir.Identifier(x));
        }
        if (source["network"]) {
            this.network = source.network;
        }
        if (source["_network"]) {
            this._network = new fhir.FhirElement(source._network);
        }
        if (source["order"]) {
            this.order = source.order;
        }
        if (source["_order"]) {
            this._order = new fhir.FhirElement(source._order);
        }
        this.payor = null;
        if (source["payor"]) {
            this.payor = source.payor.map((x) => new fhir.Reference(x));
        }
        if (this.payor === undefined) {
            this.payor = null;
        }
        if (source["period"]) {
            this.period = new fhir.Period(source.period);
        }
        if (source["policyHolder"]) {
            this.policyHolder = new fhir.Reference(source.policyHolder);
        }
        if (source["relationship"]) {
            this.relationship = new fhir.CodeableConcept(source.relationship);
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
        if (source["subrogation"]) {
            this.subrogation = source.subrogation;
        }
        if (source["_subrogation"]) {
            this._subrogation = new fhir.FhirElement(source._subrogation);
        }
        if (source["subscriber"]) {
            this.subscriber = new fhir.Reference(source.subscriber);
        }
        if (source["subscriberId"]) {
            this.subscriberId = source.subscriberId;
        }
        if (source["_subscriberId"]) {
            this._subscriberId = new fhir.FhirElement(source._subscriberId);
        }
        if (source["type"]) {
            this.type = new fhir.CodeableConcept(source.type);
        }
    }
    /**
     * Check if the current Coverage contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["beneficiary"] === undefined) {
            missingElements.push("beneficiary");
        }
        if ((!this["payor"]) || (this["payor"].length === 0)) {
            missingElements.push("payor");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
    /**
     * Factory function to create a Coverage from an object that MUST contain all required elements.
     */
    static fromStrict(source) {
        var dest = new Coverage(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `Coverage is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
}
/**
 * Code Values for the Coverage.status field
 */
export var CoverageStatusEnum;
(function (CoverageStatusEnum) {
    CoverageStatusEnum["ACTIVE"] = "active";
    CoverageStatusEnum["CANCELLED"] = "cancelled";
    CoverageStatusEnum["DRAFT"] = "draft";
    CoverageStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(CoverageStatusEnum || (CoverageStatusEnum = {}));
//# sourceMappingURL=Coverage.js.map