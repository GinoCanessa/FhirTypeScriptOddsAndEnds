import { Coding } from '../fhir.js';
/**
 * How the issue affects the success of the action.
 */
export declare const IssueSeverityValueSet: {
    /**
     * error: The issue is sufficiently important to cause the action to fail.
     */
    readonly Error: Coding;
    /**
     * fatal: The issue caused the action to fail and no further checking could be performed.
     */
    readonly Fatal: Coding;
    /**
     * information: The issue has no relation to the degree of success of the action.
     */
    readonly Information: Coding;
    /**
     * warning: The issue is not important enough to cause the action to fail but may cause it to be performed suboptimally or in a way that is not as desired.
     */
    readonly Warning: Coding;
};
/**
 * How the issue affects the success of the action.
 */
export declare type IssueSeverityValueSetType = typeof IssueSeverityValueSet;
/**
 * How the issue affects the success of the action.
 */
export declare enum IssueSeverityValueSetEnum {
    /**
     * error: The issue is sufficiently important to cause the action to fail.
     */
    Error = "error",
    /**
     * fatal: The issue caused the action to fail and no further checking could be performed.
     */
    Fatal = "fatal",
    /**
     * information: The issue has no relation to the degree of success of the action.
     */
    Information = "information",
    /**
     * warning: The issue is not important enough to cause the action to fail but may cause it to be performed suboptimally or in a way that is not as desired.
     */
    Warning = "warning"
}
//# sourceMappingURL=IssueSeverityValueSet.d.ts.map