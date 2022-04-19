import { Coding } from '../fhir';
/**
 * The type of participation a provenance participant.
 */
export declare const ProvenanceAgentTypeValueSet: {
    /**
     * A device that operates independently of an author on custodian's algorithms for data extraction of existing information for purpose of generating a new artifact.
     */
    provenance_agent_type_Assembler: Coding;
    /**
     * A verifier who attests to the accuracy of the resource
     */
    provenance_agent_type_Attester: Coding;
    /**
     * A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource
     */
    provenance_agent_type_Author: Coding;
    /**
     * A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.
     */
    provenance_agent_type_Composer: Coding;
    /**
     * The entity that is accountable for maintaining a true an accurate copy of the original record
     */
    provenance_agent_type_Custodian: Coding;
    /**
     * A person entering the data into the originating system
     */
    provenance_agent_type_Enterer: Coding;
    /**
     * A person who reported information that contributed to the resource
     */
    provenance_agent_type_Informant: Coding;
    /**
     * The person authenticated the content and accepted legal responsibility for its content
     */
    provenance_agent_type_LegalAuthenticator: Coding;
    /**
     * A person, animal, organization or device that who actually and principally carries out the activity
     */
    provenance_agent_type_Performer: Coding;
    /**
     * A person who verifies the correctness and appropriateness of activity
     */
    provenance_agent_type_Verifier: Coding;
};
//# sourceMappingURL=ProvenanceAgentTypeValueSet.d.ts.map