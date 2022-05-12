import { Coding } from '../fhir.js';
/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export declare const SearchEntryModeValueSet: {
    /**
     * include: This resource is returned because it is referred to from another resource in the search set.
     */
    readonly Include: Coding;
    /**
     * match: This resource matched the search specification.
     */
    readonly Match: Coding;
    /**
     * outcome: An OperationOutcome that provides additional information about the processing of a search.
     */
    readonly Outcome: Coding;
};
/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
export declare type SearchEntryModeValueSetType = typeof SearchEntryModeValueSet;
/**
 * Why an entry is in the result set - whether it's included as a match or because of an _include requirement, or to convey information or warning information about the search process.
 */
//# sourceMappingURL=SearchEntryModeValueSet.d.ts.map