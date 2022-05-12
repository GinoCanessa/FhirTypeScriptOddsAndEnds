// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/payeetype|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set includes sample Payee Type codes.
 */
export const PayeetypeValueSet = {
    /**
     * other: Any benefit payable will be paid to a third party such as a guarrantor.
     */
    Provider: new Coding({
        display: "Provider",
        code: "other",
        system: "http://terminology.hl7.org/CodeSystem/payeetype",
    }),
    /**
     * provider: Any benefit payable will be paid to the provider (Assignment of Benefit).
     */
    ProviderProvider: new Coding({
        display: "Provider",
        code: "provider",
        system: "http://terminology.hl7.org/CodeSystem/payeetype",
    }),
    /**
     * subscriber: The subscriber (policy holder) will be reimbursed.
     */
    Subscriber: new Coding({
        display: "Subscriber",
        code: "subscriber",
        system: "http://terminology.hl7.org/CodeSystem/payeetype",
    }),
};
/**
 * This value set includes sample Payee Type codes.
 */
//# sourceMappingURL=PayeetypeValueSet.js.map