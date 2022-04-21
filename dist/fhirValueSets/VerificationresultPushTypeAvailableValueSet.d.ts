import { Coding } from '../fhir.js';
/**
 * Type of alerts/updates the primary source can send
 */
export declare const VerificationresultPushTypeAvailableValueSet: {
    /**
     * Code: any
     */
    readonly AnyChanges: Coding;
    /**
     * Code: source
     */
    readonly AsDefinedBySource: Coding;
    /**
     * Code: specific
     */
    readonly SpecificRequestedChanges: Coding;
};
/**
 * Type of alerts/updates the primary source can send
 */
export declare type VerificationresultPushTypeAvailableValueSetType = typeof VerificationresultPushTypeAvailableValueSet;
/**
 * Type of alerts/updates the primary source can send
 */
export declare enum VerificationresultPushTypeAvailableValueSetEnum {
    /**
     * Code: any
     */
    AnyChanges = "any",
    /**
     * Code: source
     */
    AsDefinedBySource = "source",
    /**
     * Code: specific
     */
    SpecificRequestedChanges = "specific"
}
//# sourceMappingURL=VerificationresultPushTypeAvailableValueSet.d.ts.map