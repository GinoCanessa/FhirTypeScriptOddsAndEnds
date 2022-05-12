import { Coding } from '../fhir.js';
/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
export declare const ClaimUseValueSet: {
    /**
     * claim: The treatment is complete and this represents a Claim for the services.
     */
    readonly Claim: Coding;
    /**
     * preauthorization: The treatment is proposed and this represents a Pre-authorization for the services.
     */
    readonly Preauthorization: Coding;
    /**
     * predetermination: The treatment is proposed and this represents a Pre-determination for the services.
     */
    readonly Predetermination: Coding;
};
/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
export declare type ClaimUseValueSetType = typeof ClaimUseValueSet;
/**
 * The purpose of the Claim: predetermination, preauthorization, claim.
 */
//# sourceMappingURL=ClaimUseValueSet.d.ts.map