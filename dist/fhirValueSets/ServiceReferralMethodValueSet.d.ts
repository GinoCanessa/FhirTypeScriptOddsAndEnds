import { Coding } from '../fhir';
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export declare const ServiceReferralMethodValueSet: {
    /**
     * Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages.
     */
    service_referral_method_SecureMessaging: Coding;
    /**
     * Referrals may be accepted by fax.
     */
    service_referral_method_Fax: Coding;
    /**
     * Referrals may be accepted via regular postage (or hand delivered).
     */
    service_referral_method_Mail: Coding;
    /**
     * Referrals may be accepted over the phone from a practitioner.
     */
    service_referral_method_Phone: Coding;
    /**
     * Referrals may be accepted via a secure email. To send please encrypt with the services public key.
     */
    service_referral_method_SecureEmail: Coding;
};
//# sourceMappingURL=ServiceReferralMethodValueSet.d.ts.map