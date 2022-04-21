// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/quality-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * Type for quality report.
 */
export const QualityTypeValueSet = {
    /**
     * indel: INDEL Comparison.
     */
    INDELComparison: new Coding({
        display: "INDEL Comparison",
        code: "indel",
        system: "http://hl7.org/fhir/quality-type",
    }),
    /**
     * snp: SNP Comparison.
     */
    SNPComparison: new Coding({
        display: "SNP Comparison",
        code: "snp",
        system: "http://hl7.org/fhir/quality-type",
    }),
    /**
     * unknown: UNKNOWN Comparison.
     */
    UNKNOWNComparison: new Coding({
        display: "UNKNOWN Comparison",
        code: "unknown",
        system: "http://hl7.org/fhir/quality-type",
    }),
};
/**
 * Type for quality report.
 */
export var QualityTypeValueSetEnum;
(function (QualityTypeValueSetEnum) {
    /**
     * indel: INDEL Comparison.
     */
    QualityTypeValueSetEnum["INDELComparison"] = "indel";
    /**
     * snp: SNP Comparison.
     */
    QualityTypeValueSetEnum["SNPComparison"] = "snp";
    /**
     * unknown: UNKNOWN Comparison.
     */
    QualityTypeValueSetEnum["UNKNOWNComparison"] = "unknown";
})(QualityTypeValueSetEnum || (QualityTypeValueSetEnum = {}));
//# sourceMappingURL=QualityTypeValueSet.js.map