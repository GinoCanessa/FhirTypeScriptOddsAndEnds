/**
 * The degree of equivalence between concepts.
 */
export declare enum ConceptMapEquivalenceValueSetEnum {
    /**
     * disjoint: This is an explicit assertion that there is no mapping between the source and target concept.
     */
    Disjoint = "disjoint",
    /**
     * equal: The definitions of the concepts are exactly the same (i.e. only grammatical differences) and structural implications of meaning are identical or irrelevant (i.e. intentionally identical).
     */
    Equal = "equal",
    /**
     * equivalent: The definitions of the concepts mean the same thing (including when structural implications of meaning are considered) (i.e. extensionally identical).
     */
    Equivalent = "equivalent",
    /**
     * inexact: The target mapping overlaps with the source concept, but both source and target cover additional meaning, or the definitions are imprecise and it is uncertain whether they have the same boundaries to their meaning. The sense in which the mapping is inexact SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
     */
    Inexact = "inexact",
    /**
     * narrower: The target mapping is narrower in meaning than the source concept. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
     */
    Narrower = "narrower",
    /**
     * relatedto: The concepts are related to each other, and have at least some overlap in meaning, but the exact relationship is not known.
     */
    RelatedTo = "relatedto",
    /**
     * specializes: The target mapping specializes the meaning of the source concept (e.g. the target is-a source).
     */
    Specializes = "specializes",
    /**
     * subsumes: The target mapping subsumes the meaning of the source concept (e.g. the source is-a target).
     */
    Subsumes = "subsumes",
    /**
     * unmatched: There is no match for this concept in the target code system.
     */
    Unmatched = "unmatched",
    /**
     * wider: The target mapping is wider in meaning than the source concept.
     */
    Wider = "wider"
}
//# sourceMappingURL=ConceptMapEquivalenceValueSetEnum.d.ts.map