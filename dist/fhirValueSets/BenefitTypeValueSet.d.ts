import { Coding } from '../fhir.js';
/**
 * This value set includes a smattering of Benefit type codes.
 */
export declare const BenefitTypeValueSet: {
    /**
     * benefit: Maximum benefit allowable.
     */
    readonly Benefit: Coding;
    /**
     * copay: Copayment per service
     */
    readonly CopaymentPerService: Coding;
    /**
     * copay-maximum: Copayment maximum per service
     */
    readonly CopaymentMaximumPerService: Coding;
    /**
     * copay-percent: Copayment percentage per service
     */
    readonly CopaymentPercentPerService: Coding;
    /**
     * deductible: Cost to be incurred before benefits are applied
     */
    readonly Deductible: Coding;
    /**
     * medical-primarycare: Medical Primary Health Coverage
     */
    readonly MedicalPrimaryHealthCoverage: Coding;
    /**
     * pharmacy-dispense: Pharmacy Dispense Coverage
     */
    readonly PharmacyDispenseCoverage: Coding;
    /**
     * room: Type of room
     */
    readonly Room: Coding;
    /**
     * vision-contacts: Contact Lenses
     */
    readonly VisionContactsCoverage: Coding;
    /**
     * vision-exam: Vision Exam
     */
    readonly VisionExam: Coding;
    /**
     * vision-glasses: Frames and lenses
     */
    readonly VisionGlasses: Coding;
    /**
     * visit: Service visit
     */
    readonly Visit: Coding;
};
/**
 * This value set includes a smattering of Benefit type codes.
 */
export declare type BenefitTypeValueSetType = typeof BenefitTypeValueSet;
/**
 * This value set includes a smattering of Benefit type codes.
 */
export declare enum BenefitTypeValueSetEnum {
    /**
     * benefit: Maximum benefit allowable.
     */
    Benefit = "benefit",
    /**
     * copay: Copayment per service
     */
    CopaymentPerService = "copay",
    /**
     * copay-maximum: Copayment maximum per service
     */
    CopaymentMaximumPerService = "copay-maximum",
    /**
     * copay-percent: Copayment percentage per service
     */
    CopaymentPercentPerService = "copay-percent",
    /**
     * deductible: Cost to be incurred before benefits are applied
     */
    Deductible = "deductible",
    /**
     * medical-primarycare: Medical Primary Health Coverage
     */
    MedicalPrimaryHealthCoverage = "medical-primarycare",
    /**
     * pharmacy-dispense: Pharmacy Dispense Coverage
     */
    PharmacyDispenseCoverage = "pharmacy-dispense",
    /**
     * room: Type of room
     */
    Room = "room",
    /**
     * vision-contacts: Contact Lenses
     */
    VisionContactsCoverage = "vision-contacts",
    /**
     * vision-exam: Vision Exam
     */
    VisionExam = "vision-exam",
    /**
     * vision-glasses: Frames and lenses
     */
    VisionGlasses = "vision-glasses",
    /**
     * visit: Service visit
     */
    Visit = "visit"
}
//# sourceMappingURL=BenefitTypeValueSet.d.ts.map