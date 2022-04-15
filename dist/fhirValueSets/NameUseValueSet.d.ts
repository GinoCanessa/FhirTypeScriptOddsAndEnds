import { Coding } from '../fhir';
/**
 * The use of a human name.
 */
export declare const NameUseValueSet: {
    /**
     * Anonymous assigned name, alias, or pseudonym (used to protect a person's identity for privacy reasons).
     */
    name_use_Anonymous: Coding;
    /**
     * A name used prior to changing name because of marriage. This name use is for use by applications that collect and store names that were used prior to a marriage. Marriage naming customs vary greatly around the world, and are constantly changing. This term is not gender specific. The use of this term does not imply any particular history for a person's name.
     */
    name_use_NameChangedForMarriage: Coding;
    /**
     * A name that is used to address the person in an informal manner, but is not part of their formal or usual name.
     */
    name_use_Nickname: Coding;
    /**
     * The formal name as registered in an official (government) registry, but which name might not be commonly used. May be called "legal name".
     */
    name_use_Official: Coding;
    /**
     * This name is no longer in use (or was never correct, but retained for records).
     */
    name_use_Old: Coding;
    /**
     * A temporary name. Name.period can provide more detailed information. This may also be used for temporary names assigned at birth or in emergency situations.
     */
    name_use_Temp: Coding;
    /**
     * Known as/conventional/the one you normally use.
     */
    name_use_Usual: Coding;
};
//# sourceMappingURL=NameUseValueSet.d.ts.map