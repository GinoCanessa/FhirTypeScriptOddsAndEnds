import { Coding } from '../strictmodels';
/**
 * Attested information may be validated by process that are manual or automated. For automated processes it may accomplished by the system of record reaching out through another system's API or information may be sent to the system of record. This value set defines a set of codes to describing the process, the how, a resource or data element is validated.
 */
export declare const VerificationresultCommunicationMethod: {
    /**
     * The information is submitted/retrieved manually (e.g. by phone, fax, paper-based)
     */
    verificationresult_communication_method_Manual: Coding;
    /**
     * The information is submitted/retrieved via a portal
     */
    verificationresult_communication_method_Portal: Coding;
    /**
     * The information is retrieved (i.e. pulled) from a source (e.g. over an API)
     */
    verificationresult_communication_method_Pull: Coding;
    /**
     * The information is sent (i.e. pushed) from a source (e.g. over an API, asynchronously, secure messaging)
     */
    verificationresult_communication_method_Push: Coding;
};
//# sourceMappingURL=VerificationresultCommunicationMethod.d.ts.map