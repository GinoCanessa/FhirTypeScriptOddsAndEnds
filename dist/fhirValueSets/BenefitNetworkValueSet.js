// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set includes a smattering of Network type codes.
 */
export const BenefitNetworkValueSet = {
    /**
     * Services rendered by a Network provider
     */
    benefit_network_InNetwork: Coding.FromStrict({
        code: "in",
        display: "In Network",
        system: "http://terminology.hl7.org/CodeSystem/benefit-network"
    }),
    /**
     * Services rendered by a provider who is not in the Network
     */
    benefit_network_OutOfNetwork: Coding.FromStrict({
        code: "out",
        display: "Out of Network",
        system: "http://terminology.hl7.org/CodeSystem/benefit-network"
    }),
};
//# sourceMappingURL=BenefitNetworkValueSet.js.map