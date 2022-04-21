import { Coding } from '../fhir.js';
/**
 * This value sets refers to a Category of supply.
 */
export declare const SupplyrequestKindValueSet: {
    /**
     * central: Supply is stored and requested from central supply.
     */
    readonly CentralSupply: Coding;
    /**
     * nonstock: Supply is not onsite and must be requested from an outside vendor using a non-stock requisition.
     */
    readonly NonStock: Coding;
};
/**
 * This value sets refers to a Category of supply.
 */
export declare type SupplyrequestKindValueSetType = typeof SupplyrequestKindValueSet;
/**
 * This value sets refers to a Category of supply.
 */
export declare enum SupplyrequestKindValueSetEnum {
    /**
     * central: Supply is stored and requested from central supply.
     */
    CentralSupply = "central",
    /**
     * nonstock: Supply is not onsite and must be requested from an outside vendor using a non-stock requisition.
     */
    NonStock = "nonstock"
}
//# sourceMappingURL=SupplyrequestKindValueSet.d.ts.map