"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapGroupTypeMode = void 0;
/**
 * If this is the default rule set to apply for the source type, or this combination of types.
 */
exports.MapGroupTypeMode = {
    /**
     * This group is not a default group for the types.
     */
    map_group_type_mode_NotADefault: {
        code: "none",
        display: "Not a Default",
        system: "http://hl7.org/fhir/map-group-type-mode"
    },
    /**
     * This group is a default mapping group for the specified types.
     */
    map_group_type_mode_DefaultForTypePlusCombination: {
        code: "type-and-types",
        display: "Default for type + combination",
        system: "http://hl7.org/fhir/map-group-type-mode"
    },
    /**
     * This group is a default mapping group for the specified types and for the primary source type.
     */
    map_group_type_mode_DefaultForTypeCombination: {
        code: "types",
        display: "Default for Type Combination",
        system: "http://hl7.org/fhir/map-group-type-mode"
    },
};
//# sourceMappingURL=MapGroupTypeMode.js.map