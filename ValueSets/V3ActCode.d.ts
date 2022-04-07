import { Coding } from '../strictmodels';
/**
 *  A code specifying the particular kind of Act that the Act-instance represents within its class.  Constraints:
 * The kind of Act (e.g. physical examination, serum potassium, inpatient encounter, charge financial transaction, etc.) is specified with a code from one of several, typically external, coding systems.  The coding system will depend on the class of Act, such as LOINC for observations, etc. Conceptually, the Act.code must be a specialization of the Act.classCode. This is why the structure of ActClass domain should be reflected in the superstructure of the ActCode domain and then individual codes or externally referenced vocabularies subordinated under these domains that reflect the ActClass structure. Act.classCode and Act.code are not modifiers of each other but the Act.code concept should really imply the Act.classCode concept. For a negative example, it is not appropriate to use an Act.code "potassium" together with and Act.classCode for "laboratory observation" to somehow mean "potassium laboratory observation" and then use the same Act.code for "potassium" together with Act.classCode for "medication" to mean "substitution of potassium". This mutually modifying use of Act.code and Act.classCode is not permitted.
 */
export declare const V3ActCode: {
    /**
     * Includes coded responses that will occur as a result of the adjudication of an electronic invoice at a summary level and provides guidance on interpretation of the referenced adjudication results.
     */
    v3_ActCode_ActAdjudicationCode: Coding;
    /**
     * Catagorization of grouping criteria for the associated transactions and/or summary (totals, subtotals).
     */
    v3_ActCode_ActAdjudicationGroupCode: Coding;
    /**
     * Actions to be carried out by the recipient of the Adjudication Result information.
     */
    v3_ActCode_ActAdjudicationResultActionCode: Coding;
    /**
     * ActAdministrativeAuthorizationDetectedIssueCode
     */
    v3_ActCode_ActAdministrativeAuthorizationDetectedIssueCode: Coding;
    /**
     * Identifies types of detectyed issues for Act class "ALRT" for the administrative and patient administrative acts domains.
     */
    v3_ActCode_ActAdministrativeDetectedIssueCode: Coding;
    /**
     * ActAdministrativeRuleDetectedIssueCode
     */
    v3_ActCode_ActAdministrativeRuleDetectedIssueCode: Coding;
    /**
     * Definition:An identifying modifier code for healthcare interventions or procedures.
     */
    v3_ActCode_ActBillableModifierCode: Coding;
    /**
     * Definition: An identifying code for billable services, as opposed to codes for similar services used to identify them for functional purposes.
     */
    v3_ActCode_ActBillableServiceCode: Coding;
    /**
     * The type of provision(s)  made for reimbursing for the deliver of healthcare services and/or goods provided by a Provider, over a specified period.
     */
    v3_ActCode_ActBillingArrangementCode: Coding;
    /**
     * Type of bounded ROI.
     */
    v3_ActCode_ActBoundedROICode: Coding;
    /**
     * Description:The type and scope of responsibility taken-on by the performer of the Act for a specific subject of care.
     */
    v3_ActCode_ActCareProvision: Coding;
    /**
     * Description: Coded types of attachments included to support a healthcare claim.
     */
    v3_ActCode_ActClaimAttachmentCategoryCode: Coding;
    /**
     * Specifies the type of agreement between one or more grantor and grantee in which rights and obligations related to one or more shared items of interest are allocated.
     *
     *
     *                            Usage Note: Such agreements may be considered "consent directives" or "contracts" depending on the context, and are considered closely related or synonymous from a legal perspective.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare Privacy Consent Directive permitting or restricting in whole or part the collection, access, use, and disclosure of health information, and any associated handling caveats.
     *                            Healthcare Medical Consent Directive to receive medical procedures after being informed of risks and benefits, thereby reducing the grantee's liability.
     *                            Research Informed Consent for participation in clinical trials and disclosure of health information after being informed of risks and benefits, thereby reducing the grantee's liability.
     *                            Substitute decision maker delegation in which the grantee assumes responsibility to act on behalf of the grantor.
     *                            Contracts in which the agreement requires assent/dissent by the grantor of terms offered by a grantee, a consumer opts out of an "award" system for use of a retailer's marketing or credit card vendor's point collection cards in exchange for allowing purchase tracking and profiling.
     *                            A mobile device or App privacy policy and terms of service to which a user must agree in whole or in part in order to utilize the service.
     *                            Agreements between a client and an authorization server or between an authorization server and a resource operator and/or resource owner permitting or restricting e.g., collection, access, use, and disclosure of information, and any associated handling caveats.
     */
    v3_ActCode_ActConsentDirective: Coding;
    /**
     * Definition: The type of consent directive, e.g., to consent or dissent to collect, access, or use in specific ways within an EHRS or for health information exchange; or to disclose  health information  for purposes such as research.
     */
    v3_ActCode_ActConsentType: Coding;
    /**
     * Constrains the ActCode to the domain of Container Registration
     */
    v3_ActCode_ActContainerRegistrationCode: Coding;
    /**
     * An observation form that determines parameters or attributes of an Act. Examples are the settings of a ventilator machine as parameters of a ventilator treatment act; the controls on dillution factors of a chemical analyzer as a parameter of a laboratory observation act; the settings of a physiologic measurement assembly (e.g., time skew) or the position of the body while measuring blood pressure.
     *
     *                         Control variables are forms of observations because just as with clinical observations, the Observation.code determines the parameter and the Observation.value assigns the value. While control variables sometimes can be observed (by noting the control settings or an actually measured feedback loop) they are not primary observations, in the sense that a control variable without a primary act is of no use (e.g., it makes no sense to record a blood pressure position without recording a blood pressure, whereas it does make sense to record a systolic blood pressure without a diastolic blood pressure).
     */
    v3_ActCode_ActControlVariable: Coding;
    /**
     * Indication of authorization for healthcare service(s) and/or product(s).  If authorization is approved, funds are set aside.
     */
    v3_ActCode_ActCoverageAuthorizationConfirmationCode: Coding;
    /**
     * Response to an insurance coverage eligibility query or authorization request.
     */
    v3_ActCode_ActCoverageConfirmationCode: Coding;
    /**
     * Indication of eligibility coverage for healthcare service(s) and/or product(s).
     */
    v3_ActCode_ActCoverageEligibilityConfirmationCode: Coding;
    /**
     * Criteria that are applicable to the authorized coverage.
     */
    v3_ActCode_ActCoverageLimitCode: Coding;
    /**
     * Maximum amount paid or maximum number of services/products covered; or maximum amount or number covered during a specified time period under the policy or program.
     */
    v3_ActCode_ActCoverageQuantityLimitCode: Coding;
    /**
     * Definition: Set of codes indicating the type of insurance policy or program that pays for the cost of benefits provided to covered parties.
     */
    v3_ActCode_ActCoverageTypeCode: Coding;
    /**
     * Codes representing the types of covered parties that may receive covered benefits under a policy or program.
     */
    v3_ActCode_ActCoveredPartyLimitCode: Coding;
    /**
     * Description:The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by a credentialing agency, i.e. government or non-government agency. Failure in executing this Act may result in loss of credential to the person or organization who participates as performer of the Act. Excludes employment agreements.
     *
     *
     *                            Example:Hospital license; physician license; clinic accreditation.
     */
    v3_ActCode_ActCredentialedCare: Coding;
    /**
     * Description:The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing individuals.
     */
    v3_ActCode_ActCredentialedCareProvisionPeron: Coding;
    /**
     * Description:The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing programs within organizations.
     */
    v3_ActCode_ActCredentialedCareProvisionProgram: Coding;
    /**
     * Accommodation type.  In Intent mood, represents the accommodation type requested.  In Event mood, represents accommodation assigned/used.  In Definition mood, represents the available accommodation type.
     */
    v3_ActCode_ActEncounterAccommodationCode: Coding;
    /**
     * Domain provides codes that qualify the ActEncounterClass (ENC)
     */
    v3_ActCode_ActEncounterCode: Coding;
    /**
     * Concepts that identify the type or nature of exposure interaction.  Examples include "household", "care giver", "intimate partner", "common space", "common substance", etc. to further describe the nature of interaction.
     */
    v3_ActCode_ActExposureCode: Coding;
    /**
     * ActFinancialTransactionCode
     */
    v3_ActCode_ActFinancialTransactionCode: Coding;
    /**
     * Definition: Set of codes indicating the type of health insurance policy that covers health services provided to covered parties.  A health insurance policy is a written contract for insurance between the insurance company and the policyholder, and contains pertinent facts about the policy owner (the policy holder), the health insurance coverage, the insured subscribers and dependents, and the insurer.  Health insurance is typically administered in accordance with a plan, which specifies (1) the type of health services and health conditions that will be covered under what circumstances (e.g., exclusion of a pre-existing condition, service must be deemed medically necessary; service must not be experimental; service must provided in accordance with a protocol; drug must be on a formulary; service must be prior authorized; or be a referral from a primary care provider); (2) the type and affiliation of providers (e.g., only allopathic physicians, only in network, only providers employed by an HMO); (3) financial participations required of covered parties (e.g., co-pays, coinsurance, deductibles, out-of-pocket); and (4) the manner in which services will be paid (e.g., under indemnity or fee-for-service health plans, the covered party typically pays out-of-pocket and then file a claim for reimbursement, while health plans that have contractual relationships with providers, i.e., network providers, typically do not allow the providers to bill the covered party for the cost of the service until after filing a claim with the payer and receiving reimbursement).
     */
    v3_ActCode_ActHealthInsuranceTypeCode: Coding;
    /**
     * Set of codes indicating the type of incident or accident.
     */
    v3_ActCode_ActIncidentCode: Coding;
    /**
     * Description: The type of health information to which the subject of the information or the subject's delegate consents or dissents.
     */
    v3_ActCode_ActInformationAccessCode: Coding;
    /**
     * Concepts conveying the context in which authorization given under jurisdictional law, by organizational policy, or by a patient consent directive permits the collection, access, use or disclosure of specified patient health information.
     */
    v3_ActCode_ActInformationAccessContextCode: Coding;
    /**
     * Definition:Indicates the set of information types which may be manipulated or referenced, such as for recommending access restrictions.
     */
    v3_ActCode_ActInformationCategoryCode: Coding;
    /**
     * Types of sensitivity policies that apply to Acts.  Act.confidentialityCode is defined in the RIM as "constraints around appropriate disclosure of information about this Act, regardless of mood."
     *
     *
     *                            Usage Note: ActSensitivity codes are used to bind information to an Act.confidentialityCode according to local sensitivity policy so that those confidentiality codes can then govern its handling across enterprises.  Internally to a policy domain, however, local policies guide the access control system on how end users in that policy domain are  able to use information tagged with these sensitivity values.
     */
    v3_ActCode_ActInformationSensitivityPolicy: Coding;
    /**
     * Set of codes indicating the type of insurance policy or other source of funds to cover healthcare costs.
     */
    v3_ActCode_ActInsurancePolicyCode: Coding;
    /**
     * Definition: Set of codes indicating the type of insurance policy.  Insurance, in law and economics, is a form of risk management primarily used to hedge against the risk of potential financial loss. Insurance is defined as the equitable transfer of the risk of a potential loss, from one entity to another, in exchange for a premium and duty of care. A policy holder is an individual or an organization enters into a contract with an underwriter which stipulates that, in exchange for payment of a sum of money (a premium), one or more covered parties (insureds) is guaranteed compensation for losses resulting from certain perils under specified conditions.  The underwriter analyzes the risk of loss, makes a decision as to whether the risk is insurable, and prices the premium accordingly.  A policy provides benefits that indemnify or cover the cost of a loss incurred by a covered party, and may include coverage for services required to remediate a loss.  An insurance policy contains pertinent facts about the policy holder, the insurance coverage, the covered parties, and the insurer.  A policy may include exemptions and provisions specifying the extent to which the indemnification clause cannot be enforced for intentional tortious conduct of a covered party, e.g., whether the covered parties are jointly or severably insured.
     *
     *
     *                            Discussion: In contrast to programs, an insurance policy has one or more policy holders, who own the policy.  The policy holder may be the covered party, a relative of the covered party, a partnership, or a corporation, e.g., an employer.  A subscriber of a self-insured health insurance policy is a policy holder.  A subscriber of an employer sponsored health insurance policy is holds a certificate of coverage, but is not a policy holder; the policy holder is the employer.  See CoveredRoleType.
     */
    v3_ActCode_ActInsuranceTypeCode: Coding;
    /**
     * Codes representing a grouping of invoice elements (totals, sub-totals), reported through a Payment Advice or a Statement of Financial Activity (SOFA).  The code can represent summaries by day, location, payee and other cost elements such as bonus, retroactive adjustment and transaction fees.
     */
    v3_ActCode_ActInvoiceAdjudicationPaymentCode: Coding;
    /**
     * Codes representing adjustments to a Payment Advice such as retroactive, clawback, garnishee, etc.
     */
    v3_ActCode_ActInvoiceAdjudicationPaymentGroupCode: Coding;
    /**
     * Codes representing a grouping of invoice elements (totals, sub-totals), reported through a Payment Advice or a Statement of Financial Activity (SOFA).  The code can represent summaries by day, location, payee, etc.
     */
    v3_ActCode_ActInvoiceAdjudicationPaymentSummaryCode: Coding;
    /**
     * An identifying data string for healthcare products.
     */
    v3_ActCode_ActInvoiceDetailClinicalProductCode: Coding;
    /**
     * An identifying data string for healthcare procedures.
     */
    v3_ActCode_ActInvoiceDetailClinicalServiceCode: Coding;
    /**
     * Codes representing a service or product that is being invoiced (billed).  The code can represent such concepts as "office visit", "drug X", "wheelchair" and other billable items such as taxes, service charges and discounts.
     */
    v3_ActCode_ActInvoiceDetailCode: Coding;
    /**
     * An identifying data string for A substance used as a medication or in the preparation of medication.
     */
    v3_ActCode_ActInvoiceDetailDrugProductCode: Coding;
    /**
     * The billable item codes to identify adjudicator specified components to the total billing of a claim.
     */
    v3_ActCode_ActInvoiceDetailGenericAdjudicatorCode: Coding;
    /**
     * The detail item codes to identify charges or changes to the total billing of a claim due to insurance rules and payments.
     */
    v3_ActCode_ActInvoiceDetailGenericCode: Coding;
    /**
     * The billable item codes to identify modifications to a billable item charge. As for example after hours increase in the office visit fee.
     */
    v3_ActCode_ActInvoiceDetailGenericModifierCode: Coding;
    /**
     * The billable item codes to identify provider supplied charges or changes to the total billing of a claim.
     */
    v3_ActCode_ActInvoiceDetailGenericProviderCode: Coding;
    /**
     * An identifying data string for medical facility accommodations.
     */
    v3_ActCode_ActInvoiceDetailPreferredAccommodationCode: Coding;
    /**
     * The billable item codes to identify modifications to a billable item charge by a tax factor applied to the amount. As for example 7% provincial sales tax.
     */
    v3_ActCode_ActInvoiceDetailTaxCode: Coding;
    /**
     * Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     */
    v3_ActCode_ActInvoiceElementCode: Coding;
    /**
     * Identifies the different types of summary information that can be reported by queries dealing with Statement of Financial Activity (SOFA).  The summary information is generally used to help resolve balance discrepancies between providers and payors.
     */
    v3_ActCode_ActInvoiceElementSummaryCode: Coding;
    /**
     * Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     *
     *                         Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
     */
    v3_ActCode_ActInvoiceGroupCode: Coding;
    /**
     * Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     *
     *                         Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
     *
     *                         The domain is only specified for an intermediate invoice element group (non-root or non-top level) for an Invoice.
     */
    v3_ActCode_ActInvoiceInterGroupCode: Coding;
    /**
     * Includes coded responses that will occur as a result of the adjudication of an electronic invoice at a summary level and provides guidance on interpretation of the referenced adjudication results.
     */
    v3_ActCode_ActInvoiceOverrideCode: Coding;
    /**
     * Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     *
     *                         Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
     *
     *                         Codes from this domain reflect the type of Invoice such as Pharmacy Dispense, Clinical Service and Clinical Product.  The domain is only specified for the root (top level) invoice element group for an Invoice.
     */
    v3_ActCode_ActInvoiceRootGroupCode: Coding;
    /**
     * Provides codes associated with ActClass value of LIST (working list)
     */
    v3_ActCode_ActListCode: Coding;
    /**
     * General category of medical service provided to the patient during their encounter.
     */
    v3_ActCode_ActMedicalServiceCode: Coding;
    /**
     * Definition:A collection of concepts that identifies different types of 'duration-based' mediation working lists.
     *
     *
     *                            Examples:"Continuous/Chronic" "Short-Term" and "As Needed"
     */
    v3_ActCode_ActMedicationTherapyDurationWorkingList: Coding;
    /**
     * Identifies types of monitoring programs
     */
    v3_ActCode_ActMonitoringProtocolCode: Coding;
    /**
     * Description:Concepts representing indications (reasons for clinical action) other than diagnosis and symptoms.
     */
    v3_ActCode_ActNonObservationIndicationCode: Coding;
    /**
     * ActObservationList
     */
    v3_ActCode_ActObservationList: Coding;
    /**
     * Identifies the type of verification investigation being undertaken with respect to the subject of the verification activity.
     *
     *
     *                            Examples:
     *
     *
     *
     *
     *                               Verification of eligibility for coverage under a policy or program - aka enrolled/covered by a policy or program
     *
     *
     *
     *                               Verification of record - e.g., person has record in an immunization registry
     *
     *
     *
     *                               Verification of enumeration - e.g. NPI
     *
     *
     *
     *                               Verification of Board Certification - provider specific
     *
     *
     *
     *                               Verification of Certification - e.g. JAHCO, NCQA, URAC
     *
     *
     *
     *                               Verification of Conformance - e.g. entity use with HIPAA, conformant to the CCHIT EHR system criteria
     *
     *
     *
     *                               Verification of Provider Credentials
     *
     *
     *
     *                               Verification of no adverse findings - e.g. on National Provider Data Bank, Health Integrity Protection Data Base (HIPDB)
     */
    v3_ActCode_ActObservationVerification: Coding;
    /**
     * Description:Provides a categorization for annotations recorded directly against the patient .
     */
    v3_ActCode_ActPatientAnnotationType: Coding;
    /**
     * Definition: Characterizes how a patient was or will be transported to the site of a patient encounter.
     *
     *
     *                            Examples: Via ambulance, via public transit, on foot.
     */
    v3_ActCode_ActPatientTransportationModeCode: Coding;
    /**
     * Code identifying the method or the movement of payment instructions.
     *
     *                         Codes are drawn from X12 data element 591 (PaymentMethodCode)
     */
    v3_ActCode_ActPaymentCode: Coding;
    /**
     * Identifies types of dispensing events
     */
    v3_ActCode_ActPharmacySupplyType: Coding;
    /**
     * Description:Types of policies that further specify the ActClassPolicy value set.
     */
    v3_ActCode_ActPolicyType: Coding;
    /**
     * A jurisdictional mandate, regulation, obligation, requirement, rule, or expectation deeming certain information to be private to an individual or organization, which is imposed on:
     *
     *
     *                            The activity of a governed party
     *                            The behavior of a governed party
     *                            The manner in which an act is executed by a governed party
     */
    v3_ActCode_ActPrivacyLaw: Coding;
    /**
     * A policy deeming certain information to be private to an individual or organization.
     *
     *
     *                            Definition: A mandate, obligation, requirement, rule, or expectation relating to privacy.
     *
     *
     *                            Discussion: ActPrivacyPolicyType codes support the designation of the 1..* policies that are applicable to an Act such as a Consent Directive, a Role such as a VIP Patient, or an Entity such as a patient who is a minor.  1..* ActPrivacyPolicyType values may be associated with an Act or Role to indicate the policies that govern the assignment of an Act or Role confidentialityCode.  Use of multiple ActPrivacyPolicyType values enables fine grain specification of applicable policies, but must be carefully assigned to ensure cogency and avoid creation of conflicting policy mandates.
     *
     *
     *                            Usage Note: Statutory title may be named in the ActClassPolicy Act Act.title to specify which privacy policy is being referenced.
     */
    v3_ActCode_ActPrivacyPolicy: Coding;
    /**
     * An identifying code for healthcare interventions/procedures.
     */
    v3_ActCode_ActProcedureCode: Coding;
    /**
     * The method that a product is obtained for use by the subject of the supply act (e.g. patient).  Product examples are consumable or durable goods.
     */
    v3_ActCode_ActProductAcquisitionCode: Coding;
    /**
     * Definition: A set of codes used to indicate coverage under a program.  A program is an organized structure for administering and funding coverage of a benefit package for covered parties meeting eligibility criteria, typically related to employment, health, financial, and demographic status. Programs are typically established or permitted by legislation with provisions for ongoing government oversight.  Regulations may mandate the structure of the program, the manner in which it is funded and administered, covered benefits, provider types, eligibility criteria and financial participation. A government agency may be charged with implementing the program in accordance to the regulation.  Risk of loss under a program in most cases would not meet what an underwriter would consider an insurable risk, i.e., the risk is not random in nature, not financially measurable, and likely requires subsidization with government funds.
     *
     *
     *                            Discussion: Programs do not have policy holders or subscribers.  Program eligibles are enrolled based on health status, statutory eligibility, financial status, or age.  Program eligibles who are covered parties under the program may be referred to as members, beneficiaries, eligibles, or recipients.  Programs risk are underwritten by not for profit organizations such as governmental entities, and the beneficiaries typically do not pay for any or some portion of the cost of coverage.  See CoveredPartyRoleType.
     */
    v3_ActCode_ActProgramTypeCode: Coding;
    /**
     * Transportation of a specimen.
     */
    v3_ActCode_ActSpecimenTransportCode: Coding;
    /**
     * Set of codes related to specimen treatments
     */
    v3_ActCode_ActSpecimenTreatmentCode: Coding;
    /**
     * Identifies the type of observation that is made about a specimen that may affect its processing, analysis or further result interpretation
     */
    v3_ActCode_ActSpecObsCode: Coding;
    /**
     * Description: Describes the type of substance administration being performed.  This should not be used to carry codes for identification of products.  Use an associated role or entity to carry such information.
     */
    v3_ActCode_ActSubstanceAdministrationCode: Coding;
    /**
     * Description: A task or action that a user may perform in a clinical information system (e.g., medication order entry, laboratory test results review, problem list entry).
     */
    v3_ActCode_ActTaskCode: Coding;
    /**
     * Codes used to identify different types of 'duration-based' working lists.  Examples include "Continuous/Chronic", "Short-Term" and "As-Needed".
     */
    v3_ActCode_ActTherapyDurationWorkingListCode: Coding;
    /**
     * Characterizes how a transportation act was or will be carried out.
     *
     *
     *                            Examples: Via private transport, via public transit, via courier.
     */
    v3_ActCode_ActTransportationModeCode: Coding;
    /**
     * Definition: A jurisdictional mandate in the U.S. relating to privacy.
     *
     *
     *                            Usage Note: ActPrivacyLaw codes may be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.  May be used to further specify rationale for assignment of other ActPrivacyPolicy codes in the US realm, e.g., ETH and 42CFRPart2 can be differentiated from ETH and Title38Part1.
     */
    v3_ActCode_ActUSPrivacyLaw: Coding;
    /**
     * AnnotationType
     */
    v3_ActCode_AnnotationType: Coding;
    /**
     * Code for the mechanism by which disease was acquired by the living subject involved in the public health case. Includes sexually transmitted, airborne, bloodborne, vectorborne, foodborne, zoonotic, nosocomial, mechanical, dermal, congenital, environmental exposure, indeterminate.
     */
    v3_ActCode_CaseTransmissionMode: Coding;
    /**
     * ECGObservationSeriesType
     */
    v3_ActCode_ECGObservationSeriesType: Coding;
    /**
     * Types of sensitivity policies that may apply to a sensitive attribute on an Entity.
     *
     *
     *                            Usage Note: EntitySensitivity codes are used to convey a policy that is applicable to sensitive information conveyed by an entity attribute.  May be used to bind a Role.confidentialityCode associated with an Entity per organizational policy.  Role.confidentialityCode is defined in the RIM as "an indication of the appropriate disclosure of information about this Role with respect to the playing Entity."
     */
    v3_ActCode_EntityInformationSensitivityPolicy: Coding;
    /**
     * FDA label data
     */
    v3_ActCode_FDALabelData: Coding;
    /**
     * Description: None provided
     */
    v3_ActCode_GeneticObservationType: Coding;
    /**
     * Description:Accommodation type. In Intent mood, represents the accommodation type requested. In Event mood, represents accommodation assigned/used. In Definition mood, represents the available accommodation type.
     */
    v3_ActCode_HL7AccommodationCode: Coding;
    /**
     * Domain provides the root for HL7-defined detailed or rich codes for the Act classes.
     */
    v3_ActCode_HL7DefinedActCodes: Coding;
    /**
     * Description: Observation codes which describe characteristics of the immunization material.
     */
    v3_ActCode_ImmunizationObservationType: Coding;
    /**
     * A code that is used to indicate the type of case safety report received from sender. The current code example reference is from the International Conference on Harmonisation (ICH) Expert Workgroup guideline on Clinical Safety Data Management: Data Elements for Transmission of Individual Case Safety Reports. The unknown/unavailable option allows the transmission of information from a secondary sender where the initial sender did not specify the type of report.
     *
     *                         Example concepts include: Spontaneous, Report from study, Other.
     */
    v3_ActCode_IndividualCaseSafetyReportType: Coding;
    /**
     * A mandate, obligation, requirement, rule, or expectation characterizing the value or importance of a resource and may include its vulnerability. (Based on ISO7498-2:1989. Note: The vulnerability of personally identifiable sensitive information may be based on concerns that the unauthorized disclosure may result in social stigmatization or discrimination.) Description:  Types of Sensitivity policy that apply to Acts or Roles.  A sensitivity policy is adopted by an enterprise or group of enterprises (a 'policy domain') through a formal data use agreement that stipulates the value, importance, and vulnerability of information. A sensitivity code representing a sensitivity policy may be associated with criteria such as categories of information or sets of information identifiers (e.g., a value set of clinical codes or branch in a code system hierarchy).   These criteria may in turn be used for the Policy Decision Point in a Security Engine.  A sensitivity code may be used to set the confidentiality code used on information about Acts and Roles to trigger the security mechanisms required to control how security principals (i.e., a person, a machine, a software application) may act on the information (e.g., collection, access, use, or disclosure). Sensitivity codes are never assigned to the transport or business envelope containing patient specific information being exchanged outside of a policy domain as this would disclose the information intended to be protected by the policy.  When sensitive information is exchanged with others outside of a policy domain, the confidentiality code on the transport or business envelope conveys the receiver's responsibilities and indicates the how the information is to be safeguarded without unauthorized disclosure of the sensitive information.  This ensures that sensitive information is treated by receivers as the sender intends, accomplishing interoperability without point to point negotiations.
     *
     *
     *                            Usage Note: Sensitivity codes are not useful for interoperability outside of a policy domain because sensitivity policies are typically localized and vary drastically across policy domains even for the same information category because of differing organizational business rules, security policies, and jurisdictional requirements.  For example, an employee's sensitivity code would make little sense for use outside of a policy domain.   'Taboo' would rarely be useful outside of a policy domain unless there are jurisdictional requirements requiring that a provider disclose sensitive information to a patient directly.  Sensitivity codes may be more appropriate in a legacy system's Master Files in order to notify those who access a patient's orders and observations about the sensitivity policies that apply.  Newer systems may have a security engine that uses a sensitivity policy's criteria directly.  The specializable InformationSensitivityPolicy Act.code may be useful in some scenarios if used in combination with a sensitivity identifier and/or Act.title.
     */
    v3_ActCode_InformationSensitivityPolicy: Coding;
    /**
     * Total counts and total net amounts adjudicated for all  Invoice Groupings that were adjudicated within a time period based on the adjudication date of the Invoice Grouping.
     */
    v3_ActCode_InvoiceElementAdjudicated: Coding;
    /**
     * Total counts and total net amounts paid for all  Invoice Groupings that were paid within a time period based on the payment date.
     */
    v3_ActCode_InvoiceElementPaid: Coding;
    /**
     * Total counts and total net amounts billed for all Invoice Groupings that were submitted within a time period.  Adjudicated invoice elements are included.
     */
    v3_ActCode_InvoiceElementSubmitted: Coding;
    /**
     * Definition:The set of LOINC codes for the act of determining the period of time that has elapsed since an entity was born or created.
     */
    v3_ActCode_LOINCObservationActContextAgeType: Coding;
    /**
     * MedicationObservationType
     */
    v3_ActCode_MedicationObservationType: Coding;
    /**
     * Distinguishes the kinds of coded observations that could be the trigger for clinical issue detection. These are observations that are not measurable, but instead can be defined with codes. Coded observation types include: Allergy, Intolerance, Medical Condition, Pregnancy status, etc.
     */
    v3_ActCode_ObservationIssueTriggerCodedObservationType: Coding;
    /**
     * Codes used to define various metadata aspects of a health quality measure.
     */
    v3_ActCode_ObservationQualityMeasureAttribute: Coding;
    /**
     * ObservationSequenceType
     */
    v3_ActCode_ObservationSequenceType: Coding;
    /**
     * ObservationSeriesType
     */
    v3_ActCode_ObservationSeriesType: Coding;
    /**
     * Identifies the kinds of observations that can be performed
     */
    v3_ActCode_ObservationType: Coding;
    /**
     * Description: Reporting codes that are related to an immunization event.
     */
    v3_ActCode_PatientImmunizationRelatedObservationType: Coding;
    /**
     * Observation types for specifying criteria used to assert that a subject is included in a particular population.
     */
    v3_ActCode_PopulationInclusionObservationType: Coding;
    /**
     * Types of observations that can be made about Preferences.
     */
    v3_ActCode_PreferenceObservationType: Coding;
    /**
     * Shape of the region on the object being referenced
     */
    v3_ActCode_ROIOverlayShape: Coding;
    /**
     * Types of sensitivity policies that apply to Roles.
     *
     *
     *                            Usage Notes: RoleSensitivity codes are used to bind information to a Role.confidentialityCode per organizational policy.  Role.confidentialityCode is defined in the RIM as "an indication of the appropriate disclosure of information about this Role with respect to the playing Entity."
     */
    v3_ActCode_RoleInformationSensitivityPolicy: Coding;
    /**
     * Definition:Estimated age.
     */
    v3_ActCode_AgePatientQnEst: Coding;
    /**
     * Definition:Reported age.
     */
    v3_ActCode_AgePatientQnReported: Coding;
    /**
     * Definition:Calculated age.
     */
    v3_ActCode_AgePatientQnCalc: Coding;
    /**
     * Definition:General specification of age with no implied method of determination.
     */
    v3_ActCode_AgePatientQnDefinition: Coding;
    /**
     * Definition:Age at onset of associated adverse event; no implied method of determination.
     */
    v3_ActCode_AgeAtOnsetOfAdverseEvent: Coding;
    /**
     * 42 CFR Part 2 stipulates the right of an individual who has applied for or been given diagnosis or treatment for alcohol or drug abuse at a federally assisted program.
     *
     *
     *                            Definition: Non-disclosure of health information relating to health care paid for by a federally assisted substance abuse program without patient consent.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    v3_ActCode_VAL42CFRPart2: Coding;
    /**
     * The invoice element has been accepted for payment but one or more adjustment(s) have been made to one or more invoice element line items (component charges).
     *
     *                         Also includes the concept 'Adjudicate as zero' and items not covered under a particular Policy.
     *
     *                         Invoice element can be reversed (nullified).
     *
     *                         Recommend that the invoice element is saved for DUR (Drug Utilization Reporting).
     */
    v3_ActCode_AdjudicatedWithAdjustments: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    v3_ActCode_AccreditedAssistedLivingCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    v3_ActCode_AccreditedAmbulatoryCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    v3_ActCode_AccreditedBehavioralHealthCare: Coding;
    /**
     * Description:The proposed therapy is frequently misused or abused and therefore should be used with caution and/or monitoring.
     */
    v3_ActCode_CommonlyAbusedMisusedAlert: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    v3_ActCode_AccreditedCriticalAccessHospitalCare: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access adverse drug reaction information for a patient.
     */
    v3_ActCode_AdverseDrugReactionAccess: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access all information for a patient.
     */
    v3_ActCode_AllAccess: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access allergy information for a patient.
     */
    v3_ActCode_AllergyAccess: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access informational consent information for a patient.
     */
    v3_ActCode_InformationalConsentAccess: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access demographics information for a patient.
     */
    v3_ActCode_DemographicsAccess: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access diagnostic imaging information for a patient.
     */
    v3_ActCode_DiagnosticImagingAccess: Coding;
    /**
     * Automated Clearing House (ACH).
     */
    v3_ActCode_AutomatedClearingHouse: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    v3_ActCode_AccreditedHospitalCare: Coding;
    /**
     * The lowering of specimen pH through the addition of an acid
     */
    v3_ActCode_Acidification: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access immunization information for a patient.
     */
    v3_ActCode_ImmunizationAccess: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access lab test result information for a patient.
     */
    v3_ActCode_LabTestResultAccess: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access medical condition information for a patient.
     */
    v3_ActCode_MedicationAccess: Coding;
    /**
     * Definition: Provide consent to view or access medical condition information for a patient.
     */
    v3_ActCode_MedicalConditionAccess: Coding;
    /**
     * Description:Provide consent to collect, use, disclose, or access mental health information for a patient.
     */
    v3_ActCode_MentalHealthAccess: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access common observation information for a patient.
     */
    v3_ActCode_CommonObservationsAccess: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access coverage policy or program for a patient.
     */
    v3_ActCode_PolicyOrProgramInformationAccess: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access provider information for a patient.
     */
    v3_ActCode_ProviderInformationAccess: Coding;
    /**
     * Description: Provide consent to collect, use, disclose, or access professional service information for a patient.
     */
    v3_ActCode_ProfessionalServiceAccess: Coding;
    /**
     * Description:Provide consent to collect, use, disclose, or access substance abuse information for a patient.
     */
    v3_ActCode_SubstanceAbuseAccess: Coding;
    /**
     * A mandate, obligation, requirement, rule, or expectation conveyed as security metadata between senders and receivers required to establish the reliability, authenticity, and trustworthiness of their transactions.
     *
     *                         Trust security metadata are observation made about aspects of trust applicable to an IT resource (data, information object, service, or system capability).
     *
     *                         Trust applicable to IT resources is established and maintained in and among security domains, and may be comprised of observations about the domain's trust authority, trust framework, trust policy, trust interaction rules, means for assessing and monitoring adherence to trust policies, mechanisms that enforce trust, and quality and reliability measures of assurance in those mechanisms. [Based on ISO IEC 10181-1 and NIST SP 800-63-2]
     *
     *                         For example, identity proofing , level of assurance, and Trust Framework.
     */
    v3_ActCode_TrustPolicy: Coding;
    /**
     * Definition:A list of medications which the patient is only expected to consume for the duration of the current order or limited set of orders and which is not expected to be renewed.
     */
    v3_ActCode_ShortTermAcute: Coding;
    /**
     * An acute inpatient encounter.
     */
    v3_ActCode_InpatientAcute: Coding;
    /**
     * Proposed therapy is outside of the standard practice for an adult patient.
     */
    v3_ActCode_AdultAlert: Coding;
    /**
     * Admitting diagnosis are the diagnoses documented  for administrative purposes as the basis for a hospital admission.
     */
    v3_ActCode_AdmittingDiagnosis: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted electronically.
     */
    v3_ActCode_AdjudNullifiedPriorPeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted electronically.
     */
    v3_ActCode_AdjudNullifiedPriorPeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually.
     */
    v3_ActCode_AdjudNullifiedPriorPeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually.
     */
    v3_ActCode_AdjudNullifiedPriorPeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently nullified in the specified period and submitted electronically.
     */
    v3_ActCode_AdjudNullifiedSamePeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently nullified in the specified period and submitted electronically.
     */
    v3_ActCode_AdjudNullifiedSamePeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually.
     */
    v3_ActCode_AdjudNullifiedSamePeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually.
     */
    v3_ActCode_AdjudNullifiedSamePeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    v3_ActCode_AdjudNonPayeePayablePriorPeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    v3_ActCode_AdjudNonPayeePayablePriorPeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    v3_ActCode_AdjudNonPayeePayablePriorPeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    v3_ActCode_AdjudNonPayeePayablePriorPeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    v3_ActCode_AdjudNonPayeePayableSamePeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    v3_ActCode_AdjudNonPayeePayableSamePeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    v3_ActCode_AdjudNonPayeePayableSamePeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    v3_ActCode_AdjudNonPayeePayableSamePeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    v3_ActCode_AdjudPayeePayablePriorPeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    v3_ActCode_AdjudPayeePayablePriorPeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    v3_ActCode_AdjudPayeePayablePriorPeriodManualAmout: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    v3_ActCode_AdjudPayeePayablePriorPeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    v3_ActCode_AdjudPayeePayableSamePeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    v3_ActCode_AdjudPayeePayableSamePeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    v3_ActCode_AdjudPayeePayableSamePeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    v3_ActCode_AdjudPayeePayableSamePeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted electronically.
     */
    v3_ActCode_AdjudRefusedPriorPeriodElectronicAmount: Coding;
    /**
     * Identifies the  total number of all  Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted electronically.
     */
    v3_ActCode_AdjudRefusedPriorPeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted manually.
     */
    v3_ActCode_AdjudRefusedPriorPeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted manually.
     */
    v3_ActCode_AdjudRefusedPriorPeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted electronically.
     */
    v3_ActCode_AdjudRefusedSamePeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted electronically.
     */
    v3_ActCode_AdjudRefusedSamePeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted manually.
     */
    v3_ActCode_AdjudRefusedSamePeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted manually.
     */
    v3_ActCode_AdjudRefusedSamePeriodManualCount: Coding;
    /**
     * Indicates that the observation is of an unexpected negative occurrence in the subject suspected to result from the subject's exposure to one or more agents.  Observation values would be the symptom resulting from the reaction.
     */
    v3_ActCode_AdverseReaction: Coding;
    /**
     * pedestrian transport
     */
    v3_ActCode_PedestrianTransport: Coding;
    /**
     * Premium paid on service fees in compensation for practicing outside of normal working hours.
     */
    v3_ActCode_NonNormalHours: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated due to patient age
     */
    v3_ActCode_AgeAlert: Coding;
    /**
     * Indicates that the observation is carrying out an aggregation calculation, contained in the value element.
     */
    v3_ActCode_AggregateMeasureObservation: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    v3_ActCode_AccreditedHomeCare: Coding;
    /**
     * Communication of an agent from a living subject or environmental source to a living subject through indirect contact via oral or nasal inhalation.
     */
    v3_ActCode_AirborneTransmission: Coding;
    /**
     * Provision of Alternate Level of Care to a patient in an acute bed.  Patient is waiting for placement in a long-term care facility and is unable to return home.
     */
    v3_ActCode_AlternativeLevelOfCare: Coding;
    /**
     * Payment initiated by the payor as the result of adjudicating a submitted invoice that arrived to the payor from an electronic source that did not provide a conformant set of HL7 messages (e.g. web claim submission).
     */
    v3_ActCode_AlternateElectronic: Coding;
    /**
     * Hypersensitivity to an agent caused by an immunologic response to an initial exposure
     */
    v3_ActCode_Allergy: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated because of a recorded patient allergy to the proposed product.  (Allergies are immune based reactions.)
     */
    v3_ActCode_AllergyAlert: Coding;
    /**
     * The act rendering alkaline by impregnating with an alkali; a conferring of alkaline qualities.
     */
    v3_ActCode_Alkalization: Coding;
    /**
     * Description: All patient information.
     */
    v3_ActCode_AllCategories: Coding;
    /**
     * Description: A person enters a known allergy for a given patient.
     */
    v3_ActCode_AllergyListEntry: Coding;
    /**
     * Description: A person reviews a list of known allergies of a given patient.
     */
    v3_ActCode_AllergyListReview: Coding;
    /**
     * Definition:All information pertaining to a patient's allergy and intolerance records.
     */
    v3_ActCode_AllergyCategory: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    v3_ActCode_AccreditedLongTermCare: Coding;
    /**
     * A comprehensive term for health care provided in a healthcare facility (e.g. a practitioneraTMs office, clinic setting, or hospital) on a nonresident basis. The term ambulatory usually implies that the patient has come to the location and is not assigned to a bed. Sometimes referred to as an outpatient encounter.
     */
    v3_ActCode_Ambulatory: Coding;
    /**
     * fixed-wing ambulance transport
     */
    v3_ActCode_FixedWingAmbulanceTransport: Coding;
    /**
     * ground ambulance transport
     */
    v3_ActCode_GroundAmbulanceTransport: Coding;
    /**
     * helicopter ambulance transport
     */
    v3_ActCode_HelicopterAmbulanceTransport: Coding;
    /**
     * ambulance transport
     */
    v3_ActCode_AmbulanceTransport: Coding;
    /**
     * Communication of an agent from one animal to another proximate animal.
     */
    v3_ActCode_AnimalToAnimalTransmission: Coding;
    /**
     * The invoice element has been accepted for payment but one or more adjustment(s) have been made to one or more invoice element line items (component charges) without changing the amount.
     *
     *                         Invoice element can be reversed (nullified).
     *
     *                         Recommend that the invoice element is saved for DUR (Drug Utilization Reporting).
     */
    v3_ActCode_AdjudicatedWithAdjustmentsAndNoFinancialImpact: Coding;
    /**
     * Communication of an agent from an animal to a proximate person.
     */
    v3_ActCode_AnimalToHumanTransmission: Coding;
    /**
     * Description:A note that is specific to a patient's diagnostic images, either historical, current or planned.
     */
    v3_ActCode_DiagnosticImageNote: Coding;
    /**
     * Description:A general or uncategorized note.
     */
    v3_ActCode_GeneralNote: Coding;
    /**
     * A note that is specific to a patient's immunizations, either historical, current or planned.
     */
    v3_ActCode_ImmunizationNote: Coding;
    /**
     * Description:A note that is specific to a patient's laboratory results, either historical, current or planned.
     */
    v3_ActCode_LaboratoryNote: Coding;
    /**
     * Description:A note that is specific to a patient's medications, either historical, current or planned.
     */
    v3_ActCode_MedicationNote: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    v3_ActCode_AccreditedOfficeBasedSurgeryCare: Coding;
    /**
     * The invoice element has passed through the adjudication process but payment is refused due to one or more reasons.
     *
     *                         Includes items such as patient not covered, or invoice element is not constructed according to payer rules (e.g. 'invoice submitted too late').
     *
     *                         If one invoice element line item in the invoice element structure is rejected, the remaining line items may not be adjudicated and the complete group is treated as rejected.
     *
     *                         A refused invoice element can be forwarded to the next payer (for Coordination of Benefits) or modified and resubmitted to refusing payer.
     *
     *                         Invoice element cannot be reversed (nullified) as there is nothing to reverse.
     *
     *                         Recommend that the invoice element is not saved for DUR (Drug Utilization Reporting).
     */
    v3_ActCode_AdjudicatedAsRefused: Coding;
    /**
     * Description: All information pertaining to a patient's adverse drug reactions.
     */
    v3_ActCode_AdverseDrugReactionCategory: Coding;
    /**
     * Describes the artificial blood identifier that is associated with the specimen.
     */
    v3_ActCode_ActSpecObsArtBldCode: Coding;
    /**
     * The invoice element was/will be paid exactly as submitted, without financial adjustment(s).
     *
     *                         If the dollar amount stays the same, but the billing codes have been amended or financial adjustments have been applied through the adjudication process, the invoice element is treated as "Adjudicated with Adjustment".
     *
     *                         If information items are included in the adjudication results that do not affect the monetary amounts paid, then this is still Adjudicated as Submitted (e.g. 'reached Plan Maximum on this Claim').
     *
     *                         Invoice element can be reversed (nullified).
     *
     *                         Recommend that the invoice element is saved for DUR (Drug Utilization Reporting).
     */
    v3_ActCode_AdjudicatedAsSubmitted: Coding;
    /**
     * Description:Refines classCode OBS to indicate an observation in which observation.value contains a finding or other nominalized statement, where the encoded information in Observation.value is not altered by Observation.code.  For instance, observation.code="ASSERTION" and observation.value="fracture of femur present" is an assertion of a clinical finding of femur fracture.
     */
    v3_ActCode_Assertion: Coding;
    /**
     * Authorization approved and funds have been set aside to pay for specified healthcare service(s) and/or product(s) within defined criteria for the authorization.
     */
    v3_ActCode_Authorized: Coding;
    /**
     * Specifies whether or not automatic repeat testing is to be initiated on specimens.
     */
    v3_ActCode_AutoRepeatPermission: Coding;
    /**
     * The dilution of a sample performed by automated equipment.  The value is specified by the equipment
     */
    v3_ActCode_AutoHighDilution: Coding;
    /**
     * The dilution of a sample performed by automated equipment.  The value is specified by the equipment
     */
    v3_ActCode_AutoLowDilution: Coding;
    /**
     * Description: Automobile Information Attachment
     */
    v3_ActCode_AutoAttachment: Coding;
    /**
     * The available quantity of specimen.   This is the current quantity minus any planned consumption (e.g., tests that are planned)
     */
    v3_ActCode_AvailableVolume: Coding;
    /**
     * Communication of an agent from one living subject to another living subject through direct contact with any body fluid.
     */
    v3_ActCode_BodyFluidContactTransmission: Coding;
    /**
     * Communication of an agent to a living subject through direct contact with blood or blood products whether the contact with blood is part of  a therapeutic procedure or not.
     */
    v3_ActCode_BloodBorneTransmission: Coding;
    /**
     * A billing arrangement where a Provider charges a lump sum to provide a prescribed group (volume) of services to a single patient which occur over a period of time.  Services included in the block may vary.
     *
     *                         This billing arrangement is also known as Program of Care for some specific Payors and Program Fees for other Payors.
     */
    v3_ActCode_BlockFunding: Coding;
    /**
     * Bonus payments based on performance, volume, etc. as agreed to by the payor.
     */
    v3_ActCode_Bonus: Coding;
    /**
     * An additional immunization administration within a series intended to bolster or enhance immunity.
     */
    v3_ActCode_BoosterImmunization: Coding;
    /**
     * A diet exclusively composed of oatmeal, semolina, or rice, to be extremely easy to eat and digest.
     */
    v3_ActCode_BreikostGE: Coding;
    /**
     * Description:A local business rule relating multiple elements has been violated.
     */
    v3_ActCode_BusinessConstraintViolation: Coding;
    /**
     * Description:Indicates that result data has been corrected.
     */
    v3_ActCode_Corrected: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedAnatomicPathologyAndClinicalPathologyCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedAcuteCoronarySyndromeCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedAllergyAndImmunologyCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedAerospaceMedicineCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedAcuteMyocardialInfarctionCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedAnesthesiologyCare: Coding;
    /**
     * A charge to compensate the provider when a patient cancels an appointment with insufficient time for the provider to make another appointment with another patient.
     */
    v3_ActCode_CancelledAppointment: Coding;
    /**
     * A billing arrangement where the payment made to a Provider is determined by analyzing one or more demographic attributes about the persons/patients who are enrolled with the Provider (in their practice).
     */
    v3_ActCode_CapitationFunding: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedAnatomicPathologyCare: Coding;
    /**
     * Provision of diagnosis and treatment of diseases and disorders affecting the heart
     */
    v3_ActCode_Cardiology: Coding;
    /**
     * List of acts representing a care plan.  The acts can be in a varierty of moods including event (EVN) to record acts that have been carried out as part of the care plan.
     */
    v3_ActCode_CarePlan: Coding;
    /**
     * Definition:An observation that provides a characterization of the level of harm to an investigation subject as a result of a reaction or event.
     */
    v3_ActCode_CaseSeriousnessCriteria: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedAsthmaCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedBariatricSurgeryCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedClinicalBiochemicalGeneticsCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedCoronaryArteryDiseaseCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedCardiacCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedClinicalCytogeneticsCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedClinicalGeneticsMDCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedClinicalPathologyCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedColonAndRectalSurgeryCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedDermatologyCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedDepressionCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedDigestiveGastrointestinalDisordersCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedDiabetesCare: Coding;
    /**
     * An observation that states whether the disease was likely acquired outside the jurisdiction of observation, and if so, the nature of the inter-jurisdictional relationship.
     *
     *
     *                            OpenIssue: This code could be moved to LOINC if it can be done before there are significant implemenations using it.
     */
    v3_ActCode_CaseDiseaseImportedObservation: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedDiagnosticRadiologyCare: Coding;
    /**
     * A person reviews a recommendation/assessment provided automatically by a clinical decision support application for a given patient.
     */
    v3_ActCode_ClinicalDecisionSupportInterventionReview: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedEmergencyMedicineCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedEpilepsyCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedFrailElderlyCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedFamilyPracticeCare: Coding;
    /**
     * An amount still owing to the payor but the payment is 0$ and this cannot be settled until a future payment is made.
     */
    v3_ActCode_CarryForwardAdjusment: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedHeartFailureCare: Coding;
    /**
     * A written order to a bank to pay the amount specified from funds on deposit.
     */
    v3_ActCode_Cheque: Coding;
    /**
     * Description: Exposure participants' interaction occurred in a child care setting
     */
    v3_ActCode_DayCareChildCareInteraction: Coding;
    /**
     * Provision of recurring care for chronic illness.
     */
    v3_ActCode_Chronic: Coding;
    /**
     * A type of transaction that represents a charge for a service or product.  Expressed in monetary terms.
     */
    v3_ActCode_StandardCharge: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedHighRiskObstetricsCare: Coding;
    /**
     * Definition:A list of medications which are expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped.
     */
    v3_ActCode_ContinuousChronic: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedHyperlipidemiaCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedInternalMedicineCare: Coding;
    /**
     * A circle defined by two (column,row) pairs. The first point is the center of the circle and the second point is a point on the perimeter of the circle.
     */
    v3_ActCode_Circle: Coding;
    /**
     * A clinician enters a clinical note about a given patient
     */
    v3_ActCode_ClinicalNoteEntryTask: Coding;
    /**
     * A person reviews a clinical note of a given patient.
     */
    v3_ActCode_ClinicalNoteReviewTask: Coding;
    /**
     * Description: The class room associated with the patient during the immunization event.
     */
    v3_ActCode_Classroom: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedClinicalMolecularGeneticsCare: Coding;
    /**
     * Description:.
     */
    v3_ActCode_CertifiedMigraineHeadacheCare: Coding;
    /**
     * Indicates what method is used in a quality measure to combine the component measure results included in an composite measure.
     */
    v3_ActCode_CompositeMeasureMethod: Coding;
    /**
     * An attribute of a quality measure describing the weight this component measure score is to carry in determining the overall composite measure final score. The value is real value greater than 0 and less than 1.0. Each component measure score will be multiplied by its CMPMSRSCRWGHT and then summed with the other component measures to determine the final overall composite measure score. The sum across all CMPMSRSCRWGHT values within a single composite measure SHALL be 1.0. The value assigned is scoped to the composite measure referencing this component measure only.
     */
    v3_ActCode_ComponentMeasureScoringWeight: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedMultipleSclerosisCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board
     */
    v3_ActCode_CertifiedNeurologyCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedNuclearMedicineCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedNeurologyWithSpecialQualificationsInChildNeurologyCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedNeurologicalSurgeryCare: Coding;
    /**
     * Definition:All information pertaining to a patient's common observation records (height, weight, blood pressure, temperature, etc.).
     */
    v3_ActCode_CommonObservationCategory: Coding;
    /**
     * Description:The specified code has been deprecated and should no longer be used.  Select another code from the code system.
     */
    v3_ActCode_CodeHasBeenDeprecated: Coding;
    /**
     * Description:The specified code is not valid against the list of codes allowed for the element.
     */
    v3_ActCode_CodeIsNotValid: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedObstetricsAndGynecologyCare: Coding;
    /**
     * That portion of the eligible charges which a covered party must pay for each service and/or product. It is a percentage of the eligible amount for the service/product that is typically charged after the covered party has met the policy deductible.  This amount represents the covered party's coinsurance that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results.
     */
    v3_ActCode_Coinsurance: Coding;
    /**
     * The covered party pays a percentage of the cost of covered services.
     */
    v3_ActCode_CoInsurance: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedOrthopedicJointReplacementCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedOccupationalMedicineCare: Coding;
    /**
     * U.S. Federal regulations governing the protection of human subjects in research (codified at Subpart A of 45 CFR part 46) that has been adopted by 15 U.S. Federal departments and agencies in an effort to promote uniformity, understanding, and compliance with human subject protections. Existing regulations governing the protection of human subjects in Food and Drug Administration (FDA)-regulated research (21 CFR parts 50, 56, 312, and 812) are separate from the Common Rule but include similar requirements.
     *
     *
     *                            Definition: U.S. federal laws governing research-related privacy policies.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.
     */
    v3_ActCode_CommonRule: Coding;
    /**
     * There may be an issue with the patient complying with the intentions of the proposed therapy
     */
    v3_ActCode_ComplianceAlert: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedOncologyCare: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated due to an existing/recent patient condition or diagnosis
     */
    v3_ActCode_ConditionAlert: Coding;
    /**
     * List of condition observations.
     */
    v3_ActCode_ConditionList: Coding;
    /**
     * The quantity of specimen that is used each time the equipment uses this substance
     */
    v3_ActCode_ConsumptionVolume: Coding;
    /**
     * Transaction counts and value totals by Contract Identifier.
     */
    v3_ActCode_Contract: Coding;
    /**
     * A billing arrangement where a Provider charges a lump sum to provide a particular volume of one or more interventions/procedures or groups of interventions/procedures.
     */
    v3_ActCode_ContractFunding: Coding;
    /**
     * Description: An interaction where the exposure participants traveled in/on the same vehicle (not necessarily concurrently, e.g. both are passengers of the same plane, but on different flights of that plane).
     */
    v3_ActCode_CommonConveyanceInteraction: Coding;
    v3_ActCode_COPAY: Coding;
    /**
     * That portion of the eligible charges which a covered party must pay for each service and/or product. It is a defined amount per service/product of the eligible amount for the service/product. This amount represents the covered party's copayment that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results.
     */
    v3_ActCode_PatientCoPay: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedOphthalmologyCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedChronicObstructivePulmonaryDiseaseCare: Coding;
    /**
     * Identifies the organization(s) who own the intellectual property represented by the eMeasure.
     */
    v3_ActCode_Copyright: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedOrganTransplantCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedOrthopaedicSurgeryCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedOtolaryngologyCare: Coding;
    /**
     * Insurance coverage problems have been encountered. Additional explanation information to be supplied.
     */
    v3_ActCode_CoverageProblem: Coding;
    /**
     * Definition: Codes representing the maximum coverate or financial participation requirements.
     */
    v3_ActCode_CoverageMaximum: Coding;
    /**
     * Description:A mandate, obligation, requirement, rule, or expectation unilaterally imposed on benefit coverage under a policy or program by a sponsor, underwriter or payor on:
     *
     *
     *
     *                               The activity of another party
     *
     *
     *
     *                               The behavior of another party
     *
     *
     *
     *                               The manner in which an act is executed
     *
     *
     *
     *
     *                            Examples:A clinical protocol imposed by a payer to which a provider must adhere in order to be paid for providing the service.  A formulary from which a provider must select prescribed drugs in order for the patient to incur a lower copay.
     */
    v3_ActCode_BenefitPolicy: Coding;
    /**
     * Codes representing the time period during which coverage is available; or financial participation requirements are in effect.
     */
    v3_ActCode_CoveragePeriod: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedParkinsonsDiseaseCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedPediatricsCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedPhDMedicalGeneticsCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedPublicHealthAndGeneralPreventiveMedicineCare: Coding;
    /**
     * Clinical product invoice where the Invoice Grouping contains one or more billable item and is supported by clinical product(s).
     *
     *                         For example, a crutch or a wheelchair.
     */
    v3_ActCode_ClinicalProductInvoice: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedPneumoniaDiseaseCare: Coding;
    /**
     * A grouping of invoice element groups and details including the ones specifying the compound ingredients being invoiced. It may also contain generic detail items such as markup.
     */
    v3_ActCode_CompoundDrugInvoiceGroup: Coding;
    /**
     * A grouping of invoice element details including the one specifying an ingredient drug being invoiced. It may also contain generic detail items such as tax or markup.
     */
    v3_ActCode_CompoundIngredientInvoiceGroup: Coding;
    /**
     * A grouping of invoice element groups and details including the ones specifying the compound supplies being invoiced. It may also contain generic detail items such as markup.
     */
    v3_ActCode_CompoundSupplyInvoiceGroup: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedPhysicalMedicineAndRehabilitationCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedPlasticSurgeryCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedPrimaryStrokeCenterCare: Coding;
    /**
     * Description:CPT modifier codes are found in Appendix A of CPT 2000 Standard Edition.
     */
    v3_ActCode_CPTModifierCodes: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedPsychiatryCare: Coding;
    /**
     * Description:Proposed therapy may be inappropriate or contraindicated because of a common but non-patient specific reaction to the product.
     *
     *
     *                            Example:There is no record of a specific sensitivity for the patient, but the presence of the sensitivity is common and therefore caution is warranted.
     */
    v3_ActCode_CommonReactionAlert: Coding;
    /**
     * A clinical judgment as to the worst case result of a future exposure (including substance administration). When the worst case result is assessed to have a life-threatening or organ system threatening potential, it is considered to be of high criticality.
     */
    v3_ActCode_Criticality: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedRadiationOncologyCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedRadiologicalPhysicsCare: Coding;
    /**
     * Summary of relevant clinical guidelines or other clinical recommendations supporting this eMeasure.
     */
    v3_ActCode_ClinicalRecommendationStatement: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedStrokeDiseaseManagementCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedSickleCellCare: Coding;
    /**
     * Clinical Services Invoice which can be used to describe a single service, multiple services or repeated services.
     *
     *                         [1] Single Clinical services invoice where the Invoice Grouping contains one billable item and is supported by one clinical service.
     *
     *                         For example, a single service for an office visit or simple clinical procedure (e.g. knee mobilization).
     *
     *                         [2] Multiple Clinical services invoice where the Invoice Grouping contains more than one billable item, supported by one or more clinical services.  The services can be distinct and over multiple dates, but for the same patient. This type of invoice includes a series of treatments which must be adjudicated together.
     *
     *                         For example, an adjustment and ultrasound for a chiropractic session where fees are associated for each of the services and adjudicated (invoiced) together.
     *
     *                         [3] Repeated Clinical services invoice where the Invoice Grouping contains one or more billable item, supported by the same clinical service repeated over a period of time.
     *
     *                         For example, the same Chiropractic adjustment (service or treatment) delivered on 3 separate occasions over a period of time at the discretion of the provider (e.g. month).
     */
    v3_ActCode_ClinicalServiceInvoice: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedSleepDisordersCare: Coding;
    /**
     * A clinical Invoice Grouping consisting of one or more services and one or more product.  Billing for these service(s) and product(s) are supported by multiple clinical billable events (acts).
     *
     *                         All items in the Invoice Grouping must be adjudicated together to be acceptable to the Adjudicator.
     *
     *                         For example , a brace (product) invoiced together with the fitting (service).
     */
    v3_ActCode_ClinicalServiceAndProduct: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedSpineTreatmentCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedSurgeryCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedTraumaBurnCenterCare: Coding;
    /**
     * A monitoring program that focuses on narcotics and/or commonly abused substances that are subject to legal restriction.
     */
    v3_ActCode_ControlledSubstance: Coding;
    /**
     * An observation that states the mechanism by which disease was acquired by the living subject involved in the public health case.
     *
     *
     *                            OpenIssue: This code could be moved to LOINC if it can be done before there are significant implemenations using it.
     */
    v3_ActCode_CaseTransmissionModeObservation: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedThoracicSurgeryCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedUrologyCare: Coding;
    /**
     * List of current medications.
     */
    v3_ActCode_CurrentMedicationList: Coding;
    /**
     * The current quantity of the specimen, i.e., initial quantity minus what has been actually used.
     */
    v3_ActCode_CurrentVolume: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedVascularDiseasesCare: Coding;
    /**
     * Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    v3_ActCode_CertifiedVascularSurgeryCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedWoundManagementCare: Coding;
    /**
     * Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    v3_ActCode_CertifiedWomenQuoteSHealthCare: Coding;
    /**
     * An allergy to a pharmaceutical product.
     */
    v3_ActCode_DrugAllergy: Coding;
    /**
     * Transaction counts and value totals for each calendar day within the date range specified.
     */
    v3_ActCode_Day: Coding;
    /**
     * Electronic Funds Transfer (EFT) deposit into the payee's bank account
     */
    v3_ActCode_DirectDeposit: Coding;
    v3_ActCode_DEDUCT: Coding;
    /**
     * That portion of the eligible charges which a covered party must pay in a particular period (e.g. annual) before the benefits are payable by the adjudicator. This amount represents the covered party's deductible that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results.
     */
    v3_ActCode_Deductible: Coding;
    /**
     * Description of individual terms, provided as needed.
     */
    v3_ActCode_Definition: Coding;
    /**
     * The removal of fibrin from whole blood or plasma through physical or chemical means
     */
    v3_ActCode_Defibrination: Coding;
    /**
     * Definition:All information pertaining to a patient's demographics (such as name, date of birth, gender, address, etc).
     */
    v3_ActCode_DemographicsCategory: Coding;
    /**
     * Criteria which specify subjects who should be removed from the eMeasure population and denominator before determining if numerator criteria are met. Denominator exclusions are used in proportion and ratio measures to help narrow the denominator.
     */
    v3_ActCode_DenominatorExclusions: Coding;
    /**
     * Criteria which specify the removal of a subject, procedure or unit of measurement from the denominator, only if the numerator criteria are not met. Denominator exceptions allow for adjustment of the calculated score for those providers with higher risk populations. Denominator exceptions are used only in proportion eMeasures. They are not appropriate for ratio or continuous variable eMeasures. Denominator exceptions allow for the exercise of clinical judgment and should be specifically defined where capturing the information in a structured manner fits the clinical workflow. Generic denominator exception reasons used in proportion eMeasures fall into three general categories:
     *
     *
     *                            Medical reasons
     *                            Patient (or subject) reasons
     *                            System reasons
     */
    v3_ActCode_DenominatorExceptions: Coding;
    /**
     * Criteria for specifying the entities to be evaluated by a specific quality measure, based on a shared common set of characteristics (within a specific measurement set to which a given measure belongs).  The denominator can be the same as the initial population, or it may be a subset of the initial population to further constrain it for the purpose of the eMeasure. Different measures within an eMeasure set may have different denominators. Continuous Variable eMeasures do not have a denominator, but instead define a measure population.
     */
    v3_ActCode_Denominator: Coding;
    /**
     * Communication of an agent from a living subject or environmental source to a living subject via agent migration through intact skin.
     */
    v3_ActCode_TransdermalTransmission: Coding;
    /**
     * A fill providing sufficient supply for one day
     */
    v3_ActCode_DailyFill: Coding;
    /**
     * A clinician enters a diagnosis for a given patient.
     */
    v3_ActCode_DiagnosisListEntryTask: Coding;
    /**
     * A person reviews a list of diagnoses of a given patient.
     */
    v3_ActCode_DiagnosisListReviewTask: Coding;
    /**
     * Definition:All information pertaining to a patient's diagnostic image records (orders &amp; results).
     */
    v3_ActCode_DiagnosticImageCategory: Coding;
    /**
     * Code set to define specialized/allowed diets
     */
    v3_ActCode_Diet: Coding;
    /**
     * An observation that reports the dilution of a sample.
     */
    v3_ActCode_ActSpecObsDilutionCode: Coding;
    /**
     * Hypersensitivity resulting in an adverse reaction upon exposure to a drug.
     */
    v3_ActCode_DrugIntolerance: Coding;
    /**
     * Disclaimer information for the eMeasure.
     */
    v3_ActCode_Disclaimer: Coding;
    /**
     * A person provides a discharge instruction to a patient.
     */
    v3_ActCode_DischargeInstructionEntry: Coding;
    /**
     * A clinician enters a discharge summary for a given patient.
     */
    v3_ActCode_DischargeSummaryEntryTask: Coding;
    /**
     * A person reviews a discharge summary of a given patient.
     */
    v3_ActCode_DischargeSummaryReviewTask: Coding;
    /**
     * List of discharge medications.
     */
    v3_ActCode_DischargeMedicationList: Coding;
    /**
     * Discharge diagnosis are the diagnoses documented for administrative purposes as the time of hospital discharge.
     */
    v3_ActCode_DischargeDiagnosis: Coding;
    /**
     * The adjudication result associated is to be displayed to the receiver of the adjudication result.
     */
    v3_ActCode_Display: Coding;
    /**
     * A diet that uses carbohydrates sparingly.  Typically with a restriction in daily energy content (e.g. 1600-2000 kcal).
     */
    v3_ActCode_DiabetesMellitusDiet: Coding;
    /**
     * Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure
     */
    v3_ActCode_DrugNonAllergyIntolerance: Coding;
    /**
     * Provision of treatment for oral health and/or dental surgery.
     */
    v3_ActCode_Dental: Coding;
    /**
     * Description: Document Attachment
     */
    v3_ActCode_Document: Coding;
    /**
     * Proposed dosage instructions for therapy differ from standard practice.
     */
    v3_ActCode_DosageProblem: Coding;
    /**
     * Description:Proposed dosage is inappropriate due to patient's medical condition.
     */
    v3_ActCode_DosageConditionAlert: Coding;
    /**
     * Proposed length of therapy differs from standard practice.
     */
    v3_ActCode_DoseDurationAlert: Coding;
    /**
     * Proposed length of therapy is longer than standard practice
     */
    v3_ActCode_DoseDurationHighAlert: Coding;
    /**
     * Proposed length of therapy is longer than standard practice for the identified indication or diagnosis
     */
    v3_ActCode_DoseDurationHighForIndicationAlert: Coding;
    /**
     * Proposed length of therapy is shorter than that necessary for therapeutic effect
     */
    v3_ActCode_DoseDurationLowAlert: Coding;
    /**
     * Proposed length of therapy is shorter than standard practice for the identified indication or diagnosis
     */
    v3_ActCode_DoseDurationLowForIndicationAlert: Coding;
    /**
     * Proposed dosage exceeds standard practice
     */
    v3_ActCode_HighDoseAlert: Coding;
    /**
     * High Dose for Indication Alert
     */
    v3_ActCode_HighDoseForIndicationAlert: Coding;
    /**
     * Proposed dosage exceeds standard practice for the patient's age
     */
    v3_ActCode_HighDoseForAgeAlert: Coding;
    /**
     * Proposed dosage exceeds standard practice for the patient's height or body surface area
     */
    v3_ActCode_HighDoseForHeightSurfaceAreaAlert: Coding;
    /**
     * Proposed dosage exceeds standard practice for the patient's weight
     */
    v3_ActCode_HighDoseForWeightAlert: Coding;
    v3_ActCode_DOSEIND: Coding;
    /**
     * Proposed dosage interval/timing differs from standard practice
     */
    v3_ActCode_DoseIntervalAlert: Coding;
    /**
     * Proposed dosage interval/timing differs from standard practice for the identified indication or diagnosis
     */
    v3_ActCode_DoseIntervalForIndicationAlert: Coding;
    /**
     * Proposed dosage is below suggested therapeutic levels
     */
    v3_ActCode_LowDoseAlert: Coding;
    /**
     * Low Dose for Indication Alert
     */
    v3_ActCode_LowDoseForIndicationAlert: Coding;
    /**
     * Proposed dosage is below suggested therapeutic levels for the patient's age
     */
    v3_ActCode_LowDoseForAgeAlert: Coding;
    /**
     * Proposed dosage is below suggested therapeutic levels for the patient's height or body surface area
     */
    v3_ActCode_LowDoseForHeightSurfaceAreaAlert: Coding;
    /**
     * Proposed dosage is below suggested therapeutic levels for the patient's weight
     */
    v3_ActCode_LowDoseForWeightAlert: Coding;
    /**
     * Provision of treatment for drug abuse.
     */
    v3_ActCode_DrugRehab: Coding;
    /**
     * The introduction of a drug into a subject with the intention of altering its biologic state with the intent of improving its health status.
     */
    v3_ActCode_DrugTherapy: Coding;
    /**
     * A grouping of invoice element details including the one specifying the drug being invoiced. It may also contain generic detail items such as markup.
     */
    v3_ActCode_DrugInvoiceGroup: Coding;
    /**
     * Definition: A public or government health program that administers and funds coverage for prescription drugs to assist program eligible who meet financial and health status criteria.
     */
    v3_ActCode_DrugProgram: Coding;
    /**
     * A reduction in the amount charged as a percentage of the amount. For example a 5% discount for volume purchase.
     */
    v3_ActCode_Discount: Coding;
    /**
     * Description:The proposed therapy appears to have the same intended therapeutic benefit as an existing therapy, though the specific mechanisms of action vary.
     */
    v3_ActCode_DuplicateTherapeuticAlassAlert: Coding;
    /**
     * Description:The proposed therapy appears to have the same intended therapeutic benefit as an existing therapy and uses the same mechanisms of action as the existing therapy.
     */
    v3_ActCode_DuplicateGenericAlert: Coding;
    /**
     * The proposed therapy appears to duplicate an existing therapy
     */
    v3_ActCode_DuplicateTherapyAlert: Coding;
    /**
     * Includes all codes defining types of indications such as diagnosis, symptom and other indications such as contrast agents for lab tests.
     */
    v3_ActCode_ObservationDiagnosisTypes: Coding;
    /**
     * An allergy to a substance other than a drug or a food.  E.g. Latex, pollen, etc.
     */
    v3_ActCode_EnvironmentalAllergy: Coding;
    /**
     * Fees deducted on behalf of a payee for tuition and continuing education.
     */
    v3_ActCode_EducationFees: Coding;
    /**
     * Electronic form with supporting or additional information to follow.
     */
    v3_ActCode_ElectronicFormToFollow: Coding;
    /**
     * Hypersensitivity resulting in an adverse reaction upon exposure to environmental conditions.
     */
    v3_ActCode_EnvironmentalIntolerance: Coding;
    /**
     * Insurance coverage is in effect for healthcare service(s) and/or product(s).
     */
    v3_ActCode_Eligible: Coding;
    /**
     * An ellipse defined by four (column,row) pairs, the first two points specifying the endpoints of the major axis and the second two points specifying the endpoints of the minor axis.
     */
    v3_ActCode_Ellipse: Coding;
    /**
     * A supply action where there is no 'valid' order for the supplied medication.  E.g. Emergency vacation supply, weekend supply (when prescriber is unavailable to provide a renewal prescription)
     */
    v3_ActCode_EmergencySupply: Coding;
    /**
     * A patient encounter that takes place at a dedicated healthcare service delivery location where the patient receives immediate evaluation and treatment, provided until the patient can be discharged or responsibility for the patient's care is transferred elsewhere (for example, the patient could be admitted as an inpatient or transferred to another facility.)
     */
    v3_ActCode_Emergency: Coding;
    /**
     * This general consent directive specifically limits disclosure of health information for purpose of emergency treatment. Additional parameters may further limit the disclosure to specific users, roles, duration, types of information, and impose uses obligations.
     *
     *
     *                            Definition: Opt-in to disclosure of health information for emergency only consent directive.
     */
    v3_ActCode_EmergencyOnly: Coding;
    /**
     * Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure
     */
    v3_ActCode_EnvironmentalNonAllergyIntolerance: Coding;
    /**
     * A baseline value for the measured test that is inherently contained in the diluent.  In the calculation of the actual result for the measured test, this baseline value is normally considered.
     */
    v3_ActCode_EndogenousContent: Coding;
    /**
     * Communication of an agent from an environmental surface or source to a living subject by direct contact.
     */
    v3_ActCode_EnvironmentalExposureTransmission: Coding;
    /**
     * Fees deducted on behalf of a payee for charges based on a shorter payment frequency (i.e. next day versus biweekly payments.
     */
    v3_ActCode_EarlyPaymentFee: Coding;
    /**
     * A premium on a service fee is requested because, due to extenuating circumstances, the service took an extraordinary amount of time or supplies.
     */
    v3_ActCode_ExtraordinaryServiceAssessment: Coding;
    /**
     * Domain provides codes that qualify the ActLabObsEnvfctsCode domain. (Environmental Factors)
     */
    v3_ActCode_ActSpecObsEvntfctsCode: Coding;
    /**
     * Description:Indicates that a result is complete.  No further results are to come.  This maps to the 'complete' state in the observation result status code.
     */
    v3_ActCode_Final: Coding;
    /**
     * An allergy to a substance generally consumed for nutritional purposes.
     */
    v3_ActCode_FoodAllergy: Coding;
    /**
     * A person reviews a Falls Risk Assessment Instrument report of a given patient.
     */
    v3_ActCode_FallsRiskAssessmentInstrumentTask: Coding;
    /**
     * No enteral intake of foot or liquids  whatsoever, no smoking.  Typically 6 to 8 hours before anesthesia.
     */
    v3_ActCode_Fasting: Coding;
    /**
     * Fax with supporting or additional information to follow.
     */
    v3_ActCode_FaxToFollow: Coding;
    /**
     * Description: The introduction of material into a subject with the intent of providing nutrition or other dietary supplements (e.g. minerals or vitamins).
     */
    v3_ActCode_Food: Coding;
    /**
     * FDA label coating
     */
    v3_ActCode_Coating: Coding;
    /**
     * FDA label color
     */
    v3_ActCode_Color: Coding;
    /**
     * FDA label imprint code
     */
    v3_ActCode_ImprintCode: Coding;
    /**
     * FDA label logo
     */
    v3_ActCode_Logo: Coding;
    /**
     * FDA label scoring
     */
    v3_ActCode_Scoring: Coding;
    /**
     * FDA label shape
     */
    v3_ActCode_Shape: Coding;
    /**
     * FDA label size
     */
    v3_ActCode_Size: Coding;
    /**
     * Communication of an agent from a living subject or environmental source to a living subject through oral contact with material contaminated by person or animal fecal material.
     */
    v3_ActCode_FecalOralTransmission: Coding;
    /**
     * The initial fill against an order.  (This includes initial fills against refill orders.)
     */
    v3_ActCode_FirstFill: Coding;
    /**
     * A first fill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets).
     */
    v3_ActCode_FirstFillComplete: Coding;
    /**
     * A first fill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets) and also where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    v3_ActCode_FirstFillCompletePartialStrength: Coding;
    /**
     * A first fill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
     */
    v3_ActCode_FirstFillPartFill: Coding;
    /**
     * A first fill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.) and also where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets)
     */
    v3_ActCode_FirstFillPartFillPartialStrength: Coding;
    /**
     * A billing arrangement where a Provider charges a separate fee for each intervention/procedure/event or product.
     *
     *                         Fee for Service is used when an individual intervention/procedure/event is used for billing purposes.  In other words, fees are associated with the  intervention/procedure/event.  For example, a specific CCI (Canadian Classification of Interventions) code has an associated fee and is used for billing purposes.
     */
    v3_ActCode_FeeForService: Coding;
    /**
     * A first fill where the strength supplied is less than the ordered strength. (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    v3_ActCode_FirstFillPartialStrength: Coding;
    /**
     * Under agreement between the parties (payor and provider), a guaranteed level of income is established for the provider over a specific, pre-determined period of time. The normal course of business for the provider is submission of fee-for-service claims. Should the fee-for-service income during the specified period of time be less than the agreed to amount, a top-up amount is paid to the provider equal to the difference between the fee-for-service total and the guaranteed income amount for that period of time. The details of the agreement may specify (or not) a requirement for repayment to the payor in the event that the fee-for-service income exceeds the guaranteed amount.
     */
    v3_ActCode_FeeForServiceTopOff: Coding;
    /**
     * The Fibrin Index of the specimen. In the case of only differentiating between Absent and Present, recommend using 0 and 1
     */
    v3_ActCode_Fibrin: Coding;
    /**
     * The passage of a liquid through a filter, accomplished by gravity, pressure or vacuum (suction).
     */
    v3_ActCode_Filtration: Coding;
    /**
     * The timestamp when the eMeasure was last packaged in the Measure Authoring Tool.
     */
    v3_ActCode_FinalizedDateTime: Coding;
    /**
     * A billing arrangement where a Provider charges for non-clinical items.  This includes interest in arrears, mileage, etc.  Clinical content is not 	included in Invoices submitted with this type of billing arrangement.
     */
    v3_ActCode_Financial: Coding;
    /**
     * Invoice Grouping without clinical justification.  These will not require identification of participants and associations from a clinical context such as patient and provider.
     *
     *                         Examples are interest charges and mileage.
     */
    v3_ActCode_FinancialInvoice: Coding;
    /**
     * Hypersensitivity resulting in an adverse reaction upon exposure to food.
     */
    v3_ActCode_FoodIntolerance: Coding;
    /**
     * A patient encounter that takes place both outside a dedicated service delivery location and outside a patient's residence. Example locations might include an accident site and at a supermarket.
     */
    v3_ActCode_Field: Coding;
    /**
     * Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure
     */
    v3_ActCode_FoodNonAllergyIntolerance: Coding;
    /**
     * Anticipated or actual final fee associated with treating a patient.
     */
    v3_ActCode_FinalFee: Coding;
    /**
     * Communication of an agent from an non-living material to a living subject through direct contact.
     */
    v3_ActCode_FomiteTransmission: Coding;
    /**
     * Communication of an agent from a food source to a living subject via oral consumption.
     */
    v3_ActCode_FoodBorneTransmission: Coding;
    /**
     * The adjudication result associated is to be printed on the specified form, which is then provided to the covered party.
     */
    v3_ActCode_PrintOnForm: Coding;
    /**
     * Description:The element does not follow the formatting or type rules defined for the field.
     */
    v3_ActCode_InvalidFormat: Coding;
    /**
     * A diet consisting of a formula feeding, either for an infant or an adult, to provide nutrition either orally or through the gastrointestinal tract via tube, catheter or stoma.
     */
    v3_ActCode_FormulaDiet: Coding;
    /**
     * A grouping of invoice element details including the ones specifying the frame fee and the frame dispensing cost that are being invoiced.
     */
    v3_ActCode_FrameInvoiceGroup: Coding;
    /**
     * Description:The request is suspected to have a fraudulent basis.
     */
    v3_ActCode_PotentialFraud: Coding;
    /**
     * Anticipated or actual initial fee associated with treating a patient.
     */
    v3_ActCode_FirstFee: Coding;
    /**
     * A supply action to restock a smaller more local dispensary.
     */
    v3_ActCode_FloorStock: Coding;
    /**
     * Federal tax on transactions such as the Goods and Services Tax (GST)
     */
    v3_ActCode_FederalSalesTax: Coding;
    /**
     * Fees deducted on behalf of a payee for charges based on a per-transaction or time-period (e.g. monthly) fee.
     */
    v3_ActCode_Garnishee: Coding;
    /**
     * Proposed therapy is outside of standard practice for a geriatric patient.
     */
    v3_ActCode_GeriatricAlert: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated due to patient genetic indicators.
     */
    v3_ActCode_GeneticAlert: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated due to patient gender.
     */
    v3_ActCode_GenderAlert: Coding;
    /**
     * Description: A DNA segment that contributes to phenotype/function. In the absence of demonstrated function a gene may be characterized by sequence, transcription or homology
     */
    v3_ActCode_Gene: Coding;
    /**
     * General care performed by a general practitioner or family doctor as a responsible provider for a patient.
     */
    v3_ActCode_General: Coding;
    /**
     * Gluten free diet for celiac disease.
     */
    v3_ActCode_GlutenFree: Coding;
    /**
     * The medical service was provided to a patient in good faith that they had medical coverage, although no evidence of coverage was available before service was rendered.
     */
    v3_ActCode_GoodFaithIndicator: Coding;
    /**
     * Description: Accuracy determined as per the GIS tier code system.
     */
    v3_ActCode_GISTier: Coding;
    /**
     * List of observations in goal mood.
     */
    v3_ActCode_GoalList: Coding;
    /**
     * Description: The school grade or level the patient was in when immunized.
     */
    v3_ActCode_Grade: Coding;
    /**
     * A grantor's terms of agreement to which a grantee may assent or dissent, and which may include an opportunity for a grantee to request restrictions or extensions.
     *
     *
     *                            Comment: A grantor typically is able to stipulate preferred terms of agreement when the grantor has control over the topic of the agreement, which a grantee must accept in full or may be offered an opportunity to extend or restrict certain terms.
     *
     *
     *                            Usage Note: If the grantor's term of agreement must be accepted in full, then this is considered "basic consent".  If a grantee is offered an opportunity to extend or restrict certain terms, then the agreement is considered "granular consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A PHR account holder [grantor] may require any PHR user [grantee]  to accept the terms of agreement in full, or may permit a PHR user to extend or restrict terms selected by the account holder or requested by the PHR user.
     *                            Non-healthcare: The owner of a resource server [grantor] may require any authorization server [grantee] to meet authorization requirements stipulated in the grantor's terms of agreement.
     */
    v3_ActCode_GrantorChoice: Coding;
    /**
     * Description:Global Trade Item Number is an identifier for trade items developed by GS1 (comprising the former EAN International and Uniform Code Council).
     */
    v3_ActCode_GlobalTradeItemNumber: Coding;
    /**
     * Used to allow measure developers to provide additional guidance for implementers to understand greater specificity than could be provided in the logic for data criteria.
     */
    v3_ActCode_Guidance: Coding;
    /**
     * Description:HCPCS Level II (HCFA-assigned) and Carrier-assigned (Level III) modifiers are reported in Appendix A of CPT 2000 Standard Edition and in the Medicare Bulletin.
     */
    v3_ActCode_HCPCSLevelIIAndCarrierAssigned: Coding;
    /**
     * Description: Health Record Attachment
     */
    v3_ActCode_HealthRecord: Coding;
    /**
     * An observation of the hemolysis index of the specimen in g/L
     */
    v3_ActCode_Hemolysis: Coding;
    v3_ActCode_HGHT: Coding;
    /**
     * Healthcare encounter that takes place in the residence of the patient or a designee
     */
    v3_ActCode_HomeHealth: Coding;
    /**
     * Indicates that the observation is of a person’s living situation in a household including the household composition and circumstances.
     */
    v3_ActCode_HouseholdSituationObservation: Coding;
    /**
     * The U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Part 164 Subpart E) permits access, use and disclosure of certain personal health information (PHI as defined under the law) for purposes of Treatment, Payment, and Operations, and requires that the provider ask that patients acknowledge the Provider's Notice of Privacy Practices as permitted conduct under the law.
     *
     *
     *                            Definition: Notification of HIPAA Privacy Practices.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.
     */
    v3_ActCode_HIPAANoticeOfPrivacyPractices: Coding;
    /**
     * The U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Part 164 Section 164.508) requires authorization for certain uses and disclosure of psychotherapy notes.
     *
     *
     *                            Definition: Authorization that must be obtained for disclosure of psychotherapy notes.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    v3_ActCode_HIPAAPsychotherapyNotes: Coding;
    /**
     * Section 13405(a) of the Health Information Technology for Economic and Clinical Health Act (HITECH) stipulates the right of an individual to have disclosures regarding certain health care items or services for which the individual pays out of pocket in full restricted from a health plan.
     *
     *
     *                            Definition: Non-disclosure of health information to a health plan relating to health care items or services for which an individual pays out of pocket in full.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    v3_ActCode_HIPAASelfPay: Coding;
    /**
     * Historical list of medications.
     */
    v3_ActCode_MedicationHistory: Coding;
    /**
     * Description: Exposure participants' interaction occurred during the course of health care delivery or in a health care delivery setting, but did not involve the direct provision of care (e.g. a janitor cleaning a patient's hospital room).
     */
    v3_ActCode_HealthCareInteractionNotPatientCare: Coding;
    /**
     * Description: Exposure interaction occurred in context of one providing care for the other, i.e. a babysitter providing care for a child, a home-care aide providing assistance to a paraplegic.
     */
    v3_ActCode_CareGiverInteraction: Coding;
    /**
     * Description: Exposure participants' interaction occurred when both were patients being treated in the same (acute) health care delivery facility.
     */
    v3_ActCode_HospitalPatientInteraction: Coding;
    /**
     * Description: Exposure participants' interaction occurred when one visited the other who was a patient being treated in a health care delivery facility.
     */
    v3_ActCode_HospitalVisitorInteraction: Coding;
    /**
     * Description: Exposure interaction occurred in context of domestic interaction, i.e. both participants reside in the same household.
     */
    v3_ActCode_HouseholdInteraction: Coding;
    /**
     * Joint Federal/Provincial Sales Tax
     */
    v3_ActCode_HarmonizedSalesTax: Coding;
    /**
     * Communication of an agent from a person to a proximate person.
     */
    v3_ActCode_HumanToHumanTransmission: Coding;
    /**
     * Accommodations used in the care of diseases that are transmitted through casual contact or respiratory transmission.
     */
    v3_ActCode_Isolation: Coding;
    /**
     * An observation that describes the icterus index of the specimen.  It is recommended to use mMol/L of bilirubin
     */
    v3_ActCode_Icterus: Coding;
    /**
     * Used by one system to inform another that it has received a container.
     */
    v3_ActCode_Identified: Coding;
    /**
     * Information on whether an increase or decrease in score is the preferred result
     * (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is within a range).
     */
    v3_ActCode_ImprovementNotation: Coding;
    /**
     * Description:The request is missing elements or contains elements which cause it to not meet the legal standards for actioning.
     */
    v3_ActCode_Illegal: Coding;
    /**
     * Description: Image Attachment
     */
    v3_ActCode_ImageAttachment: Coding;
    /**
     * Description: A person enters an immunization due or received for a given patient.
     */
    v3_ActCode_ImmunizationListEntry: Coding;
    /**
     * Description: A person reviews a list of immunizations due or received for a given patient.
     */
    v3_ActCode_ImmunizationListReview: Coding;
    /**
     * Definition:All information pertaining to a patient's vaccination records.
     */
    v3_ActCode_ImmunizationCategory: Coding;
    /**
     * The introduction of an immunogen with the intent of stimulating an immune response, aimed at preventing subsequent infections by more viable agents.
     */
    v3_ActCode_Immunization: Coding;
    /**
     * A patient encounter where a patient is admitted by a hospital or equivalent facility, assigned to a location where patients generally stay at least overnight and provided with room, board, and continuous nursing service.
     */
    v3_ActCode_InpatientEncounter: Coding;
    /**
     * A grantor's presumed assent to the grantee's terms of agreement is based on the grantor's behavior, which may result from not expressly assenting to the consent directive offered, or from having no right to assent or dissent offered by the grantee.
     *
     *
     *                            Comment: Implied or "implicit" consent occurs when the behavior of the grantor is understood by a reasonable person to signal agreement to the grantee's terms.
     *
     *
     *                            Usage Note: Implied consent with no opportunity to assent or dissent to certain terms is considered "basic consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient schedules an appointment with a provider, and either does not take the opportunity to expressly assent or dissent to the provider's consent directive, does not have an opportunity to do so, as in the case where emergency care is required, or simply behaves as though the patient [grantor] agrees to the rights granted to the provider [grantee] in an implicit consent directive.
     *                            An injured and unconscious patient is deemed to have assented to emergency treatment by those permitted to do so under jurisdictional laws, e.g., Good Samaritan laws.
     *                            Non-healthcare: Upon receiving a driver's license, the driver is deemed to have assented without explicitly consenting to undergoing field sobriety tests.
     *                            A corporation that does business in a foreign nation is deemed to have deemed to have assented without explicitly consenting to abide by that nation's laws.
     */
    v3_ActCode_ImpliedConsent: Coding;
    /**
     * A grantor's presumed assent to the grantee's terms of agreement, which is based on the grantor's behavior, and includes a right to dissent to certain terms.
     *
     *
     *                            Comment: A grantor assenting to the grantee's terms of agreement may or may not exercise a right to dissent to grantor selected terms or to grantee's selected terms to which a grantor may dissent.
     *
     *
     *                            Usage Note: Implied or "implicit" consent with an "opportunity to dissent" occurs when the grantor's behavior is understood by a reasonable person to signal assent to the grantee's terms of agreement whether the grantor requests or the grantee approves further restrictions, is considered "granular consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare Examples: A healthcare provider deems a patient's assent to disclosure of health information to family members and friends, but offers an opportunity or permits the patient to dissent to such disclosures.
     *                            A health information exchanges deems a patient to have assented to disclosure of health information for treatment purposes, but offers the patient an opportunity to dissents to disclosure to particular provider organizations.
     *                            Non-healthcare Examples: A bank deems a banking customer's assent to specified collection, access, use, or disclosure of financial information as a requirement of holding a bank account, but provides the user an opportunity to limit third-party collection, access, use or disclosure of that information for marketing purposes.
     */
    v3_ActCode_ImpliedConsentWithOpportunityToDissent: Coding;
    /**
     * Description:Contrast agent required for imaging study.
     */
    v3_ActCode_ImagingStudyRequiringContrast: Coding;
    /**
     * Description:Provision of prescription or direction to consume a product for purposes of bowel clearance in preparation for a colonoscopy.
     */
    v3_ActCode_ColonoscopyPrep: Coding;
    /**
     * Description:Provision of medication as a preventative measure during a treatment or other period of increased risk.
     */
    v3_ActCode_Prophylaxis: Coding;
    /**
     * Description:Provision of medication during pre-operative phase; e.g., antibiotics before dental surgery or bowel prep before colon surgery.
     */
    v3_ActCode_SurgicalProphylaxis: Coding;
    /**
     * Description:Provision of medication for pregnancy --e.g., vitamins, antibiotic treatments for vaginal tract colonization, etc.
     */
    v3_ActCode_PregnancyProphylaxis: Coding;
    /**
     * Communication of an agent to a living subject via an undetermined route.
     */
    v3_ActCode_IndeterminateDiseaseTransmissionMode: Coding;
    /**
     * Authorization to collect, access, use, or disclose specified patient health information in accordance with jurisdictional law, organizational policy, or a patient's consent directive, which may be implied, deemed, opt-in, opt-out, or explicit.
     */
    v3_ActCode_AuthorizedInformationTransfer: Coding;
    /**
     * Authorization to collect, access, use, or disclose specified patient health information as explicitly consented to by the subject of the information or the subject's representative.
     */
    v3_ActCode_AfterExplicitConsent: Coding;
    /**
     * Authorization to collect, access, use, or disclose specified patient health information in accordance with judicial system protocol, such as in the case of a subpoena or court order.
     */
    v3_ActCode_OnlyOnCourtOrder: Coding;
    /**
     * Authorization to collect, access, use, or disclose specified patient health information where deemed necessary to avert potential danger to other persons in accordance with jurisdictional law, organizational policy, or standards of practice.  For example, disclosure about a person threatening violence.
     */
    v3_ActCode_OnlyIfDangerToOthers: Coding;
    /**
     * Authorization to collect, access, use, or disclose specified patient health information in accordance with emergency information transfer protocol dictated by jurisdictional law, organization policy, or standards of practice. For example, sharing of health information during disaster response.
     */
    v3_ActCode_OnlyInAnEmergency: Coding;
    /**
     * Authorization to collect, access, use, or disclose specified patient health information necessary to avert potential public welfare risk in accordance with jurisdictional law, organizational policy, or standards of practice.  For example, reporting that a person is a victim of abuse or demonstrating suicidal tendencies.
     */
    v3_ActCode_OnlyIfPublicWelfareRisk: Coding;
    /**
     * Authorization to collect, access, use, or disclose specified patient health information for public health, welfare, and safety purposes in accordance with jurisdictional law, organizational policy, or standards of practice.  For example, public health reporting of notifiable conditions.
     */
    v3_ActCode_RegulatoryInformationTransfer: Coding;
    /**
     * The initial quantity of the specimen in inventory
     */
    v3_ActCode_InitialVolume: Coding;
    /**
     * The first immunization administration in a series intended to produce immunity
     */
    v3_ActCode_InitialImmunization: Coding;
    /**
     * Description: Exposure participants' interaction occurred in the course of one or both participants being incarcerated at a correctional facility
     */
    v3_ActCode_InmateInteraction: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated because of a recorded patient intolerance to the proposed product.  (Intolerances are non-immune based sensitivities.)
     */
    v3_ActCode_IntoleranceAlert: Coding;
    /**
     * Intermediate diagnoses are those diagnoses documented for administrative purposes during the course of a hospital stay.
     */
    v3_ActCode_IntermediateDiagnosis: Coding;
    /**
     * An observation that relates to factors that may potentially cause interference with the observation
     */
    v3_ActCode_ActSpecObsInterferenceCode: Coding;
    /**
     * Description: Exposure interaction was intimate, i.e. participants are intimate companions (e.g. spouses, domestic partners).
     */
    v3_ActCode_IntimateInteraction: Coding;
    /**
     * List of intolerance observations.
     */
    v3_ActCode_IntoleranceList: Coding;
    /**
     * Definition:A monitoring program that focuses on a drug which is under investigation and has not received regulatory approval for the condition being investigated
     */
    v3_ActCode_Investigational: Coding;
    /**
     * Payment is based on a payment intent for a previously submitted Invoice, based on formal adjudication results..
     */
    v3_ActCode_SubmittedInvoice: Coding;
    /**
     * Transaction counts and value totals by invoice type (e.g. RXDINV - Pharmacy Dispense)
     */
    v3_ActCode_InvoiceType: Coding;
    /**
     * Used by one system to inform another that the container is in position for specimen transfer (e.g., container removal from track, pipetting, etc.).
     */
    v3_ActCode_InPosition: Coding;
    /**
     * Criteria for specifying the entities to be evaluated by a specific quality measure, based on a shared common set of characteristics (within a specific measurement set to which a given measure belongs).
     */
    v3_ActCode_InitialPopulation: Coding;
    /**
     * Criteria for specifying the patients to be evaluated by a specific quality measure, based on a shared common set of characteristics (within a specific measurement set to which a given measure belongs). Details often include information based upon specific age groups, diagnoses, diagnostic and procedure codes, and enrollment periods.
     */
    v3_ActCode_InitialPatientPopulation: Coding;
    /**
     * Premium paid on service fees in compensation for practicing in a remote location.
     */
    v3_ActCode_IsolationAllowance: Coding;
    /**
     * There is a clinical issue for the therapy that makes continuation of the therapy inappropriate.
     *
     *
     *                            Open Issue: The definition of this code does not correctly represent the concept space of its specializations (children)
     */
    v3_ActCode_DetectedIssue: Coding;
    /**
     * Describes the items counted by the measure (e.g., patients, encounters, procedures, etc.)
     */
    v3_ActCode_ItemsCounted: Coding;
    /**
     * A significant word that aids in discoverability.
     */
    v3_ActCode_Keyword: Coding;
    /**
     * The ID of the patient, order, etc., was not found. Used for transactions other than additions, e.g. transfer of a non-existent patient.
     */
    v3_ActCode_UnknownKeyIdentifier: Coding;
    /**
     * The ID of the patient, order, etc., already exists. Used in response to addition transactions (Admit, New Order, etc.).
     */
    v3_ActCode_DuplicateKeyIdentifier: Coding;
    /**
     * Description: Metadata associated with the identification (e.g. name or gender) does not match the identification being verified.
     */
    v3_ActCode_NonMatchingIdentification: Coding;
    /**
     * Categorization of types of observation that capture the main clinical knowledge subject which may be a medication, a laboratory test, a disease.
     */
    v3_ActCode_KnowledgeSubject: Coding;
    /**
     * Categorization of types of observation that capture a knowledge subtopic which might be treatment, etiology, or prognosis.
     */
    v3_ActCode_KnowledgeSubtopic: Coding;
    /**
     * Used by one system to inform another that the container has been released from that system.
     */
    v3_ActCode_LeftEquipment: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated due to recent lab test results
     */
    v3_ActCode_LabAlert: Coding;
    /**
     * Description: All information pertaining to a patient's lab test records (orders &amp; results)
     */
    v3_ActCode_LabTestCategory: Coding;
    /**
     * A clinician creates a request for a laboratory test to be done for a given patient.
     */
    v3_ActCode_LaboratoryTestOrderEntryTask: Coding;
    /**
     * Description: Lab Results Attachment
     */
    v3_ActCode_LabResults: Coding;
    /**
     * A person reviews a list of laboratory results of a given patient.
     */
    v3_ActCode_LaboratoryResultsReviewTask: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated when breast-feeding
     */
    v3_ActCode_LactationAlert: Coding;
    /**
     * Communication of an agent from one living subject to another living subject through direct contact with mammalian milk or colostrum.
     */
    v3_ActCode_LactationTransmission: Coding;
    /**
     * Knowingly over the payor's published time limit for this invoice possibly due to a previous payor's delays in processing. Additional reason information will be supplied.
     */
    v3_ActCode_LateInvoice: Coding;
    /**
     * law enforcement transport
     */
    v3_ActCode_LawEnforcementTransport: Coding;
    /**
     * LDL Precipitation
     */
    v3_ActCode_LDLPrecipitation: Coding;
    /**
     * Description:The length of the data specified is greater than the maximum length defined for the element.
     */
    v3_ActCode_LengthIsTooLong: Coding;
    /**
     * Description:The length of the data specified falls out of the range defined for the element.
     */
    v3_ActCode_LengthOutOfRange: Coding;
    /**
     * Description:The length of the data specified is less than the minimum length defined for the element.
     */
    v3_ActCode_LengthIsTooShort: Coding;
    /**
     * A grouping of invoice element details including the ones specifying the lens fee and the lens dispensing cost that are being invoiced.
     */
    v3_ActCode_LensInvoiceGroup: Coding;
    /**
     * A diet low in fat, particularly to patients with hepatic diseases.
     */
    v3_ActCode_LowFat: Coding;
    /**
     * Definition: Maximum amount paid by payer or covered party; or maximum number of services or products covered under the policy or program during a covered party's lifetime.
     */
    v3_ActCode_LifeTimeMaximum: Coding;
    /**
     * Description:Scope of responsibility taken-on for physician care of a patient as defined by a governmental licensing agency.
     */
    v3_ActCode_LicensedGeneralPhysicianCare: Coding;
    /**
     * An observation used to describe the Lipemia Index of the specimen. It is recommended to use the optical turbidity at 600 nm (in absorbance units).
     */
    v3_ActCode_Lipemia: Coding;
    /**
     * Temporary supply of a product without transfer of ownership for the product.
     */
    v3_ActCode_Loan: Coding;
    /**
     * Transaction counts and value totals by service location (e.g clinic).
     */
    v3_ActCode_Location: Coding;
    /**
     * A low protein diet for patients with renal failure.
     */
    v3_ActCode_LowProtein: Coding;
    /**
     * A strictly liquid diet, that can be fully absorbed in the intestine, and therefore may not contain fiber.  Used before enteral surgeries.
     */
    v3_ActCode_Liquid: Coding;
    /**
     * A diet low in sodium for patients with congestive heart failure and/or renal failure.
     */
    v3_ActCode_LowSodium: Coding;
    /**
     * Description: Exposure participants' interaction occurred in the course of one or both participants being resident at a long term care facility (second participant may be a visitor, worker, resident or a physical place or object within the facility).
     */
    v3_ActCode_LongTermCareFacilityInteraction: Coding;
    /**
     * Description:A drug that can be prescribed (and reimbursed) only if it meets certain criteria.
     */
    v3_ActCode_LimitedUse: Coding;
    /**
     * Used by one system to inform another that the container did not arrive at its next expected location.
     */
    v3_ActCode_Missing: Coding;
    /**
     * Manual review of the invoice is requested.  Additional information to be supplied.  This may be used in the case of an appeal.
     */
    v3_ActCode_ManualReview: Coding;
    /**
     * An increase in the amount charged as a percentage of the amount. For example, 12% markup on product cost.
     */
    v3_ActCode_MarkupOrUpCharge: Coding;
    /**
     * A clinician reviews a work list of medications to be administered to a given patient.
     */
    v3_ActCode_MedicationAdministrationRecordWorkListReviewTask: Coding;
    /**
     * Description:The number of repeating elements is above the maximum number of repetitions allowed.
     */
    v3_ActCode_RepetitionsAboveMaximum: Coding;
    /**
     * Description:The maximum quantity of this drug allowed to be administered within a particular time-range (month, year, lifetime) has been reached or exceeded.
     */
    v3_ActCode_MaximumDosageReached: Coding;
    /**
     * Provision of diagnostic and/or therapeutic treatment.
     */
    v3_ActCode_Medical: Coding;
    /**
     * Definition:All information pertaining to a patient's medical condition records.
     */
    v3_ActCode_MedicalConditionCategory: Coding;
    /**
     * List of medications.
     */
    v3_ActCode_MedicationList: Coding;
    /**
     * A clinician creates a request for the administration of one or more medications to a given patient.
     */
    v3_ActCode_MedicationOrderEntryTask: Coding;
    /**
     * The end date of the measurement period.
     */
    v3_ActCode_MeasurementEndDate: Coding;
    /**
     * Description: All information pertaining to a patient's mental health records.
     */
    v3_ActCode_MentalHealthCategory: Coding;
    /**
     * A person reviews organisms of microbiology results of a given patient.
     */
    v3_ActCode_MicrobiologyOrganismsResultsReviewTask: Coding;
    /**
     * A person reviews a list of microbiology results of a given patient.
     */
    v3_ActCode_MicrobiologyResultsReviewTask: Coding;
    /**
     * A person reviews the sensitivity test of microbiology results of a given patient.
     */
    v3_ActCode_MicrobiologySensitivityTestResultsReviewTask: Coding;
    /**
     * Description:The number of repeating elements is below the minimum number of repetitions allowed.
     */
    v3_ActCode_RepetitionsBelowMinimum: Coding;
    /**
     * A charge to compensate the provider when a patient does not show for an appointment.
     */
    v3_ActCode_MissedAppointment: Coding;
    /**
     * Description:The specified element must be specified with a non-null value under certain conditions.  In this case, the conditions are true but the element is still missing or null.
     */
    v3_ActCode_ConditionalElementMissing: Coding;
    /**
     * Description:The specified element is mandatory and was not included in the instance.
     */
    v3_ActCode_MandatoryElementMissing: Coding;
    /**
     * A person reviews a list of medication orders submitted to a given patient
     */
    v3_ActCode_MedicationListReviewTask: Coding;
    /**
     * Description: Digital Model Attachment
     */
    v3_ActCode_Model: Coding;
    /**
     * Transaction counts and value totals for each calendar month within the date range specified.
     */
    v3_ActCode_Month: Coding;
    /**
     * A supply of a manufacturer sample
     */
    v3_ActCode_ManufacturerSample: Coding;
    /**
     * The start date of the measurement period.
     */
    v3_ActCode_MeasurementStartDate: Coding;
    /**
     * The method of adjusting for clinical severity and conditions present at the start of care that can influence patient outcomes for making valid comparisons of outcome measures across providers. Indicates whether an eMeasure is subject to the statistical process for reducing, removing, or clarifying the influences of confounding factors to allow more useful comparisons.
     */
    v3_ActCode_RiskAdjustment: Coding;
    /**
     * Describes how to combine information calculated based on logic in each of several populations into one summarized result. It can also be used to describe how to risk adjust the data based on supplemental data elements described in the eMeasure. (e.g., pneumonia hospital measures antibiotic selection in the ICU versus non-ICU and then the roll-up of the two).
     *
     *
     *                            Open Issue: The description does NOT align well with the definition used in the HQMF specfication; correct the MSGAGG definition, and the possible distinction of MSRAGG as a child of AGGREGATE.
     */
    v3_ActCode_RateAggregation: Coding;
    /**
     * Information on whether an increase or decrease in score is the preferred result. This should reflect information on which way is better, an increase or decrease in score.
     */
    v3_ActCode_HealthQualityMeasureImprovementNotation: Coding;
    /**
     * The list of jurisdiction(s) for which the measure applies.
     */
    v3_ActCode_Jurisdiction: Coding;
    /**
     * Defines the observation to be performed for each patient or event in the measure population. Measure observations for each case in the population are aggregated to determine the overall measure score for the population.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            the median time from arrival in the Emergency Room to departure
     *                            the median time from decision to admit to a hospital to the actual admission for Emergency Room patients
     */
    v3_ActCode_MeasureObservation: Coding;
    /**
     * Criteria for specifying
     * the measure population as a narrative description (e.g., all patients seen in the Emergency Department during the measurement period).  This is used only in continuous variable eMeasures.
     */
    v3_ActCode_MeasurePopulation: Coding;
    /**
     * Criteria for specifying subjects who should be removed from the eMeasure's Initial Population and Measure Population. Measure Population Exclusions are used in Continuous Variable measures to help narrow the Measure Population before determining the value(s) of the continuous variable(s).
     */
    v3_ActCode_MeasurePopulationExclusions: Coding;
    /**
     * Type of person or organization that is expected to report the issue.
     */
    v3_ActCode_ReporterType: Coding;
    /**
     * The maximum time that may elapse following completion of the measure until the measure report must be sent to the receiver.
     */
    v3_ActCode_TimeframeForReporting: Coding;
    /**
     * Indicates how the calculation is performed for the eMeasure
     * (e.g., proportion, continuous variable, ratio)
     */
    v3_ActCode_MeasureScoring: Coding;
    /**
     * Location(s) in which care being measured is rendered
     *
     *                         Usage Note: MSRSET is used rather than RoleCode because the setting applies to what is being measured, as opposed to participating directly in the health quality measure documantion itself).
     */
    v3_ActCode_HealthQualityMeasureCareSetting: Coding;
    /**
     * health quality measure topic type
     */
    v3_ActCode_HealthQualityMeasureTopicType: Coding;
    /**
     * The time period for which the eMeasure applies.
     */
    v3_ActCode_MeasurementPeriod: Coding;
    /**
     * Indicates whether the eMeasure is used to examine a process or an outcome over time
     * (e.g., Structure, Process, Outcome).
     */
    v3_ActCode_MeasureType: Coding;
    /**
     * Incident or accident as the result of a motor vehicle accident
     */
    v3_ActCode_MotorVehicleAccident: Coding;
    /**
     * A normal diet, i.e. no special preparations or restrictions for medical reasons. This is notwithstanding any preferences the patient might have regarding special foods, such as vegetarian, kosher, etc.
     */
    v3_ActCode_NormalDiet: Coding;
    /**
     * Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure
     */
    v3_ActCode_NonAllergyIntolerance: Coding;
    /**
     * The requesting party has insufficient authorization to invoke the interaction.
     */
    v3_ActCode_InsufficientAuthorization: Coding;
    /**
     * Authorization for specified healthcare service(s) and/or product(s) denied.
     */
    v3_ActCode_NotAuthorized: Coding;
    /**
     * Insurance coverage is not in effect for healthcare service(s) and/or product(s). May optionally include reasons for the ineligibility.
     */
    v3_ActCode_NotEligible: Coding;
    /**
     * Maximum net amount that will be covered for the product or service specified.
     */
    v3_ActCode_NetAmount: Coding;
    /**
     * The act or process by which an acid and a base are combined in such proportions that the resulting compound is neutral.
     */
    v3_ActCode_Neutralization: Coding;
    /**
     * A no fat diet for acute hepatic diseases.
     */
    v3_ActCode_NoFat: Coding;
    /**
     * No notification or opportunity is provided for a grantor to assent or dissent to a grantee's terms of agreement.
     *
     *
     *                            Comment: A "No Consent" policy scheme provides no opportunity for accommodation of an individual's preferences, and may not comply with Fair Information Practice Principles [FIPP] by enabling the data subject to object, access collected information, correct errors, or have accounting of disclosures.
     *
     *
     *                            Usage Note: The grantee's terms of agreement, may be available to the grantor by reviewing the grantee's privacy policies, but there is no notice by which a grantor is apprised of the policy directly or able to acknowledge.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: Without notification or an opportunity to assent or dissent, a patient's health information is automatically included in and available (often according to certain rules) through a health information exchange.  Note that this differs from implied consent, where the patient is assumed to have consented.
     *                            Without notification or an opportunity to assent or dissent, a patient's health information is collected, accessed, used, or disclosed for research, public health, security, fraud prevention, court order, or law enforcement.
     *                            Non-healthcare: Without notification or an opportunity to assent or dissent, a consumer's healthcare or non-healthcare internet searches are aggregated for secondary uses such as behavioral tracking and profiling.
     *                            Without notification or an opportunity to assent or dissent, a consumer's location and activities in a shopping mall are tracked by RFID tags on purchased items.
     */
    v3_ActCode_NoConsent: Coding;
    /**
     * Description:More than one element with the same value exists in the set.  Duplicates not permission in this set in a set.
     */
    v3_ActCode_DuplicateValuesAreNotPermitted: Coding;
    /**
     * The type of injury that the injury coding specifies.
     */
    v3_ActCode_NatureOfInjury: Coding;
    /**
     * Non-Payment Data.
     */
    v3_ActCode_NonPaymentData: Coding;
    /**
     * Any category of inpatient encounter except 'acute'
     */
    v3_ActCode_InpatientNonAcute: Coding;
    /**
     * Description: Element in submitted message will not persist in data storage based on detected issue.
     */
    v3_ActCode_ElementWillNotBePersisted: Coding;
    /**
     * Acknowledgement of custodian notice of privacy practices.
     *
     *
     *                            Usage Notes: This type of consent directive acknowledges a custodian's notice of privacy practices including its permitted collection, access, use and disclosure of health information to users and for purposes of use specified.
     */
    v3_ActCode_NoticeOfPrivacyPractices: Coding;
    /**
     * Communication of an agent from any entity to a living subject while the living subject is in the patient role in a healthcare facility.
     */
    v3_ActCode_NosocomialTransmission: Coding;
    /**
     * Criteria for specifying the processes or outcomes expected for each patient, procedure, or other unit of measurement defined in the denominator for proportion measures, or related to (but not directly derived from) the denominator for ratio measures (e.g., a numerator listing the number of central line blood stream infections and a denominator indicating the days per thousand of central line usage in a specific time period).
     */
    v3_ActCode_Numerator: Coding;
    /**
     * Criteria for specifying instances that should not be included in the numerator data. (e.g., if the number of central line blood stream infections per 1000 catheter days were to exclude infections with a specific bacterium, that bacterium would be listed as a numerator exclusion).  Numerator Exclusions are used only in ratio eMeasures.
     */
    v3_ActCode_NumeratorExclusions: Coding;
    /**
     * Used by one system to inform another that the specific container is being processed by the equipment. It is useful as a response to a query about Container Status, when the specific step of the process is not relevant.
     */
    v3_ActCode_InProcess: Coding;
    /**
     * Provision of care of women during pregnancy, childbirth and immediate postpartum period.  Also known as Maternity.
     */
    v3_ActCode_Obstetrics: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated due to conditions or characteristics of the patient
     */
    v3_ActCode_ObservationAlert: Coding;
    /**
     * Description: Indicates the valid antigen count.
     */
    v3_ActCode_AntigenCount: Coding;
    /**
     * Description: Indicates whether an antigen is valid or invalid.
     */
    v3_ActCode_AntigenValidity: Coding;
    /**
     * An encounter where the patient usually will start in different encounter, such as one in the emergency department (EMER) but then transition to this type of encounter because they require a significant period of treatment and monitoring to determine whether or not their condition warrants an inpatient admission or discharge. In the majority of cases the decision about admission or discharge will occur within a time period determined by local, regional or national regulation, often between 24 and 48 hours.
     */
    v3_ActCode_ObservationEncounter: Coding;
    /**
     * Description: One or more records in the query response have a status of 'obsolete'.
     */
    v3_ActCode_ObsoleteRecordReturned: Coding;
    /**
     * A clinician creates a request for a service to be performed for a given patient.
     */
    v3_ActCode_OrderEntryTask: Coding;
    /**
     * A clinical Invoice Grouping consisting of one or more oral health services. Billing for these service(s) are supported by multiple clinical billable events (acts).
     *
     *                         All items in the Invoice Grouping must be adjudicated together to be acceptable to the Adjudicator.
     */
    v3_ActCode_OralHealthService: Coding;
    /**
     * Hypersensitivity resulting in an adverse reaction upon exposure to an agent.
     */
    v3_ActCode_Intolerance: Coding;
    /**
     * Provision of treatment and/or diagnosis related to tumors and/or cancer.
     */
    v3_ActCode_Oncology: Coding;
    /**
     * Definition:A list of medications which the patient is intended to be administered only once.
     */
    v3_ActCode_OneTime: Coding;
    /**
     * The medical service and/or product was provided to a patient that has coverage in another jurisdiction.
     */
    v3_ActCode_OutOfJurisdiction: Coding;
    /**
     * Premium paid on service fees in compensation for practicing at a location other than normal working location.
     */
    v3_ActCode_OutOfOffice: Coding;
    /**
     * A grantor's assent to the terms of an agreement offered by a grantee without an opportunity for to dissent to any terms.
     *
     *
     *                            Comment: Acceptance of a grantee's terms pertaining, for example, to permissible activities, purposes of use, handling caveats, expiry date, and revocation policies.
     *
     *
     *                            Usage Note: Opt-in with no opportunity for a grantor to restrict certain permissions sought by the grantee is considered "basic consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient [grantor] signs a provider's [grantee's] consent directive form, which lists permissible collection, access, use, or disclosure activities, purposes of use, handling caveats, and revocation policies.
     *                            Non-healthcare: An employee [grantor] signs an employer's [grantee's] non-disclosure and non-compete agreement.
     */
    v3_ActCode_OptIn: Coding;
    /**
     * A grantor's assent to the grantee's terms of an agreement with an opportunity for to dissent to certain grantor or grantee selected terms.
     *
     *
     *                            Comment: A grantor dissenting to the grantee's terms of agreement may or may not exercise a right to assent to grantor's pre-approved restrictions or to grantee's selected terms to which a grantor may dissent.
     *
     *
     *                            Usage Note: Opt-in with restrictions is considered "granular consent" because the grantor has an opportunity to narrow the permissions sought by the grantee.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare:  A patient assent to grantee's consent directive terms for collection, access, use, or disclosure of health information, and dissents to disclosure to certain recipients as allowed by the provider's pre-approved restriction list.
     *                            Non-Healthcare: A cell phone user assents to the cell phone's privacy practices and terms of use, but dissents from location tracking by turning off the cell phone's tracking capability.
     */
    v3_ActCode_OptInWithRestrictions: Coding;
    /**
     * A grantor's dissent to the terms of agreement offered by a grantee without an opportunity for to assent to any terms.
     *
     *
     *                            Comment: Rejection of a grantee's terms of agreement pertaining, for example, to permissible activities, purposes of use, handling caveats, expiry date, and revocation policies.
     *
     *
     *                            Usage Note: Opt-out with no opportunity for a grantor to permit certain permissions sought by the grantee is considered "basic consent".
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient [grantor] declines to sign a provider's [grantee's] consent directive form, which lists permissible collection, access, use, or disclosure activities, purposes of use, handling caveats, revocation policies, and consequences of not assenting.
     *                            Non-healthcare: An employee [grantor] refuses to sign an employer's [grantee's] agreement not to join unions or participate in a strike where state law protects employee's collective bargaining rights.
     *                            A citizen [grantor] refuses to enroll in mandatory government [grantee] health insurance based on religious beliefs, which is an exemption.
     */
    v3_ActCode_OpOut: Coding;
    /**
     * A grantor's dissent to the grantee's terms of agreement except for certain grantor or grantee selected terms.
     *
     *
     *                            Comment: A rejection of a grantee's terms of agreement while assenting to certain permissions sought by the grantee or requesting approval of additional grantor terms.
     *
     *
     *                            Usage Note: Opt-out with exceptions is considered a "granular consent" because the grantor has an opportunity to accept certain permissions sought by the grantee or request additional grantor terms, while rejecting other grantee terms.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            Healthcare: A patient [grantor] dissents to a health information exchange consent directive with the exception of disclosure based on a limited "time to live" shared secret [e.g., a token or password], which the patient can give to a provider when seeking care.
     *                            Non-healthcare: A social media user [grantor] dissents from public access to their account, but assents to access to a circle of friends.
     */
    v3_ActCode_OptOutWithExceptions: Coding;
    /**
     * A person reviews a list of orders submitted to a given patient.
     */
    v3_ActCode_OrdersReviewTask: Coding;
    /**
     * The service provided is required for orthodontic purposes. If the covered party has orthodontic coverage, then the service may be paid.
     */
    v3_ActCode_OrthodonticService: Coding;
    /**
     * Medicines designated in this way may be supplied for patient use without a prescription.  The exact form of categorisation will vary in different realms.
     */
    v3_ActCode_NonPrescriptionMedicine: Coding;
    /**
     * Accommodations in which there is only 1 bed.
     */
    v3_ActCode_Private: Coding;
    /**
     * Phenylketonuria diet.
     */
    v3_ActCode_PhenylalanineFree: Coding;
    /**
     * HealthCare facility preferred accommodation invoice.
     */
    v3_ActCode_PreferredAccommodationInvoice: Coding;
    /**
     * Provision of care for patients who are living or dying from an advanced illness.
     */
    v3_ActCode_Palliative: Coding;
    /**
     * Paper documentation (or other physical format) with supporting or additional information to follow.
     */
    v3_ActCode_PaperDocumentationToFollow: Coding;
    /**
     * Patient is supplied with parenteral nutrition, typically described in terms of i.v. medications.
     */
    v3_ActCode_Parenteral: Coding;
    /**
     * Communication of an agent from a living subject or environmental source to a living subject where the acquisition of the agent is not via the alimentary canal.
     */
    v3_ActCode_ParenteralTransmission: Coding;
    /**
     * Indicates that the ICSR is describing problems that a patient experienced after receiving a vaccine product.
     */
    v3_ActCode_PatientAdverseEvent: Coding;
    /**
     * A person enters documentation about a given patient.
     */
    v3_ActCode_PatientDocumentationTask: Coding;
    /**
     * A person provides a patient-specific education handout to a patient.
     */
    v3_ActCode_PatientEducationEntry: Coding;
    /**
     * A person (e.g., clinician, the patient herself) reviews patient information in the electronic medical record.
     */
    v3_ActCode_PatientInformationReviewTask: Coding;
    /**
     * A pathologist enters a report for a given patient.
     */
    v3_ActCode_PathologyReportEntryTask: Coding;
    /**
     * A person reviews a pathology report of a given patient.
     */
    v3_ActCode_PathologyReportReviewTask: Coding;
    /**
     * The guarantor, who may be the patient, pays the entire charge for a service. Reasons for such action may include: there is no insurance coverage for the service (e.g. cosmetic surgery); the patient wishes to self-pay for the service; or the insurer denies payment for the service due to contractual provisions such as the need for prior authorization.
     */
    v3_ActCode_Payment: Coding;
    /**
     * Transaction counts and value totals by each instance of an invoice payee.
     */
    v3_ActCode_Payee: Coding;
    /**
     * Transaction counts and value totals by each instance of an invoice payor.
     */
    v3_ActCode_Payor: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically.
     */
    v3_ActCode_PaidNullifiedPriorPeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically.
     */
    v3_ActCode_PaidNullifiedPriorPeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually.
     */
    v3_ActCode_PaidNullifiedPriorPeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually.
     */
    v3_ActCode_PaidNullifiedPriorPeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically.
     */
    v3_ActCode_PaidNullifiedSamePeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date), subsequently cancelled in the specified period and submitted electronically.
     */
    v3_ActCode_PaidNullifiedSamePeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually.
     */
    v3_ActCode_PaidNullifiedSamePeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually.
     */
    v3_ActCode_PaidNullifiedSamePeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    v3_ActCode_PaidNonPayeePayablePriorPeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    v3_ActCode_PaidNonPayeePayablePriorPeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    v3_ActCode_PaidNonPayeePayablePriorPeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    v3_ActCode_PaidNonPayeePayablePriorPeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    v3_ActCode_PaidNonPayeePayableSamePeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    v3_ActCode_PaidNonPayeePayableSamePeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    v3_ActCode_PaidNonPayeePayableSamePeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    v3_ActCode_PaidNonPayeePayableSamePeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    v3_ActCode_PaidPayeePayablePriorPeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    v3_ActCode_PaidPayeePayablePriorPeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    v3_ActCode_PaidPayeePayablePriorPeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    v3_ActCode_PaidPayeePayablePriorPeriodManualCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    v3_ActCode_PaidPayeePayableSamePeriodElectronicAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    v3_ActCode_PaidPayeePayableSamePeriodElectronicCount: Coding;
    /**
     * Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    v3_ActCode_PaidPayeePayableSamePeriodManualAmount: Coding;
    /**
     * Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    v3_ActCode_PaidPayeePayableSamePeriodManualCount: Coding;
    /**
     * Proposed therapy is outside of the standard practice for a pediatric patient.
     */
    v3_ActCode_PediatricAlert: Coding;
    /**
     * Provision of diagnosis and treatment of diseases and disorders affecting children.
     */
    v3_ActCode_Pediatrics: Coding;
    /**
     * Anticipated or actual periodic fee associated with treating a patient. For example, expected billing cycle such as monthly, quarterly. The actual period (e.g. monthly, quarterly) is specified in the unit quantity of the Invoice Element.
     */
    v3_ActCode_PeriodicFee: Coding;
    /**
     * Transaction counts and value totals for the date range specified.
     */
    v3_ActCode_Period: Coding;
    /**
     * The amount for a performance bonus that is being requested from a payor for the performance of certain services (childhood immunizations, influenza immunizations, mammograms, pap smears) on a sliding scale. That is, for 90% of childhood immunizations to a maximum of $2200/yr. An invoice is created at the end of the service period (one year) and a code is submitted indicating the percentage achieved and the dollar amount claimed.
     */
    v3_ActCode_PerformanceBonus: Coding;
    /**
     * Pharmaceutical care performed by a pharmacist.
     */
    v3_ActCode_Pharmaceutical: Coding;
    /**
     * Provision of treatment for physical injury.
     */
    v3_ActCode_PhysicalRehab: Coding;
    /**
     * Public Insurance has been exhausted.  Invoice has not been sent to Public Insuror and therefore no Explanation Of Benefits (EOB) is provided with this Invoice submission.
     */
    v3_ActCode_PublicInsuranceExhausted: Coding;
    /**
     * Payment initiated by the payor as the result of adjudicating a paper (original, may have been faxed) invoice.
     */
    v3_ActCode_PaperInvoice: Coding;
    /**
     * Description: An interaction where the exposure participants were both present in the same location/place/space.
     */
    v3_ActCode_CommonSpaceInteraction: Coding;
    /**
     * Communication of an agent from a living subject to the progeny of that living subject via agent migration across the maternal-fetal placental membranes while in utero.
     */
    v3_ActCode_TransplacentalTransmission: Coding;
    /**
     * A similar or identical therapy was recently ordered by a different practitioner.
     */
    v3_ActCode_PolyOrdererAlert: Coding;
    /**
     * This patient was recently supplied a similar or identical therapy from a different pharmacy or supplier.
     */
    v3_ActCode_PolySupplierAlert: Coding;
    /**
     * A single point denoted by a single (column,row) pair, or multiple points each denoted by a (column,row) pair.
     */
    v3_ActCode_Point: Coding;
    /**
     * A series of connected line segments with ordered vertices denoted by (column,row) pairs; if the first and last vertices are the same, it is a closed polygon.
     */
    v3_ActCode_Polyline: Coding;
    /**
     * An amount that was owed to the payor as indicated, by a carry forward adjusment, in a previous payment advice
     */
    v3_ActCode_PriorPeriodAdjustment: Coding;
    v3_ActCode_PRA: Coding;
    /**
     * A grouping of invoice element details including the one specifying the product (good or supply) being invoiced. It may also contain generic detail items such as tax or discount.
     */
    v3_ActCode_ProductInvoiceGroup: Coding;
    /**
     * Definition: Maximum amount paid by payer or covered party; or maximum number of services/products covered under the policy or program by time period specified by the effective time on the act.
     */
    v3_ActCode_PeriodMaximum: Coding;
    /**
     * The dilution of the specimen made prior to being loaded onto analytical equipment
     */
    v3_ActCode_PreDilution: Coding;
    /**
     * An observation about how important a preference is to the target of the preference.
     */
    v3_ActCode_PreferenceStrength: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated during pregnancy
     */
    v3_ActCode_PregnancyAlert: Coding;
    /**
     * A patient encounter where patient is scheduled or planned to receive service delivery in the future, and the patient is given a pre-admission account number. When the patient comes back for subsequent service, the pre-admission encounter is selected and is encapsulated into the service registration, and a new account number is generated.
     *
     *
     *                            Usage Note: This is intended to be used in advance of encounter types such as ambulatory, inpatient encounter, virtual, etc.
     */
    v3_ActCode_PreAdmission: Coding;
    /**
     * Description:Indicates that a result is incomplete.  There are further results to come.  This maps to the 'active' state in the observation result status code.
     */
    v3_ActCode_Preliminary: Coding;
    /**
     * Definition:A list of medications which the patient will consume intermittently based on the behavior of the condition for which the medication is indicated.
     */
    v3_ActCode_AsNeeded: Coding;
    /**
     * Professional association fee that is collected by the payor from the practitioner/provider on behalf of the association
     */
    v3_ActCode_ProfessionalAssociationDeduction: Coding;
    /**
     * List of problem observations.
     */
    v3_ActCode_ProblemList: Coding;
    /**
     * A clinician enters a problem for a given patient.
     */
    v3_ActCode_ProblemListEntryTask: Coding;
    /**
     * A person reviews a list of problems of a given patient.
     */
    v3_ActCode_ProblemListReviewTask: Coding;
    /**
     * Transaction counts and value totals by Provider Identifier.
     */
    v3_ActCode_Provider: Coding;
    /**
     * private transport
     */
    v3_ActCode_PrivateTransport: Coding;
    /**
     * Tax levied by the provincial or state jurisdiction such as Provincial Sales Tax
     */
    v3_ActCode_ProvincialStateSalesTax: Coding;
    /**
     * Definition:All information pertaining to a patient's professional service records (such as smoking cessation, counseling, medication review, mental health).
     */
    v3_ActCode_ProfessionalServiceCategory: Coding;
    /**
     * Provision of treatment of psychiatric disorder relating to mental illness.
     */
    v3_ActCode_Psychiatric: Coding;
    /**
     * Description: Exposure participants' interaction occurred during the course of  health care delivery by a provider (e.g. a physician treating a patient in her office).
     */
    v3_ActCode_HealthCareInteractionPatientCare: Coding;
    /**
     * public transport
     */
    v3_ActCode_PublicTransport: Coding;
    /**
     * Allows provider to explain lateness of invoice to a subsequent payor.
     */
    v3_ActCode_DelayedByAPreviousPayor: Coding;
    /**
     * Status is used by one system to inform another that the processing has been completed, but the container has not been released from that system.
     */
    v3_ActCode_ProcessCompleted: Coding;
    /**
     * A radiologist enters a report for a given patient.
     */
    v3_ActCode_RadiologyReportEntryTask: Coding;
    /**
     * A person reviews a radiology report of a given patient.
     */
    v3_ActCode_RadiologyReportReviewTask: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated because of a recorded patient allergy to a cross-sensitivity related product.  (Allergies are immune based reactions.)
     */
    v3_ActCode_RelatedAllergyAlert: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated because of a recorded prior adverse reaction to a cross-sensitivity related product.
     */
    v3_ActCode_RelatedPriorReactionAlert: Coding;
    /**
     * Succinct statement of the need for the measure. Usually includes statements pertaining to Importance criterion: impact, gap in care and evidence.
     */
    v3_ActCode_Rationale: Coding;
    /**
     * A diet that seeks to reduce body fat, typically low energy content (800-1600 kcal).
     */
    v3_ActCode_ReductionDiet: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated based on the potential for a patient reaction to the proposed product
     */
    v3_ActCode_ReactionAlert: Coding;
    /**
     * The addition of calcium back to a specimen after it was removed by chelating agents
     */
    v3_ActCode_Recalcification: Coding;
    /**
     * Retroactive adjustment such as fee rate adjustment due to contract negotiations.
     */
    v3_ActCode_Recovery: Coding;
    /**
     * Identifies bibliographic citations or references to clinical practice guidelines, sources of evidence, or other relevant materials supporting the intent and rationale of the eMeasure.
     */
    v3_ActCode_Reference: Coding;
    /**
     * Specifies whether or not further testing may be automatically or manually initiated on specimens.
     */
    v3_ActCode_ReflexPermission: Coding;
    /**
     * Rules of practice do not require a physician's referral for the provider to perform a billable service.
     */
    v3_ActCode_ReferralNotRequired: Coding;
    /**
     * Description: A person enters a health care reminder for a given patient.
     */
    v3_ActCode_ReminderListEntry: Coding;
    /**
     * Description: A person reviews a list of health care reminders for a given patient.
     */
    v3_ActCode_ReminderListReview: Coding;
    /**
     * Temporary supply of a product with financial compensation, without transfer of ownership for the product.
     */
    v3_ActCode_Rent: Coding;
    /**
     * Description:This observation represents an 'average' or 'expected' half-life typical of the product.
     */
    v3_ActCode_RepresentativeHalfLife: Coding;
    /**
     * Description:The number of repeating elements falls outside the range of the allowed number of repetitions.
     */
    v3_ActCode_RepetitionsOutOfRange: Coding;
    /**
     * This Observation Series type contains waveforms of a "representative beat" (a.k.a. "median beat" or "average beat").  The waveform samples are measured in relative time, relative to the beginning of the beat as defined by the Observation Series effective time.  The waveforms are not directly acquired from the subject, but rather algorithmically derived from the "rhythm" waveforms.
     */
    v3_ActCode_ECGRepresentativeBeatWaveforms: Coding;
    /**
     * The same service was delivered within a time period that would usually indicate a duplicate billing.  However, the repeated service is a medical 	necessity and therefore not a duplicate.
     */
    v3_ActCode_RepeatedService: Coding;
    /**
     * The value of the dilution of a sample after it had been analyzed at a prior dilution value
     */
    v3_ActCode_RerunDilution: Coding;
    /**
     * A charge is requested because the patient failed to pick up the item and it took an amount of time to return it to stock for future use.
     */
    v3_ActCode_RestockingFee: Coding;
    /**
     * Bonus payments based on performance, volume, etc. as agreed to by the payor.
     */
    v3_ActCode_RetroAdjustment: Coding;
    /**
     * A type of transaction that represents a reversal of a previous charge for a service or product. Expressed in monetary terms.  It has the opposite effect of a standard charge.
     */
    v3_ActCode_StandardChargeReversal: Coding;
    /**
     * A fill against an order that has already been filled (or partially filled) at least once.
     */
    v3_ActCode_Refill: Coding;
    /**
     * A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.)
     */
    v3_ActCode_RefillComplete: Coding;
    /**
     * A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    v3_ActCode_RefillCompletePartialStrength: Coding;
    /**
     * The first fill against an order that has already been filled at least once at another facility.
     */
    v3_ActCode_RefillFirstFillThisFacility: Coding;
    /**
     * The first fill against an order that has already been filled at least once at another facility and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    v3_ActCode_RefillPartialStrengthFirstFillThisFacility: Coding;
    /**
     * A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
     */
    v3_ActCode_RefillPartFill: Coding;
    /**
     * A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    v3_ActCode_RefillPartFillPartialStrength: Coding;
    /**
     * A fill against an order that has already been filled (or partially filled) at least once and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    v3_ActCode_RefillPartialStrength: Coding;
    /**
     * This Observation type contains ECG "rhythm" waveforms.  The waveform samples are measured in absolute time (a.k.a. "subject time" or "effective time").  These waveforms are usually "raw" with some minimal amount of noise reduction and baseline filtering applied.
     */
    v3_ActCode_ECGRhythmWaveforms: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated because of a recorded patient intolerance to a cross-sensitivity related product.  (Intolerances are non-immune based sensitivities.)
     */
    v3_ActCode_RelatedIntoleranceAlert: Coding;
    /**
     * A person reviews a Risk Assessment Instrument report of a given patient.
     */
    v3_ActCode_RiskAssessmentInstrumentTask: Coding;
    /**
     * List of risk factor observations.
     */
    v3_ActCode_RiskFactors: Coding;
    /**
     * A fully specified bounded Region of Interest (ROI) delineates a ROI in which only those dimensions participate that are specified by boundary criteria, whereas all other dimensions are excluded.  For example a ROI to mark an episode of "ST elevation" in a subset of the EKG leads V2, V3, and V4 would include 4 boundaries, one each for time, V2, V3, and V4.
     */
    v3_ActCode_FullySpecifiedROI: Coding;
    /**
     * A partially specified bounded Region of Interest (ROI) specifies a ROI in which at least all values in the dimensions specified by the boundary criteria participate. For example, if an episode of ventricular fibrillations (VFib) is observed, it usually doesn't make sense to exclude any EKG leads from the observation and the partially specified ROI would contain only one boundary for time indicating the time interval where VFib was observed.
     */
    v3_ActCode_PartiallySpecifiedROI: Coding;
    /**
     * A billing arrangement where funding is based on a list of individuals registered as patients of the Provider.
     */
    v3_ActCode_RosterFunding: Coding;
    /**
     * Proposed therapy may be inappropriate or contraindicated because of a potential patient reaction to a cross-sensitivity related product.
     */
    v3_ActCode_RelatedReactionAlert: Coding;
    /**
     * Some form of prescription is required before the related medicine can be supplied for a patient.  The exact form of regulation will vary in different realms.
     */
    v3_ActCode_PrescriptionOnlyMedicine: Coding;
    /**
     * Definition:All information pertaining to a patient's medication records (orders, dispenses and other active medications).
     */
    v3_ActCode_MedicationCategory: Coding;
    /**
     * Pharmacy dispense invoice for a compound.
     */
    v3_ActCode_RxCompoundInvoice: Coding;
    /**
     * Pharmacy dispense invoice not involving a compound
     */
    v3_ActCode_RxDispenseInvoice: Coding;
    /**
     * Uniquely designed and elegantly decorated accommodations with many amenities available for an additional charge.
     */
    v3_ActCode_Suite: Coding;
    /**
     * Definition:A drug that requires prior approval (to be reimbursed) before being dispensed
     */
    v3_ActCode_SpecialAuthorization: Coding;
    /**
     * Description:A drug that requires special access permission to be prescribed and dispensed.
     */
    v3_ActCode_SpecialAccess: Coding;
    /**
     * Transfer of ownership for a product for financial compensation.
     */
    v3_ActCode_Sale: Coding;
    /**
     * Identifies the total net amount billed for all submitted Invoice Groupings within a time period and submitted electronically.  Adjudicated invoice elements are included.
     */
    v3_ActCode_SubmittedBilledElectronicAmount: Coding;
    /**
     * Identifies the total number of submitted Invoice Groupings within a time period and submitted electronically.  Adjudicated invoice elements are included.
     */
    v3_ActCode_SubmittedBilledElectronicCount: Coding;
    /**
     * Clinical services invoice where the Invoice Group contains one billable item for multiple clinical services in one or more sessions.
     */
    v3_ActCode_SessionalOrBlockFeeInvoice: Coding;
    /**
     * Identifies the total net amount billed for all submitted  Invoice Groupings that were nullified within a time period and submitted electronically.  Adjudicated invoice elements are included.
     */
    v3_ActCode_SubmittedNullifiedElectronicAmount: Coding;
    /**
     * Identifies the total number of submitted  Invoice Groupings that were nullified within a time period and submitted electronically.  Adjudicated invoice elements are included.
     */
    v3_ActCode_SubmittedCancelledElectronicCount: Coding;
    /**
     * Identifies the total net amount billed for all submitted  Invoice Groupings that are pended or held by the payor, within a time period and submitted electronically.  Adjudicated invoice elements are not included.
     */
    v3_ActCode_SubmittedPendingElectronicAmount: Coding;
    /**
     * Identifies the total number of submitted  Invoice Groupings that are pended or held by the payor, within a time period and submitted electronically.  Adjudicated invoice elements are not included.
     */
    v3_ActCode_SubmittedPendingElectronicCount: Coding;
    /**
     * A diet that avoids ingredients that might cause digestion problems, e.g., avoid excessive fat, avoid too much fiber (cabbage, peas, beans).
     */
    v3_ActCode_SchonkostGE: Coding;
    /**
     * Description: The school the patient attended when immunized.
     */
    v3_ActCode_School: Coding;
    /**
     * Description: The school division or district associated with the patient during the immunization event.
     */
    v3_ActCode_SchoolDivision: Coding;
    /**
     * Incident or accident is the result of a school place accident.
     */
    v3_ActCode_SchoolAccident: Coding;
    /**
     * Description: Exposure participants' interaction occurred in an academic setting (e.g., participants are fellow students, or student and teacher).
     */
    v3_ActCode_SchoolInteraction: Coding;
    /**
     * Comparison of results across strata can be used to show where disparities exist or where there is a need to expose differences in results. For example, Centers for Medicare &amp; Medicaid Services (CMS) in the U.S. defines four required Supplemental Data Elements (payer, ethnicity, race, and gender), which are variables used to aggregate data into various subgroups. Additional supplemental data elements required for risk adjustment or other purposes of data aggregation can be included in the Supplemental Data Element section.
     */
    v3_ActCode_SupplementalDataElements: Coding;
    /**
     * Type of security metadata observation made about the alteration integrity of an IT resource (data, information object, service, or system capability), which indicates the mechanism used for authorized transformations of the resource.
     *
     *
     *                            Examples: Types of security alteration integrity observation metadata, which may value the observation with a code used to indicate the mechanism used for authorized transformation of an IT resource, including:
     *
     *
     *                            translation
     *                            syntactic transformation
     *                            semantic mapping
     *                            redaction
     *                            masking
     *                            pseudonymization
     *                            anonymization
     */
    v3_ActCode_SecurityAlterationIntegrityObservation: Coding;
    /**
     * Type of security metadata observation made about the category of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions. Security category metadata is defined by ISO/IEC 2382-8:1998(E/F)/ T-REC-X.812-1995 as: "A nonhierarchical grouping of sensitive information used to control access to data more finely than with hierarchical security classification alone."
     *
     *
     *                            Rationale: A security category observation supports requirement to specify the type of IT resource to facilitate application of appropriate levels of information security according to a range of levels of impact or consequences that might result from the unauthorized disclosure, modification, or use of the information or information system.  A resource is assigned to a specific category of information (e.g., privacy, medical, proprietary, financial, investigative, contractor sensitive, security management) defined by an organization or in some instances, by a specific law, Executive Order, directive, policy, or regulation. [FIPS 199]
     *
     *
     *                            Examples: Types of security categories include:
     *
     *
     *                            Compartment:  A division of data into isolated blocks with separate security controls for the purpose of reducing risk. (ISO 2382-8).  A security label tag that "segments" an IT resource by indicating that access and use is restricted to members of a defined community or project. (HL7 Healthcare Classification System)
     *                            Sensitivity:  The characteristic of an IT resource which implies its value or importance and may include its vulnerability. (ISO 7492-2)  Privacy metadata for information perceived as undesirable to share.  (HL7 Healthcare Classification System)
     */
    v3_ActCode_SecurityCategoryObservation: Coding;
    /**
     * Type of security metadata observation made about the classification of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.  Security classification is defined by ISO/IEC 2382-8:1998(E/F)/ T-REC-X.812-1995 as: "The determination of which specific degree of protection against access the data or information requires, together with a designation of that degree of protection."  Security classification metadata is based on an analysis of applicable policies and the risk of financial, reputational, or other harm that could result from unauthorized disclosure.
     *
     *
     *                            Rationale: A security classification observation may indicate that the confidentiality level indicated by an Act or Role confidentiality attribute has been overridden by the entity responsible for ascribing the SecurityClassificationObservationValue.  This supports the business requirement for increasing or decreasing the level of confidentiality (classification or declassification) based on parameters beyond the original assignment of an Act or Role confidentiality.
     *
     *
     *                            Examples: Types of security classification include: HL7 Confidentiality Codes such as very restricted, unrestricted, and normal.  Intelligence community examples include top secret, secret, and confidential.
     *
     *
     *                            Usage Note: Security classification observation type codes designate security label field types, which are valued with an applicable SecurityClassificationObservationValue code as the "security label tag".
     */
    v3_ActCode_SecurityClassificationObservation: Coding;
    /**
     * Type of security metadata observation made about the control of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.  Security control metadata convey instructions to users and receivers for secure distribution, transmission, and storage; dictate obligations or mandated actions; specify any action prohibited by refrain policy such as dissemination controls; and stipulate the permissible purpose of use of an IT resource.
     *
     *
     *                            Rationale: A security control observation supports requirement to specify applicable management, operational, and technical controls (i.e., safeguards or countermeasures) prescribed for an information system to protect the confidentiality, integrity, and availability of the system and its information. [FIPS 199]
     *
     *
     *                            Examples: Types of security control metadata include:
     *
     *
     *                            handling caveats
     *                            dissemination controls
     *                            obligations
     *                            refrain policies
     *                            purpose of use constraints
     */
    v3_ActCode_SecurityControlObservation: Coding;
    /**
     * Type of security metadata observation made about the data integrity of an IT resource (data, information object, service, or system capability), which indicates the security mechanism used to preserve resource accuracy and consistency.  Data integrity is defined by ISO 22600-23.3.21 as: "The property that data has not been altered or destroyed in an unauthorized manner", and by ISO/IEC 2382-8:  The property of data whose accuracy and consistency are preserved regardless of changes made."
     *
     *
     *                            Examples: Types of security data integrity observation metadata, which may value the observation, include cryptographic hash function and digital signature.
     */
    v3_ActCode_SecurityDataIntegrityObservation: Coding;
    /**
     * Type of security metadata observation made about the integrity confidence of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.
     *
     *
     *                            Examples: Types of security integrity confidence observation metadata, which may value the observation, include highly reliable, uncertain reliability, and not reliable.
     *
     *
     *                            Usage Note: A security integrity confidence observation on an Act may indicate that a valued Act.uncertaintycode attribute has been overridden by the entity responsible for ascribing the SecurityIntegrityConfidenceObservationValue.  This supports the business requirements for increasing or decreasing the assessment of the reliability or trustworthiness of an IT resource based on parameters beyond the original assignment of an Act statement level of uncertainty.
     */
    v3_ActCode_SecurityIntegrityConfidenceObservation: Coding;
    /**
     * Type of security metadata observation made about the integrity of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.
     *
     *
     *                            Rationale: A security integrity observation supports the requirement to guard against improper information modification or destruction, and includes ensuring information non-repudiation and authenticity. (44 U.S.C., SEC. 3542)
     *
     *
     *                            Examples: Types of security integrity metadata include:
     *
     *
     *                            Integrity status, which indicates the completeness or workflow status of an IT resource (data, information object, service, or system capability)
     *                            Integrity confidence, which indicates the reliability and trustworthiness of an IT resource
     *                            Integrity control, which indicates pertinent handling caveats, obligations, refrain policies, and purpose of use for  the resource
     *                            Data integrity, which indicate the security mechanisms used to ensure that the accuracy and consistency are preserved regardless of changes made (ISO/IEC DIS 2382-8)
     *                            Alteration integrity, which indicate the security mechanisms used for authorized transformations of the resource
     *                            Integrity provenance, which indicates the entity responsible for a report or assertion relayed "second-hand" about an IT resource
     */
    v3_ActCode_SecurityIntegrityObservation: Coding;
    /**
     * Type of security metadata observation made about the integrity provenance of an IT resource (data, information object, service, or system capability), which indicates the entity that made assertions about the resource.  The asserting entity may not be the original informant about the resource.
     *
     *
     *                            Examples: Types of security integrity provenance asserted by observation metadata, which may value the observation, including:
     *
     *
     *                            assertions about an IT resource by a patient
     *                            assertions about an IT resource by a clinician
     *                            assertions about an IT resource by a device
     */
    v3_ActCode_SecurityIntegrityProvenanceAssertedByObservation: Coding;
    /**
     * Type of security metadata observation made about the provenance integrity of an IT resource (data, information object, service, or system capability), which indicates the lifecycle completeness of an IT resource in terms of workflow status such as its creation, modification, suspension, and deletion; locations in which the resource has been collected or archived, from which it may be retrieved, and the history of its distribution and disclosure.  Integrity provenance metadata about an IT resource may be used to assess its veracity, reliability, and trustworthiness.
     *
     *
     *                            Examples: Types of security integrity provenance observation metadata, which may value the observation about an IT resource, include:
     *
     *
     *                            completeness or workflow status, such as authentication
     *                            the entity responsible for original authoring or informing about an IT resource
     *                            the entity responsible for a report or assertion about an IT resource relayed â€œsecond-handâ€?
     *                            the entity responsible for excerpting, transforming, or compiling an IT resource
     */
    v3_ActCode_SecurityIntegrityProvenanceObservation: Coding;
    /**
     * Type of security metadata observation made about the integrity provenance of an IT resource (data, information object, service, or system capability), which indicates the entity that reported the existence of the resource.  The reporting entity may not be the original author of the resource.
     *
     *
     *                            Examples: Types of security integrity provenance reported by observation metadata, which may value the observation, include:
     *
     *
     *                            reports about an IT resource by a patient
     *                            reports about an IT resource by a clinician
     *                            reports about an IT resource by a device
     */
    v3_ActCode_SecurityIntegrityProvenanceReportedByObservation: Coding;
    /**
     * Type of security metadata observation made about the integrity status of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.  Indicates the completeness of an IT resource in terms of workflow status, which may impact users that are authorized to access and use the resource.
     *
     *
     *                            Examples: Types of security integrity status observation metadata, which may value the observation, include codes from the HL7 DocumentCompletion code system such as legally authenticated, in progress, and incomplete.
     */
    v3_ActCode_SecurityIntegrityStatusObservation: Coding;
    /**
     * An observation identifying security metadata about an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.  Security metadata are used to name security labels.
     *
     *
     *                            Rationale: According to ISO/TS 22600-3:2009(E) A.9.1.7 SECURITY LABEL MATCHING, Security label matching compares the initiator's clearance to the target's security label.  All of the following must be true for authorization to be granted:
     *
     *
     *                            The security policy identifiers shall be identical
     *                            The classification level of the initiator shall be greater than or equal to that of the target (that is, there shall be at least one value in the classification list of the clearance greater than or equal to the classification of the target), and
     *                            For each security category in the target label, there shall be a security category of the same type in the initiator's clearance and the initiator's classification level shall dominate that of the target.
     *
     *
     *                            Examples: SecurityObservationType  security label fields include:
     *
     *
     *                            Confidentiality classification
     *                            Compartment category
     *                            Sensitivity category
     *                            Security mechanisms used to ensure data integrity or to perform authorized data transformation
     *                            Indicators of an IT resource completeness, veracity, reliability, trustworthiness, or provenance.
     *
     *
     *                            Usage Note: SecurityObservationType codes designate security label field types, which are valued with an applicable SecurityObservationValue code as the "security label tag".
     */
    v3_ActCode_SecurityObservationType: Coding;
    /**
     * An observation identifying trust metadata about an IT resource (data, information object, service, or system capability), which may be used as a trust attribute to populate a computable trust policy, trust credential, trust assertion, or trust label field in a security label or trust policy, which are principally used for authentication, authorization, and access control decisions.
     */
    v3_ActCode_SECTRSTOBS: Coding;
    /**
     * Transaction counts and value totals by each instance of a messaging application on a single processor. It is a registered identifier known to the receivers.
     */
    v3_ActCode_SendingApplication: Coding;
    /**
     * A billing arrangement where a Provider charges a sum to provide a group (volume) of interventions/procedures to one or more patients within a defined period of time, typically on the same date.  Interventions/procedures included in the session may vary.
     */
    v3_ActCode_SessionalFunding: Coding;
    /**
     * A subjective evaluation of the seriousness or intensity associated with another observation.
     */
    v3_ActCode_SeverityObservation: Coding;
    /**
     * Communication of an agent from one living subject to another living subject through direct contact with genital or oral tissues as part of a sexual act.
     */
    v3_ActCode_SexualTransmission: Coding;
    /**
     * An emergency supply where the expectation is that a formal order authorizing the supply will be provided at a later date.
     */
    v3_ActCode_ScriptOwing: Coding;
    /**
     * Description: An interaction where the exposure participants are social associates or members of the same extended family
     */
    v3_ActCode_SocialExtendedFamilyInteraction: Coding;
    /**
     * Accommodations in which there are 2 beds.
     */
    v3_ActCode_SemiPrivate: Coding;
    /**
     * That total amount of the eligible charges which a covered party must periodically pay for services and/or products prior to the Medicaid program providing any coverage. This amount represents the covered party's spend down that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results
     */
    v3_ActCode_SpendDown: Coding;
    /**
     * Definition: A characteristic of an oral solid dosage form of a medicinal product, indicating whether it has one or more coatings such as sugar coating, film coating, or enteric coating.  Only coatings to the external surface or the dosage form should be considered (for example, coatings to individual pellets or granules inside a capsule or tablet are excluded from consideration).
     *
     *
     *                            Constraints: The Observation.value must be a Boolean (BL) with true for the presence or false for the absence of one or more coatings on a solid dosage form.
     */
    v3_ActCode_Coating_2: Coding;
    /**
     * Definition:  A characteristic of an oral solid dosage form of a medicinal product, specifying the color or colors that most predominantly define the appearance of the dose form. SPLCOLOR is not an FDA specification for the actual color of solid dosage forms or the names of colors that can appear in labeling.
     *
     *
     *                            Constraints: The Observation.value must be a single coded value or a list of multiple coded values, specifying one or more distinct colors that approximate of the color(s) of distinct areas of the solid dosage form, such as the different sides of a tablet or one-part capsule, or the different halves of a two-part capsule.  Bands on banded capsules, regardless of the color, are not considered when assigning an SPLCOLOR. Imprints on the dosage form, regardless of their color are not considered when assigning an SPLCOLOR. If more than one color exists on a particular side or half, then the most predominant color on that side or half is recorded.  If the gelatin capsule shell is colorless and transparent, use the predominant color of the contents that appears through the colorless and transparent capsule shell. Colors can include: Black;Gray;White;Red;Pink;Purple;Green;Yellow;Orange;Brown;Blue;Turquoise.
     */
    v3_ActCode_Color_2: Coding;
    /**
     * Description: A characteristic representing a single file reference that contains two or more views of the same dosage form of the product; in most cases this should represent front and back views of the dosage form, but occasionally additional views might be needed in order to capture all of the important physical characteristics of the dosage form.  Any imprint and/or symbol should be clearly identifiable, and the viewer should not normally need to rotate the image in order to read it.  Images that are submitted with SPL should be included in the same directory as the SPL file.
     */
    v3_ActCode_Image: Coding;
    /**
     * Definition:  A characteristic of an oral solid dosage form of a medicinal product, specifying the alphanumeric text that appears on the solid dosage form, including text that is embossed, debossed, engraved or printed with ink. The presence of other non-textual distinguishing marks or symbols is recorded by SPLSYMBOL.
     *
     *
     *                            Examples: Included in SPLIMPRINT are alphanumeric text that appears on the bands of banded capsules and logos and other symbols that can be interpreted as letters or numbers.
     *
     *
     *                            Constraints: The Observation.value must be of type Character String (ST). Excluded from SPLIMPRINT are internal and external cut-outs in the form of alphanumeric text and the letter 'R' with a circle around it (when referring to a registered trademark) and the letters 'TM' (when referring to a 'trade mark').  To record text, begin on either side or part of the dosage form. Start at the top left and progress as one would normally read a book.  Enter a semicolon to show separation between words or line divisions.
     */
    v3_ActCode_Imprint: Coding;
    /**
     * Definition: A characteristic of an oral solid dosage form of a medicinal product, specifying the number of equal pieces that the solid dosage form can be divided into using score line(s).
     *
     *
     *                            Example: One score line creating two equal pieces is given a value of 2, two parallel score lines creating three equal pieces is given a value of 3.
     *
     *
     *                            Constraints: Whether three parallel score lines create four equal pieces or two intersecting score lines create two equal pieces using one score line and four equal pieces using both score lines, both have the scoring value of 4. Solid dosage forms that are not scored are given a value of 1. Solid dosage forms that can only be divided into unequal pieces are given a null-value with nullFlavor other (OTH).
     */
    v3_ActCode_Scoring_2: Coding;
    /**
     * Description: A characteristic of an oral solid dosage form of a medicinal product, specifying the two dimensional representation of the solid dose form, in terms of the outside perimeter of a solid dosage form when the dosage form, resting on a flat surface, is viewed from directly above, including slight rounding of corners. SPLSHAPE does not include embossing, scoring, debossing, or internal cut-outs.  SPLSHAPE is independent of the orientation of the imprint and logo. Shapes can include: Triangle (3 sided); Square; Round; Semicircle; Pentagon (5 sided); Diamond; Double circle; Bullet; Hexagon (6 sided); Rectangle; Gear; Capsule; Heptagon (7 sided); Trapezoid; Oval; Clover; Octagon (8 sided); Tear; Freeform.
     */
    v3_ActCode_Shape_2: Coding;
    /**
     * Definition: A characteristic of an oral solid dosage form of a medicinal product, specifying the longest single dimension of the solid dosage form as a physical quantity in the dimension of length (e.g., 3 mm). The length is should be specified in millimeters and should be rounded to the nearest whole millimeter.
     *
     *
     *                            Example: SPLSIZE for a rectangular shaped tablet is the length and SPLSIZE for a round shaped tablet is the diameter.
     */
    v3_ActCode_Size_2: Coding;
    /**
     * Definition: A characteristic of an oral solid dosage form of a medicinal product, to describe whether or not the medicinal product has a mark or symbol appearing on it for easy and definite recognition.  Score lines, letters, numbers, and internal and external cut-outs are not considered marks or symbols. See SPLSCORING and SPLIMPRINT for these characteristics.
     *
     *
     *                            Constraints: The Observation.value must be a Boolean (BL) with &lt;u&gt;true&lt;/u&gt; indicating the presence and &lt;u&gt;false&lt;/u&gt; for the absence of marks or symbols.
     *
     *
     *                            Example:
     */
    v3_ActCode_Symbol: Coding;
    /**
     * Incident or accident is the result of a sporting accident.
     */
    v3_ActCode_SportingAccident: Coding;
    /**
     * Description:Specimen has been received by the participating organization/department.
     */
    v3_ActCode_SpecimenReceived: Coding;
    /**
     * An encounter where the patient is admitted to a health care facility for a predetermined length of time, usually less than 24 hours.
     */
    v3_ActCode_ShortStay: Coding;
    /**
     * Description:Specimen has been placed into storage at a participating location.
     */
    v3_ActCode_SpecimenInStorage: Coding;
    /**
     * The act of putting something away for safe keeping. The "something" may be physical object such as a specimen, or information, such as observations regarding a specimen.
     */
    v3_ActCode_Storage: Coding;
    /**
     * Description:Specimen has been put in transit to a participating receiver.
     */
    v3_ActCode_SpecimenInTransit: Coding;
    /**
     * Describes the strata for which the measure is to be evaluated. There are three examples of reasons for stratification based on existing work. These include: (1) evaluate the measure based on different age groupings within the population described in the measure (e.g., evaluate the whole [age 14-25] and each sub-stratum [14-19] and [20-25]); (2) evaluate the eMeasure based on either a specific condition, a specific discharge location, or both; (3) evaluate the eMeasure based on different locations within a facility (e.g., evaluate the overall rate for all intensive care units and also some strata include additional findings [specific birth weights for neonatal intensive care units]).
     */
    v3_ActCode_Stratification: Coding;
    /**
     * Definition: A government health program that provides coverage on a fee for service basis for health services to persons meeting eligibility criteria such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.
     *
     *
     *                            Discussion: The structure and business processes for underwriting and administering a subsidized fee for service program is further specified by the Underwriter and Payer Role.class and Role.code.
     */
    v3_ActCode_SubsidizedFeeForServiceProgram: Coding;
    /**
     * Description: An interaction where the exposure participants shared or co-used a common substance (e.g. drugs, needles, or common food item).
     */
    v3_ActCode_CommonSubstanceInteraction: Coding;
    /**
     * A diet that is not intended to be complete but is added to other diets.
     */
    v3_ActCode_NutritionalSupplement: Coding;
    /**
     * Description: One or more records in the query response have been suppressed due to consent or privacy restrictions.
     */
    v3_ActCode_RecordSuppressed: Coding;
    /**
     * Provision of surgical treatment.
     */
    v3_ActCode_Surgical: Coding;
    /**
     * This is not really a diet, since it contains little nutritional value, but is essentially just water.  Used before coloscopy examinations.
     */
    v3_ActCode_TeaOnly: Coding;
    /**
     * A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided.
     */
    v3_ActCode_TrialBalance: Coding;
    /**
     * A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    v3_ActCode_TrialBalancePartialStrength: Coding;
    /**
     * Description: The patient's teacher when immunized.
     */
    v3_ActCode_Teacher: Coding;
    /**
     * A fill where a small portion is provided to allow for determination of the therapy effectiveness and patient tolerance.
     */
    v3_ActCode_TrialFill: Coding;
    /**
     * A fill where a small portion is provided to allow for determination of the therapy effectiveness and patient tolerance and also where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    v3_ActCode_TrialFillPartialStrength: Coding;
    /**
     * A sequence of values in the "absolute" time domain.  This is the same time domain that all HL7 timestamps use.  It is time as measured by the Gregorian calendar
     */
    v3_ActCode_AbsoluteTimeSequence: Coding;
    /**
     * A sequence of values in a "relative" time domain.  The time is measured relative to the earliest effective time in the Observation Series containing this sequence.
     */
    v3_ActCode_RelativeTimeSequence: Coding;
    /**
     * Title 38 Part 1-protected information may only be disclosed to a third party with the special written consent of the patient except where expressly authorized by 38 USC 7332. VA may disclose this information for specific purposes to: VA employees on a need to know basis - more restrictive than Privacy Act need to know; contractors who need the information in order to perform or fulfil the duties of the contract; and researchers who provide assurances that the information will not be identified in any report. This information may also be disclosed without consent where patient lacks decision-making capacity; in a medical emergency for the purpose of treating a condition which poses an immediate threat to the health of any individual and which requires immediate medical intervention; for eye, tissue, or organ donation purposes; and disclosure of HIV information for public health purposes.
     *
     *
     *                            Definition: Title 38 Part 1 - Section 1.462 Confidentiality restrictions.
     *
     *                         (a) General. The patient records to which Sections 1.460 through 1.499 of this part apply may be disclosed or used only as permitted by these regulations and may not otherwise be disclosed or used in any civil, criminal, administrative, or legislative proceedings conducted by any Federal, State, or local authority. Any disclosure made under these regulations must be limited to that information which is necessary to carry out the purpose of the disclosure. SUBCHAPTER III--PROTECTION OF PATIENT RIGHTS Sec. 7332. Confidentiality of certain medical records (a)(1) Records of the identity, diagnosis, prognosis, or treatment of any patient or subject which are maintained in connection with the performance of any program or activity (including education, training, treatment, rehabilitation, or research) relating to drug abuse, alcoholism or alcohol abuse, infection with the human immunodeficiency virus, or sickle cell anemia which is carried out by or for the Department under this title shall, except as provided in subsections (e) and (f), be confidential, and (section 5701 of this title to the contrary notwithstanding) such records may be disclosed only for the purposes and under the circumstances expressly authorized under subsection (b).
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    v3_ActCode_Title38Section7332: Coding;
    /**
     * Fees deducted on behalf of a payee for charges based on a per-transaction or time-period (e.g. monthly) fee.
     */
    v3_ActCode_TransactionFee: Coding;
    /**
     * Can be a URL or hyperlinks that link to the transmission formats that are specified for a particular reporting program.
     */
    v3_ActCode_TransmissionFormat: Coding;
    /**
     * Transfer of ownership for a product.
     */
    v3_ActCode_Transfer: Coding;
    /**
     * A charge to cover the cost of travel time and/or cost in conjuction with providing a service or product. It may be charged per kilometer or per hour based on the effective agreement.
     */
    v3_ActCode_Travel: Coding;
    /**
     * Description: An interaction where the exposure participants traveled together in/on the same vehicle/trip (e.g. concurrent co-passengers).
     */
    v3_ActCode_CommonTravelInteraction: Coding;
    /**
     * Communication of an agent from one living subject to another living subject through direct contact with blood or blood products where the contact with blood is part of  a therapeutic procedure.
     */
    v3_ActCode_TransfusionTransmission: Coding;
    /**
     * Type of security metadata about the formal declaration by an authority or neutral third party that validates the technical, security, trust, and business practice conformance of Trust Agents to facilitate security, interoperability, and trust among participants within a security domain or trust framework.
     */
    v3_ActCode_TrustAccreditation: Coding;
    /**
     * Type of security metadata observation made about the formal declaration by an authority or neutral third party that validates the technical, security, trust, and business practice conformance of Trust Agents to facilitate security, interoperability, and trust among participants within a security domain or trust framework.
     */
    v3_ActCode_TrustAccreditationObservation: Coding;
    /**
     * Type of security metadata about privacy and security requirements with which a security domain must comply. [ISO IEC 10181-1]
     */
    v3_ActCode_TrustAgreement: Coding;
    /**
     * Type of security metadata observation made about privacy and security requirements with which a security domain must comply. [ISO IEC 10181-1]
     */
    v3_ActCode_TrustAgreementObservation: Coding;
    /**
     * Type of security metadata about the digital quality or reliability of a trust assertion, activity, capability, information exchange, mechanism, process, or protocol.
     */
    v3_ActCode_TrustAssurance: Coding;
    /**
     * Type of security metadata about a set of security-relevant data issued by a security authority or trusted third party, together with security information which is used to provide the integrity and data origin authentication services for an IT resource (data, information object, service, or system capability). [Based on ISO IEC 10181-1]
     */
    v3_ActCode_TrustCertificate: Coding;
    /**
     * Type of security metadata observation made about a set of security-relevant data issued by a security authority or trusted third party, together with security information which is used to provide the integrity and data origin authentication services for an IT resource (data, information object, service, or system capability). [Based on ISO IEC 10181-1]
     *
     *
     *                            For example,
     *
     *
     *
     *                            A Certificate Policy (CP), which is a named set of rules that indicates the applicability of a certificate to a particular community and/or class of application with common security requirements. For example, a particular Certificate Policy might indicate the applicability of a type of certificate to the authentication of electronic data interchange transactions for the trading of goods within a given price range. [Trust Service Principles and Criteria for Certification Authorities Version 2.0 March 2011 Copyright 2011 by Canadian Institute of Chartered Accountants.
     *                            A Certificate Practice Statement (CSP), which is a statement of the practices which an Authority employs in issuing and managing certificates. [Trust Service Principles and Criteria for Certification Authorities Version 2.0 March 2011 Copyright 2011 by Canadian Institute of Chartered Accountants.]
     */
    v3_ActCode_TrustCertificateObservation: Coding;
    /**
     * Type of security metadata about a complete set of contracts, regulations, or commitments that enable participating actors to rely on certain assertions by other actors to fulfill their information security requirements. [Kantara Initiative]
     */
    v3_ActCode_TrustFramework: Coding;
    /**
     * Type of security metadata observation made about a complete set of contracts, regulations or commitments that enable participating actors to rely on certain assertions by other actors to fulfill their information security requirements. [Kantara Initiative]
     */
    v3_ActCode_TrustFrameworkObservation: Coding;
    /**
     * Type of security metadata observation made about the digital quality or reliability of a trust assertion, activity, capability, information exchange, mechanism, process, or protocol.
     */
    v3_ActCode_TrustAssuranceObservation: Coding;
    /**
     * Type of security metadata about a security architecture system component that supports enforcement of security policies.
     */
    v3_ActCode_TrustMechanism: Coding;
    /**
     * Type of security metadata observation made about a security architecture system component that supports enforcement of security policies.
     */
    v3_ActCode_TrustMechanismObservation: Coding;
    /**
     * A supply action that provides sufficient material for a single dose.
     */
    v3_ActCode_UnitDose: Coding;
    /**
     * A supply action that provides sufficient material for a single dose via multiple products.  E.g. 2 50mg tablets for a 100mg unit dose.
     */
    v3_ActCode_UnitDoseEquivalent: Coding;
    /**
     * The filtration of a colloidal substance through a semipermeable medium that allows only the passage of small molecules.
     */
    v3_ActCode_Ultrafiltration: Coding;
    /**
     * Maximum unit price that will be covered for the authorized product or service.
     */
    v3_ActCode_UnitPrice: Coding;
    /**
     * Maximum number of items that will be covered of the product or service specified.
     */
    v3_ActCode_UnitQuantity: Coding;
    /**
     * The service provided is not related to another billed service. For example, 2 unrelated services provided on the same day to the same patient which may normally result in a refused payment for one of the items.
     */
    v3_ActCode_UnrelatedService: Coding;
    /**
     * Description:United Nations Standard Products and Services Classification, managed by Uniform Code Council (UCC): www.unspsc.org
     */
    v3_ActCode_UnitedNationsStandardProductsAndServicesClassification: Coding;
    /**
     * Description:Universal Product Code is one of a wide variety of bar code languages widely used in the United States and Canada for items in stores.
     */
    v3_ActCode_UniversalProductCode: Coding;
    /**
     * Premium paid on service fees in compensation for providing an expedited response to an urgent situation.
     */
    v3_ActCode_Urgent: Coding;
    /**
     * Usage notes.
     */
    v3_ActCode_NoticeOfUse: Coding;
    /**
     * Indicates that the ICSR is describing a problem with the actual vaccine product such as physical defects (cloudy, particulate matter) or inability to confer immunity.
     */
    v3_ActCode_VaccineProductProblem: Coding;
    /**
     * Description:The specified element did not pass business-rule validation.
     */
    v3_ActCode_ValidationIssue: Coding;
    /**
     * Communication of an agent from a living subject acting as a required intermediary in the agent transmission process to a recipient living subject via direct contact.
     */
    v3_ActCode_VectorBorneTransmission: Coding;
    /**
     * The provider has received a verbal permission from an authoritative source to perform the service or supply the item being invoiced.
     */
    v3_ActCode_VerbalAuthorization: Coding;
    /**
     * Definition:Indicates that the paper version of the record has, should be or is being verified against the electronic version.
     */
    v3_ActCode_VerifyPaper: Coding;
    /**
     * Diet with low content of the amino-acids valin, leucin, and isoleucin, for "maple syrup disease."
     */
    v3_ActCode_LowValinLeucinIsoleucin: Coding;
    /**
     * An observation that reports the volume of a sample.
     */
    v3_ActCode_ActSpecObsVolumeCode: Coding;
    /**
     * A patient encounter where the patient and the practitioner(s) are not in the same physical location. Examples include telephone conference, email exchange, robotic surgery, and televideo conference.
     */
    v3_ActCode_Virtual: Coding;
    /**
     * Vision dispense invoice for up to 2 lens (left and right), frame and optional discount.  Eye exams are invoiced as a clinical service invoice.
     */
    v3_ActCode_VisionDispenseInvoice: Coding;
    /**
     * Accommodations in which there are 3 or more beds.
     */
    v3_ActCode_Ward: Coding;
    /**
     * Communication of an agent from a contaminated water source to a living subject whether the water is ingested as a food or not. The route of entry of the water may be through any bodily orifice.
     */
    v3_ActCode_WaterBorneTransmission: Coding;
    /**
     * Transaction counts and value totals for each calendar week within the date range specified.
     */
    v3_ActCode_Week: Coding;
    /**
     * Description: A person enters a wellness or preventive care reminder for a given patient.
     */
    v3_ActCode_WellnessReminderListEntry: Coding;
    /**
     * Description: A person reviews a list of wellness or preventive care reminders for a given patient.
     */
    v3_ActCode_WellnessReminderListReview: Coding;
    v3_ActCode_WGHT: Coding;
    /**
     * Description: Work Injury related additional Information Attachment
     */
    v3_ActCode_WorkInjuryReportAttachment: Coding;
    /**
     * Description: Exposure interaction occurred in a work setting, i.e. participants are co-workers.
     */
    v3_ActCode_WorkInteraction: Coding;
    /**
     * Incident or accident is the result of a work place accident
     */
    v3_ActCode_WorkplaceAccident: Coding;
    /**
     * Definition: Government mandated program providing coverage, disability income, and vocational rehabilitation for injuries sustained in the work place or in the course of employment.  Employers may either self-fund the program, purchase commercial coverage, or pay a premium to a government entity that administers the program.  Employees may be required to pay premiums toward the cost of coverage as well.
     */
    v3_ActCode_WorkersCompensationProgram: Coding;
    /**
     * Used by one system to inform another that the container is no longer available within the scope of the system (e.g., tube broken or discarded).
     */
    v3_ActCode_ContainerUnavailable: Coding;
    /**
     * Description: Digital X-Ray Attachment
     */
    v3_ActCode_XRay: Coding;
    /**
     * Transaction counts and value totals for each calendar year within the date range specified.
     */
    v3_ActCode_Year: Coding;
};
//# sourceMappingURL=V3ActCode.d.ts.map