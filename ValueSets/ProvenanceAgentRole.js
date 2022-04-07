/**
 * The role that a provenance participant played
 */
export var ProvenanceAgentRole = {
    /**
     * A device that operates independently of an author on custodian's algorithms for data extraction of existing information for purpose of generating a new artifact.
     */
    provenance_agent_role_Assembler: {
        code: "assembler",
        display: "Assembler",
        system: "http://hl7.org/fhir/provenance-participant-role"
    },
    /**
     * A verifier who attests to the accuracy of the resource
     */
    provenance_agent_role_Attester: {
        code: "attester",
        display: "Attester",
        system: "http://hl7.org/fhir/provenance-participant-role"
    },
    /**
     * A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource
     */
    provenance_agent_role_Author: {
        code: "author",
        display: "Author",
        system: "http://hl7.org/fhir/provenance-participant-role"
    },
    /**
     * A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.
     */
    provenance_agent_role_Composer: {
        code: "composer",
        display: "Composer",
        system: "http://hl7.org/fhir/provenance-participant-role"
    },
    /**
     * The entity that is accountable for maintaining a true an accurate copy of the original record
     */
    provenance_agent_role_Custodian: {
        code: "custodian",
        display: "Custodian",
        system: "http://hl7.org/fhir/provenance-participant-role"
    },
    /**
     * A person entering the data into the originating system
     */
    provenance_agent_role_Enterer: {
        code: "enterer",
        display: "Enterer",
        system: "http://hl7.org/fhir/provenance-participant-role"
    },
    /**
     * A person who reported information that contributed to the resource
     */
    provenance_agent_role_Informant: {
        code: "informant",
        display: "Informant",
        system: "http://hl7.org/fhir/provenance-participant-role"
    },
    /**
     * The person authenticated the content and accepted legal responsibility for its content
     */
    provenance_agent_role_LegalAuthenticator: {
        code: "legal",
        display: "Legal Authenticator",
        system: "http://hl7.org/fhir/provenance-participant-role"
    },
    /**
     * A person, animal, organization or device that who actually and principally carries out the activity
     */
    provenance_agent_role_Performer: {
        code: "performer",
        display: "Performer",
        system: "http://hl7.org/fhir/provenance-participant-role"
    },
    /**
     * A person who verifies the correctness and appropriateness of activity
     */
    provenance_agent_role_Verifier: {
        code: "verifier",
        display: "Verifier",
        system: "http://hl7.org/fhir/provenance-participant-role"
    }
};
