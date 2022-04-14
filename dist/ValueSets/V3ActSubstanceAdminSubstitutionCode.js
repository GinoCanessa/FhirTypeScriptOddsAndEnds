"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.V3ActSubstanceAdminSubstitutionCode = void 0;
/**
 * No Description Provided
 */
exports.V3ActSubstanceAdminSubstitutionCode = {
    /**
     * Description:
     *
     *
     *                         Substitution occurred or is permitted between equivalent Brands but not Generics
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Zestril  for Prinivil
     *                            Coumadin for Jantoven
     */
    v3_substanceAdminSubstitution_BrandComposition: {
        code: "BC",
        display: "brand composition",
        system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
    },
    /**
     * Description: Substitution occurred or is permitted with another bioequivalent and therapeutically equivalent product.
     */
    v3_substanceAdminSubstitution_Equivalent: {
        code: "E",
        display: "equivalent",
        system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
    },
    /**
     * Description:
     *
     *
     *                         Substitution occurred or is permitted with another product that is a:
     *
     *
     *                            pharmaceutical alternative containing the same active ingredient but is formulated with different salt, ester
     *                            pharmaceutical equivalent that has the same active ingredient, strength, dosage form and route of administration
     *
     *
     *                            Examples:
     *
     *
     *
     *
     *                               Pharmaceutical alternative: Erythromycin Ethylsuccinate for Erythromycin Stearate
     *
     *                               Pharmaceutical equivalent: Lisonpril for Zestril
     */
    v3_substanceAdminSubstitution_EquivalentComposition: {
        code: "EC",
        display: "equivalent composition",
        system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
    },
    /**
     * Description: This substitution was performed or is permitted based on formulary guidelines.
     */
    v3_substanceAdminSubstitution_Formulary: {
        code: "F",
        display: "formulary",
        system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
    },
    /**
     * Description: Substitution occurred or is permitted between equivalent Generics but not Brands
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Lisnopril (Lupin Corp) for Lisnopril (Wockhardt Corp)
     */
    v3_substanceAdminSubstitution_GenericComposition: {
        code: "G",
        display: "generic composition",
        system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
    },
    /**
     * No substitution occurred or is permitted.
     */
    v3_substanceAdminSubstitution_None: {
        code: "N",
        display: "none",
        system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
    },
    /**
     * Description: Substitution occurred or is permitted between therapeutically equivalent Brands but not Generics
     * &gt;
     *                            Examples:
     *
     *
     *
     *                            Zantac for Tagamet
     */
    v3_substanceAdminSubstitution_TherapeuticBrand: {
        code: "TB",
        display: "therapeutic brand",
        system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
    },
    /**
     * Description: Substitution occurred or is permitted with another product having the same therapeutic objective and safety profile.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            ranitidine for Tagamet
     */
    v3_substanceAdminSubstitution_TherapeuticAlternative: {
        code: "TE",
        display: "therapeutic alternative",
        system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
    },
    /**
     * Description: Substitution occurred or is permitted between therapeutically equivalent Generics but not Brands
     * &gt;
     *                            Examples:
     *
     *
     *
     *                            Ranitidine  for cimetidine
     */
    v3_substanceAdminSubstitution_TherapeuticGeneric: {
        code: "TG",
        display: "therapeutic generic",
        system: "http://terminology.hl7.org/CodeSystem/v3-substanceAdminSubstitution"
    },
};
//# sourceMappingURL=V3ActSubstanceAdminSubstitutionCode.js.map