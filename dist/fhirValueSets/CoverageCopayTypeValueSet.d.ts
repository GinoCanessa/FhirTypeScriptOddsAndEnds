import { Coding } from '../fhir.js';
/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export declare const CoverageCopayTypeValueSet: {
    /**
     * copay: A standard fixed currency amount applied to all classes or service or product not otherwise specified.
     */
    readonly CopayAmount: Coding;
    /**
     * copaypct: A standard percentage applied to all classes or service or product not otherwise specified.
     */
    readonly CopayPercentage: Coding;
    /**
     * deductible: The accumulated amount of patient payment before the coverage begins to pay for services.
     */
    readonly Deductible: Coding;
    /**
     * emergency: An episode in an emergency department.
     */
    readonly Emergency: Coding;
    /**
     * gpvisit: An office visit for a general practitioner of a discipline.
     */
    readonly GPOfficeVisit: Coding;
    /**
     * inpthosp: An episode of an Inpatient hospital stay.
     */
    readonly InpatientHospital: Coding;
    /**
     * maxoutofpocket: The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.
     */
    readonly MaximumOutOfPocket: Coding;
    /**
     * spvisit: An office visit for a specialist practitioner of a discipline
     */
    readonly SpecialistOfficeVisit: Coding;
    /**
     * televisit: A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.
     */
    readonly TeleVisit: Coding;
    /**
     * urgentcare: A visit to an urgent care facility - typically a community care clinic.
     */
    readonly UrgentCare: Coding;
};
/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export declare type CoverageCopayTypeValueSetType = typeof CoverageCopayTypeValueSet;
/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export declare enum CoverageCopayTypeValueSetEnum {
    /**
     * copay: A standard fixed currency amount applied to all classes or service or product not otherwise specified.
     */
    CopayAmount = "copay",
    /**
     * copaypct: A standard percentage applied to all classes or service or product not otherwise specified.
     */
    CopayPercentage = "copaypct",
    /**
     * deductible: The accumulated amount of patient payment before the coverage begins to pay for services.
     */
    Deductible = "deductible",
    /**
     * emergency: An episode in an emergency department.
     */
    Emergency = "emergency",
    /**
     * gpvisit: An office visit for a general practitioner of a discipline.
     */
    GPOfficeVisit = "gpvisit",
    /**
     * inpthosp: An episode of an Inpatient hospital stay.
     */
    InpatientHospital = "inpthosp",
    /**
     * maxoutofpocket: The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.
     */
    MaximumOutOfPocket = "maxoutofpocket",
    /**
     * spvisit: An office visit for a specialist practitioner of a discipline
     */
    SpecialistOfficeVisit = "spvisit",
    /**
     * televisit: A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.
     */
    TeleVisit = "televisit",
    /**
     * urgentcare: A visit to an urgent care facility - typically a community care clinic.
     */
    UrgentCare = "urgentcare"
}
//# sourceMappingURL=CoverageCopayTypeValueSet.d.ts.map