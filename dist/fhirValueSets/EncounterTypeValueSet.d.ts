import { Coding } from '../fhir.js';
/**
 * This example value set defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.
 */
export declare const EncounterTypeValueSet: {
    /**
     * Code: ADMS
     */
    readonly AnnualDiabetesMellitusScreening: Coding;
    /**
     * Code: BD/BM-clin
     */
    readonly BoneDrillingBoneMarrowPunctionInClinic: Coding;
    /**
     * Code: CCS60
     */
    readonly InfantColonScreening60Minutes: Coding;
    /**
     * Code: OKI
     */
    readonly OutpatientKenacortInjection: Coding;
};
/**
 * This example value set defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.
 */
export declare type EncounterTypeValueSetType = typeof EncounterTypeValueSet;
/**
 * This example value set defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.
 */
export declare enum EncounterTypeValueSetEnum {
    /**
     * Code: ADMS
     */
    AnnualDiabetesMellitusScreening = "ADMS",
    /**
     * Code: BD/BM-clin
     */
    BoneDrillingBoneMarrowPunctionInClinic = "BD/BM-clin",
    /**
     * Code: CCS60
     */
    InfantColonScreening60Minutes = "CCS60",
    /**
     * Code: OKI
     */
    OutpatientKenacortInjection = "OKI"
}
//# sourceMappingURL=EncounterTypeValueSet.d.ts.map