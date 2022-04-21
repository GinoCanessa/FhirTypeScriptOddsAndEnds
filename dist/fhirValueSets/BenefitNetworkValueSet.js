// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/benefit-network|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set includes a smattering of Network type codes.
 */
export const BenefitNetworkValueSet = {
    /**
     * in: Services rendered by a Network provider
     */
    InNetwork: new Coding({
        display: "In Network",
        code: "in",
        system: "http://terminology.hl7.org/CodeSystem/benefit-network",
    }),
    /**
     * out: Services rendered by a provider who is not in the Network
     */
    OutOfNetwork: new Coding({
        display: "Out of Network",
        code: "out",
        system: "http://terminology.hl7.org/CodeSystem/benefit-network",
    }),
};
/**
 * This value set includes a smattering of Network type codes.
 */
export var BenefitNetworkValueSetEnum;
(function (BenefitNetworkValueSetEnum) {
    /**
     * in: Services rendered by a Network provider
     */
    BenefitNetworkValueSetEnum["InNetwork"] = "in";
    /**
     * out: Services rendered by a provider who is not in the Network
     */
    BenefitNetworkValueSetEnum["OutOfNetwork"] = "out";
})(BenefitNetworkValueSetEnum || (BenefitNetworkValueSetEnum = {}));
//# sourceMappingURL=BenefitNetworkValueSet.js.map