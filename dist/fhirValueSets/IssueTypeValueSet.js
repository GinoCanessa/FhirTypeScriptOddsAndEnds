// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/issue-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * A code that describes the type of issue.
 */
export const IssueTypeValueSet = {
    /**
     * business-rule: The content/operation failed to pass some business rule and so could not proceed.
     */
    BusinessRuleViolation: new Coding({
        display: "Business Rule Violation",
        code: "business-rule",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * code-invalid: The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.
     */
    InvalidCode: new Coding({
        display: "Invalid Code",
        code: "code-invalid",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * conflict: Content could not be accepted because of an edit conflict (i.e. version aware updates). (In a pure RESTful environment, this would be an HTTP 409 error, but this code may be used where the conflict is discovered further into the application architecture.).
     */
    EditVersionConflict: new Coding({
        display: "Edit Version Conflict",
        code: "conflict",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * deleted: The reference pointed to content (usually a resource) that has been deleted.
     */
    Deleted: new Coding({
        display: "Deleted",
        code: "deleted",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * duplicate: An attempt was made to create a duplicate record.
     */
    Duplicate: new Coding({
        display: "Duplicate",
        code: "duplicate",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * exception: An unexpected internal error has occurred.
     */
    Exception: new Coding({
        display: "Exception",
        code: "exception",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * expired: User session expired; a login may be required.
     */
    SessionExpired: new Coding({
        display: "Session Expired",
        code: "expired",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * extension: An extension was found that was not acceptable, could not be resolved, or a modifierExtension was not recognized.
     */
    UnacceptableExtension: new Coding({
        display: "Unacceptable Extension",
        code: "extension",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * forbidden: The user does not have the rights to perform this action.
     */
    Forbidden: new Coding({
        display: "Forbidden",
        code: "forbidden",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * incomplete: Not all data sources typically accessed could be reached or responded in time, so the returned information might not be complete (applies to search interactions and some operations).
     */
    IncompleteResults: new Coding({
        display: "Incomplete Results",
        code: "incomplete",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * informational: A message unrelated to the processing success of the completed operation (examples of the latter include things like reminders of password expiry, system maintenance times, etc.).
     */
    InformationalNote: new Coding({
        display: "Informational Note",
        code: "informational",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * invalid: Content invalid against the specification or a profile.
     */
    InvalidContent: new Coding({
        display: "Invalid Content",
        code: "invalid",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * invariant: A content validation rule failed - e.g. a schematron rule.
     */
    ValidationRuleFailed: new Coding({
        display: "Validation rule failed",
        code: "invariant",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * lock-error: A resource/record locking failure (usually in an underlying database).
     */
    LockError: new Coding({
        display: "Lock Error",
        code: "lock-error",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * login: The client needs to initiate an authentication process.
     */
    LoginRequired: new Coding({
        display: "Login Required",
        code: "login",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * multiple-matches: Multiple matching records were found when the operation required only one match.
     */
    MultipleMatches: new Coding({
        display: "Multiple Matches",
        code: "multiple-matches",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * no-store: The persistent store is unavailable; e.g. the database is down for maintenance or similar action, and the interaction or operation cannot be processed.
     */
    NoStoreAvailable: new Coding({
        display: "No Store Available",
        code: "no-store",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * not-found: The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.
     */
    NotFound: new Coding({
        display: "Not Found",
        code: "not-found",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * not-supported: The interaction, operation, resource or profile is not supported.
     */
    ContentNotSupported: new Coding({
        display: "Content not supported",
        code: "not-supported",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * processing: Processing issues. These are expected to be final e.g. there is no point resubmitting the same content unchanged.
     */
    ProcessingFailure: new Coding({
        display: "Processing Failure",
        code: "processing",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * required: A required element is missing.
     */
    RequiredElementMissing: new Coding({
        display: "Required element missing",
        code: "required",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * security: An authentication/authorization/permissions issue of some kind.
     */
    SecurityProblem: new Coding({
        display: "Security Problem",
        code: "security",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * structure: A structural issue in the content such as wrong namespace, unable to parse the content completely, invalid syntax, etc.
     */
    StructuralIssue: new Coding({
        display: "Structural Issue",
        code: "structure",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * suppressed: Some information was not or might not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.
     */
    InformationSuppressed: new Coding({
        display: "Information  Suppressed",
        code: "suppressed",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * throttled: The system is not prepared to handle this request due to load management.
     */
    Throttled: new Coding({
        display: "Throttled",
        code: "throttled",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * timeout: An internal timeout has occurred.
     */
    Timeout: new Coding({
        display: "Timeout",
        code: "timeout",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * too-costly: The operation was stopped to protect server resources; e.g. a request for a value set expansion on all of SNOMED CT.
     */
    OperationTooCostly: new Coding({
        display: "Operation Too Costly",
        code: "too-costly",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * too-long: Provided content is too long (typically, this is a denial of service protection type of error).
     */
    ContentTooLong: new Coding({
        display: "Content Too Long",
        code: "too-long",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * transient: Transient processing issues. The system receiving the message may be able to resubmit the same content once an underlying issue is resolved.
     */
    TransientIssue: new Coding({
        display: "Transient Issue",
        code: "transient",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * unknown: The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).
     */
    UnknownUser: new Coding({
        display: "Unknown User",
        code: "unknown",
        system: "http://hl7.org/fhir/issue-type",
    }),
    /**
     * value: An element or header value is invalid.
     */
    ElementValueInvalid: new Coding({
        display: "Element value invalid",
        code: "value",
        system: "http://hl7.org/fhir/issue-type",
    }),
};
/**
 * A code that describes the type of issue.
 */
//# sourceMappingURL=IssueTypeValueSet.js.map