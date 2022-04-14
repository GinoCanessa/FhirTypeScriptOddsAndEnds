"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupType = void 0;
/**
 * Types of resources that are part of group.
 */
exports.GroupType = {
    /**
     * Group contains "animal" Patient resources.
     */
    group_type_Animal: {
        code: "animal",
        display: "Animal",
        system: "http://hl7.org/fhir/group-type"
    },
    /**
     * Group contains Device resources.
     */
    group_type_Device: {
        code: "device",
        display: "Device",
        system: "http://hl7.org/fhir/group-type"
    },
    /**
     * Group contains Medication resources.
     */
    group_type_Medication: {
        code: "medication",
        display: "Medication",
        system: "http://hl7.org/fhir/group-type"
    },
    /**
     * Group contains "person" Patient resources.
     */
    group_type_Person: {
        code: "person",
        display: "Person",
        system: "http://hl7.org/fhir/group-type"
    },
    /**
     * Group contains healthcare practitioner resources (Practitioner or PractitionerRole).
     */
    group_type_Practitioner: {
        code: "practitioner",
        display: "Practitioner",
        system: "http://hl7.org/fhir/group-type"
    },
    /**
     * Group contains Substance resources.
     */
    group_type_Substance: {
        code: "substance",
        display: "Substance",
        system: "http://hl7.org/fhir/group-type"
    },
};
//# sourceMappingURL=GroupType.js.map