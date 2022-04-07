/**
 * Type for quality report.
 */
export var QualityType = {
    /**
     * INDEL Comparison.
     */
    quality_type_INDELComparison: {
        code: "indel",
        display: "INDEL Comparison",
        system: "http://hl7.org/fhir/quality-type"
    },
    /**
     * SNP Comparison.
     */
    quality_type_SNPComparison: {
        code: "snp",
        display: "SNP Comparison",
        system: "http://hl7.org/fhir/quality-type"
    },
    /**
     * UNKNOWN Comparison.
     */
    quality_type_UNKNOWNComparison: {
        code: "unknown",
        display: "UNKNOWN Comparison",
        system: "http://hl7.org/fhir/quality-type"
    }
};
