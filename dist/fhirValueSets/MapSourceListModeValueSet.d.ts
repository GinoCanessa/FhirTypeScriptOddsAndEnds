import { Coding } from '../fhir';
/**
 * If field is a list, how to manage the source.
 */
export declare const MapSourceListModeValueSet: {
    /**
     * Only process this rule for the first in the list.
     */
    map_source_list_mode_First: Coding;
    /**
     * Only process this rule for the last in the list.
     */
    map_source_list_mode_Last: Coding;
    /**
     * Process this rule for all but the first.
     */
    map_source_list_mode_AllButTheFirst: Coding;
    /**
     * Process this rule for all but the last.
     */
    map_source_list_mode_AllButTheLast: Coding;
    /**
     * Only process this rule is there is only item.
     */
    map_source_list_mode_EnforceOnlyOne: Coding;
};
//# sourceMappingURL=MapSourceListModeValueSet.d.ts.map