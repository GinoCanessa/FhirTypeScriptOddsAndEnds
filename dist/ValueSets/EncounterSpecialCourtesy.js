"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncounterSpecialCourtesy = void 0;
/**
 * This value set defines a set of codes that can be used to indicate special courtesies provided to the patient.
 */
exports.EncounterSpecialCourtesy = {
    /**
     * extended courtesy
     */
    v3_EncounterSpecialCourtesy_ExtendedCourtesy: {
        code: "EXT",
        display: "extended courtesy",
        system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy"
    },
    /**
     * normal courtesy
     */
    v3_EncounterSpecialCourtesy_NormalCourtesy: {
        code: "NRM",
        display: "normal courtesy",
        system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy"
    },
    /**
     * professional courtesy
     */
    v3_EncounterSpecialCourtesy_ProfessionalCourtesy: {
        code: "PRF",
        display: "professional courtesy",
        system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy"
    },
    /**
     * Courtesies extended to the staff of the entity providing service.
     */
    v3_EncounterSpecialCourtesy_Staff: {
        code: "STF",
        display: "staff",
        system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy"
    },
    /**
     * Description:A proper value is applicable, but not known.
     *
     *
     *                            Usage Notes: This means the actual value is not known.  If the only thing that is unknown is how to properly express the value in the necessary constraints (value set, datatype, etc.), then the OTH or UNC flavor should be used.  No properties should be included for a datatype with this property unless:
     *
     *
     *                            Those properties themselves directly translate to a semantic of "unknown".  (E.g. a local code sent as a translation that conveys 'unknown')
     *                            Those properties further qualify the nature of what is unknown.  (E.g. specifying a use code of "H" and a URL prefix of "tel:" to convey that it is the home phone number that is unknown.)
     */
    v3_NullFlavor_Unknown: {
        code: "UNK",
        display: "unknown",
        system: "http://terminology.hl7.org/CodeSystem/v3-NullFlavor"
    },
    /**
     * very important person
     */
    v3_EncounterSpecialCourtesy_VeryImportantPerson: {
        code: "VIP",
        display: "very important person",
        system: "http://terminology.hl7.org/CodeSystem/v3-EncounterSpecialCourtesy"
    },
};
//# sourceMappingURL=EncounterSpecialCourtesy.js.map