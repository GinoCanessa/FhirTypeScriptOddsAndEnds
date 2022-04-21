// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/supplydelivery-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value sets refers to a specific supply item.
 */
export const SupplydeliveryTypeValueSet = {
    /**
     * device: What is supplied (or requested) is a device.
     */
    Device: new Coding({
        display: "Device",
        code: "device",
        system: "http://terminology.hl7.org/CodeSystem/supply-item-type",
    }),
    /**
     * medication: Supply is a kind of medication.
     */
    Medication: new Coding({
        display: "Medication",
        code: "medication",
        system: "http://terminology.hl7.org/CodeSystem/supply-item-type",
    }),
};
/**
 * This value sets refers to a specific supply item.
 */
export var SupplydeliveryTypeValueSetEnum;
(function (SupplydeliveryTypeValueSetEnum) {
    /**
     * device: What is supplied (or requested) is a device.
     */
    SupplydeliveryTypeValueSetEnum["Device"] = "device";
    /**
     * medication: Supply is a kind of medication.
     */
    SupplydeliveryTypeValueSetEnum["Medication"] = "medication";
})(SupplydeliveryTypeValueSetEnum || (SupplydeliveryTypeValueSetEnum = {}));
//# sourceMappingURL=SupplydeliveryTypeValueSet.js.map