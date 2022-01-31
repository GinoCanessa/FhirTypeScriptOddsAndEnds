// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
  // Primitive Naming Style: None
  // Complex Type / Resource Naming Style: PascalCase
  // Interaction Naming Style: None
  // Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../strictmodels'
/**
 * Types of security services used with FHIR.
 */
export const RestfulSecurityService = {
  /**
   * Basic authentication defined in HTTP specification.
   */
  restful_security_service_Basic: {
    code: "Basic",
    display: "Basic",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  } as Coding,
  /**
   * SSL where client must have a certificate registered with the server.
   */
  restful_security_service_Certificates: {
    code: "Certificates",
    display: "Certificates",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  } as Coding,
  /**
   * see http://www.ietf.org/rfc/rfc4120.txt.
   */
  restful_security_service_Kerberos: {
    code: "Kerberos",
    display: "Kerberos",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  } as Coding,
  /**
   * Microsoft NTLM Authentication.
   */
  restful_security_service_NTLM: {
    code: "NTLM",
    display: "NTLM",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  } as Coding,
  /**
   * OAuth (unspecified version see oauth.net).
   */
  restful_security_service_OAuth: {
    code: "OAuth",
    display: "OAuth",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  } as Coding,
  /**
   * OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).
   */
  restful_security_service_SMARTOnFHIR: {
    code: "SMART-on-FHIR",
    display: "SMART-on-FHIR",
    system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
  } as Coding,
};
