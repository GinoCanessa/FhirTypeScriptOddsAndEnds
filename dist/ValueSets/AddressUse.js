"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressUse = void 0;
/**
 * The use of an address.
 */
exports.AddressUse = {
    /**
     * An address to be used to send bills, invoices, receipts etc.
     */
    address_use_Billing: {
        code: "billing",
        display: "Billing",
        system: "http://hl7.org/fhir/address-use"
    },
    /**
     * A communication address at a home.
     */
    address_use_Home: {
        code: "home",
        display: "Home",
        system: "http://hl7.org/fhir/address-use"
    },
    /**
     * This address is no longer in use (or was never correct but retained for records).
     */
    address_use_OldIncorrect: {
        code: "old",
        display: "Old / Incorrect",
        system: "http://hl7.org/fhir/address-use"
    },
    /**
     * A temporary address. The period can provide more detailed information.
     */
    address_use_Temporary: {
        code: "temp",
        display: "Temporary",
        system: "http://hl7.org/fhir/address-use"
    },
    /**
     * An office address. First choice for business related contacts during business hours.
     */
    address_use_Work: {
        code: "work",
        display: "Work",
        system: "http://hl7.org/fhir/address-use"
    },
};
//# sourceMappingURL=AddressUse.js.map