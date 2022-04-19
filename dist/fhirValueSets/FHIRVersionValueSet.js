// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * All published FHIR Versions.
 */
export const FHIRVersionValueSet = {
    /**
     * DSTU 1 Official version.
     */
    FHIR_version_VAL0080: Coding.FromStrict({
        code: "0.0.80",
        display: "0.0.80",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * DSTU 1 Official version Technical Errata #1.
     */
    FHIR_version_VAL0081: Coding.FromStrict({
        code: "0.0.81",
        display: "0.0.81",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * DSTU 1 Official version Technical Errata #2.
     */
    FHIR_version_VAL0082: Coding.FromStrict({
        code: "0.0.82",
        display: "0.0.82",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * Oldest archived version of FHIR.
     */
    FHIR_version_VAL001: Coding.FromStrict({
        code: "0.01",
        display: "0.01",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * 1st Draft for Comment (Sept 2012 Ballot).
     */
    FHIR_version_VAL005: Coding.FromStrict({
        code: "0.05",
        display: "0.05",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * 2nd Draft for Comment (January 2013 Ballot).
     */
    FHIR_version_VAL006: Coding.FromStrict({
        code: "0.06",
        display: "0.06",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * DSTU 1 Ballot version.
     */
    FHIR_version_VAL011: Coding.FromStrict({
        code: "0.11",
        display: "0.11",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * Draft For Comment (January 2015 Ballot).
     */
    FHIR_version_VAL040: Coding.FromStrict({
        code: "0.4.0",
        display: "0.4.0",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * DSTU 2 Ballot version (May 2015 Ballot).
     */
    FHIR_version_VAL050: Coding.FromStrict({
        code: "0.5.0",
        display: "0.5.0",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * DSTU 2 QA Preview + CQIF Ballot (Sep 2015).
     */
    FHIR_version_VAL100: Coding.FromStrict({
        code: "1.0.0",
        display: "1.0.0",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * DSTU 2 (Official version).
     */
    FHIR_version_VAL101: Coding.FromStrict({
        code: "1.0.1",
        display: "1.0.1",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * DSTU 2 (Official version) with 1 technical errata.
     */
    FHIR_version_VAL102: Coding.FromStrict({
        code: "1.0.2",
        display: "1.0.2",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * GAO Ballot + draft changes to main FHIR standard.
     */
    FHIR_version_VAL110: Coding.FromStrict({
        code: "1.1.0",
        display: "1.1.0",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * CQF on FHIR Ballot + Connectathon 12 (Montreal).
     */
    FHIR_version_VAL140: Coding.FromStrict({
        code: "1.4.0",
        display: "1.4.0",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * FHIR STU3 Ballot + Connectathon 13 (Baltimore).
     */
    FHIR_version_VAL160: Coding.FromStrict({
        code: "1.6.0",
        display: "1.6.0",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * FHIR STU3 Candidate + Connectathon 14 (San Antonio).
     */
    FHIR_version_VAL180: Coding.FromStrict({
        code: "1.8.0",
        display: "1.8.0",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * FHIR Release 3 (STU).
     */
    FHIR_version_VAL300: Coding.FromStrict({
        code: "3.0.0",
        display: "3.0.0",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * FHIR Release 3 (STU) with 1 technical errata.
     */
    FHIR_version_VAL301: Coding.FromStrict({
        code: "3.0.1",
        display: "3.0.1",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * R4 Ballot #1.
     */
    FHIR_version_VAL330: Coding.FromStrict({
        code: "3.3.0",
        display: "3.3.0",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * R4 Ballot #2.
     */
    FHIR_version_VAL350: Coding.FromStrict({
        code: "3.5.0",
        display: "3.5.0",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * FHIR Release 4 (Normative + STU).
     */
    FHIR_version_VAL400: Coding.FromStrict({
        code: "4.0.0",
        display: "4.0.0",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
    /**
     * FHIR Release 4 Technical Correction.
     */
    FHIR_version_VAL401: Coding.FromStrict({
        code: "4.0.1",
        display: "4.0.1",
        system: "http://hl7.org/fhir/FHIR-version"
    }),
};
//# sourceMappingURL=FHIRVersionValueSet.js.map