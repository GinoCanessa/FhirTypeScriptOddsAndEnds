import { Coding } from '../fhir.js';
/**
 * Status of the supply request.
 */
export declare const SupplyrequestStatusValueSet: {
    /**
     * active: The request is ready to be acted upon.
     */
    readonly Active: Coding;
    /**
     * cancelled: The authorization/request to act has been terminated prior to the full completion of the intended actions.  No further activity should occur.
     */
    readonly Cancelled: Coding;
    /**
     * completed: Activity against the request has been sufficiently completed to the satisfaction of the requester.
     */
    readonly Completed: Coding;
    /**
     * draft: The request has been created but is not yet complete or ready for action.
     */
    readonly Draft: Coding;
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    readonly EnteredInError: Coding;
    /**
     * suspended: The authorization/request to act has been temporarily withdrawn but is expected to resume in the future.
     */
    readonly Suspended: Coding;
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    readonly Unknown: Coding;
};
/**
 * Status of the supply request.
 */
export declare type SupplyrequestStatusValueSetType = typeof SupplyrequestStatusValueSet;
/**
 * Status of the supply request.
 */
export declare enum SupplyrequestStatusValueSetEnum {
    /**
     * active: The request is ready to be acted upon.
     */
    Active = "active",
    /**
     * cancelled: The authorization/request to act has been terminated prior to the full completion of the intended actions.  No further activity should occur.
     */
    Cancelled = "cancelled",
    /**
     * completed: Activity against the request has been sufficiently completed to the satisfaction of the requester.
     */
    Completed = "completed",
    /**
     * draft: The request has been created but is not yet complete or ready for action.
     */
    Draft = "draft",
    /**
     * entered-in-error: This electronic record should never have existed, though it is possible that real-world decisions were based on it.  (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    EnteredInError = "entered-in-error",
    /**
     * suspended: The authorization/request to act has been temporarily withdrawn but is expected to resume in the future.
     */
    Suspended = "suspended",
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    Unknown = "unknown"
}
//# sourceMappingURL=SupplyrequestStatusValueSet.d.ts.map