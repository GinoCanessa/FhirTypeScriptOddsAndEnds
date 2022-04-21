import { Coding } from '../fhir.js';
/**
 * The reason why the supply item was requested.
 */
export declare const SupplyrequestReasonValueSet: {
    /**
     * patient-care: The supply has been requested for use in direct patient care.
     */
    readonly PatientCare: Coding;
    /**
     * ward-stock: The supply has been requested for creating or replenishing ward stock.
     */
    readonly WardStock: Coding;
};
/**
 * The reason why the supply item was requested.
 */
export declare type SupplyrequestReasonValueSetType = typeof SupplyrequestReasonValueSet;
/**
 * The reason why the supply item was requested.
 */
export declare enum SupplyrequestReasonValueSetEnum {
    /**
     * patient-care: The supply has been requested for use in direct patient care.
     */
    PatientCare = "patient-care",
    /**
     * ward-stock: The supply has been requested for creating or replenishing ward stock.
     */
    WardStock = "ward-stock"
}
//# sourceMappingURL=SupplyrequestReasonValueSet.d.ts.map