/**
 * The use of a human name.
 */
export var NameUse = {
    /**
     * Anonymous assigned name, alias, or pseudonym (used to protect a person's identity for privacy reasons).
     */
    name_use_Anonymous: {
        code: "anonymous",
        display: "Anonymous",
        system: "http://hl7.org/fhir/name-use"
    },
    /**
     * A name used prior to changing name because of marriage. This name use is for use by applications that collect and store names that were used prior to a marriage. Marriage naming customs vary greatly around the world, and are constantly changing. This term is not gender specific. The use of this term does not imply any particular history for a person's name.
     */
    name_use_NameChangedForMarriage: {
        code: "maiden",
        display: "Name changed for Marriage",
        system: "http://hl7.org/fhir/name-use"
    },
    /**
     * A name that is used to address the person in an informal manner, but is not part of their formal or usual name.
     */
    name_use_Nickname: {
        code: "nickname",
        display: "Nickname",
        system: "http://hl7.org/fhir/name-use"
    },
    /**
     * The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called "legal name".
     */
    name_use_Official: {
        code: "official",
        display: "Official",
        system: "http://hl7.org/fhir/name-use"
    },
    /**
     * This name is no longer in use (or was never correct, but retained for records).
     */
    name_use_Old: {
        code: "old",
        display: "Old",
        system: "http://hl7.org/fhir/name-use"
    },
    /**
     * A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations.
     */
    name_use_Temp: {
        code: "temp",
        display: "Temp",
        system: "http://hl7.org/fhir/name-use"
    },
    /**
     * Known as/conventional/the one you normally use.
     */
    name_use_Usual: {
        code: "usual",
        display: "Usual",
        system: "http://hl7.org/fhir/name-use"
    }
};
