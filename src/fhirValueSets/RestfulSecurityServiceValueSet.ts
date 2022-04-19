// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir'
/**
 * Types of security services used with FHIR.
 */
export const RestfulSecurityServiceValueSet = {
  /**
   * Basic authentication defined in HTTP specification.
   */
  restful_security_service_Basic: new Coding({
    code: "Basic",
    display: "Basic",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  }),
  /**
   * SSL where client must have a certificate registered with the server.
   */
  restful_security_service_Certificates: new Coding({
    code: "Certificates",
    display: "Certificates",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  }),
  /**
   * see http://www.ietf.org/rfc/rfc4120.txt.
   */
  restful_security_service_Kerberos: new Coding({
    code: "Kerberos",
    display: "Kerberos",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  }),
  /**
   * Microsoft NTLM Authentication.
   */
  restful_security_service_NTLM: new Coding({
    code: "NTLM",
    display: "NTLM",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  }),
  /**
   * OAuth (unspecified version see oauth.net).
   */
  restful_security_service_OAuth: new Coding({
    code: "OAuth",
    display: "OAuth",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  }),
  /**
   * OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).
   */
  restful_security_service_SMARTOnFHIR: new Coding({
    code: "SMART-on-FHIR",
    display: "SMART-on-FHIR",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  }),
};
