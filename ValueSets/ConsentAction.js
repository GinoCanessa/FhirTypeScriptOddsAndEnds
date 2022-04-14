"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentAction = void 0;
/**
 * This value set includes sample Consent Action codes.
 */
exports.ConsentAction = {
    /**
     * Retrieval without permitting collection, use or disclosure. e.g., no screen-scraping for collection, use or disclosure (view-only access)
     */
    consent_action_Access: {
        code: "access",
        display: "Access",
        system: "http://terminology.hl7.org/CodeSystem/consentaction"
    },
    /**
     * Gather retrieved information for storage
     */
    consent_action_Collect: {
        code: "collect",
        display: "Collect",
        system: "http://terminology.hl7.org/CodeSystem/consentaction"
    },
    /**
     * Allow retrieval of a patient's information for the purpose of update or rectify
     */
    consent_action_AccessAndCorrect: {
        code: "correct",
        display: "Access and Correct",
        system: "http://terminology.hl7.org/CodeSystem/consentaction"
    },
    /**
     * Transfer retrieved information
     */
    consent_action_Disclose: {
        code: "disclose",
        display: "Disclose",
        system: "http://terminology.hl7.org/CodeSystem/consentaction"
    },
    /**
     * Utilize the retrieved information
     */
    consent_action_Use: {
        code: "use",
        display: "Use",
        system: "http://terminology.hl7.org/CodeSystem/consentaction"
    },
};
//# sourceMappingURL=ConsentAction.js.map