"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationMode = void 0;
/**
 * Indicates whether a resource instance represents a specific location or a class of locations.
 */
exports.LocationMode = {
    /**
     * The Location resource represents a specific instance of a location (e.g. Operating Theatre 1A).
     */
    location_mode_Instance: {
        code: "instance",
        display: "Instance",
        system: "http://hl7.org/fhir/location-mode"
    },
    /**
     * The Location represents a class of locations (e.g. Any Operating Theatre) although this class of locations could be constrained within a specific boundary (such as organization, or parent location, address etc.).
     */
    location_mode_Kind: {
        code: "kind",
        display: "Kind",
        system: "http://hl7.org/fhir/location-mode"
    },
};
//# sourceMappingURL=LocationMode.js.map