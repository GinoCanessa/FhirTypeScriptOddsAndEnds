import { Coding } from '../fhir';
/**
 * Codes indicating the kind of the price component.
 */
export declare const InvoicePriceComponentTypeValueSet: {
    /**
     * the amount is the base price used for calculating the total price before applying surcharges, discount or taxes.
     */
    invoice_priceComponentType_BasePrice: Coding;
    /**
     * the amount is a deduction applied on the base price.
     */
    invoice_priceComponentType_Deduction: Coding;
    /**
     * the amount is a discount applied on the base price.
     */
    invoice_priceComponentType_Discount: Coding;
    /**
     * the amount is of informational character, it has not been applied in the calculation of the total price.
     */
    invoice_priceComponentType_Informational: Coding;
    /**
     * the amount is a surcharge applied on the base price.
     */
    invoice_priceComponentType_Surcharge: Coding;
    /**
     * the amount is the tax component of the total price.
     */
    invoice_priceComponentType_Tax: Coding;
};
//# sourceMappingURL=InvoicePriceComponentTypeValueSet.d.ts.map