"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssertOperatorCodes = void 0;
/**
 * The type of operator to use for assertion.
 */
exports.AssertOperatorCodes = {
    /**
     * Compare value string contains a known value.
     */
    assert_operator_codes_Contains: {
        code: "contains",
        display: "contains",
        system: "http://hl7.org/fhir/assert-operator-codes"
    },
    /**
     * Compare value is empty.
     */
    assert_operator_codes_Empty: {
        code: "empty",
        display: "empty",
        system: "http://hl7.org/fhir/assert-operator-codes"
    },
    /**
     * Default value. Equals comparison.
     */
    assert_operator_codes_Equals: {
        code: "equals",
        display: "equals",
        system: "http://hl7.org/fhir/assert-operator-codes"
    },
    /**
     * Evaluate the FHIRPath expression as a boolean condition.
     */
    assert_operator_codes_Evaluate: {
        code: "eval",
        display: "evaluate",
        system: "http://hl7.org/fhir/assert-operator-codes"
    },
    /**
     * Compare value to be greater than a known value.
     */
    assert_operator_codes_GreaterThan: {
        code: "greaterThan",
        display: "greaterThan",
        system: "http://hl7.org/fhir/assert-operator-codes"
    },
    /**
     * Compare value within a known set of values.
     */
    assert_operator_codes_In: {
        code: "in",
        display: "in",
        system: "http://hl7.org/fhir/assert-operator-codes"
    },
    /**
     * Compare value to be less than a known value.
     */
    assert_operator_codes_LessThan: {
        code: "lessThan",
        display: "lessThan",
        system: "http://hl7.org/fhir/assert-operator-codes"
    },
    /**
     * Compare value string does not contain a known value.
     */
    assert_operator_codes_NotContains: {
        code: "notContains",
        display: "notContains",
        system: "http://hl7.org/fhir/assert-operator-codes"
    },
    /**
     * Compare value is not empty.
     */
    assert_operator_codes_NotEmpty: {
        code: "notEmpty",
        display: "notEmpty",
        system: "http://hl7.org/fhir/assert-operator-codes"
    },
    /**
     * Not equals comparison.
     */
    assert_operator_codes_NotEquals: {
        code: "notEquals",
        display: "notEquals",
        system: "http://hl7.org/fhir/assert-operator-codes"
    },
    /**
     * Compare value not within a known set of values.
     */
    assert_operator_codes_NotIn: {
        code: "notIn",
        display: "notIn",
        system: "http://hl7.org/fhir/assert-operator-codes"
    },
};
//# sourceMappingURL=AssertOperatorCodes.js.map