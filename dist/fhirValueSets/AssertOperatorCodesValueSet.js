// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * The type of operator to use for assertion.
 */
export const AssertOperatorCodesValueSet = {
    /**
     * Compare value string contains a known value.
     */
    assert_operator_codes_Contains: Coding.FromStrict({
        code: "contains",
        display: "contains",
        system: "http://hl7.org/fhir/assert-operator-codes"
    }),
    /**
     * Compare value is empty.
     */
    assert_operator_codes_Empty: Coding.FromStrict({
        code: "empty",
        display: "empty",
        system: "http://hl7.org/fhir/assert-operator-codes"
    }),
    /**
     * Default value. Equals comparison.
     */
    assert_operator_codes_Equals: Coding.FromStrict({
        code: "equals",
        display: "equals",
        system: "http://hl7.org/fhir/assert-operator-codes"
    }),
    /**
     * Evaluate the FHIRPath expression as a boolean condition.
     */
    assert_operator_codes_Evaluate: Coding.FromStrict({
        code: "eval",
        display: "evaluate",
        system: "http://hl7.org/fhir/assert-operator-codes"
    }),
    /**
     * Compare value to be greater than a known value.
     */
    assert_operator_codes_GreaterThan: Coding.FromStrict({
        code: "greaterThan",
        display: "greaterThan",
        system: "http://hl7.org/fhir/assert-operator-codes"
    }),
    /**
     * Compare value within a known set of values.
     */
    assert_operator_codes_In: Coding.FromStrict({
        code: "in",
        display: "in",
        system: "http://hl7.org/fhir/assert-operator-codes"
    }),
    /**
     * Compare value to be less than a known value.
     */
    assert_operator_codes_LessThan: Coding.FromStrict({
        code: "lessThan",
        display: "lessThan",
        system: "http://hl7.org/fhir/assert-operator-codes"
    }),
    /**
     * Compare value string does not contain a known value.
     */
    assert_operator_codes_NotContains: Coding.FromStrict({
        code: "notContains",
        display: "notContains",
        system: "http://hl7.org/fhir/assert-operator-codes"
    }),
    /**
     * Compare value is not empty.
     */
    assert_operator_codes_NotEmpty: Coding.FromStrict({
        code: "notEmpty",
        display: "notEmpty",
        system: "http://hl7.org/fhir/assert-operator-codes"
    }),
    /**
     * Not equals comparison.
     */
    assert_operator_codes_NotEquals: Coding.FromStrict({
        code: "notEquals",
        display: "notEquals",
        system: "http://hl7.org/fhir/assert-operator-codes"
    }),
    /**
     * Compare value not within a known set of values.
     */
    assert_operator_codes_NotIn: Coding.FromStrict({
        code: "notIn",
        display: "notIn",
        system: "http://hl7.org/fhir/assert-operator-codes"
    }),
};
//# sourceMappingURL=AssertOperatorCodesValueSet.js.map