"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeasureType = void 0;
/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 */
exports.MeasureType = {
    /**
     * A measure that combines multiple component measures in to a single quality measure.
     */
    measure_type_Composite: {
        code: "composite",
        display: "Composite",
        system: "http://terminology.hl7.org/CodeSystem/measure-type"
    },
    /**
     * A measure that indicates the result of the performance (or non-performance) of a function or process.
     */
    measure_type_Outcome: {
        code: "outcome",
        display: "Outcome",
        system: "http://terminology.hl7.org/CodeSystem/measure-type"
    },
    /**
     * A measure that focuses on patient-reported information such as patient engagement or patient experience measures.
     */
    measure_type_PatientReportedOutcome: {
        code: "patient-reported-outcome",
        display: "Patient Reported Outcome",
        system: "http://terminology.hl7.org/CodeSystem/measure-type"
    },
    /**
     * A measure which focuses on a process which leads to a certain outcome, meaning that a scientific basis exists for believing that the process, when executed well, will increase the probability of achieving a desired outcome.
     */
    measure_type_Process: {
        code: "process",
        display: "Process",
        system: "http://terminology.hl7.org/CodeSystem/measure-type"
    },
    /**
     * A measure that focuses on a health care provider's capacity, systems, and processes to provide high-quality care.
     */
    measure_type_Structure: {
        code: "structure",
        display: "Structure",
        system: "http://terminology.hl7.org/CodeSystem/measure-type"
    },
};
//# sourceMappingURL=MeasureType.js.map