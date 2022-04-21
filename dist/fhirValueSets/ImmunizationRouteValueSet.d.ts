import { Coding } from '../fhir.js';
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export declare const ImmunizationRouteValueSet: {
    /**
     * IDINJ: Injection, intradermal
     */
    readonly InjectionIntradermal: Coding;
    /**
     * IM: Injection, intramuscular
     */
    readonly InjectionIntramuscular: Coding;
    /**
     * IVINJ: Injection, intravenous
     */
    readonly InjectionIntravenous: Coding;
    /**
     * NASINHLC: Inhalation, nasal, prongs
     */
    readonly InhalationNasalCannula: Coding;
    /**
     * PO: Swallow, oral
     */
    readonly SwallowOral: Coding;
    /**
     * SQ: Injection, subcutaneous
     */
    readonly InjectionSubcutaneous: Coding;
    /**
     * TRNSDERM: Transdermal
     */
    readonly Transdermal: Coding;
};
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export declare type ImmunizationRouteValueSetType = typeof ImmunizationRouteValueSet;
/**
 * The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the administrative routes used during vaccination. This value set is provided as a suggestive example.
 */
export declare enum ImmunizationRouteValueSetEnum {
    /**
     * IDINJ: Injection, intradermal
     */
    InjectionIntradermal = "IDINJ",
    /**
     * IM: Injection, intramuscular
     */
    InjectionIntramuscular = "IM",
    /**
     * IVINJ: Injection, intravenous
     */
    InjectionIntravenous = "IVINJ",
    /**
     * NASINHLC: Inhalation, nasal, prongs
     */
    InhalationNasalCannula = "NASINHLC",
    /**
     * PO: Swallow, oral
     */
    SwallowOral = "PO",
    /**
     * SQ: Injection, subcutaneous
     */
    InjectionSubcutaneous = "SQ",
    /**
     * TRNSDERM: Transdermal
     */
    Transdermal = "TRNSDERM"
}
//# sourceMappingURL=ImmunizationRouteValueSet.d.ts.map