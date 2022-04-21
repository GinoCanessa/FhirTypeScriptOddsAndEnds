import { Coding } from '../fhir.js';
/**
 * The type of an address (physical / postal).
 */
export declare const AddressTypeValueSet: {
    /**
     * both: An address that is both physical and postal.
     */
    readonly PostalAndPhysical: Coding;
    /**
     * physical: A physical address that can be visited.
     */
    readonly Physical: Coding;
    /**
     * postal: Mailing addresses - PO Boxes and care-of addresses.
     */
    readonly Postal: Coding;
};
/**
 * The type of an address (physical / postal).
 */
export declare type AddressTypeValueSetType = typeof AddressTypeValueSet;
/**
 * The type of an address (physical / postal).
 */
export declare enum AddressTypeValueSetEnum {
    /**
     * both: An address that is both physical and postal.
     */
    PostalAndPhysical = "both",
    /**
     * physical: A physical address that can be visited.
     */
    Physical = "physical",
    /**
     * postal: Mailing addresses - PO Boxes and care-of addresses.
     */
    Postal = "postal"
}
//# sourceMappingURL=AddressTypeValueSet.d.ts.map