/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export var SearchXpathUsage = {
    /**
     * The search parameter is based on a spatial transform of the selected nodes, using physical distance from the middle.
     */
    search_xpath_usage_Distance: {
        code: "distance",
        display: "Distance",
        system: "http://hl7.org/fhir/search-xpath-usage"
    },
    /**
     * The search parameter is based on a spatial transform of the selected nodes.
     */
    search_xpath_usage_Nearby: {
        code: "nearby",
        display: "Nearby",
        system: "http://hl7.org/fhir/search-xpath-usage"
    },
    /**
     * The search parameter is derived directly from the selected nodes based on the type definitions.
     */
    search_xpath_usage_Normal: {
        code: "normal",
        display: "Normal",
        system: "http://hl7.org/fhir/search-xpath-usage"
    },
    /**
     * The interpretation of the xpath statement is unknown (and can't be automated).
     */
    search_xpath_usage_Other: {
        code: "other",
        display: "Other",
        system: "http://hl7.org/fhir/search-xpath-usage"
    },
    /**
     * The search parameter is derived by a phonetic transform from the selected nodes.
     */
    search_xpath_usage_Phonetic: {
        code: "phonetic",
        display: "Phonetic",
        system: "http://hl7.org/fhir/search-xpath-usage"
    }
};
