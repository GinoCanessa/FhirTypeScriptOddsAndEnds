// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/provenance-agent-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * The type of participation a provenance participant.
 */
export const ProvenanceAgentTypeValueSet = {
    /**
     * assembler: A device that operates independently of an author on custodian's algorithms for data extraction of existing information for purpose of generating a new artifact.
     */
    Assembler: new Coding({
        display: "Assembler",
        code: "assembler",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
    }),
    /**
     * attester: A verifier who attests to the accuracy of the resource
     */
    Attester: new Coding({
        display: "Attester",
        code: "attester",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
    }),
    /**
     * author: A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource
     */
    Author: new Coding({
        display: "Author",
        code: "author",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
    }),
    /**
     * composer: A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.
     */
    Composer: new Coding({
        display: "Composer",
        code: "composer",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
    }),
    /**
     * custodian: The entity that is accountable for maintaining a true an accurate copy of the original record
     */
    Custodian: new Coding({
        display: "Custodian",
        code: "custodian",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
    }),
    /**
     * enterer: A person entering the data into the originating system
     */
    Enterer: new Coding({
        display: "Enterer",
        code: "enterer",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
    }),
    /**
     * informant: A person who reported information that contributed to the resource
     */
    Informant: new Coding({
        display: "Informant",
        code: "informant",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
    }),
    /**
     * legal: The person authenticated the content and accepted legal responsibility for its content
     */
    LegalAuthenticator: new Coding({
        display: "Legal Authenticator",
        code: "legal",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
    }),
    /**
     * performer: A person, animal, organization or device that who actually and principally carries out the activity
     */
    Performer: new Coding({
        display: "Performer",
        code: "performer",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
    }),
    /**
     * verifier: A person who verifies the correctness and appropriateness of activity
     */
    Verifier: new Coding({
        display: "Verifier",
        code: "verifier",
        system: "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
    }),
};
/**
 * The type of participation a provenance participant.
 */
export var ProvenanceAgentTypeValueSetEnum;
(function (ProvenanceAgentTypeValueSetEnum) {
    /**
     * assembler: A device that operates independently of an author on custodian's algorithms for data extraction of existing information for purpose of generating a new artifact.
     */
    ProvenanceAgentTypeValueSetEnum["Assembler"] = "assembler";
    /**
     * attester: A verifier who attests to the accuracy of the resource
     */
    ProvenanceAgentTypeValueSetEnum["Attester"] = "attester";
    /**
     * author: A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource
     */
    ProvenanceAgentTypeValueSetEnum["Author"] = "author";
    /**
     * composer: A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.
     */
    ProvenanceAgentTypeValueSetEnum["Composer"] = "composer";
    /**
     * custodian: The entity that is accountable for maintaining a true an accurate copy of the original record
     */
    ProvenanceAgentTypeValueSetEnum["Custodian"] = "custodian";
    /**
     * enterer: A person entering the data into the originating system
     */
    ProvenanceAgentTypeValueSetEnum["Enterer"] = "enterer";
    /**
     * informant: A person who reported information that contributed to the resource
     */
    ProvenanceAgentTypeValueSetEnum["Informant"] = "informant";
    /**
     * legal: The person authenticated the content and accepted legal responsibility for its content
     */
    ProvenanceAgentTypeValueSetEnum["LegalAuthenticator"] = "legal";
    /**
     * performer: A person, animal, organization or device that who actually and principally carries out the activity
     */
    ProvenanceAgentTypeValueSetEnum["Performer"] = "performer";
    /**
     * verifier: A person who verifies the correctness and appropriateness of activity
     */
    ProvenanceAgentTypeValueSetEnum["Verifier"] = "verifier";
})(ProvenanceAgentTypeValueSetEnum || (ProvenanceAgentTypeValueSetEnum = {}));
//# sourceMappingURL=ProvenanceAgentTypeValueSet.js.map