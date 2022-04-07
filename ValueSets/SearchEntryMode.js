/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export var SearchEntryMode = {
    /**
     * This resource is returned because it is referred to from another resource in the search set.
     */
    search_entry_mode_Include: {
        code: "include",
        display: "Include",
        system: "http://hl7.org/fhir/search-entry-mode"
    },
    /**
     * This resource matched the search specification.
     */
    search_entry_mode_Match: {
        code: "match",
        display: "Match",
        system: "http://hl7.org/fhir/search-entry-mode"
    },
    /**
     * An OperationOutcome that provides additional information about the processing of a search.
     */
    search_entry_mode_Outcome: {
        code: "outcome",
        display: "Outcome",
        system: "http://hl7.org/fhir/search-entry-mode"
    }
};
