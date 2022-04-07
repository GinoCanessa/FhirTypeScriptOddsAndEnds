/**
 * The type of participation a provenance participant.
 */
export var ProvenanceAgentType = {
    /**
     * A device that operates independently of an author on custodian's algorithms for data extraction of existing information for purpose of generating a new artifact.
     */
    provenance_agent_type_Assembler: {
        code: "assembler",
        display: "Assembler",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
    },
    /**
     * A verifier who attests to the accuracy of the resource
     */
    provenance_agent_type_Attester: {
        code: "attester",
        display: "Attester",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
    },
    /**
     * A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource
     */
    provenance_agent_type_Author: {
        code: "author",
        display: "Author",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
    },
    /**
     * A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.
     */
    provenance_agent_type_Composer: {
        code: "composer",
        display: "Composer",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
    },
    /**
     * The entity that is accountable for maintaining a true an accurate copy of the original record
     */
    provenance_agent_type_Custodian: {
        code: "custodian",
        display: "Custodian",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
    },
    /**
     * A person entering the data into the originating system
     */
    provenance_agent_type_Enterer: {
        code: "enterer",
        display: "Enterer",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
    },
    /**
     * A person who reported information that contributed to the resource
     */
    provenance_agent_type_Informant: {
        code: "informant",
        display: "Informant",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
    },
    /**
     * The person authenticated the content and accepted legal responsibility for its content
     */
    provenance_agent_type_LegalAuthenticator: {
        code: "legal",
        display: "Legal Authenticator",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
    },
    /**
     * A person, animal, organization or device that who actually and principally carries out the activity
     */
    provenance_agent_type_Performer: {
        code: "performer",
        display: "Performer",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
    },
    /**
     * A person who verifies the correctness and appropriateness of activity
     */
    provenance_agent_type_Verifier: {
        code: "verifier",
        display: "Verifier",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type"
    }
};
