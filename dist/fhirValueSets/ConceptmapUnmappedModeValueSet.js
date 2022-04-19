// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Defines which action to take if there is no match in the group.
 */
export const ConceptmapUnmappedModeValueSet = {
    /**
     * Use the code explicitly provided in the group.unmapped.
     */
    conceptmap_unmapped_mode_FixedCode: Coding.FromStrict({
        code: "fixed",
        display: "Fixed Code",
        system: "http://hl7.org/fhir/conceptmap-unmapped-mode"
    }),
    /**
     * Use the map identified by the canonical URL in the url element.
     */
    conceptmap_unmapped_mode_OtherMap: Coding.FromStrict({
        code: "other-map",
        display: "Other Map",
        system: "http://hl7.org/fhir/conceptmap-unmapped-mode"
    }),
    /**
     * Use the code as provided in the $translate request.
     */
    conceptmap_unmapped_mode_ProvidedCode: Coding.FromStrict({
        code: "provided",
        display: "Provided Code",
        system: "http://hl7.org/fhir/conceptmap-unmapped-mode"
    }),
};
//# sourceMappingURL=ConceptmapUnmappedModeValueSet.js.map