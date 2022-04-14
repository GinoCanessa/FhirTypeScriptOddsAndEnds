"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamingsystemType = void 0;
/**
 * Identifies the purpose of the naming system.
 */
exports.NamingsystemType = {
    /**
     * The naming system is used to define concepts and symbols to represent those concepts; e.g. UCUM, LOINC, NDC code, local lab codes, etc.
     */
    namingsystem_type_CodeSystem: {
        code: "codesystem",
        display: "Code System",
        system: "http://hl7.org/fhir/namingsystem-type"
    },
    /**
     * The naming system is used to manage identifiers (e.g. license numbers, order numbers, etc.).
     */
    namingsystem_type_Identifier: {
        code: "identifier",
        display: "Identifier",
        system: "http://hl7.org/fhir/namingsystem-type"
    },
    /**
     * The naming system is used as the root for other identifiers and naming systems.
     */
    namingsystem_type_Root: {
        code: "root",
        display: "Root",
        system: "http://hl7.org/fhir/namingsystem-type"
    },
};
//# sourceMappingURL=NamingsystemType.js.map