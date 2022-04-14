"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchComparator = void 0;
/**
 * What Search Comparator Codes are supported in search.
 */
exports.SearchComparator = {
    /**
     * the value for the parameter in the resource is approximately the same to the provided value.
     */
    search_comparator_Approximately: {
        code: "ap",
        display: "Approximately",
        system: "http://hl7.org/fhir/search-comparator"
    },
    /**
     * the value for the parameter in the resource ends before the provided value.
     */
    search_comparator_EndsBefore: {
        code: "eb",
        display: "Ends Before",
        system: "http://hl7.org/fhir/search-comparator"
    },
    /**
     * the value for the parameter in the resource is equal to the provided value.
     */
    search_comparator_Equals: {
        code: "eq",
        display: "Equals",
        system: "http://hl7.org/fhir/search-comparator"
    },
    /**
     * the value for the parameter in the resource is greater or equal to the provided value.
     */
    search_comparator_GreaterOrEquals: {
        code: "ge",
        display: "Greater or Equals",
        system: "http://hl7.org/fhir/search-comparator"
    },
    /**
     * the value for the parameter in the resource is greater than the provided value.
     */
    search_comparator_GreaterThan: {
        code: "gt",
        display: "Greater Than",
        system: "http://hl7.org/fhir/search-comparator"
    },
    /**
     * the value for the parameter in the resource is less or equal to the provided value.
     */
    search_comparator_LessOfEqual: {
        code: "le",
        display: "Less of Equal",
        system: "http://hl7.org/fhir/search-comparator"
    },
    /**
     * the value for the parameter in the resource is less than the provided value.
     */
    search_comparator_LessThan: {
        code: "lt",
        display: "Less Than",
        system: "http://hl7.org/fhir/search-comparator"
    },
    /**
     * the value for the parameter in the resource is not equal to the provided value.
     */
    search_comparator_NotEquals: {
        code: "ne",
        display: "Not Equals",
        system: "http://hl7.org/fhir/search-comparator"
    },
    /**
     * the value for the parameter in the resource starts after the provided value.
     */
    search_comparator_StartsAfter: {
        code: "sa",
        display: "Starts After",
        system: "http://hl7.org/fhir/search-comparator"
    },
};
//# sourceMappingURL=SearchComparator.js.map