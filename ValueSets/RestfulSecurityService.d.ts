import { Coding } from '../strictmodels';
/**
 * Types of security services used with FHIR.
 */
export declare const RestfulSecurityService: {
    /**
     * Basic authentication defined in HTTP specification.
     */
    restful_security_service_Basic: Coding;
    /**
     * SSL where client must have a certificate registered with the server.
     */
    restful_security_service_Certificates: Coding;
    /**
     * see http://www.ietf.org/rfc/rfc4120.txt.
     */
    restful_security_service_Kerberos: Coding;
    /**
     * Microsoft NTLM Authentication.
     */
    restful_security_service_NTLM: Coding;
    /**
     * OAuth (unspecified version see oauth.net).
     */
    restful_security_service_OAuth: Coding;
    /**
     * OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).
     */
    restful_security_service_SMARTOnFHIR: Coding;
};
//# sourceMappingURL=RestfulSecurityService.d.ts.map