import { Coding } from '../fhir.js';
/**
 * This value set includes a smattering of Network type codes.
 */
export declare const BenefitNetworkValueSet: {
    /**
     * in: Services rendered by a Network provider
     */
    readonly InNetwork: Coding;
    /**
     * out: Services rendered by a provider who is not in the Network
     */
    readonly OutOfNetwork: Coding;
};
/**
 * This value set includes a smattering of Network type codes.
 */
export declare type BenefitNetworkValueSetType = typeof BenefitNetworkValueSet;
/**
 * This value set includes a smattering of Network type codes.
 */
export declare enum BenefitNetworkValueSetEnum {
    /**
     * in: Services rendered by a Network provider
     */
    InNetwork = "in",
    /**
     * out: Services rendered by a provider who is not in the Network
     */
    OutOfNetwork = "out"
}
//# sourceMappingURL=BenefitNetworkValueSet.d.ts.map