import { Coding } from '../strictmodels';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the source of the data when the report of the immunization event is not based on information from the person, entity or organization who administered the vaccine. This value set is provided as a suggestive example.
 */
export declare const ImmunizationOrigin: {
    /**
     * The data for the immunization event originated with another provider.
     */
    immunization_origin_OtherProvider: Coding;
    /**
     * The data for the immunization event originated from the recollection of the patient or parent/guardian of the patient.
     */
    immunization_origin_ParentGuardianPatientRecall: Coding;
    /**
     * The data for the immunization event originated with a written record for the patient.
     */
    immunization_origin_WrittenRecord: Coding;
    /**
     * The data for the immunization event originated with a school record for the patient.
     */
    immunization_origin_SchoolRecord: Coding;
};
//# sourceMappingURL=ImmunizationOrigin.d.ts.map