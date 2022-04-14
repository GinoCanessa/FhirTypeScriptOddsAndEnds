"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExposureState = void 0;
/**
 * Whether the results by exposure is describing the results for the primary exposure of interest (exposure) or the alternative state (exposureAlternative).
 */
exports.ExposureState = {
    /**
     * used when the results by exposure is describing the results for the primary exposure of interest.
     */
    exposure_state_Exposure: {
        code: "exposure",
        display: "Exposure",
        system: "http://hl7.org/fhir/exposure-state"
    },
    /**
     * used when the results by exposure is describing the results for the alternative exposure state, control state or comparator state.
     */
    exposure_state_ExposureAlternative: {
        code: "exposure-alternative",
        display: "Exposure Alternative",
        system: "http://hl7.org/fhir/exposure-state"
    },
};
//# sourceMappingURL=ExposureState.js.map