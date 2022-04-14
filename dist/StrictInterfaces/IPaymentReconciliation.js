"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentReconciliationStatusEnum = exports.PaymentReconciliationOutcomeEnum = exports.PaymentReconciliationProcessNoteTypeEnum = void 0;
/**
 * Code Values for the PaymentReconciliation.processNote.type field
 */
var PaymentReconciliationProcessNoteTypeEnum;
(function (PaymentReconciliationProcessNoteTypeEnum) {
    PaymentReconciliationProcessNoteTypeEnum["DISPLAY"] = "display";
    PaymentReconciliationProcessNoteTypeEnum["PRINT"] = "print";
    PaymentReconciliationProcessNoteTypeEnum["PRINTOPER"] = "printoper";
})(PaymentReconciliationProcessNoteTypeEnum = exports.PaymentReconciliationProcessNoteTypeEnum || (exports.PaymentReconciliationProcessNoteTypeEnum = {}));
/**
 * Code Values for the PaymentReconciliation.outcome field
 */
var PaymentReconciliationOutcomeEnum;
(function (PaymentReconciliationOutcomeEnum) {
    PaymentReconciliationOutcomeEnum["QUEUED"] = "queued";
    PaymentReconciliationOutcomeEnum["COMPLETE"] = "complete";
    PaymentReconciliationOutcomeEnum["ERROR"] = "error";
    PaymentReconciliationOutcomeEnum["PARTIAL"] = "partial";
})(PaymentReconciliationOutcomeEnum = exports.PaymentReconciliationOutcomeEnum || (exports.PaymentReconciliationOutcomeEnum = {}));
/**
 * Code Values for the PaymentReconciliation.status field
 */
var PaymentReconciliationStatusEnum;
(function (PaymentReconciliationStatusEnum) {
    PaymentReconciliationStatusEnum["ACTIVE"] = "active";
    PaymentReconciliationStatusEnum["CANCELLED"] = "cancelled";
    PaymentReconciliationStatusEnum["DRAFT"] = "draft";
    PaymentReconciliationStatusEnum["ENTERED_IN_ERROR"] = "entered-in-error";
})(PaymentReconciliationStatusEnum = exports.PaymentReconciliationStatusEnum || (exports.PaymentReconciliationStatusEnum = {}));
//# sourceMappingURL=IPaymentReconciliation.js.map