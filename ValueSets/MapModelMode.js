/**
 * How the referenced structure is used in this mapping.
 */
export var MapModelMode = {
    /**
     * This structure describes an instance that the mapping engine may ask to create that is used a target of data.
     */
    map_model_mode_ProducedStructureDefinition: {
        code: "produced",
        display: "Produced Structure Definition",
        system: "http://hl7.org/fhir/map-model-mode"
    },
    /**
     * This structure describes an instance that the mapping engine may ask for that is used a source of data.
     */
    map_model_mode_QueriedStructureDefinition: {
        code: "queried",
        display: "Queried Structure Definition",
        system: "http://hl7.org/fhir/map-model-mode"
    },
    /**
     * This structure describes an instance passed to the mapping engine that is used a source of data.
     */
    map_model_mode_SourceStructureDefinition: {
        code: "source",
        display: "Source Structure Definition",
        system: "http://hl7.org/fhir/map-model-mode"
    },
    /**
     * This structure describes an instance passed to the mapping engine that is used a target of data.
     */
    map_model_mode_TargetStructureDefinition: {
        code: "target",
        display: "Target Structure Definition",
        system: "http://hl7.org/fhir/map-model-mode"
    }
};
