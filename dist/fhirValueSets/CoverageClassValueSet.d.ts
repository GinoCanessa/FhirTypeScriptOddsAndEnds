import { Coding } from '../fhir.js';
/**
 * This value set includes Coverage Class codes.
 */
export declare const CoverageClassValueSet: {
    /**
     * class: A class of benefits.
     */
    readonly Class: Coding;
    /**
     * group: An employee group
     */
    readonly Group: Coding;
    /**
     * plan: A specific suite of benefits.
     */
    readonly Plan: Coding;
    /**
     * rxbin: Pharmacy benefit manager's Business Identification Number.
     */
    readonly RXBIN: Coding;
    /**
     * rxgroup: A Pharmacy Benefit Manager specified Group number.
     */
    readonly RXGroup: Coding;
    /**
     * rxid: A Pharmacy Benefit Manager specified Member ID.
     */
    readonly RXId: Coding;
    /**
     * rxpcn: A Pharmacy Benefit Manager specified Processor Control Number.
     */
    readonly RXPCN: Coding;
    /**
     * sequence: A sequence number associated with a short-term continuance of the coverage.
     */
    readonly Sequence: Coding;
    /**
     * subclass: A subset of a class of benefits.
     */
    readonly SubClass: Coding;
    /**
     * subgroup: A sub-group of an employee group
     */
    readonly SubGroup: Coding;
    /**
     * subplan: A subset of a specific suite of benefits.
     */
    readonly SubPlan: Coding;
};
/**
 * This value set includes Coverage Class codes.
 */
export declare type CoverageClassValueSetType = typeof CoverageClassValueSet;
/**
 * This value set includes Coverage Class codes.
 */
export declare enum CoverageClassValueSetEnum {
    /**
     * class: A class of benefits.
     */
    Class = "class",
    /**
     * group: An employee group
     */
    Group = "group",
    /**
     * plan: A specific suite of benefits.
     */
    Plan = "plan",
    /**
     * rxbin: Pharmacy benefit manager's Business Identification Number.
     */
    RXBIN = "rxbin",
    /**
     * rxgroup: A Pharmacy Benefit Manager specified Group number.
     */
    RXGroup = "rxgroup",
    /**
     * rxid: A Pharmacy Benefit Manager specified Member ID.
     */
    RXId = "rxid",
    /**
     * rxpcn: A Pharmacy Benefit Manager specified Processor Control Number.
     */
    RXPCN = "rxpcn",
    /**
     * sequence: A sequence number associated with a short-term continuance of the coverage.
     */
    Sequence = "sequence",
    /**
     * subclass: A subset of a class of benefits.
     */
    SubClass = "subclass",
    /**
     * subgroup: A sub-group of an employee group
     */
    SubGroup = "subgroup",
    /**
     * subplan: A subset of a specific suite of benefits.
     */
    SubPlan = "subplan"
}
//# sourceMappingURL=CoverageClassValueSet.d.ts.map