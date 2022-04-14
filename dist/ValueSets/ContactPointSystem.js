"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPointSystem = void 0;
/**
 * Telecommunications form for contact point.
 */
exports.ContactPointSystem = {
    /**
     * The value is an email address.
     */
    contact_point_system_Email: {
        code: "email",
        display: "Email",
        system: "http://hl7.org/fhir/contact-point-system"
    },
    /**
     * The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    contact_point_system_Fax: {
        code: "fax",
        display: "Fax",
        system: "http://hl7.org/fhir/contact-point-system"
    },
    /**
     * A contact that is not a phone, fax, page or email address and is not expressible as a URL.  E.g. Internal mail address.  This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.)  Extensions may be used to distinguish "other" contact types.
     */
    contact_point_system_Other: {
        code: "other",
        display: "Other",
        system: "http://hl7.org/fhir/contact-point-system"
    },
    /**
     * The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.
     */
    contact_point_system_Pager: {
        code: "pager",
        display: "Pager",
        system: "http://hl7.org/fhir/contact-point-system"
    },
    /**
     * The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
     */
    contact_point_system_Phone: {
        code: "phone",
        display: "Phone",
        system: "http://hl7.org/fhir/contact-point-system"
    },
    /**
     * A contact that can be used for sending an sms message (e.g. mobile phones, some landlines).
     */
    contact_point_system_SMS: {
        code: "sms",
        display: "SMS",
        system: "http://hl7.org/fhir/contact-point-system"
    },
    /**
     * A contact that is not a phone, fax, pager or email address and is expressed as a URL.  This is intended for various institutional or personal contacts including web sites, blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.
     */
    contact_point_system_URL: {
        code: "url",
        display: "URL",
        system: "http://hl7.org/fhir/contact-point-system"
    },
};
//# sourceMappingURL=ContactPointSystem.js.map