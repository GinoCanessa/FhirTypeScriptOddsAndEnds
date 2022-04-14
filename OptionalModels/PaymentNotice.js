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
exports.PaymentNoticeStatusEnum = exports.PaymentNotice = void 0;
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
const fhirModels = __importStar(require("../optionalmodels"));
/**
 * This resource provides the status of the payment for goods and services rendered, and the request and response resource references.
 */
class PaymentNotice extends fhirModels.DomainResource {
    /**
     * Default constructor for PaymentNotice from an object that MAY NOT contain all required elements.
     */
    constructor(source) {
        super(source);
        /**
         * Resource Type Name
         */
        this.resourceType = "PaymentNotice";
        if ((source['resourceType'] !== "PaymentNotice") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a PaymentNotice';
        }
        if (source["amount"] !== undefined) {
            this.amount = new fhirModels.Money(source.amount);
        }
        if (source["created"] !== undefined) {
            this.created = source.created;
        }
        if (source["_created"] !== undefined) {
            this._created = new fhirModels.Element(source._created);
        }
        if (source["identifier"] !== undefined) {
            this.identifier = source.identifier.map((x) => new fhirModels.Identifier(x));
        }
        if (source["payee"] !== undefined) {
            this.payee = new fhirModels.Reference(source.payee);
        }
        if (source["payment"] !== undefined) {
            this.payment = new fhirModels.Reference(source.payment);
        }
        if (source["paymentDate"] !== undefined) {
            this.paymentDate = source.paymentDate;
        }
        if (source["_paymentDate"] !== undefined) {
            this._paymentDate = new fhirModels.Element(source._paymentDate);
        }
        if (source["paymentStatus"] !== undefined) {
            this.paymentStatus = new fhirModels.CodeableConcept(source.paymentStatus);
        }
        if (source["provider"] !== undefined) {
            this.provider = new fhirModels.Reference(source.provider);
        }
        if (source["recipient"] !== undefined) {
            this.recipient = new fhirModels.Reference(source.recipient);
        }
        if (source["request"] !== undefined) {
            this.request = new fhirModels.Reference(source.request);
        }
        if (source["response"] !== undefined) {
            this.response = new fhirModels.Reference(source.response);
        }
        if (source["status"] !== undefined) {
            this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            this._status = new fhirModels.Element(source._status);
        }
    }
    /**
     * Factory function to create a PaymentNotice from an object that MUST contain all required elements.
     */
    static CreateStrict(source) {
        var dest = new PaymentNotice(source);
        var missingElements = dest.checkRequiredElements();
        if (missingElements.length !== 0) {
            throw `PaymentNotice is missing elements: ${missingElements.join(", ")}`;
        }
        return dest;
    }
    /**
     * Check if the current PaymentNotice contains all required elements.
     */
    checkRequiredElements() {
        var missingElements = [];
        if (this["amount"] === undefined) {
            missingElements.push("amount");
        }
        if (this["created"] === undefined) {
            missingElements.push("created");
        }
        if (this["payment"] === undefined) {
            missingElements.push("payment");
        }
        if (this["recipient"] === undefined) {
            missingElements.push("recipient");
        }
        if (this["status"] === undefined) {
            missingElements.push("status");
        }
        var parentMissing = super.checkRequiredElements();
        missingElements.push(...parentMissing);
        return missingElements;
    }
}
exports.PaymentNotice = PaymentNotice;
/**
 * Code Values for the PaymentNotice.status field
 */
var PaymentNoticeStatusEnum;
(function (PaymentNoticeStatusEnum) {
    PaymentNoticeStatusEnum["ACTIVE"] = "active";
    PaymentNoticeStatusEnum["CANCELLED"] = "cancelled";
    PaymentNoticeStatusEnum["DRAFT"] = "draft";
    PaymentNoticeStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(PaymentNoticeStatusEnum = exports.PaymentNoticeStatusEnum || (exports.PaymentNoticeStatusEnum = {}));
//# sourceMappingURL=PaymentNotice.js.map