import { Coding } from '../fhir.js';
/**
 * The primary process by which the target is validated
 */
export declare const VerificationresultValidationProcessValueSet: {
    /**
     * Code: edit-check
     */
    readonly EditCheck: Coding;
    /**
     * Code: in-context
     */
    readonly InContext: Coding;
    /**
     * Code: multi
     */
    readonly MultipleSources: Coding;
    /**
     * Code: primary
     */
    readonly PrimarySource: Coding;
    /**
     * Code: standalone
     */
    readonly Standalone: Coding;
    /**
     * Code: valueset
     */
    readonly ValueSet: Coding;
};
/**
 * The primary process by which the target is validated
 */
export declare type VerificationresultValidationProcessValueSetType = typeof VerificationresultValidationProcessValueSet;
/**
 * The primary process by which the target is validated
 */
export declare enum VerificationresultValidationProcessValueSetEnum {
    /**
     * Code: edit-check
     */
    EditCheck = "edit-check",
    /**
     * Code: in-context
     */
    InContext = "in-context",
    /**
     * Code: multi
     */
    MultipleSources = "multi",
    /**
     * Code: primary
     */
    PrimarySource = "primary",
    /**
     * Code: standalone
     */
    Standalone = "standalone",
    /**
     * Code: valueset
     */
    ValueSet = "valueset"
}
//# sourceMappingURL=VerificationresultValidationProcessValueSet.d.ts.map