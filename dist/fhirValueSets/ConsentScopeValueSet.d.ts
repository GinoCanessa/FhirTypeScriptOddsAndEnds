import { Coding } from '../fhir.js';
/**
 * This value set includes the four Consent scope codes.
 */
export declare const ConsentScopeValueSet: {
    /**
     * adr: Actions to be taken if they are no longer able to make decisions for themselves
     */
    readonly AdvancedCareDirective: Coding;
    /**
     * patient-privacy: Agreement to collect, access, use or disclose (share) information
     */
    readonly PrivacyConsent: Coding;
    /**
     * research: Consent to participate in research protocol and information sharing required
     */
    readonly Research: Coding;
    /**
     * treatment: Consent to undergo a specific treatment
     */
    readonly Treatment: Coding;
};
/**
 * This value set includes the four Consent scope codes.
 */
export declare type ConsentScopeValueSetType = typeof ConsentScopeValueSet;
/**
 * This value set includes the four Consent scope codes.
 */
export declare enum ConsentScopeValueSetEnum {
    /**
     * adr: Actions to be taken if they are no longer able to make decisions for themselves
     */
    AdvancedCareDirective = "adr",
    /**
     * patient-privacy: Agreement to collect, access, use or disclose (share) information
     */
    PrivacyConsent = "patient-privacy",
    /**
     * research: Consent to participate in research protocol and information sharing required
     */
    Research = "research",
    /**
     * treatment: Consent to undergo a specific treatment
     */
    Treatment = "treatment"
}
//# sourceMappingURL=ConsentScopeValueSet.d.ts.map