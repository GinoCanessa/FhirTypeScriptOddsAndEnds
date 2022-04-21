import { Coding } from '../fhir.js';
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export declare const ServiceReferralMethodValueSet: {
    /**
     * elec: Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages.
     */
    readonly SecureMessaging: Coding;
    /**
     * fax: Referrals may be accepted by fax.
     */
    readonly Fax: Coding;
    /**
     * mail: Referrals may be accepted via regular postage (or hand delivered).
     */
    readonly Mail: Coding;
    /**
     * phone: Referrals may be accepted over the phone from a practitioner.
     */
    readonly Phone: Coding;
    /**
     * semail: Referrals may be accepted via a secure email. To send please encrypt with the services public key.
     */
    readonly SecureEmail: Coding;
};
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export declare type ServiceReferralMethodValueSetType = typeof ServiceReferralMethodValueSet;
/**
 * The methods of referral can be used when referring to a specific HealthCareService resource.
 */
export declare enum ServiceReferralMethodValueSetEnum {
    /**
     * elec: Referrals may be accepted via a secure messaging system. To determine the types of secure messaging systems supported, refer to the identifiers collection. Callers will need to understand the specific identifier system used to know that they are able to transmit messages.
     */
    SecureMessaging = "elec",
    /**
     * fax: Referrals may be accepted by fax.
     */
    Fax = "fax",
    /**
     * mail: Referrals may be accepted via regular postage (or hand delivered).
     */
    Mail = "mail",
    /**
     * phone: Referrals may be accepted over the phone from a practitioner.
     */
    Phone = "phone",
    /**
     * semail: Referrals may be accepted via a secure email. To send please encrypt with the services public key.
     */
    SecureEmail = "semail"
}
//# sourceMappingURL=ServiceReferralMethodValueSet.d.ts.map