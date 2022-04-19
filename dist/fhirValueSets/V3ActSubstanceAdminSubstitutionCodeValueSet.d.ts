import { Coding } from '../fhir';
/**
 * No Description Provided
 */
export declare const V3ActSubstanceAdminSubstitutionCodeValueSet: {
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
    v3_substanceAdminSubstitution_BrandComposition: Coding;
    /**
     * Description: Substitution occurred or is permitted with another bioequivalent and therapeutically equivalent product.
     */
    v3_substanceAdminSubstitution_Equivalent: Coding;
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
    v3_substanceAdminSubstitution_EquivalentComposition: Coding;
    /**
     * Description: This substitution was performed or is permitted based on formulary guidelines.
     */
    v3_substanceAdminSubstitution_Formulary: Coding;
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
    v3_substanceAdminSubstitution_GenericComposition: Coding;
    /**
     * No substitution occurred or is permitted.
     */
    v3_substanceAdminSubstitution_None: Coding;
    /**
     * Description: Substitution occurred or is permitted between therapeutically equivalent Brands but not Generics
     * &gt;
     *                            Examples:
     *
     *
     *
     *                            Zantac for Tagamet
     */
    v3_substanceAdminSubstitution_TherapeuticBrand: Coding;
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
    v3_substanceAdminSubstitution_TherapeuticAlternative: Coding;
    /**
     * Description: Substitution occurred or is permitted between therapeutically equivalent Generics but not Brands
     * &gt;
     *                            Examples:
     *
     *
     *
     *                            Ranitidine  for cimetidine
     */
    v3_substanceAdminSubstitution_TherapeuticGeneric: Coding;
};
//# sourceMappingURL=V3ActSubstanceAdminSubstitutionCodeValueSet.d.ts.map