// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/provenance-agent-role|4.0.1

import { Coding } from '../fhir.js'

/**
 * The role that a provenance participant played
 */
export const ProvenanceAgentRoleValueSet = {
  /**
   * assembler: A device that operates independently of an author on custodian's algorithms for data extraction of existing information for purpose of generating a new artifact.
   */
  Assembler: new Coding({
    display: "Assembler",
    code: "assembler",
    system: "http://hl7.org/fhir/provenance-participant-role",
  }),
  /**
   * attester: A verifier who attests to the accuracy of the resource
   */
  Attester: new Coding({
    display: "Attester",
    code: "attester",
    system: "http://hl7.org/fhir/provenance-participant-role",
  }),
  /**
   * author: A party that originates the resource and therefore has responsibility for the information given in the resource and ownership of this resource
   */
  Author: new Coding({
    display: "Author",
    code: "author",
    system: "http://hl7.org/fhir/provenance-participant-role",
  }),
  /**
   * composer: A device used by an author to record new information, which may also be used by the author to select existing information for aggregation with newly recorded information for the purpose of generating a new artifact.
   */
  Composer: new Coding({
    display: "Composer",
    code: "composer",
    system: "http://hl7.org/fhir/provenance-participant-role",
  }),
  /**
   * custodian: The entity that is accountable for maintaining a true an accurate copy of the original record
   */
  Custodian: new Coding({
    display: "Custodian",
    code: "custodian",
    system: "http://hl7.org/fhir/provenance-participant-role",
  }),
  /**
   * enterer: A person entering the data into the originating system
   */
  Enterer: new Coding({
    display: "Enterer",
    code: "enterer",
    system: "http://hl7.org/fhir/provenance-participant-role",
  }),
  /**
   * informant: A person who reported information that contributed to the resource
   */
  Informant: new Coding({
    display: "Informant",
    code: "informant",
    system: "http://hl7.org/fhir/provenance-participant-role",
  }),
  /**
   * legal: The person authenticated the content and accepted legal responsibility for its content
   */
  LegalAuthenticator: new Coding({
    display: "Legal Authenticator",
    code: "legal",
    system: "http://hl7.org/fhir/provenance-participant-role",
  }),
  /**
   * performer: A person, animal, organization or device that who actually and principally carries out the activity
   */
  Performer: new Coding({
    display: "Performer",
    code: "performer",
    system: "http://hl7.org/fhir/provenance-participant-role",
  }),
  /**
   * verifier: A person who verifies the correctness and appropriateness of activity
   */
  Verifier: new Coding({
    display: "Verifier",
    code: "verifier",
    system: "http://hl7.org/fhir/provenance-participant-role",
  }),
} as const;

/**
 * The role that a provenance participant played
 */
export type ProvenanceAgentRoleValueSetType = typeof ProvenanceAgentRoleValueSet;

/**
 * The role that a provenance participant played
 */
