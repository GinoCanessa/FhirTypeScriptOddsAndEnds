// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * Codes that can be used to indicate the type of food being ordered for a patient. This value set is provided as a suggestive example. It includes codes from [SNOMED CT](http://snomed.info/sct) where concept is-a 182922004 (Dietary regime (regime/therapy))
 */
export const DietTypeValueSet = {
    DietTypeValueSet_DietaryApproachesToStopHypertensionDiet: Coding.FromStrict({
        code: "1151000175103",
        display: "Dietary Approaches to Stop Hypertension diet",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_DietaryProphylaxis: Coding.FromStrict({
        code: "182954008",
        display: "Dietary prophylaxis",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_LowCarbohydrateDietProphylaxis: Coding.FromStrict({
        code: "182955009",
        display: "Low carbohydrate diet - prophylaxis",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_LowCalorieDietProphylaxis: Coding.FromStrict({
        code: "182956005",
        display: "Low calorie diet - prophylaxis",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_LowSaltDietProphylaxis: Coding.FromStrict({
        code: "182957001",
        display: "Low salt diet - prophylaxis",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_SaltFreeDietProphylaxis: Coding.FromStrict({
        code: "182958006",
        display: "Salt free diet - prophylaxis",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_LowProteinDietProphylaxis: Coding.FromStrict({
        code: "182959003",
        display: "Low protein diet - prophylaxis",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_UnsaturatedFatDietProphylaxis: Coding.FromStrict({
        code: "182960008",
        display: "Unsaturated fat diet - prophylaxis",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_EnteralTubeFeeding: Coding.FromStrict({
        code: "183028005",
        display: "Enteral tube feeding",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_ProvisionOfASpecialDiet: Coding.FromStrict({
        code: "223456000",
        display: "Provision of a special diet",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_PEGPercutaneousEndoscopicGastrostomyFeeding: Coding.FromStrict({
        code: "225373002",
        display: "PEG - Percutaneous endoscopic gastrostomy feeding",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_JejunostomyFeeding: Coding.FromStrict({
        code: "225374008",
        display: "Jejunostomy feeding",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_EnteralTubeFeeding_2: Coding.FromStrict({
        code: "229912004",
        display: "Enteral tube feeding",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_OralTubeFeeding: Coding.FromStrict({
        code: "229913009",
        display: "Oral tube feeding",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_NasogastricTubeFeeding: Coding.FromStrict({
        code: "229914003",
        display: "Nasogastric tube feeding",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_NasoduodenalFeeding: Coding.FromStrict({
        code: "229915002",
        display: "Nasoduodenal feeding",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_EsophagostomyFeeding: Coding.FromStrict({
        code: "229916001",
        display: "Esophagostomy feeding",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_GastrostomyFeeding: Coding.FromStrict({
        code: "229917005",
        display: "Gastrostomy feeding",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_DietaryTreatmentForDisorder: Coding.FromStrict({
        code: "284071006",
        display: "Dietary treatment for disorder",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_BalloonGastrostomyFeeding: Coding.FromStrict({
        code: "289133003",
        display: "Balloon gastrostomy feeding",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_NasojejunalFeeding: Coding.FromStrict({
        code: "310244003",
        display: "Nasojejunal feeding",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_PrescribedDietaryIntake: Coding.FromStrict({
        code: "361231003",
        display: "Prescribed dietary intake",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_DietStaging: Coding.FromStrict({
        code: "386261001",
        display: "Diet staging",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_TubeFeedingBySyringeMethod: Coding.FromStrict({
        code: "38903004",
        display: "Tube feeding by syringe method",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_WheatFreeDiet: Coding.FromStrict({
        code: "404919001",
        display: "Wheat-free diet",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_AdvanceDietAsTolerated: Coding.FromStrict({
        code: "422972009",
        display: "Advance diet as tolerated",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_LactoseFreeDiet: Coding.FromStrict({
        code: "425458000",
        display: "Lactose-free diet",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_TubeFeedingByBarronPump: Coding.FromStrict({
        code: "50712000",
        display: "Tube feeding by Barron pump",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_TubeFeedingByDripMethod: Coding.FromStrict({
        code: "56948003",
        display: "Tube feeding by drip method",
        system: "http://snomed.info/sct"
    }),
    DietTypeValueSet_TubeFeedingOfPatient: Coding.FromStrict({
        code: "61420007",
        display: "Tube feeding of patient",
        system: "http://snomed.info/sct"
    }),
};
//# sourceMappingURL=DietTypeValueSet.js.map