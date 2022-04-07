/**
 * This FHIR value set is comprised of Actor participation Type codes, which can be used to value FHIR agents, actors, and other role         elements. The FHIR Actor participation type value set is based on    DICOM Audit Message, C402;   ASTM Standard, E1762-95 [2013]; selected codes and          derived actor roles from HL7 RoleClass OID 2.16.840.1.113883.5.110;    HL7 Role Code 2.16.840.1.113883.5.111, including AgentRoleType;          HL7 ParticipationType OID: 2.16.840.1.113883.5.90; and    HL7 ParticipationFunction codes OID: 2.16.840.1.113883.5.88.           This value set includes, by reference, role codes from external code systems: NUCC Health Care Provider Taxonomy OID: 2.16.840.1.113883.6.101;          North American Industry Classification System [NAICS]OID: 2.16.840.1.113883.6.85; IndustryClassificationSystem 2.16.840.1.113883.1.11.16039;          and US Census Occupation Code OID: 2.16.840.1.113883.6.243 for relevant recipient or custodian codes not included in this value set.            If no source is indicated in the definition comments, then these are example FHIR codes.
 */
export var ParticipationRoleType = {
    /**
     * A role type used to qualify a person's legal status within a country or nation.
     */
    v3_RoleCode_CitizenRoleType: {
        code: "_CitizenRoleType",
        display: "CitizenRoleType",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Audit participant role ID of software application
     */
    dicom_dcim_Application: {
        code: "110150",
        display: "Application",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit participant role ID of software application launcher, i.e., the entity that started or stopped an application
     */
    dicom_dcim_ApplicationLauncher: {
        code: "110151",
        display: "Application Launcher",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit participant role ID of the receiver of data
     */
    dicom_dcim_DestinationRoleID: {
        code: "110152",
        display: "Destination Role ID",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit participant role ID of the sender of data
     */
    dicom_dcim_SourceRoleID: {
        code: "110153",
        display: "Source Role ID",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit participant role ID of media receiving data during an export
     */
    dicom_dcim_DestinationMedia: {
        code: "110154",
        display: "Destination Media",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Audit participant role ID of media providing data during an import
     */
    dicom_dcim_SourceMedia: {
        code: "110155",
        display: "Source Media",
        system: "http://dicom.nema.org/resources/ontology/DCM"
    },
    /**
     * Player of the Affiliate role has a business/professional relationship with scoper.  Player and scoper may be persons or organization.  The Affiliate relationship does not imply membership in a group, nor does it exist for resource scheduling purposes.
     *
     *
     *                            Example: A healthcare provider is affiliated with another provider as a business associate.
     */
    v3_RoleClass_Affiliate: {
        code: "AFFL",
        display: "affiliate",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * An entity (player) that acts or is authorized to act on behalf of another entity (scoper).
     */
    v3_RoleClass_Agent: {
        code: "AGNT",
        display: "agent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * An agent role in which the agent is an Entity acting in the employ of an organization.  The focus is on functional role on behalf of the organization, unlike the Employee role where the focus is on the 'Human Resources' relationship between the employee and the organization.
     */
    v3_RoleClass_AssignedEntity: {
        code: "ASSIGNED",
        display: "assigned entity",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * Description:Caregiver authorized to receive patient health information.
     */
    v3_ParticipationFunction_CaregiverInformationReceiver: {
        code: "AUCG",
        display: "caregiver information receiver",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction"
    },
    /**
     * Description:Provider with legitimate relationship authorized to receive patient health information.
     */
    v3_ParticipationFunction_LegitimateRelationshipInformationReceiver: {
        code: "AULR",
        display: "legitimate relationship information receiver",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction"
    },
    /**
     * Definition: A party that originates the Act and therefore has responsibility for the information given in the Act and ownership of this Act.
     *
     *
     *                            Example: the report writer, the person writing the act definition, the guideline author, the placer of an order, the EKG cart (device) creating a report etc. Every Act should have an author. Authorship is regardless of mood always actual authorship.
     *
     *                         Examples of such policies might include:
     *
     *
     *
     *                               The author and anyone they explicitly delegate may update the report;
     *
     *
     *
     *                               All administrators within the same clinic may cancel and reschedule appointments created by other administrators within that clinic;
     *
     *
     *
     *                         A party that is neither an author nor a party who is extended authorship maintenance rights by policy, may only amend, reverse, override, replace, or follow up in other ways on this Act, whereby the Act remains intact and is linked to another Act authored by that other party.
     */
    v3_ParticipationType_AuthorOriginator: {
        code: "AUT",
        display: "author (originator)",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * An entity providing authorization services to enable the electronic sharing of health-related information based on resource owner's preapproved permissions. For example, an UMA Authorization Server[UMA]
     */
    extra_security_role_type_AuthorizationServer: {
        code: "authserver",
        display: "authorization server",
        system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type"
    },
    /**
     * Description:Member of care team authorized to receive patient health information.
     */
    v3_ParticipationFunction_CareTeamInformationReceiver: {
        code: "AUTM",
        display: "care team information receiver",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction"
    },
    /**
     * Description:Entities within specified work area authorized to receive patient health information.
     */
    v3_ParticipationFunction_WorkAreaInformationReceiver: {
        code: "AUWA",
        display: "work area information receiver",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction"
    },
    /**
     * A person who has fled his or her home country to find a safe place elsewhere.
     */
    v3_RoleCode_AsylumSeeker: {
        code: "CAS",
        display: "asylum seeker",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A person who is someone of below legal age who has fled his or her home country, without his or her parents, to find a safe place elsewhere at time of categorization.
     */
    v3_RoleCode_SingleMinorAsylumSeeker: {
        code: "CASM",
        display: "single minor asylum seeker",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description: A role played by a party making a claim for coverage under a policy or program.  A claimant must be either a person or organization, or a group of persons or organizations.  A claimant is not a named insured or a program eligible.
     *
     *
     *                            Discussion: With respect to liability insurance such as property and casualty insurance, a claimant must file a claim requesting indemnification for a loss that the claimant considers covered under the policy of a named insured.  The claims adjuster for the policy underwriter will review the claim to determine whether the loss meets the benefit coverage criteria under a policy, and base any indemnification or coverage payment on that review.  If a third party is liable in whole or part for the loss, the underwriter may pursue third party liability recovery.  A claimant may be involved in civil or criminal legal proceedings involving claims against a defendant party that is indemnified by an insurance policy or to protest the finding of a claims adjustor. With respect to life insurance, a beneficiary designated by a named insured becomes a claimant of the proceeds of coverage, as in the case of a life insurance policy.  However, a claimant for coverage under life insurance is not necessarily a designated beneficiary.
     *
     *
     *                            Note: A claimant is not a named insured.  However, a named insured may make a claim under a policy, e.g., an insured driver may make a claim for an injury under his or her comprehensive automobile insurance policy.  Similarly, a program eligible may make a claim under program, e.g., an unemployed worker may claim benefits under an unemployment insurance program, but parties playing these covered party role classes are not, for purposes of this vocabulary and in an effort to clearly distinguish role classes, considered claimants.
     *
     *                         In the case of a named insured making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that either a named insured or an individual insured has filed a claim for a loss.  In the case of a program eligible, a role type code INJWKR (injured worker) subtypes the class to indicate that the covered party in a workers compensation program is an injured worker, and as such, has filed a "claim" under the program for benefits.  Likewise, a covered role type code UNEMP (unemployed worker) subtypes the program eligible class to indicate that the covered party in an unemployment insurance program has filed a claim for unemployment benefits.
     *
     *
     *                            Example: A claimant under automobile policy that is not the named insured.
     */
    v3_RoleClass_Claimant: {
        code: "CLAIM",
        display: "claimant",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * An individual authorized to assign an original classification to information, including compilations of unclassified information, based on a determination that the information requires protection against unauthorized disclosure. The individual marks the information with immutable, computable, and human readable security labels in accordance with applicable security labeling policies.  The labeling policies provide instructions on whether and if so how the security labels may be later reclassified [i.e., upgraded, downgraded, used in derivative classification, or declassified] in a manner that preserves the overridden original classification binding and provenance.
     */
    v3_RoleCode_Classifier: {
        code: "CLASSIFIER",
        display: "classifier",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A person who is legally recognized as a member of a nation or country, with associated rights and obligations.
     */
    v3_RoleCode_National: {
        code: "CN",
        display: "national",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A foreigner who is present in a country (which is foreign to him/her) unlawfully or without the country's authorization (may be called an illegal alien).
     */
    v3_RoleCode_NonCountryMemberWithoutResidencePermit: {
        code: "CNRP",
        display: "non-country member without residence permit",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A person who is below legal age present in a country, without his or her parents, (which is foreign to him/her) unlawfully or without the country's authorization.
     */
    v3_RoleCode_NonCountryMemberMinorWithoutResidencePermit: {
        code: "CNRPM",
        display: "non-country member minor without residence permit",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * An entity or an entity's delegatee who is the grantee in an agreement such as a consent for services, advanced directive, or a privacy consent directive in accordance with jurisdictional, organizational, or patient policy.
     */
    v3_RoleCode_Consenter: {
        code: "CONSENTER",
        display: "consenter",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * An entity which has witnessed and attests to observing another entity being counseled about an agreement such as a consent for services, advanced directive, or a privacy consent directive.
     */
    v3_RoleCode_ConsentWitness: {
        code: "CONSWIT",
        display: "consent witness",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * An entity which participates in the generation of and attest to veracity of content, but is not an author or coauthor. For example a surgeon who is required by institutional, regulatory, or legal rules to sign an operative report, but who was not involved in the authorship of that report.
     */
    v3_RoleCode_CoParticipant: {
        code: "COPART",
        display: "co-participant",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A role class played by a person who receives benefit coverage under the terms of a particular insurance policy.  The underwriter of that policy is the scoping entity.  The covered party receives coverage because of some contractual or other relationship with the holder of that policy.
     *
     *
     *                            Discussion:This reason for coverage is captured in 'Role.code' and a relationship link with type code of indirect authority should be included using the policy holder role as the source, and the covered party role as the target.
     *
     *                         Note that a particular policy may cover several individuals one of whom may be, but need not be, the policy holder.  Thus the notion of covered party is a role that is distinct from that of the policy holder.
     */
    v3_RoleClass_CoveredParty: {
        code: "COVPTY",
        display: "covered party",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * A non-country member admitted to the territory of a nation or country as a non-resident for an explicit purpose.
     */
    v3_RoleCode_PermitCardApplicant: {
        code: "CPCA",
        display: "permit card applicant",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A foreigner who is a resident of the country but does not have citizenship.
     */
    v3_RoleCode_NonCountryMemberWithResidencePermit: {
        code: "CRP",
        display: "non-country member with residence permit",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A person who is a resident below legal age of the country without his or her parents and does not have citizenship.
     */
    v3_RoleCode_NonCountryMemberMinorWithResidencePermit: {
        code: "CRPM",
        display: "non-country member minor with residence permit",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * An entity (person, organization or device) that is in charge of maintaining the information of this act (e.g., who maintains the report or the master service catalog item, etc.).
     */
    v3_ParticipationType_Custodian: {
        code: "CST",
        display: "custodian",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * An entity that collects information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data collectors, including the right to access, retrieve, distribute, or delete that information.
     */
    extra_security_role_type_DataCollector: {
        code: "datacollector",
        display: "data collector",
        system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type"
    },
    /**
     * An entity that processes collected information over which the data subject may have certain rights under policy or law to control that information's management and distribution by data processors, including the right to access, retrieve, distribute, or delete that information.
     */
    extra_security_role_type_DataProcessor: {
        code: "dataprocessor",
        display: "data processor",
        system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type"
    },
    /**
     * A person whose personal information is collected or processed, and who may have certain rights under policy or law to control that information's management and distribution by data collectors or processors, including the right to access, retrieve, distribute, or delete that information.
     */
    extra_security_role_type_DataSubject: {
        code: "datasubject",
        display: "data subject",
        system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type"
    },
    /**
     * An individual which is authorized to declassify information based on a determination that the information no longer requires protection against unauthorized disclosure.  The individual marks the information being declassified using computable and human readable security labels indicating that this is copy of previously classified information is unclassified in accordance with applicable security labeling policies.  The labeling policies provide instructions on whether and if so how the security labels may be later reclassified [i.e., upgraded or used in derivative classification] in a manner that preserves the overridden original classification binding and provenance.
     */
    v3_RoleCode_Declassifier: {
        code: "DECLASSIFIER",
        display: "declassifier",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A party to whom some right or authority is granted by a delegator.
     */
    v3_RoleCode_Delegatee: {
        code: "DELEGATEE",
        display: "delegatee",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A party that grants all or some portion its right or authority to another party.
     */
    v3_RoleCode_Delegator: {
        code: "DELEGATOR",
        display: "delegator",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Description: A role played by a person covered under a policy or program based on an association with a subscriber, which is recognized by the policy holder.
     *
     *
     *                            Note:  The party playing the role of a dependent is not a claimant in the sense conveyed by the RoleClassCoveredParty CLAIM (claimant).  However, a dependent may make a claim under a policy, e.g., a dependent under a health insurance policy may become the claimant for coverage under that policy for wellness examines or if injured and there is no liable third party.  In the case of a dependent making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that the dependent has filed a claim for services covered under the health insurance policy.
     *
     *
     *                            Example: The dependent has an association with the subscriber such as a financial dependency or personal relationship such as that of a spouse, or a natural or adopted child.  The policy holder may be required by law to recognize certain associations or may have discretion about the associations.  For example, a policy holder may dictate the criteria for the dependent status of adult children who are students, such as requiring full time enrollment, or may recognize domestic partners as dependents.  Under certain circumstances, the dependent may be under the indirect authority of a responsible party acting as a surrogate for the subscriber, for example, if the subscriber is differently abled or deceased, a guardian ad Lidem or estate executor may be appointed to assume the subscriberaTMs legal standing in the relationship with the dependent.
     */
    v3_RoleClass_Dependent: {
        code: "DEPEN",
        display: "dependent",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * An individual authorized to lower the classification level of labeled content and provide rationale for doing so as directed by a classification guide.
     */
    v3_RoleCode_Downgrader: {
        code: "DOWNGRDER",
        display: "downgrader",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A relationship between two people in which one person authorizes another, usually a family member or relative, to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that is often limited in the kinds of powers that can be assigned.  Unlike ordinary powers of attorney, durable powers can survive for long periods of time, and again, unlike standard powers of attorney, durable powers can continue after incompetency.
     */
    v3_RoleCode_DurablePowerOfAttorney: {
        code: "DPOWATT",
        display: "durable power of attorney",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * An entity to be contacted in the event of an emergency.
     */
    v3_RoleClass_EmergencyContact: {
        code: "ECON",
        display: "emergency contact",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * A relationship between a person or organization and a person or organization formed for the purpose of exchanging work for compensation.  The purpose of the role is to identify the type of relationship the employee has to the employer, rather than the nature of the work actually performed.  (Contrast with AssignedEntity.)
     */
    v3_RoleClass_Employee: {
        code: "EMP",
        display: "employee",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * The role played by a person acting as the estate executor for a deceased subscriber or policyholder who was the responsible party
     */
    v3_RoleCode_ExecutorOfEstate: {
        code: "EXCEST",
        display: "executor of estate",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * An entity which accepts certain rights or authority from a grantor.
     */
    v3_RoleCode_Grantee: {
        code: "GRANTEE",
        display: "grantee",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * An entity which agrees to confer certain rights or authority to a grantee.
     */
    v3_RoleCode_Grantor: {
        code: "GRANTOR",
        display: "grantor",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * An individual or organization that makes or gives a promise, assurance, pledge to pay or has paid the healthcare service provider.
     */
    v3_RoleCode_Guarantor: {
        code: "GT",
        display: "Guarantor",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The role played by a person appointed by the court to look out for the best interests of a minor child during the course of legal proceedings.
     */
    v3_RoleCode_GuardianAdLidem: {
        code: "GUADLTM",
        display: "guardian ad lidem",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Guardian of a ward
     */
    v3_RoleClass_Guardian: {
        code: "GUARD",
        display: "guardian",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * A relationship between two people in which one person authorizes another to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that continues (by its terms) to be effective even though the grantor has become mentally incompetent after signing the document.
     */
    v3_RoleCode_HealthcarePowerOfAttorney: {
        code: "HPOWATT",
        display: "healthcare power of attorney",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * The human user that has participated.
     */
    extra_security_role_type_HumanUser: {
        code: "humanuser",
        display: "human user",
        system: "http://terminology.hl7.org/CodeSystem/extra-security-role-type"
    },
    /**
     * A source of reported information (e.g., a next of kin who answers questions about the patient's history).  For history questions, the patient is logically an informant, yet the informant of history questions is implicitly the subject.
     */
    v3_ParticipationType_Informant: {
        code: "INF",
        display: "informant",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * An entity which converts spoken or written language into the language of key participants in an event such as when a provider is obtaining a patient's consent to treatment or permission to disclose information.
     */
    v3_RoleCode_Interpreter: {
        code: "INTPRTER",
        display: "interpreter",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * An entity that is the subject of an investigation. This role is scoped by the party responsible for the investigation.
     */
    v3_RoleClass_InvestigationSubject: {
        code: "INVSBJ",
        display: "Investigation Subject",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * A party, who may or should receive or who has recieved the Act or subsequent or derivative information of that Act. Information recipient is inert, i.e., independent of mood." Rationale: this is a generalization of a too diverse family that the definition can't be any more specific, and the concept is abstract so one of the specializations should be used.
     */
    v3_ParticipationType_InformationRecipient: {
        code: "IRCP",
        display: "information recipient",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * A verifier who legally authenticates the accuracy of an act. An example would be a staff physician who sees a patient and dictates a note, then later signs it. Their signature constitutes a legal authentication.
     */
    v3_ParticipationType_LegalAuthenticator: {
        code: "LA",
        display: "legal authenticator",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * Description: A role played by a party to an insurance policy to which the insurer agrees to indemnify for losses, provides benefits for, or renders services.  A named insured may be either a person, non-person living subject, or an organization, or a group of persons, non-person living subjects, or organizations.
     *
     *
     *                            Discussion: The coded concept NAMED should not be used where a more specific child concept in this Specializable value set applies.  In some cases, the named insured may not be the policy holder, e.g., where a policy holder purchases life insurance policy in which another party is the named insured and the policy holder is the beneficiary of the policy.
     *
     *
     *                            Note: The party playing the role of a named insured is not a claimant in the sense conveyed by the RoleClassCoveredParty CLAIM (claimant).  However, a named insured may make a claim under a policy, e.g., e.g., a party that is the named insured and policy holder under a comprehensive automobile insurance policy may become the claimant for coverage under that policy e.g., if injured in an automobile accident and there is no liable third party.  In the case of a named insured making a claim, a role type code INSCLM (insured claimant) subtypes the class to indicate that a named insured has filed a claim for a loss.
     *
     *
     *                            Example: The named insured under a comprehensive automobile, disability, or property and casualty policy that is the named insured and may or may not be the policy holder.
     */
    v3_RoleClass_NamedInsured: {
        code: "NAMED",
        display: "named insured",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * An individual designated for notification as the next of kin for a given entity.
     */
    v3_RoleClass_NextOfKin: {
        code: "NOK",
        display: "next of kin",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * notary public
     */
    v3_RoleClass_NotaryPublic: {
        code: "NOT",
        display: "notary public",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * A Role of a LivingSubject (player) as an actual or potential recipient of health care services from a healthcare provider organization (scoper).
     *
     *
     *                            Usage Note: Communication about relationships between patients and specific healthcare practitioners (people) is not done via scoper.  Instead this is generally done using the CareProvision act.  This allows linkage between patient and a particular healthcare practitioner role and also allows description of the type of care involved in the relationship.
     */
    v3_RoleClass_Patient: {
        code: "PAT",
        display: "patient",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * A relationship between two people in which one person authorizes another to act for him in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts.
     */
    v3_RoleCode_PowerOfAttorney: {
        code: "POWATT",
        display: "power of attorney",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * Definition:Provider authorized to mask information to protect the patient, a third party, or to ensure that the provider has consulted with the patient prior to release of this information.
     */
    v3_ParticipationFunction_AuthorizedProviderMaskingAuthor: {
        code: "PROMSK",
        display: "authorized provider masking author",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationFunction"
    },
    /**
     * An Entity (player) that is authorized to provide health care services by some authorizing agency (scoper).
     */
    v3_RoleClass_HealthcareProvider: {
        code: "PROV",
        display: "healthcare provider",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleClass"
    },
    /**
     * The role played by a party who has legal responsibility for another party.
     */
    v3_RoleCode_ResponsibleParty: {
        code: "RESPRSN",
        display: "responsible party",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A relationship between two people in which one person authorizes another to act for him or her in a manner which is a legally binding upon the person giving such authority as if he or she personally were to do the acts that is often limited in the kinds of powers that can be assigned.
     */
    v3_RoleCode_SpecialPowerOfAttorney: {
        code: "SPOWATT",
        display: "special power of attorney",
        system: "http://terminology.hl7.org/CodeSystem/v3-RoleCode"
    },
    /**
     * A secondary information recipient, who receives copies (e.g., a primary care provider receiving copies of results as ordered by specialist).
     */
    v3_ParticipationType_Tracker: {
        code: "TRC",
        display: "tracker",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    },
    /**
     * Only with service events.  A person witnessing the action happening without doing anything.  A witness is not necessarily aware, much less approves of anything stated in the service event.  Example for a witness is students watching an operation or an advanced directive witness.
     */
    v3_ParticipationType_Witness: {
        code: "WIT",
        display: "witness",
        system: "http://terminology.hl7.org/CodeSystem/v3-ParticipationType"
    }
};