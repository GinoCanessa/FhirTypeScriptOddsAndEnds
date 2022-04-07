/**
 * The kind of operation to perform as a part of a property based filter.
 */
export var FilterOperator = {
    /**
     * The specified property of the code equals the provided value.
     */
    filter_operator_Equals: {
        code: "=",
        display: "Equals",
        system: "http://hl7.org/fhir/filter-operator"
    },
    /**
     * Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, excluding the provided concept itself i.e. include descendant codes only).
     */
    filter_operator_DescendentOfBySubsumption: {
        code: "descendent-of",
        display: "Descendent Of (by subsumption)",
        system: "http://hl7.org/fhir/filter-operator"
    },
    /**
     * The specified property of the code has at least one value (if the specified value is true; if the specified value is false, then matches when the specified property of the code has no values).
     */
    filter_operator_Exists: {
        code: "exists",
        display: "Exists",
        system: "http://hl7.org/fhir/filter-operator"
    },
    /**
     * Includes all concept ids that have a transitive is-a relationship from the concept Id provided as the value, including the provided concept itself (i.e. include ancestor codes and self).
     */
    filter_operator_GeneralizesBySubsumption: {
        code: "generalizes",
        display: "Generalizes (by Subsumption)",
        system: "http://hl7.org/fhir/filter-operator"
    },
    /**
     * The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).
     */
    filter_operator_InSet: {
        code: "in",
        display: "In Set",
        system: "http://hl7.org/fhir/filter-operator"
    },
    /**
     * Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself (include descendant codes and self).
     */
    filter_operator_IsABySubsumption: {
        code: "is-a",
        display: "Is A (by subsumption)",
        system: "http://hl7.org/fhir/filter-operator"
    },
    /**
     * The specified property of the code does not have an is-a relationship with the provided value.
     */
    filter_operator_NotIsABySubsumption: {
        code: "is-not-a",
        display: "Not (Is A) (by subsumption)",
        system: "http://hl7.org/fhir/filter-operator"
    },
    /**
     * The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).
     */
    filter_operator_NotInSet: {
        code: "not-in",
        display: "Not in Set",
        system: "http://hl7.org/fhir/filter-operator"
    },
    /**
     * The specified property of the code  matches the regex specified in the provided value.
     */
    filter_operator_RegularExpression: {
        code: "regex",
        display: "Regular Expression",
        system: "http://hl7.org/fhir/filter-operator"
    }
};
