/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 */
export var VariableType = {
    /**
     * The variable is a continuous result such as a quantity.
     */
    variable_type_Continuous: {
        code: "continuous",
        display: "Continuous",
        system: "http://hl7.org/fhir/variable-type"
    },
    /**
     * The variable is described narratively rather than quantitatively.
     */
    variable_type_Descriptive: {
        code: "descriptive",
        display: "Descriptive",
        system: "http://hl7.org/fhir/variable-type"
    },
    /**
     * The variable is dichotomous, such as present or absent.
     */
    variable_type_Dichotomous: {
        code: "dichotomous",
        display: "Dichotomous",
        system: "http://hl7.org/fhir/variable-type"
    }
};
