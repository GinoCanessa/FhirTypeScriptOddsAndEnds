// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/contract-signer-type|4.0.1
import { Coding } from '../fhir.js';
/**
 * This value set includes sample Contract Signer Type codes.
 */
export const ContractSignerTypeValueSet = {
    /**
     * AFFL: An entity that has a business or professional relationship with another entity in accordance with an agreement.
     */
    Affiliate: new Coding({
        display: "Affiliate",
        code: "AFFL",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * AGNT: An entity that acts or is authorized to act on behalf of another entity in accordance with an agreement.
     */
    Agent: new Coding({
        display: "Agent",
        code: "AGNT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * AMENDER: A person who has corrected, edited, or amended pre-existing information.
     */
    Amender: new Coding({
        display: "Amender",
        code: "AMENDER",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * ASSIGNED: An agent role in which the agent is an Entity acting in the employ of an organization. The focus is on functional role on behalf of the organization, unlike the Employee role where the focus is on the 'Human Resources' relationship between the employee and the organization.
     */
    AssignedEntity: new Coding({
        display: "Assigned Entity",
        code: "ASSIGNED",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * AUT: An entity that authored specific content. There can be multiple authors of content, which may take such forms as a contract, a healthcare record entry or document, a policy, or a consent directive.
     */
    Author: new Coding({
        display: "Author",
        code: "AUT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * AUTHN: A person in the role of verifier who attests to the accuracy of an act, but who does not have privileges to legally authenticate information content. An example would be a resident physician who sees a patient and dictates a note, then later signs it. The resident's signature constitutes an authentication.
     */
    Authenticator: new Coding({
        display: "Authenticator",
        code: "AUTHN",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * CIT: The member of a jurisdiction afforded certain rights and encumbered with certain obligation in accordance with jurisdictional policy.
     */
    Citizen: new Coding({
        display: "Citizen",
        code: "CIT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * CLAIMANT: A party that makes a claim for coverage under a policy.
     */
    Claimant: new Coding({
        display: "Claimant",
        code: "CLAIMANT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * COAUTH: The entity that co-authored content. There can be multiple co-authors of content, which may take such forms as a contract, a healthcare record entry or document, a policy, or a consent directive.
     */
    CoAuthor: new Coding({
        display: "Co-Author",
        code: "COAUTH",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * CONSENTER: A patient or patient representative who is the grantee in a healthcare related agreement such as a consent for healthcare services, advanced directive, or a privacy consent directive in accordance with jurisdictional, organizational, or patient policy.
     */
    Consenter: new Coding({
        display: "Consenter",
        code: "CONSENTER",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * CONSWIT: A person who has witnessed and attests to observing a patient being counseled about a healthcare related agreement such as a consent for healthcare services, advanced directive, or a privacy consent directive.
     */
    ConsentWitness: new Coding({
        display: "Consent Witness",
        code: "CONSWIT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * CONT: A person or an organization that provides or receives information regarding another entity. Examples; patient NOK and emergency contacts; guarantor contact; employer contact.
     */
    Contact: new Coding({
        display: "Contact",
        code: "CONT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * COPART: A person who participates in the generation of and attest to veracity of content but is not an author or co-author. For example, a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.
     */
    CoParticipant: new Coding({
        display: "Co-Participant",
        code: "COPART",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * COVPTY: An entity, which is the insured, that receives benefits such as healthcare services, reimbursement for out-of-pocket expenses, or compensation for losses through coverage under the terms of an insurance policy. The underwriter of that policy is the scoping entity. The covered party receives coverage because of some contractual or other relationship with the holder of that policy. Note that a particular policy may cover several individuals one of whom may be, but need not be, the policy holder. Thus the notion of covered party is a role that is distinct from that of the policy holder.
     */
    CoveredParty: new Coding({
        display: "Covered Party",
        code: "COVPTY",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * DELEGATEE: A party to whom some right or authority is delegated by a delegator.
     */
    Delegatee: new Coding({
        display: "Delegatee",
        code: "DELEGATEE",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * delegator: A party that delegates a right or authority to another party.
     */
    Delegator: new Coding({
        display: "Delegator",
        code: "delegator",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * DEPEND: A person covered under an insurance policy or program based on an association with a subscriber, which is recognized by the policy holder. The dependent has an association with the subscriber such as a financial dependency or personal relationship such as that of a spouse, or a natural or adopted child. The policy holder may be required by law to recognize certain associations or may have discretion about the associations. For example, a policy holder may dictate the criteria for the dependent status of adult children who are students, such as requiring full time enrollment, or may recognize domestic partners as dependents. Under certain circumstances, the dependent may be under the indirect authority of a responsible party acting as a surrogate for the subscriber, for example, if the subscriber is differently-abled or deceased, a guardian ad lidem or estate executor may be appointed to assume the subscriber's legal standing in the relationship with the dependent.
     */
    Dependent: new Coding({
        display: "Dependent",
        code: "DEPEND",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * DPOWATT: A person who has been granted the authority to represent or act on another's behalf generally in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Unlike ordinary powers of attorney, durable powers can survive for long periods of time, and again, unlike standard powers of attorney, durable powers can continue after incompetency.
     */
    DurablePowerOfAttorney: new Coding({
        display: "Durable Power of Attorney",
        code: "DPOWATT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * EMGCON: An entity to be contacted in the event of an emergency
     */
    EmergencyContact: new Coding({
        display: "Emergency Contact",
        code: "EMGCON",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * EVTWIT: A person who attests to observing an occurrence.  For example, the witness has observed a procedure and is attesting to this fact.
     */
    EventWitness: new Coding({
        display: "Event Witness",
        code: "EVTWIT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * EXCEST: A person who has been granted the authority to act as an estate executor for a deceased person who was the responsible party.
     */
    ExecutorOfEstate: new Coding({
        display: "Executor of Estate",
        code: "EXCEST",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * GRANTEE: A person who grants to another person the authority to represent or act on that person's behalf.  Examples include (1) exercising specific rights belonging to the grantee; (2) performing specific duties on behalf of a grantee; and (3) making specific decisions concerning a grantee.
     */
    Grantee: new Coding({
        display: "Grantee",
        code: "GRANTEE",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * GRANTOR: A person who has been granted the authority to represent or act on another's behalf. Examples include (1) exercising specific rights belonging to the grantee; (2) performing specific duties on behalf of a grantee; and (3) making specific decisions concerning a grantee.
     */
    Grantor: new Coding({
        display: "Grantor",
        code: "GRANTOR",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * GUADLTM: A person appointed by the court to look out for the best interests of a minor child during the course of legal proceedings.
     */
    GuardianAdLidem: new Coding({
        display: "Guardian ad lidem",
        code: "GUADLTM",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * GUAR: A person or organization contractually recognized by the issuer as an entity that has assumed fiscal responsibility (e.g., by making or giving a promise, assurance, or pledge) for another entity's financial obligations by guaranteeing to pay for amounts owed to a particular account.  In a healthcare context, the account may be a patient's billing account for services rendered by a provider or a health plan premium account.
     */
    Guarantor: new Coding({
        display: "Guarantor",
        code: "GUAR",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * GUARD: A person or organization legally empowered with responsibility for the care of a ward.
     */
    Guardian: new Coding({
        display: "Guardian",
        code: "GUARD",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * HPOWATT: A person who has been granted the authority to represent or act on another's behalf for healthcare related matters in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific healthcare legal rights belonging to the grantee such as signing a consent directive; (2) performing specific healthcare related legal duties on behalf of a grantee such as claims payment; and (3) making specific healthcare legal decisions concerning a grantee such as consenting to healthcare services.
     */
    HealthcarePowerOfAttorney: new Coding({
        display: "Healthcare Power of Attorney",
        code: "HPOWATT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * HPROV: An entity that is authorized to provide health care services by an authorizing organization or jurisdiction.
     */
    HealthcareProvider: new Coding({
        display: "Healthcare Provider",
        code: "HPROV",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * INF: An entity that is the source of reported information (e.g., a next of kin who answers questions about the patient's history). For history questions, the patient is logically an informant, yet the informant of history questions is implicitly the subject.
     */
    Informant: new Coding({
        display: "Informant",
        code: "INF",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * INSBJ: An entity that is the subject of an investigation. This role is scoped by the party responsible for the investigation.
     */
    InvestigationSubject: new Coding({
        display: "Investigation Subject",
        code: "INSBJ",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * INTPRT: A person who converts spoken or written language into the language of key participants in an event such as when a provider is obtaining a patient's consent to treatment or permission to disclose information.
     */
    Interpreter: new Coding({
        display: "Interpreter",
        code: "INTPRT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * LEGAUTHN: A person in the role of verifier who attests to the accuracy of information content, and who has privileges to certify the legal authenticity of that content with a signature that constitutes a legal authentication.  For example, a licensed physician who signs a consult authored by a resident physician who authenticated it.
     */
    LegalAuthenticator: new Coding({
        display: "Legal Authenticator",
        code: "LEGAUTHN",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * NMDINS: A party to an insurance policy under which the insurer agrees to indemnify for losses, provides benefits for, or renders services. A named insured may be either a person, non-person living subject, or an organization, or a group of persons, non-person living subject that is the named insured under a comprehensive automobile, disability, or property and casualty policy.  The named insured and might or might not be the policy holder.
     */
    NamedInsured: new Coding({
        display: "Named Insured",
        code: "NMDINS",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * NOK: A person, who is a type of contact, designated to receive notifications on behalf of another person who is a relative.
     */
    NextOfKin: new Coding({
        display: "Next of Kin",
        code: "NOK",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * NOTARY: The party credentialed to legally attest to the contract binding by verifying the identity and capacity of the grantor and grantee, and witnessing their signing of the contract or agreement such as a real estate transaction, pre-nuptial agreement, or a will.
     */
    Notary: new Coding({
        display: "Notary",
        code: "NOTARY",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * PAT: A person, animal, or other living subject that is the actual or potential recipient of health care services.
     */
    Patient: new Coding({
        display: "Patient",
        code: "PAT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * POWATT: A person who has been granted the authority to represent or act on another's behalf generally in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific legal rights belonging to the grantee such as signing a contract; (2) performing specific legal duties on behalf of a grantee such as making loan payments; and (3) making specific legal decisions concerning a grantee such as financial investment decisions.
     */
    PowerOfAttorney: new Coding({
        display: "Power of Attorney",
        code: "POWATT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * PRIMAUTH: An entity that is the primary or sole author of information content.  In the healthcare context, there can be only one primary author of health information content in a record entry or document.
     */
    PrimaryAuthor: new Coding({
        display: "Primary Author",
        code: "PRIMAUTH",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * PRIRECIP: An entity that may, should receive, or has received information or an object to which it was primarily addressed.
     */
    PrimaryResponsibleParty: new Coding({
        display: "Primary Responsible Party ",
        code: "PRIRECIP",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * RECIP: An entity that may, should receive, or has received information or an object, which might not have been primarily addressed to it. For example, the staff of a provider, a clearinghouse, or other intermediary.
     */
    Recipient: new Coding({
        display: "Recipient",
        code: "RECIP",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * RESPRSN: An entity that has legal responsibility for another party.
     */
    ResponsibleParty: new Coding({
        display: "Responsible Party",
        code: "RESPRSN",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * REVIEWER: A person, device, or algorithm that has used approved criteria for filtered data for inclusion into the patient record.  Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.
     */
    Reviewer: new Coding({
        display: "Reviewer",
        code: "REVIEWER",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * SOURCE: An automated data source that generates a signature along with content. Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.
     */
    Source: new Coding({
        display: "Source",
        code: "SOURCE",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * SPOWATT: A person who has been granted the authority to represent or act on another's behalf for a limited set of specific matters in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific legal rights belonging to the grantee such as drafting a will; (2) performing specific legal duties on behalf of a grantee such as making a reversible mortgage to pay for end of life expenses; and (3) making specific legal decisions concerning a grantee such as managing a trust.
     */
    SpecialPowerOfAttorney: new Coding({
        display: "Special Power of Attorney",
        code: "SPOWATT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * TRANS: An entity entering the data into the originating system. This includes the transcriptionist for dictated text transcribed into electronic form.
     */
    Transcriber: new Coding({
        display: "Transcriber",
        code: "TRANS",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * VALID: A person who validates a health information document for inclusion in the patient record. For example, a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient's medical record.
     */
    Validator: new Coding({
        display: "Validator",
        code: "VALID",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * VERF: A person who asserts the correctness and appropriateness of an act or the recording of the act, and is accountable for the assertion that the act or the recording of the act complies with jurisdictional or organizational policy. For example, a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.
     */
    Verifier: new Coding({
        display: "Verifier",
        code: "VERF",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
    /**
     * WIT: A person witnessing the signature of another party. A witness is not knowledgeable about the content being signed, much less approves of anything stated in the content. For example, an advanced directive witness or a witness that a party to a contract signed that certain demographic or financial information is truthful.
     */
    Witness: new Coding({
        display: "Witness",
        code: "WIT",
        system: "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
    }),
};
/**
 * This value set includes sample Contract Signer Type codes.
 */
//# sourceMappingURL=ContractSignerTypeValueSet.js.map