"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payeetype = void 0;
/**
 * This value set includes sample Payee Type codes.
 */
exports.Payeetype = {
    /**
     * Any benefit payable will be paid to a third party such as a guarrantor.
     */
    payeetype_Provider: {
        code: "other",
        display: "Provider",
        system: "http://terminology.hl7.org/CodeSystem/payeetype"
    },
    /**
     * Any benefit payable will be paid to the provider (Assignment of Benefit).
     */
    payeetype_Provider_2: {
        code: "provider",
        display: "Provider",
        system: "http://terminology.hl7.org/CodeSystem/payeetype"
    },
    /**
     * The subscriber (policy holder) will be reimbursed.
     */
    payeetype_Subscriber: {
        code: "subscriber",
        display: "Subscriber",
        system: "http://terminology.hl7.org/CodeSystem/payeetype"
    },
};
//# sourceMappingURL=Payeetype.js.map