// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * The type of network access point of this agent in the audit event.
 */
export const NetworkTypeValueSet = {
  /**
   * The machine name, including DNS name.
   */
  network_type_MachineName: new Coding({
    code: "1",
    display: "Machine Name",
    system: "http://hl7.org/fhir/network-type"
  }),
  /**
   * The assigned Internet Protocol (IP) address.
   */
  network_type_IPAddress: new Coding({
    code: "2",
    display: "IP Address",
    system: "http://hl7.org/fhir/network-type"
  }),
  /**
   * The assigned telephone number.
   */
  network_type_TelephoneNumber: new Coding({
    code: "3",
    display: "Telephone Number",
    system: "http://hl7.org/fhir/network-type"
  }),
  /**
   * The assigned email address.
   */
  network_type_EmailAddress: new Coding({
    code: "4",
    display: "Email address",
    system: "http://hl7.org/fhir/network-type"
  }),
  /**
   * URI (User directory, HTTP-PUT, ftp, etc.).
   */
  network_type_URI: new Coding({
    code: "5",
    display: "URI",
    system: "http://hl7.org/fhir/network-type"
  }),
};
