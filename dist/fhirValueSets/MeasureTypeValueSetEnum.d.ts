/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 */
export declare enum MeasureTypeValueSetEnum {
    /**
     * composite: A measure that combines multiple component measures in to a single quality measure.
     */
    Composite = "composite",
    /**
     * outcome: A measure that indicates the result of the performance (or non-performance) of a function or process.
     */
    Outcome = "outcome",
    /**
     * patient-reported-outcome: A measure that focuses on patient-reported information such as patient engagement or patient experience measures.
     */
    PatientReportedOutcome = "patient-reported-outcome",
    /**
     * process: A measure which focuses on a process which leads to a certain outcome, meaning that a scientific basis exists for believing that the process, when executed well, will increase the probability of achieving a desired outcome.
     */
    Process = "process",
    /**
     * structure: A measure that focuses on a health care provider's capacity, systems, and processes to provide high-quality care.
     */
    Structure = "structure"
}
//# sourceMappingURL=MeasureTypeValueSetEnum.d.ts.map