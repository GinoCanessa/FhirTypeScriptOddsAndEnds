import { Coding } from '../fhir.js';
/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export declare const IdentityAssuranceLevelValueSet: {
    /**
     * level1: Little or no confidence in the asserted identity's accuracy.
     */
    readonly Level1: Coding;
    /**
     * level2: Some confidence in the asserted identity's accuracy.
     */
    readonly Level2: Coding;
    /**
     * level3: High confidence in the asserted identity's accuracy.
     */
    readonly Level3: Coding;
    /**
     * level4: Very high confidence in the asserted identity's accuracy.
     */
    readonly Level4: Coding;
};
/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export declare type IdentityAssuranceLevelValueSetType = typeof IdentityAssuranceLevelValueSet;
/**
 * The level of confidence that this link represents the same actual person, based on NIST Authentication Levels.
 */
export declare enum IdentityAssuranceLevelValueSetEnum {
    /**
     * level1: Little or no confidence in the asserted identity's accuracy.
     */
    Level1 = "level1",
    /**
     * level2: Some confidence in the asserted identity's accuracy.
     */
    Level2 = "level2",
    /**
     * level3: High confidence in the asserted identity's accuracy.
     */
    Level3 = "level3",
    /**
     * level4: Very high confidence in the asserted identity's accuracy.
     */
    Level4 = "level4"
}
//# sourceMappingURL=IdentityAssuranceLevelValueSet.d.ts.map