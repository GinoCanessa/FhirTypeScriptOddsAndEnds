"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialValues = void 0;
/**
 * A set of generally useful codes defined so they can be included in value sets.
 */
exports.SpecialValues = {
    /**
     * Boolean false.
     */
    special_values_False: {
        code: "false",
        display: "false",
        system: "http://terminology.hl7.org/CodeSystem/special-values"
    },
    /**
     * The are no known applicable values in this context.
     */
    special_values_NilKnown: {
        code: "nil-known",
        display: "Nil Known",
        system: "http://terminology.hl7.org/CodeSystem/special-values"
    },
    /**
     * The specific quantity is not known, but is known to be non-zero and is not specified because it makes up the bulk of the material.
     */
    special_values_SufficientQuantity: {
        code: "sufficient",
        display: "Sufficient Quantity",
        system: "http://terminology.hl7.org/CodeSystem/special-values"
    },
    /**
     * The content is greater than zero, but too small to be quantified.
     */
    special_values_TraceAmountDetected: {
        code: "trace",
        display: "Trace Amount Detected",
        system: "http://terminology.hl7.org/CodeSystem/special-values"
    },
    /**
     * Boolean true.
     */
    special_values_True: {
        code: "true",
        display: "true",
        system: "http://terminology.hl7.org/CodeSystem/special-values"
    },
    /**
     * The value is no longer available.
     */
    special_values_ValueWithdrawn: {
        code: "withdrawn",
        display: "Value Withdrawn",
        system: "http://terminology.hl7.org/CodeSystem/special-values"
    },
};
//# sourceMappingURL=SpecialValues.js.map