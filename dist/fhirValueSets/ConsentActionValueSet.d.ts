import { Coding } from '../fhir';
/**
 * This value set includes sample Consent Action codes.
 */
export declare const ConsentActionValueSet: {
    /**
     * Retrieval without permitting collection, use or disclosure. e.g., no screen-scraping for collection, use or disclosure (view-only access)
     */
    consent_action_Access: Coding;
    /**
     * Gather retrieved information for storage
     */
    consent_action_Collect: Coding;
    /**
     * Allow retrieval of a patient's information for the purpose of update or rectify
     */
    consent_action_AccessAndCorrect: Coding;
    /**
     * Transfer retrieved information
     */
    consent_action_Disclose: Coding;
    /**
     * Utilize the retrieved information
     */
    consent_action_Use: Coding;
};
//# sourceMappingURL=ConsentActionValueSet.d.ts.map