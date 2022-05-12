/**
 * How a search parameter relates to the set of elements returned by evaluating its xpath query.
 */
export declare enum SearchXpathUsageValueSetEnum {
    /**
     * distance: The search parameter is based on a spatial transform of the selected nodes, using physical distance from the middle.
     */
    Distance = "distance",
    /**
     * nearby: The search parameter is based on a spatial transform of the selected nodes.
     */
    Nearby = "nearby",
    /**
     * normal: The search parameter is derived directly from the selected nodes based on the type definitions.
     */
    Normal = "normal",
    /**
     * other: The interpretation of the xpath statement is unknown (and can't be automated).
     */
    Other = "other",
    /**
     * phonetic: The search parameter is derived by a phonetic transform from the selected nodes.
     */
    Phonetic = "phonetic"
}
//# sourceMappingURL=SearchXpathUsageValueSetEnum.d.ts.map