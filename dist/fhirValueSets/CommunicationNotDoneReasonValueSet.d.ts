import { Coding } from '../fhir.js';
/**
 * Codes for the reason why a communication did not happen.
 */
export declare const CommunicationNotDoneReasonValueSet: {
    /**
     * family-objection: The communication was not done due to a family objection.
     */
    readonly FamilyObjection: Coding;
    /**
     * invalid-phone-number: The communication was not done due to an invalid phone number.
     */
    readonly InvalidPhoneNumber: Coding;
    /**
     * patient-objection: The communication was not done due to a patient objection.
     */
    readonly PatientObjection: Coding;
    /**
     * recipient-unavailable: The communication was not done due to the recipient being unavailable.
     */
    readonly RecipientUnavailable: Coding;
    /**
     * system-error: The communication was not done due to a system error.
     */
    readonly SystemError: Coding;
    /**
     * unknown: The communication was not done due to an unknown reason.
     */
    readonly Unknown: Coding;
};
/**
 * Codes for the reason why a communication did not happen.
 */
export declare type CommunicationNotDoneReasonValueSetType = typeof CommunicationNotDoneReasonValueSet;
/**
 * Codes for the reason why a communication did not happen.
 */
export declare enum CommunicationNotDoneReasonValueSetEnum {
    /**
     * family-objection: The communication was not done due to a family objection.
     */
    FamilyObjection = "family-objection",
    /**
     * invalid-phone-number: The communication was not done due to an invalid phone number.
     */
    InvalidPhoneNumber = "invalid-phone-number",
    /**
     * patient-objection: The communication was not done due to a patient objection.
     */
    PatientObjection = "patient-objection",
    /**
     * recipient-unavailable: The communication was not done due to the recipient being unavailable.
     */
    RecipientUnavailable = "recipient-unavailable",
    /**
     * system-error: The communication was not done due to a system error.
     */
    SystemError = "system-error",
    /**
     * unknown: The communication was not done due to an unknown reason.
     */
    Unknown = "unknown"
}
//# sourceMappingURL=CommunicationNotDoneReasonValueSet.d.ts.map