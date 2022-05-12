import { Coding } from '../fhir.js';
/**
 * This value set includes sample Consent Action codes.
 */
export declare const ConsentActionValueSet: {
    /**
     * access: Retrieval without permitting collection, use or disclosure. e.g., no screen-scraping for collection, use or disclosure (view-only access)
     */
    readonly Access: Coding;
    /**
     * collect: Gather retrieved information for storage
     */
    readonly Collect: Coding;
    /**
     * correct: Allow retrieval of a patient's information for the purpose of update or rectify
     */
    readonly AccessAndCorrect: Coding;
    /**
     * disclose: Transfer retrieved information
     */
    readonly Disclose: Coding;
    /**
     * use: Utilize the retrieved information
     */
    readonly Use: Coding;
};
/**
 * This value set includes sample Consent Action codes.
 */
export declare type ConsentActionValueSetType = typeof ConsentActionValueSet;
/**
 * This value set includes sample Consent Action codes.
 */
//# sourceMappingURL=ConsentActionValueSet.d.ts.map