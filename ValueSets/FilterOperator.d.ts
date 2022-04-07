import { Coding } from '../strictmodels';
/**
 * The kind of operation to perform as a part of a property based filter.
 */
export declare const FilterOperator: {
    /**
     * The specified property of the code equals the provided value.
     */
    filter_operator_Equals: Coding;
    /**
     * Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, excluding the provided concept itself i.e. include descendant codes only).
     */
    filter_operator_DescendentOfBySubsumption: Coding;
    /**
     * The specified property of the code has at least one value (if the specified value is true; if the specified value is false, then matches when the specified property of the code has no values).
     */
    filter_operator_Exists: Coding;
    /**
     * Includes all concept ids that have a transitive is-a relationship from the concept Id provided as the value, including the provided concept itself (i.e. include ancestor codes and self).
     */
    filter_operator_GeneralizesBySubsumption: Coding;
    /**
     * The specified property of the code is in the set of codes or concepts specified in the provided value (comma separated list).
     */
    filter_operator_InSet: Coding;
    /**
     * Includes all concept ids that have a transitive is-a relationship with the concept Id provided as the value, including the provided concept itself (include descendant codes and self).
     */
    filter_operator_IsABySubsumption: Coding;
    /**
     * The specified property of the code does not have an is-a relationship with the provided value.
     */
    filter_operator_NotIsABySubsumption: Coding;
    /**
     * The specified property of the code is not in the set of codes or concepts specified in the provided value (comma separated list).
     */
    filter_operator_NotInSet: Coding;
    /**
     * The specified property of the code  matches the regex specified in the provided value.
     */
    filter_operator_RegularExpression: Coding;
};
//# sourceMappingURL=FilterOperator.d.ts.map