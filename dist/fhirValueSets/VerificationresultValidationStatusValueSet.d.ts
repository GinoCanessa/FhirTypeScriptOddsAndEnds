import { Coding } from '../fhir.js';
/**
 * Status of the validation of the target against the primary source
 */
export declare const VerificationresultValidationStatusValueSet: {
    /**
     * Code: failed
     */
    readonly Failed: Coding;
    /**
     * Code: successful
     */
    readonly Successful: Coding;
    /**
     * unknown: The validations status has not been determined yet
     */
    readonly Unknown: Coding;
};
/**
 * Status of the validation of the target against the primary source
 */
export declare type VerificationresultValidationStatusValueSetType = typeof VerificationresultValidationStatusValueSet;
/**
 * Status of the validation of the target against the primary source
 */
export declare enum VerificationresultValidationStatusValueSetEnum {
    /**
     * Code: failed
     */
    Failed = "failed",
    /**
     * Code: successful
     */
    Successful = "successful",
    /**
     * unknown: The validations status has not been determined yet
     */
    Unknown = "unknown"
}
//# sourceMappingURL=VerificationresultValidationStatusValueSet.d.ts.map