// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The type of an address (physical / postal).
 */
export const AddressTypeValueSet = {
    /**
     * An address that is both physical and postal.
     */
    address_type_PostalAndPhysical: Coding.FromStrict({
        code: "both",
        display: "Postal & Physical",
        system: "http://hl7.org/fhir/address-type"
    }),
    /**
     * A physical address that can be visited.
     */
    address_type_Physical: Coding.FromStrict({
        code: "physical",
        display: "Physical",
        system: "http://hl7.org/fhir/address-type"
    }),
    /**
     * Mailing addresses - PO Boxes and care-of addresses.
     */
    address_type_Postal: Coding.FromStrict({
        code: "postal",
        display: "Postal",
        system: "http://hl7.org/fhir/address-type"
    }),
};
//# sourceMappingURL=AddressTypeValueSet.js.map