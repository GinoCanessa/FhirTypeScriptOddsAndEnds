import { Coding } from '../fhir.js';
/**
 * This value set includes sample funds reservation type codes.
 */
export declare const FundsreserveValueSet: {
    /**
     * none: The payor is not being requested to reserve any funds for the settlement of future claims.
     */
    readonly None: Coding;
    /**
     * patient: The payor is requested to reserve funds for the provision of the named services by any provider for settlement of future claims related to this request.
     */
    readonly Patient: Coding;
    /**
     * provider: The payor is requested to reserve funds solely for the named provider for settlement of future claims related to this request.
     */
    readonly Provider: Coding;
};
/**
 * This value set includes sample funds reservation type codes.
 */
export declare type FundsreserveValueSetType = typeof FundsreserveValueSet;
/**
 * This value set includes sample funds reservation type codes.
 */
export declare enum FundsreserveValueSetEnum {
    /**
     * none: The payor is not being requested to reserve any funds for the settlement of future claims.
     */
    None = "none",
    /**
     * patient: The payor is requested to reserve funds for the provision of the named services by any provider for settlement of future claims related to this request.
     */
    Patient = "patient",
    /**
     * provider: The payor is requested to reserve funds solely for the named provider for settlement of future claims related to this request.
     */
    Provider = "provider"
}
//# sourceMappingURL=FundsreserveValueSet.d.ts.map