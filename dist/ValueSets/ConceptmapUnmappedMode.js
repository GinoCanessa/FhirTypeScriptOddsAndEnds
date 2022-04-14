"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConceptmapUnmappedMode = void 0;
/**
 * Defines which action to take if there is no match in the group.
 */
exports.ConceptmapUnmappedMode = {
    /**
     * Use the code explicitly provided in the group.unmapped.
     */
    conceptmap_unmapped_mode_FixedCode: {
        code: "fixed",
        display: "Fixed Code",
        system: "http://hl7.org/fhir/conceptmap-unmapped-mode"
    },
    /**
     * Use the map identified by the canonical URL in the url element.
     */
    conceptmap_unmapped_mode_OtherMap: {
        code: "other-map",
        display: "Other Map",
        system: "http://hl7.org/fhir/conceptmap-unmapped-mode"
    },
    /**
     * Use the code as provided in the $translate request.
     */
    conceptmap_unmapped_mode_ProvidedCode: {
        code: "provided",
        display: "Provided Code",
        system: "http://hl7.org/fhir/conceptmap-unmapped-mode"
    },
};
//# sourceMappingURL=ConceptmapUnmappedMode.js.map