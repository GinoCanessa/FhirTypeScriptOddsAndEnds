import { Coding } from '../strictmodels';
/**
 * A code that describes the type of issue.
 */
export declare const IssueType: {
    /**
     * The content/operation failed to pass some business rule and so could not proceed.
     */
    issue_type_BusinessRuleViolation: Coding;
    /**
     * The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.
     */
    issue_type_InvalidCode: Coding;
    /**
     * Content could not be accepted because of an edit conflict (i.e. version aware updates). (In a pure RESTful environment, this would be an HTTP 409 error, but this code may be used where the conflict is discovered further into the application architecture.).
     */
    issue_type_EditVersionConflict: Coding;
    /**
     * The reference pointed to content (usually a resource) that has been deleted.
     */
    issue_type_Deleted: Coding;
    /**
     * An attempt was made to create a duplicate record.
     */
    issue_type_Duplicate: Coding;
    /**
     * An unexpected internal error has occurred.
     */
    issue_type_Exception: Coding;
    /**
     * User session expired; a login may be required.
     */
    issue_type_SessionExpired: Coding;
    /**
     * An extension was found that was not acceptable, could not be resolved, or a modifierExtension was not recognized.
     */
    issue_type_UnacceptableExtension: Coding;
    /**
     * The user does not have the rights to perform this action.
     */
    issue_type_Forbidden: Coding;
    /**
     * Not all data sources typically accessed could be reached or responded in time, so the returned information might not be complete (applies to search interactions and some operations).
     */
    issue_type_IncompleteResults: Coding;
    /**
     * A message unrelated to the processing success of the completed operation (examples of the latter include things like reminders of password expiry, system maintenance times, etc.).
     */
    issue_type_InformationalNote: Coding;
    /**
     * Content invalid against the specification or a profile.
     */
    issue_type_InvalidContent: Coding;
    /**
     * A content validation rule failed - e.g. a schematron rule.
     */
    issue_type_ValidationRuleFailed: Coding;
    /**
     * A resource/record locking failure (usually in an underlying database).
     */
    issue_type_LockError: Coding;
    /**
     * The client needs to initiate an authentication process.
     */
    issue_type_LoginRequired: Coding;
    /**
     * Multiple matching records were found when the operation required only one match.
     */
    issue_type_MultipleMatches: Coding;
    /**
     * The persistent store is unavailable; e.g. the database is down for maintenance or similar action, and the interaction or operation cannot be processed.
     */
    issue_type_NoStoreAvailable: Coding;
    /**
     * The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.
     */
    issue_type_NotFound: Coding;
    /**
     * The interaction, operation, resource or profile is not supported.
     */
    issue_type_ContentNotSupported: Coding;
    /**
     * Processing issues. These are expected to be final e.g. there is no point resubmitting the same content unchanged.
     */
    issue_type_ProcessingFailure: Coding;
    /**
     * A required element is missing.
     */
    issue_type_RequiredElementMissing: Coding;
    /**
     * An authentication/authorization/permissions issue of some kind.
     */
    issue_type_SecurityProblem: Coding;
    /**
     * A structural issue in the content such as wrong namespace, unable to parse the content completely, invalid syntax, etc.
     */
    issue_type_StructuralIssue: Coding;
    /**
     * Some information was not or might not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.
     */
    issue_type_InformationSuppressed: Coding;
    /**
     * The system is not prepared to handle this request due to load management.
     */
    issue_type_Throttled: Coding;
    /**
     * An internal timeout has occurred.
     */
    issue_type_Timeout: Coding;
    /**
     * The operation was stopped to protect server resources; e.g. a request for a value set expansion on all of SNOMED CT.
     */
    issue_type_OperationTooCostly: Coding;
    /**
     * Provided content is too long (typically, this is a denial of service protection type of error).
     */
    issue_type_ContentTooLong: Coding;
    /**
     * Transient processing issues. The system receiving the message may be able to resubmit the same content once an underlying issue is resolved.
     */
    issue_type_TransientIssue: Coding;
    /**
     * The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).
     */
    issue_type_UnknownUser: Coding;
    /**
     * An element or header value is invalid.
     */
    issue_type_ElementValueInvalid: Coding;
};
//# sourceMappingURL=IssueType.d.ts.map