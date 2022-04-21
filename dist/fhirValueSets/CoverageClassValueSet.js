// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/coverage-class|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set includes Coverage Class codes.
 */
export const CoverageClassValueSet = {
    /**
     * class: A class of benefits.
     */
    Class: new Coding({
        display: "Class",
        code: "class",
        system: "http://terminology.hl7.org/CodeSystem/coverage-class",
    }),
    /**
     * group: An employee group
     */
    Group: new Coding({
        display: "Group",
        code: "group",
        system: "http://terminology.hl7.org/CodeSystem/coverage-class",
    }),
    /**
     * plan: A specific suite of benefits.
     */
    Plan: new Coding({
        display: "Plan",
        code: "plan",
        system: "http://terminology.hl7.org/CodeSystem/coverage-class",
    }),
    /**
     * rxbin: Pharmacy benefit manager's Business Identification Number.
     */
    RXBIN: new Coding({
        display: "RX BIN",
        code: "rxbin",
        system: "http://terminology.hl7.org/CodeSystem/coverage-class",
    }),
    /**
     * rxgroup: A Pharmacy Benefit Manager specified Group number.
     */
    RXGroup: new Coding({
        display: "RX Group",
        code: "rxgroup",
        system: "http://terminology.hl7.org/CodeSystem/coverage-class",
    }),
    /**
     * rxid: A Pharmacy Benefit Manager specified Member ID.
     */
    RXId: new Coding({
        display: "RX Id",
        code: "rxid",
        system: "http://terminology.hl7.org/CodeSystem/coverage-class",
    }),
    /**
     * rxpcn: A Pharmacy Benefit Manager specified Processor Control Number.
     */
    RXPCN: new Coding({
        display: "RX PCN",
        code: "rxpcn",
        system: "http://terminology.hl7.org/CodeSystem/coverage-class",
    }),
    /**
     * sequence: A sequence number associated with a short-term continuance of the coverage.
     */
    Sequence: new Coding({
        display: "Sequence",
        code: "sequence",
        system: "http://terminology.hl7.org/CodeSystem/coverage-class",
    }),
    /**
     * subclass: A subset of a class of benefits.
     */
    SubClass: new Coding({
        display: "SubClass",
        code: "subclass",
        system: "http://terminology.hl7.org/CodeSystem/coverage-class",
    }),
    /**
     * subgroup: A sub-group of an employee group
     */
    SubGroup: new Coding({
        display: "SubGroup",
        code: "subgroup",
        system: "http://terminology.hl7.org/CodeSystem/coverage-class",
    }),
    /**
     * subplan: A subset of a specific suite of benefits.
     */
    SubPlan: new Coding({
        display: "SubPlan",
        code: "subplan",
        system: "http://terminology.hl7.org/CodeSystem/coverage-class",
    }),
};
/**
 * This value set includes Coverage Class codes.
 */
export var CoverageClassValueSetEnum;
(function (CoverageClassValueSetEnum) {
    /**
     * class: A class of benefits.
     */
    CoverageClassValueSetEnum["Class"] = "class";
    /**
     * group: An employee group
     */
    CoverageClassValueSetEnum["Group"] = "group";
    /**
     * plan: A specific suite of benefits.
     */
    CoverageClassValueSetEnum["Plan"] = "plan";
    /**
     * rxbin: Pharmacy benefit manager's Business Identification Number.
     */
    CoverageClassValueSetEnum["RXBIN"] = "rxbin";
    /**
     * rxgroup: A Pharmacy Benefit Manager specified Group number.
     */
    CoverageClassValueSetEnum["RXGroup"] = "rxgroup";
    /**
     * rxid: A Pharmacy Benefit Manager specified Member ID.
     */
    CoverageClassValueSetEnum["RXId"] = "rxid";
    /**
     * rxpcn: A Pharmacy Benefit Manager specified Processor Control Number.
     */
    CoverageClassValueSetEnum["RXPCN"] = "rxpcn";
    /**
     * sequence: A sequence number associated with a short-term continuance of the coverage.
     */
    CoverageClassValueSetEnum["Sequence"] = "sequence";
    /**
     * subclass: A subset of a class of benefits.
     */
    CoverageClassValueSetEnum["SubClass"] = "subclass";
    /**
     * subgroup: A sub-group of an employee group
     */
    CoverageClassValueSetEnum["SubGroup"] = "subgroup";
    /**
     * subplan: A subset of a specific suite of benefits.
     */
    CoverageClassValueSetEnum["SubPlan"] = "subplan";
})(CoverageClassValueSetEnum || (CoverageClassValueSetEnum = {}));
//# sourceMappingURL=CoverageClassValueSet.js.map