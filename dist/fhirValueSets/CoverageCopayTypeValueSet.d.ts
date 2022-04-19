import { Coding } from '../fhir';
/**
 * This value set includes sample Coverage Copayment Type codes.
 */
export declare const CoverageCopayTypeValueSet: {
    /**
     * A standard fixed currency amount applied to all classes or service or product not otherwise specified.
     */
    coverage_copay_type_CopayAmount: Coding;
    /**
     * A standard percentage applied to all classes or service or product not otherwise specified.
     */
    coverage_copay_type_CopayPercentage: Coding;
    /**
     * The accumulated amount of patient payment before the coverage begins to pay for services.
     */
    coverage_copay_type_Deductible: Coding;
    /**
     * An episode in an emergency department.
     */
    coverage_copay_type_Emergency: Coding;
    /**
     * An office visit for a general practitioner of a discipline.
     */
    coverage_copay_type_GPOfficeVisit: Coding;
    /**
     * An episode of an Inpatient hospital stay.
     */
    coverage_copay_type_InpatientHospital: Coding;
    /**
     * The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.
     */
    coverage_copay_type_MaximumOutOfPocket: Coding;
    /**
     * An office visit for a specialist practitioner of a discipline
     */
    coverage_copay_type_SpecialistOfficeVisit: Coding;
    /**
     * A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.
     */
    coverage_copay_type_TeleVisit: Coding;
    /**
     * A visit to an urgent care facility - typically a community care clinic.
     */
    coverage_copay_type_UrgentCare: Coding;
};
//# sourceMappingURL=CoverageCopayTypeValueSet.d.ts.map