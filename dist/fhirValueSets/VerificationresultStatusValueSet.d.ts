import { Coding } from '../fhir.js';
/**
 * The validation status of the target
 */
export declare const VerificationresultStatusValueSet: {
    /**
     * attested: ***TODO***
     */
    readonly Attested: Coding;
    /**
     * in-process: ***TODO***
     */
    readonly InProcess: Coding;
    /**
     * req-revalid: ***TODO***
     */
    readonly RequiresRevalidation: Coding;
    /**
     * reval-fail: ***TODO***
     */
    readonly ReValidationFailed: Coding;
    /**
     * val-fail: ***TODO***
     */
    readonly ValidationFailed: Coding;
    /**
     * validated: ***TODO***
     */
    readonly Validated: Coding;
};
/**
 * The validation status of the target
 */
export declare type VerificationresultStatusValueSetType = typeof VerificationresultStatusValueSet;
/**
 * The validation status of the target
 */
export declare enum VerificationresultStatusValueSetEnum {
    /**
     * attested: ***TODO***
     */
    Attested = "attested",
    /**
     * in-process: ***TODO***
     */
    InProcess = "in-process",
    /**
     * req-revalid: ***TODO***
     */
    RequiresRevalidation = "req-revalid",
    /**
     * reval-fail: ***TODO***
     */
    ReValidationFailed = "reval-fail",
    /**
     * val-fail: ***TODO***
     */
    ValidationFailed = "val-fail",
    /**
     * validated: ***TODO***
     */
    Validated = "validated"
}
//# sourceMappingURL=VerificationresultStatusValueSet.d.ts.map