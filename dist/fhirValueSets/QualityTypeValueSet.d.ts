import { Coding } from '../fhir.js';
/**
 * Type for quality report.
 */
export declare const QualityTypeValueSet: {
    /**
     * indel: INDEL Comparison.
     */
    readonly INDELComparison: Coding;
    /**
     * snp: SNP Comparison.
     */
    readonly SNPComparison: Coding;
    /**
     * unknown: UNKNOWN Comparison.
     */
    readonly UNKNOWNComparison: Coding;
};
/**
 * Type for quality report.
 */
export declare type QualityTypeValueSetType = typeof QualityTypeValueSet;
/**
 * Type for quality report.
 */
export declare enum QualityTypeValueSetEnum {
    /**
     * indel: INDEL Comparison.
     */
    INDELComparison = "indel",
    /**
     * snp: SNP Comparison.
     */
    SNPComparison = "snp",
    /**
     * unknown: UNKNOWN Comparison.
     */
    UNKNOWNComparison = "unknown"
}
//# sourceMappingURL=QualityTypeValueSet.d.ts.map