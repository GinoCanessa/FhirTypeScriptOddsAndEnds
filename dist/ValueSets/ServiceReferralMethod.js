"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceReferralMethod = void 0;
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
exports.ServiceReferralMethod = {
    /**
     * Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages.
     */
    service_referral_method_SecureMessaging: {
        code: "elec",
        display: "Secure Messaging",
        system: "http://terminology.hl7.org/CodeSystem/service-referral-method"
    },
    /**
     * Referrals may be accepted by fax.
     */
    service_referral_method_Fax: {
        code: "fax",
        display: "Fax",
        system: "http://terminology.hl7.org/CodeSystem/service-referral-method"
    },
    /**
     * Referrals may be accepted via regular postage (or hand delivered).
     */
    service_referral_method_Mail: {
        code: "mail",
        display: "Mail",
        system: "http://terminology.hl7.org/CodeSystem/service-referral-method"
    },
    /**
     * Referrals may be accepted over the phone from a practitioner.
     */
    service_referral_method_Phone: {
        code: "phone",
        display: "Phone",
        system: "http://terminology.hl7.org/CodeSystem/service-referral-method"
    },
    /**
     * Referrals may be accepted via a secure email. To send please encrypt with the services public key.
     */
    service_referral_method_SecureEmail: {
        code: "semail",
        display: "Secure Email",
        system: "http://terminology.hl7.org/CodeSystem/service-referral-method"
    },
};
//# sourceMappingURL=ServiceReferralMethod.js.map