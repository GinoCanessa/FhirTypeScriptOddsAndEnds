import { Coding } from '../fhir.js';
/**
 * The type of contributor.
 */
export declare const ContributorTypeValueSet: {
    /**
     * author: An author of the content of the module.
     */
    readonly Author: Coding;
    /**
     * editor: An editor of the content of the module.
     */
    readonly Editor: Coding;
    /**
     * endorser: An endorser of the content of the module.
     */
    readonly Endorser: Coding;
    /**
     * reviewer: A reviewer of the content of the module.
     */
    readonly Reviewer: Coding;
};
/**
 * The type of contributor.
 */
export declare type ContributorTypeValueSetType = typeof ContributorTypeValueSet;
/**
 * The type of contributor.
 */
export declare enum ContributorTypeValueSetEnum {
    /**
     * author: An author of the content of the module.
     */
    Author = "author",
    /**
     * editor: An editor of the content of the module.
     */
    Editor = "editor",
    /**
     * endorser: An endorser of the content of the module.
     */
    Endorser = "endorser",
    /**
     * reviewer: A reviewer of the content of the module.
     */
    Reviewer = "reviewer"
}
//# sourceMappingURL=ContributorTypeValueSet.d.ts.map