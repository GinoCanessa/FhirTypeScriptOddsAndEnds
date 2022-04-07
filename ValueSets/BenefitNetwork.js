/**
 * This value set includes a smattering of Network type codes.
 */
export var BenefitNetwork = {
    /**
     * Services rendered by a Network provider
     */
    benefit_network_InNetwork: {
        code: "in",
        display: "In Network",
        system: "http://terminology.hl7.org/CodeSystem/benefit-network"
    },
    /**
     * Services rendered by a provider who is not in the Network
     */
    benefit_network_OutOfNetwork: {
        code: "out",
        display: "Out of Network",
        system: "http://terminology.hl7.org/CodeSystem/benefit-network"
    }
};
