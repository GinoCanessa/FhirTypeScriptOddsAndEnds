/**
 * Codes indicating the kind of the price component.
 */
export declare enum InvoicePriceComponentTypeValueSetEnum {
    /**
     * base: the amount is the base price used for calculating the total price before applying surcharges, discount or taxes.
     */
    BasePrice = "base",
    /**
     * deduction: the amount is a deduction applied on the base price.
     */
    Deduction = "deduction",
    /**
     * discount: the amount is a discount applied on the base price.
     */
    Discount = "discount",
    /**
     * informational: the amount is of informational character, it has not been applied in the calculation of the total price.
     */
    Informational = "informational",
    /**
     * surcharge: the amount is a surcharge applied on the base price.
     */
    Surcharge = "surcharge",
    /**
     * tax: the amount is the tax component of the total price.
     */
    Tax = "tax"
}
//# sourceMappingURL=InvoicePriceComponentTypeValueSetEnum.d.ts.map