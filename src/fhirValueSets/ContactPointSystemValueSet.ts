// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Telecommunications form for contact point.
 */
export const ContactPointSystemValueSet = {
  /**
   * The value is an email address.
   */
  contact_point_system_Email: Coding.FromStrict({
    code: "email",
    display: "Email",
    system: "http://hl7.org/fhir/contact-point-system"
  }),
  /**
   * The value is a fax machine. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
   */
  contact_point_system_Fax: Coding.FromStrict({
    code: "fax",
    display: "Fax",
    system: "http://hl7.org/fhir/contact-point-system"
  }),
  /**
   * A contact that is not a phone, fax, page or email address and is not expressible as a URL.  E.g. Internal mail address.  This SHOULD NOT be used for contacts that are expressible as a URL (e.g. Skype, Twitter, Facebook, etc.)  Extensions may be used to distinguish "other" contact types.
   */
  contact_point_system_Other: Coding.FromStrict({
    code: "other",
    display: "Other",
    system: "http://hl7.org/fhir/contact-point-system"
  }),
  /**
   * The value is a pager number. These may be local pager numbers that are only usable on a particular pager system.
   */
  contact_point_system_Pager: Coding.FromStrict({
    code: "pager",
    display: "Pager",
    system: "http://hl7.org/fhir/contact-point-system"
  }),
  /**
   * The value is a telephone number used for voice calls. Use of full international numbers starting with + is recommended to enable automatic dialing support but not required.
   */
  contact_point_system_Phone: Coding.FromStrict({
    code: "phone",
    display: "Phone",
    system: "http://hl7.org/fhir/contact-point-system"
  }),
  /**
   * A contact that can be used for sending an sms message (e.g. mobile phones, some landlines).
   */
  contact_point_system_SMS: Coding.FromStrict({
    code: "sms",
    display: "SMS",
    system: "http://hl7.org/fhir/contact-point-system"
  }),
  /**
   * A contact that is not a phone, fax, pager or email address and is expressed as a URL.  This is intended for various institutional or personal contacts including web sites, blogs, Skype, Twitter, Facebook, etc. Do not use for email addresses.
   */
  contact_point_system_URL: Coding.FromStrict({
    code: "url",
    display: "URL",
    system: "http://hl7.org/fhir/contact-point-system"
  }),
};
