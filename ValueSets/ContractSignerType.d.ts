import { Coding } from '../strictmodels';
/**
 * This value set includes sample Contract Signer Type codes.
 */
export declare const ContractSignerType: {
    /**
     * An entity that has a business or professional relationship with another entity in accordance with an agreement.
     */
    contract_signer_type_Affiliate: Coding;
    /**
     * An entity that acts or is authorized to act on behalf of another entity in accordance with an agreement.
     */
    contract_signer_type_Agent: Coding;
    /**
     * A person who has corrected, edited, or amended pre-existing information.
     */
    contract_signer_type_Amender: Coding;
    /**
     * An agent role in which the agent is an Entity acting in the employ of an organization. The focus is on functional role on behalf of the organization, unlike the Employee role where the focus is on the 'Human Resources' relationship between the employee and the organization.
     */
    contract_signer_type_AssignedEntity: Coding;
    /**
     * An entity that authored specific content. There can be multiple authors of content, which may take such forms as a contract, a healthcare record entry or document, a policy, or a consent directive.
     */
    contract_signer_type_Author: Coding;
    /**
     * A person in the role of verifier who attests to the accuracy of an act, but who does not have privileges to legally authenticate information content. An example would be a resident physician who sees a patient and dictates a note, then later signs it. The resident's signature constitutes an authentication.
     */
    contract_signer_type_Authenticator: Coding;
    /**
     * The member of a jurisdiction afforded certain rights and encumbered with certain obligation in accordance with jurisdictional policy.
     */
    contract_signer_type_Citizen: Coding;
    /**
     * A party that makes a claim for coverage under a policy.
     */
    contract_signer_type_Claimant: Coding;
    /**
     * The entity that co-authored content. There can be multiple co-authors of content, which may take such forms as a contract, a healthcare record entry or document, a policy, or a consent directive.
     */
    contract_signer_type_CoAuthor: Coding;
    /**
     * A patient or patient representative who is the grantee in a healthcare related agreement such as a consent for healthcare services, advanced directive, or a privacy consent directive in accordance with jurisdictional, organizational, or patient policy.
     */
    contract_signer_type_Consenter: Coding;
    /**
     * A person who has witnessed and attests to observing a patient being counseled about a healthcare related agreement such as a consent for healthcare services, advanced directive, or a privacy consent directive.
     */
    contract_signer_type_ConsentWitness: Coding;
    /**
     * A person or an organization that provides or receives information regarding another entity. Examples; patient NOK and emergency contacts; guarantor contact; employer contact.
     */
    contract_signer_type_Contact: Coding;
    /**
     * A person who participates in the generation of and attest to veracity of content but is not an author or co-author. For example, a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.
     */
    contract_signer_type_CoParticipant: Coding;
    /**
     * An entity, which is the insured, that receives benefits such as healthcare services, reimbursement for out-of-pocket expenses, or compensation for losses through coverage under the terms of an insurance policy. The underwriter of that policy is the scoping entity. The covered party receives coverage because of some contractual or other relationship with the holder of that policy. Note that a particular policy may cover several individuals one of whom may be, but need not be, the policy holder. Thus the notion of covered party is a role that is distinct from that of the policy holder.
     */
    contract_signer_type_CoveredParty: Coding;
    /**
     * A party to whom some right or authority is delegated by a delegator.
     */
    contract_signer_type_Delegatee: Coding;
    /**
     * A party that delegates a right or authority to another party.
     */
    contract_signer_type_Delegator: Coding;
    /**
     * A person covered under an insurance policy or program based on an association with a subscriber, which is recognized by the policy holder. The dependent has an association with the subscriber such as a financial dependency or personal relationship such as that of a spouse, or a natural or adopted child. The policy holder may be required by law to recognize certain associations or may have discretion about the associations. For example, a policy holder may dictate the criteria for the dependent status of adult children who are students, such as requiring full time enrollment, or may recognize domestic partners as dependents. Under certain circumstances, the dependent may be under the indirect authority of a responsible party acting as a surrogate for the subscriber, for example, if the subscriber is differently-abled or deceased, a guardian ad lidem or estate executor may be appointed to assume the subscriber's legal standing in the relationship with the dependent.
     */
    contract_signer_type_Dependent: Coding;
    /**
     * A person who has been granted the authority to represent or act on another's behalf generally in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Unlike ordinary powers of attorney, durable powers can survive for long periods of time, and again, unlike standard powers of attorney, durable powers can continue after incompetency.
     */
    contract_signer_type_DurablePowerOfAttorney: Coding;
    /**
     * An entity to be contacted in the event of an emergency
     */
    contract_signer_type_EmergencyContact: Coding;
    /**
     * A person who attests to observing an occurrence.  For example, the witness has observed a procedure and is attesting to this fact.
     */
    contract_signer_type_EventWitness: Coding;
    /**
     * A person who has been granted the authority to act as an estate executor for a deceased person who was the responsible party.
     */
    contract_signer_type_ExecutorOfEstate: Coding;
    /**
     * A person who grants to another person the authority to represent or act on that person's behalf.  Examples include (1) exercising specific rights belonging to the grantee; (2) performing specific duties on behalf of a grantee; and (3) making specific decisions concerning a grantee.
     */
    contract_signer_type_Grantee: Coding;
    /**
     * A person who has been granted the authority to represent or act on another's behalf. Examples include (1) exercising specific rights belonging to the grantee; (2) performing specific duties on behalf of a grantee; and (3) making specific decisions concerning a grantee.
     */
    contract_signer_type_Grantor: Coding;
    /**
     * A person appointed by the court to look out for the best interests of a minor child during the course of legal proceedings.
     */
    contract_signer_type_GuardianAdLidem: Coding;
    /**
     * A person or organization contractually recognized by the issuer as an entity that has assumed fiscal responsibility (e.g., by making or giving a promise, assurance, or pledge) for another entity's financial obligations by guaranteeing to pay for amounts owed to a particular account.  In a healthcare context, the account may be a patient's billing account for services rendered by a provider or a health plan premium account.
     */
    contract_signer_type_Guarantor: Coding;
    /**
     * A person or organization legally empowered with responsibility for the care of a ward.
     */
    contract_signer_type_Guardian: Coding;
    /**
     * A person who has been granted the authority to represent or act on another's behalf for healthcare related matters in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific healthcare legal rights belonging to the grantee such as signing a consent directive; (2) performing specific healthcare related legal duties on behalf of a grantee such as claims payment; and (3) making specific healthcare legal decisions concerning a grantee such as consenting to healthcare services.
     */
    contract_signer_type_HealthcarePowerOfAttorney: Coding;
    /**
     * An entity that is authorized to provide health care services by an authorizing organization or jurisdiction.
     */
    contract_signer_type_HealthcareProvider: Coding;
    /**
     * An entity that is the source of reported information (e.g., a next of kin who answers questions about the patient's history). For history questions, the patient is logically an informant, yet the informant of history questions is implicitly the subject.
     */
    contract_signer_type_Informant: Coding;
    /**
     * An entity that is the subject of an investigation. This role is scoped by the party responsible for the investigation.
     */
    contract_signer_type_InvestigationSubject: Coding;
    /**
     * A person who converts spoken or written language into the language of key participants in an event such as when a provider is obtaining a patient's consent to treatment or permission to disclose information.
     */
    contract_signer_type_Interpreter: Coding;
    /**
     * A person in the role of verifier who attests to the accuracy of information content, and who has privileges to certify the legal authenticity of that content with a signature that constitutes a legal authentication.  For example, a licensed physician who signs a consult authored by a resident physician who authenticated it.
     */
    contract_signer_type_LegalAuthenticator: Coding;
    /**
     * A party to an insurance policy under which the insurer agrees to indemnify for losses, provides benefits for, or renders services. A named insured may be either a person, non-person living subject, or an organization, or a group of persons, non-person living subject that is the named insured under a comprehensive automobile, disability, or property and casualty policy.  The named insured and might or might not be the policy holder.
     */
    contract_signer_type_NamedInsured: Coding;
    /**
     * A person, who is a type of contact, designated to receive notifications on behalf of another person who is a relative.
     */
    contract_signer_type_NextOfKin: Coding;
    /**
     * The party credentialed to legally attest to the contract binding by verifying the identity and capacity of the grantor and grantee, and witnessing their signing of the contract or agreement such as a real estate transaction, pre-nuptial agreement, or a will.
     */
    contract_signer_type_Notary: Coding;
    /**
     * A person, animal, or other living subject that is the actual or potential recipient of health care services.
     */
    contract_signer_type_Patient: Coding;
    /**
     * A person who has been granted the authority to represent or act on another's behalf generally in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific legal rights belonging to the grantee such as signing a contract; (2) performing specific legal duties on behalf of a grantee such as making loan payments; and (3) making specific legal decisions concerning a grantee such as financial investment decisions.
     */
    contract_signer_type_PowerOfAttorney: Coding;
    /**
     * An entity that is the primary or sole author of information content.  In the healthcare context, there can be only one primary author of health information content in a record entry or document.
     */
    contract_signer_type_PrimaryAuthor: Coding;
    /**
     * An entity that may, should receive, or has received information or an object to which it was primarily addressed.
     */
    contract_signer_type_PrimaryResponsibleParty: Coding;
    /**
     * An entity that may, should receive, or has received information or an object, which might not have been primarily addressed to it. For example, the staff of a provider, a clearinghouse, or other intermediary.
     */
    contract_signer_type_Recipient: Coding;
    /**
     * An entity that has legal responsibility for another party.
     */
    contract_signer_type_ResponsibleParty: Coding;
    /**
     * A person, device, or algorithm that has used approved criteria for filtered data for inclusion into the patient record.  Examples: (1) a medical records clerk who scans a document for inclusion in the medical record, enters header information, or catalogues and classifies the data, or a combination thereof; (2) a gateway that receives data from another computer system and interprets that data or changes its format, or both, before entering it into the patient record.
     */
    contract_signer_type_Reviewer: Coding;
    /**
     * An automated data source that generates a signature along with content. Examples: (1) the signature for an image that is generated by a device for inclusion in the patient record; (2) the signature for an ECG derived by an ECG system for inclusion in the patient record; (3) the data from a biomedical monitoring device or system that is for inclusion in the patient record.
     */
    contract_signer_type_Source: Coding;
    /**
     * A person who has been granted the authority to represent or act on another's behalf for a limited set of specific matters in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts. Examples include (1) exercising specific legal rights belonging to the grantee such as drafting a will; (2) performing specific legal duties on behalf of a grantee such as making a reversible mortgage to pay for end of life expenses; and (3) making specific legal decisions concerning a grantee such as managing a trust.
     */
    contract_signer_type_SpecialPowerOfAttorney: Coding;
    /**
     * An entity entering the data into the originating system. This includes the transcriptionist for dictated text transcribed into electronic form.
     */
    contract_signer_type_Transcriber: Coding;
    /**
     * A person who validates a health information document for inclusion in the patient record. For example, a medical student or resident is credentialed to perform history or physical examinations and to write progress notes. The attending physician signs the history and physical examination to validate the entry for inclusion in the patient's medical record.
     */
    contract_signer_type_Validator: Coding;
    /**
     * A person who asserts the correctness and appropriateness of an act or the recording of the act, and is accountable for the assertion that the act or the recording of the act complies with jurisdictional or organizational policy. For example, a physician is required to countersign a verbal order that has previously been recorded in the medical record by a registered nurse who has carried out the verbal order.
     */
    contract_signer_type_Verifier: Coding;
    /**
     * A person witnessing the signature of another party. A witness is not knowledgeable about the content being signed, much less approves of anything stated in the content. For example, an advanced directive witness or a witness that a party to a contract signed that certain demographic or financial information is truthful.
     */
    contract_signer_type_Witness: Coding;
};
//# sourceMappingURL=ContractSignerType.d.ts.map