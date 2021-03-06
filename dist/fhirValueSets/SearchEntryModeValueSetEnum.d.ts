/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export declare enum SearchEntryModeValueSetEnum {
    /**
     * include: This resource is returned because it is referred to from another resource in the search set.
     */
    Include = "include",
    /**
     * match: This resource matched the search specification.
     */
    Match = "match",
    /**
     * outcome: An OperationOutcome that provides additional information about the processing of a search.
     */
    Outcome = "outcome"
}
//# sourceMappingURL=SearchEntryModeValueSetEnum.d.ts.map