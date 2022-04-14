import { Coding } from '../strictmodels';
/**
 * How an entity was used in an activity.
 */
export declare const ProvenanceEntityRole: {
    /**
     * A transformation of an entity into another, an update of an entity resulting in a new one, or the construction of a new entity based on a pre-existing entity.
     */
    provenance_entity_role_Derivation: Coding;
    /**
     * The repeat of (some or all of) an entity, such as text or image, by someone who might or might not be its original author.
     */
    provenance_entity_role_Quotation: Coding;
    /**
     * A derivation for which the entity is removed from accessibility usually through the use of the Delete operation.
     */
    provenance_entity_role_Removal: Coding;
    /**
     * A derivation for which the resulting entity is a revised version of some original.
     */
    provenance_entity_role_Revision: Coding;
    /**
     * A primary source for a topic refers to something produced by some agent with direct experience and knowledge about the topic, at the time of the topic's study, without benefit from hindsight.
     */
    provenance_entity_role_Source: Coding;
};
//# sourceMappingURL=ProvenanceEntityRole.d.ts.map