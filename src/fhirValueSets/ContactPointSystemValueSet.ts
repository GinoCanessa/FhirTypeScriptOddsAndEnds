// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contact-point-system|4.0.1

import { Coding } from '../fhir.js'

/**
 * Telecommunications form for contact point.
 */
export const ContactPointSystemValueSet = {
  /**
   * email: The value is an email address.
   */
  Email: new Coding({
    display: "Email",
    code: "email",
    system: "http://hl7.org/fhir/contact-point-system",
  }),
  /**
   * fax: The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
   */
  Fax: new Coding({
    display: "Fax",
    code: "fax",
    system: "http://hl7.org/fhir/contact-point-system",
  }),
  /**
   * other: A contact that is not a phone, fax, page or email address and is not expressible as a URL.  E.g. Internal mail address.  This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.)  Extensions may be used to distinguish "other" contact types.
   */
  Other: new Coding({
    display: "Other",
    code: "other",
    system: "http://hl7.org/fhir/contact-point-system",
  }),
  /**
   * pager: The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.
   */
  Pager: new Coding({
    display: "Pager",
    code: "pager",
    system: "http://hl7.org/fhir/contact-point-system",
  }),
  /**
   * phone: The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
   */
  Phone: new Coding({
    display: "Phone",
    code: "phone",
    system: "http://hl7.org/fhir/contact-point-system",
  }),
  /**
   * sms: A contact that can be used for sending an sms message (e.g. mobile phones, some landlines).
   */
  SMS: new Coding({
    display: "SMS",
    code: "sms",
    system: "http://hl7.org/fhir/contact-point-system",
  }),
  /**
   * url: A contact that is not a phone, fax, pager or email address and is expressed as a URL.  This is intended for various institutional or personal contacts including web sites, blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.
   */
  URL: new Coding({
    display: "URL",
    code: "url",
    system: "http://hl7.org/fhir/contact-point-system",
  }),
} as const;

/**
 * Telecommunications form for contact point.
 */
export type ContactPointSystemValueSetType = typeof ContactPointSystemValueSet;

/**
 * Telecommunications form for contact point.
 */
export enum ContactPointSystemValueSetEnum {
  /**
   * email: The value is an email address.
   */
  Email = "email",
  /**
   * fax: The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
   */
  Fax = "fax",
  /**
   * other: A contact that is not a phone, fax, page or email address and is not expressible as a URL.  E.g. Internal mail address.  This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.)  Extensions may be used to distinguish "other" contact types.
   */
  Other = "other",
  /**
   * pager: The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.
   */
  Pager = "pager",
  /**
   * phone: The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
   */
  Phone = "phone",
  /**
   * sms: A contact that can be used for sending an sms message (e.g. mobile phones, some landlines).
   */
  SMS = "sms",
  /**
   * url: A contact that is not a phone, fax, pager or email address and is expressed as a URL.  This is intended for various institutional or personal contacts including web sites, blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.
   */
  URL = "url",
}
