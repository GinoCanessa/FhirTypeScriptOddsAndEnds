import { Coding } from '../fhir.js';
/**
 * The status of the ImagingStudy.
 */
export declare const ImagingstudyStatusValueSet: {
    /**
     * available: At least one instance has been associated with this imaging study.
     */
    readonly Available: Coding;
    /**
     * cancelled: The imaging study is unavailable because the imaging study was not started or not completed (also sometimes called "aborted").
     */
    readonly Cancelled: Coding;
    /**
     * entered-in-error: The imaging study has been withdrawn following a previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    readonly EnteredInError: Coding;
    /**
     * registered: The existence of the imaging study is registered, but there is nothing yet available.
     */
    readonly Registered: Coding;
    /**
     * unknown: The system does not know which of the status values currently applies for this request. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, it's just not known which one.
     */
    readonly Unknown: Coding;
};
/**
 * The status of the ImagingStudy.
 */
export declare type ImagingstudyStatusValueSetType = typeof ImagingstudyStatusValueSet;
/**
 * The status of the ImagingStudy.
 */
//# sourceMappingURL=ImagingstudyStatusValueSet.d.ts.map