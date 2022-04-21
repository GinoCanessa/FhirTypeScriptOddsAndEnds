import { Coding } from '../fhir.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the vaccine administered. This value set is provided as a suggestive example.
 */
export declare const ImmunizationFundingSourceValueSet: {
    /**
     * private: The vaccine was purchased with private funds.
     */
    readonly Private: Coding;
    /**
     * public: The vaccine was purchased with public funds.
     */
    readonly Public: Coding;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the vaccine administered. This value set is provided as a suggestive example.
 */
export declare type ImmunizationFundingSourceValueSetType = typeof ImmunizationFundingSourceValueSet;
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the vaccine administered. This value set is provided as a suggestive example.
 */
export declare enum ImmunizationFundingSourceValueSetEnum {
    /**
     * private: The vaccine was purchased with private funds.
     */
    Private = "private",
    /**
     * public: The vaccine was purchased with public funds.
     */
    Public = "public"
}
//# sourceMappingURL=ImmunizationFundingSourceValueSet.d.ts.map