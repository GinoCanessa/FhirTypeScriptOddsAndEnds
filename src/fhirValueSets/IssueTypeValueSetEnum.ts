// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/issue-type|4.0.1

/**
 * A code that describes the type of issue.
 */
export enum IssueTypeValueSetEnum {
  /**
   * business-rule: The content/operation failed to pass some business rule and so could not proceed.
   */
  BusinessRuleViolation = "business-rule",
  /**
   * code-invalid: The code or system could not be understood, or it was not valid in the context of a particular ValueSet.code.
   */
  InvalidCode = "code-invalid",
  /**
   * conflict: Content could not be accepted because of an edit conflict (i.e. version aware updates). (In a pure RESTful environment, this would be an HTTP 409 error, but this code may be used where the conflict is discovered further into the application architecture.).
   */
  EditVersionConflict = "conflict",
  /**
   * deleted: The reference pointed to content (usually a resource) that has been deleted.
   */
  Deleted = "deleted",
  /**
   * duplicate: An attempt was made to create a duplicate record.
   */
  Duplicate = "duplicate",
  /**
   * exception: An unexpected internal error has occurred.
   */
  Exception = "exception",
  /**
   * expired: User session expired; a login may be required.
   */
  SessionExpired = "expired",
  /**
   * extension: An extension was found that was not acceptable, could not be resolved, or a modifierExtension was not recognized.
   */
  UnacceptableExtension = "extension",
  /**
   * forbidden: The user does not have the rights to perform this action.
   */
  Forbidden = "forbidden",
  /**
   * incomplete: Not all data sources typically accessed could be reached or responded in time, so the returned information might not be complete (applies to search interactions and some operations).
   */
  IncompleteResults = "incomplete",
  /**
   * informational: A message unrelated to the processing success of the completed operation (examples of the latter include things like reminders of password expiry, system maintenance times, etc.).
   */
  InformationalNote = "informational",
  /**
   * invalid: Content invalid against the specification or a profile.
   */
  InvalidContent = "invalid",
  /**
   * invariant: A content validation rule failed - e.g. a schematron rule.
   */
  ValidationRuleFailed = "invariant",
  /**
   * lock-error: A resource/record locking failure (usually in an underlying database).
   */
  LockError = "lock-error",
  /**
   * login: The client needs to initiate an authentication process.
   */
  LoginRequired = "login",
  /**
   * multiple-matches: Multiple matching records were found when the operation required only one match.
   */
  MultipleMatches = "multiple-matches",
  /**
   * no-store: The persistent store is unavailable; e.g. the database is down for maintenance or similar action, and the interaction or operation cannot be processed.
   */
  NoStoreAvailable = "no-store",
  /**
   * not-found: The reference provided was not found. In a pure RESTful environment, this would be an HTTP 404 error, but this code may be used where the content is not found further into the application architecture.
   */
  NotFound = "not-found",
  /**
   * not-supported: The interaction, operation, resource or profile is not supported.
   */
  ContentNotSupported = "not-supported",
  /**
   * processing: Processing issues. These are expected to be final e.g. there is no point resubmitting the same content unchanged.
   */
  ProcessingFailure = "processing",
  /**
   * required: A required element is missing.
   */
  RequiredElementMissing = "required",
  /**
   * security: An authentication/authorization/permissions issue of some kind.
   */
  SecurityProblem = "security",
  /**
   * structure: A structural issue in the content such as wrong namespace, unable to parse the content completely, invalid syntax, etc.
   */
  StructuralIssue = "structure",
  /**
   * suppressed: Some information was not or might not have been returned due to business rules, consent or privacy rules, or access permission constraints.  This information may be accessible through alternate processes.
   */
  InformationSuppressed = "suppressed",
  /**
   * throttled: The system is not prepared to handle this request due to load management.
   */
  Throttled = "throttled",
  /**
   * timeout: An internal timeout has occurred.
   */
  Timeout = "timeout",
  /**
   * too-costly: The operation was stopped to protect server resources; e.g. a request for a value set expansion on all of SNOMED CT.
   */
  OperationTooCostly = "too-costly",
  /**
   * too-long: Provided content is too long (typically, this is a denial of service protection type of error).
   */
  ContentTooLong = "too-long",
  /**
   * transient: Transient processing issues. The system receiving the message may be able to resubmit the same content once an underlying issue is resolved.
   */
  TransientIssue = "transient",
  /**
   * unknown: The user or system was not able to be authenticated (either there is no process, or the proferred token is unacceptable).
   */
  UnknownUser = "unknown",
  /**
   * value: An element or header value is invalid.
   */
  ElementValueInvalid = "value",
}
