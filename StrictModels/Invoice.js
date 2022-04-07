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
import * as fhirModels from '../strictmodels';
/**
 * Indicates who or what performed or participated in the charged service.
 */
var InvoiceParticipant = /** @class */ (function (_super) {
    __extends(InvoiceParticipant, _super);
    /**
     * Default constructor for InvoiceParticipant from an object that MAY NOT contain all required elements.
     */
    function InvoiceParticipant(source) {
        var _this = _super.call(this, source) || this;
        {
            _this.actor = new fhirModels.Reference(source.actor);
        }
        if (source["role"] !== undefined) {
            _this.role = new fhirModels.CodeableConcept(source.role);
        }
        return _this;
    }
    return InvoiceParticipant;
}(fhirModels.BackboneElement));
export { InvoiceParticipant };
/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice as to how the prices have been calculated.
 */
var InvoiceLineItemPriceComponent = /** @class */ (function (_super) {
    __extends(InvoiceLineItemPriceComponent, _super);
    /**
     * Default constructor for InvoiceLineItemPriceComponent from an object that MAY NOT contain all required elements.
     */
    function InvoiceLineItemPriceComponent(source) {
        var _this = _super.call(this, source) || this;
        if (source["amount"] !== undefined) {
            _this.amount = new fhirModels.Money(source.amount);
        }
        if (source["code"] !== undefined) {
            _this.code = new fhirModels.CodeableConcept(source.code);
        }
        if (source["factor"] !== undefined) {
            _this.factor = source.factor;
        }
        if (source["_factor"] !== undefined) {
            _this._factor = new fhirModels.Element(source._factor);
        }
        {
            _this.type = source.type;
        }
        if (source["_type"] !== undefined) {
            _this._type = new fhirModels.Element(source._type);
        }
        return _this;
    }
    return InvoiceLineItemPriceComponent;
}(fhirModels.BackboneElement));
export { InvoiceLineItemPriceComponent };
/**
 * Code Values for the Invoice.lineItem.priceComponent.type field
 */
export var InvoiceLineItemPriceComponentTypeEnum;
(function (InvoiceLineItemPriceComponentTypeEnum) {
    InvoiceLineItemPriceComponentTypeEnum["BASE"] = "base";
    InvoiceLineItemPriceComponentTypeEnum["SURCHARGE"] = "surcharge";
    InvoiceLineItemPriceComponentTypeEnum["DEDUCTION"] = "deduction";
    InvoiceLineItemPriceComponentTypeEnum["DISCOUNT"] = "discount";
    InvoiceLineItemPriceComponentTypeEnum["TAX"] = "tax";
    InvoiceLineItemPriceComponentTypeEnum["INFORMATIONAL"] = "informational";
})(InvoiceLineItemPriceComponentTypeEnum || (InvoiceLineItemPriceComponentTypeEnum = {}));
/**
 * Each line item represents one charge for goods and services rendered. Details such as date, code and amount are found in the referenced ChargeItem resource.
 */
var InvoiceLineItem = /** @class */ (function (_super) {
    __extends(InvoiceLineItem, _super);
    /**
     * Default constructor for InvoiceLineItem from an object that MAY NOT contain all required elements.
     */
    function InvoiceLineItem(source) {
        var _this = _super.call(this, source) || this;
        if (source["chargeItemReference"] !== undefined) {
            _this.chargeItemReference = new fhirModels.Reference(source.chargeItemReference);
        }
        if (source["chargeItemCodeableConcept"] !== undefined) {
            _this.chargeItemCodeableConcept = new fhirModels.CodeableConcept(source.chargeItemCodeableConcept);
        }
        if (source["priceComponent"] !== undefined) {
            _this.priceComponent = source.priceComponent.map(function (x) { return new fhirModels.InvoiceLineItemPriceComponent(x); });
        }
        if (source["sequence"] !== undefined) {
            _this.sequence = source.sequence;
        }
        if (source["_sequence"] !== undefined) {
            _this._sequence = new fhirModels.Element(source._sequence);
        }
        return _this;
    }
    return InvoiceLineItem;
}(fhirModels.BackboneElement));
export { InvoiceLineItem };
/**
 * Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.
 */
var Invoice = /** @class */ (function (_super) {
    __extends(Invoice, _super);
    /**
     * Default constructor for Invoice from an object that MAY NOT contain all required elements.
     */
    function Invoice(source) {
        var _this = _super.call(this, source) || this;
        /**
         * Resource Type Name
         */
        _this.resourceType = "Invoice";
        if ((source['resourceType'] !== "Invoice") || (source['resourceType'] !== undefined)) {
            throw 'Invalid resourceType for a Invoice';
        }
        if (source["account"] !== undefined) {
            _this.account = new fhirModels.Reference(source.account);
        }
        if (source["cancelledReason"] !== undefined) {
            _this.cancelledReason = source.cancelledReason;
        }
        if (source["_cancelledReason"] !== undefined) {
            _this._cancelledReason = new fhirModels.Element(source._cancelledReason);
        }
        if (source["date"] !== undefined) {
            _this.date = source.date;
        }
        if (source["_date"] !== undefined) {
            _this._date = new fhirModels.Element(source._date);
        }
        if (source["identifier"] !== undefined) {
            _this.identifier = source.identifier.map(function (x) { return new fhirModels.Identifier(x); });
        }
        if (source["issuer"] !== undefined) {
            _this.issuer = new fhirModels.Reference(source.issuer);
        }
        if (source["lineItem"] !== undefined) {
            _this.lineItem = source.lineItem.map(function (x) { return new fhirModels.InvoiceLineItem(x); });
        }
        if (source["note"] !== undefined) {
            _this.note = source.note.map(function (x) { return new fhirModels.Annotation(x); });
        }
        if (source["participant"] !== undefined) {
            _this.participant = source.participant.map(function (x) { return new fhirModels.InvoiceParticipant(x); });
        }
        if (source["paymentTerms"] !== undefined) {
            _this.paymentTerms = source.paymentTerms;
        }
        if (source["_paymentTerms"] !== undefined) {
            _this._paymentTerms = new fhirModels.Element(source._paymentTerms);
        }
        if (source["recipient"] !== undefined) {
            _this.recipient = new fhirModels.Reference(source.recipient);
        }
        {
            _this.status = source.status;
        }
        if (source["_status"] !== undefined) {
            _this._status = new fhirModels.Element(source._status);
        }
        if (source["subject"] !== undefined) {
            _this.subject = new fhirModels.Reference(source.subject);
        }
        if (source["totalGross"] !== undefined) {
            _this.totalGross = new fhirModels.Money(source.totalGross);
        }
        if (source["totalNet"] !== undefined) {
            _this.totalNet = new fhirModels.Money(source.totalNet);
        }
        if (source["totalPriceComponent"] !== undefined) {
            _this.totalPriceComponent = source.totalPriceComponent.map(function (x) { return new fhirModels.InvoiceLineItemPriceComponent(x); });
        }
        if (source["type"] !== undefined) {
            _this.type = new fhirModels.CodeableConcept(source.type);
        }
        return _this;
    }
    return Invoice;
}(fhirModels.DomainResource));
export { Invoice };
/**
 * Code Values for the Invoice.status field
 */
export var InvoiceStatusEnum;
(function (InvoiceStatusEnum) {
    InvoiceStatusEnum["DRAFT"] = "draft";
    InvoiceStatusEnum["ISSUED"] = "issued";
    InvoiceStatusEnum["BALANCED"] = "balanced";
    InvoiceStatusEnum["CANCELLED"] = "cancelled";
    InvoiceStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(InvoiceStatusEnum || (InvoiceStatusEnum = {}));
