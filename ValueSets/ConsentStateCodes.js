/**
 * Indicates the state of the consent.
 */
export var ConsentStateCodes = {
    /**
     * The consent is to be followed and enforced.
     */
    consent_state_codes_Active: {
        code: "active",
        display: "Active",
        system: "http://hl7.org/fhir/consent-state-codes"
    },
    /**
     * The consent is in development or awaiting use but is not yet intended to be acted upon.
     */
    consent_state_codes_Pending: {
        code: "draft",
        display: "Pending",
        system: "http://hl7.org/fhir/consent-state-codes"
    },
    /**
     * The consent was created wrongly (e.g. wrong patient) and should be ignored.
     */
    consent_state_codes_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/consent-state-codes"
    },
    /**
     * The consent is terminated or replaced.
     */
    consent_state_codes_Inactive: {
        code: "inactive",
        display: "Inactive",
        system: "http://hl7.org/fhir/consent-state-codes"
    },
    /**
     * The consent has been proposed but not yet agreed to by all parties. The negotiation stage.
     */
    consent_state_codes_Proposed: {
        code: "proposed",
        display: "Proposed",
        system: "http://hl7.org/fhir/consent-state-codes"
    },
    /**
     * The consent has been rejected by one or more of the parties.
     */
    consent_state_codes_Rejected: {
        code: "rejected",
        display: "Rejected",
        system: "http://hl7.org/fhir/consent-state-codes"
    }
};
