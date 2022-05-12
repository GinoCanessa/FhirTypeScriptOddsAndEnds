/**
 * Types of security services used with FHIR.
 */
export declare enum RestfulSecurityServiceValueSetEnum {
    /**
     * Basic: Basic authentication defined in HTTP specification.
     */
    Basic = "Basic",
    /**
     * Certificates: SSL where client must have a certificate registered with the server.
     */
    Certificates = "Certificates",
    /**
     * Kerberos: see http://www.ietf.org/rfc/rfc4120.txt.
     */
    Kerberos = "Kerberos",
    /**
     * NTLM: Microsoft NTLM Authentication.
     */
    NTLM = "NTLM",
    /**
     * OAuth: OAuth (unspecified version see oauth.net).
     */
    OAuth = "OAuth",
    /**
     * SMART-on-FHIR: OAuth2 using SMART-on-FHIR profile (see http://docs.smarthealthit.org/).
     */
    SMARTOnFHIR = "SMART-on-FHIR"
}
//# sourceMappingURL=RestfulSecurityServiceValueSetEnum.d.ts.map