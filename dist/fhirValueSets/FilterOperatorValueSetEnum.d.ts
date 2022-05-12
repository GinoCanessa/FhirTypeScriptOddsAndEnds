/**
 * The kind of operation to perform as a part of a property based filter.
 */
export declare enum FilterOperatorValueSetEnum {
    /**
     * =: The specified property of the code equals the provided value.
     */
    Equals = "=",
    /**
     * descendent-of: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, excluding the provided concept itself i.e. include descendant codes only).
     */
    DescendentOfBySubsumption = "descendent-of",
    /**
     * exists: The specified property of the code has at least one value (if the specified value is true; if the specified value is false, then matches when the specified property of the code has no values).
     */
    Exists = "exists",
    /**
     * generalizes: Includes all concept ids that have a transitive is-a relationship from the concept Id provided as the value, including the provided concept itself (i.e. include ancestor codes and self).
     */
    GeneralizesBySubsumption = "generalizes",
    /**
     * in: The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).
     */
    InSet = "in",
    /**
     * is-a: Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself (include descendant codes and self).
     */
    IsABySubsumption = "is-a",
    /**
     * is-not-a: The specified property of the code does not have an is-a relationship with the provided value.
     */
    NotIsABySubsumption = "is-not-a",
    /**
     * not-in: The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).
     */
    NotInSet = "not-in",
    /**
     * regex: The specified property of the code  matches the regex specified in the provided value.
     */
    RegularExpression = "regex"
}
//# sourceMappingURL=FilterOperatorValueSetEnum.d.ts.map