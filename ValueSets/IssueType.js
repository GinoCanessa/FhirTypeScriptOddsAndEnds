/**
 * A code that describes the type of issue.
 */
export var IssueType = {
    /**
     * The content/operation failed to pass some business rule and so could not proceed.
     */
    issue_type_BusinessRuleViolation: {
        code: "business-rule",
        display: "Business Rule Violation",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.
     */
    issue_type_InvalidCode: {
        code: "code-invalid",
        display: "Invalid Code",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * Content could not be accepted because of an edit conflict (i.e. version aware updates). (In a pure RESTful environment, this would be an HTTP 409 error, but this code may be used where the conflict is discovered further into the application architecture.).
     */
    issue_type_EditVersionConflict: {
        code: "conflict",
        display: "Edit Version Conflict",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * The reference pointed to content (usually a resource) that has been deleted.
     */
    issue_type_Deleted: {
        code: "deleted",
        display: "Deleted",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * An attempt was made to create a duplicate record.
     */
    issue_type_Duplicate: {
        code: "duplicate",
        display: "Duplicate",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * An unexpected internal error has occurred.
     */
    issue_type_Exception: {
        code: "exception",
        display: "Exception",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * User session expired; a login may be required.
     */
    issue_type_SessionExpired: {
        code: "expired",
        display: "Session Expired",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * An extension was found that was not acceptable, could not be resolved, or a modifierExtension was not recognized.
     */
    issue_type_UnacceptableExtension: {
        code: "extension",
        display: "Unacceptable Extension",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * The user does not have the rights to perform this action.
     */
    issue_type_Forbidden: {
        code: "forbidden",
        display: "Forbidden",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * Not all data sources typically accessed could be reached or responded in time, so the returned information might not be complete (applies to search interactions and some operations).
     */
    issue_type_IncompleteResults: {
        code: "incomplete",
        display: "Incomplete Results",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * A message unrelated to the processing success of the completed operation (examples of the latter include things like reminders of password expiry, system maintenance times, etc.).
     */
    issue_type_InformationalNote: {
        code: "informational",
        display: "Informational Note",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * Content invalid against the specification or a profile.
     */
    issue_type_InvalidContent: {
        code: "invalid",
        display: "Invalid Content",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * A content validation rule failed - e.g. a schematron rule.
     */
    issue_type_ValidationRuleFailed: {
        code: "invariant",
        display: "Validation rule failed",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * A resource/record locking failure (usually in an underlying database).
     */
    issue_type_LockError: {
        code: "lock-error",
        display: "Lock Error",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * The client needs to initiate an authentication process.
     */
    issue_type_LoginRequired: {
        code: "login",
        display: "Login Required",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * Multiple matching records were found when the operation required only one match.
     */
    issue_type_MultipleMatches: {
        code: "multiple-matches",
        display: "Multiple Matches",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * The persistent store is unavailable; e.g. the database is down for maintenance or similar action, and the interaction or operation cannot be processed.
     */
    issue_type_NoStoreAvailable: {
        code: "no-store",
        display: "No Store Available",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.
     */
    issue_type_NotFound: {
        code: "not-found",
        display: "Not Found",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * The interaction, operation, resource or profile is not supported.
     */
    issue_type_ContentNotSupported: {
        code: "not-supported",
        display: "Content not supported",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * Processing issues. These are expected to be final e.g. there is no point resubmitting the same content unchanged.
     */
    issue_type_ProcessingFailure: {
        code: "processing",
        display: "Processing Failure",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * A required element is missing.
     */
    issue_type_RequiredElementMissing: {
        code: "required",
        display: "Required element missing",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * An authentication/authorization/permissions issue of some kind.
     */
    issue_type_SecurityProblem: {
        code: "security",
        display: "Security Problem",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * A structural issue in the content such as wrong namespace, unable to parse the content completely, invalid syntax, etc.
     */
    issue_type_StructuralIssue: {
        code: "structure",
        display: "Structural Issue",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * Some information was not or might not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.
     */
    issue_type_InformationSuppressed: {
        code: "suppressed",
        display: "Information  Suppressed",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * The system is not prepared to handle this request due to load management.
     */
    issue_type_Throttled: {
        code: "throttled",
        display: "Throttled",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * An internal timeout has occurred.
     */
    issue_type_Timeout: {
        code: "timeout",
        display: "Timeout",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * The operation was stopped to protect server resources; e.g. a request for a value set expansion on all of SNOMED CT.
     */
    issue_type_OperationTooCostly: {
        code: "too-costly",
        display: "Operation Too Costly",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * Provided content is too long (typically, this is a denial of service protection type of error).
     */
    issue_type_ContentTooLong: {
        code: "too-long",
        display: "Content Too Long",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * Transient processing issues. The system receiving the message may be able to resubmit the same content once an underlying issue is resolved.
     */
    issue_type_TransientIssue: {
        code: "transient",
        display: "Transient Issue",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).
     */
    issue_type_UnknownUser: {
        code: "unknown",
        display: "Unknown User",
        system: "http://hl7.org/fhir/issue-type"
    },
    /**
     * An element or header value is invalid.
     */
    issue_type_ElementValueInvalid: {
        code: "value",
        display: "Element value invalid",
        system: "http://hl7.org/fhir/issue-type"
    }
};