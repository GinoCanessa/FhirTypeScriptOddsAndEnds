"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuantityComparator = void 0;
/**
 * How the Quantity should be understood and represented.
 */
exports.QuantityComparator = {
    /**
     * The actual value is less than the given value.
     */
    quantity_comparator_LessThan: {
        code: "<",
        display: "Less than",
        system: "http://hl7.org/fhir/quantity-comparator"
    },
    /**
     * The actual value is less than or equal to the given value.
     */
    quantity_comparator_LessOrEqualTo: {
        code: "<=",
        display: "Less or Equal to",
        system: "http://hl7.org/fhir/quantity-comparator"
    },
    /**
     * The actual value is greater than the given value.
     */
    quantity_comparator_GreaterThan: {
        code: ">",
        display: "Greater than",
        system: "http://hl7.org/fhir/quantity-comparator"
    },
    /**
     * The actual value is greater than or equal to the given value.
     */
    quantity_comparator_GreaterOrEqualTo: {
        code: ">=",
        display: "Greater or Equal to",
        system: "http://hl7.org/fhir/quantity-comparator"
    },
};
//# sourceMappingURL=QuantityComparator.js.map