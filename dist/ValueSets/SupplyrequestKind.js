"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplyrequestKind = void 0;
/**
 * This value sets refers to a Category of supply.
 */
exports.SupplyrequestKind = {
    /**
     * Supply is stored and requested from central supply.
     */
    supplyrequest_kind_CentralSupply: {
        code: "central",
        display: "Central Supply",
        system: "http://terminology.hl7.org/CodeSystem/supply-kind"
    },
    /**
     * Supply is not onsite and must be requested from an outside vendor using a non-stock requisition.
     */
    supplyrequest_kind_NonStock: {
        code: "nonstock",
        display: "Non-Stock",
        system: "http://terminology.hl7.org/CodeSystem/supply-kind"
    },
};
//# sourceMappingURL=SupplyrequestKind.js.map