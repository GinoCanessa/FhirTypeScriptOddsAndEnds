import { Coding } from '../fhir';
/**
 * Telecommunications form for contact point.
 */
export declare const ContactPointSystemValueSet: {
    /**
     * The value is an email address.
     */
    contact_point_system_Email: Coding;
    /**
     * The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    contact_point_system_Fax: Coding;
    /**
     * A contact that is not a phone, fax, page or email address and is not expressible as a URL.  E.g. Internal mail address.  This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.)  Extensions may be used to distinguish "other" contact types.
     */
    contact_point_system_Other: Coding;
    /**
     * The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.
     */
    contact_point_system_Pager: Coding;
    /**
     * The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    contact_point_system_Phone: Coding;
    /**
     * A contact that can be used for sending an sms message (e.g. mobile phones, some landlines).
     */
    contact_point_system_SMS: Coding;
    /**
     * A contact that is not a phone, fax, pager or email address and is expressed as a URL.  This is intended for various institutional or personal contacts including web sites, blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.
     */
    contact_point_system_URL: Coding;
};
//# sourceMappingURL=ContactPointSystemValueSet.d.ts.map