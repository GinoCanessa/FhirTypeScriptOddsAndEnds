"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageCopayType = void 0;
/**
 * This value set includes sample Coverage Copayment Type codes.
 */
exports.CoverageCopayType = {
    /**
     * A standard fixed currency amount applied to all classes or service or product not otherwise specified.
     */
    coverage_copay_type_CopayAmount: {
        code: "copay",
        display: "Copay Amount",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type"
    },
    /**
     * A standard percentage applied to all classes or service or product not otherwise specified.
     */
    coverage_copay_type_CopayPercentage: {
        code: "copaypct",
        display: "Copay Percentage",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type"
    },
    /**
     * The accumulated amount of patient payment before the coverage begins to pay for services.
     */
    coverage_copay_type_Deductible: {
        code: "deductible",
        display: "Deductible",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type"
    },
    /**
     * An episode in an emergency department.
     */
    coverage_copay_type_Emergency: {
        code: "emergency",
        display: "Emergency",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type"
    },
    /**
     * An office visit for a general practitioner of a discipline.
     */
    coverage_copay_type_GPOfficeVisit: {
        code: "gpvisit",
        display: "GP Office Visit",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type"
    },
    /**
     * An episode of an Inpatient hospital stay.
     */
    coverage_copay_type_InpatientHospital: {
        code: "inpthosp",
        display: "Inpatient Hospital",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type"
    },
    /**
     * The maximum amout of payment for services which a patient, or family, is expected to incur - typically annually.
     */
    coverage_copay_type_MaximumOutOfPocket: {
        code: "maxoutofpocket",
        display: "Maximum out of pocket",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type"
    },
    /**
     * An office visit for a specialist practitioner of a discipline
     */
    coverage_copay_type_SpecialistOfficeVisit: {
        code: "spvisit",
        display: "Specialist Office Visit",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type"
    },
    /**
     * A visit held where the patient is remote relative to the practitioner, e.g. by phone, computer or video conference.
     */
    coverage_copay_type_TeleVisit: {
        code: "televisit",
        display: "Tele-visit",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type"
    },
    /**
     * A visit to an urgent care facility - typically a community care clinic.
     */
    coverage_copay_type_UrgentCare: {
        code: "urgentcare",
        display: "Urgent Care",
        system: "http://terminology.hl7.org/CodeSystem/coverage-copay-type"
    },
};
//# sourceMappingURL=CoverageCopayType.js.map