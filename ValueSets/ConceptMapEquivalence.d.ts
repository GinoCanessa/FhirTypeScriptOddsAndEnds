import { Coding } from '../strictmodels';
/**
 * The degree of equivalence between concepts.
 */
export declare const ConceptMapEquivalence: {
    /**
     * This is an explicit assertion that there is no mapping between the source and target concept.
     */
    concept_map_equivalence_Disjoint: Coding;
    /**
     * The definitions of the concepts are exactly the same (i.e. only grammatical differences) and structural implications of meaning are identical or irrelevant (i.e. intentionally identical).
     */
    concept_map_equivalence_Equal: Coding;
    /**
     * The definitions of the concepts mean the same thing (including when structural implications of meaning are considered) (i.e. extensionally identical).
     */
    concept_map_equivalence_Equivalent: Coding;
    /**
     * The target mapping overlaps with the source concept, but both source and target cover additional meaning, or the definitions are imprecise and it is uncertain whether they have the same boundaries to their meaning. The sense in which the mapping is inexact SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
     */
    concept_map_equivalence_Inexact: Coding;
    /**
     * The target mapping is narrower in meaning than the source concept. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.
     */
    concept_map_equivalence_Narrower: Coding;
    /**
     * The concepts are related to each other, and have at least some overlap in meaning, but the exact relationship is not known.
     */
    concept_map_equivalence_RelatedTo: Coding;
    /**
     * The target mapping specializes the meaning of the source concept (e.g. the target is-a source).
     */
    concept_map_equivalence_Specializes: Coding;
    /**
     * The target mapping subsumes the meaning of the source concept (e.g. the source is-a target).
     */
    concept_map_equivalence_Subsumes: Coding;
    /**
     * There is no match for this concept in the target code system.
     */
    concept_map_equivalence_Unmatched: Coding;
    /**
     * The target mapping is wider in meaning than the source concept.
     */
    concept_map_equivalence_Wider: Coding;
};
//# sourceMappingURL=ConceptMapEquivalence.d.ts.map