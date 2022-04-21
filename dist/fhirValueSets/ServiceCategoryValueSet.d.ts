import { Coding } from '../fhir.js';
/**
 * This value set defines an example set of codes that can be used to classify groupings of service-types/specialties.
 */
export declare const ServiceCategoryValueSet: {
    /**
     * 1: Adoption
     */
    readonly Adoption: Coding;
    /**
     * 10: Dental
     */
    readonly Dental: Coding;
    /**
     * 11: Disability Support
     */
    readonly DisabilitySupport: Coding;
    /**
     * 12: Drug/Alcohol
     */
    readonly DrugAlcohol: Coding;
    /**
     * 13: Education &amp; Learning
     */
    readonly EducationAndLearning: Coding;
    /**
     * 14: Emergency Department
     */
    readonly EmergencyDepartment: Coding;
    /**
     * 15: Employment
     */
    readonly Employment: Coding;
    /**
     * 16: Financial &amp; Material aid
     */
    readonly FinancialAndMaterialAid: Coding;
    /**
     * 17: General Practice/GP (doctor)
     */
    readonly GeneralPractice: Coding;
    /**
     * 18: Housing/Homelessness
     */
    readonly HousingHomelessness: Coding;
    /**
     * 19: Interpreting
     */
    readonly Interpreting: Coding;
    /**
     * 2: Aged Care
     */
    readonly AgedCare: Coding;
    /**
     * 20: Justice
     */
    readonly Justice: Coding;
    /**
     * 21: Legal
     */
    readonly Legal: Coding;
    /**
     * 22: Mental Health
     */
    readonly MentalHealth: Coding;
    /**
     * 23: Physical Activity &amp; Recreation
     */
    readonly PhysicalActivityAndRecreation: Coding;
    /**
     * 24: Regulation
     */
    readonly Regulation: Coding;
    /**
     * 25: Respite/Carer Support
     */
    readonly RespiteCarerSupport: Coding;
    /**
     * 26: Specialist Clinical Pathology - requires referral
     */
    readonly SpecialistClinicalPathology: Coding;
    /**
     * 27: Specialist Medical - requires referral
     */
    readonly SpecialistMedical: Coding;
    /**
     * 28: Specialist Obstetrics &amp; Gynecology - requires referral
     */
    readonly SpecialistObstetricsAndGynecology: Coding;
    /**
     * 29: Specialist Paediatric - requires referral
     */
    readonly SpecialistPaediatric: Coding;
    /**
     * 3: Alternative &amp; Complementary Therapies
     */
    readonly AlternativeComplementaryTherapies: Coding;
    /**
     * 30: Specialist Radiology/Imaging - requires referral
     */
    readonly SpecialistRadiologyImaging: Coding;
    /**
     * 31: Specialist Surgical - requires referral
     */
    readonly SpecialistSurgical: Coding;
    /**
     * 32: Support group/s
     */
    readonly SupportGroupS: Coding;
    /**
     * 33: Transport
     */
    readonly Transport: Coding;
    /**
     * 34: Allied Health
     */
    readonly AlliedHealth: Coding;
    /**
     * 35: Hospital
     */
    readonly Hospital: Coding;
    /**
     * 36: Crisis Line (GPAH use only)
     */
    readonly CrisisLineGPAHUseOnly: Coding;
    /**
     * 37: Test Message (HSD admin use only)
     */
    readonly TestMessageHSDAdmin: Coding;
    /**
     * 38: NDIA
     */
    readonly NDIA: Coding;
    /**
     * 4: Child Care and/or Kindergarten
     */
    readonly ChildCareKindergarten: Coding;
    /**
     * 5: Child Development
     */
    readonly ChildDevelopment: Coding;
    /**
     * 6: Child Protection &amp; Family Services
     */
    readonly ChildProtectionAndFamilyServices: Coding;
    /**
     * 7: Community Health Care
     */
    readonly CommunityHealthCare: Coding;
    /**
     * 8: Counselling
     */
    readonly Counselling: Coding;
    /**
     * 9: Death Services
     */
    readonly DeathServices: Coding;
};
/**
 * This value set defines an example set of codes that can be used to classify groupings of service-types/specialties.
 */
export declare type ServiceCategoryValueSetType = typeof ServiceCategoryValueSet;
/**
 * This value set defines an example set of codes that can be used to classify groupings of service-types/specialties.
 */
export declare enum ServiceCategoryValueSetEnum {
    /**
     * 1: Adoption
     */
    Adoption = "1",
    /**
     * 10: Dental
     */
    Dental = "10",
    /**
     * 11: Disability Support
     */
    DisabilitySupport = "11",
    /**
     * 12: Drug/Alcohol
     */
    DrugAlcohol = "12",
    /**
     * 13: Education &amp; Learning
     */
    EducationAndLearning = "13",
    /**
     * 14: Emergency Department
     */
    EmergencyDepartment = "14",
    /**
     * 15: Employment
     */
    Employment = "15",
    /**
     * 16: Financial &amp; Material aid
     */
    FinancialAndMaterialAid = "16",
    /**
     * 17: General Practice/GP (doctor)
     */
    GeneralPractice = "17",
    /**
     * 18: Housing/Homelessness
     */
    HousingHomelessness = "18",
    /**
     * 19: Interpreting
     */
    Interpreting = "19",
    /**
     * 2: Aged Care
     */
    AgedCare = "2",
    /**
     * 20: Justice
     */
    Justice = "20",
    /**
     * 21: Legal
     */
    Legal = "21",
    /**
     * 22: Mental Health
     */
    MentalHealth = "22",
    /**
     * 23: Physical Activity &amp; Recreation
     */
    PhysicalActivityAndRecreation = "23",
    /**
     * 24: Regulation
     */
    Regulation = "24",
    /**
     * 25: Respite/Carer Support
     */
    RespiteCarerSupport = "25",
    /**
     * 26: Specialist Clinical Pathology - requires referral
     */
    SpecialistClinicalPathology = "26",
    /**
     * 27: Specialist Medical - requires referral
     */
    SpecialistMedical = "27",
    /**
     * 28: Specialist Obstetrics &amp; Gynecology - requires referral
     */
    SpecialistObstetricsAndGynecology = "28",
    /**
     * 29: Specialist Paediatric - requires referral
     */
    SpecialistPaediatric = "29",
    /**
     * 3: Alternative &amp; Complementary Therapies
     */
    AlternativeComplementaryTherapies = "3",
    /**
     * 30: Specialist Radiology/Imaging - requires referral
     */
    SpecialistRadiologyImaging = "30",
    /**
     * 31: Specialist Surgical - requires referral
     */
    SpecialistSurgical = "31",
    /**
     * 32: Support group/s
     */
    SupportGroupS = "32",
    /**
     * 33: Transport
     */
    Transport = "33",
    /**
     * 34: Allied Health
     */
    AlliedHealth = "34",
    /**
     * 35: Hospital
     */
    Hospital = "35",
    /**
     * 36: Crisis Line (GPAH use only)
     */
    CrisisLineGPAHUseOnly = "36",
    /**
     * 37: Test Message (HSD admin use only)
     */
    TestMessageHSDAdmin = "37",
    /**
     * 38: NDIA
     */
    NDIA = "38",
    /**
     * 4: Child Care and/or Kindergarten
     */
    ChildCareKindergarten = "4",
    /**
     * 5: Child Development
     */
    ChildDevelopment = "5",
    /**
     * 6: Child Protection &amp; Family Services
     */
    ChildProtectionAndFamilyServices = "6",
    /**
     * 7: Community Health Care
     */
    CommunityHealthCare = "7",
    /**
     * 8: Counselling
     */
    Counselling = "8",
    /**
     * 9: Death Services
     */
    DeathServices = "9"
}
//# sourceMappingURL=ServiceCategoryValueSet.d.ts.map