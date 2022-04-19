// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Primitive Naming Style: None
// Complex Type / Resource Naming Style: PascalCase
// Interaction Naming Style: None
// Extension Support: NonPrimitive
// Minimum TypeScript Version: 3.7
import { Coding } from '../fhir';
/**
 * This value set defines an example set of codes that can be used to classify groupings of service-types/specialties.
 */
export const ServiceCategoryValueSet = {
    /**
     * Adoption
     */
    service_category_Adoption: new Coding({
        code: "1",
        display: "Adoption",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Dental
     */
    service_category_Dental: new Coding({
        code: "10",
        display: "Dental",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Disability Support
     */
    service_category_DisabilitySupport: new Coding({
        code: "11",
        display: "Disability Support",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Drug/Alcohol
     */
    service_category_DrugAlcohol: new Coding({
        code: "12",
        display: "Drug/Alcohol",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Education &amp; Learning
     */
    service_category_EducationAndLearning: new Coding({
        code: "13",
        display: "Education & Learning",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Emergency Department
     */
    service_category_EmergencyDepartment: new Coding({
        code: "14",
        display: "Emergency Department",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Employment
     */
    service_category_Employment: new Coding({
        code: "15",
        display: "Employment",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Financial &amp; Material aid
     */
    service_category_FinancialAndMaterialAid: new Coding({
        code: "16",
        display: "Financial & Material Aid",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * General Practice/GP (doctor)
     */
    service_category_GeneralPractice: new Coding({
        code: "17",
        display: "General Practice",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Housing/Homelessness
     */
    service_category_HousingHomelessness: new Coding({
        code: "18",
        display: "Housing/Homelessness",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Interpreting
     */
    service_category_Interpreting: new Coding({
        code: "19",
        display: "Interpreting",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Aged Care
     */
    service_category_AgedCare: new Coding({
        code: "2",
        display: "Aged Care",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Justice
     */
    service_category_Justice: new Coding({
        code: "20",
        display: "Justice",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Legal
     */
    service_category_Legal: new Coding({
        code: "21",
        display: "Legal",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Mental Health
     */
    service_category_MentalHealth: new Coding({
        code: "22",
        display: "Mental Health",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Physical Activity &amp; Recreation
     */
    service_category_PhysicalActivityAndRecreation: new Coding({
        code: "23",
        display: "Physical Activity & Recreation",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Regulation
     */
    service_category_Regulation: new Coding({
        code: "24",
        display: "Regulation",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Respite/Carer Support
     */
    service_category_RespiteCarerSupport: new Coding({
        code: "25",
        display: "Respite/Carer Support",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Specialist Clinical Pathology - requires referral
     */
    service_category_SpecialistClinicalPathology: new Coding({
        code: "26",
        display: "Specialist Clinical Pathology",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Specialist Medical - requires referral
     */
    service_category_SpecialistMedical: new Coding({
        code: "27",
        display: "Specialist Medical",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Specialist Obstetrics &amp; Gynecology - requires referral
     */
    service_category_SpecialistObstetricsAndGynecology: new Coding({
        code: "28",
        display: "Specialist Obstetrics & Gynecology",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Specialist Paediatric - requires referral
     */
    service_category_SpecialistPaediatric: new Coding({
        code: "29",
        display: "Specialist Paediatric",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Alternative &amp; Complementary Therapies
     */
    service_category_AlternativeComplementaryTherapies: new Coding({
        code: "3",
        display: "Alternative/Complementary Therapies",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Specialist Radiology/Imaging - requires referral
     */
    service_category_SpecialistRadiologyImaging: new Coding({
        code: "30",
        display: "Specialist Radiology/Imaging",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Specialist Surgical - requires referral
     */
    service_category_SpecialistSurgical: new Coding({
        code: "31",
        display: "Specialist Surgical",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Support group/s
     */
    service_category_SupportGroupS: new Coding({
        code: "32",
        display: "Support Group/s",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Transport
     */
    service_category_Transport: new Coding({
        code: "33",
        display: "Transport",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Allied Health
     */
    service_category_AlliedHealth: new Coding({
        code: "34",
        display: "Allied Health",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Hospital
     */
    service_category_Hospital: new Coding({
        code: "35",
        display: "Hospital",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Crisis Line (GPAH use only)
     */
    service_category_CrisisLineGPAHUseOnly: new Coding({
        code: "36",
        display: "Crisis Line (GPAH use only)",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Test Message (HSD admin use only)
     */
    service_category_TestMessageHSDAdmin: new Coding({
        code: "37",
        display: "Test Message (HSD admin)",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * NDIA
     */
    service_category_NDIA: new Coding({
        code: "38",
        display: "NDIA",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Child Care and/or Kindergarten
     */
    service_category_ChildCareKindergarten: new Coding({
        code: "4",
        display: "Child Care /Kindergarten",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Child Development
     */
    service_category_ChildDevelopment: new Coding({
        code: "5",
        display: "Child Development",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Child Protection &amp; Family Services
     */
    service_category_ChildProtectionAndFamilyServices: new Coding({
        code: "6",
        display: "Child Protection & Family Services",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Community Health Care
     */
    service_category_CommunityHealthCare: new Coding({
        code: "7",
        display: "Community Health Care",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Counselling
     */
    service_category_Counselling: new Coding({
        code: "8",
        display: "Counselling",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
    /**
     * Death Services
     */
    service_category_DeathServices: new Coding({
        code: "9",
        display: "Death Services",
        system: "http://terminology.hl7.org/CodeSystem/service-category"
    }),
};
//# sourceMappingURL=ServiceCategoryValueSet.js.map