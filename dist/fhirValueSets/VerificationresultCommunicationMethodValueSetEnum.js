// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/verificationresult-communication-method|4.0.1
/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 */
export var VerificationresultCommunicationMethodValueSetEnum;
(function (VerificationresultCommunicationMethodValueSetEnum) {
    /**
     * manual: The information is submitted/retrieved manually (e.g. by phone, fax, paper-based)
     */
    VerificationresultCommunicationMethodValueSetEnum["Manual"] = "manual";
    /**
     * portal: The information is submitted/retrieved via a portal
     */
    VerificationresultCommunicationMethodValueSetEnum["Portal"] = "portal";
    /**
     * pull: The information is retrieved (i.e. pulled) from a source (e.g. over an API)
     */
    VerificationresultCommunicationMethodValueSetEnum["Pull"] = "pull";
    /**
     * push: The information is sent (i.e. pushed) from a source (e.g. over an API, asynchronously, secure messaging)
     */
    VerificationresultCommunicationMethodValueSetEnum["Push"] = "push";
})(VerificationresultCommunicationMethodValueSetEnum || (VerificationresultCommunicationMethodValueSetEnum = {}));
//# sourceMappingURL=VerificationresultCommunicationMethodValueSetEnum.js.map