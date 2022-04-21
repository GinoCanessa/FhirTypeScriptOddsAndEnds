import { Coding } from '../fhir.js';
/**
 * Codes describing the reason why a family member's history is not available.
 */
export declare const HistoryAbsentReasonValueSet: {
    /**
     * deferred: Patient does not have the information now, but can provide the information at a later date.
     */
    readonly Deferred: Coding;
    /**
     * subject-unknown: Patient does not know the subject, e.g. the biological parent of an adopted patient.
     */
    readonly SubjectUnknown: Coding;
    /**
     * unable-to-obtain: Information cannot be obtained; e.g. unconscious patient.
     */
    readonly UnableToObtain: Coding;
    /**
     * withheld: The patient withheld or refused to share the information.
     */
    readonly InformationWithheld: Coding;
};
/**
 * Codes describing the reason why a family member's history is not available.
 */
export declare type HistoryAbsentReasonValueSetType = typeof HistoryAbsentReasonValueSet;
/**
 * Codes describing the reason why a family member's history is not available.
 */
export declare enum HistoryAbsentReasonValueSetEnum {
    /**
     * deferred: Patient does not have the information now, but can provide the information at a later date.
     */
    Deferred = "deferred",
    /**
     * subject-unknown: Patient does not know the subject, e.g. the biological parent of an adopted patient.
     */
    SubjectUnknown = "subject-unknown",
    /**
     * unable-to-obtain: Information cannot be obtained; e.g. unconscious patient.
     */
    UnableToObtain = "unable-to-obtain",
    /**
     * withheld: The patient withheld or refused to share the information.
     */
    InformationWithheld = "withheld"
}
//# sourceMappingURL=HistoryAbsentReasonValueSet.d.ts.map