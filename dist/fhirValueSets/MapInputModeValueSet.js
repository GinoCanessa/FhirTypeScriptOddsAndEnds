// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Mode for this instance of data.
 */
export const MapInputModeValueSet = {
    /**
     * Names an input instance used a source for mapping.
     */
    map_input_mode_SourceInstance: new Coding({
        code: "source",
        display: "Source Instance",
        system: "http://hl7.org/fhir/map-input-mode"
    }),
    /**
     * Names an instance that is being populated.
     */
    map_input_mode_TargetInstance: new Coding({
        code: "target",
        display: "Target Instance",
        system: "http://hl7.org/fhir/map-input-mode"
    }),
};
//# sourceMappingURL=MapInputModeValueSet.js.map