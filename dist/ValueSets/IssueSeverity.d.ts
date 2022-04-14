import { Coding } from '../strictmodels';
/**
 * How the issue affects the success of the action.
 */
export declare const IssueSeverity: {
    /**
     * The issue is sufficiently important to cause the action to fail.
     */
    issue_severity_Error: Coding;
    /**
     * The issue caused the action to fail and no further checking could be performed.
     */
    issue_severity_Fatal: Coding;
    /**
     * The issue has no relation to the degree of success of the action.
     */
    issue_severity_Information: Coding;
    /**
     * The issue is not important enough to cause the action to fail but may cause it to be performed suboptimally or in a way that is not as desired.
     */
    issue_severity_Warning: Coding;
};
//# sourceMappingURL=IssueSeverity.d.ts.map