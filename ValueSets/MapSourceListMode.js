/**
 * If field is a list, how to manage the source.
 */
export var MapSourceListMode = {
    /**
     * Only process this rule for the first in the list.
     */
    map_source_list_mode_First: {
        code: "first",
        display: "First",
        system: "http://hl7.org/fhir/map-source-list-mode"
    },
    /**
     * Only process this rule for the last in the list.
     */
    map_source_list_mode_Last: {
        code: "last",
        display: "Last",
        system: "http://hl7.org/fhir/map-source-list-mode"
    },
    /**
     * Process this rule for all but the first.
     */
    map_source_list_mode_AllButTheFirst: {
        code: "not_first",
        display: "All but the first",
        system: "http://hl7.org/fhir/map-source-list-mode"
    },
    /**
     * Process this rule for all but the last.
     */
    map_source_list_mode_AllButTheLast: {
        code: "not_last",
        display: "All but the last",
        system: "http://hl7.org/fhir/map-source-list-mode"
    },
    /**
     * Only process this rule is there is only item.
     */
    map_source_list_mode_EnforceOnlyOne: {
        code: "only_one",
        display: "Enforce only one",
        system: "http://hl7.org/fhir/map-source-list-mode"
    }
};
