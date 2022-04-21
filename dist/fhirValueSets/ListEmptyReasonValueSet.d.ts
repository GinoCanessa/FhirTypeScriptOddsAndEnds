import { Coding } from '../fhir.js';
/**
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 */
export declare const ListEmptyReasonValueSet: {
    /**
     * closed: This list has now closed or has ceased to be relevant or useful.
     */
    readonly Closed: Coding;
    /**
     * nilknown: Clinical judgment that there are no known items for this list after reasonable investigation. Note that this a positive statement by a clinical user, and not a default position asserted by a computer system in the lack of other information. Example uses:  * For allergies: the patient or patient's agent/guardian has asserted that he/she is not aware of any allergies (NKA - nil known allergies)  * For medications: the patient or patient's agent/guardian has asserted that the patient is known to be taking no medications  * For diagnoses, problems and procedures: the patient or patient's agent/guardian has asserted that there is no known event to record.
     */
    readonly NilKnown: Coding;
    /**
     * notasked: The investigation to find out whether there are items for this list has not occurred.
     */
    readonly NotAsked: Coding;
    /**
     * notstarted: The work to populate this list has not yet begun.
     */
    readonly NotStarted: Coding;
    /**
     * unavailable: Information to populate this list cannot be obtained; e.g. unconscious patient.
     */
    readonly Unavailable: Coding;
    /**
     * withheld: The content of the list was not provided due to privacy or confidentiality concerns. Note that it should not be assumed that this means that the particular information in question was withheld due to its contents - it can also be a policy decision.
     */
    readonly InformationWithheld: Coding;
};
/**
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 */
export declare type ListEmptyReasonValueSetType = typeof ListEmptyReasonValueSet;
/**
 * General reasons for a list to be empty. Reasons are either related to a summary list (i.e. problem or medication list) or to a workflow related list (i.e. consultation list).
 */
export declare enum ListEmptyReasonValueSetEnum {
    /**
     * closed: This list has now closed or has ceased to be relevant or useful.
     */
    Closed = "closed",
    /**
     * nilknown: Clinical judgment that there are no known items for this list after reasonable investigation. Note that this a positive statement by a clinical user, and not a default position asserted by a computer system in the lack of other information. Example uses:  * For allergies: the patient or patient's agent/guardian has asserted that he/she is not aware of any allergies (NKA - nil known allergies)  * For medications: the patient or patient's agent/guardian has asserted that the patient is known to be taking no medications  * For diagnoses, problems and procedures: the patient or patient's agent/guardian has asserted that there is no known event to record.
     */
    NilKnown = "nilknown",
    /**
     * notasked: The investigation to find out whether there are items for this list has not occurred.
     */
    NotAsked = "notasked",
    /**
     * notstarted: The work to populate this list has not yet begun.
     */
    NotStarted = "notstarted",
    /**
     * unavailable: Information to populate this list cannot be obtained; e.g. unconscious patient.
     */
    Unavailable = "unavailable",
    /**
     * withheld: The content of the list was not provided due to privacy or confidentiality concerns. Note that it should not be assumed that this means that the particular information in question was withheld due to its contents - it can also be a policy decision.
     */
    InformationWithheld = "withheld"
}
//# sourceMappingURL=ListEmptyReasonValueSet.d.ts.map