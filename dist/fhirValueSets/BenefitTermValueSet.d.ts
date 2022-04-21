import { Coding } from '../fhir.js';
/**
 * This value set includes a smattering of Benefit Term codes.
 */
export declare const BenefitTermValueSet: {
    /**
     * annual: Annual, renewing on the anniversary
     */
    readonly Annual: Coding;
    /**
     * day: Per day
     */
    readonly Day: Coding;
    /**
     * lifetime: For the total term, lifetime, of the policy or coverage
     */
    readonly Lifetime: Coding;
};
/**
 * This value set includes a smattering of Benefit Term codes.
 */
export declare type BenefitTermValueSetType = typeof BenefitTermValueSet;
/**
 * This value set includes a smattering of Benefit Term codes.
 */
export declare enum BenefitTermValueSetEnum {
    /**
     * annual: Annual, renewing on the anniversary
     */
    Annual = "annual",
    /**
     * day: Per day
     */
    Day = "day",
    /**
     * lifetime: For the total term, lifetime, of the policy or coverage
     */
    Lifetime = "lifetime"
}
//# sourceMappingURL=BenefitTermValueSet.d.ts.map