"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fundsreserve = void 0;
/**
 * This value set includes sample funds reservation type codes.
 */
exports.Fundsreserve = {
    /**
     * The payor is not being requested to reserve any funds for the settlement of future claims.
     */
    fundsreserve_None: {
        code: "none",
        display: "None",
        system: "http://terminology.hl7.org/CodeSystem/fundsreserve"
    },
    /**
     * The payor is requested to reserve funds for the provision of the named services by any provider for settlement of future claims related to this request.
     */
    fundsreserve_Patient: {
        code: "patient",
        display: "Patient",
        system: "http://terminology.hl7.org/CodeSystem/fundsreserve"
    },
    /**
     * The payor is requested to reserve funds solely for the named provider for settlement of future claims related to this request.
     */
    fundsreserve_Provider: {
        code: "provider",
        display: "Provider",
        system: "http://terminology.hl7.org/CodeSystem/fundsreserve"
    },
};
//# sourceMappingURL=Fundsreserve.js.map