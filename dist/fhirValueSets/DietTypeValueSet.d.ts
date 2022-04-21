import { Coding } from '../fhir.js';
/**
 * Codes that can be used to indicate the type of food being ordered for a patient. This value set is provided as a suggestive example. It includes codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 182922004 (Dietary regime (regime/therapy))
 */
export declare const DietTypeValueSet: {
    /**
     * Code: 1151000175103
     */
    readonly DietaryApproachesToStopHypertensionDiet: Coding;
    /**
     * Code: 182954008
     */
    readonly DietaryProphylaxis: Coding;
    /**
     * Code: 182955009
     */
    readonly LowCarbohydrateDietProphylaxis: Coding;
    /**
     * Code: 182956005
     */
    readonly LowCalorieDietProphylaxis: Coding;
    /**
     * Code: 182957001
     */
    readonly LowSaltDietProphylaxis: Coding;
    /**
     * Code: 182958006
     */
    readonly SaltFreeDietProphylaxis: Coding;
    /**
     * Code: 182959003
     */
    readonly LowProteinDietProphylaxis: Coding;
    /**
     * Code: 182960008
     */
    readonly UnsaturatedFatDietProphylaxis: Coding;
    /**
     * Code: 183028005
     */
    readonly EnteralTubeFeeding: Coding;
    /**
     * Code: 223456000
     */
    readonly ProvisionOfASpecialDiet: Coding;
    /**
     * Code: 225373002
     */
    readonly PEGPercutaneousEndoscopicGastrostomyFeeding: Coding;
    /**
     * Code: 225374008
     */
    readonly JejunostomyFeeding: Coding;
    /**
     * Code: 229912004
     */
    readonly EnteralTubeFeeding_229912004: Coding;
    /**
     * Code: 229913009
     */
    readonly OralTubeFeeding: Coding;
    /**
     * Code: 229914003
     */
    readonly NasogastricTubeFeeding: Coding;
    /**
     * Code: 229915002
     */
    readonly NasoduodenalFeeding: Coding;
    /**
     * Code: 229916001
     */
    readonly EsophagostomyFeeding: Coding;
    /**
     * Code: 229917005
     */
    readonly GastrostomyFeeding: Coding;
    /**
     * Code: 284071006
     */
    readonly DietaryTreatmentForDisorder: Coding;
    /**
     * Code: 289133003
     */
    readonly BalloonGastrostomyFeeding: Coding;
    /**
     * Code: 310244003
     */
    readonly NasojejunalFeeding: Coding;
    /**
     * Code: 361231003
     */
    readonly PrescribedDietaryIntake: Coding;
    /**
     * Code: 386261001
     */
    readonly DietStaging: Coding;
    /**
     * Code: 38903004
     */
    readonly TubeFeedingBySyringeMethod: Coding;
    /**
     * Code: 404919001
     */
    readonly WheatFreeDiet: Coding;
    /**
     * Code: 422972009
     */
    readonly AdvanceDietAsTolerated: Coding;
    /**
     * Code: 425458000
     */
    readonly LactoseFreeDiet: Coding;
    /**
     * Code: 50712000
     */
    readonly TubeFeedingByBarronPump: Coding;
    /**
     * Code: 56948003
     */
    readonly TubeFeedingByDripMethod: Coding;
    /**
     * Code: 61420007
     */
    readonly TubeFeedingOfPatient: Coding;
};
/**
 * Codes that can be used to indicate the type of food being ordered for a patient. This value set is provided as a suggestive example. It includes codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 182922004 (Dietary regime (regime/therapy))
 */
export declare type DietTypeValueSetType = typeof DietTypeValueSet;
/**
 * Codes that can be used to indicate the type of food being ordered for a patient. This value set is provided as a suggestive example. It includes codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 182922004 (Dietary regime (regime/therapy))
 */
export declare enum DietTypeValueSetEnum {
    /**
     * Code: 1151000175103
     */
    DietaryApproachesToStopHypertensionDiet = "1151000175103",
    /**
     * Code: 182954008
     */
    DietaryProphylaxis = "182954008",
    /**
     * Code: 182955009
     */
    LowCarbohydrateDietProphylaxis = "182955009",
    /**
     * Code: 182956005
     */
    LowCalorieDietProphylaxis = "182956005",
    /**
     * Code: 182957001
     */
    LowSaltDietProphylaxis = "182957001",
    /**
     * Code: 182958006
     */
    SaltFreeDietProphylaxis = "182958006",
    /**
     * Code: 182959003
     */
    LowProteinDietProphylaxis = "182959003",
    /**
     * Code: 182960008
     */
    UnsaturatedFatDietProphylaxis = "182960008",
    /**
     * Code: 183028005
     */
    EnteralTubeFeeding = "183028005",
    /**
     * Code: 223456000
     */
    ProvisionOfASpecialDiet = "223456000",
    /**
     * Code: 225373002
     */
    PEGPercutaneousEndoscopicGastrostomyFeeding = "225373002",
    /**
     * Code: 225374008
     */
    JejunostomyFeeding = "225374008",
    /**
     * Code: 229912004
     */
    EnteralTubeFeeding_229912004 = "229912004",
    /**
     * Code: 229913009
     */
    OralTubeFeeding = "229913009",
    /**
     * Code: 229914003
     */
    NasogastricTubeFeeding = "229914003",
    /**
     * Code: 229915002
     */
    NasoduodenalFeeding = "229915002",
    /**
     * Code: 229916001
     */
    EsophagostomyFeeding = "229916001",
    /**
     * Code: 229917005
     */
    GastrostomyFeeding = "229917005",
    /**
     * Code: 284071006
     */
    DietaryTreatmentForDisorder = "284071006",
    /**
     * Code: 289133003
     */
    BalloonGastrostomyFeeding = "289133003",
    /**
     * Code: 310244003
     */
    NasojejunalFeeding = "310244003",
    /**
     * Code: 361231003
     */
    PrescribedDietaryIntake = "361231003",
    /**
     * Code: 386261001
     */
    DietStaging = "386261001",
    /**
     * Code: 38903004
     */
    TubeFeedingBySyringeMethod = "38903004",
    /**
     * Code: 404919001
     */
    WheatFreeDiet = "404919001",
    /**
     * Code: 422972009
     */
    AdvanceDietAsTolerated = "422972009",
    /**
     * Code: 425458000
     */
    LactoseFreeDiet = "425458000",
    /**
     * Code: 50712000
     */
    TubeFeedingByBarronPump = "50712000",
    /**
     * Code: 56948003
     */
    TubeFeedingByDripMethod = "56948003",
    /**
     * Code: 61420007
     */
    TubeFeedingOfPatient = "61420007"
}
//# sourceMappingURL=DietTypeValueSet.d.ts.map