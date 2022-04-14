"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEmptyReason = void 0;
/**
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 */
exports.ListEmptyReason = {
    /**
     * This list has now closed or has ceased to be relevant or useful.
     */
    list_empty_reason_Closed: {
        code: "closed",
        display: "Closed",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason"
    },
    /**
     * Clinical judgment that there are no known items for this list after reasonable investigation. Note that this a positive statement by a clinical user, and not a default position asserted by a computer system in the lack of other information. Example uses:  * For allergies: the patient or patient's agent/guardian has asserted that he/she is not aware of any allergies (NKA - nil known allergies)  * For medications: the patient or patient's agent/guardian has asserted that the patient is known to be taking no medications  * For diagnoses, problems and procedures: the patient or patient's agent/guardian has asserted that there is no known event to record.
     */
    list_empty_reason_NilKnown: {
        code: "nilknown",
        display: "Nil Known",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason"
    },
    /**
     * The investigation to find out whether there are items for this list has not occurred.
     */
    list_empty_reason_NotAsked: {
        code: "notasked",
        display: "Not Asked",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason"
    },
    /**
     * The work to populate this list has not yet begun.
     */
    list_empty_reason_NotStarted: {
        code: "notstarted",
        display: "Not Started",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason"
    },
    /**
     * Information to populate this list cannot be obtained; e.g. unconscious patient.
     */
    list_empty_reason_Unavailable: {
        code: "unavailable",
        display: "Unavailable",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason"
    },
    /**
     * The content of the list was not provided due to privacy or confidentiality concerns. Note that it should not be assumed that this means that the particular information in question was withheld due to its contents - it can also be a policy decision.
     */
    list_empty_reason_InformationWithheld: {
        code: "withheld",
        display: "Information Withheld",
        system: "http://terminology.hl7.org/CodeSystem/list-empty-reason"
    },
};
//# sourceMappingURL=ListEmptyReason.js.map