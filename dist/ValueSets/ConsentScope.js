"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsentScope = void 0;
/**
 * This value set includes the four Consent scope codes.
 */
exports.ConsentScope = {
    /**
     * Actions to be taken if they are no longer able to make decisions for themselves
     */
    consent_scope_AdvancedCareDirective: {
        code: "adr",
        display: "Advanced Care Directive",
        system: "http://terminology.hl7.org/CodeSystem/consentscope"
    },
    /**
     * Agreement to collect, access, use or disclose (share) information
     */
    consent_scope_PrivacyConsent: {
        code: "patient-privacy",
        display: "Privacy Consent",
        system: "http://terminology.hl7.org/CodeSystem/consentscope"
    },
    /**
     * Consent to participate in research protocol and information sharing required
     */
    consent_scope_Research: {
        code: "research",
        display: "Research",
        system: "http://terminology.hl7.org/CodeSystem/consentscope"
    },
    /**
     * Consent to undergo a specific treatment
     */
    consent_scope_Treatment: {
        code: "treatment",
        display: "Treatment",
        system: "http://terminology.hl7.org/CodeSystem/consentscope"
    },
};
//# sourceMappingURL=ConsentScope.js.map