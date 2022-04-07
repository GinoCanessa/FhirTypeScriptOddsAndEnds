import { Coding } from '../strictmodels';
/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 */
export declare const MeasureType: {
    /**
     * A measure that combines multiple component measures in to a single quality measure.
     */
    measure_type_Composite: Coding;
    /**
     * A measure that indicates the result of the performance (or non-performance) of a function or process.
     */
    measure_type_Outcome: Coding;
    /**
     * A measure that focuses on patient-reported information such as patient engagement or patient experience measures.
     */
    measure_type_PatientReportedOutcome: Coding;
    /**
     * A measure which focuses on a process which leads to a certain outcome, meaning that a scientific basis exists for believing that the process, when executed well, will increase the probability of achieving a desired outcome.
     */
    measure_type_Process: Coding;
    /**
     * A measure that focuses on a health care provider's capacity, systems, and processes to provide high-quality care.
     */
    measure_type_Structure: Coding;
};
//# sourceMappingURL=MeasureType.d.ts.map