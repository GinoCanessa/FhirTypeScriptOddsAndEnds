/**
 * This value sets refers to a specific supply item.
 */
export var SupplydeliveryType = {
    /**
     * What is supplied (or requested) is a device.
     */
    supplydelivery_type_Device: {
        code: "device",
        display: "Device",
        system: "http://terminology.hl7.org/CodeSystem/supply-item-type"
    },
    /**
     * Supply is a kind of medication.
     */
    supplydelivery_type_Medication: {
        code: "medication",
        display: "Medication",
        system: "http://terminology.hl7.org/CodeSystem/supply-item-type"
    }
};
