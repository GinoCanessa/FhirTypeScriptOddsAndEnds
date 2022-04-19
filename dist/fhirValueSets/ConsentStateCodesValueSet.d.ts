import { Coding } from '../fhir';
/**
 * Indicates the state of the consent.
 */
export declare const ConsentStateCodesValueSet: {
    /**
     * The consent is to be followed and enforced.
     */
    consent_state_codes_Active: Coding;
    /**
     * The consent is in development or awaiting use but is not yet intended to be acted upon.
     */
    consent_state_codes_Pending: Coding;
    /**
     * The consent was created wrongly (e.g. wrong patient) and should be ignored.
     */
    consent_state_codes_EnteredInError: Coding;
    /**
     * The consent is terminated or replaced.
     */
    consent_state_codes_Inactive: Coding;
    /**
     * The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
     */
    consent_state_codes_Proposed: Coding;
    /**
     * The consent has been rejected by one or more of the parties.
     */
    consent_state_codes_Rejected: Coding;
};
//# sourceMappingURL=ConsentStateCodesValueSet.d.ts.map