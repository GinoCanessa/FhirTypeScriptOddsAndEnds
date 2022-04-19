import { Coding } from '../fhir';
/**
 * Codes providing the status/availability of a specimen.
 */
export declare const SpecimenStatusValueSet: {
    /**
     * The physical specimen is present and in good condition.
     */
    specimen_status_Available: Coding;
    /**
     * The specimen was entered in error and therefore nullified.
     */
    specimen_status_EnteredInError: Coding;
    /**
     * There is no physical specimen because it is either lost, destroyed or consumed.
     */
    specimen_status_Unavailable: Coding;
    /**
     * The specimen cannot be used because of a quality issue such as a broken container, contamination, or too old.
     */
    specimen_status_Unsatisfactory: Coding;
};
//# sourceMappingURL=SpecimenStatusValueSet.d.ts.map