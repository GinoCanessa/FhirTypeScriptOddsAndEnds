"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestfulSecurityService = void 0;
/**
 * Types of security services used with FHIR.
 */
exports.RestfulSecurityService = {
    /**
     * Basic authentication defined in HTTP specification.
     */
    restful_security_service_Basic: {
        code: "Basic",
        display: "Basic",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
    },
    /**
     * SSL where client must have a certificate registered with the server.
     */
    restful_security_service_Certificates: {
        code: "Certificates",
        display: "Certificates",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
    },
    /**
     * see http://www.ietf.org/rfc/rfc4120.txt.
     */
    restful_security_service_Kerberos: {
        code: "Kerberos",
        display: "Kerberos",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
    },
    /**
     * Microsoft NTLM Authentication.
     */
    restful_security_service_NTLM: {
        code: "NTLM",
        display: "NTLM",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
    },
    /**
     * OAuth (unspecified version see oauth.net).
     */
    restful_security_service_OAuth: {
        code: "OAuth",
        display: "OAuth",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
    },
    /**
     * OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).
     */
    restful_security_service_SMARTOnFHIR: {
        code: "SMART-on-FHIR",
        display: "SMART-on-FHIR",
        system: "http://terminology.hl7.org/CodeSystem/restful-security-service"
    },
};
//# sourceMappingURL=RestfulSecurityService.js.map