"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityLabels = void 0;
/**
 * A single value set for all security labels defined by FHIR.
 */
exports.SecurityLabels = {
    /**
     * Security metadata observation values used to indicate the use of a more abstract version of the content, e.g., replacing exact value of an age or date field with a range, or remove the left digits of a credit card number or SSN.
     */
    v3_ObservationValue_Abstracted: {
        code: "ABSTRED",
        display: "abstracted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * An access control policy specific to the type of access control scheme, which is used to enforce one or more authorization policies.
     *
     *
     *                            Usage Note: Access control schemes are the type of access control policy, which is comprised of access control policy rules concerning the provision of the access control service.
     *
     *                         There are two categories of access control policies, rule-based and identity-based, which are identified in CCITT Rec. X.800 aka ISO 7498-2. Rule-based access control policies are intended to apply to all access requests by any initiator on any target in a security domain. Identity-based access control policies are based on rules specific to an individual initiator, a group of initiators, entities acting on behalf of initiators, or originators acting in a specific role. Context can modify rule-based or identity-based access control policies. Context rules may define the entire policy in effect. Real systems will usually employ a combination of these policy types; if a rule-based policy is used, then an identity-based policy is usually in effect also.
     *
     *                         An access control scheme may be based on access control lists, capabilities, labels, and context or a combination of these.  An access control scheme is a component of an access control mechanism or "service") along with the supporting mechanisms required by that scheme to provide access control decision information (ADI) supplied by the scheme to the access decision facility (ADF also known as a PDP). (Based on ISO/IEC 10181-3:1996)
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Attribute Based Access Control (ABAC)
     *                            Discretionary Access Control (DAC)
     *                            History Based Access Control (HBAC)
     *                            Identity Based Access Control (IBAC)
     *                            Mandatory Access Control (MAC)
     *                            Organization Based Access Control (OrBAC)
     *                            Relationship Based Access Control (RelBac)
     *                            Responsibility Based Access Control (RespBAC)
     *                            Risk Adaptable Access Control (RAdAC)
     *                         &gt;
     */
    v3_ActCode_AccessControlScheme: {
        code: "ACCESSCONSCHEME",
        display: "access control scheme",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * A group of health care entities, which may include health care providers, care givers, hospitals, facilities, health plans, and other health care constituents who coordinate care for reimbursement based on quality metrics for improving outcomes and lowering costs, and may be authorized to access the consumer's health information because of membership in that group.
     *
     *                         Security Compartment Labels assigned to a consumer's information use in accountable care workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a an accountable care workflow who is requesting access to that information
     */
    v3_ActCode_AccountableCareOrganizationCompartment: {
        code: "ACOCOMPT",
        display: "accountable care organization compartment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to an adolescent, which will be afforded heightened confidentiality per applicable organizational or jurisdictional policy.  An enterprise may have a policy that requires that adolescent patient information be provided heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note: For use within an enterprise in which an adolescent is the information subject.  If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_AdolescentInformationSensitivity: {
        code: "ADOL",
        display: "adolescent information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security metadata observation values used to indicate the use of an algorithmic combination of actual values with the result of an aggregate function, e.g., average, sum, or count in order to limit disclosure of an IT resource (data, information object, service, or system capability) to the minimum necessary.
     */
    v3_ObservationValue_Aggregated: {
        code: "AGGRED",
        display: "aggregated",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability) by used to indicate the mechanism by which software systems can strip portions of the resource that could allow the identification of the source of the information or the information subject.  No key to relink the data is retained.
     */
    v3_ObservationValue_Anonymized: {
        code: "ANONYED",
        display: "anonymized",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Custodian system must make available to an information subject upon request an accounting of certain disclosures of the individualâ€™s protected health information over a period of time.  Policy may dictate that the accounting include information about the information disclosed,  the date of disclosure, the identification of the receiver, the purpose of the disclosure, the time in which the disclosing entity must provide a response and the time period for which accountings of disclosure can be requested.
     */
    v3_ActCode_AccountingOfDisclosure: {
        code: "AOD",
        display: "accounting of disclosure",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian system must monitor systems to ensure that all users are authorized to operate on information objects.
     */
    v3_ActCode_Audit: {
        code: "AUDIT",
        display: "audit",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian system must monitor and maintain retrievable log for each user and operation on information.
     */
    v3_ActCode_AuditTrail: {
        code: "AUDTR",
        display: "audit trail",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Authorisation policies are essentially security policies related to access-control and specify what activities a subject is permitted or forbidden to do, to a set of target objects. They are designed to protect target objects so are interpreted by access control agents or the run-time systems at the target system.
     *
     *                         A positive authorisation policy defines the actions that a subject is permitted to perform on a target. A negative authorisation policy specifies the actions that a subject is forbidden to perform on a target. Positive authorisation policies may also include filters to transform the parameters associated with their actions.  (Based on PONDERS)
     */
    v3_ActCode_AuthorizationPolicy: {
        code: "AUTHPOL",
        display: "authorization policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling trade secrets such as financial information or intellectual property, which will be afforded heightened confidentiality.  Description:  Since the service class can represent knowledge structures that may be considered a trade or business secret, there is sometimes (though rarely) the need to flag those items as of business level confidentiality.
     *
     *
     *                            Usage Notes: No patient related information may ever be of this confidentiality level.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_BusinessInformationSensitivity: {
        code: "B",
        display: "business information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to behavioral and emotional disturbances affecting social adjustment and physical health, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    v3_ActCode_BehavioralHealthInformationSensitivity: {
        code: "BH",
        display: "behavioral health information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge. Use of the data must be related to specified biomedical basic or applied research.  For example, research on rare plants to determine whether biologic properties may be useful for pharmaceutical development. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    v3_ActReason_BiomedicalResearch: {
        code: "BIORCH",
        display: "biomedical research",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform policy override operations on information for provision of immediately needed health care for an emergent condition affecting potential harm, death or patient safety by end users who are not provisioned for this purpose of use.  Includes override of organizational provisioning policies and may include override of subject of care consent directive restricting access.
     *
     *
     *                            Map: Partially Maps to ISO 14265 Classification Term "Emergency care provision to an individual subject of care" described as "To inform persons needing to provide health care services to the subject of care urgently, possibly needing to over-ride the  policies and consents pertaining to Purpose 1 above." Purpose 1 is equivalent to HL7 treatment purpose of use: "Clinical care provision to an individual subject of care" described as "To inform persons or processes responsible for providing health care services to the subject of care."
     * The ISO description conflates both of the proposed specializations of HL7 ETREAT: break the glass and the typically broader access to health information normally available to providers who are provisioned for emergency workflows on a regular basis, e.g., Emergency Room providers. Examples of greater access than is normally accessible by providers based on the need to know are access to sensitive information for which access typically requires a patient's consent.  This is not an override of a patient's dissent to disclose sensitive information in cases where the applicable policy waives the need for that consent to access this information. In US, Title 38 Section 7332 and 42 CFR Part 2 both permit emergency access without the need to override a patient's consent directive; rather, this access is a limitation to the patient's right to dissent from disclosure.
     */
    v3_ActReason_BreakTheGlass: {
        code: "BTG",
        display: "break the glass",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform analytics, evaluation and other secondary uses of treatment and healthcare related information to manage the quality, efficacy, patient safety, population health, and cost effectiveness of healthcare delivery. Explicitly excludes the use of information to organize the delivery of health care for care coordination and case management, or to provide healthcare treatment.
     *
     *
     *                            Usage Note: The concept of care management is narrower than the list of activities related to more general organizational objectives such as provider profiling, education of healthcare and non-healthcare professionals; insurance underwriting, premium rating, reinsurance; organizational legal, medical review, auditing, compliance and fraud and abuse detection; business planning, development, and restructuring; fund-raising; and customer service.
     *
     *
     *                            Map: Maps to ISO 14265 Classification Term "Health service management and quality assurance" described as "To inform persons or processes responsible for determining the availability, quality, safety, equity and cost-effectiveness of health care services."
     *
     *                         There is a semantic gap in concepts.  This classification term  is described as activities, i.e., "to inform persons" or "to inform processes" rather than the rationale for performing actions/operations on information related to the activity.
     */
    v3_ActReason_CareManagement: {
        code: "CAREMGT",
        display: "care management",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Policy for handling information related to a celebrity (people of public interest (VIP), which will be afforded heightened confidentiality.  Celebrities are people of public interest (VIP) about whose information an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive may include health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note:  For use within an enterprise in which the information subject is deemed a celebrity or very important person.  If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_CelebrityInformationSensitivity: {
        code: "CEL",
        display: "celebrity information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a clinician.
     */
    v3_ObservationValue_ClinicianAsserted: {
        code: "CLINAST",
        display: "clinician asserted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a clinician.
     */
    v3_ObservationValue_ClinicianReported: {
        code: "CLINRPT",
        display: "clinician reported",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * To perform one or more operations on information for conducting scientific investigations in accordance with clinical trial protocols to obtain health care knowledge.
     */
    v3_ActReason_ClinicalTrialResearch: {
        code: "CLINTRCH",
        display: "clinical trial research",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for conducting scientific investigations in accordance with clinical trial protocols to obtain health care knowledge without provision of patient care. May be post-coordinated or used with other purposes of use such as disease, discipline, specialty, population origins or ancestry, translational healthcare research. For example, a clinical trial conducted on laboratory specimens collected from a specified patient population.
     */
    v3_ActReason_ClinicalTrialResearchWithoutPatientCare: {
        code: "CLINTRCHNPC",
        display: "clinical trial research without patient care",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for conducting scientific investigations with patient care in accordance with clinical trial protocols to obtain health care knowledge. May be post-coordinated or used with other purposes of use such as disease, discipline, specialty, population origins or ancestry, translational healthcare research. For example, an "off-label" drug used for cancer therapy administer to a specified patient population.
     */
    v3_ActReason_ClinicalTrialResearchWithPatientCare: {
        code: "CLINTRCHPC",
        display: "clinical trial research with patient care",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform health care as part of the clinical trial protocol.
     */
    v3_ActReason_ClinicalTrial: {
        code: "CLINTRL",
        display: "clinical trial",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for provision of additional clinical evidence in support of a request for coverage or payment for health services.
     */
    v3_ActReason_ClaimAttachment: {
        code: "CLMATTCH",
        display: "claim attachment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more actions on information in order to organize the provision and case management of an individualâ€™s healthcare, including: Monitoring a person's goals, needs, and preferences; acting as the communication link between two or more participants concerned with a person's health and wellness; organizing and facilitating care activities and promoting self-management by advocating for, empowering, and educating a person; and ensuring safe, appropriate, non-duplicative, and effective integrated care.
     *
     *
     *                            Usage Note: Use when describing these functions: 1. Monitoring a personâ€™s goals, needs, and preferences.   2. Acting as the communication link between two or more participants concerned with a person's health and wellness.  3. Organizing and facilitating care activities and promoting self-management by advocating for, empowering, and educating a person.  4. Ensuring safe, appropriate, non-duplicative, and effective integrated care.
     *
     *                         The goal is to clearly differentiate this type of coordination of care from HIPAA Operations by specifying that these actions on information are undertaken in the provision of healthcare treatment.
     *
     *                         For similar uses of this concept, see SAMHSA Confidentiality of Substance Use Disorder Patient Records Supplemental notice of proposed rulemaking, which differentiates concepts of care coordination and case management for the provision of treatment as specifically distinct from activities related to health care delivery management and the operations of organizational entities involved in the delivery of healthcare.
     *
     *
     *                            Map: Maps to ISO 14265 Classification Terms: "Support of care activities within the provider organisation for an individual subject of care" described as "To inform persons or processes enabling others to provide health care services to the subject of care."  "Subject of Care Uses" described as "To inform the subject of care in support of his or her own interests."
     */
    v3_ActReason_CoordinationOfCare: {
        code: "COC",
        display: "coordination of care",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Policy for handling information related to cognitive disability disorders and conditions caused by these disorders, which are afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     *
     *                         Examples may include dementia, traumatic brain injury, attention deficit, hearing and visual disability such as dyslexia and other disorders and related conditions which impair learning and self-sufficiency.  However, the cognitive disabilities to which this term may apply  versus other behavioral health categories varies by jurisdiction and organizational policy in part due to overlap with other behavioral health conditions. Implementers should constrain to those diagnoses applicable in the domain in which this code is used.
     */
    v3_ActCode_CognitiveDisabilityInformationSensitivity: {
        code: "COGN",
        display: "cognitive disability information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * This is the healthcare analog to the US Intelligence Community's concept of a Special Access Program.  Compartment codes may be used in as a field value in an initiator's clearance to indicate permission to access and use an IT Resource with a security label having the same compartment value in security category label field.
     *
     *                         Map: Aligns with ISO 2382-8 definition of Compartment - "A division of data into isolated blocks with separate security controls for the purpose of reducing risk."
     */
    v3_ActCode_Compartment: {
        code: "COMPT",
        display: "compartment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information for conducting prior authorization or predetermination of coverage for services.
     */
    v3_ActReason_CoverageAuthorization: {
        code: "COVAUTH",
        display: "coverage authorization",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for conducting activities related to coverage under a program or policy.
     */
    v3_ActReason_CoverageUnderPolicyOrProgram: {
        code: "COVERAGE",
        display: "coverage under policy or program",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Custodian security system must retrieve, evaluate, and comply with the information handling directions of the Confidentiality Code associated with an information target.
     */
    v3_ActCode_ComplyWithConfidentialityCode: {
        code: "CPLYCC",
        display: "comply with confidentiality code",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian security system must retrieve, evaluate, and comply with applicable information subject consent directives.
     */
    v3_ActCode_ComplyWithConsentDirective: {
        code: "CPLYCD",
        display: "comply with consent directive",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian security system must retrieve, evaluate, and comply with applicable jurisdictional privacy policies associated with the target information.
     */
    v3_ActCode_ComplyWithJurisdictionalPrivacyPolicy: {
        code: "CPLYJPP",
        display: "comply with jurisdictional privacy policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian security system must retrieve, evaluate, and comply with applicable organizational privacy policies associated with the target information.
     */
    v3_ActCode_ComplyWithOrganizationalPrivacyPolicy: {
        code: "CPLYOPP",
        display: "comply with organizational privacy policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian security system must retrieve, evaluate, and comply with the organizational security policies associated with the target information.
     */
    v3_ActCode_ComplyWithOrganizationalSecurityPolicy: {
        code: "CPLYOSP",
        display: "comply with organizational security policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian security system must retrieve, evaluate, and comply with applicable policies associated with the target information.
     */
    v3_ActCode_ComplyWithPolicy: {
        code: "CPLYPOL",
        display: "comply with policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security metadata observation value used to indicate the mechanism by which software systems can establish that data was not modified in transit.
     *
     *
     *                            Rationale: This definition is intended to align with the ISO 22600-2 3.3.19 definition of cryptographic checkvalue: Information which is derived by performing a cryptographic transformation (see cryptography) on the data unit.  The derivation of the checkvalue may be performed in one or more steps and is a result of a mathematical function of the key and a data unit. It is usually used to check the integrity of a data unit.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            SHA-1
     *                            SHA-2 (Secure Hash Algorithm)
     */
    v3_ObservationValue_CryptographicHashFunction: {
        code: "CRYTOHASH",
        display: "cryptographic hash function",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Care coordination across participants in a care plan requires sharing of a healthcare consumer's information specific to that workflow.  A care team member should only have access to that information while participating in that workflow or for other authorized uses.
     *
     *                         Security Compartment Labels assigned to a consumer's information use in care coordination workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a care team member workflow who is requesting access to that information
     */
    v3_ActCode_CareTeamCompartment: {
        code: "CTCOMPT",
        display: "care team compartment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian security system must declassify information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as unclassified in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    v3_ActCode_DeclassifySecurityLabel: {
        code: "DECLASSIFYLABEL",
        display: "declassify security label",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian system must remove target information from access after use.
     */
    v3_ActCode_DeleteAfterUse: {
        code: "DELAU",
        display: "delete after use",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Delegation policies specify which actions subjects are allowed to delegate to others. A delegation policy thus specifies an authorisation to delegate. Subjects must already possess the access rights to be delegated.
     *
     *                         Delegation policies are aimed at subjects delegating rights to servers or third parties to perform actions on their behalf and are not meant to be the means by which security administrators would assign rights to subjects. A negative delegation policy identifies what delegations are forbidden.
     *
     *                         A Delegation policy specifies the authorisation policy from which delegated rights are derived, the grantors, which are the entities which can delegate these access rights, and the grantees, which are the entities to which the access rights can be delegated. There are two types of delegation policy, positive and negative. (Based on PONDERS)
     */
    v3_ActCode_DelegationPolicy: {
        code: "DELEPOL",
        display: "delegation policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling all demographic information about an information subject, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to all demographic about an information subject, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_AllDemographicInformationSensitivity: {
        code: "DEMO",
        display: "all demographic information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a device.
     */
    v3_ObservationValue_DeviceAsserted: {
        code: "DEVAST",
        display: "device asserted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a device.
     */
    v3_ObservationValue_DeviceReported: {
        code: "DEVRPT",
        display: "device reported",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Policy for handling information related to a diagnosis, health condition or health problem, which will be afforded heightened confidentiality.  Diagnostic, health condition or health problem related information may be deemed sensitive by organizational policy, and require heightened confidentiality.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to  diagnostic, health condition or health problem related information deemed sensitive.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_DiagnosisInformationSensitivity: {
        code: "DIA",
        display: "diagnosis information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security metadata observation value used to indicate the mechanism by which software systems use digital signature to establish that data has not been modified.
     *
     *
     *                            Rationale: This definition is intended to align with the ISO 22600-2 3.3.26 definition of digital signature:  Data appended to, or a cryptographic transformation (see cryptography) of, a data unit that allows a recipient of the data unit to prove the source and integrity of the data unit and protect against forgery e.g., by the recipient.
     */
    v3_ObservationValue_DigitalSignature: {
        code: "DIGSIG",
        display: "digital signature",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * To perform one or more operations on information used for provision of immediately needed health care to a population of living subjects located in a disaster zone.
     */
    v3_ActReason_Disaster: {
        code: "DISASTER",
        display: "disaster",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Policy for handling information related to an information subject's date of birth, which will be afforded heightened confidentiality.Policies may govern sensitivity of information related to an information subject's date of birth, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_DateOfBirthInformationSensitivity: {
        code: "DOB",
        display: "date of birth information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information used for cadaveric organ, eye or tissue donation.
     */
    v3_ActReason_Donation: {
        code: "DONAT",
        display: "donation",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Custodian security system must downgrade information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as classified at a less protected level in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    v3_ActCode_DowngradeSecurityLabel: {
        code: "DOWNGRDLABEL",
        display: "downgrade security label",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to a drug, which will be afforded heightened confidentiality. Drug information may be deemed sensitive by organizational policy, and require heightened confidentiality.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to drug information deemed sensitive.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_DrugInformationSensitivity: {
        code: "DRGIS",
        display: "drug information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian security system must assign and bind security labels derived from compilations of information by aggregation or disaggregation in order to classify information compiled in the information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    v3_ActCode_DeriveSecurityLabel: {
        code: "DRIVLABEL",
        display: "derive security label",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge. Use of the data must be related to specified conditions, diagnosis, or disease healthcare research.  For example, conducting cancer research by testing reaction of tumor cells to certain biologics. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    v3_ActReason_DiseaseSpecificHealthcareResearch: {
        code: "DSRCH",
        display: "disease specific healthcare research",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Policy for handling information related to developmental disability disorders and conditions caused by these disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     *
     *                         A diverse group of chronic conditions that are due to mental or physical impairments impacting activities of daily living, self-care, language acuity, learning, mobility, independent living and economic self-sufficiency. Examples may include Down syndrome and  Autism spectrum. However, the developmental disabilities to which this term applies versus other behavioral health categories varies by jurisdiction and organizational policy in part due to overlap with other behavioral health conditions.  Implementers should constrain to those diagnoses applicable in the domain in which this code is used.
     */
    v3_ActCode_DevelopmentalDisabilityInformationSensitivity: {
        code: "DVD",
        display: "developmental disability information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information used for conducting eligibility determination for coverage in a program or policy.  May entail review of financial status or disability assessment.
     */
    v3_ActReason_EligibilityDetermination: {
        code: "ELIGDTRM",
        display: "eligibility determination",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information used for conducting eligibility verification of coverage in a program or policy.  May entail provider contacting coverage source (e.g., government health program such as workers compensation or health plan) for confirmation of enrollment, eligibility for specific services, and any applicable copays.
     */
    v3_ActReason_EligibilityVerification: {
        code: "ELIGVER",
        display: "eligibility verification",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Policy for handling information related to emotional disturbance disorders and conditions caused by these disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     *
     *                         Typical used to characterize behavioral and mental health issues of adolescents where the disorder may be temporarily diagnosed in order to avoid the potential and unnecessary stigmatizing diagnoses of disorder long term.
     */
    v3_ActCode_EmotionalDisturbanceInformationSensitivity: {
        code: "EMOTDIS",
        display: "emotional disturbance information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to an employee, which will be afforded heightened confidentiality. When a patient is an employee, an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note: Policy for handling information related to an employee, which will be afforded heightened confidentiality.  Description:  When a patient is an employee, an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     */
    v3_ActCode_EmployeeInformationSensitivity: {
        code: "EMP",
        display: "employee information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to an employer which is deemed classified to protect an employee who is the information subject, and which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to an employer, such as law enforcement or national security, the identity of which could impact the privacy, well-being, or safety of an information subject who is an employee.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_EmployerInformationSensitivity: {
        code: "EMPL",
        display: "employer information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian system must render information unreadable by algorithmically transforming plaintext into ciphertext.
     *
     *
     *
     *
     *                            Usage Notes: A mathematical transposition of a file or data stream so that it cannot be deciphered at the receiving end without the proper key. Encryption is a security feature that assures that only the parties who are supposed to be participating in a videoconference or data transfer are able to do so. It can include a password, public and private keys, or a complex combination of all.  (Per Infoway.)
     */
    v3_ActCode_Encrypt: {
        code: "ENCRYPT",
        display: "encrypt",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext when "at rest" or in storage.
     */
    v3_ActCode_EncryptAtRest: {
        code: "ENCRYPTR",
        display: "encrypt at rest",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext while "in transit" or being transported by any means.
     */
    v3_ActCode_EncryptInTransit: {
        code: "ENCRYPTT",
        display: "encrypt in transit",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext while in use such that operations permitted on the target information are limited by the license granted to the end user.
     */
    v3_ActCode_EncryptInUse: {
        code: "ENCRYPTU",
        display: "encrypt in use",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information used for enrolling a covered party in a program or policy.  May entail recording of covered party's and any dependent's demographic information and benefit choices.
     */
    v3_ActReason_Enrollment: {
        code: "ENROLLM",
        display: "enrollment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for provision of immediately needed health care for an emergent condition in an emergency room or similar emergent care context by end users provisioned for this purpose, which does not constitute as policy override such as in a "Break the Glass" purpose of use.
     *
     *                         Map:Partially Maps to ISO 14265 Classification Term "Emergency care provision to an individual subject of care" described as "To inform persons needing to provide health care services to the subject of care urgently, possibly needing to over-ride the  policies and consents pertaining to Purpose 1 above." Purpose 1 is equivalent to HL7 treatment purpose of use: "Clinical care provision to an individual subject of care" described as "To inform persons or processes responsible for providing health care services to the subject of care."
     *
     *                         The ISO description conflates both of the proposed specializations of HL7 ETREAT: break the glass and the typically broader access to health information normally available to providers who are provisioned for emergency workflows on a regular basis, e.g., Emergency Room providers. Examples of greater access than is normally accessible by providers based on the need to know are access to sensitive information for which access typically requires a patient's consent.  This is not an override of a patient's dissent to disclose sensitive information in cases where the applicable policy waives the need for that consent to access this information. In US, Title 38 Section 7332 and 42 CFR Part 2 both permit emergency access without the need to override a patient's consent directive; rather, this access is a limitation to the patient's right to dissent from disclosure.
     *
     *                         There is a semantic gap in concepts.  This classification term is described as activities â€œto inform personsâ€? rather than the rationale for performing actions/operations on information related to the activity.
     */
    v3_ActReason_EmergencyRoomTreatment: {
        code: "ERTREAT",
        display: "emergency room treatment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Policy for handling alcohol or drug-abuse information, which will be afforded heightened confidentiality.  Information handling protocols based on organizational policies related to alcohol or drug-abuse information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_SubstanceAbuseInformationSensitivity: {
        code: "ETH",
        display: "substance abuse information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to alcohol use disorders and conditions caused by these disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    v3_ActCode_AlcoholUseDisorderInformationSensitivity: {
        code: "ETHUD",
        display: "alcohol use disorder information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information for provision of immediately needed health care for an emergent condition.
     */
    v3_ActReason_EmergencyTreatment: {
        code: "ETREAT",
        display: "Emergency Treatment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information in response to a request by a family member authorized by the patient.
     */
    v3_ActReason_FamilyRequested: {
        code: "FAMRQT",
        display: "family requested",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Financial management department members who have access to healthcare consumer information as part of a patient account, billing and claims workflows.
     *
     *                         Security Compartment Labels assigned to consumer information used in these workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a financial management workflow who is requesting access to that information.
     */
    v3_ActCode_FinancialManagementCompartment: {
        code: "FMCOMPT",
        display: "financial management compartment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information used for fraud detection and prevention processes.
     */
    v3_ActReason_Fraud: {
        code: "FRAUD",
        display: "fraud",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Policy for handling genetic disease information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to genetic disease information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_GeneticDiseaseInformationSensitivity: {
        code: "GDIS",
        display: "genetic disease information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to an information subject's gender and sexual orientation, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's gender and sexual orientation, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_GenderAndSexualOrientationInformationSensitivity: {
        code: "GENDER",
        display: "gender and sexual orientation information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information used within government processes.
     */
    v3_ActReason_Government: {
        code: "GOV",
        display: "government",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for conducting activities related to meeting accreditation criteria.
     */
    v3_ActReason_HealthAccreditation: {
        code: "HACCRED",
        display: "health accreditation",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information used for conducting activities required to meet a mandate.
     */
    v3_ActReason_HealthCompliance: {
        code: "HCOMPL",
        display: "health compliance",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a healthcare professional.
     */
    v3_ObservationValue_HealthcareProfessionalAsserted: {
        code: "HCPAST",
        display: "healthcare professional asserted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a healthcare professional.
     */
    v3_ObservationValue_HealthcareProfessionalReported: {
        code: "HCPRPT",
        display: "healthcare professional reported",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * To perform one or more operations on information used for handling deceased patient matters.
     */
    v3_ActReason_Decedent: {
        code: "HDECD",
        display: "decedent",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operation operations on information used to manage a patient directory.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            facility
     *                            enterprise
     *                            payer
     *                            health information exchange patient directory
     */
    v3_ActReason_Directory: {
        code: "HDIRECT",
        display: "directory",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more actions on information used for conducting administrative and contractual activities by or on behalf of organizational entities responsible for delivery of  an individual's benefits in a healthcare program, health plan or insurance.   Explicitly excludes the use of information to organize the delivery of health care for care coordination and case management, or to provide healthcare treatment.
     *
     *
     *                            Usage Note: Examples of activities conducted under this purpose of use: provider profiling, risk adjustment, underwriting, fraud and abuse, quality improvement population health and care management. Aligns with HIPAA Operation POU minus coordination of care or other treatment related activities. Similar to the description in SAMHSA Confidentiality of Substance Use Disorder Patient Records Supplemental notice of proposed rulemaking.
     *
     *
     *                            Map: Maps to ISO 14265 Classification Term  "Administration of care for an individual subject of care" described as "To inform persons or processes responsible for enabling the availability of resources or funding or permissions for providing health care services to the subject of care."
     *
     *                         However, this classification term is described as activities, i.e., "to inform persons" or "to inform processes" rather than the rationale for performing actions/operations on information related to the activity.
     */
    v3_ActReason_HealthcareDeliveryManagement: {
        code: "HDM",
        display: "healthcare delivery management",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Policy for handling HIV or AIDS information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to HIV or AIDS information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_HIVAIDSInformationSensitivity: {
        code: "HIV",
        display: "HIV/AIDS information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information for conducting activities required by legal proceeding.
     */
    v3_ActReason_Legal: {
        code: "HLEGAL",
        display: "legal",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for marketing services and products related to health care.
     */
    v3_ActReason_HealthcareMarketing: {
        code: "HMARKT",
        display: "healthcare marketing",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information used for conducting administrative and contractual activities related to the provision of health care.
     */
    v3_ActReason_HealthcareOperations: {
        code: "HOPERAT",
        display: "healthcare operations",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information used for assessing results and comparative effectiveness achieved by health care practices and interventions.
     */
    v3_ActReason_HealthOutcomeMeasure: {
        code: "HOUTCOMS",
        display: "health outcome measure",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for conducting financial or contractual activities related to payment for provision of health care.
     */
    v3_ActReason_HealthcarePayment: {
        code: "HPAYMT",
        display: "healthcare payment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information used for conducting activities to meet program accounting requirements.
     */
    v3_ActReason_HealthProgramReporting: {
        code: "HPRGRP",
        display: "health program reporting",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information used for conducting administrative activities to improve health care quality.
     */
    v3_ActReason_HealthQualityImprovement: {
        code: "HQUALIMP",
        display: "health quality improvement",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A security category label field value, which indicates that access and use of an IT resource is restricted to members of human resources department or workflow.
     */
    v3_ActCode_HumanResourceCompartment: {
        code: "HRCOMPT",
        display: "human resource compartment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be very high.
     */
    v3_ObservationValue_HighlyReliable: {
        code: "HRELIABLE",
        display: "highly reliable",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge.  Use of the data iincludes basic and applied research such as biomedical, population origin or ancestry, translational research, and disease, discipline, specialty specific healthcare research and clinical trial research.
     */
    v3_ActReason_HealthcareResearch: {
        code: "HRESCH",
        display: "healthcare research",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information to administer the electronic systems used for the delivery of health care.
     */
    v3_ActReason_HealthSystemAdministration: {
        code: "HSYSADMIN",
        display: "health system administration",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information that is simulated or synthetic health data used for testing system capabilities outside of a production or operational system environment.
     *
     *
     *                            Usage Note: Data marked with a HTEST security label enables an access control system to permit interfacing systems or end users provisioned with a clearance, which includes a HTEST purpose of use attribute, to test, verify, or validate that a system or application will operate in production as intended based on design specifications.
     */
    v3_ActReason_TestHealthData: {
        code: "HTEST",
        display: "test health data",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Custodian system must require human review and approval for permission requested.
     */
    v3_ActCode_HumanApproval: {
        code: "HUAPRV",
        display: "human approval",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition: Privacy metadata indicating that the information has been de-identified, and there are mitigating circumstances that prevent re-identification, which minimize risk of harm from unauthorized disclosure.  The information requires protection to maintain low sensitivity.
     *
     *
     *                            Examples: Includes anonymized, pseudonymized, or non-personally identifiable information such as HIPAA limited data sets.
     *
     *
     *                            Map: No clear map to ISO 13606-4 Sensitivity Level (1) Care Management:   RECORD_COMPONENTs that might need to be accessed by a wide range of administrative staff to manage the subject of care's access to health services.
     *
     *
     *                            Usage Note: This metadata indicates the receiver may have an obligation to comply with a data use agreement.
     */
    v3_Confidentiality_Low: {
        code: "L",
        display: "low",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality"
    },
    /**
     * To perform one or more operations on information to assign, persist, and manage labels to healthcare data to characterize various aspects, such as its security classification, sensitivity, compartment, integrity, and provenance; applicable privacy, consent, security, provenance, and trust policies; and handling caveats such as purpose of use, obligations, and refrain policies.
     *
     *                         Label management includes classification of target data by constructing and binding of a label set per applicable policies, security policy information file semantics, and classification guides.  Label management also includes process and procedures for subsequent revision of a label for, e.g., reclassification, downgrading classification, and declassification.
     *
     *                         Label revisions may be triggered by, e.g., expiry of classification period; changes in applicable policy, e.g., revocation of a consent directive; or changes in the governing policy domain in which the data is relocated or a copy of the data is sent.  If a label is revised, an audit log should be kept and the provenance of the label changes should be tracked.
     */
    v3_ActReason_Labeling: {
        code: "LABELING",
        display: "labeling",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Policy for handling information related to an information subject's living arrangement, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's living arrangement, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_LivingArrangementInformationSensitivity: {
        code: "LIVARG",
        display: "living arrangement information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to the location of the information subject, which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to the location of the information subject, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_LocationInformationSensitivity: {
        code: "LOCIS",
        display: "location information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Providers and care givers who have an established relationship per criteria determined by policy are considered to have an established care provision relations with a healthcare consumer, and may be authorized to access the consumer's health information because of that relationship.  Providers and care givers should only have access to that information while participating in legitimate relationship workflows or for other authorized uses.
     *
     *                         Security Compartment Labels assigned to a consumer's information use in legitimate relationship workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a legitimate relationship workflow who is requesting access to that information.
     */
    v3_ActCode_LegitimateRelationshipCompartment: {
        code: "LRCOMPT",
        display: "legitimate relationship compartment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition: Privacy metadata indicating moderately sensitive information, which presents moderate risk of harm if disclosed without authorization.
     *
     *
     *                            Examples: Includes allergies of non-sensitive nature used inform food service; health information a patient authorizes to be used for marketing, released to a bank for a health credit card or savings account; or information in personal health record systems that are not governed under health privacy laws.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (2) Clinical Management:  Less sensitive RECORD_COMPONENTs that might need to be accessed by a wider range of personnel not all of whom are actively caring for the patient (e.g. radiology staff).
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with the receiver's terms of use or privacy policies.
     */
    v3_Confidentiality_Moderate: {
        code: "M",
        display: "moderate",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality"
    },
    /**
     * Security metadata observation value used to indicate that the IT resource semantic content has been transformed from one encoding to another.
     *
     *
     *                            Usage Note: "MAP" code does not indicate the semantic fidelity of the transformed content.
     *
     *                         To indicate semantic fidelity for maps of HL7 to other code systems, this security alteration integrity observation may be further specified using an Act valued with Value Set: MapRelationship (2.16.840.1.113883.1.11.11052).
     *
     *                         Semantic fidelity of the mapped IT Resource may also be indicated using a SecurityIntegrityConfidenceObservation.
     */
    v3_ObservationValue_Mapped: {
        code: "MAPPED",
        display: "mapped",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Policy for handling information related to an information subject's marital status, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to an information subject's marital status, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_MaritalStatusInformationSensitivity: {
        code: "MARST",
        display: "marital status information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability) by indicating the mechanism by which software systems can make data unintelligible (that is, as unreadable and unusable by algorithmically transforming plaintext into ciphertext) such that it can only be accessed or used by authorized users.  An authorized user may be provided a key to decrypt per license or "shared secret".
     *
     *
     *                            Usage Note: "MASKED" may be used, per applicable policy, as a flag to indicate to a user or receiver that some portion of an IT resource has been further encrypted, and may be accessed only by an authorized user or receiver to which a decryption key is provided.
     */
    v3_ObservationValue_Masked: {
        code: "MASKED",
        display: "masked",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * To perform one or more operations on information to administer health care coverage to an enrollee under a policy or program.
     */
    v3_ActReason_MemberAdministration: {
        code: "MEMADMIN",
        display: "member administration",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information to assign, persist, and manage metadata to healthcare data to characterize various aspects used for its indexing, discovery, retrieval, and processing by systems, applications, and end users.  For example, master index identifier, media type, and location.
     */
    v3_ActReason_MetadataManagement: {
        code: "METAMGT",
        display: "metadata management",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Policy for handling information related to psychological disorders, which is afforded heightened confidentiality. Mental health information may be deemed specifically sensitive and distinct from physical health, substance use disorders, and behavioral disabilities and disorders in some jurisdictions.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    v3_ActCode_MentalHealthInformationSensitivity: {
        code: "MH",
        display: "mental health information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information for conducting activities required by military processes, procedures, policies, or law.
     */
    v3_ActReason_MilitaryCommand: {
        code: "MILCDM",
        display: "military command",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for the process of releasing military personnel from their service obligations, which may include determining service merit, discharge benefits, and disability assessment.
     */
    v3_ActReason_MilitaryDischarge: {
        code: "MILDCRG",
        display: "military discharge",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Custodian must limit access and disclosure to the minimum information required to support an authorized user's purpose of use.
     *
     *
     *                            Usage Note: Limiting the information available for access and disclosure to that an authorized user or receiver "needs to know" in order to perform permitted workflow or purpose of use.
     */
    v3_ActCode_MinimumNecessary: {
        code: "MINEC",
        display: "minimum necessary",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to sexual assault or repeated, threatening sexual harassment that occurred while the patient was in the military, which is afforded heightened confidentiality.
     *
     *                         Access control concerns for military sexual trauma is based on the patient being subject to control by a higher ranking military perpetrator and/or censure by others within the military unit.  Due to the relatively unfettered access to healthcare information by higher ranking military personnel and those who have command over the patient, there is a need to sequester this information outside of the typical controls on access to military health records.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    v3_ActCode_MilitarySexualTraumaInformationSensitivity: {
        code: "MST",
        display: "military sexual trauma information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Definition: Privacy metadata indicating that the information is typical, non-stigmatizing health information, which presents typical risk of harm if disclosed without authorization.
     *
     *
     *                            Examples: In the US, this includes what HIPAA identifies as the minimum necessary protected health information (PHI) given a covered purpose of use (treatment, payment, or operations).  Includes typical, non-stigmatizing health information disclosed in an application for health, workers compensation, disability, or life insurance.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care:   Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR).   Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations.
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable jurisdictional privacy law or disclosure authorization.
     */
    v3_Confidentiality_Normal: {
        code: "N",
        display: "normal",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality"
    },
    /**
     * Prohibition on disclosure without information subject's authorization.
     */
    v3_ActCode_NoDisclosureWithoutSubjectAuthorization: {
        code: "NOAUTH",
        display: "no disclosure without subject authorization",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on collection or storage of the information.
     */
    v3_ActCode_NoCollection: {
        code: "NOCOLLECT",
        display: "no collection",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on disclosure without organizational approved patient restriction.
     */
    v3_ActCode_NoDisclosureWithoutConsentDirective: {
        code: "NODSCLCD",
        display: "no disclosure without consent directive",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on disclosure without a consent directive from the information subject.
     */
    v3_ActCode_NoDisclosureWithoutInformationSubjectQuoteSConsentDirective: {
        code: "NODSCLCDS",
        display: "no disclosure without information subject's consent directive",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on Integration into other records.
     */
    v3_ActCode_NoIntegration: {
        code: "NOINTEGRATE",
        display: "no integration",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on disclosure except to entities on specific access list.
     */
    v3_ActCode_NoUnlistedEntityDisclosure: {
        code: "NOLIST",
        display: "no unlisted entity disclosure",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on disclosure without an interagency service agreement or memorandum of understanding (MOU).
     */
    v3_ActCode_NoDisclosureWithoutMOU: {
        code: "NOMOU",
        display: "no disclosure without MOU",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on disclosure without organizational authorization.
     */
    v3_ActCode_NoDisclosureWithoutOrganizationalAuthorization: {
        code: "NOORGPOL",
        display: "no disclosure without organizational authorization",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on disclosing information to patient, family or caregivers without attending provider's authorization.
     *
     *
     *                            Usage Note: The information may be labeled with the ActInformationSensitivity TBOO code, triggering application of this RefrainPolicy code as a handling caveat controlling access.
     *
     *                         Maps to FHIR NOPAT: Typically, this is used on an Alert resource, when the alert records information on patient abuse or non-compliance.
     *
     *                         FHIR print name is "keep information from patient". Maps to the French realm - code: INVISIBLE_PATIENT.
     *
     *
     *                            displayName: Document non visible par le patient
     *                            codingScheme: 1.2.250.1.213.1.1.4.13
     *
     *                         French use case:  A label for documents that the author  chose to hide from the patient until the content can be disclose to the patient in a face to face meeting between a healthcare professional and the patient (in French law some results like cancer diagnosis or AIDS diagnosis must be announced to the patient by a healthcare professional and should not be find out by the patient alone).
     */
    v3_ActCode_NoDisclosureToPatientFamilyOrCaregiversWithoutAttendingProviderQuoteSAuthorization: {
        code: "NOPAT",
        display: "no disclosure to patient, family or caregivers without attending provider's authorization",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on collection of the information beyond time necessary to accomplish authorized purpose of use is prohibited.
     */
    v3_ActCode_NoCollectionBeyondPurposeOfUse: {
        code: "NOPERSISTP",
        display: "no collection beyond purpose of use",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on redisclosure without patient consent directive.
     */
    v3_ActCode_NoRedisclosureWithoutConsentDirective: {
        code: "NORDSCLCD",
        display: "no redisclosure without consent directive",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on redisclosure without a consent directive from the information subject.
     */
    v3_ActCode_NoRedisclosureWithoutInformationSubjectQuoteSConsentDirective: {
        code: "NORDSCLCDS",
        display: "no redisclosure without information subject's consent directive",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on disclosure without authorization under jurisdictional law.
     */
    v3_ActCode_NoDisclosureWithoutJurisdictionalAuthorization: {
        code: "NORDSCLW",
        display: "no disclosure without jurisdictional authorization",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on associating de-identified or pseudonymized information with other information in a manner that could or does result in disclosing information intended to be masked.
     */
    v3_ActCode_NoRelinking: {
        code: "NORELINK",
        display: "no relinking",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on use of the information beyond the purpose of use initially authorized.
     */
    v3_ActCode_NoReuseBeyondPurposeOfUse: {
        code: "NOREUSE",
        display: "no reuse beyond purpose of use",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on disclosure except to principals with access permission to specific VIP information.
     */
    v3_ActCode_NoUnauthorizedVIPDisclosure: {
        code: "NOVIP",
        display: "no unauthorized VIP disclosure",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Conveys the mandated workflow action that an information custodian, receiver, or user must perform.
     *
     *
     *                            Usage Notes: Per ISO 22600-2, ObligationPolicy instances 'are event-triggered and define actions to be performed by manager agent'. Per HL7 Composite Security and Privacy Domain Analysis Model:  This value set refers to the action required to receive the permission specified in the privacy rule. Per OASIS XACML, an obligation is an operation specified in a policy or policy that is performed in conjunction with the enforcement of an access control decision.
     */
    v3_ActCode_ObligationPolicy: {
        code: "ObligationPolicy",
        display: "obligation policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to opioid use disorders and conditions caused by these disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    v3_ActCode_OpioidUseDisorderInformationSensitivity: {
        code: "OPIOIDUD",
        display: "opioid use disorder information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Prohibition on disclosure except as permitted by the information originator.
     */
    v3_ActCode_NoDisclosureWithoutOriginatorAuthorization: {
        code: "ORCON",
        display: "no disclosure without originator authorization",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Patient administration members who have access to healthcare consumer information as part of a patient administration workflows.
     *
     *                         Security Compartment Labels assigned to consumer information used in these workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a patient administration workflow who is requesting access to that information.
     */
    v3_ActCode_PatientAdministrationCompartment: {
        code: "PACOMPT",
        display: "patient administration compartment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a patient acquaintance.
     */
    v3_ObservationValue_PatientAcquaintanceAsserted: {
        code: "PACQAST",
        display: "patient acquaintance asserted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a patient acquaintance.
     */
    v3_ObservationValue_PatientAcquaintanceReported: {
        code: "PACQRPT",
        display: "patient acquaintance reported",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * To perform one or more operations on information used for operational activities conducted to administer the delivery of health care to a patient.
     */
    v3_ActReason_PatientAdministration: {
        code: "PATADMIN",
        display: "patient administration",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a patient.
     */
    v3_ObservationValue_PatientAsserted: {
        code: "PATAST",
        display: "patient asserted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a patient.
     */
    v3_ObservationValue_PatientReported: {
        code: "PATRPT",
        display: "patient reported",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * To perform one or more operations on information in response to a patient's request.
     */
    v3_ActReason_PatientRequested: {
        code: "PATRQT",
        display: "patient requested",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information in processes related to ensuring the safety of health care.
     */
    v3_ActReason_PatientSafety: {
        code: "PATSFTY",
        display: "patient safety",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a payer.
     */
    v3_ObservationValue_PayerAsserted: {
        code: "PAYAST",
        display: "payer asserted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a payer.
     */
    v3_ObservationValue_PayerReported: {
        code: "PAYRPT",
        display: "payer reported",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Policy for specially protecting information reported by or about a patient, which is deemed sensitive within the enterprise (i.e., by default regardless of whether the patient requested that the information be deemed sensitive for another reason.) For example information reported by the patient about another person, e.g., a family member, may be deemed sensitive by default. Organizational policy may allow the sensitivity tag to be cleared on patient's request.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     *
     *                         For example, VA deems employee information sensitive by default.  Information about a patient who is being stalked or a victim of abuse or violence may be deemed sensitive by default per a provider organization's policies.
     */
    v3_ActCode_PatientDefaultInformationSensitivity: {
        code: "PDS",
        display: "patient default information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information used for monitoring performance of recommended health care practices and interventions.
     */
    v3_ActReason_PerformanceMeasure: {
        code: "PERFMSR",
        display: "performance measure",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Custodian security system must persist the binding of security labels to classify information received or imported by information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information.  The system must retain an immutable record of the assignment and binding.
     */
    v3_ActCode_PersistSecurityLabel: {
        code: "PERSISTLABEL",
        display: "persist security label",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information about a patient, which a physician or other licensed healthcare provider deems sensitive.  Once tagged by the provider, this may trigger alerts for follow up actions according to organizational policy or jurisdictional law.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to certain types of information designated by a physician as sensitive. If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     *
     *                         Use cases in which this code could be used are, e.g.,  in systems that lack the ability to automatically detect sensitive information and must rely on manual tagging; a system that lacks an applicable sensitivity tag, or for ad hoc situations where criticality of the situation requires that the tagging be done immediately by the provider before coding or transcription of consult notes can be completed, e.g., upon detection of a patient with suicidal tendencies or potential for violence.
     */
    v3_ActCode_PhysicianRequestedInformationSensitivity: {
        code: "PHY",
        display: "physician requested information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information, including genealogical pedigrees, historical records, surveys, family health data, health records, and genetic information, for conducting scientific investigations to obtain health care knowledge. Use of the data must be related to population origins and/or ancestry healthcare research.  For example, gathering genetic specimens from a specific population in order to determine the ancestry and population origins of that group. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    v3_ActReason_PopulationOriginsOrAncestryHealthcareResearch: {
        code: "POARCH",
        display: "population origins or ancestry healthcare research",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for provision of health care to a population of living subjects, e.g., needle exchange program.
     */
    v3_ActReason_PopulationHealth: {
        code: "POPHLTH",
        display: "population health",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information in preparation for conducting scientific investigation to obtain health care knowledge, such as research on animals or review of patient health records, to determine the feasibility of a clinical trial study; assist with protocol design; or in preparation for institutional review board or ethics committee approval process.  May be post-coordinated or used with other purposes of use such as disease, discipline, specialty, population origins or ancestry, translational healthcare research.
     */
    v3_ActReason_PreclinicalTrialResearch: {
        code: "PRECLINTRCH",
        display: "preclinical trial research",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Custodian must create and/or maintain human readable security label tags as required by policy.
     *
     *                         Map:  Aligns with ISO 22600-3 Section A.3.4.3 description of privacy mark:  "If present, the privacy-mark is not used for access control. The content of the privacy-mark may be defined by the security policy in force (identified by the security-policy-identifier) which may define a list of values to be used. Alternately, the value may be determined by the originator of the security-label."
     */
    v3_ActCode_PrivacyMark: {
        code: "PRIVMARK",
        display: "privacy mark",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a professional.
     */
    v3_ObservationValue_ProfessionalAsserted: {
        code: "PROAST",
        display: "professional asserted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a professional.
     */
    v3_ObservationValue_ProfessionalReported: {
        code: "PRORPT",
        display: "professional reported",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Policy for specially protecting information reported by or about a patient, which the patient deems sensitive, and the patient requests that collection, access, use, or disclosure of that information be restricted.  For example, a minor patient may request that information about reproductive health not be disclosed to the patient's family or to particular providers and payers.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_PatientRequestedInformationSensitivity: {
        code: "PRS",
        display: "patient requested information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability), by indicating the mechanism by which software systems can strip portions of the resource that could allow the identification of the source of the information or the information subject.  Custodian may retain a key to relink data necessary to reidentify the information subject.
     *
     *
     *                            Rationale: Personal data which has been processed to make it impossible to know whose data it is. Used particularly for secondary use of health data. In some cases, it may be possible for authorized individuals to restore the identity of the individual, e.g.,for public health case management.  Based on ISO/TS 25237:2008 Health informaticsâ€”Pseudonymization
     */
    v3_ObservationValue_Pseudonymized: {
        code: "PSEUDED",
        display: "pseudonymized",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Policy for handling psychiatry psychiatric disorder information, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_PsychiatryDisorderInformationSensitivity: {
        code: "PSY",
        display: "psychiatry disorder information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling psychotherapy note information, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: In some jurisdiction, disclosure of psychotherapy notes requires patient consent.
     *
     *                         If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_PsychotherapyNoteInformationSensitivity: {
        code: "PSYTHPN",
        display: "psychotherapy note information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information for conducting public health activities, such as the reporting of notifiable conditions.
     */
    v3_ActReason_PublicHealth: {
        code: "PUBHLTH",
        display: "public health",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Reason for performing one or more operations on information, which may be permitted by source system's security policy in accordance with one or more privacy policies and consent directives.
     *
     *
     *                            Usage Notes: The rationale or purpose for an act relating to the management of personal health information, such as collecting personal health information for research or public health purposes.
     */
    v3_ActReason_PurposeOfUse: {
        code: "PurposeOfUse",
        display: "purpose of use",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information in response to a request by a person appointed as the patient's legal representative.
     */
    v3_ActReason_PowerOfAttorney: {
        code: "PWATRNY",
        display: "power of attorney",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Privacy metadata indicating highly sensitive, potentially stigmatizing information, which presents a high risk to the information subject if disclosed without authorization. May be pre-empted by jurisdictional law, e.g., for public health reporting or emergency treatment.
     *
     *
     *                            Examples: Includes information that is additionally protected such as sensitive conditions mental health, HIV, substance abuse, domestic violence, child abuse, genetic disease, and reproductive health; or sensitive demographic information such as a patient's standing as an employee or a celebrity. May be used to indicate proprietary or classified information that is not related to an individual, e.g., secret ingredients in a therapeutic substance; or the name of a manufacturer.
     *
     *
     *                            Map: Partial Map to ISO 13606-4 Sensitivity Level (3) Clinical Care: Default for normal clinical care access (i.e. most clinical staff directly caring for the patient should be able to access nearly all of the EHR). Maps to normal confidentiality for treatment information but not to ancillary care, payment and operations..
     *
     *
     *                            Usage Note: This metadata indicates that the receiver may be obligated to comply with applicable, prevailing (default) jurisdictional privacy law or disclosure authorization..
     */
    v3_Confidentiality_Restricted: {
        code: "R",
        display: "restricted",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality"
    },
    /**
     * Policy for handling information related to an information subject's race, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's race, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_RaceInformationSensitivity: {
        code: "RACE",
        display: "race information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information used within the health records management process.
     */
    v3_ActReason_RecordsManagement: {
        code: "RECORDMGT",
        display: "records management",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Custodian system must remove information, which is not authorized to be access, used, or disclosed from records made available to otherwise authorized users.
     */
    v3_ActCode_Redact: {
        code: "REDACT",
        display: "redact",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security metadata observation value used to indicate the mechanism by which software systems can filter an IT resource (data, information object, service, or system capability) to remove any portion of the resource that is not authorized to be access, used, or disclosed.
     *
     *
     *                            Usage Note: "REDACTED" may be used, per applicable policy, as a flag to indicate to a user or receiver that some portion of an IT resource has filtered and not included in the content accessed or received.
     */
    v3_ObservationValue_Redacted: {
        code: "REDACTED",
        display: "redacted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Conveys prohibited actions which an information custodian, receiver, or user is not permitted to perform unless otherwise authorized or permitted under specified circumstances.
     *
     *
     *
     *
     *                            Usage Notes: ISO 22600-2 species that a Refrain Policy "defines actions the subjects must refrain from performing".  Per HL7 Composite Security and Privacy Domain Analysis Model:  May be used to indicate that a specific action is prohibited based on specific access control attributes e.g., purpose of use, information type, user role, etc.
     */
    v3_ActCode_RefrainPolicy: {
        code: "RefrainPolicy",
        display: "refrain policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to an information subject's religious affiliation, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's religion, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_ReligionInformationSensitivity: {
        code: "REL",
        display: "religion information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be adequate.
     */
    v3_ObservationValue_Reliable: {
        code: "RELIABLE",
        display: "reliable",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * To perform one or more operations on information about the amount remitted for a health care claim.
     */
    v3_ActReason_RemittanceAdvice: {
        code: "REMITADV",
        display: "remittance advice",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A security category label field value, which indicates that access and use of an IT resource is restricted to members of a research project.
     */
    v3_ActCode_ResearchProjectCompartment: {
        code: "RESCOMPT",
        display: "research project compartment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * A security category label field value, which indicates that access and use of an IT resource is restricted to members of records management department or workflow.
     */
    v3_ActCode_RecordsManagementCompartment: {
        code: "RMGTCOMPT",
        display: "records management compartment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling sickle cell disease information, which is afforded heightened confidentiality.  Information handling protocols are based on organizational policies related to sickle cell disease information, which is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then the Act valued with this ActCode should be associated with an Act valued with any applicable laws from the ActPrivacyLaw code system.
     */
    v3_ActCode_SickleCellAnemiaInformationSensitivity: {
        code: "SCA",
        display: "sickle cell anemia information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was asserted by a substitute decision maker.
     */
    v3_ObservationValue_SubstituteDecisionMakerAsserted: {
        code: "SDMAST",
        display: "substitute decision maker asserted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Security provenance metadata observation value used to indicate that an IT resource (data, information object, service, or system capability) was reported by a substitute decision maker.
     */
    v3_ObservationValue_SubstituteDecisionMakerReported: {
        code: "SDMRPT",
        display: "substitute decision maker reported",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Policy for handling sexual assault, abuse, or domestic violence information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to sexual assault, abuse, or domestic violence information that is deemed sensitive.
     *
     *                         SDV code covers violence perpetrated by related and non-related persons. This code should be specific to physical and mental trauma caused by a related person only.  The access control concerns are keeping the patient safe from the perpetrator who may have an abusive psychological control over the patient, may be stalking the patient, or may try to manipulate care givers into allowing the perpetrator to make contact with the patient.  The definition needs to be clarified.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_SexualAssaultAbuseOrDomesticViolenceInformationSensitivity: {
        code: "SDV",
        display: "sexual assault, abuse, or domestic violence information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Types of security policies that further specify the ActClassPolicy value set.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            obligation to encrypt
     *                            refrain from redisclosure without consent
     */
    v3_ActCode_SecurityPolicy: {
        code: "SecurityPolicy",
        display: "security policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling sexuality and reproductive health information, which will be afforded heightened confidentiality.  Information handling protocols based on organizational policies related to sexuality and reproductive health information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_SexualityAndReproductiveHealthInformationSensitivity: {
        code: "SEX",
        display: "sexuality and reproductive health information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Types of sensitivity policies that apply to Acts.  Act.confidentialityCode is defined in the RIM as "constraints around appropriate disclosure of information about this Act, regardless of mood."
     *
     *
     *                            Usage Note: ActSensitivity codes are used to bind information to an Act.confidentialityCode according to local sensitivity policy so that those confidentiality codes can then govern its handling across enterprises.  Internally to a policy domain, however, local policies guide the access control system on how end users in that policy domain are able to use information tagged with these sensitivity values.
     */
    v3_ActCode_SickleCell: {
        code: "SICKLE",
        display: "sickle cell",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information deemed specially protected by law or policy including substance abuse, substance use, psychiatric, mental health, behavioral health, and cognitive disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    v3_ActCode_SpeciallyProtectedInformationSensitivity: {
        code: "SPI",
        display: "specially protected information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling information related to a provider of sensitive services, which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to providers who deliver sensitive healthcare services in order to protect the privacy, well-being, and safety of the provider and of patients receiving sensitive services.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_SensitiveServiceProviderInformationSensitivity: {
        code: "SSP",
        display: "sensitive service provider information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Policy for handling sexually transmitted disease information, which will be afforded heightened confidentiality.
     *  Information handling protocols based on organizational policies related to sexually transmitted disease information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    v3_ActCode_SexuallyTransmittedDiseaseInformationSensitivity: {
        code: "STD",
        display: "sexually transmitted disease information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * Metadata observation used to indicate that some information has been removed from the source object when the view this object contains was constructed because of configuration options when the view was created. The content may not be suitable for use as the basis of a record update
     *
     *
     *                            Usage Note: This is not suitable to be used when information is removed for security reasons - see the code REDACTED for this use.
     */
    v3_ObservationValue_Subsetted: {
        code: "SUBSETTED",
        display: "subsetted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Policy for handling information related to alcohol or drug use disorders and conditions caused by these disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    v3_ActCode_SubstanceUseDisorderInformationSensitivity: {
        code: "SUD",
        display: "substance use disorder information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information in response to a request by a person authorized by the patient.
     */
    v3_ActReason_SupportNetwork: {
        code: "SUPNWK",
        display: "support network",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Security metadata observation value used to indicate that the IT resource syntax has been transformed from one syntactical representation to another.
     *
     *
     *                            Usage Note: "SYNTAC" code does not indicate the syntactical correctness of the syntactically transformed IT resource.
     */
    v3_ObservationValue_SyntacticTransform: {
        code: "SYNTAC",
        display: "syntactic transform",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * To perform one or more operations on information to design, develop, implement, test, or deploy a healthcare system or application.
     */
    v3_ActReason_SystemDevelopment: {
        code: "SYSDEV",
        display: "system development",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Policy for handling information not to be initially disclosed or discussed with patient except by a physician assigned to patient in this case. Information handling protocols based on organizational policies related to sensitive patient information that must be initially discussed with the patient by an attending physician before being disclosed to the patient.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     *
     *
     *                            Open Issue: This definition conflates a rule and a characteristic, and there may be a similar issue with ts sibling codes.
     */
    v3_ActCode_Taboo: {
        code: "TBOO",
        display: "taboo",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * To perform one or more operations on information used to prevent injury or disease to living subjects who may be the target of violence.
     */
    v3_ActReason_Threat: {
        code: "THREAT",
        display: "threat",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information used in training and education.
     */
    v3_ActReason_Training: {
        code: "TRAIN",
        display: "training",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for conducting scientific investigations to obtain health care knowledge related to evidence based medicine during the course of providing healthcare treatment.  Sometimes referred to as "bench to bedside", which is the iterative feedback loop between healthcare research and clinical trials with input from information collected in the course of routine provision of healthcare. For example, by extending a patient encounter to conduct a survey related to a research topic such as attitudes about use of a wellness device that a patient agreed to use. May be used in combination with clinical trial and other healthcare research purposes of use.
     */
    v3_ActReason_TranslationalHealthcareResearch: {
        code: "TRANSRCH",
        display: "translational healthcare research",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information for provision of health care.
     */
    v3_ActReason_Treatment: {
        code: "TREAT",
        display: "treatment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Security metadata observation value used to indicate that the IT resource has been translated from one human language to another.
     *
     *
     *                            Usage Note: "TRSLT" does not indicate the fidelity of the translation or the languages translated.
     *
     *                         The fidelity of the IT Resource translation may be indicated using a SecurityIntegrityConfidenceObservation.
     *
     *                         To indicate languages, use the Value Set:HumanLanguage (2.16.840.1.113883.1.11.11526)
     */
    v3_ObservationValue_Translated: {
        code: "TRSLT",
        display: "translated",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Definition: Privacy metadata indicating that the information is not classified as sensitive.
     *
     *
     *                            Examples: Includes publicly available information, e.g., business name, phone, email or physical address.
     *
     *
     *                            Usage Note: This metadata indicates that the receiver has no obligation to consider additional policies when making access control decisions.   Note that in some jurisdictions, personally identifiable information must be protected as confidential, so it would not be appropriate to assign a confidentiality code of "unrestricted"  to that information even if it is publicly available.
     */
    v3_Confidentiality_Unrestricted: {
        code: "U",
        display: "unrestricted",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality"
    },
    /**
     * Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be uncertain.
     */
    v3_ObservationValue_UncertainReliability: {
        code: "UNCERTREL",
        display: "uncertain reliability",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Security metadata observation value used to indicate that the veracity or trustworthiness of an IT resource (data, information object, service, or system capability) for a specified purpose of use is perceived to be or deemed by policy to be inadequate.
     */
    v3_ObservationValue_Unreliable: {
        code: "UNRELIABLE",
        display: "unreliable",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Custodian security system must declassify information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as classified at a more protected level  in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    v3_ActCode_UpgradeSecurityLabel: {
        code: "UPGRDLABEL",
        display: "upgrade security label",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
    /**
     * . Privacy metadata indicating that the information is extremely sensitive and likely stigmatizing health information that presents a very high risk if disclosed without authorization.  This information must be kept in the highest confidence.
     *
     *
     *                            Examples:  Includes information about a victim of abuse, patient requested information sensitivity, and taboo subjects relating to health status that must be discussed with the patient by an attending provider before sharing with the patient.  May also include information held under â€œlegal lockâ€? or attorney-client privilege
     *
     *
     *                            Map:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
     *
     *
     *                            Usage Note:  This metadata indicates that the receiver may not disclose this information except as directed by the information custodian, who may be the information subject.
     */
    v3_Confidentiality_VeryRestricted: {
        code: "V",
        display: "very restricted",
        system: "http://terminology.hl7.org/CodeSystem/v3-Confidentiality"
    },
    /**
     * Security metadata observation value conveying the alteration integrity of an IT resource (data, information object, service, or system capability)  which indicates that the resource only retains versions of an IT resource  for access and use per applicable policy
     *
     *
     *                            Usage Note: When this code is used, expectation is that the system has removed historical versions of the data that falls outside the time period deemed to be the effective time of the applicable version.
     */
    v3_ObservationValue_Versioned: {
        code: "VERSIONED",
        display: "versioned",
        system: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue"
    },
    /**
     * Policy for handling information related to harm by violence, which is afforded heightened confidentiality. Harm by violence is perpetrated by an unrelated person.
     *
     *                         Access control concerns for information about mental or physical harm resulting from violence caused by an unrelated person may include manipulation of care givers or access to records that enable the perpetrator contact or locate the patient, but the perpetrator will likely not have established abusive psychological control over the patient.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    v3_ActCode_ViolenceInformationSensitivity: {
        code: "VIO",
        display: "violence information sensitivity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActCode"
    },
};
//# sourceMappingURL=SecurityLabels.js.map