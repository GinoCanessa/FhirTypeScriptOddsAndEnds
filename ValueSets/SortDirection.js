/**
 * The possible sort directions, ascending or descending.
 */
export var SortDirection = {
    /**
     * Sort by the value ascending, so that lower values appear first.
     */
    sort_direction_Ascending: {
        code: "ascending",
        display: "Ascending",
        system: "http://hl7.org/fhir/sort-direction"
    },
    /**
     * Sort by the value descending, so that lower values appear last.
     */
    sort_direction_Descending: {
        code: "descending",
        display: "Descending",
        system: "http://hl7.org/fhir/sort-direction"
    }
};
