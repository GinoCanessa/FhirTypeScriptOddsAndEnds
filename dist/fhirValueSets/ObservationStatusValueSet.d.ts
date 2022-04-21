import { Coding } from '../fhir.js';
/**
 * Codes providing the status of an observation.
 */
export declare const ObservationStatusValueSet: {
    /**
     * amended: Subsequent to being Final, the observation has been modified subsequent.  This includes updates/new information and corrections.
     */
    readonly Amended: Coding;
    /**
     * cancelled: The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    readonly Cancelled: Coding;
    /**
     * corrected: Subsequent to being Final, the observation has been modified to correct an error in the test result.
     */
    readonly Corrected: Coding;
    /**
     * entered-in-error: The observation has been withdrawn following previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    readonly EnteredInError: Coding;
    /**
     * final: The observation is complete and there are no further actions needed. Additional information such "released", "signed", etc would be represented using [Provenance](provenance.html) which provides not only the act but also the actors and dates and other related data. These act states would be associated with an observation status of `preliminary` until they are all completed and then a status of `final` would be applied.
     */
    readonly Final: Coding;
    /**
     * preliminary: This is an initial or interim observation: data may be incomplete or unverified.
     */
    readonly Preliminary: Coding;
    /**
     * registered: The existence of the observation is registered, but there is no result yet available.
     */
    readonly Registered: Coding;
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    readonly Unknown: Coding;
};
/**
 * Codes providing the status of an observation.
 */
export declare type ObservationStatusValueSetType = typeof ObservationStatusValueSet;
/**
 * Codes providing the status of an observation.
 */
export declare enum ObservationStatusValueSetEnum {
    /**
     * amended: Subsequent to being Final, the observation has been modified subsequent.  This includes updates/new information and corrections.
     */
    Amended = "amended",
    /**
     * cancelled: The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    Cancelled = "cancelled",
    /**
     * corrected: Subsequent to being Final, the observation has been modified to correct an error in the test result.
     */
    Corrected = "corrected",
    /**
     * entered-in-error: The observation has been withdrawn following previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    EnteredInError = "entered-in-error",
    /**
     * final: The observation is complete and there are no further actions needed. Additional information such "released", "signed", etc would be represented using [Provenance](provenance.html) which provides not only the act but also the actors and dates and other related data. These act states would be associated with an observation status of `preliminary` until they are all completed and then a status of `final` would be applied.
     */
    Final = "final",
    /**
     * preliminary: This is an initial or interim observation: data may be incomplete or unverified.
     */
    Preliminary = "preliminary",
    /**
     * registered: The existence of the observation is registered, but there is no result yet available.
     */
    Registered = "registered",
    /**
     * unknown: The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    Unknown = "unknown"
}
//# sourceMappingURL=ObservationStatusValueSet.d.ts.map