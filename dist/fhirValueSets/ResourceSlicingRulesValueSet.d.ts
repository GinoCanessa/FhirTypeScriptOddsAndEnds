import { Coding } from '../fhir';
/**
 * How slices are interpreted when evaluating an instance.
 */
export declare const ResourceSlicingRulesValueSet: {
    /**
     * No additional content is allowed other than that described by the slices in this profile.
     */
    resource_slicing_rules_Closed: Coding;
    /**
     * Additional content is allowed anywhere in the list.
     */
    resource_slicing_rules_Open: Coding;
    /**
     * Additional content is allowed, but only at the end of the list. Note that using this requires that the slices be ordered, which makes it hard to share uses. This should only be done where absolutely required.
     */
    resource_slicing_rules_OpenAtEnd: Coding;
};
//# sourceMappingURL=ResourceSlicingRulesValueSet.d.ts.map