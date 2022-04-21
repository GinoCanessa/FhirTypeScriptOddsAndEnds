import { Coding } from '../fhir.js';
/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export declare const ReferenceVersionRulesValueSet: {
    /**
     * either: The reference may be either version independent or version specific.
     */
    readonly EitherSpecificOrIndependent: Coding;
    /**
     * independent: The reference must be version independent.
     */
    readonly VersionIndependent: Coding;
    /**
     * specific: The reference must be version specific.
     */
    readonly VersionSpecific: Coding;
};
/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export declare type ReferenceVersionRulesValueSetType = typeof ReferenceVersionRulesValueSet;
/**
 * Whether a reference needs to be version specific or version independent, or whether either can be used.
 */
export declare enum ReferenceVersionRulesValueSetEnum {
    /**
     * either: The reference may be either version independent or version specific.
     */
    EitherSpecificOrIndependent = "either",
    /**
     * independent: The reference must be version independent.
     */
    VersionIndependent = "independent",
    /**
     * specific: The reference must be version specific.
     */
    VersionSpecific = "specific"
}
//# sourceMappingURL=ReferenceVersionRulesValueSet.d.ts.map