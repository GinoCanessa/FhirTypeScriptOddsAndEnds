import { Coding } from '../strictmodels';
/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export declare const SearchXpathUsage: {
    /**
     * The search parameter is based on a spatial transform of the selected nodes, using physical distance from the middle.
     */
    search_xpath_usage_Distance: Coding;
    /**
     * The search parameter is based on a spatial transform of the selected nodes.
     */
    search_xpath_usage_Nearby: Coding;
    /**
     * The search parameter is derived directly from the selected nodes based on the type definitions.
     */
    search_xpath_usage_Normal: Coding;
    /**
     * The interpretation of the xpath statement is unknown (and can't be automated).
     */
    search_xpath_usage_Other: Coding;
    /**
     * The search parameter is derived by a phonetic transform from the selected nodes.
     */
    search_xpath_usage_Phonetic: Coding;
};
//# sourceMappingURL=SearchXpathUsage.d.ts.map