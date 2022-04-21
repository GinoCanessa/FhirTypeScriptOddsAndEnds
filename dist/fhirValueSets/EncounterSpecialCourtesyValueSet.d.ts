import { Coding } from '../fhir.js';
/**
 * This value set defines a set of codes that can be used to indicate special courtesies provided to the patient.
 */
export declare const EncounterSpecialCourtesyValueSet: {
    /**
     * EXT: extended courtesy
     */
    readonly ExtendedCourtesy: Coding;
    /**
     * NRM: normal courtesy
     */
    readonly NormalCourtesy: Coding;
    /**
     * PRF: professional courtesy
     */
    readonly ProfessionalCourtesy: Coding;
    /**
     * STF: Courtesies extended to the staff of the entity providing service.
     */
    readonly Staff: Coding;
    /**
     * UNK: Description:A proper value is applicable, but not known.
     *
     *
     *                            Usage Notes: This means the actual value is not known.  If the only thing that is unknown is how to properly express the value in the necessary constraints (value set, datatype, etc.), then the OTH or UNC flavor should be used.  No properties should be included for a datatype with this property unless:
     *
     *
     *                            Those properties themselves directly translate to a semantic of "unknown".  (E.g. a local code sent as a translation that conveys 'unknown')
     *                            Those properties further qualify the nature of what is unknown.  (E.g. specifying a use code of "H" and a URL prefix of "tel:" to convey that it is the home phone number that is unknown.)
     */
    readonly Unknown: Coding;
    /**
     * VIP: very important person
     */
    readonly VeryImportantPerson: Coding;
};
/**
 * This value set defines a set of codes that can be used to indicate special courtesies provided to the patient.
 */
export declare type EncounterSpecialCourtesyValueSetType = typeof EncounterSpecialCourtesyValueSet;
/**
 * This value set defines a set of codes that can be used to indicate special courtesies provided to the patient.
 */
export declare enum EncounterSpecialCourtesyValueSetEnum {
    /**
     * EXT: extended courtesy
     */
    ExtendedCourtesy = "EXT",
    /**
     * NRM: normal courtesy
     */
    NormalCourtesy = "NRM",
    /**
     * PRF: professional courtesy
     */
    ProfessionalCourtesy = "PRF",
    /**
     * STF: Courtesies extended to the staff of the entity providing service.
     */
    Staff = "STF",
    /**
     * UNK: Description:A proper value is applicable, but not known.
     *
     *
     *                            Usage Notes: This means the actual value is not known.  If the only thing that is unknown is how to properly express the value in the necessary constraints (value set, datatype, etc.), then the OTH or UNC flavor should be used.  No properties should be included for a datatype with this property unless:
     *
     *
     *                            Those properties themselves directly translate to a semantic of "unknown".  (E.g. a local code sent as a translation that conveys 'unknown')
     *                            Those properties further qualify the nature of what is unknown.  (E.g. specifying a use code of "H" and a URL prefix of "tel:" to convey that it is the home phone number that is unknown.)
     */
    Unknown = "UNK",
    /**
     * VIP: very important person
     */
    VeryImportantPerson = "VIP"
}
//# sourceMappingURL=EncounterSpecialCourtesyValueSet.d.ts.map