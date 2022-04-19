import { Coding } from '../fhir';
/**
 * Codes describing the reason why a family member's history is not available.
 */
export declare const HistoryAbsentReasonValueSet: {
    /**
     * Patient does not have the information now, but can provide the information at a later date.
     */
    history_absent_reason_Deferred: Coding;
    /**
     * Patient does not know the subject, e.g. the biological parent of an adopted patient.
     */
    history_absent_reason_SubjectUnknown: Coding;
    /**
     * Information cannot be obtained; e.g. unconscious patient.
     */
    history_absent_reason_UnableToObtain: Coding;
    /**
     * The patient withheld or refused to share the information.
     */
    history_absent_reason_InformationWithheld: Coding;
};
//# sourceMappingURL=HistoryAbsentReasonValueSet.d.ts.map