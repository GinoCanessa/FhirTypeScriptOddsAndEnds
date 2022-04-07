/**
 * How the issue affects the success of the action.
 */
export var IssueSeverity = {
    /**
     * The issue is sufficiently important to cause the action to fail.
     */
    issue_severity_Error: {
        code: "error",
        display: "Error",
        system: "http://hl7.org/fhir/issue-severity"
    },
    /**
     * The issue caused the action to fail and no further checking could be performed.
     */
    issue_severity_Fatal: {
        code: "fatal",
        display: "Fatal",
        system: "http://hl7.org/fhir/issue-severity"
    },
    /**
     * The issue has no relation to the degree of success of the action.
     */
    issue_severity_Information: {
        code: "information",
        display: "Information",
        system: "http://hl7.org/fhir/issue-severity"
    },
    /**
     * The issue is not important enough to cause the action to fail but may cause it to be performed suboptimally or in a way that is not as desired.
     */
    issue_severity_Warning: {
        code: "warning",
        display: "Warning",
        system: "http://hl7.org/fhir/issue-severity"
    }
};
