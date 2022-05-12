// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/provenance-agent-role|4.0.1
/**
 * The role that a provenance participant played
 */
export var ProvenanceAgentRoleValueSetEnum;
(function (ProvenanceAgentRoleValueSetEnum) {
    /**
     * assembler: A device that operates independently of an author on custodian's algorithms for data extraction of existing information for purpose of generating a new artifact.
     */
    ProvenanceAgentRoleValueSetEnum["Assembler"] = "assembler";
    /**
     * attester: A verifier who attests to the accuracy of the resource
     */
    ProvenanceAgentRoleValueSetEnum["Attester"] = "attester";
    /**
     * author: A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource
     */
    ProvenanceAgentRoleValueSetEnum["Author"] = "author";
    /**
     * composer: A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.
     */
    ProvenanceAgentRoleValueSetEnum["Composer"] = "composer";
    /**
     * custodian: The entity that is accountable for maintaining a true an accurate copy of the original record
     */
    ProvenanceAgentRoleValueSetEnum["Custodian"] = "custodian";
    /**
     * enterer: A person entering the data into the originating system
     */
    ProvenanceAgentRoleValueSetEnum["Enterer"] = "enterer";
    /**
     * informant: A person who reported information that contributed to the resource
     */
    ProvenanceAgentRoleValueSetEnum["Informant"] = "informant";
    /**
     * legal: The person authenticated the content and accepted legal responsibility for its content
     */
    ProvenanceAgentRoleValueSetEnum["LegalAuthenticator"] = "legal";
    /**
     * performer: A person, animal, organization or device that who actually and principally carries out the activity
     */
    ProvenanceAgentRoleValueSetEnum["Performer"] = "performer";
    /**
     * verifier: A person who verifies the correctness and appropriateness of activity
     */
    ProvenanceAgentRoleValueSetEnum["Verifier"] = "verifier";
})(ProvenanceAgentRoleValueSetEnum || (ProvenanceAgentRoleValueSetEnum = {}));
//# sourceMappingURL=ProvenanceAgentRoleValueSetEnum.js.map