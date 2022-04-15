import { Coding } from '../fhir';
/**
 * This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.
 */
export declare const EncounterSpecialArrangementsValueSet: {
    /**
     * An additional bed made available for a person accompanying the patient, for example a parent accompanying a child.
     */
    encounter_special_arrangements_AdditionalBedding: Coding;
    /**
     * A person who accompanies a patient to provide assistive services necessary for the patient's care during the encounter.
     */
    encounter_special_arrangements_Attendant: Coding;
    /**
     * The patient has a guide dog and the location used for the encounter should be able to support the presence of the service animal.
     */
    encounter_special_arrangements_GuideDog: Coding;
    /**
     * The patient is not fluent in the local language and requires an interpreter to be available. Refer to the Patient.Language property for the type of interpreter required.
     */
    encounter_special_arrangements_Interpreter: Coding;
    /**
     * The patient requires a wheelchair to be made available for the encounter.
     */
    encounter_special_arrangements_Wheelchair: Coding;
};
//# sourceMappingURL=EncounterSpecialArrangementsValueSet.d.ts.map