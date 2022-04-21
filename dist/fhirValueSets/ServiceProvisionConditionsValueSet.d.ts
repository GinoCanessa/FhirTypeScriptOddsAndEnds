import { Coding } from '../fhir.js';
/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export declare const ServiceProvisionConditionsValueSet: {
    /**
     * cost: Fees apply for this service.
     */
    readonly FeesApply: Coding;
    /**
     * disc: There are discounts available on this service for qualifying patients.
     */
    readonly DiscountsAvailable: Coding;
    /**
     * free: This service is available for no patient cost.
     */
    readonly Free: Coding;
};
/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export declare type ServiceProvisionConditionsValueSetType = typeof ServiceProvisionConditionsValueSet;
/**
 * The code(s) that detail the conditions under which the healthcare service is available/offered.
 */
export declare enum ServiceProvisionConditionsValueSetEnum {
    /**
     * cost: Fees apply for this service.
     */
    FeesApply = "cost",
    /**
     * disc: There are discounts available on this service for qualifying patients.
     */
    DiscountsAvailable = "disc",
    /**
     * free: This service is available for no patient cost.
     */
    Free = "free"
}
//# sourceMappingURL=ServiceProvisionConditionsValueSet.d.ts.map