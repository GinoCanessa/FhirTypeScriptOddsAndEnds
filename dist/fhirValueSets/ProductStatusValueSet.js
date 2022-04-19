// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Biologically Derived Product Status.
 */
export const ProductStatusValueSet = {
    /**
     * Product is currently available for use.
     */
    product_status_Available: new Coding({
        code: "available",
        display: "Available",
        system: "http://hl7.org/fhir/product-status"
    }),
    /**
     * Product is not currently available for use.
     */
    product_status_Unavailable: new Coding({
        code: "unavailable",
        display: "Unavailable",
        system: "http://hl7.org/fhir/product-status"
    }),
};
//# sourceMappingURL=ProductStatusValueSet.js.map