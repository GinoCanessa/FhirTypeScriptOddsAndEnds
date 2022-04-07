/**
 * Codes providing the status of an observation.
 */
export var ObservationStatus = {
    /**
     * Subsequent to being Final, the observation has been modified subsequent.  This includes updates/new information and corrections.
     */
    observation_status_Amended: {
        code: "amended",
        display: "Amended",
        system: "http://hl7.org/fhir/observation-status"
    },
    /**
     * The observation is unavailable because the measurement was not started or not completed (also sometimes called "aborted").
     */
    observation_status_Cancelled: {
        code: "cancelled",
        display: "Cancelled",
        system: "http://hl7.org/fhir/observation-status"
    },
    /**
     * Subsequent to being Final, the observation has been modified to correct an error in the test result.
     */
    observation_status_Corrected: {
        code: "corrected",
        display: "Corrected",
        system: "http://hl7.org/fhir/observation-status"
    },
    /**
     * The observation has been withdrawn following previous final release.  This electronic record should never have existed, though it is possible that real-world decisions were based on it. (If real-world activity has occurred, the status should be "cancelled" rather than "entered-in-error".).
     */
    observation_status_EnteredInError: {
        code: "entered-in-error",
        display: "Entered in Error",
        system: "http://hl7.org/fhir/observation-status"
    },
    /**
     * The observation is complete and there are no further actions needed. Additional information such "released", "signed", etc would be represented using [Provenance](provenance.html) which provides not only the act but also the actors and dates and other related data. These act states would be associated with an observation status of `preliminary` until they are all completed and then a status of `final` would be applied.
     */
    observation_status_Final: {
        code: "final",
        display: "Final",
        system: "http://hl7.org/fhir/observation-status"
    },
    /**
     * This is an initial or interim observation: data may be incomplete or unverified.
     */
    observation_status_Preliminary: {
        code: "preliminary",
        display: "Preliminary",
        system: "http://hl7.org/fhir/observation-status"
    },
    /**
     * The existence of the observation is registered, but there is no result yet available.
     */
    observation_status_Registered: {
        code: "registered",
        display: "Registered",
        system: "http://hl7.org/fhir/observation-status"
    },
    /**
     * The authoring/source system does not know which of the status values currently applies for this observation. Note: This concept is not to be used for "other" - one of the listed statuses is presumed to apply, but the authoring/source system does not know which.
     */
    observation_status_Unknown: {
        code: "unknown",
        display: "Unknown",
        system: "http://hl7.org/fhir/observation-status"
    }
};
