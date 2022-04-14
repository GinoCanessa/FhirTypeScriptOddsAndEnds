"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryAbsentReason = void 0;
/**
 * Codes describing the reason why a family member's history is not available.
 */
exports.HistoryAbsentReason = {
    /**
     * Patient does not have the information now, but can provide the information at a later date.
     */
    history_absent_reason_Deferred: {
        code: "deferred",
        display: "Deferred",
        system: "http://terminology.hl7.org/CodeSystem/history-absent-reason"
    },
    /**
     * Patient does not know the subject, e.g. the biological parent of an adopted patient.
     */
    history_absent_reason_SubjectUnknown: {
        code: "subject-unknown",
        display: "Subject Unknown",
        system: "http://terminology.hl7.org/CodeSystem/history-absent-reason"
    },
    /**
     * Information cannot be obtained; e.g. unconscious patient.
     */
    history_absent_reason_UnableToObtain: {
        code: "unable-to-obtain",
        display: "Unable To Obtain",
        system: "http://terminology.hl7.org/CodeSystem/history-absent-reason"
    },
    /**
     * The patient withheld or refused to share the information.
     */
    history_absent_reason_InformationWithheld: {
        code: "withheld",
        display: "Information Withheld",
        system: "http://terminology.hl7.org/CodeSystem/history-absent-reason"
    },
};
//# sourceMappingURL=HistoryAbsentReason.js.map