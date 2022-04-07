/**
 * Codes indicating the kind of the price component.
 */
export var InvoicePriceComponentType = {
    /**
     * the amount is the base price used for calculating the total price before applying surcharges, discount or taxes.
     */
    invoice_priceComponentType_BasePrice: {
        code: "base",
        display: "base price",
        system: "http://hl7.org/fhir/invoice-priceComponentType"
    },
    /**
     * the amount is a deduction applied on the base price.
     */
    invoice_priceComponentType_Deduction: {
        code: "deduction",
        display: "deduction",
        system: "http://hl7.org/fhir/invoice-priceComponentType"
    },
    /**
     * the amount is a discount applied on the base price.
     */
    invoice_priceComponentType_Discount: {
        code: "discount",
        display: "discount",
        system: "http://hl7.org/fhir/invoice-priceComponentType"
    },
    /**
     * the amount is of informational character, it has not been applied in the calculation of the total price.
     */
    invoice_priceComponentType_Informational: {
        code: "informational",
        display: "informational",
        system: "http://hl7.org/fhir/invoice-priceComponentType"
    },
    /**
     * the amount is a surcharge applied on the base price.
     */
    invoice_priceComponentType_Surcharge: {
        code: "surcharge",
        display: "surcharge",
        system: "http://hl7.org/fhir/invoice-priceComponentType"
    },
    /**
     * the amount is the tax component of the total price.
     */
    invoice_priceComponentType_Tax: {
        code: "tax",
        display: "tax",
        system: "http://hl7.org/fhir/invoice-priceComponentType"
    }
};
