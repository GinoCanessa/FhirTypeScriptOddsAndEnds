import { Coding } from '../fhir.js';
/**
 * Whether the cost applies to in-network or out-of-network providers.
 */
export declare const InsuranceplanApplicabilityValueSet: {
    /**
     * in-network: Provider is contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
     */
    readonly InNetwork: Coding;
    /**
     * other: Other applicability
     */
    readonly Other: Coding;
    /**
     * out-of-network: Provider is  not contracted with the health insurance company to provide services to plan members for specific pre-negotiated rates
     */
    readonly OutOfNetwork: Coding;
};
/**
 * Whether the cost applies to in-network or out-of-network providers.
 */
export declare type InsuranceplanApplicabilityValueSetType = typeof InsuranceplanApplicabilityValueSet;
/**
 * Whether the cost applies to in-network or out-of-network providers.
 */
//# sourceMappingURL=InsuranceplanApplicabilityValueSet.d.ts.map