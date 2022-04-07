/**
 * Biologically Derived Product Status.
 */
export var ProductStatus = {
    /**
     * Product is currently available for use.
     */
    product_status_Available: {
        code: "available",
        display: "Available",
        system: "http://hl7.org/fhir/product-status"
    },
    /**
     * Product is not currently available for use.
     */
    product_status_Unavailable: {
        code: "unavailable",
        display: "Unavailable",
        system: "http://hl7.org/fhir/product-status"
    }
};
