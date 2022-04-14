"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceStatusEnum = exports.InvoiceLineItemPriceComponentTypeEnum = void 0;
/**
 * Code Values for the Invoice.lineItem.priceComponent.type field
 */
var InvoiceLineItemPriceComponentTypeEnum;
(function (InvoiceLineItemPriceComponentTypeEnum) {
    InvoiceLineItemPriceComponentTypeEnum["BASE"] = "base";
    InvoiceLineItemPriceComponentTypeEnum["SURCHARGE"] = "surcharge";
    InvoiceLineItemPriceComponentTypeEnum["DEDUCTION"] = "deduction";
    InvoiceLineItemPriceComponentTypeEnum["DISCOUNT"] = "discount";
    InvoiceLineItemPriceComponentTypeEnum["TAX"] = "tax";
    InvoiceLineItemPriceComponentTypeEnum["INFORMATIONAL"] = "informational";
})(InvoiceLineItemPriceComponentTypeEnum = exports.InvoiceLineItemPriceComponentTypeEnum || (exports.InvoiceLineItemPriceComponentTypeEnum = {}));
/**
 * Code Values for the Invoice.status field
 */
var InvoiceStatusEnum;
(function (InvoiceStatusEnum) {
    InvoiceStatusEnum["DRAFT"] = "draft";
    InvoiceStatusEnum["ISSUED"] = "issued";
    InvoiceStatusEnum["BALANCED"] = "balanced";
    InvoiceStatusEnum["CANCELLED"] = "cancelled";
    InvoiceStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(InvoiceStatusEnum = exports.InvoiceStatusEnum || (exports.InvoiceStatusEnum = {}));
//# sourceMappingURL=IInvoice.js.map