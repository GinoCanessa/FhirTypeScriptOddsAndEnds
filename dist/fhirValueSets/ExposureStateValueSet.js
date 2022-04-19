// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
export const ExposureStateValueSet = {
    /**
     * used when the results by exposure is describing the results for the primary exposure of interest.
     */
    exposure_state_Exposure: Coding.FromStrict({
        code: "exposure",
        display: "Exposure",
        system: "http://hl7.org/fhir/exposure-state"
    }),
    /**
     * used when the results by exposure is describing the results for the alternative exposure state, control state or comparator state.
     */
    exposure_state_ExposureAlternative: Coding.FromStrict({
        code: "exposure-alternative",
        display: "Exposure Alternative",
        system: "http://hl7.org/fhir/exposure-state"
    }),
};
//# sourceMappingURL=ExposureStateValueSet.js.map