/**
 * The type of an address (physical / postal).
 */
export var AddressType = {
    /**
     * An address that is both physical and postal.
     */
    address_type_PostalAndPhysical: {
        code: "both",
        display: "Postal & Physical",
        system: "http://hl7.org/fhir/address-type"
    },
    /**
     * A physical address that can be visited.
     */
    address_type_Physical: {
        code: "physical",
        display: "Physical",
        system: "http://hl7.org/fhir/address-type"
    },
    /**
     * Mailing addresses - PO Boxes and care-of addresses.
     */
    address_type_Postal: {
        code: "postal",
        display: "Postal",
        system: "http://hl7.org/fhir/address-type"
    }
};
