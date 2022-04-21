// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/benefit-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set includes a smattering of Benefit type codes.
 */
export const BenefitTypeValueSet = {
    /**
     * benefit: Maximum benefit allowable.
     */
    Benefit: new Coding({
        display: "Benefit",
        code: "benefit",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
    /**
     * copay: Copayment per service
     */
    CopaymentPerService: new Coding({
        display: "Copayment per service",
        code: "copay",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
    /**
     * copay-maximum: Copayment maximum per service
     */
    CopaymentMaximumPerService: new Coding({
        display: "Copayment maximum per service",
        code: "copay-maximum",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
    /**
     * copay-percent: Copayment percentage per service
     */
    CopaymentPercentPerService: new Coding({
        display: "Copayment Percent per service",
        code: "copay-percent",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
    /**
     * deductible: Cost to be incurred before benefits are applied
     */
    Deductible: new Coding({
        display: "Deductible",
        code: "deductible",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
    /**
     * medical-primarycare: Medical Primary Health Coverage
     */
    MedicalPrimaryHealthCoverage: new Coding({
        display: "Medical Primary Health Coverage",
        code: "medical-primarycare",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
    /**
     * pharmacy-dispense: Pharmacy Dispense Coverage
     */
    PharmacyDispenseCoverage: new Coding({
        display: "Pharmacy Dispense Coverage",
        code: "pharmacy-dispense",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
    /**
     * room: Type of room
     */
    Room: new Coding({
        display: "Room",
        code: "room",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
    /**
     * vision-contacts: Contact Lenses
     */
    VisionContactsCoverage: new Coding({
        display: "Vision Contacts Coverage",
        code: "vision-contacts",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
    /**
     * vision-exam: Vision Exam
     */
    VisionExam: new Coding({
        display: "Vision Exam",
        code: "vision-exam",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
    /**
     * vision-glasses: Frames and lenses
     */
    VisionGlasses: new Coding({
        display: "Vision Glasses",
        code: "vision-glasses",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
    /**
     * visit: Service visit
     */
    Visit: new Coding({
        display: "Visit",
        code: "visit",
        system: "http://terminology.hl7.org/CodeSystem/benefit-type",
    }),
};
/**
 * This value set includes a smattering of Benefit type codes.
 */
export var BenefitTypeValueSetEnum;
(function (BenefitTypeValueSetEnum) {
    /**
     * benefit: Maximum benefit allowable.
     */
    BenefitTypeValueSetEnum["Benefit"] = "benefit";
    /**
     * copay: Copayment per service
     */
    BenefitTypeValueSetEnum["CopaymentPerService"] = "copay";
    /**
     * copay-maximum: Copayment maximum per service
     */
    BenefitTypeValueSetEnum["CopaymentMaximumPerService"] = "copay-maximum";
    /**
     * copay-percent: Copayment percentage per service
     */
    BenefitTypeValueSetEnum["CopaymentPercentPerService"] = "copay-percent";
    /**
     * deductible: Cost to be incurred before benefits are applied
     */
    BenefitTypeValueSetEnum["Deductible"] = "deductible";
    /**
     * medical-primarycare: Medical Primary Health Coverage
     */
    BenefitTypeValueSetEnum["MedicalPrimaryHealthCoverage"] = "medical-primarycare";
    /**
     * pharmacy-dispense: Pharmacy Dispense Coverage
     */
    BenefitTypeValueSetEnum["PharmacyDispenseCoverage"] = "pharmacy-dispense";
    /**
     * room: Type of room
     */
    BenefitTypeValueSetEnum["Room"] = "room";
    /**
     * vision-contacts: Contact Lenses
     */
    BenefitTypeValueSetEnum["VisionContactsCoverage"] = "vision-contacts";
    /**
     * vision-exam: Vision Exam
     */
    BenefitTypeValueSetEnum["VisionExam"] = "vision-exam";
    /**
     * vision-glasses: Frames and lenses
     */
    BenefitTypeValueSetEnum["VisionGlasses"] = "vision-glasses";
    /**
     * visit: Service visit
     */
    BenefitTypeValueSetEnum["Visit"] = "visit";
})(BenefitTypeValueSetEnum || (BenefitTypeValueSetEnum = {}));
//# sourceMappingURL=BenefitTypeValueSet.js.map