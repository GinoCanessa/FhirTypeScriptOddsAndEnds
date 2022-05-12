// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/encounter-special-arrangements|4.0.1
/**
 * This value set defines a set of codes that can be used to indicate the kinds of special arrangements in place for a patients visit.
 */
export var EncounterSpecialArrangementsValueSetEnum;
(function (EncounterSpecialArrangementsValueSetEnum) {
    /**
     * add-bed: An additional bed made available for a person accompanying the patient, for example a parent accompanying a child.
     */
    EncounterSpecialArrangementsValueSetEnum["AdditionalBedding"] = "add-bed";
    /**
     * att: A person who accompanies a patient to provide assistive services necessary for the patient's care during the encounter.
     */
    EncounterSpecialArrangementsValueSetEnum["Attendant"] = "att";
    /**
     * dog: The patient has a guide dog and the location used for the encounter should be able to support the presence of the service animal.
     */
    EncounterSpecialArrangementsValueSetEnum["GuideDog"] = "dog";
    /**
     * int: The patient is not fluent in the local language and requires an interpreter to be available. Refer to the Patient.Language property for the type of interpreter required.
     */
    EncounterSpecialArrangementsValueSetEnum["Interpreter"] = "int";
    /**
     * wheel: The patient requires a wheelchair to be made available for the encounter.
     */
    EncounterSpecialArrangementsValueSetEnum["Wheelchair"] = "wheel";
})(EncounterSpecialArrangementsValueSetEnum || (EncounterSpecialArrangementsValueSetEnum = {}));
//# sourceMappingURL=EncounterSpecialArrangementsValueSetEnum.js.map