"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChargeitemStatus = void 0;
/**
 * Codes identifying the lifecycle stage of a ChargeItem.
 */
exports.ChargeitemStatus = {
    /**
     * The processing of the charge was aborted.
     */
    chargeitem_status_Aborted: {
        code: "aborted",
        display: "Aborted",
        system: "http://hl7.org/fhir/chargeitem-status"
    },
    /**
     * The charge item is ready for billing.
     */
    chargeitem_status_Billable: {
        code: "billable",
        display: "Billable",
        system: "http://hl7.org/fhir/chargeitem-status"
    },
    /**
     * The charge item has been billed (e.g. a billing engine has generated financial transactions by applying the associated ruled for the charge item to the context of the Encounter, and placed them into Claims/Invoices.
     */
    chargeitem_status_Billed: {
        code: "billed",
        display: "Billed",
        system: "http://hl7.org/fhir/chargeitem-status"
    },
    /**
     * The charge item has been entered in error and should not be processed for billing.
     */
    chargeitem_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/chargeitem-status"
    },
    /**
     * The charge item has been determined to be not billable (e.g. due to rules associated with the billing code).
     */
    chargeitem_status_NotBillable: {
        code: "not-billable",
        display: "Not billable",
        system: "http://hl7.org/fhir/chargeitem-status"
    },
    /**
     * The charge item has been entered, but the charged service is not  yet complete, so it shall not be billed yet but might be used in the context of pre-authorization.
     */
    chargeitem_status_Planned: {
        code: "planned",
        display: "Planned",
        system: "http://hl7.org/fhir/chargeitem-status"
    },
    /**
     * The authoring system does not know which of the status values currently applies for this charge item  Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    chargeitem_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/chargeitem-status"
    },
};
//# sourceMappingURL=ChargeitemStatus.js.map