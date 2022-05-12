/**
 *  A code specifying the particular kind of Act that the Act-instance represents within its class.  Constraints:
 * The kind of Act (e.g. physical examination, serum potassium, inpatient encounter, charge financial transaction, etc.) is specified with a code from one of several, typically external, coding systems.  The coding system will depend on the class of Act, such as LOINC for observations, etc. Conceptually, the Act.code must be a specialization of the Act.classCode. This is why the structure of ActClass domain should be reflected in the superstructure of the ActCode domain and then individual codes or externally referenced vocabularies subordinated under these domains that reflect the ActClass structure. Act.classCode and Act.code are not modifiers of each other but the Act.code concept should really imply the Act.classCode concept. For a negative example, it is not appropriate to use an Act.code "potassium" together with and Act.classCode for "laboratory observation" to somehow mean "potassium laboratory observation" and then use the same Act.code for "potassium" together with Act.classCode for "medication" to mean "substitution of potassium". This mutually modifying use of Act.code and Act.classCode is not permitted.
 */
export declare enum V3ActCodeValueSetEnum {
    /**
     * _ActAccountCode: An account represents a grouping of financial transactions that are tracked and reported together with a single balance. 	 	Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
     */
    ActAccountCode = "_ActAccountCode",
    /**
     * _ActAdjudicationCode: Includes coded responses that will occur as a result of the adjudication of an electronic invoice at a summary level and provides guidance on interpretation of the referenced adjudication results.
     */
    ActAdjudicationCode = "_ActAdjudicationCode",
    /**
     * _ActAdjudicationGroupCode: Catagorization of grouping criteria for the associated transactions and/or summary (totals, subtotals).
     */
    ActAdjudicationGroupCode = "_ActAdjudicationGroupCode",
    /**
     * _ActAdjudicationResultActionCode: Actions to be carried out by the recipient of the Adjudication Result information.
     */
    ActAdjudicationResultActionCode = "_ActAdjudicationResultActionCode",
    /**
     * _ActAdministrativeAuthorizationDetectedIssueCode: ActAdministrativeAuthorizationDetectedIssueCode
     */
    ActAdministrativeAuthorizationDetectedIssueCode = "_ActAdministrativeAuthorizationDetectedIssueCode",
    /**
     * _ActAdministrativeDetectedIssueCode: Identifies types of detectyed issues for Act class "ALRT" for the administrative and patient administrative acts domains.
     */
    ActAdministrativeDetectedIssueCode = "_ActAdministrativeDetectedIssueCode",
    /**
     * _ActAdministrativeDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations for the administrative and patient administrative acts domains.
     */
    ActAdministrativeDetectedIssueManagementCode = "_ActAdministrativeDetectedIssueManagementCode",
    /**
     * _ActAdministrativeRuleDetectedIssueCode: ActAdministrativeRuleDetectedIssueCode
     */
    ActAdministrativeRuleDetectedIssueCode = "_ActAdministrativeRuleDetectedIssueCode",
    /**
     * _ActBillableModifierCode: Definition:An identifying modifier code for healthcare interventions or procedures.
     */
    ActBillableModifierCode = "_ActBillableModifierCode",
    /**
     * _ActBillableServiceCode: Definition: An identifying code for billable services, as opposed to codes for similar services used to identify them for functional purposes.
     */
    ActBillableServiceCode = "_ActBillableServiceCode",
    /**
     * _ActBillingArrangementCode: The type of provision(s)  made for reimbursing for the deliver of healthcare services and/or goods provided by a Provider, over a specified period.
     */
    ActBillingArrangementCode = "_ActBillingArrangementCode",
    /**
     * _ActBoundedROICode: Type of bounded ROI.
     */
    ActBoundedROICode = "_ActBoundedROICode",
    /**
     * _ActCareProvisionCode: Description:The type and scope of responsibility taken-on by the performer of the Act for a specific subject of care.
     */
    ActCareProvision = "_ActCareProvisionCode",
    /**
     * _ActClaimAttachmentCategoryCode: Description: Coded types of attachments included to support a healthcare claim.
     */
    ActClaimAttachmentCategoryCode = "_ActClaimAttachmentCategoryCode",
    /**
     * _ActConsentDirective: Specifies the type of agreement between one or more grantor and grantee in which rights and obligations related to one or more shared items of interest are allocated.
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
    ActConsentDirective = "_ActConsentDirective",
    /**
     * _ActConsentType: Definition: The type of consent directive, e.g., to consent or dissent to collect, access, or use in specific ways within an EHRS or for health information exchange; or to disclose  health information  for purposes such as research.
     */
    ActConsentType = "_ActConsentType",
    /**
     * _ActContainerRegistrationCode: Constrains the ActCode to the domain of Container Registration
     */
    ActContainerRegistrationCode = "_ActContainerRegistrationCode",
    /**
     * _ActControlVariable: An observation form that determines parameters or attributes of an Act. Examples are the settings of a ventilator machine as parameters of a ventilator treatment act; the controls on dillution factors of a chemical analyzer as a parameter of a laboratory observation act; the settings of a physiologic measurement assembly (e.g., time skew) or the position of the body while measuring blood pressure.
     *
     *                         Control variables are forms of observations because just as with clinical observations, the Observation.code determines the parameter and the Observation.value assigns the value. While control variables sometimes can be observed (by noting the control settings or an actually measured feedback loop) they are not primary observations, in the sense that a control variable without a primary act is of no use (e.g., it makes no sense to record a blood pressure position without recording a blood pressure, whereas it does make sense to record a systolic blood pressure without a diastolic blood pressure).
     */
    ActControlVariable = "_ActControlVariable",
    /**
     * _ActCoverageAuthorizationConfirmationCode: Indication of authorization for healthcare service(s) and/or product(s).  If authorization is approved, funds are set aside.
     */
    ActCoverageAuthorizationConfirmationCode = "_ActCoverageAuthorizationConfirmationCode",
    /**
     * _ActCoverageConfirmationCode: Response to an insurance coverage eligibility query or authorization request.
     */
    ActCoverageConfirmationCode = "_ActCoverageConfirmationCode",
    /**
     * _ActCoverageEligibilityConfirmationCode: Indication of eligibility coverage for healthcare service(s) and/or product(s).
     */
    ActCoverageEligibilityConfirmationCode = "_ActCoverageEligibilityConfirmationCode",
    /**
     * _ActCoverageLimitCode: Criteria that are applicable to the authorized coverage.
     */
    ActCoverageLimitCode = "_ActCoverageLimitCode",
    /**
     * _ActCoverageQuantityLimitCode: Maximum amount paid or maximum number of services/products covered; or maximum amount or number covered during a specified time period under the policy or program.
     */
    ActCoverageQuantityLimitCode = "_ActCoverageQuantityLimitCode",
    /**
     * _ActCoverageTypeCode: Definition: Set of codes indicating the type of insurance policy or program that pays for the cost of benefits provided to covered parties.
     */
    ActCoverageTypeCode = "_ActCoverageTypeCode",
    /**
     * _ActCoveredPartyLimitCode: Codes representing the types of covered parties that may receive covered benefits under a policy or program.
     */
    ActCoveredPartyLimitCode = "_ActCoveredPartyLimitCode",
    /**
     * _ActCredentialedCareCode: Description:The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by a credentialing agency, i.e. government or non-government agency. Failure in executing this Act may result in loss of credential to the person or organization who participates as performer of the Act. Excludes employment agreements.
     *
     *
     *                            Example:Hospital license; physician license; clinic accreditation.
     */
    ActCredentialedCare = "_ActCredentialedCareCode",
    /**
     * _ActCredentialedCareProvisionPersonCode: Description:The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing individuals.
     */
    ActCredentialedCareProvisionPeron = "_ActCredentialedCareProvisionPersonCode",
    /**
     * _ActCredentialedCareProvisionProgramCode: Description:The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing programs within organizations.
     */
    ActCredentialedCareProvisionProgram = "_ActCredentialedCareProvisionProgramCode",
    /**
     * _ActDetectedIssueManagementCode: Codes dealing with the management of Detected Issue observations
     */
    ActDetectedIssueManagementCode = "_ActDetectedIssueManagementCode",
    /**
     * _ActEncounterAccommodationCode: Accommodation type.  In Intent mood, represents the accommodation type requested.  In Event mood, represents accommodation assigned/used.  In Definition mood, represents the available accommodation type.
     */
    ActEncounterAccommodationCode = "_ActEncounterAccommodationCode",
    /**
     * _ActEncounterCode: Domain provides codes that qualify the ActEncounterClass (ENC)
     */
    ActEncounterCode = "_ActEncounterCode",
    /**
     * _ActExposureCode: Concepts that identify the type or nature of exposure interaction.  Examples include "household", "care giver", "intimate partner", "common space", "common substance", etc. to further describe the nature of interaction.
     */
    ActExposureCode = "_ActExposureCode",
    /**
     * _ActFinancialTransactionCode: ActFinancialTransactionCode
     */
    ActFinancialTransactionCode = "_ActFinancialTransactionCode",
    /**
     * _ActHealthInsuranceTypeCode: Definition: Set of codes indicating the type of health insurance policy that covers health services provided to covered parties.  A health insurance policy is a written contract for insurance between the insurance company and the policyholder, and contains pertinent facts about the policy owner (the policy holder), the health insurance coverage, the insured subscribers and dependents, and the insurer.  Health insurance is typically administered in accordance with a plan, which specifies (1) the type of health services and health conditions that will be covered under what circumstances (e.g., exclusion of a pre-existing condition, service must be deemed medically necessary; service must not be experimental; service must provided in accordance with a protocol; drug must be on a formulary; service must be prior authorized; or be a referral from a primary care provider); (2) the type and affiliation of providers (e.g., only allopathic physicians, only in network, only providers employed by an HMO); (3) financial participations required of covered parties (e.g., co-pays, coinsurance, deductibles, out-of-pocket); and (4) the manner in which services will be paid (e.g., under indemnity or fee-for-service health plans, the covered party typically pays out-of-pocket and then file a claim for reimbursement, while health plans that have contractual relationships with providers, i.e., network providers, typically do not allow the providers to bill the covered party for the cost of the service until after filing a claim with the payer and receiving reimbursement).
     */
    ActHealthInsuranceTypeCode = "_ActHealthInsuranceTypeCode",
    /**
     * _ActIncidentCode: Set of codes indicating the type of incident or accident.
     */
    ActIncidentCode = "_ActIncidentCode",
    /**
     * _ActInformationAccessCode: Description: The type of health information to which the subject of the information or the subject's delegate consents or dissents.
     */
    ActInformationAccessCode = "_ActInformationAccessCode",
    /**
     * _ActInformationAccessContextCode: Concepts conveying the context in which authorization given under jurisdictional law, by organizational policy, or by a patient consent directive permits the collection, access, use or disclosure of specified patient health information.
     */
    ActInformationAccessContextCode = "_ActInformationAccessContextCode",
    /**
     * _ActInformationCategoryCode: Definition:Indicates the set of information types which may be manipulated or referenced, such as for recommending access restrictions.
     */
    ActInformationCategoryCode = "_ActInformationCategoryCode",
    /**
     * _ActInformationSensitivityPolicy: Types of sensitivity policies that apply to Acts.  Act.confidentialityCode is defined in the RIM as "constraints around appropriate disclosure of information about this Act, regardless of mood."
     *
     *
     *                            Usage Note: ActSensitivity codes are used to bind information to an Act.confidentialityCode according to local sensitivity policy so that those confidentiality codes can then govern its handling across enterprises.  Internally to a policy domain, however, local policies guide the access control system on how end users in that policy domain are  able to use information tagged with these sensitivity values.
     */
    ActInformationSensitivityPolicy = "_ActInformationSensitivityPolicy",
    /**
     * _ActInsurancePolicyCode: Set of codes indicating the type of insurance policy or other source of funds to cover healthcare costs.
     */
    ActInsurancePolicyCode = "_ActInsurancePolicyCode",
    /**
     * _ActInsuranceTypeCode: Definition: Set of codes indicating the type of insurance policy.  Insurance, in law and economics, is a form of risk management primarily used to hedge against the risk of potential financial loss. Insurance is defined as the equitable transfer of the risk of a potential loss, from one entity to another, in exchange for a premium and duty of care. A policy holder is an individual or an organization enters into a contract with an underwriter which stipulates that, in exchange for payment of a sum of money (a premium), one or more covered parties (insureds) is guaranteed compensation for losses resulting from certain perils under specified conditions.  The underwriter analyzes the risk of loss, makes a decision as to whether the risk is insurable, and prices the premium accordingly.  A policy provides benefits that indemnify or cover the cost of a loss incurred by a covered party, and may include coverage for services required to remediate a loss.  An insurance policy contains pertinent facts about the policy holder, the insurance coverage, the covered parties, and the insurer.  A policy may include exemptions and provisions specifying the extent to which the indemnification clause cannot be enforced for intentional tortious conduct of a covered party, e.g., whether the covered parties are jointly or severably insured.
     *
     *
     *                            Discussion: In contrast to programs, an insurance policy has one or more policy holders, who own the policy.  The policy holder may be the covered party, a relative of the covered party, a partnership, or a corporation, e.g., an employer.  A subscriber of a self-insured health insurance policy is a policy holder.  A subscriber of an employer sponsored health insurance policy is holds a certificate of coverage, but is not a policy holder; the policy holder is the employer.  See CoveredRoleType.
     */
    ActInsuranceTypeCode = "_ActInsuranceTypeCode",
    /**
     * _ActInvoiceAdjudicationPaymentCode: Codes representing a grouping of invoice elements (totals, sub-totals), reported through a Payment Advice or a Statement of Financial Activity (SOFA).  The code can represent summaries by day, location, payee and other cost elements such as bonus, retroactive adjustment and transaction fees.
     */
    ActInvoiceAdjudicationPaymentCode = "_ActInvoiceAdjudicationPaymentCode",
    /**
     * _ActInvoiceAdjudicationPaymentGroupCode: Codes representing adjustments to a Payment Advice such as retroactive, clawback, garnishee, etc.
     */
    ActInvoiceAdjudicationPaymentGroupCode = "_ActInvoiceAdjudicationPaymentGroupCode",
    /**
     * _ActInvoiceAdjudicationPaymentSummaryCode: Codes representing a grouping of invoice elements (totals, sub-totals), reported through a Payment Advice or a Statement of Financial Activity (SOFA).  The code can represent summaries by day, location, payee, etc.
     */
    ActInvoiceAdjudicationPaymentSummaryCode = "_ActInvoiceAdjudicationPaymentSummaryCode",
    /**
     * _ActInvoiceDetailClinicalProductCode: An identifying data string for healthcare products.
     */
    ActInvoiceDetailClinicalProductCode = "_ActInvoiceDetailClinicalProductCode",
    /**
     * _ActInvoiceDetailClinicalServiceCode: An identifying data string for healthcare procedures.
     */
    ActInvoiceDetailClinicalServiceCode = "_ActInvoiceDetailClinicalServiceCode",
    /**
     * _ActInvoiceDetailCode: Codes representing a service or product that is being invoiced (billed).  The code can represent such concepts as "office visit", "drug X", "wheelchair" and other billable items such as taxes, service charges and discounts.
     */
    ActInvoiceDetailCode = "_ActInvoiceDetailCode",
    /**
     * _ActInvoiceDetailDrugProductCode: An identifying data string for A substance used as a medication or in the preparation of medication.
     */
    ActInvoiceDetailDrugProductCode = "_ActInvoiceDetailDrugProductCode",
    /**
     * _ActInvoiceDetailGenericAdjudicatorCode: The billable item codes to identify adjudicator specified components to the total billing of a claim.
     */
    ActInvoiceDetailGenericAdjudicatorCode = "_ActInvoiceDetailGenericAdjudicatorCode",
    /**
     * _ActInvoiceDetailGenericCode: The detail item codes to identify charges or changes to the total billing of a claim due to insurance rules and payments.
     */
    ActInvoiceDetailGenericCode = "_ActInvoiceDetailGenericCode",
    /**
     * _ActInvoiceDetailGenericModifierCode: The billable item codes to identify modifications to a billable item charge. As for example after hours increase in the office visit fee.
     */
    ActInvoiceDetailGenericModifierCode = "_ActInvoiceDetailGenericModifierCode",
    /**
     * _ActInvoiceDetailGenericProviderCode: The billable item codes to identify provider supplied charges or changes to the total billing of a claim.
     */
    ActInvoiceDetailGenericProviderCode = "_ActInvoiceDetailGenericProviderCode",
    /**
     * _ActInvoiceDetailPreferredAccommodationCode: An identifying data string for medical facility accommodations.
     */
    ActInvoiceDetailPreferredAccommodationCode = "_ActInvoiceDetailPreferredAccommodationCode",
    /**
     * _ActInvoiceDetailTaxCode: The billable item codes to identify modifications to a billable item charge by a tax factor applied to the amount. As for example 7% provincial sales tax.
     */
    ActInvoiceDetailTaxCode = "_ActInvoiceDetailTaxCode",
    /**
     * _ActInvoiceElementCode: Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     */
    ActInvoiceElementCode = "_ActInvoiceElementCode",
    /**
     * _ActInvoiceElementSummaryCode: Identifies the different types of summary information that can be reported by queries dealing with Statement of Financial Activity (SOFA).  The summary information is generally used to help resolve balance discrepancies between providers and payors.
     */
    ActInvoiceElementSummaryCode = "_ActInvoiceElementSummaryCode",
    /**
     * _ActInvoiceGroupCode: Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     *
     *                         Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
     */
    ActInvoiceGroupCode = "_ActInvoiceGroupCode",
    /**
     * _ActInvoiceInterGroupCode: Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     *
     *                         Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
     *
     *                         The domain is only specified for an intermediate invoice element group (non-root or non-top level) for an Invoice.
     */
    ActInvoiceInterGroupCode = "_ActInvoiceInterGroupCode",
    /**
     * _ActInvoiceOverrideCode: Includes coded responses that will occur as a result of the adjudication of an electronic invoice at a summary level and provides guidance on interpretation of the referenced adjudication results.
     */
    ActInvoiceOverrideCode = "_ActInvoiceOverrideCode",
    /**
     * _ActInvoiceRootGroupCode: Type of invoice element that is used to assist in describing an Invoice that is either submitted for adjudication or for which is returned on adjudication results.
     *
     *                         Invoice elements of this type signify a grouping of one or more children (detail) invoice elements.  They do not have intrinsic costing associated with them, but merely reflect the sum of all costing for it's immediate children invoice elements.
     *
     *                         Codes from this domain reflect the type of Invoice such as Pharmacy Dispense, Clinical Service and Clinical Product.  The domain is only specified for the root (top level) invoice element group for an Invoice.
     */
    ActInvoiceRootGroupCode = "_ActInvoiceRootGroupCode",
    /**
     * _ActListCode: Provides codes associated with ActClass value of LIST (working list)
     */
    ActListCode = "_ActListCode",
    /**
     * _ActMedicalServiceCode: General category of medical service provided to the patient during their encounter.
     */
    ActMedicalServiceCode = "_ActMedicalServiceCode",
    /**
     * _ActMedicationTherapyDurationWorkingListCode: Definition:A collection of concepts that identifies different types of 'duration-based' mediation working lists.
     *
     *
     *                            Examples:"Continuous/Chronic" "Short-Term" and "As Needed"
     */
    ActMedicationTherapyDurationWorkingList = "_ActMedicationTherapyDurationWorkingListCode",
    /**
     * _ActMonitoringProtocolCode: Identifies types of monitoring programs
     */
    ActMonitoringProtocolCode = "_ActMonitoringProtocolCode",
    /**
     * _ActNonObservationIndicationCode: Description:Concepts representing indications (reasons for clinical action) other than diagnosis and symptoms.
     */
    ActNonObservationIndicationCode = "_ActNonObservationIndicationCode",
    /**
     * _ActObservationList: ActObservationList
     */
    ActObservationList = "_ActObservationList",
    /**
     * _ActObservationVerificationType: Identifies the type of verification investigation being undertaken with respect to the subject of the verification activity.
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
    ActObservationVerification = "_ActObservationVerificationType",
    /**
     * _ActPatientAnnotationType: Description:Provides a categorization for annotations recorded directly against the patient .
     */
    ActPatientAnnotationType = "_ActPatientAnnotationType",
    /**
     * _ActPatientTransportationModeCode: Definition: Characterizes how a patient was or will be transported to the site of a patient encounter.
     *
     *
     *                            Examples: Via ambulance, via public transit, on foot.
     */
    ActPatientTransportationModeCode = "_ActPatientTransportationModeCode",
    /**
     * _ActPaymentCode: Code identifying the method or the movement of payment instructions.
     *
     *                         Codes are drawn from X12 data element 591 (PaymentMethodCode)
     */
    ActPaymentCode = "_ActPaymentCode",
    /**
     * _ActPharmacySupplyType: Identifies types of dispensing events
     */
    ActPharmacySupplyType = "_ActPharmacySupplyType",
    /**
     * _ActPolicyType: Description:Types of policies that further specify the ActClassPolicy value set.
     */
    ActPolicyType = "_ActPolicyType",
    /**
     * _ActPrivacyLaw: A jurisdictional mandate, regulation, obligation, requirement, rule, or expectation deeming certain information to be private to an individual or organization, which is imposed on:
     *
     *
     *                            The activity of a governed party
     *                            The behavior of a governed party
     *                            The manner in which an act is executed by a governed party
     */
    ActPrivacyLaw = "_ActPrivacyLaw",
    /**
     * _ActPrivacyPolicy: A policy deeming certain information to be private to an individual or organization.
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
    ActPrivacyPolicy = "_ActPrivacyPolicy",
    /**
     * _ActProcedureCode: An identifying code for healthcare interventions/procedures.
     */
    ActProcedureCode = "_ActProcedureCode",
    /**
     * _ActProductAcquisitionCode: The method that a product is obtained for use by the subject of the supply act (e.g. patient).  Product examples are consumable or durable goods.
     */
    ActProductAcquisitionCode = "_ActProductAcquisitionCode",
    /**
     * _ActProgramTypeCode: Definition: A set of codes used to indicate coverage under a program.  A program is an organized structure for administering and funding coverage of a benefit package for covered parties meeting eligibility criteria, typically related to employment, health, financial, and demographic status. Programs are typically established or permitted by legislation with provisions for ongoing government oversight.  Regulations may mandate the structure of the program, the manner in which it is funded and administered, covered benefits, provider types, eligibility criteria and financial participation. A government agency may be charged with implementing the program in accordance to the regulation.  Risk of loss under a program in most cases would not meet what an underwriter would consider an insurable risk, i.e., the risk is not random in nature, not financially measurable, and likely requires subsidization with government funds.
     *
     *
     *                            Discussion: Programs do not have policy holders or subscribers.  Program eligibles are enrolled based on health status, statutory eligibility, financial status, or age.  Program eligibles who are covered parties under the program may be referred to as members, beneficiaries, eligibles, or recipients.  Programs risk are underwritten by not for profit organizations such as governmental entities, and the beneficiaries typically do not pay for any or some portion of the cost of coverage.  See CoveredPartyRoleType.
     */
    ActProgramTypeCode = "_ActProgramTypeCode",
    /**
     * _ActSpecimenTransportCode: Transportation of a specimen.
     */
    ActSpecimenTransportCode = "_ActSpecimenTransportCode",
    /**
     * _ActSpecimenTreatmentCode: Set of codes related to specimen treatments
     */
    ActSpecimenTreatmentCode = "_ActSpecimenTreatmentCode",
    /**
     * _ActSpecObsCode: Identifies the type of observation that is made about a specimen that may affect its processing, analysis or further result interpretation
     */
    ActSpecObsCode = "_ActSpecObsCode",
    /**
     * _ActSubstanceAdministrationCode: Description: Describes the type of substance administration being performed.  This should not be used to carry codes for identification of products.  Use an associated role or entity to carry such information.
     */
    ActSubstanceAdministrationCode = "_ActSubstanceAdministrationCode",
    /**
     * _ActSuppliedItemDetectedIssueCode: Identifies types of detected issues regarding the administration or supply of an item to a patient.
     */
    ActSuppliedItemDetectedIssueCode = "_ActSuppliedItemDetectedIssueCode",
    /**
     * _ActTaskCode: Description: A task or action that a user may perform in a clinical information system (e.g., medication order entry, laboratory test results review, problem list entry).
     */
    ActTaskCode = "_ActTaskCode",
    /**
     * _ActTherapyDurationWorkingListCode: Codes used to identify different types of 'duration-based' working lists.  Examples include "Continuous/Chronic", "Short-Term" and "As-Needed".
     */
    ActTherapyDurationWorkingListCode = "_ActTherapyDurationWorkingListCode",
    /**
     * _ActTransportationModeCode: Characterizes how a transportation act was or will be carried out.
     *
     *
     *                            Examples: Via private transport, via public transit, via courier.
     */
    ActTransportationModeCode = "_ActTransportationModeCode",
    /**
     * _ActUSPrivacyLaw: Definition: A jurisdictional mandate in the U.S. relating to privacy.
     *
     *
     *                            Usage Note: ActPrivacyLaw codes may be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.  May be used to further specify rationale for assignment of other ActPrivacyPolicy codes in the US realm, e.g., ETH and 42CFRPart2 can be differentiated from ETH and Title38Part1.
     */
    ActUSPrivacyLaw = "_ActUSPrivacyLaw",
    /**
     * _AdministrationDetectedIssueCode: Administration of the proposed therapy may be inappropriate or contraindicated as proposed
     */
    AdministrationDetectedIssueCode = "_AdministrationDetectedIssueCode",
    /**
     * _AnnotationType: AnnotationType
     */
    AnnotationType = "_AnnotationType",
    /**
     * _AppropriatenessDetectedIssueCode: AppropriatenessDetectedIssueCode
     */
    AppropriatenessDetectedIssueCode = "_AppropriatenessDetectedIssueCode",
    /**
     * _AuthorizationIssueManagementCode: Authorization Issue Management Code
     */
    AuthorizationIssueManagementCode = "_AuthorizationIssueManagementCode",
    /**
     * _CaseTransmissionMode: Code for the mechanism by which disease was acquired by the living subject involved in the public health case. Includes sexually transmitted, airborne, bloodborne, vectorborne, foodborne, zoonotic, nosocomial, mechanical, dermal, congenital, environmental exposure, indeterminate.
     */
    CaseTransmissionMode = "_CaseTransmissionMode",
    /**
     * _ECGObservationSeriesType: ECGObservationSeriesType
     */
    ECGObservationSeriesType = "_ECGObservationSeriesType",
    /**
     * _EntitySensitivityPolicyType: Types of sensitivity policies that may apply to a sensitive attribute on an Entity.
     *
     *
     *                            Usage Note: EntitySensitivity codes are used to convey a policy that is applicable to sensitive information conveyed by an entity attribute.  May be used to bind a Role.confidentialityCode associated with an Entity per organizational policy.  Role.confidentialityCode is defined in the RIM as "an indication of the appropriate disclosure of information about this Role with respect to the playing Entity."
     */
    EntityInformationSensitivityPolicy = "_EntitySensitivityPolicyType",
    /**
     * _FDALabelData: FDA label data
     */
    FDALabelData = "_FDALabelData",
    /**
     * _GeneticObservationType: Description: None provided
     */
    GeneticObservationType = "_GeneticObservationType",
    /**
     * _HL7AccommodationCode: Description:Accommodation type. In Intent mood, represents the accommodation type requested. In Event mood, represents accommodation assigned/used. In Definition mood, represents the available accommodation type.
     */
    HL7AccommodationCode = "_HL7AccommodationCode",
    /**
     * _HL7DefinedActCodes: Domain provides the root for HL7-defined detailed or rich codes for the Act classes.
     */
    HL7DefinedActCodes = "_HL7DefinedActCodes",
    /**
     * _ImmunizationObservationType: Description: Observation codes which describe characteristics of the immunization material.
     */
    ImmunizationObservationType = "_ImmunizationObservationType",
    /**
     * _IndividualCaseSafetyReportType: A code that is used to indicate the type of case safety report received from sender. The current code example reference is from the International Conference on Harmonisation (ICH) Expert Workgroup guideline on Clinical Safety Data Management: Data Elements for Transmission of Individual Case Safety Reports. The unknown/unavailable option allows the transmission of information from a secondary sender where the initial sender did not specify the type of report.
     *
     *                         Example concepts include: Spontaneous, Report from study, Other.
     */
    IndividualCaseSafetyReportType = "_IndividualCaseSafetyReportType",
    /**
     * _InformationSensitivityPolicy: A mandate, obligation, requirement, rule, or expectation characterizing the value or importance of a resource and may include its vulnerability. (Based on ISO7498-2:1989. Note: The vulnerability of personally identifiable sensitive information may be based on concerns that the unauthorized disclosure may result in social stigmatization or discrimination.) Description:  Types of Sensitivity policy that apply to Acts or Roles.  A sensitivity policy is adopted by an enterprise or group of enterprises (a 'policy domain') through a formal data use agreement that stipulates the value, importance, and vulnerability of information. A sensitivity code representing a sensitivity policy may be associated with criteria such as categories of information or sets of information identifiers (e.g., a value set of clinical codes or branch in a code system hierarchy).   These criteria may in turn be used for the Policy Decision Point in a Security Engine.  A sensitivity code may be used to set the confidentiality code used on information about Acts and Roles to trigger the security mechanisms required to control how security principals (i.e., a person, a machine, a software application) may act on the information (e.g., collection, access, use, or disclosure). Sensitivity codes are never assigned to the transport or business envelope containing patient specific information being exchanged outside of a policy domain as this would disclose the information intended to be protected by the policy.  When sensitive information is exchanged with others outside of a policy domain, the confidentiality code on the transport or business envelope conveys the receiver's responsibilities and indicates the how the information is to be safeguarded without unauthorized disclosure of the sensitive information.  This ensures that sensitive information is treated by receivers as the sender intends, accomplishing interoperability without point to point negotiations.
     *
     *
     *                            Usage Note: Sensitivity codes are not useful for interoperability outside of a policy domain because sensitivity policies are typically localized and vary drastically across policy domains even for the same information category because of differing organizational business rules, security policies, and jurisdictional requirements.  For example, an employee's sensitivity code would make little sense for use outside of a policy domain.   'Taboo' would rarely be useful outside of a policy domain unless there are jurisdictional requirements requiring that a provider disclose sensitive information to a patient directly.  Sensitivity codes may be more appropriate in a legacy system's Master Files in order to notify those who access a patient's orders and observations about the sensitivity policies that apply.  Newer systems may have a security engine that uses a sensitivity policy's criteria directly.  The specializable InformationSensitivityPolicy Act.code may be useful in some scenarios if used in combination with a sensitivity identifier and/or Act.title.
     */
    InformationSensitivityPolicy = "_InformationSensitivityPolicy",
    /**
     * _InteractionDetectedIssueCode: InteractionDetectedIssueCode
     */
    InteractionDetectedIssueCode = "_InteractionDetectedIssueCode",
    /**
     * _InvoiceElementAdjudicated: Total counts and total net amounts adjudicated for all  Invoice Groupings that were adjudicated within a time period based on the adjudication date of the Invoice Grouping.
     */
    InvoiceElementAdjudicated = "_InvoiceElementAdjudicated",
    /**
     * _InvoiceElementPaid: Total counts and total net amounts paid for all  Invoice Groupings that were paid within a time period based on the payment date.
     */
    InvoiceElementPaid = "_InvoiceElementPaid",
    /**
     * _InvoiceElementSubmitted: Total counts and total net amounts billed for all Invoice Groupings that were submitted within a time period.  Adjudicated invoice elements are included.
     */
    InvoiceElementSubmitted = "_InvoiceElementSubmitted",
    /**
     * _LOINCObservationActContextAgeType: Definition:The set of LOINC codes for the act of determining the period of time that has elapsed since an entity was born or created.
     */
    LOINCObservationActContextAgeType = "_LOINCObservationActContextAgeType",
    /**
     * _MedicationObservationType: MedicationObservationType
     */
    MedicationObservationType = "_MedicationObservationType",
    /**
     * _ObservationIssueTriggerCodedObservationType: Distinguishes the kinds of coded observations that could be the trigger for clinical issue detection. These are observations that are not measurable, but instead can be defined with codes. Coded observation types include: Allergy, Intolerance, Medical Condition, Pregnancy status, etc.
     */
    ObservationIssueTriggerCodedObservationType = "_ObservationIssueTriggerCodedObservationType",
    /**
     * _ObservationQualityMeasureAttribute: Codes used to define various metadata aspects of a health quality measure.
     */
    ObservationQualityMeasureAttribute = "_ObservationQualityMeasureAttribute",
    /**
     * _ObservationSequenceType: ObservationSequenceType
     */
    ObservationSequenceType = "_ObservationSequenceType",
    /**
     * _ObservationSeriesType: ObservationSeriesType
     */
    ObservationSeriesType = "_ObservationSeriesType",
    /**
     * _ObservationType: Identifies the kinds of observations that can be performed
     */
    ObservationType = "_ObservationType",
    /**
     * _PatientImmunizationRelatedObservationType: Description: Reporting codes that are related to an immunization event.
     */
    PatientImmunizationRelatedObservationType = "_PatientImmunizationRelatedObservationType",
    /**
     * _PopulationInclusionObservationType: Observation types for specifying criteria used to assert that a subject is included in a particular population.
     */
    PopulationInclusionObservationType = "_PopulationInclusionObservationType",
    /**
     * _PreferenceObservationType: Types of observations that can be made about Preferences.
     */
    PreferenceObservationType = "_PreferenceObservationType",
    /**
     * _ROIOverlayShape: Shape of the region on the object being referenced
     */
    ROIOverlayShape = "_ROIOverlayShape",
    /**
     * _RoleInformationSensitivityPolicy: Types of sensitivity policies that apply to Roles.
     *
     *
     *                            Usage Notes: RoleSensitivity codes are used to bind information to a Role.confidentialityCode per organizational policy.  Role.confidentialityCode is defined in the RIM as "an indication of the appropriate disclosure of information about this Role with respect to the playing Entity."
     */
    RoleInformationSensitivityPolicy = "_RoleInformationSensitivityPolicy",
    /**
     * _SupplyDetectedIssueCode: Supplying the product at this time may be inappropriate or indicate compliance issues with the associated therapy
     */
    SupplyDetectedIssueCode = "_SupplyDetectedIssueCode",
    /**
     * _TimingDetectedIssueCode: Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    TimingDetectedIssueCode = "_TimingDetectedIssueCode",
    /**
     * 1: Confirmed drug therapy appropriate
     */
    TherapyAppropriate = "1",
    /**
     * 10: Provided education or training to the patient on appropriate therapy use
     */
    ProvidedPatientEducation = "10",
    /**
     * 11: Instituted an additional therapy to mitigate potential negative effects
     */
    AddedConcurrentTherapy = "11",
    /**
     * 12: Suspended existing therapy that triggered interaction for the duration of this therapy
     */
    TemporarilySuspendedConcurrentTherapy = "12",
    /**
     * 13: Aborted existing therapy that triggered interaction.
     */
    StoppedConcurrentTherapy = "13",
    /**
     * 14: Confirmed supply action appropriate
     */
    SupplyAppropriate = "14",
    /**
     * 15: Patient's existing supply was lost/wasted
     */
    Replacement = "15",
    /**
     * 16: Supply date is due to patient vacation
     */
    VacationSupply = "16",
    /**
     * 17: Supply date is intended to carry patient over weekend
     */
    WeekendSupply = "17",
    /**
     * 18: Supply is intended for use during a leave of absence from an institution.
     */
    LeaveOfAbsence = "18",
    /**
     * 19: Consulted other supplier/pharmacy, therapy confirmed
     */
    ConsultedSupplier = "19",
    /**
     * 2: Assessed patient, therapy is appropriate
     */
    AssessedPatient = "2",
    /**
     * 20: Description: Supply is different than expected as an additional quantity has been supplied in a separate dispense.
     */
    AdditionalQuantityOnSeparateDispense = "20",
    /**
     * 21: Description: Indicates that the permissions have been externally verified and the request should be processed.
     */
    AuthorizationConfirmed = "21",
    /**
     * 21611-9: Definition:Estimated age.
     */
    AgePatientQnEst = "21611-9",
    /**
     * 21612-7: Definition:Reported age.
     */
    AgePatientQnReported = "21612-7",
    /**
     * 22: Description: The patient has the appropriate indication or diagnosis for the action to be taken.
     */
    AppropriateIndicationOrDiagnosis = "22",
    /**
     * 23: Description: It has been confirmed that the appropriate pre-requisite therapy has been tried.
     */
    PriorTherapyDocumented = "23",
    /**
     * 29553-5: Definition:Calculated age.
     */
    AgePatientQnCalc = "29553-5",
    /**
     * 3: Patient gave adequate explanation
     */
    PatientExplanation = "3",
    /**
     * 30525-0: Definition:General specification of age with no implied method of determination.
     */
    AgePatientQnDefinition = "30525-0",
    /**
     * 30972-4: Definition:Age at onset of associated adverse event; no implied method of determination.
     */
    AgeAtOnsetOfAdverseEvent = "30972-4",
    /**
     * 4: Consulted other supply source, therapy still appropriate
     */
    ConsultedOtherSource = "4",
    /**
     * 42CFRPart2: 42 CFR Part 2 stipulates the right of an individual who has applied for or been given diagnosis or treatment for alcohol or drug abuse at a federally assisted program.
     *
     *
     *                            Definition: Non-disclosure of health information relating to health care paid for by a federally assisted substance abuse program without patient consent.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    VAL42CFRPart2 = "42CFRPart2",
    /**
     * 5: Consulted prescriber, therapy confirmed
     */
    ConsultedPrescriber = "5",
    /**
     * 6: Consulted prescriber and recommended change, prescriber declined
     */
    PrescriberDeclinedChange = "6",
    /**
     * 7: Concurrent therapy triggering alert is no longer on-going or planned
     */
    InteractingTherapyNoLongerActivePlanned = "7",
    /**
     * 8: Order is performed as issued, but other action taken to mitigate potential adverse effects
     */
    OtherActionTaken = "8",
    /**
     * 9: Arranged to monitor patient for adverse effects
     */
    InstitutedOngoingMonitoringProgram = "9",
    /**
     * AA: The invoice element has been accepted for payment but one or more adjustment(s) have been made to one or more invoice element line items (component charges).
     *
     *                         Also includes the concept 'Adjudicate as zero' and items not covered under a particular Policy.
     *
     *                         Invoice element can be reversed (nullified).
     *
     *                         Recommend that the invoice element is saved for DUR (Drug Utilization Reporting).
     */
    AdjudicatedWithAdjustments = "AA",
    /**
     * AALC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    AccreditedAssistedLivingCare = "AALC",
    /**
     * AAMC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    AccreditedAmbulatoryCare = "AAMC",
    /**
     * ABHC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    AccreditedBehavioralHealthCare = "ABHC",
    /**
     * ABUSE: Description:The proposed therapy is frequently misused or abused and therefore should be used with caution and/or monitoring.
     */
    CommonlyAbusedMisusedAlert = "ABUSE",
    /**
     * ACAC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    AccreditedCriticalAccessHospitalCare = "ACAC",
    /**
     * ACADR: Description: Provide consent to collect, use, disclose, or access adverse drug reaction information for a patient.
     */
    AdverseDrugReactionAccess = "ACADR",
    /**
     * ACALL: Description: Provide consent to collect, use, disclose, or access all information for a patient.
     */
    AllAccess = "ACALL",
    /**
     * ACALLG: Description: Provide consent to collect, use, disclose, or access allergy information for a patient.
     */
    AllergyAccess = "ACALLG",
    /**
     * ACCESSCONSCHEME: An access control policy specific to the type of access control scheme, which is used to enforce one or more authorization policies.
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
    AccessControlScheme = "ACCESSCONSCHEME",
    /**
     * ACCONS: Description: Provide consent to collect, use, disclose, or access informational consent information for a patient.
     */
    InformationalConsentAccess = "ACCONS",
    /**
     * ACCTRECEIVABLE: An account for collecting charges, reversals, adjustments and payments, including deductibles, copayments, coinsurance (financial transactions) credited or debited to the account receivable account for a patient's encounter.
     */
    AccountReceivable = "ACCTRECEIVABLE",
    /**
     * ACDEMO: Description: Provide consent to collect, use, disclose, or access demographics information for a patient.
     */
    DemographicsAccess = "ACDEMO",
    /**
     * ACDI: Description: Provide consent to collect, use, disclose, or access diagnostic imaging information for a patient.
     */
    DiagnosticImagingAccess = "ACDI",
    /**
     * ACH: Automated Clearing House (ACH).
     */
    AutomatedClearingHouse = "ACH",
    /**
     * ACHC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    AccreditedHospitalCare = "ACHC",
    /**
     * ACID: The lowering of specimen pH through the addition of an acid
     */
    Acidification = "ACID",
    /**
     * ACIMMUN: Description: Provide consent to collect, use, disclose, or access immunization information for a patient.
     */
    ImmunizationAccess = "ACIMMUN",
    /**
     * ACLAB: Description: Provide consent to collect, use, disclose, or access lab test result information for a patient.
     */
    LabTestResultAccess = "ACLAB",
    /**
     * ACMED: Description: Provide consent to collect, use, disclose, or access medical condition information for a patient.
     */
    MedicationAccess = "ACMED",
    /**
     * ACMEDC: Definition: Provide consent to view or access medical condition information for a patient.
     */
    MedicalConditionAccess = "ACMEDC",
    /**
     * ACMEN: Description:Provide consent to collect, use, disclose, or access mental health information for a patient.
     */
    MentalHealthAccess = "ACMEN",
    /**
     * ACOBS: Description: Provide consent to collect, use, disclose, or access common observation information for a patient.
     */
    CommonObservationsAccess = "ACOBS",
    /**
     * ACOCOMPT: A group of health care entities, which may include health care providers, care givers, hospitals, facilities, health plans, and other health care constituents who coordinate care for reimbursement based on quality metrics for improving outcomes and lowering costs, and may be authorized to access the consumer's health information because of membership in that group.
     *
     *                         Security Compartment Labels assigned to a consumer's information use in accountable care workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a an accountable care workflow who is requesting access to that information
     */
    AccountableCareOrganizationCompartment = "ACOCOMPT",
    /**
     * ACPOLPRG: Description: Provide consent to collect, use, disclose, or access coverage policy or program for a patient.
     */
    PolicyOrProgramInformationAccess = "ACPOLPRG",
    /**
     * ACPROV: Description: Provide consent to collect, use, disclose, or access provider information for a patient.
     */
    ProviderInformationAccess = "ACPROV",
    /**
     * ACPSERV: Description: Provide consent to collect, use, disclose, or access professional service information for a patient.
     */
    ProfessionalServiceAccess = "ACPSERV",
    /**
     * ACSUBSTAB: Description:Provide consent to collect, use, disclose, or access substance abuse information for a patient.
     */
    SubstanceAbuseAccess = "ACSUBSTAB",
    /**
     * ActTrustPolicyType: A mandate, obligation, requirement, rule, or expectation conveyed as security metadata between senders and receivers required to establish the reliability, authenticity, and trustworthiness of their transactions.
     *
     *                         Trust security metadata are observation made about aspects of trust applicable to an IT resource (data, information object, service, or system capability).
     *
     *                         Trust applicable to IT resources is established and maintained in and among security domains, and may be comprised of observations about the domain's trust authority, trust framework, trust policy, trust interaction rules, means for assessing and monitoring adherence to trust policies, mechanisms that enforce trust, and quality and reliability measures of assurance in those mechanisms. [Based on ISO IEC 10181-1 and NIST SP 800-63-2]
     *
     *                         For example, identity proofing , level of assurance, and Trust Framework.
     */
    TrustPolicy = "ActTrustPolicyType",
    /**
     * ACU: Definition:A list of medications which the patient is only expected to consume for the duration of the current order or limited set of orders and which is not expected to be renewed.
     */
    ShortTermAcute = "ACU",
    /**
     * ACUTE: An acute inpatient encounter.
     */
    InpatientAcute = "ACUTE",
    /**
     * ADALRT: Proposed therapy is outside of the standard practice for an adult patient.
     */
    AdultAlert = "ADALRT",
    /**
     * ADMDX: Admitting diagnosis are the diagnoses documented  for administrative purposes as the basis for a hospital admission.
     */
    AdmittingDiagnosis = "ADMDX",
    /**
     * ADNFPPELAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted electronically.
     */
    AdjudNullifiedPriorPeriodElectronicAmount = "ADNFPPELAT",
    /**
     * ADNFPPELCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted electronically.
     */
    AdjudNullifiedPriorPeriodElectronicCount = "ADNFPPELCT",
    /**
     * ADNFPPMNAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually.
     */
    AdjudNullifiedPriorPeriodManualAmount = "ADNFPPMNAT",
    /**
     * ADNFPPMNCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually.
     */
    AdjudNullifiedPriorPeriodManualCount = "ADNFPPMNCT",
    /**
     * ADNFSPELAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently nullified in the specified period and submitted electronically.
     */
    AdjudNullifiedSamePeriodElectronicAmount = "ADNFSPELAT",
    /**
     * ADNFSPELCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently nullified in the specified period and submitted electronically.
     */
    AdjudNullifiedSamePeriodElectronicCount = "ADNFSPELCT",
    /**
     * ADNFSPMNAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually.
     */
    AdjudNullifiedSamePeriodManualAmount = "ADNFSPMNAT",
    /**
     * ADNFSPMNCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date), subsequently cancelled in the specified period and submitted manually.
     */
    AdjudNullifiedSamePeriodManualCount = "ADNFSPMNCT",
    /**
     * ADNPPPELAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    AdjudNonPayeePayablePriorPeriodElectronicAmount = "ADNPPPELAT",
    /**
     * ADNPPPELCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    AdjudNonPayeePayablePriorPeriodElectronicCount = "ADNPPPELCT",
    /**
     * ADNPPPMNAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    AdjudNonPayeePayablePriorPeriodManualAmount = "ADNPPPMNAT",
    /**
     * ADNPPPMNCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    AdjudNonPayeePayablePriorPeriodManualCount = "ADNPPPMNCT",
    /**
     * ADNPSPELAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    AdjudNonPayeePayableSamePeriodElectronicAmount = "ADNPSPELAT",
    /**
     * ADNPSPELCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    AdjudNonPayeePayableSamePeriodElectronicCount = "ADNPSPELCT",
    /**
     * ADNPSPMNAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    AdjudNonPayeePayableSamePeriodManualAmount = "ADNPSPMNAT",
    /**
     * ADNPSPMNCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    AdjudNonPayeePayableSamePeriodManualCount = "ADNPSPMNCT",
    /**
     * ADOL: Policy for handling information related to an adolescent, which will be afforded heightened confidentiality per applicable organizational or jurisdictional policy.  An enterprise may have a policy that requires that adolescent patient information be provided heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note: For use within an enterprise in which an adolescent is the information subject.  If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    AdolescentInformationSensitivity = "ADOL",
    /**
     * ADPPPPELAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    AdjudPayeePayablePriorPeriodElectronicAmount = "ADPPPPELAT",
    /**
     * ADPPPPELCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    AdjudPayeePayablePriorPeriodElectronicCount = "ADPPPPELCT",
    /**
     * ADPPPPMNAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    AdjudPayeePayablePriorPeriodManualAmout = "ADPPPPMNAT",
    /**
     * ADPPPPMNCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable prior to the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    AdjudPayeePayablePriorPeriodManualCount = "ADPPPPMNCT",
    /**
     * ADPPSPELAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    AdjudPayeePayableSamePeriodElectronicAmount = "ADPPSPELAT",
    /**
     * ADPPSPELCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    AdjudPayeePayableSamePeriodElectronicCount = "ADPPSPELCT",
    /**
     * ADPPSPMNAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    AdjudPayeePayableSamePeriodManualAmount = "ADPPSPMNAT",
    /**
     * ADPPSPMNCT: Identifies the total number of all  Invoice Groupings that were adjudicated as payable during the specified time period (based on adjudication date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    AdjudPayeePayableSamePeriodManualCount = "ADPPSPMNCT",
    /**
     * ADRFPPELAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted electronically.
     */
    AdjudRefusedPriorPeriodElectronicAmount = "ADRFPPELAT",
    /**
     * ADRFPPELCT: Identifies the  total number of all  Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted electronically.
     */
    AdjudRefusedPriorPeriodElectronicCount = "ADRFPPELCT",
    /**
     * ADRFPPMNAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted manually.
     */
    AdjudRefusedPriorPeriodManualAmount = "ADRFPPMNAT",
    /**
     * ADRFPPMNCT: Identifies the total number of all  Invoice Groupings that were adjudicated as refused prior to the specified time period (based on adjudication date) and submitted manually.
     */
    AdjudRefusedPriorPeriodManualCount = "ADRFPPMNCT",
    /**
     * ADRFSPELAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted electronically.
     */
    AdjudRefusedSamePeriodElectronicAmount = "ADRFSPELAT",
    /**
     * ADRFSPELCT: Identifies the total number of all  Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted electronically.
     */
    AdjudRefusedSamePeriodElectronicCount = "ADRFSPELCT",
    /**
     * ADRFSPMNAT: Identifies the total net amount of all  Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted manually.
     */
    AdjudRefusedSamePeriodManualAmount = "ADRFSPMNAT",
    /**
     * ADRFSPMNCT: Identifies the total number of all  Invoice Groupings that were adjudicated as refused during the specified time period (based on adjudication date) and submitted manually.
     */
    AdjudRefusedSamePeriodManualCount = "ADRFSPMNCT",
    /**
     * ADVERSE_REACTION: Indicates that the observation is of an unexpected negative occurrence in the subject suspected to result from the subject's exposure to one or more agents.  Observation values would be the symptom resulting from the reaction.
     */
    AdverseReaction = "ADVERSE_REACTION",
    /**
     * AE: American Express
     */
    AmericanExpress = "AE",
    /**
     * AFOOT: pedestrian transport
     */
    PedestrianTransport = "AFOOT",
    /**
     * AFTHRS: Premium paid on service fees in compensation for practicing outside of normal working hours.
     */
    NonNormalHours = "AFTHRS",
    /**
     * AGE: Proposed therapy may be inappropriate or contraindicated due to patient age
     */
    AgeAlert = "AGE",
    /**
     * AGGREGATE: Indicates that the observation is carrying out an aggregation calculation, contained in the value element.
     */
    AggregateMeasureObservation = "AGGREGATE",
    /**
     * AHOC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    AccreditedHomeCare = "AHOC",
    /**
     * AIRTRNS: Communication of an agent from a living subject or environmental source to a living subject through indirect contact via oral or nasal inhalation.
     */
    AirborneTransmission = "AIRTRNS",
    /**
     * ALC: Provision of Alternate Level of Care to a patient in an acute bed.  Patient is waiting for placement in a long-term care facility and is unable to return home.
     */
    AlternativeLevelOfCare = "ALC",
    /**
     * ALEC: Payment initiated by the payor as the result of adjudicating a submitted invoice that arrived to the payor from an electronic source that did not provide a conformant set of HL7 messages (e.g. web claim submission).
     */
    AlternateElectronic = "ALEC",
    /**
     * ALG: Hypersensitivity to an agent caused by an immunologic response to an initial exposure
     */
    Allergy = "ALG",
    /**
     * ALGY: Proposed therapy may be inappropriate or contraindicated because of a recorded patient allergy to the proposed product.  (Allergies are immune based reactions.)
     */
    AllergyAlert = "ALGY",
    /**
     * ALK: The act rendering alkaline by impregnating with an alkali; a conferring of alkaline qualities.
     */
    Alkalization = "ALK",
    /**
     * ALLCAT: Description: All patient information.
     */
    AllCategories = "ALLCAT",
    /**
     * ALLDONE: Definition:The requested action has already been performed and so this request has no effect
     */
    AlreadyPerformed = "ALLDONE",
    /**
     * ALLERLE: Description: A person enters a known allergy for a given patient.
     */
    AllergyListEntry = "ALLERLE",
    /**
     * ALLERLREV: Description: A person reviews a list of known allergies of a given patient.
     */
    AllergyListReview = "ALLERLREV",
    /**
     * ALLGCAT: Definition:All information pertaining to a patient's allergy and intolerance records.
     */
    AllergyCategory = "ALLGCAT",
    /**
     * ALRTENDLATE: Definition:Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy.
     */
    EndTooLateAlert = "ALRTENDLATE",
    /**
     * ALRTSTRTLATE: Definition:Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition.
     */
    StartTooLateAlert = "ALRTSTRTLATE",
    /**
     * ALTC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    AccreditedLongTermCare = "ALTC",
    /**
     * AMB: A comprehensive term for health care provided in a healthcare facility (e.g. a practitioneraTMs office, clinic setting, or hospital) on a nonresident basis. The term ambulatory usually implies that the patient has come to the location and is not assigned to a bed. Sometimes referred to as an outpatient encounter.
     */
    Ambulatory = "AMB",
    /**
     * AMBAIR: fixed-wing ambulance transport
     */
    FixedWingAmbulanceTransport = "AMBAIR",
    /**
     * AMBGRND: ground ambulance transport
     */
    GroundAmbulanceTransport = "AMBGRND",
    /**
     * AMBHELO: helicopter ambulance transport
     */
    HelicopterAmbulanceTransport = "AMBHELO",
    /**
     * AMBT: ambulance transport
     */
    AmbulanceTransport = "AMBT",
    /**
     * ANANTRNS: Communication of an agent from one animal to another proximate animal.
     */
    AnimalToAnimalTransmission = "ANANTRNS",
    /**
     * ANF: The invoice element has been accepted for payment but one or more adjustment(s) have been made to one or more invoice element line items (component charges) without changing the amount.
     *
     *                         Invoice element can be reversed (nullified).
     *
     *                         Recommend that the invoice element is saved for DUR (Drug Utilization Reporting).
     */
    AdjudicatedWithAdjustmentsAndNoFinancialImpact = "ANF",
    /**
     * ANHUMTRNS: Communication of an agent from an animal to a proximate person.
     */
    AnimalToHumanTransmission = "ANHUMTRNS",
    /**
     * ANNDI: Description:A note that is specific to a patient's diagnostic images, either historical, current or planned.
     */
    DiagnosticImageNote = "ANNDI",
    /**
     * ANNGEN: Description:A general or uncategorized note.
     */
    GeneralNote = "ANNGEN",
    /**
     * ANNIMM: A note that is specific to a patient's immunizations, either historical, current or planned.
     */
    ImmunizationNote = "ANNIMM",
    /**
     * ANNLAB: Description:A note that is specific to a patient's laboratory results, either historical, current or planned.
     */
    LaboratoryNote = "ANNLAB",
    /**
     * ANNMED: Description:A note that is specific to a patient's medications, either historical, current or planned.
     */
    MedicationNote = "ANNMED",
    /**
     * ANNU: Definition: A policy that, after an initial premium or premiums, pays out a sum at pre-determined intervals.
     *
     *                         For example, a policy holder may pay $10,000, and in return receive $150 each month until he dies; or $1,000 for each of 14 years or death benefits if he dies before the full term of the annuity has elapsed.
     */
    AnnuityPolicy = "ANNU",
    /**
     * ANONY: Custodian system must remove any information that could result in identifying the information subject.
     */
    Anonymize = "ANONY",
    /**
     * AOD: Custodian system must make available to an information subject upon request an accounting of certain disclosures of the individualâ€™s protected health information over a period of time.  Policy may dictate that the accounting include information about the information disclosed,  the date of disclosure, the identification of the receiver, the purpose of the disclosure, the time in which the disclosing entity must provide a response and the time period for which accountings of disclosure can be requested.
     */
    AccountingOfDisclosure = "AOD",
    /**
     * AOSC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the respective accreditation agency.
     */
    AccreditedOfficeBasedSurgeryCare = "AOSC",
    /**
     * AR: The invoice element has passed through the adjudication process but payment is refused due to one or more reasons.
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
    AdjudicatedAsRefused = "AR",
    /**
     * ARCAT: Description: All information pertaining to a patient's adverse drug reactions.
     */
    AdverseDrugReactionCategory = "ARCAT",
    /**
     * ARTBLD: Describes the artificial blood identifier that is associated with the specimen.
     */
    ActSpecObsArtBldCode = "ARTBLD",
    /**
     * AS: The invoice element was/will be paid exactly as submitted, without financial adjustment(s).
     *
     *                         If the dollar amount stays the same, but the billing codes have been amended or financial adjustments have been applied through the adjudication process, the invoice element is treated as "Adjudicated with Adjustment".
     *
     *                         If information items are included in the adjudication results that do not affect the monetary amounts paid, then this is still Adjudicated as Submitted (e.g. 'reached Plan Maximum on this Claim').
     *
     *                         Invoice element can be reversed (nullified).
     *
     *                         Recommend that the invoice element is saved for DUR (Drug Utilization Reporting).
     */
    AdjudicatedAsSubmitted = "AS",
    /**
     * ASSERTION: Description:Refines classCode OBS to indicate an observation in which observation.value contains a finding or other nominalized statement, where the encoded information in Observation.value is not altered by Observation.code.  For instance, observation.code="ASSERTION" and observation.value="fracture of femur present" is an assertion of a clinical finding of femur fracture.
     */
    Assertion = "ASSERTION",
    /**
     * AUDIT: Custodian system must monitor systems to ensure that all users are authorized to operate on information objects.
     */
    Audit = "AUDIT",
    /**
     * AUDTR: Custodian system must monitor and maintain retrievable log for each user and operation on information.
     */
    AuditTrail = "AUDTR",
    /**
     * AUTH: Authorization approved and funds have been set aside to pay for specified healthcare service(s) and/or product(s) within defined criteria for the authorization.
     */
    Authorized = "AUTH",
    /**
     * AUTHPOL: Authorisation policies are essentially security policies related to access-control and specify what activities a subject is permitted or forbidden to do, to a set of target objects. They are designed to protect target objects so are interpreted by access control agents or the run-time systems at the target system.
     *
     *                         A positive authorisation policy defines the actions that a subject is permitted to perform on a target. A negative authorisation policy specifies the actions that a subject is forbidden to perform on a target. Positive authorisation policies may also include filters to transform the parameters associated with their actions.  (Based on PONDERS)
     */
    AuthorizationPolicy = "AUTHPOL",
    /**
     * AUTO: Specifies whether or not automatic repeat testing is to be initiated on specimens.
     */
    AutoRepeatPermission = "AUTO",
    /**
     * AUTO-HIGH: The dilution of a sample performed by automated equipment.  The value is specified by the equipment
     */
    AutoHighDilution = "AUTO-HIGH",
    /**
     * AUTO-LOW: The dilution of a sample performed by automated equipment.  The value is specified by the equipment
     */
    AutoLowDilution = "AUTO-LOW",
    /**
     * AUTOATTCH: Description: Automobile Information Attachment
     */
    AutoAttachment = "AUTOATTCH",
    /**
     * AUTOPOL: Insurance policy for injuries sustained in an automobile accident.  Will also typically covered non-named parties to the policy, such as pedestrians 	and passengers.
     */
    Automobile = "AUTOPOL",
    /**
     * AVAILABLE: The available quantity of specimen.   This is the current quantity minus any planned consumption (e.g., tests that are planned)
     */
    AvailableVolume = "AVAILABLE",
    /**
     * B: Policy for handling trade secrets such as financial information or intellectual property, which will be afforded heightened confidentiality.  Description:  Since the service class can represent knowledge structures that may be considered a trade or business secret, there is sometimes (though rarely) the need to flag those items as of business level confidentiality.
     *
     *
     *                            Usage Notes: No patient related information may ever be of this confidentiality level.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    BusinessInformationSensitivity = "B",
    /**
     * BDYFLDTRNS: Communication of an agent from one living subject to another living subject through direct contact with any body fluid.
     */
    BodyFluidContactTransmission = "BDYFLDTRNS",
    /**
     * BH: Policy for handling information related to behavioral and emotional disturbances affecting social adjustment and physical health, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    BehavioralHealthInformationSensitivity = "BH",
    /**
     * BLDTRNS: Communication of an agent to a living subject through direct contact with blood or blood products whether the contact with blood is part of  a therapeutic procedure or not.
     */
    BloodBorneTransmission = "BLDTRNS",
    /**
     * BLK: A billing arrangement where a Provider charges a lump sum to provide a prescribed group (volume) of services to a single patient which occur over a period of time.  Services included in the block may vary.
     *
     *                         This billing arrangement is also known as Program of Care for some specific Payors and Program Fees for other Payors.
     */
    BlockFunding = "BLK",
    /**
     * BONUS: Bonus payments based on performance, volume, etc. as agreed to by the payor.
     */
    Bonus = "BONUS",
    /**
     * BOOSTER: An additional immunization administration within a series intended to bolster or enhance immunity.
     */
    BoosterImmunization = "BOOSTER",
    /**
     * BR: A diet exclusively composed of oatmeal, semolina, or rice, to be extremely easy to eat and digest.
     */
    BreikostGE = "BR",
    /**
     * BUS: Description:A local business rule relating multiple elements has been violated.
     */
    BusinessConstraintViolation = "BUS",
    /**
     * C: Description:Indicates that result data has been corrected.
     */
    Corrected = "C",
    /**
     * CACC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedAnatomicPathologyAndClinicalPathologyCare = "CACC",
    /**
     * CACS: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedAcuteCoronarySyndromeCare = "CACS",
    /**
     * CAIC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedAllergyAndImmunologyCare = "CAIC",
    /**
     * CAMC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedAerospaceMedicineCare = "CAMC",
    /**
     * CAMI: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedAcuteMyocardialInfarctionCare = "CAMI",
    /**
     * CANC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedAnesthesiologyCare = "CANC",
    /**
     * CANCAPT: A charge to compensate the provider when a patient cancels an appointment with insufficient time for the provider to make another appointment with another patient.
     */
    CancelledAppointment = "CANCAPT",
    /**
     * CANPRG: Definition: A program that provides low-income, uninsured, and underserved women access to timely, high-quality screening and diagnostic services, to detect breast and cervical cancer at the earliest stages.
     *
     *
     *                            Example: To improve women's access to screening for breast and cervical cancers, Congress passed the Breast and Cervical Cancer Mortality Prevention Act of 1990, which guided CDC in creating the National Breast and Cervical Cancer Early Detection Program (NBCCEDP), which  provides access to critical breast and cervical cancer screening services for underserved women in the United States.  An estimated 7 to 10% of U.S. women of screening age are eligible to receive NBCCEDP services. Federal guidelines establish an eligibility baseline to direct services to uninsured and underinsured women at or below 250% of federal poverty level; ages 18 to 64 for cervical screening; ages 40 to 64 for breast screening.
     */
    WomenQuoteSCancerDetectionProgram = "CANPRG",
    /**
     * CAP: A billing arrangement where the payment made to a Provider is determined by analyzing one or more demographic attributes about the persons/patients who are enrolled with the Provider (in their practice).
     */
    CapitationFunding = "CAP",
    /**
     * CAPC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedAnatomicPathologyCare = "CAPC",
    /**
     * CARD: Provision of diagnosis and treatment of diseases and disorders affecting the heart
     */
    Cardiology = "CARD",
    /**
     * CARELIST: List of acts representing a care plan.  The acts can be in a varierty of moods including event (EVN) to record acts that have been carried out as part of the care plan.
     */
    CarePlan = "CARELIST",
    /**
     * CASESER: Definition:An observation that provides a characterization of the level of harm to an investigation subject as a result of a reaction or event.
     */
    CaseSeriousnessCriteria = "CASESER",
    /**
     * CASH: Cash
     */
    Cash = "CASH",
    /**
     * CAST: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedAsthmaCare = "CAST",
    /**
     * CBAR: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedBariatricSurgeryCare = "CBAR",
    /**
     * CBGC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedClinicalBiochemicalGeneticsCare = "CBGC",
    /**
     * CC: Description: Types of advance payment to be made on a plastic card usually issued by a financial institution used of purchasing services and/or products.
     */
    CreditCard = "CC",
    /**
     * CCAD: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedCoronaryArteryDiseaseCare = "CCAD",
    /**
     * CCAR: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedCardiacCare = "CCAR",
    /**
     * CCCC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedClinicalCytogeneticsCare = "CCCC",
    /**
     * CCGC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedClinicalGeneticsMDCare = "CCGC",
    /**
     * CCPC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedClinicalPathologyCare = "CCPC",
    /**
     * CCSC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedColonAndRectalSurgeryCare = "CCSC",
    /**
     * CDEC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedDermatologyCare = "CDEC",
    /**
     * CDEP: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedDepressionCare = "CDEP",
    /**
     * CDGD: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedDigestiveGastrointestinalDisordersCare = "CDGD",
    /**
     * CDIA: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedDiabetesCare = "CDIA",
    /**
     * CDIO: An observation that states whether the disease was likely acquired outside the jurisdiction of observation, and if so, the nature of the inter-jurisdictional relationship.
     *
     *
     *                            OpenIssue: This code could be moved to LOINC if it can be done before there are significant implemenations using it.
     */
    CaseDiseaseImportedObservation = "CDIO",
    /**
     * CDRC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedDiagnosticRadiologyCare = "CDRC",
    /**
     * CDSREV: A person reviews a recommendation/assessment provided automatically by a clinical decision support application for a given patient.
     */
    ClinicalDecisionSupportInterventionReview = "CDSREV",
    /**
     * CEL: Policy for handling information related to a celebrity (people of public interest (VIP), which will be afforded heightened confidentiality.  Celebrities are people of public interest (VIP) about whose information an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive may include health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note:  For use within an enterprise in which the information subject is deemed a celebrity or very important person.  If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    CelebrityInformationSensitivity = "CEL",
    /**
     * CEMC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedEmergencyMedicineCare = "CEMC",
    /**
     * CEPI: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedEpilepsyCare = "CEPI",
    /**
     * CFEL: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedFrailElderlyCare = "CFEL",
    /**
     * CFPC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedFamilyPracticeCare = "CFPC",
    /**
     * CFWD: An amount still owing to the payor but the payment is 0$ and this cannot be settled until a future payment is made.
     */
    CarryForwardAdjusment = "CFWD",
    /**
     * CHAR: Definition: A program that covers the cost of services provided directly to a beneficiary who typically has no other source of coverage without charge.
     */
    CharityProgram = "CHAR",
    /**
     * CHFC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedHeartFailureCare = "CHFC",
    /**
     * CHK: A written order to a bank to pay the amount specified from funds on deposit.
     */
    Cheque = "CHK",
    /**
     * CHLDCARE: Description: Exposure participants' interaction occurred in a child care setting
     */
    DayCareChildCareInteraction = "CHLDCARE",
    /**
     * CHR: Provision of recurring care for chronic illness.
     */
    Chronic = "CHR",
    /**
     * CHRG: A type of transaction that represents a charge for a service or product.  Expressed in monetary terms.
     */
    StandardCharge = "CHRG",
    /**
     * CHRO: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedHighRiskObstetricsCare = "CHRO",
    /**
     * CHRON: Definition:A list of medications which are expected to be continued beyond the present order and which the patient should be assumed to be taking unless explicitly stopped.
     */
    ContinuousChronic = "CHRON",
    /**
     * CHYP: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedHyperlipidemiaCare = "CHYP",
    /**
     * CIMC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedInternalMedicineCare = "CIMC",
    /**
     * CIRCLE: A circle defined by two (column,row) pairs. The first point is the center of the circle and the second point is a point on the perimeter of the circle.
     */
    Circle = "CIRCLE",
    /**
     * CLINNOTEE: A clinician enters a clinical note about a given patient
     */
    ClinicalNoteEntryTask = "CLINNOTEE",
    /**
     * CLINNOTEREV: A person reviews a clinical note of a given patient.
     */
    ClinicalNoteReviewTask = "CLINNOTEREV",
    /**
     * CLSSRM: Description: The class room associated with the patient during the immunization event.
     */
    Classroom = "CLSSRM",
    /**
     * CMGC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedClinicalMolecularGeneticsCare = "CMGC",
    /**
     * CMIH: Description:.
     */
    CertifiedMigraineHeadacheCare = "CMIH",
    /**
     * CMPMSRMTH: Indicates what method is used in a quality measure to combine the component measure results included in an composite measure.
     */
    CompositeMeasureMethod = "CMPMSRMTH",
    /**
     * CMPMSRSCRWGHT: An attribute of a quality measure describing the weight this component measure score is to carry in determining the overall composite measure final score. The value is real value greater than 0 and less than 1.0. Each component measure score will be multiplied by its CMPMSRSCRWGHT and then summed with the other component measures to determine the final overall composite measure score. The sum across all CMPMSRSCRWGHT values within a single composite measure SHALL be 1.0. The value assigned is scoped to the composite measure referencing this component measure only.
     */
    ComponentMeasureScoringWeight = "CMPMSRSCRWGHT",
    /**
     * CMSC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedMultipleSclerosisCare = "CMSC",
    /**
     * CNEC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board
     */
    CertifiedNeurologyCare = "CNEC",
    /**
     * CNMC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedNuclearMedicineCare = "CNMC",
    /**
     * CNQC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedNeurologyWithSpecialQualificationsInChildNeurologyCare = "CNQC",
    /**
     * CNSC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedNeurologicalSurgeryCare = "CNSC",
    /**
     * COBSCAT: Definition:All information pertaining to a patient's common observation records (height, weight, blood pressure, temperature, etc.).
     */
    CommonObservationCategory = "COBSCAT",
    /**
     * CODE_DEPREC: Description:The specified code has been deprecated and should no longer be used.  Select another code from the code system.
     */
    CodeHasBeenDeprecated = "CODE_DEPREC",
    /**
     * CODE_INVAL: Description:The specified code is not valid against the list of codes allowed for the element.
     */
    CodeIsNotValid = "CODE_INVAL",
    /**
     * COGC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedObstetricsAndGynecologyCare = "COGC",
    /**
     * COGN: Policy for handling information related to cognitive disability disorders and conditions caused by these disorders, which are afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     *
     *                         Examples may include dementia, traumatic brain injury, attention deficit, hearing and visual disability such as dyslexia and other disorders and related conditions which impair learning and self-sufficiency.  However, the cognitive disabilities to which this term may apply  versus other behavioral health categories varies by jurisdiction and organizational policy in part due to overlap with other behavioral health conditions. Implementers should constrain to those diagnoses applicable in the domain in which this code is used.
     */
    CognitiveDisabilityInformationSensitivity = "COGN",
    /**
     * COIN: That portion of the eligible charges which a covered party must pay for each service and/or product. It is a percentage of the eligible amount for the service/product that is typically charged after the covered party has met the policy deductible.  This amount represents the covered party's coinsurance that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results.
     */
    Coinsurance = "COIN",
    /**
     * COINS: The covered party pays a percentage of the cost of covered services.
     */
    CoInsurance = "COINS",
    /**
     * COJR: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedOrthopedicJointReplacementCare = "COJR",
    /**
     * COL: Definition: An automobile insurance policy under which the insurance company will cover the cost of damages to an automobile owned by the named insured that are caused by accident or intentionally by another party.
     */
    CollisionCoveragePolicy = "COL",
    /**
     * COMC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedOccupationalMedicineCare = "COMC",
    /**
     * CommonRule: U.S. Federal regulations governing the protection of human subjects in research (codified at Subpart A of 45 CFR part 46) that has been adopted by 15 U.S. Federal departments and agencies in an effort to promote uniformity, understanding, and compliance with human subject protections. Existing regulations governing the protection of human subjects in Food and Drug Administration (FDA)-regulated research (21 CFR parts 50, 56, 312, and 812) are separate from the Common Rule but include similar requirements.
     *
     *
     *                            Definition: U.S. federal laws governing research-related privacy policies.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.
     */
    CommonRule = "CommonRule",
    /**
     * COMPLY: There may be an issue with the patient complying with the intentions of the proposed therapy
     */
    ComplianceAlert = "COMPLY",
    /**
     * COMPT: This is the healthcare analog to the US Intelligence Community's concept of a Special Access Program.  Compartment codes may be used in as a field value in an initiator's clearance to indicate permission to access and use an IT Resource with a security label having the same compartment value in security category label field.
     *
     *                         Map: Aligns with ISO 2382-8 definition of Compartment - "A division of data into isolated blocks with separate security controls for the purpose of reducing risk."
     */
    Compartment = "COMPT",
    /**
     * CONC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedOncologyCare = "CONC",
    /**
     * COND: Proposed therapy may be inappropriate or contraindicated due to an existing/recent patient condition or diagnosis
     */
    ConditionAlert = "COND",
    /**
     * CONDLIST: List of condition observations.
     */
    ConditionList = "CONDLIST",
    /**
     * CONSUMPTION: The quantity of specimen that is used each time the equipment uses this substance
     */
    ConsumptionVolume = "CONSUMPTION",
    /**
     * CONT: Transaction counts and value totals by Contract Identifier.
     */
    Contract = "CONT",
    /**
     * CONTF: A billing arrangement where a Provider charges a lump sum to provide a particular volume of one or more interventions/procedures or groups of interventions/procedures.
     */
    ContractFunding = "CONTF",
    /**
     * CONVEYNC: Description: An interaction where the exposure participants traveled in/on the same vehicle (not necessarily concurrently, e.g. both are passengers of the same plane, but on different flights of that plane).
     */
    CommonConveyanceInteraction = "CONVEYNC",
    /**
     * Code: COPAY
     */
    COPAY = "COPAY",
    /**
     * COPAYMENT: That portion of the eligible charges which a covered party must pay for each service and/or product. It is a defined amount per service/product of the eligible amount for the service/product. This amount represents the covered party's copayment that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results.
     */
    PatientCoPay = "COPAYMENT",
    /**
     * COPC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedOphthalmologyCare = "COPC",
    /**
     * COPD: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedChronicObstructivePulmonaryDiseaseCare = "COPD",
    /**
     * COPY: Identifies the organization(s) who own the intellectual property represented by the eMeasure.
     */
    Copyright = "COPY",
    /**
     * CORT: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedOrganTransplantCare = "CORT",
    /**
     * COSC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedOrthopaedicSurgeryCare = "COSC",
    /**
     * COTC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedOtolaryngologyCare = "COTC",
    /**
     * COVGE: Insurance coverage problems have been encountered. Additional explanation information to be supplied.
     */
    CoverageProblem = "COVGE",
    /**
     * COVMX: Definition: Codes representing the maximum coverate or financial participation requirements.
     */
    CoverageMaximum = "COVMX",
    /**
     * COVPOL: Description:A mandate, obligation, requirement, rule, or expectation unilaterally imposed on benefit coverage under a policy or program by a sponsor, underwriter or payor on:
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
    BenefitPolicy = "COVPOL",
    /**
     * COVPRD: Codes representing the time period during which coverage is available; or financial participation requirements are in effect.
     */
    CoveragePeriod = "COVPRD",
    /**
     * CPAD: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedParkinsonsDiseaseCare = "CPAD",
    /**
     * CPEC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedPediatricsCare = "CPEC",
    /**
     * CPGC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedPhDMedicalGeneticsCare = "CPGC",
    /**
     * CPHC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedPublicHealthAndGeneralPreventiveMedicineCare = "CPHC",
    /**
     * CPINV: Clinical product invoice where the Invoice Grouping contains one or more billable item and is supported by clinical product(s).
     *
     *                         For example, a crutch or a wheelchair.
     */
    ClinicalProductInvoice = "CPINV",
    /**
     * CPLYCC: Custodian security system must retrieve, evaluate, and comply with the information handling directions of the Confidentiality Code associated with an information target.
     */
    ComplyWithConfidentialityCode = "CPLYCC",
    /**
     * CPLYCD: Custodian security system must retrieve, evaluate, and comply with applicable information subject consent directives.
     */
    ComplyWithConsentDirective = "CPLYCD",
    /**
     * CPLYJPP: Custodian security system must retrieve, evaluate, and comply with applicable jurisdictional privacy policies associated with the target information.
     */
    ComplyWithJurisdictionalPrivacyPolicy = "CPLYJPP",
    /**
     * CPLYOPP: Custodian security system must retrieve, evaluate, and comply with applicable organizational privacy policies associated with the target information.
     */
    ComplyWithOrganizationalPrivacyPolicy = "CPLYOPP",
    /**
     * CPLYOSP: Custodian security system must retrieve, evaluate, and comply with the organizational security policies associated with the target information.
     */
    ComplyWithOrganizationalSecurityPolicy = "CPLYOSP",
    /**
     * CPLYPOL: Custodian security system must retrieve, evaluate, and comply with applicable policies associated with the target information.
     */
    ComplyWithPolicy = "CPLYPOL",
    /**
     * CPND: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedPneumoniaDiseaseCare = "CPND",
    /**
     * CPNDDRGING: A grouping of invoice element groups and details including the ones specifying the compound ingredients being invoiced. It may also contain generic detail items such as markup.
     */
    CompoundDrugInvoiceGroup = "CPNDDRGING",
    /**
     * CPNDINDING: A grouping of invoice element details including the one specifying an ingredient drug being invoiced. It may also contain generic detail items such as tax or markup.
     */
    CompoundIngredientInvoiceGroup = "CPNDINDING",
    /**
     * CPNDSUPING: A grouping of invoice element groups and details including the ones specifying the compound supplies being invoiced. It may also contain generic detail items such as markup.
     */
    CompoundSupplyInvoiceGroup = "CPNDSUPING",
    /**
     * CPRC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedPhysicalMedicineAndRehabilitationCare = "CPRC",
    /**
     * CPSC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedPlasticSurgeryCare = "CPSC",
    /**
     * CPST: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedPrimaryStrokeCenterCare = "CPST",
    /**
     * CPTM: Description:CPT modifier codes are found in Appendix A of CPT 2000 Standard Edition.
     */
    CPTModifierCodes = "CPTM",
    /**
     * CPYC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedPsychiatryCare = "CPYC",
    /**
     * CREACT: Description:Proposed therapy may be inappropriate or contraindicated because of a common but non-patient specific reaction to the product.
     *
     *
     *                            Example:There is no record of a specific sensitivity for the patient, but the presence of the sensitivity is common and therefore caution is warranted.
     */
    CommonReactionAlert = "CREACT",
    /**
     * CRIME: Definition: A program that covers the cost of services provided to crime victims for injuries or losses related to the occurrence of a crime.
     */
    CrimeVictimProgram = "CRIME",
    /**
     * CRIT: A clinical judgment as to the worst case result of a future exposure (including substance administration). When the worst case result is assessed to have a life-threatening or organ system threatening potential, it is considered to be of high criticality.
     */
    Criticality = "CRIT",
    /**
     * CROC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedRadiationOncologyCare = "CROC",
    /**
     * CRPC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedRadiologicalPhysicsCare = "CRPC",
    /**
     * CRS: Summary of relevant clinical guidelines or other clinical recommendations supporting this eMeasure.
     */
    ClinicalRecommendationStatement = "CRS",
    /**
     * CSDM: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedStrokeDiseaseManagementCare = "CSDM",
    /**
     * CSIC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedSickleCellCare = "CSIC",
    /**
     * CSINV: Clinical Services Invoice which can be used to describe a single service, multiple services or repeated services.
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
    ClinicalServiceInvoice = "CSINV",
    /**
     * CSLD: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedSleepDisordersCare = "CSLD",
    /**
     * CSPINV: A clinical Invoice Grouping consisting of one or more services and one or more product.  Billing for these service(s) and product(s) are supported by multiple clinical billable events (acts).
     *
     *                         All items in the Invoice Grouping must be adjudicated together to be acceptable to the Adjudicator.
     *
     *                         For example , a brace (product) invoiced together with the fitting (service).
     */
    ClinicalServiceAndProduct = "CSPINV",
    /**
     * CSPT: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedSpineTreatmentCare = "CSPT",
    /**
     * CSUC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedSurgeryCare = "CSUC",
    /**
     * CTBU: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedTraumaBurnCenterCare = "CTBU",
    /**
     * CTCOMPT: Care coordination across participants in a care plan requires sharing of a healthcare consumer's information specific to that workflow.  A care team member should only have access to that information while participating in that workflow or for other authorized uses.
     *
     *                         Security Compartment Labels assigned to a consumer's information use in care coordination workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a care team member workflow who is requesting access to that information
     */
    CareTeamCompartment = "CTCOMPT",
    /**
     * CTLSUB: A monitoring program that focuses on narcotics and/or commonly abused substances that are subject to legal restriction.
     */
    ControlledSubstance = "CTLSUB",
    /**
     * CTMO: An observation that states the mechanism by which disease was acquired by the living subject involved in the public health case.
     *
     *
     *                            OpenIssue: This code could be moved to LOINC if it can be done before there are significant implemenations using it.
     */
    CaseTransmissionModeObservation = "CTMO",
    /**
     * CTSC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedThoracicSurgeryCare = "CTSC",
    /**
     * CURC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedUrologyCare = "CURC",
    /**
     * CURMEDLIST: List of current medications.
     */
    CurrentMedicationList = "CURMEDLIST",
    /**
     * CURRENT: The current quantity of the specimen, i.e., initial quantity minus what has been actually used.
     */
    CurrentVolume = "CURRENT",
    /**
     * CVDC: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedVascularDiseasesCare = "CVDC",
    /**
     * CVSC: Description:Scope of responsibility taken on for specialty care as defined by the respective Specialty Board.
     */
    CertifiedVascularSurgeryCare = "CVSC",
    /**
     * CWMA: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedWoundManagementCare = "CWMA",
    /**
     * CWOH: Description:Scope of responsibility taken on by an organization for care of a patient as defined by the disease management certification agency.
     */
    CertifiedWomenQuoteSHealthCare = "CWOH",
    /**
     * DACT: Description:Proposed therapy may be contraindicated or ineffective based on an existing or recent drug therapy.
     */
    DrugActionDetectedIssue = "DACT",
    /**
     * DALG: An allergy to a pharmaceutical product.
     */
    DrugAllergy = "DALG",
    /**
     * DAY: Transaction counts and value totals for each calendar day within the date range specified.
     */
    Day = "DAY",
    /**
     * DDP: Electronic Funds Transfer (EFT) deposit into the payee's bank account
     */
    DirectDeposit = "DDP",
    /**
     * DECLASSIFYLABEL: Custodian security system must declassify information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as unclassified in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    DeclassifySecurityLabel = "DECLASSIFYLABEL",
    /**
     * Code: DEDUCT
     */
    DEDUCT = "DEDUCT",
    /**
     * DEDUCTIBLE: That portion of the eligible charges which a covered party must pay in a particular period (e.g. annual) before the benefits are payable by the adjudicator. This amount represents the covered party's deductible that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results.
     */
    Deductible = "DEDUCTIBLE",
    /**
     * DEF: Description of individual terms, provided as needed.
     */
    Definition = "DEF",
    /**
     * DEFB: The removal of fibrin from whole blood or plasma through physical or chemical means
     */
    Defibrination = "DEFB",
    /**
     * DEID: Custodian system must strip information of data that would allow the identification of the source of the information or the information subject.
     */
    Deidentify = "DEID",
    /**
     * DELAU: Custodian system must remove target information from access after use.
     */
    DeleteAfterUse = "DELAU",
    /**
     * DELEPOL: Delegation policies specify which actions subjects are allowed to delegate to others. A delegation policy thus specifies an authorisation to delegate. Subjects must already possess the access rights to be delegated.
     *
     *                         Delegation policies are aimed at subjects delegating rights to servers or third parties to perform actions on their behalf and are not meant to be the means by which security administrators would assign rights to subjects. A negative delegation policy identifies what delegations are forbidden.
     *
     *                         A Delegation policy specifies the authorisation policy from which delegated rights are derived, the grantors, which are the entities which can delegate these access rights, and the grantees, which are the entities to which the access rights can be delegated. There are two types of delegation policy, positive and negative. (Based on PONDERS)
     */
    DelegationPolicy = "DELEPOL",
    /**
     * DEMO: Policy for handling all demographic information about an information subject, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to all demographic about an information subject, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    AllDemographicInformationSensitivity = "DEMO",
    /**
     * DEMOCAT: Definition:All information pertaining to a patient's demographics (such as name, date of birth, gender, address, etc).
     */
    DemographicsCategory = "DEMOCAT",
    /**
     * DENEX: Criteria which specify subjects who should be removed from the eMeasure population and denominator before determining if numerator criteria are met. Denominator exclusions are used in proportion and ratio measures to help narrow the denominator.
     */
    DenominatorExclusions = "DENEX",
    /**
     * DENEXCEP: Criteria which specify the removal of a subject, procedure or unit of measurement from the denominator, only if the numerator criteria are not met. Denominator exceptions allow for adjustment of the calculated score for those providers with higher risk populations. Denominator exceptions are used only in proportion eMeasures. They are not appropriate for ratio or continuous variable eMeasures. Denominator exceptions allow for the exercise of clinical judgment and should be specifically defined where capturing the information in a structured manner fits the clinical workflow. Generic denominator exception reasons used in proportion eMeasures fall into three general categories:
     *
     *
     *                            Medical reasons
     *                            Patient (or subject) reasons
     *                            System reasons
     */
    DenominatorExceptions = "DENEXCEP",
    /**
     * DENOM: Criteria for specifying the entities to be evaluated by a specific quality measure, based on a shared common set of characteristics (within a specific measurement set to which a given measure belongs).  The denominator can be the same as the initial population, or it may be a subset of the initial population to further constrain it for the purpose of the eMeasure. Different measures within an eMeasure set may have different denominators. Continuous Variable eMeasures do not have a denominator, but instead define a measure population.
     */
    Denominator = "DENOM",
    /**
     * DENTAL: Definition: A health insurance policy that that covers benefits for dental services.
     */
    DentalCarePolicy = "DENTAL",
    /**
     * DENTPRG: Definition: A public or government health program that administers and funds coverage for dental care to assist program eligible who meet financial and health status criteria.
     */
    DentalProgram = "DENTPRG",
    /**
     * DERMTRNS: Communication of an agent from a living subject or environmental source to a living subject via agent migration through intact skin.
     */
    TransdermalTransmission = "DERMTRNS",
    /**
     * DF: A fill providing sufficient supply for one day
     */
    DailyFill = "DF",
    /**
     * DIA: Policy for handling information related to a diagnosis, health condition or health problem, which will be afforded heightened confidentiality.  Diagnostic, health condition or health problem related information may be deemed sensitive by organizational policy, and require heightened confidentiality.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to  diagnostic, health condition or health problem related information deemed sensitive.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    DiagnosisInformationSensitivity = "DIA",
    /**
     * DIAGLISTE: A clinician enters a diagnosis for a given patient.
     */
    DiagnosisListEntryTask = "DIAGLISTE",
    /**
     * DIAGLISTREV: A person reviews a list of diagnoses of a given patient.
     */
    DiagnosisListReviewTask = "DIAGLISTREV",
    /**
     * DICAT: Definition:All information pertaining to a patient's diagnostic image records (orders &amp; results).
     */
    DiagnosticImageCategory = "DICAT",
    /**
     * DIET: Code set to define specialized/allowed diets
     */
    Diet = "DIET",
    /**
     * DILUTION: An observation that reports the dilution of a sample.
     */
    ActSpecObsDilutionCode = "DILUTION",
    /**
     * DINT: Hypersensitivity resulting in an adverse reaction upon exposure to a drug.
     */
    DrugIntolerance = "DINT",
    /**
     * DIS: Definition: An insurance policy that provides a regular payment to compensate for income lost due to the covered party's inability to work because of illness or injury.
     */
    DisabilityInsurancePolicy = "DIS",
    /**
     * DISC: Disclaimer information for the eMeasure.
     */
    Disclaimer = "DISC",
    /**
     * DISCHINSTE: A person provides a discharge instruction to a patient.
     */
    DischargeInstructionEntry = "DISCHINSTE",
    /**
     * DISCHSUME: A clinician enters a discharge summary for a given patient.
     */
    DischargeSummaryEntryTask = "DISCHSUME",
    /**
     * DISCHSUMREV: A person reviews a discharge summary of a given patient.
     */
    DischargeSummaryReviewTask = "DISCHSUMREV",
    /**
     * DISCMEDLIST: List of discharge medications.
     */
    DischargeMedicationList = "DISCMEDLIST",
    /**
     * DISDX: Discharge diagnosis are the diagnoses documented for administrative purposes as the time of hospital discharge.
     */
    DischargeDiagnosis = "DISDX",
    /**
     * DISEASE: Definition: A health insurance policy that covers benefits for healthcare services provided for named conditions under the policy, e.g., cancer, diabetes, or HIV-AIDS.
     */
    DiseaseSpecificPolicy = "DISEASE",
    /**
     * DISEASEPRG: Definition: A public or government health program that administers and funds coverage for health and social services to assist program eligible who meet financial and health status criteria related to a particular disease.
     *
     *
     *                            Example: Reproductive health, sexually transmitted disease, and end renal disease programs.
     */
    PublicHealthProgram = "DISEASEPRG",
    /**
     * DISPLAY: The adjudication result associated is to be displayed to the receiver of the adjudication result.
     */
    Display = "DISPLAY",
    /**
     * DM: A diet that uses carbohydrates sparingly.  Typically with a restriction in daily energy content (e.g. 1600-2000 kcal).
     */
    DiabetesMellitusDiet = "DM",
    /**
     * DN: Diner's Club
     */
    DinerQuoteSClub = "DN",
    /**
     * DNAINT: Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure
     */
    DrugNonAllergyIntolerance = "DNAINT",
    /**
     * DNTL: Provision of treatment for oral health and/or dental surgery.
     */
    Dental = "DNTL",
    /**
     * DOB: Policy for handling information related to an information subject's date of birth, which will be afforded heightened confidentiality.Policies may govern sensitivity of information related to an information subject's date of birth, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    DateOfBirthInformationSensitivity = "DOB",
    /**
     * DOCUMENT: Description: Document Attachment
     */
    Document = "DOCUMENT",
    /**
     * DOSE: Proposed dosage instructions for therapy differ from standard practice.
     */
    DosageProblem = "DOSE",
    /**
     * DOSECOND: Description:Proposed dosage is inappropriate due to patient's medical condition.
     */
    DosageConditionAlert = "DOSECOND",
    /**
     * DOSEDUR: Proposed length of therapy differs from standard practice.
     */
    DoseDurationAlert = "DOSEDUR",
    /**
     * DOSEDURH: Proposed length of therapy is longer than standard practice
     */
    DoseDurationHighAlert = "DOSEDURH",
    /**
     * DOSEDURHIND: Proposed length of therapy is longer than standard practice for the identified indication or diagnosis
     */
    DoseDurationHighForIndicationAlert = "DOSEDURHIND",
    /**
     * DOSEDURL: Proposed length of therapy is shorter than that necessary for therapeutic effect
     */
    DoseDurationLowAlert = "DOSEDURL",
    /**
     * DOSEDURLIND: Proposed length of therapy is shorter than standard practice for the identified indication or diagnosis
     */
    DoseDurationLowForIndicationAlert = "DOSEDURLIND",
    /**
     * DOSEH: Proposed dosage exceeds standard practice
     */
    HighDoseAlert = "DOSEH",
    /**
     * DOSEHIND: High Dose for Indication Alert
     */
    HighDoseForIndicationAlert = "DOSEHIND",
    /**
     * DOSEHINDA: Proposed dosage exceeds standard practice for the patient's age
     */
    HighDoseForAgeAlert = "DOSEHINDA",
    /**
     * DOSEHINDSA: Proposed dosage exceeds standard practice for the patient's height or body surface area
     */
    HighDoseForHeightSurfaceAreaAlert = "DOSEHINDSA",
    /**
     * DOSEHINDW: Proposed dosage exceeds standard practice for the patient's weight
     */
    HighDoseForWeightAlert = "DOSEHINDW",
    /**
     * Code: DOSEIND
     */
    DOSEIND = "DOSEIND",
    /**
     * DOSEIVL: Proposed dosage interval/timing differs from standard practice
     */
    DoseIntervalAlert = "DOSEIVL",
    /**
     * DOSEIVLIND: Proposed dosage interval/timing differs from standard practice for the identified indication or diagnosis
     */
    DoseIntervalForIndicationAlert = "DOSEIVLIND",
    /**
     * DOSEL: Proposed dosage is below suggested therapeutic levels
     */
    LowDoseAlert = "DOSEL",
    /**
     * DOSELIND: Low Dose for Indication Alert
     */
    LowDoseForIndicationAlert = "DOSELIND",
    /**
     * DOSELINDA: Proposed dosage is below suggested therapeutic levels for the patient's age
     */
    LowDoseForAgeAlert = "DOSELINDA",
    /**
     * DOSELINDSA: Proposed dosage is below suggested therapeutic levels for the patient's height or body surface area
     */
    LowDoseForHeightSurfaceAreaAlert = "DOSELINDSA",
    /**
     * DOSELINDW: Proposed dosage is below suggested therapeutic levels for the patient's weight
     */
    LowDoseForWeightAlert = "DOSELINDW",
    /**
     * DOWNGRDLABEL: Custodian security system must downgrade information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as classified at a less protected level in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    DowngradeSecurityLabel = "DOWNGRDLABEL",
    /**
     * DRG: Proposed therapy may interact with an existing or recent drug therapy
     */
    DrugInteractionAlert = "DRG",
    /**
     * DRGIS: Policy for handling information related to a drug, which will be afforded heightened confidentiality. Drug information may be deemed sensitive by organizational policy, and require heightened confidentiality.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to drug information deemed sensitive.   If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    DrugInformationSensitivity = "DRGIS",
    /**
     * DRGRHB: Provision of treatment for drug abuse.
     */
    DrugRehab = "DRGRHB",
    /**
     * DRIVLABEL: Custodian security system must assign and bind security labels derived from compilations of information by aggregation or disaggregation in order to classify information compiled in the information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    DeriveSecurityLabel = "DRIVLABEL",
    /**
     * DRUG: The introduction of a drug into a subject with the intention of altering its biologic state with the intent of improving its health status.
     */
    DrugTherapy = "DRUG",
    /**
     * DRUGING: A grouping of invoice element details including the one specifying the drug being invoiced. It may also contain generic detail items such as markup.
     */
    DrugInvoiceGroup = "DRUGING",
    /**
     * DRUGPOL: Definition: A health insurance policy that covers benefits for prescription drugs, pharmaceuticals, and supplies.
     */
    DrugPolicy = "DRUGPOL",
    /**
     * DRUGPRG: Definition: A public or government health program that administers and funds coverage for prescription drugs to assist program eligible who meet financial and health status criteria.
     */
    DrugProgram = "DRUGPRG",
    /**
     * DSC: A reduction in the amount charged as a percentage of the amount. For example a 5% discount for volume purchase.
     */
    Discount = "DSC",
    /**
     * DUPTHPCLS: Description:The proposed therapy appears to have the same intended therapeutic benefit as an existing therapy, though the specific mechanisms of action vary.
     */
    DuplicateTherapeuticAlassAlert = "DUPTHPCLS",
    /**
     * DUPTHPGEN: Description:The proposed therapy appears to have the same intended therapeutic benefit as an existing therapy and uses the same mechanisms of action as the existing therapy.
     */
    DuplicateGenericAlert = "DUPTHPGEN",
    /**
     * DUPTHPY: The proposed therapy appears to duplicate an existing therapy
     */
    DuplicateTherapyAlert = "DUPTHPY",
    /**
     * DV: Discover Card
     */
    DiscoverCard = "DV",
    /**
     * DVD: Policy for handling information related to developmental disability disorders and conditions caused by these disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     *
     *                         A diverse group of chronic conditions that are due to mental or physical impairments impacting activities of daily living, self-care, language acuity, learning, mobility, independent living and economic self-sufficiency. Examples may include Down syndrome and  Autism spectrum. However, the developmental disabilities to which this term applies versus other behavioral health categories varies by jurisdiction and organizational policy in part due to overlap with other behavioral health conditions.  Implementers should constrain to those diagnoses applicable in the domain in which this code is used.
     */
    DevelopmentalDisabilityInformationSensitivity = "DVD",
    /**
     * DX: Includes all codes defining types of indications such as diagnosis, symptom and other indications such as contrast agents for lab tests.
     */
    ObservationDiagnosisTypes = "DX",
    /**
     * EALG: An allergy to a substance other than a drug or a food.  E.g. Latex, pollen, etc.
     */
    EnvironmentalAllergy = "EALG",
    /**
     * EAP: Definition: An employee assistance program is run by an employer or employee organization for the purpose of providing benefits and covering all or part of the cost for employees to receive counseling, referrals, and advice in dealing with stressful issues in their lives. These may include substance abuse, bereavement, marital problems, weight issues, or general wellness issues.  The services are usually provided by a third-party, rather than the company itself, and the company receives only summary statistical data from the service provider. Employee's names and services received are kept confidential.
     */
    EmployeeAssistanceProgram = "EAP",
    /**
     * EDU: Fees deducted on behalf of a payee for tuition and continuing education.
     */
    EducationFees = "EDU",
    /**
     * EFORM: Electronic form with supporting or additional information to follow.
     */
    ElectronicFormToFollow = "EFORM",
    /**
     * EHCPOL: Private insurance policy that provides coverage in addition to other policies (e.g. in addition to a Public Healthcare insurance policy).
     */
    ExtendedHealthcare = "EHCPOL",
    /**
     * EINT: Hypersensitivity resulting in an adverse reaction upon exposure to environmental conditions.
     */
    EnvironmentalIntolerance = "EINT",
    /**
     * ELG: Insurance coverage is in effect for healthcare service(s) and/or product(s).
     */
    Eligible = "ELG",
    /**
     * ELLIPSE: An ellipse defined by four (column,row) pairs, the first two points specifying the endpoints of the major axis and the second two points specifying the endpoints of the minor axis.
     */
    Ellipse = "ELLIPSE",
    /**
     * EM: A supply action where there is no 'valid' order for the supplied medication.  E.g. Emergency vacation supply, weekend supply (when prescriber is unavailable to provide a renewal prescription)
     */
    EmergencySupply = "EM",
    /**
     * EMAUTH: Used to temporarily override normal authorization rules to gain access to data in a case of emergency. Use of this override code will typically be monitored, and a procedure to verify its proper use may be triggered when used.
     */
    EmergencyAuthorizationOverride = "EMAUTH",
    /**
     * EMER: A patient encounter that takes place at a dedicated healthcare service delivery location where the patient receives immediate evaluation and treatment, provided until the patient can be discharged or responsibility for the patient's care is transferred elsewhere (for example, the patient could be admitted as an inpatient or transferred to another facility.)
     */
    Emergency = "EMER",
    /**
     * EMOTDIS: Policy for handling information related to emotional disturbance disorders and conditions caused by these disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     *
     *                         Typical used to characterize behavioral and mental health issues of adolescents where the disorder may be temporarily diagnosed in order to avoid the potential and unnecessary stigmatizing diagnoses of disorder long term.
     */
    EmotionalDisturbanceInformationSensitivity = "EMOTDIS",
    /**
     * EMP: Policy for handling information related to an employee, which will be afforded heightened confidentiality. When a patient is an employee, an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     *
     *
     *                            Usage Note: Policy for handling information related to an employee, which will be afforded heightened confidentiality.  Description:  When a patient is an employee, an enterprise may have a policy that requires heightened confidentiality.  Information deemed sensitive typically includes health information and patient role information including patient status, demographics, next of kin, and location.
     */
    EmployeeInformationSensitivity = "EMP",
    /**
     * EMPL: Policy for handling information related to an employer which is deemed classified to protect an employee who is the information subject, and which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to an employer, such as law enforcement or national security, the identity of which could impact the privacy, well-being, or safety of an information subject who is an employee.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    EmployerInformationSensitivity = "EMPL",
    /**
     * EMRGONLY: This general consent directive specifically limits disclosure of health information for purpose of emergency treatment. Additional parameters may further limit the disclosure to specific users, roles, duration, types of information, and impose uses obligations.
     *
     *
     *                            Definition: Opt-in to disclosure of health information for emergency only consent directive.
     */
    EmergencyOnly = "EMRGONLY",
    /**
     * ENAINT: Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure
     */
    EnvironmentalNonAllergyIntolerance = "ENAINT",
    /**
     * ENCRYPT: Custodian system must render information unreadable by algorithmically transforming plaintext into ciphertext.
     *
     *
     *
     *
     *                            Usage Notes: A mathematical transposition of a file or data stream so that it cannot be deciphered at the receiving end without the proper key. Encryption is a security feature that assures that only the parties who are supposed to be participating in a videoconference or data transfer are able to do so. It can include a password, public and private keys, or a complex combination of all.  (Per Infoway.)
     */
    Encrypt = "ENCRYPT",
    /**
     * ENCRYPTR: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext when "at rest" or in storage.
     */
    EncryptAtRest = "ENCRYPTR",
    /**
     * ENCRYPTT: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext while "in transit" or being transported by any means.
     */
    EncryptInTransit = "ENCRYPTT",
    /**
     * ENCRYPTU: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext while in use such that operations permitted on the target information are limited by the license granted to the end user.
     */
    EncryptInUse = "ENCRYPTU",
    /**
     * ENDC: A baseline value for the measured test that is inherently contained in the diluent.  In the calculation of the actual result for the measured test, this baseline value is normally considered.
     */
    EndogenousContent = "ENDC",
    /**
     * ENDLATE: Proposed therapy may be inappropriate or ineffective because the end of administration is too close to another planned therapy
     */
    EndTooLateAlertENDLATE = "ENDLATE",
    /**
     * ENDRENAL: Definition: A public or government program that administers publicly funded coverage of kidney dialysis and kidney transplant services.
     *
     *                         Example: In the U.S., the Medicare End-stage Renal Disease program (ESRD), the National Kidney Foundation (NKF) American Kidney Fund (AKF) The Organ Transplant Fund.
     */
    EndRenalProgram = "ENDRENAL",
    /**
     * ENVTRNS: Communication of an agent from an environmental surface or source to a living subject by direct contact.
     */
    EnvironmentalExposureTransmission = "ENVTRNS",
    /**
     * EPYMT: Fees deducted on behalf of a payee for charges based on a shorter payment frequency (i.e. next day versus biweekly payments.
     */
    EarlyPaymentFee = "EPYMT",
    /**
     * ESA: A premium on a service fee is requested because, due to extenuating circumstances, the service took an extraordinary amount of time or supplies.
     */
    ExtraordinaryServiceAssessment = "ESA",
    /**
     * ETH: Policy for handling alcohol or drug-abuse information, which will be afforded heightened confidentiality.  Information handling protocols based on organizational policies related to alcohol or drug-abuse information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    SubstanceAbuseInformationSensitivity = "ETH",
    /**
     * ETHUD: Policy for handling information related to alcohol use disorders and conditions caused by these disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    AlcoholUseDisorderInformationSensitivity = "ETHUD",
    /**
     * EVNFCTS: Domain provides codes that qualify the ActLabObsEnvfctsCode domain. (Environmental Factors)
     */
    ActSpecObsEvntfctsCode = "EVNFCTS",
    /**
     * EWB: Definition: An insurance policy under a benefit plan run by an employer or employee organization for the purpose of providing benefits other than pension-related to employees and their families. Typically provides health-related benefits, benefits for disability, disease or unemployment, or day care and scholarship benefits, among others.  An employer sponsored health policy includes coverage of health care expenses arising from sickness or accidental injury, coverage for on-site medical clinics or for dental or vision benefits, which are typically provided under a separate policy.  Coverage excludes health care expenses covered by accident or disability, workers' compensation, liability or automobile insurance.
     */
    EmployeeWelfareBenefitPlanPolicy = "EWB",
    /**
     * F: Description:Indicates that a result is complete.  No further results are to come.  This maps to the 'complete' state in the observation result status code.
     */
    Final = "F",
    /**
     * FALG: An allergy to a substance generally consumed for nutritional purposes.
     */
    FoodAllergy = "FALG",
    /**
     * FALLRISK: A person reviews a Falls Risk Assessment Instrument report of a given patient.
     */
    FallsRiskAssessmentInstrumentTask = "FALLRISK",
    /**
     * FAST: No enteral intake of foot or liquids  whatsoever, no smoking.  Typically 6 to 8 hours before anesthesia.
     */
    Fasting = "FAST",
    /**
     * FAX: Fax with supporting or additional information to follow.
     */
    FaxToFollow = "FAX",
    /**
     * FD: Description: The introduction of material into a subject with the intent of providing nutrition or other dietary supplements (e.g. minerals or vitamins).
     */
    Food = "FD",
    /**
     * FDACOATING: FDA label coating
     */
    Coating = "FDACOATING",
    /**
     * FDACOLOR: FDA label color
     */
    Color = "FDACOLOR",
    /**
     * FDAIMPRINTCD: FDA label imprint code
     */
    ImprintCode = "FDAIMPRINTCD",
    /**
     * FDALOGO: FDA label logo
     */
    Logo = "FDALOGO",
    /**
     * FDASCORING: FDA label scoring
     */
    Scoring = "FDASCORING",
    /**
     * FDASHAPE: FDA label shape
     */
    Shape = "FDASHAPE",
    /**
     * FDASIZE: FDA label size
     */
    Size = "FDASIZE",
    /**
     * FECTRNS: Communication of an agent from a living subject or environmental source to a living subject through oral contact with material contaminated by person or animal fecal material.
     */
    FecalOralTransmission = "FECTRNS",
    /**
     * FF: The initial fill against an order.  (This includes initial fills against refill orders.)
     */
    FirstFill = "FF",
    /**
     * FFC: A first fill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets).
     */
    FirstFillComplete = "FFC",
    /**
     * FFCS: A first fill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets) and also where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    FirstFillCompletePartialStrength = "FFCS",
    /**
     * FFP: A first fill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
     */
    FirstFillPartFill = "FFP",
    /**
     * FFPS: A first fill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.) and also where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets)
     */
    FirstFillPartFillPartialStrength = "FFPS",
    /**
     * FFS: A billing arrangement where a Provider charges a separate fee for each intervention/procedure/event or product.
     *
     *                         Fee for Service is used when an individual intervention/procedure/event is used for billing purposes.  In other words, fees are associated with the  intervention/procedure/event.  For example, a specific CCI (Canadian Classification of Interventions) code has an associated fee and is used for billing purposes.
     */
    FeeForService = "FFS",
    /**
     * FFSS: A first fill where the strength supplied is less than the ordered strength. (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    FirstFillPartialStrength = "FFSS",
    /**
     * FFSTOP: Under agreement between the parties (payor and provider), a guaranteed level of income is established for the provider over a specific, pre-determined period of time. The normal course of business for the provider is submission of fee-for-service claims. Should the fee-for-service income during the specified period of time be less than the agreed to amount, a top-up amount is paid to the provider equal to the difference between the fee-for-service total and the guaranteed income amount for that period of time. The details of the agreement may specify (or not) a requirement for repayment to the payor in the event that the fee-for-service income exceeds the guaranteed amount.
     */
    FeeForServiceTopOff = "FFSTOP",
    /**
     * FIBRIN: The Fibrin Index of the specimen. In the case of only differentiating between Absent and Present, recommend using 0 and 1
     */
    Fibrin = "FIBRIN",
    /**
     * FILT: The passage of a liquid through a filter, accomplished by gravity, pressure or vacuum (suction).
     */
    Filtration = "FILT",
    /**
     * FINALDT: The timestamp when the eMeasure was last packaged in the Measure Authoring Tool.
     */
    FinalizedDateTime = "FINALDT",
    /**
     * FINBILL: A billing arrangement where a Provider charges for non-clinical items.  This includes interest in arrears, mileage, etc.  Clinical content is not 	included in Invoices submitted with this type of billing arrangement.
     */
    Financial = "FINBILL",
    /**
     * FININV: Invoice Grouping without clinical justification.  These will not require identification of participants and associations from a clinical context such as patient and provider.
     *
     *                         Examples are interest charges and mileage.
     */
    FinancialInvoice = "FININV",
    /**
     * FINT: Hypersensitivity resulting in an adverse reaction upon exposure to food.
     */
    FoodIntolerance = "FINT",
    /**
     * FLD: A patient encounter that takes place both outside a dedicated service delivery location and outside a patient's residence. Example locations might include an accident site and at a supermarket.
     */
    Field = "FLD",
    /**
     * FLEXP: Definition:  An insurance policy that covers qualified benefits under a Flexible Benefit plan such as group medical insurance, long and short term disability income insurance, group term life insurance for employees only up to $50,000 face amount, specified disease coverage such as a cancer policy, dental and/or vision insurance, hospital indemnity insurance, accidental death and dismemberment insurance, a medical expense reimbursement plan and a dependent care reimbursement plan.
     *
     *
     *                             Discussion: See UnderwriterRoleTypeCode flexible benefit plan which is defined as a benefit plan that allows employees to choose from several life, health, disability, dental, and other insurance plans according to their individual needs. Also known as cafeteria plans.  Authorized under Section 125 of the Revenue Act of 1978.
     */
    FlexibleBenefitPlanPolicy = "FLEXP",
    /**
     * FMCOMPT: Financial management department members who have access to healthcare consumer information as part of a patient account, billing and claims workflows.
     *
     *                         Security Compartment Labels assigned to consumer information used in these workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a financial management workflow who is requesting access to that information.
     */
    FinancialManagementCompartment = "FMCOMPT",
    /**
     * FNAINT: Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure
     */
    FoodNonAllergyIntolerance = "FNAINT",
    /**
     * FNLFEE: Anticipated or actual final fee associated with treating a patient.
     */
    FinalFee = "FNLFEE",
    /**
     * FOMTRNS: Communication of an agent from an non-living material to a living subject through direct contact.
     */
    FomiteTransmission = "FOMTRNS",
    /**
     * FOOD: Proposed therapy may interact with certain foods
     */
    FoodInteractionAlert = "FOOD",
    /**
     * FOODTRNS: Communication of an agent from a food source to a living subject via oral consumption.
     */
    FoodBorneTransmission = "FOODTRNS",
    /**
     * FORM: The adjudication result associated is to be printed on the specified form, which is then provided to the covered party.
     */
    PrintOnForm = "FORM",
    /**
     * FORMAT: Description:The element does not follow the formatting or type rules defined for the field.
     */
    InvalidFormat = "FORMAT",
    /**
     * FORMULA: A diet consisting of a formula feeding, either for an infant or an adult, to provide nutrition either orally or through the gastrointestinal tract via tube, catheter or stoma.
     */
    FormulaDiet = "FORMULA",
    /**
     * FRAMEING: A grouping of invoice element details including the ones specifying the frame fee and the frame dispensing cost that are being invoiced.
     */
    FrameInvoiceGroup = "FRAMEING",
    /**
     * FRAUD: Description:The request is suspected to have a fraudulent basis.
     */
    PotentialFraud = "FRAUD",
    /**
     * FRSTFEE: Anticipated or actual initial fee associated with treating a patient.
     */
    FirstFee = "FRSTFEE",
    /**
     * FS: A supply action to restock a smaller more local dispensary.
     */
    FloorStock = "FS",
    /**
     * FST: Federal tax on transactions such as the Goods and Services Tax (GST)
     */
    FederalSalesTax = "FST",
    /**
     * FULFIL: Definition:The therapy being performed is in some way out of alignment with the requested therapy.
     */
    FulfillmentAlert = "FULFIL",
    /**
     * GARN: Fees deducted on behalf of a payee for charges based on a per-transaction or time-period (e.g. monthly) fee.
     */
    Garnishee = "GARN",
    /**
     * GDIS: Policy for handling genetic disease information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to genetic disease information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    GeneticDiseaseInformationSensitivity = "GDIS",
    /**
     * GEALRT: Proposed therapy is outside of standard practice for a geriatric patient.
     */
    GeriatricAlert = "GEALRT",
    /**
     * GEN: Proposed therapy may be inappropriate or contraindicated due to patient genetic indicators.
     */
    GeneticAlert = "GEN",
    /**
     * GEND: Proposed therapy may be inappropriate or contraindicated due to patient gender.
     */
    GenderAlert = "GEND",
    /**
     * GENDER: Policy for handling information related to an information subject's gender and sexual orientation, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's gender and sexual orientation, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    GenderAndSexualOrientationInformationSensitivity = "GENDER",
    /**
     * GENE: Description: A DNA segment that contributes to phenotype/function. In the absence of demonstrated function a gene may be characterized by sequence, transcription or homology
     */
    Gene = "GENE",
    /**
     * GENRL: General care performed by a general practitioner or family doctor as a responsible provider for a patient.
     */
    General = "GENRL",
    /**
     * GF: Gluten free diet for celiac disease.
     */
    GlutenFree = "GF",
    /**
     * GFTH: The medical service was provided to a patient in good faith that they had medical coverage, although no evidence of coverage was available before service was rendered.
     */
    GoodFaithIndicator = "GFTH",
    /**
     * GISTIER: Description: Accuracy determined as per the GIS tier code system.
     */
    GISTier = "GISTIER",
    /**
     * GOALLIST: List of observations in goal mood.
     */
    GoalList = "GOALLIST",
    /**
     * GOVEMP: Definition: A set of codes used to indicate a government program that is an organized structure for administering and funding coverage of a benefit package for covered parties meeting eligibility criteria, typically related to employment, health and financial status. Government programs are established or permitted by legislation with provisions for ongoing government oversight.  Regulation mandates the structure of the program, the manner in which it is funded and administered, covered benefits, provider types, eligibility criteria and financial participation. A government agency is charged with implementing the program in accordance to the regulation
     *
     *
     *                            Example: Federal employee health benefit program in the U.S.
     */
    GovernmentEmployeeHealthProgram = "GOVEMP",
    /**
     * GRADE: Description: The school grade or level the patient was in when immunized.
     */
    Grade = "GRADE",
    /**
     * GRANTORCHOICE: A grantor's terms of agreement to which a grantee may assent or dissent, and which may include an opportunity for a grantee to request restrictions or extensions.
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
    GrantorChoice = "GRANTORCHOICE",
    /**
     * GTIN: Description:Global Trade Item Number is an identifier for trade items developed by GS1 (comprising the former EAN International and Uniform Code Council).
     */
    GlobalTradeItemNumber = "GTIN",
    /**
     * GUIDE: Used to allow measure developers to provide additional guidance for implementers to understand greater specificity than could be provided in the logic for data criteria.
     */
    Guidance = "GUIDE",
    /**
     * HCPCSA: Description:HCPCS Level II (HCFA-assigned) and Carrier-assigned (Level III) modifiers are reported in Appendix A of CPT 2000 Standard Edition and in the Medicare Bulletin.
     */
    HCPCSLevelIIAndCarrierAssigned = "HCPCSA",
    /**
     * HEALTHREC: Description: Health Record Attachment
     */
    HealthRecord = "HEALTHREC",
    /**
     * HELD: Definition:There should be no actions taken in fulfillment of a request that has been held or suspended.
     */
    HeldSuspendedAlert = "HELD",
    /**
     * HEMOLYSIS: An observation of the hemolysis index of the specimen in g/L
     */
    Hemolysis = "HEMOLYSIS",
    /**
     * Code: HGHT
     */
    HGHT = "HGHT",
    /**
     * HH: Healthcare encounter that takes place in the residence of the patient or a designee
     */
    HomeHealth = "HH",
    /**
     * HHOBS: Indicates that the observation is of a person’s living situation in a household including the household composition and circumstances.
     */
    HouseholdSituationObservation = "HHOBS",
    /**
     * HIP: Definition: A health insurance policy that covers healthcare benefits by protecting covered parties from medical expenses arising from health conditions, sickness, or accidental injury as well as preventive care. Health insurance policies explicitly exclude coverage for losses insured under a disability policy, workers' compensation program, liability insurance (including automobile insurance); or for medical expenses, coverage for on-site medical clinics or for limited dental or vision benefits when these are provided under a separate policy.
     *
     *
     *                            Discussion: Health insurance policies are offered by health insurance plans that typically reimburse providers for covered services on a fee-for-service basis, that is, a fee that is the allowable amount that a provider may charge.  This is in contrast to managed care plans, which typically prepay providers a per-member/per-month amount or capitation as reimbursement for all covered services rendered.  Health insurance plans include indemnity and healthcare services plans.
     */
    HealthInsurancePlanPolicy = "HIP",
    /**
     * HIPAANOPP: The U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Part 164 Subpart E) permits access, use and disclosure of certain personal health information (PHI as defined under the law) for purposes of Treatment, Payment, and Operations, and requires that the provider ask that patients acknowledge the Provider's Notice of Privacy Practices as permitted conduct under the law.
     *
     *
     *                            Definition: Notification of HIPAA Privacy Practices.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialtyCode complies.
     */
    HIPAANoticeOfPrivacyPractices = "HIPAANOPP",
    /**
     * HIPAAPsyNotes: The U.S. Public Law 104-191 Health Insurance Portability and Accountability Act (HIPAA) Privacy Rule (45 CFR Part 164 Section 164.508) requires authorization for certain uses and disclosure of psychotherapy notes.
     *
     *
     *                            Definition: Authorization that must be obtained for disclosure of psychotherapy notes.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    HIPAAPsychotherapyNotes = "HIPAAPsyNotes",
    /**
     * HIPAASelfPay: Section 13405(a) of the Health Information Technology for Economic and Clinical Health Act (HITECH) stipulates the right of an individual to have disclosures regarding certain health care items or services for which the individual pays out of pocket in full restricted from a health plan.
     *
     *
     *                            Definition: Non-disclosure of health information to a health plan relating to health care items or services for which an individual pays out of pocket in full.
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    HIPAASelfPay = "HIPAASelfPay",
    /**
     * HIRISK: Definition: A government program that provides health coverage to individuals who are considered medically uninsurable or high risk, and who have been denied health insurance due to a serious health condition. In certain cases, it also applies to those who have been quoted very high premiums a" again, due to a serious health condition.  The pool charges premiums for coverage.  Because the pool covers high-risk people, it incurs a higher level of claims than premiums can cover. The insurance industry pays into the pool to make up the difference and help it remain viable.
     */
    HighRiskPoolProgram = "HIRISK",
    /**
     * HISTMEDLIST: Historical list of medications.
     */
    MedicationHistory = "HISTMEDLIST",
    /**
     * HISTORIC: Description: While the record was accepted in the repository, there is a more recent version of a record of this type.
     */
    RecordRecordedAsHistorical = "HISTORIC",
    /**
     * HIV: Policy for handling HIV or AIDS information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to HIV or AIDS information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    HIVAIDSInformationSensitivity = "HIV",
    /**
     * HIVAIDS: Definition: Government administered and funded HIV-AIDS program for beneficiaries meeting financial and health status criteria.  Administration, funding levels, eligibility criteria, covered benefits, provider types, and financial participation are typically set by a regulatory process.  Payer responsibilities for administering the program may be delegated to contractors.
     *
     *
     *                            Example: In the U.S., the Ryan White program, which is administered by the Health Resources and Services Administration.
     */
    HIVAIDSProgram = "HIVAIDS",
    /**
     * HLTHCARE: Description: Exposure participants' interaction occurred during the course of health care delivery or in a health care delivery setting, but did not involve the direct provision of care (e.g. a janitor cleaning a patient's hospital room).
     */
    HealthCareInteractionNotPatientCare = "HLTHCARE",
    /**
     * HMO: Definition: A policy for a health plan that provides coverage for health care only through contracted or employed physicians and hospitals located in particular geographic or service areas.  HMOs emphasize prevention and early detection of illness. Eligibility to enroll in an HMO is determined by where a covered party lives or works.
     */
    HealthMaintenanceOrganizationPolicy = "HMO",
    /**
     * HOMECARE: Description: Exposure interaction occurred in context of one providing care for the other, i.e. a babysitter providing care for a child, a home-care aide providing assistance to a paraplegic.
     */
    CareGiverInteraction = "HOMECARE",
    /**
     * HOSPPTNT: Description: Exposure participants' interaction occurred when both were patients being treated in the same (acute) health care delivery facility.
     */
    HospitalPatientInteraction = "HOSPPTNT",
    /**
     * HOSPVSTR: Description: Exposure participants' interaction occurred when one visited the other who was a patient being treated in a health care delivery facility.
     */
    HospitalVisitorInteraction = "HOSPVSTR",
    /**
     * HOUSEHLD: Description: Exposure interaction occurred in context of domestic interaction, i.e. both participants reside in the same household.
     */
    HouseholdInteraction = "HOUSEHLD",
    /**
     * HRCOMPT: A security category label field value, which indicates that access and use of an IT resource is restricted to members of human resources department or workflow.
     */
    HumanResourceCompartment = "HRCOMPT",
    /**
     * HSAPOL: Insurance policy that provides for an allotment of funds replenished on a periodic (e.g. annual) basis. The use of the funds under this policy is at the 	discretion of the covered party.
     */
    HealthSpendingAccount = "HSAPOL",
    /**
     * HST: Joint Federal/Provincial Sales Tax
     */
    HarmonizedSalesTax = "HST",
    /**
     * HUAPRV: Custodian system must require human review and approval for permission requested.
     */
    HumanApproval = "HUAPRV",
    /**
     * HUMHUMTRNS: Communication of an agent from a person to a proximate person.
     */
    HumanToHumanTransmission = "HUMHUMTRNS",
    /**
     * I: Accommodations used in the care of diseases that are transmitted through casual contact or respiratory transmission.
     */
    Isolation = "I",
    /**
     * ICOL: Definition: Consent to have healthcare information collected in an electronic health record.  This entails that the information may be used in analysis, modified, updated.
     */
    InformationCollection = "ICOL",
    /**
     * ICTERUS: An observation that describes the icterus index of the specimen.  It is recommended to use mMol/L of bilirubin
     */
    Icterus = "ICTERUS",
    /**
     * ID: Used by one system to inform another that it has received a container.
     */
    Identified = "ID",
    /**
     * IDSCL: Definition: Consent to have collected healthcare information disclosed.
     */
    InformationDisclosure = "IDSCL",
    /**
     * IDUR: Information on whether an increase or decrease in score is the preferred result
     * (e.g., a higher score indicates better quality OR a lower score indicates better quality OR quality is within a range).
     */
    ImprovementNotation = "IDUR",
    /**
     * ILLEGAL: Description:The request is missing elements or contains elements which cause it to not meet the legal standards for actioning.
     */
    Illegal = "ILLEGAL",
    /**
     * IMG: Description: Image Attachment
     */
    ImageAttachment = "IMG",
    /**
     * IMMLE: Description: A person enters an immunization due or received for a given patient.
     */
    ImmunizationListEntry = "IMMLE",
    /**
     * IMMLREV: Description: A person reviews a list of immunizations due or received for a given patient.
     */
    ImmunizationListReview = "IMMLREV",
    /**
     * IMMUCAT: Definition:All information pertaining to a patient's vaccination records.
     */
    ImmunizationCategory = "IMMUCAT",
    /**
     * IMMUNIZ: The introduction of an immunogen with the intent of stimulating an immune response, aimed at preventing subsequent infections by more viable agents.
     */
    Immunization = "IMMUNIZ",
    /**
     * IMP: A patient encounter where a patient is admitted by a hospital or equivalent facility, assigned to a location where patients generally stay at least overnight and provided with room, board, and continuous nursing service.
     */
    InpatientEncounter = "IMP",
    /**
     * IMPLIED: A grantor's presumed assent to the grantee's terms of agreement is based on the grantor's behavior, which may result from not expressly assenting to the consent directive offered, or from having no right to assent or dissent offered by the grantee.
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
    ImpliedConsent = "IMPLIED",
    /**
     * IMPLIEDD: A grantor's presumed assent to the grantee's terms of agreement, which is based on the grantor's behavior, and includes a right to dissent to certain terms.
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
    ImpliedConsentWithOpportunityToDissent = "IMPLIEDD",
    /**
     * IND: Definition: Services provided directly and through contracted and operated indigenous peoples health programs.
     *
     *
     *                            Example: Indian Health Service in the U.S.
     */
    IndigenousPeoplesHealthProgram = "IND",
    /**
     * IND01: Description:Contrast agent required for imaging study.
     */
    ImagingStudyRequiringContrast = "IND01",
    /**
     * IND02: Description:Provision of prescription or direction to consume a product for purposes of bowel clearance in preparation for a colonoscopy.
     */
    ColonoscopyPrep = "IND02",
    /**
     * IND03: Description:Provision of medication as a preventative measure during a treatment or other period of increased risk.
     */
    Prophylaxis = "IND03",
    /**
     * IND04: Description:Provision of medication during pre-operative phase; e.g., antibiotics before dental surgery or bowel prep before colon surgery.
     */
    SurgicalProphylaxis = "IND04",
    /**
     * IND05: Description:Provision of medication for pregnancy --e.g., vitamins, antibiotic treatments for vaginal tract colonization, etc.
     */
    PregnancyProphylaxis = "IND05",
    /**
     * INDTRNS: Communication of an agent to a living subject via an undetermined route.
     */
    IndeterminateDiseaseTransmissionMode = "INDTRNS",
    /**
     * INFA: Definition: Consent to access healthcare information.
     */
    InformationAccess = "INFA",
    /**
     * INFAO: Definition: Consent to access or "read" only, which entails that the information is not to be copied, screen printed, saved, emailed, stored, re-disclosed or altered in any way.  This level ensures that data which is masked or to which access is restricted will not be.
     *
     *
     *                            Example: Opened and then emailed or screen printed for use outside of the consent directive purpose.
     */
    AccessOnly = "INFAO",
    /**
     * INFASO: Definition: Consent to access and save only, which entails that access to the saved copy will remain locked.
     */
    AccessAndSaveOnly = "INFASO",
    /**
     * INFAUT: Authorization to collect, access, use, or disclose specified patient health information in accordance with jurisdictional law, organizational policy, or a patient's consent directive, which may be implied, deemed, opt-in, opt-out, or explicit.
     */
    AuthorizedInformationTransfer = "INFAUT",
    /**
     * INFCON: Authorization to collect, access, use, or disclose specified patient health information as explicitly consented to by the subject of the information or the subject's representative.
     */
    AfterExplicitConsent = "INFCON",
    /**
     * INFCRT: Authorization to collect, access, use, or disclose specified patient health information in accordance with judicial system protocol, such as in the case of a subpoena or court order.
     */
    OnlyOnCourtOrder = "INFCRT",
    /**
     * INFDNG: Authorization to collect, access, use, or disclose specified patient health information where deemed necessary to avert potential danger to other persons in accordance with jurisdictional law, organizational policy, or standards of practice.  For example, disclosure about a person threatening violence.
     */
    OnlyIfDangerToOthers = "INFDNG",
    /**
     * INFEMER: Authorization to collect, access, use, or disclose specified patient health information in accordance with emergency information transfer protocol dictated by jurisdictional law, organization policy, or standards of practice. For example, sharing of health information during disaster response.
     */
    OnlyInAnEmergency = "INFEMER",
    /**
     * INFPWR: Authorization to collect, access, use, or disclose specified patient health information necessary to avert potential public welfare risk in accordance with jurisdictional law, organizational policy, or standards of practice.  For example, reporting that a person is a victim of abuse or demonstrating suicidal tendencies.
     */
    OnlyIfPublicWelfareRisk = "INFPWR",
    /**
     * INFREG: Authorization to collect, access, use, or disclose specified patient health information for public health, welfare, and safety purposes in accordance with jurisdictional law, organizational policy, or standards of practice.  For example, public health reporting of notifiable conditions.
     */
    RegulatoryInformationTransfer = "INFREG",
    /**
     * INITIAL: The initial quantity of the specimen in inventory
     */
    InitialVolume = "INITIAL",
    /**
     * INITIMMUNIZ: The first immunization administration in a series intended to produce immunity
     */
    InitialImmunization = "INITIMMUNIZ",
    /**
     * INMATE: Description: Exposure participants' interaction occurred in the course of one or both participants being incarcerated at a correctional facility
     */
    InmateInteraction = "INMATE",
    /**
     * INT: Proposed therapy may be inappropriate or contraindicated because of a recorded patient intolerance to the proposed product.  (Intolerances are non-immune based sensitivities.)
     */
    IntoleranceAlert = "INT",
    /**
     * INTDX: Intermediate diagnoses are those diagnoses documented for administrative purposes during the course of a hospital stay.
     */
    IntermediateDiagnosis = "INTDX",
    /**
     * INTERVAL: Definition:The therapy action is being performed outside the bounds of the time period requested
     */
    OutsideRequestedTime = "INTERVAL",
    /**
     * INTFR: An observation that relates to factors that may potentially cause interference with the observation
     */
    ActSpecObsInterferenceCode = "INTFR",
    /**
     * INTIMATE: Description: Exposure interaction was intimate, i.e. participants are intimate companions (e.g. spouses, domestic partners).
     */
    IntimateInteraction = "INTIMATE",
    /**
     * INTOLIST: List of intolerance observations.
     */
    IntoleranceList = "INTOLIST",
    /**
     * INV: Definition:A monitoring program that focuses on a drug which is under investigation and has not received regulatory approval for the condition being investigated
     */
    Investigational = "INV",
    /**
     * INVOICE: Payment is based on a payment intent for a previously submitted Invoice, based on formal adjudication results..
     */
    SubmittedInvoice = "INVOICE",
    /**
     * INVTYPE: Transaction counts and value totals by invoice type (e.g. RXDINV - Pharmacy Dispense)
     */
    InvoiceType = "INVTYPE",
    /**
     * IP: Used by one system to inform another that the container is in position for specimen transfer (e.g., container removal from track, pipetting, etc.).
     */
    InPosition = "IP",
    /**
     * IPOP: Criteria for specifying the entities to be evaluated by a specific quality measure, based on a shared common set of characteristics (within a specific measurement set to which a given measure belongs).
     */
    InitialPopulation = "IPOP",
    /**
     * IPPOP: Criteria for specifying the patients to be evaluated by a specific quality measure, based on a shared common set of characteristics (within a specific measurement set to which a given measure belongs). Details often include information based upon specific age groups, diagnoses, diagnostic and procedure codes, and enrollment periods.
     */
    InitialPatientPopulation = "IPPOP",
    /**
     * IRDSCL: Definition: Information re-disclosed without the patient's consent.
     */
    InformationRedisclosure = "IRDSCL",
    /**
     * ISOL: Premium paid on service fees in compensation for practicing in a remote location.
     */
    IsolationAllowance = "ISOL",
    /**
     * ISSUE: There is a clinical issue for the therapy that makes continuation of the therapy inappropriate.
     *
     *
     *                            Open Issue: The definition of this code does not correctly represent the concept space of its specializations (children)
     */
    DetectedIssue = "ISSUE",
    /**
     * ITMCNT: Describes the items counted by the measure (e.g., patients, encounters, procedures, etc.)
     */
    ItemsCounted = "ITMCNT",
    /**
     * KEY: A significant word that aids in discoverability.
     */
    Keyword = "KEY",
    /**
     * KEY204: The ID of the patient, order, etc., was not found. Used for transactions other than additions, e.g. transfer of a non-existent patient.
     */
    UnknownKeyIdentifier = "KEY204",
    /**
     * KEY205: The ID of the patient, order, etc., already exists. Used in response to addition transactions (Admit, New Order, etc.).
     */
    DuplicateKeyIdentifier = "KEY205",
    /**
     * KEY206: Description: Metadata associated with the identification (e.g. name or gender) does not match the identification being verified.
     */
    NonMatchingIdentification = "KEY206",
    /**
     * KSUBJ: Categorization of types of observation that capture the main clinical knowledge subject which may be a medication, a laboratory test, a disease.
     */
    KnowledgeSubject = "KSUBJ",
    /**
     * KSUBT: Categorization of types of observation that capture a knowledge subtopic which might be treatment, etiology, or prognosis.
     */
    KnowledgeSubtopic = "KSUBT",
    /**
     * L: Used by one system to inform another that the container has been released from that system.
     */
    LeftEquipment = "L",
    /**
     * LAB: Proposed therapy may be inappropriate or contraindicated due to recent lab test results
     */
    LabAlert = "LAB",
    /**
     * LABCAT: Description: All information pertaining to a patient's lab test records (orders &amp; results)
     */
    LabTestCategory = "LABCAT",
    /**
     * LABEL: Custodian security system must assign and bind security labels in order to classify information created in the information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the assignment and binding.
     *
     *
     *                            Usage Note: In security systems, security policy label assignments do not change, they may supersede prior assignments, and such reassignments are always tracked for auditing and other purposes.
     */
    AssignSecurityLabel = "LABEL",
    /**
     * LABOE: A clinician creates a request for a laboratory test to be done for a given patient.
     */
    LaboratoryTestOrderEntryTask = "LABOE",
    /**
     * LABRESULTS: Description: Lab Results Attachment
     */
    LabResults = "LABRESULTS",
    /**
     * LABRREV: A person reviews a list of laboratory results of a given patient.
     */
    LaboratoryResultsReviewTask = "LABRREV",
    /**
     * LACT: Proposed therapy may be inappropriate or contraindicated when breast-feeding
     */
    LactationAlert = "LACT",
    /**
     * LACTTRNS: Communication of an agent from one living subject to another living subject through direct contact with mammalian milk or colostrum.
     */
    LactationTransmission = "LACTTRNS",
    /**
     * LATE: Knowingly over the payor's published time limit for this invoice possibly due to a previous payor's delays in processing. Additional reason information will be supplied.
     */
    LateInvoice = "LATE",
    /**
     * LAWENF: law enforcement transport
     */
    LawEnforcementTransport = "LAWENF",
    /**
     * LDLP: LDL Precipitation
     */
    LDLPrecipitation = "LDLP",
    /**
     * LEN_LONG: Description:The length of the data specified is greater than the maximum length defined for the element.
     */
    LengthIsTooLong = "LEN_LONG",
    /**
     * LEN_RANGE: Description:The length of the data specified falls out of the range defined for the element.
     */
    LengthOutOfRange = "LEN_RANGE",
    /**
     * LEN_SHORT: Description:The length of the data specified is less than the minimum length defined for the element.
     */
    LengthIsTooShort = "LEN_SHORT",
    /**
     * LENSING: A grouping of invoice element details including the ones specifying the lens fee and the lens dispensing cost that are being invoiced.
     */
    LensInvoiceGroup = "LENSING",
    /**
     * LF: A diet low in fat, particularly to patients with hepatic diseases.
     */
    LowFat = "LF",
    /**
     * LFEMX: Definition: Maximum amount paid by payer or covered party; or maximum number of services or products covered under the policy or program during a covered party's lifetime.
     */
    LifeTimeMaximum = "LFEMX",
    /**
     * LGPC: Description:Scope of responsibility taken-on for physician care of a patient as defined by a governmental licensing agency.
     */
    LicensedGeneralPhysicianCare = "LGPC",
    /**
     * LIFE: Definition: A policy under which the insurer agrees to pay a sum of money upon the occurrence of the covered partys death. In return, the policyholder agrees to pay a stipulated amount called a premium at regular intervals.  Life insurance indemnifies the beneficiary for the loss of the insurable interest that a beneficiary has in the life of a covered party.  For persons related by blood, a substantial interest established through love and affection, and for all other persons, a lawful and substantial economic interest in having the life of the insured continue. An insurable interest is required when purchasing life insurance on another person. Specific exclusions are often written into the contract to limit the liability of the insurer; for example claims resulting from suicide or relating to war, riot and civil commotion.
     *
     *
     *                            Discussion:A life insurance policy may be used by the covered party as a source of health care coverage in the case of  a viatical settlement, which is the sale of a life insurance policy by the policy owner, before the policy matures. Such a sale, at a price discounted from the face amount of the policy but usually in excess of the premiums paid or current cash surrender value, provides the seller an immediate cash settlement. Generally, viatical settlements involve insured individuals with a life expectancy of less than two years. In countries without state-subsidized healthcare and high healthcare costs (e.g. United States), this is a practical way to pay extremely high health insurance premiums that severely ill people face. Some people are also familiar with life settlements, which are similar transactions but involve insureds with longer life expectancies (two to fifteen years).
     */
    LifeInsurancePolicy = "LIFE",
    /**
     * LIPEMIA: An observation used to describe the Lipemia Index of the specimen. It is recommended to use the optical turbidity at 600 nm (in absorbance units).
     */
    Lipemia = "LIPEMIA",
    /**
     * LIVARG: Policy for handling information related to an information subject's living arrangement, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's living arrangement, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    LivingArrangementInformationSensitivity = "LIVARG",
    /**
     * LOAN: Temporary supply of a product without transfer of ownership for the product.
     */
    Loan = "LOAN",
    /**
     * LOC: Transaction counts and value totals by service location (e.g clinic).
     */
    Location = "LOC",
    /**
     * LOCIS: Policy for handling information related to the location of the information subject, which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to the location of the information subject, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    LocationInformationSensitivity = "LOCIS",
    /**
     * LP: A low protein diet for patients with renal failure.
     */
    LowProtein = "LP",
    /**
     * LQ: A strictly liquid diet, that can be fully absorbed in the intestine, and therefore may not contain fiber.  Used before enteral surgeries.
     */
    Liquid = "LQ",
    /**
     * LRCOMPT: Providers and care givers who have an established relationship per criteria determined by policy are considered to have an established care provision relations with a healthcare consumer, and may be authorized to access the consumer's health information because of that relationship.  Providers and care givers should only have access to that information while participating in legitimate relationship workflows or for other authorized uses.
     *
     *                         Security Compartment Labels assigned to a consumer's information use in legitimate relationship workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a legitimate relationship workflow who is requesting access to that information.
     */
    LegitimateRelationshipCompartment = "LRCOMPT",
    /**
     * LS: A diet low in sodium for patients with congestive heart failure and/or renal failure.
     */
    LowSodium = "LS",
    /**
     * LTC: Definition: An insurance policy that covers benefits for long-term care services people need when they no longer can care for themselves. This may be due to an accident, disability, prolonged illness or the simple process of aging. Long-term care services assist with activities of daily living including:
     *
     *
     *
     *                               Help at home with day-to-day activities, such as cooking, cleaning, bathing and dressing
     *
     *
     *
     *                               Care in the community, such as in an adult day care facility
     *
     *
     *
     *                               Supervised care provided in an assisted living facility
     *
     *
     *
     *                               Skilled care provided in a nursing home
     */
    LongTermCarePolicy = "LTC",
    /**
     * LTRMCARE: Description: Exposure participants' interaction occurred in the course of one or both participants being resident at a long term care facility (second participant may be a visitor, worker, resident or a physical place or object within the facility).
     */
    LongTermCareFacilityInteraction = "LTRMCARE",
    /**
     * LU: Description:A drug that can be prescribed (and reimbursed) only if it meets certain criteria.
     */
    LimitedUse = "LU",
    /**
     * M: Used by one system to inform another that the container did not arrive at its next expected location.
     */
    Missing = "M",
    /**
     * MANDPOL: mandatory health program
     */
    MandatoryHealthProgram = "MANDPOL",
    /**
     * MANUAL: Manual review of the invoice is requested.  Additional information to be supplied.  This may be used in the case of an appeal.
     */
    ManualReview = "MANUAL",
    /**
     * MARKUP: An increase in the amount charged as a percentage of the amount. For example, 12% markup on product cost.
     */
    MarkupOrUpCharge = "MARKUP",
    /**
     * MARST: Policy for handling information related to an information subject's marital status, which will be afforded heightened confidentiality. Policies may govern sensitivity of information related to an information subject's marital status, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    MaritalStatusInformationSensitivity = "MARST",
    /**
     * MARWLREV: A clinician reviews a work list of medications to be administered to a given patient.
     */
    MedicationAdministrationRecordWorkListReviewTask = "MARWLREV",
    /**
     * MASK: Custodian system must render information unreadable and unusable by algorithmically transforming plaintext into ciphertext.  User may be provided a key to decrypt per license or "shared secret".
     */
    Mask = "MASK",
    /**
     * MAXOCCURS: Description:The number of repeating elements is above the maximum number of repetitions allowed.
     */
    RepetitionsAboveMaximum = "MAXOCCURS",
    /**
     * MC: Master Card
     */
    MasterCard = "MC",
    /**
     * MCPOL: Definition: Government mandated program providing coverage, disability income, and vocational rehabilitation for injuries sustained in the work place or in the course of employment.  Employers may either self-fund the program, purchase commercial coverage, or pay a premium to a government entity that administers the program.  Employees may be required to pay premiums toward the cost of coverage as well.
     *
     *                         Managed care policies specifically exclude coverage for losses insured under a disability policy, workers' compensation program, liability insurance (including automobile insurance); or for medical expenses, coverage for on-site medical clinics or for limited dental or vision benefits when these are provided under a separate policy.
     *
     *
     *                            Discussion: Managed care policies are offered by managed care plans that contract with selected providers or health care organizations to provide comprehensive health care at a discount to covered parties and coordinate the financing and delivery of health care. Managed care uses medical protocols and procedures agreed on by the medical profession to be cost effective, also known as medical practice guidelines. Providers are typically reimbursed for covered services by a capitated amount on a per member per month basis that may reflect difference in the health status and level of services anticipated to be needed by the member.
     */
    ManagedCarePolicy = "MCPOL",
    /**
     * MDOSE: Description:The maximum quantity of this drug allowed to be administered within a particular time-range (month, year, lifetime) has been reached or exceeded.
     */
    MaximumDosageReached = "MDOSE",
    /**
     * MED: Provision of diagnostic and/or therapeutic treatment.
     */
    Medical = "MED",
    /**
     * MEDCCAT: Definition:All information pertaining to a patient's medical condition records.
     */
    MedicalConditionCategory = "MEDCCAT",
    /**
     * MEDLIST: List of medications.
     */
    MedicationList = "MEDLIST",
    /**
     * MEDOE: A clinician creates a request for the administration of one or more medications to a given patient.
     */
    MedicationOrderEntryTask = "MEDOE",
    /**
     * MEDT: The end date of the measurement period.
     */
    MeasurementEndDate = "MEDT",
    /**
     * MENCAT: Description: All information pertaining to a patient's mental health records.
     */
    MentalHealthCategory = "MENCAT",
    /**
     * MENTPOL: Definition: A health insurance policy that covers benefits for mental health services and prescriptions.
     */
    MentalHealthPolicy = "MENTPOL",
    /**
     * MENTPRG: Definition: Government administered and funded mental health program for beneficiaries meeting financial and mental health status criteria.  Administration, funding levels, eligibility criteria, covered benefits, provider types, and financial participation are typically set by a regulatory process.  Payer responsibilities for administering the program may be delegated to contractors.
     *
     *
     *                            Example: In the U.S., states receive funding for substance use programs from the Substance Abuse Mental Health Administration (SAMHSA).
     */
    MentalHealthProgram = "MENTPRG",
    /**
     * MH: Policy for handling information related to psychological disorders, which is afforded heightened confidentiality. Mental health information may be deemed specifically sensitive and distinct from physical health, substance use disorders, and behavioral disabilities and disorders in some jurisdictions.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    MentalHealthInformationSensitivity = "MH",
    /**
     * MICROORGRREV: A person reviews organisms of microbiology results of a given patient.
     */
    MicrobiologyOrganismsResultsReviewTask = "MICROORGRREV",
    /**
     * MICRORREV: A person reviews a list of microbiology results of a given patient.
     */
    MicrobiologyResultsReviewTask = "MICRORREV",
    /**
     * MICROSENSRREV: A person reviews the sensitivity test of microbiology results of a given patient.
     */
    MicrobiologySensitivityTestResultsReviewTask = "MICROSENSRREV",
    /**
     * MILITARY: Definition: A government program that provides coverage for health services to military personnel, retirees, and dependents.  A covered party who is a subscriber can choose from among Fee-for-Service (FFS) plans, and their Preferred Provider Organizations (PPO), or Plans offering a Point of Service (POS) Product, or Health Maintenance Organizations.
     *
     *
     *                            Example: In the U.S., TRICARE, CHAMPUS.
     */
    MilitaryHealthProgram = "MILITARY",
    /**
     * MINEC: Custodian must limit access and disclosure to the minimum information required to support an authorized user's purpose of use.
     *
     *
     *                            Usage Note: Limiting the information available for access and disclosure to that an authorized user or receiver "needs to know" in order to perform permitted workflow or purpose of use.
     */
    MinimumNecessary = "MINEC",
    /**
     * MINFREQ: Definition:The therapy action is being performed too soon after the previous occurrence based on the requested frequency
     */
    TooSoonWithinFrequencyBasedOnTheUsage = "MINFREQ",
    /**
     * MINOCCURS: Description:The number of repeating elements is below the minimum number of repetitions allowed.
     */
    RepetitionsBelowMinimum = "MINOCCURS",
    /**
     * MISSAPT: A charge to compensate the provider when a patient does not show for an appointment.
     */
    MissedAppointment = "MISSAPT",
    /**
     * MISSCOND: Description:The specified element must be specified with a non-null value under certain conditions.  In this case, the conditions are true but the element is still missing or null.
     */
    ConditionalElementMissing = "MISSCOND",
    /**
     * MISSMAND: Description:The specified element is mandatory and was not included in the instance.
     */
    MandatoryElementMissing = "MISSMAND",
    /**
     * MLREV: A person reviews a list of medication orders submitted to a given patient
     */
    MedicationListReviewTask = "MLREV",
    /**
     * MODEL: Description: Digital Model Attachment
     */
    Model = "MODEL",
    /**
     * MONTH: Transaction counts and value totals for each calendar month within the date range specified.
     */
    Month = "MONTH",
    /**
     * MS: A supply of a manufacturer sample
     */
    ManufacturerSample = "MS",
    /**
     * MSD: The start date of the measurement period.
     */
    MeasurementStartDate = "MSD",
    /**
     * MSRADJ: The method of adjusting for clinical severity and conditions present at the start of care that can influence patient outcomes for making valid comparisons of outcome measures across providers. Indicates whether an eMeasure is subject to the statistical process for reducing, removing, or clarifying the influences of confounding factors to allow more useful comparisons.
     */
    RiskAdjustment = "MSRADJ",
    /**
     * MSRAGG: Describes how to combine information calculated based on logic in each of several populations into one summarized result. It can also be used to describe how to risk adjust the data based on supplemental data elements described in the eMeasure. (e.g., pneumonia hospital measures antibiotic selection in the ICU versus non-ICU and then the roll-up of the two).
     *
     *
     *                            Open Issue: The description does NOT align well with the definition used in the HQMF specfication; correct the MSGAGG definition, and the possible distinction of MSRAGG as a child of AGGREGATE.
     */
    RateAggregation = "MSRAGG",
    /**
     * MSRIMPROV: Information on whether an increase or decrease in score is the preferred result. This should reflect information on which way is better, an increase or decrease in score.
     */
    HealthQualityMeasureImprovementNotation = "MSRIMPROV",
    /**
     * MSRJUR: The list of jurisdiction(s) for which the measure applies.
     */
    Jurisdiction = "MSRJUR",
    /**
     * MSROBS: Defines the observation to be performed for each patient or event in the measure population. Measure observations for each case in the population are aggregated to determine the overall measure score for the population.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            the median time from arrival in the Emergency Room to departure
     *                            the median time from decision to admit to a hospital to the actual admission for Emergency Room patients
     */
    MeasureObservation = "MSROBS",
    /**
     * MSRPOPL: Criteria for specifying
     * the measure population as a narrative description (e.g., all patients seen in the Emergency Department during the measurement period).  This is used only in continuous variable eMeasures.
     */
    MeasurePopulation = "MSRPOPL",
    /**
     * MSRPOPLEX: Criteria for specifying subjects who should be removed from the eMeasure's Initial Population and Measure Population. Measure Population Exclusions are used in Continuous Variable measures to help narrow the Measure Population before determining the value(s) of the continuous variable(s).
     */
    MeasurePopulationExclusions = "MSRPOPLEX",
    /**
     * MSRRPTR: Type of person or organization that is expected to report the issue.
     */
    ReporterType = "MSRRPTR",
    /**
     * MSRRPTTIME: The maximum time that may elapse following completion of the measure until the measure report must be sent to the receiver.
     */
    TimeframeForReporting = "MSRRPTTIME",
    /**
     * MSRSCORE: Indicates how the calculation is performed for the eMeasure
     * (e.g., proportion, continuous variable, ratio)
     */
    MeasureScoring = "MSRSCORE",
    /**
     * MSRSET: Location(s) in which care being measured is rendered
     *
     *                         Usage Note: MSRSET is used rather than RoleCode because the setting applies to what is being measured, as opposed to participating directly in the health quality measure documantion itself).
     */
    HealthQualityMeasureCareSetting = "MSRSET",
    /**
     * MSRTOPIC: health quality measure topic type
     */
    HealthQualityMeasureTopicType = "MSRTOPIC",
    /**
     * MSRTP: The time period for which the eMeasure applies.
     */
    MeasurementPeriod = "MSRTP",
    /**
     * MSRTYPE: Indicates whether the eMeasure is used to examine a process or an outcome over time
     * (e.g., Structure, Process, Outcome).
     */
    MeasureType = "MSRTYPE",
    /**
     * MST: Policy for handling information related to sexual assault or repeated, threatening sexual harassment that occurred while the patient was in the military, which is afforded heightened confidentiality.
     *
     *                         Access control concerns for military sexual trauma is based on the patient being subject to control by a higher ranking military perpetrator and/or censure by others within the military unit.  Due to the relatively unfettered access to healthcare information by higher ranking military personnel and those who have command over the patient, there is a need to sequester this information outside of the typical controls on access to military health records.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    MilitarySexualTraumaInformationSensitivity = "MST",
    /**
     * MVA: Incident or accident as the result of a motor vehicle accident
     */
    MotorVehicleAccident = "MVA",
    /**
     * N: A normal diet, i.e. no special preparations or restrictions for medical reasons. This is notwithstanding any preferences the patient might have regarding special foods, such as vegetarian, kosher, etc.
     */
    NormalDiet = "N",
    /**
     * NAINT: Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure
     */
    NonAllergyIntolerance = "NAINT",
    /**
     * NAT: The requesting party has insufficient authorization to invoke the interaction.
     */
    InsufficientAuthorization = "NAT",
    /**
     * NAUTH: Authorization for specified healthcare service(s) and/or product(s) denied.
     */
    NotAuthorized = "NAUTH",
    /**
     * NELG: Insurance coverage is not in effect for healthcare service(s) and/or product(s). May optionally include reasons for the ineligibility.
     */
    NotEligible = "NELG",
    /**
     * NETAMT: Maximum net amount that will be covered for the product or service specified.
     */
    NetAmount = "NETAMT",
    /**
     * NEUT: The act or process by which an acid and a base are combined in such proportions that the resulting compound is neutral.
     */
    Neutralization = "NEUT",
    /**
     * NF: A no fat diet for acute hepatic diseases.
     */
    NoFat = "NF",
    /**
     * NHP: Proposed therapy may interact with existing or recent natural health product therapy
     */
    NaturalHealthProductAlert = "NHP",
    /**
     * NOAUTH: Prohibition on disclosure without information subject's authorization.
     */
    NoDisclosureWithoutSubjectAuthorization = "NOAUTH",
    /**
     * NOCOLLECT: Prohibition on collection or storage of the information.
     */
    NoCollection = "NOCOLLECT",
    /**
     * NOCONSENT: No notification or opportunity is provided for a grantor to assent or dissent to a grantee's terms of agreement.
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
    NoConsent = "NOCONSENT",
    /**
     * NODSCLCD: Prohibition on disclosure without organizational approved patient restriction.
     */
    NoDisclosureWithoutConsentDirective = "NODSCLCD",
    /**
     * NODSCLCDS: Prohibition on disclosure without a consent directive from the information subject.
     */
    NoDisclosureWithoutInformationSubjectQuoteSConsentDirective = "NODSCLCDS",
    /**
     * NODUPS: Description:More than one element with the same value exists in the set.  Duplicates not permission in this set in a set.
     */
    DuplicateValuesAreNotPermitted = "NODUPS",
    /**
     * NOI: The type of injury that the injury coding specifies.
     */
    NatureOfInjury = "NOI",
    /**
     * NOINTEGRATE: Prohibition on Integration into other records.
     */
    NoIntegration = "NOINTEGRATE",
    /**
     * NOLIST: Prohibition on disclosure except to entities on specific access list.
     */
    NoUnlistedEntityDisclosure = "NOLIST",
    /**
     * NOMOU: Prohibition on disclosure without an interagency service agreement or memorandum of understanding (MOU).
     */
    NoDisclosureWithoutMOU = "NOMOU",
    /**
     * NON: Non-Payment Data.
     */
    NonPaymentData = "NON",
    /**
     * NONAC: Any category of inpatient encounter except 'acute'
     */
    InpatientNonAcute = "NONAC",
    /**
     * NONRX: Proposed therapy may interact with a non-prescription drug (e.g. alcohol, tobacco, Aspirin)
     */
    NonPrescriptionInteractionAlert = "NONRX",
    /**
     * NOORGPOL: Prohibition on disclosure without organizational authorization.
     */
    NoDisclosureWithoutOrganizationalAuthorization = "NOORGPOL",
    /**
     * NOPAT: Prohibition on disclosing information to patient, family or caregivers without attending provider's authorization.
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
    NoDisclosureToPatientFamilyOrCaregiversWithoutAttendingProviderQuoteSAuthorization = "NOPAT",
    /**
     * NOPERSIST: Description: Element in submitted message will not persist in data storage based on detected issue.
     */
    ElementWillNotBePersisted = "NOPERSIST",
    /**
     * NOPERSISTP: Prohibition on collection of the information beyond time necessary to accomplish authorized purpose of use is prohibited.
     */
    NoCollectionBeyondPurposeOfUse = "NOPERSISTP",
    /**
     * NOPP: Acknowledgement of custodian notice of privacy practices.
     *
     *
     *                            Usage Notes: This type of consent directive acknowledges a custodian's notice of privacy practices including its permitted collection, access, use and disclosure of health information to users and for purposes of use specified.
     */
    NoticeOfPrivacyPractices = "NOPP",
    /**
     * NORDSCLCD: Prohibition on redisclosure without patient consent directive.
     */
    NoRedisclosureWithoutConsentDirective = "NORDSCLCD",
    /**
     * NORDSCLCDS: Prohibition on redisclosure without a consent directive from the information subject.
     */
    NoRedisclosureWithoutInformationSubjectQuoteSConsentDirective = "NORDSCLCDS",
    /**
     * NORDSCLW: Prohibition on disclosure without authorization under jurisdictional law.
     */
    NoDisclosureWithoutJurisdictionalAuthorization = "NORDSCLW",
    /**
     * NORELINK: Prohibition on associating de-identified or pseudonymized information with other information in a manner that could or does result in disclosing information intended to be masked.
     */
    NoRelinking = "NORELINK",
    /**
     * NOREUSE: Prohibition on use of the information beyond the purpose of use initially authorized.
     */
    NoReuseBeyondPurposeOfUse = "NOREUSE",
    /**
     * NOSTRNS: Communication of an agent from any entity to a living subject while the living subject is in the patient role in a healthcare facility.
     */
    NosocomialTransmission = "NOSTRNS",
    /**
     * NOTACTN: Definition:The status of the request being fulfilled has changed such that it is no longer actionable.  This may be because the request has expired, has already been completely fulfilled or has been otherwise stopped or disabled.  (Not used for 'suspended' orders.)
     */
    NoLongerActionable = "NOTACTN",
    /**
     * NOTEQUIV: Definition:The therapy being performed is not sufficiently equivalent to the therapy which was requested.
     */
    NotEquivalentAlert = "NOTEQUIV",
    /**
     * NOTEQUIVGEN: Definition:The therapy being performed is not generically equivalent (having the identical biological action) to the therapy which was requested.
     */
    NotGenericallyEquivalentAlert = "NOTEQUIVGEN",
    /**
     * NOTEQUIVTHER: Definition:The therapy being performed is not therapeutically equivalent (having the same overall patient effect) to the therapy which was requested.
     */
    NotTherapeuticallyEquivalentAlert = "NOTEQUIVTHER",
    /**
     * NOVIP: Prohibition on disclosure except to principals with access permission to specific VIP information.
     */
    NoUnauthorizedVIPDisclosure = "NOVIP",
    /**
     * NUMER: Criteria for specifying the processes or outcomes expected for each patient, procedure, or other unit of measurement defined in the denominator for proportion measures, or related to (but not directly derived from) the denominator for ratio measures (e.g., a numerator listing the number of central line blood stream infections and a denominator indicating the days per thousand of central line usage in a specific time period).
     */
    Numerator = "NUMER",
    /**
     * NUMEX: Criteria for specifying instances that should not be included in the numerator data. (e.g., if the number of central line blood stream infections per 1000 catheter days were to exclude infections with a specific bacterium, that bacterium would be listed as a numerator exclusion).  Numerator Exclusions are used only in ratio eMeasures.
     */
    NumeratorExclusions = "NUMEX",
    /**
     * O: Used by one system to inform another that the specific container is being processed by the equipment. It is useful as a response to a query about Container Status, when the specific step of the process is not relevant.
     */
    InProcess = "O",
    /**
     * ObligationPolicy: Conveys the mandated workflow action that an information custodian, receiver, or user must perform.
     *
     *
     *                            Usage Notes: Per ISO 22600-2, ObligationPolicy instances 'are event-triggered and define actions to be performed by manager agent'. Per HL7 Composite Security and Privacy Domain Analysis Model:  This value set refers to the action required to receive the permission specified in the privacy rule. Per OASIS XACML, an obligation is an operation specified in a policy or policy that is performed in conjunction with the enforcement of an access control decision.
     */
    ObligationPolicy = "ObligationPolicy",
    /**
     * OBS: Provision of care of women during pregnancy, childbirth and immediate postpartum period.  Also known as Maternity.
     */
    Obstetrics = "OBS",
    /**
     * OBSA: Proposed therapy may be inappropriate or contraindicated due to conditions or characteristics of the patient
     */
    ObservationAlert = "OBSA",
    /**
     * OBSANTC: Description: Indicates the valid antigen count.
     */
    AntigenCount = "OBSANTC",
    /**
     * OBSANTV: Description: Indicates whether an antigen is valid or invalid.
     */
    AntigenValidity = "OBSANTV",
    /**
     * OBSENC: An encounter where the patient usually will start in different encounter, such as one in the emergency department (EMER) but then transition to this type of encounter because they require a significant period of treatment and monitoring to determine whether or not their condition warrants an inpatient admission or discharge. In the majority of cases the decision about admission or discharge will occur within a time period determined by local, regional or national regulation, often between 24 and 48 hours.
     */
    ObservationEncounter = "OBSENC",
    /**
     * OBSOLETE: Description: One or more records in the query response have a status of 'obsolete'.
     */
    ObsoleteRecordReturned = "OBSOLETE",
    /**
     * OE: A clinician creates a request for a service to be performed for a given patient.
     */
    OrderEntryTask = "OE",
    /**
     * OHSINV: A clinical Invoice Grouping consisting of one or more oral health services. Billing for these service(s) are supported by multiple clinical billable events (acts).
     *
     *                         All items in the Invoice Grouping must be adjudicated together to be acceptable to the Adjudicator.
     */
    OralHealthService = "OHSINV",
    /**
     * OINT: Hypersensitivity resulting in an adverse reaction upon exposure to an agent.
     */
    Intolerance = "OINT",
    /**
     * ONC: Provision of treatment and/or diagnosis related to tumors and/or cancer.
     */
    Oncology = "ONC",
    /**
     * ONET: Definition:A list of medications which the patient is intended to be administered only once.
     */
    OneTime = "ONET",
    /**
     * OOJ: The medical service and/or product was provided to a patient that has coverage in another jurisdiction.
     */
    OutOfJurisdiction = "OOJ",
    /**
     * OOO: Premium paid on service fees in compensation for practicing at a location other than normal working location.
     */
    OutOfOffice = "OOO",
    /**
     * OPIOIDUD: Policy for handling information related to opioid use disorders and conditions caused by these disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    OpioidUseDisorderInformationSensitivity = "OPIOIDUD",
    /**
     * OPTIN: A grantor's assent to the terms of an agreement offered by a grantee without an opportunity for to dissent to any terms.
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
    OptIn = "OPTIN",
    /**
     * OPTINR: A grantor's assent to the grantee's terms of an agreement with an opportunity for to dissent to certain grantor or grantee selected terms.
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
    OptInWithRestrictions = "OPTINR",
    /**
     * OPTOUT: A grantor's dissent to the terms of agreement offered by a grantee without an opportunity for to assent to any terms.
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
    OpOut = "OPTOUT",
    /**
     * OPTOUTE: A grantor's dissent to the grantee's terms of agreement except for certain grantor or grantee selected terms.
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
    OptOutWithExceptions = "OPTOUTE",
    /**
     * ORCON: Prohibition on disclosure except as permitted by the information originator.
     */
    NoDisclosureWithoutOriginatorAuthorization = "ORCON",
    /**
     * OREV: A person reviews a list of orders submitted to a given patient.
     */
    OrdersReviewTask = "OREV",
    /**
     * ORTHO: The service provided is required for orthodontic purposes. If the covered party has orthodontic coverage, then the service may be paid.
     */
    OrthodonticService = "ORTHO",
    /**
     * OTC: Medicines designated in this way may be supplied for patient use without a prescription.  The exact form of categorisation will vary in different realms.
     */
    NonPrescriptionMedicine = "OTC",
    /**
     * P: Accommodations in which there is only 1 bed.
     */
    Private = "P",
    /**
     * PACOMPT: Patient administration members who have access to healthcare consumer information as part of a patient administration workflows.
     *
     *                         Security Compartment Labels assigned to consumer information used in these workflows should be met or exceeded by the Security Compartment attribute claimed by a participant in a patient administration workflow who is requesting access to that information.
     */
    PatientAdministrationCompartment = "PACOMPT",
    /**
     * PAF: Phenylketonuria diet.
     */
    PhenylalanineFree = "PAF",
    /**
     * PAINV: HealthCare facility preferred accommodation invoice.
     */
    PreferredAccommodationInvoice = "PAINV",
    /**
     * PALL: Provision of care for patients who are living or dying from an advanced illness.
     */
    Palliative = "PALL",
    /**
     * PAPER: Paper documentation (or other physical format) with supporting or additional information to follow.
     */
    PaperDocumentationToFollow = "PAPER",
    /**
     * PAR: Patient is supplied with parenteral nutrition, typically described in terms of i.v. medications.
     */
    Parenteral = "PAR",
    /**
     * PARTRNS: Communication of an agent from a living subject or environmental source to a living subject where the acquisition of the agent is not via the alimentary canal.
     */
    ParenteralTransmission = "PARTRNS",
    /**
     * PAT_ADV_EVNT: Indicates that the ICSR is describing problems that a patient experienced after receiving a vaccine product.
     */
    PatientAdverseEvent = "PAT_ADV_EVNT",
    /**
     * PATDOC: A person enters documentation about a given patient.
     */
    PatientDocumentationTask = "PATDOC",
    /**
     * PATEDUE: A person provides a patient-specific education handout to a patient.
     */
    PatientEducationEntry = "PATEDUE",
    /**
     * PATINFO: A person (e.g., clinician, the patient herself) reviews patient information in the electronic medical record.
     */
    PatientInformationReviewTask = "PATINFO",
    /**
     * PATPREF: Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.
     */
    ViolatesStatedPreferences = "PATPREF",
    /**
     * PATPREFALT: Definition:The proposed therapy goes against preferences or consent constraints recorded in the patient's record.  An alternate therapy meeting those constraints is available.
     */
    ViolatesStatedPreferencesAlternateAvailable = "PATPREFALT",
    /**
     * PATREPE: A pathologist enters a report for a given patient.
     */
    PathologyReportEntryTask = "PATREPE",
    /**
     * PATREPREV: A person reviews a pathology report of a given patient.
     */
    PathologyReportReviewTask = "PATREPREV",
    /**
     * PAY: The guarantor, who may be the patient, pays the entire charge for a service. Reasons for such action may include: there is no insurance coverage for the service (e.g. cosmetic surgery); the patient wishes to self-pay for the service; or the insurer denies payment for the service due to contractual provisions such as the need for prior authorization.
     */
    Payment = "PAY",
    /**
     * PAYEE: Transaction counts and value totals by each instance of an invoice payee.
     */
    Payee = "PAYEE",
    /**
     * PAYOR: Transaction counts and value totals by each instance of an invoice payor.
     */
    Payor = "PAYOR",
    /**
     * PBILLACCT: An account representing charges and credits (financial transactions) for a patient's encounter.
     */
    PatientBillingAccount = "PBILLACCT",
    /**
     * PDNFPPELAT: Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically.
     */
    PaidNullifiedPriorPeriodElectronicAmount = "PDNFPPELAT",
    /**
     * PDNFPPELCT: Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically.
     */
    PaidNullifiedPriorPeriodElectronicCount = "PDNFPPELCT",
    /**
     * PDNFPPMNAT: Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually.
     */
    PaidNullifiedPriorPeriodManualAmount = "PDNFPPMNAT",
    /**
     * PDNFPPMNCT: Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually.
     */
    PaidNullifiedPriorPeriodManualCount = "PDNFPPMNCT",
    /**
     * PDNFSPELAT: Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted electronically.
     */
    PaidNullifiedSamePeriodElectronicAmount = "PDNFSPELAT",
    /**
     * PDNFSPELCT: Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date), subsequently cancelled in the specified period and submitted electronically.
     */
    PaidNullifiedSamePeriodElectronicCount = "PDNFSPELCT",
    /**
     * PDNFSPMNAT: Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually.
     */
    PaidNullifiedSamePeriodManualAmount = "PDNFSPMNAT",
    /**
     * PDNFSPMNCT: Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date), subsequently nullified in the specified period and submitted manually.
     */
    PaidNullifiedSamePeriodManualCount = "PDNFSPMNCT",
    /**
     * PDNPPPELAT: Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    PaidNonPayeePayablePriorPeriodElectronicAmount = "PDNPPPELAT",
    /**
     * PDNPPPELCT: Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    PaidNonPayeePayablePriorPeriodElectronicCount = "PDNPPPELCT",
    /**
     * PDNPPPMNAT: Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    PaidNonPayeePayablePriorPeriodManualAmount = "PDNPPPMNAT",
    /**
     * PDNPPPMNCT: Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    PaidNonPayeePayablePriorPeriodManualCount = "PDNPPPMNCT",
    /**
     * PDNPSPELAT: Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    PaidNonPayeePayableSamePeriodElectronicAmount = "PDNPSPELAT",
    /**
     * PDNPSPELCT: Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted electronically.
     */
    PaidNonPayeePayableSamePeriodElectronicCount = "PDNPSPELCT",
    /**
     * PDNPSPMNAT: Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    PaidNonPayeePayableSamePeriodManualAmount = "PDNPSPMNAT",
    /**
     * PDNPSPMNCT: Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date) that do not match a specified payee (e.g. pay patient) and submitted manually.
     */
    PaidNonPayeePayableSamePeriodManualCount = "PDNPSPMNCT",
    /**
     * PDPPPPELAT: Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    PaidPayeePayablePriorPeriodElectronicAmount = "PDPPPPELAT",
    /**
     * PDPPPPELCT: Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    PaidPayeePayablePriorPeriodElectronicCount = "PDPPPPELCT",
    /**
     * PDPPPPMNAT: Identifies the total net amount of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    PaidPayeePayablePriorPeriodManualAmount = "PDPPPPMNAT",
    /**
     * PDPPPPMNCT: Identifies the total number of all  Invoice Groupings that were paid prior to the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    PaidPayeePayablePriorPeriodManualCount = "PDPPPPMNCT",
    /**
     * PDPPSPELAT: Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    PaidPayeePayableSamePeriodElectronicAmount = "PDPPSPELAT",
    /**
     * PDPPSPELCT: Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted electronically.
     */
    PaidPayeePayableSamePeriodElectronicCount = "PDPPSPELCT",
    /**
     * PDPPSPMNAT: Identifies the total net amount of all  Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    PaidPayeePayableSamePeriodManualAmount = "PDPPSPMNAT",
    /**
     * PDPPSPMNCT: Identifies the total number of all  Invoice Groupings that were paid during the specified time period (based on payment date) that match a specified payee (e.g. pay provider) and submitted manually.
     */
    PaidPayeePayableSamePeriodManualCount = "PDPPSPMNCT",
    /**
     * PDS: Policy for specially protecting information reported by or about a patient, which is deemed sensitive within the enterprise (i.e., by default regardless of whether the patient requested that the information be deemed sensitive for another reason.) For example information reported by the patient about another person, e.g., a family member, may be deemed sensitive by default. Organizational policy may allow the sensitivity tag to be cleared on patient's request.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     *
     *                         For example, VA deems employee information sensitive by default.  Information about a patient who is being stalked or a victim of abuse or violence may be deemed sensitive by default per a provider organization's policies.
     */
    PatientDefaultInformationSensitivity = "PDS",
    /**
     * PEALRT: Proposed therapy is outside of the standard practice for a pediatric patient.
     */
    PediatricAlert = "PEALRT",
    /**
     * PED: Provision of diagnosis and treatment of diseases and disorders affecting children.
     */
    Pediatrics = "PED",
    /**
     * PERFEE: Anticipated or actual periodic fee associated with treating a patient. For example, expected billing cycle such as monthly, quarterly. The actual period (e.g. monthly, quarterly) is specified in the unit quantity of the Invoice Element.
     */
    PeriodicFee = "PERFEE",
    /**
     * PERIOD: Transaction counts and value totals for the date range specified.
     */
    Period = "PERIOD",
    /**
     * PERMBNS: The amount for a performance bonus that is being requested from a payor for the performance of certain services (childhood immunizations, influenza immunizations, mammograms, pap smears) on a sliding scale. That is, for 90% of childhood immunizations to a maximum of $2200/yr. An invoice is created at the end of the service period (one year) and a code is submitted indicating the percentage achieved and the dollar amount claimed.
     */
    PerformanceBonus = "PERMBNS",
    /**
     * PERSISTLABEL: Custodian security system must persist the binding of security labels to classify information received or imported by information systems under its control for collection, access, use and disclosure in accordance with applicable jurisdictional privacy policies associated with the target information.  The system must retain an immutable record of the assignment and binding.
     */
    PersistSecurityLabel = "PERSISTLABEL",
    /**
     * PHAR: Pharmaceutical care performed by a pharmacist.
     */
    Pharmaceutical = "PHAR",
    /**
     * PHY: Policy for handling information about a patient, which a physician or other licensed healthcare provider deems sensitive.  Once tagged by the provider, this may trigger alerts for follow up actions according to organizational policy or jurisdictional law.
     *
     *
     *                            Usage Note: For use within an enterprise that provides heightened confidentiality to certain types of information designated by a physician as sensitive. If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     *
     *                         Use cases in which this code could be used are, e.g.,  in systems that lack the ability to automatically detect sensitive information and must rely on manual tagging; a system that lacks an applicable sensitivity tag, or for ad hoc situations where criticality of the situation requires that the tagging be done immediately by the provider before coding or transcription of consult notes can be completed, e.g., upon detection of a patient with suicidal tendencies or potential for violence.
     */
    PhysicianRequestedInformationSensitivity = "PHY",
    /**
     * PHYRHB: Provision of treatment for physical injury.
     */
    PhysicalRehab = "PHYRHB",
    /**
     * PIE: Public Insurance has been exhausted.  Invoice has not been sent to Public Insuror and therefore no Explanation Of Benefits (EOB) is provided with this Invoice submission.
     */
    PublicInsuranceExhausted = "PIE",
    /**
     * PINV: Payment initiated by the payor as the result of adjudicating a paper (original, may have been faxed) invoice.
     */
    PaperInvoice = "PINV",
    /**
     * PLACE: Description: An interaction where the exposure participants were both present in the same location/place/space.
     */
    CommonSpaceInteraction = "PLACE",
    /**
     * PLACTRNS: Communication of an agent from a living subject to the progeny of that living subject via agent migration across the maternal-fetal placental membranes while in utero.
     */
    TransplacentalTransmission = "PLACTRNS",
    /**
     * PLYDOC: A similar or identical therapy was recently ordered by a different practitioner.
     */
    PolyOrdererAlert = "PLYDOC",
    /**
     * PLYPHRM: This patient was recently supplied a similar or identical therapy from a different pharmacy or supplier.
     */
    PolySupplierAlert = "PLYPHRM",
    /**
     * PNC: Definition: A type of insurance that covers damage to or loss of the policyholderaTMs property by providing payments for damages to property damage or the injury or death of living subjects.  The terms "casualty" and "liability" insurance are often used interchangeably. Both cover the policyholder's legal liability for damages caused to other persons and/or their property.
     */
    PropertyAndCasualtyInsurancePolicy = "PNC",
    /**
     * POINT: A single point denoted by a single (column,row) pair, or multiple points each denoted by a (column,row) pair.
     */
    Point = "POINT",
    /**
     * POLY: A series of connected line segments with ordered vertices denoted by (column,row) pairs; if the first and last vertices are the same, it is a closed polygon.
     */
    Polyline = "POLY",
    /**
     * POS: Definition: A policy for a health plan that has features of both an HMO and a FFS plan.  Like an HMO, a POS plan encourages the use its HMO network to maintain discounted fees with participating providers, but recognizes that sometimes covered parties want to choose their own provider.  The POS plan allows a covered party to use providers who are not part of the HMO network (non-participating providers).  However, there is a greater cost associated with choosing these non-network providers. A covered party will usually pay deductibles and coinsurances that are substantially higher than the payments when he or she uses a plan provider. Use of non-participating providers often requires the covered party to pay the provider directly and then to file a claim for reimbursement, like in an FFS plan.
     */
    PointOfServicePolicy = "POS",
    /**
     * PPO: Definition: A network-based, managed care plan that allows a covered party to choose any health care provider. However, if care is received from a "preferred" (participating in-network) provider, there are generally higher benefit coverage and lower deductibles.
     */
    PreferredProviderOrganizationPolicy = "PPO",
    /**
     * PPRD: An amount that was owed to the payor as indicated, by a carry forward adjusment, in a previous payment advice
     */
    PriorPeriodAdjustment = "PPRD",
    /**
     * Code: PRA
     */
    PRA = "PRA",
    /**
     * PRDING: A grouping of invoice element details including the one specifying the product (good or supply) being invoiced. It may also contain generic detail items such as tax or discount.
     */
    ProductInvoiceGroup = "PRDING",
    /**
     * PRDMX: Definition: Maximum amount paid by payer or covered party; or maximum number of services/products covered under the policy or program by time period specified by the effective time on the act.
     */
    PeriodMaximum = "PRDMX",
    /**
     * PRE: The dilution of the specimen made prior to being loaded onto analytical equipment
     */
    PreDilution = "PRE",
    /**
     * PREFSTRENGTH: An observation about how important a preference is to the target of the preference.
     */
    PreferenceStrength = "PREFSTRENGTH",
    /**
     * PREG: Proposed therapy may be inappropriate or contraindicated during pregnancy
     */
    PregnancyAlert = "PREG",
    /**
     * PRENC: A patient encounter where patient is scheduled or planned to receive service delivery in the future, and the patient is given a pre-admission account number. When the patient comes back for subsequent service, the pre-admission encounter is selected and is encapsulated into the service registration, and a new account number is generated.
     *
     *
     *                            Usage Note: This is intended to be used in advance of encounter types such as ambulatory, inpatient encounter, virtual, etc.
     */
    PreAdmission = "PRENC",
    /**
     * PREVINEF: Definition:The same or similar treatment has previously been attempted with the patient without achieving a positive effect.
     */
    PreviouslyIneffective = "PREVINEF",
    /**
     * PRIVMARK: Custodian must create and/or maintain human readable security label tags as required by policy.
     *
     *                         Map:  Aligns with ISO 22600-3 Section A.3.4.3 description of privacy mark:  "If present, the privacy-mark is not used for access control. The content of the privacy-mark may be defined by the security policy in force (identified by the security-policy-identifier) which may define a list of values to be used. Alternately, the value may be determined by the originator of the security-label."
     */
    PrivacyMark = "PRIVMARK",
    /**
     * PRLMN: Description:Indicates that a result is incomplete.  There are further results to come.  This maps to the 'active' state in the observation result status code.
     */
    Preliminary = "PRLMN",
    /**
     * PRN: Definition:A list of medications which the patient will consume intermittently based on the behavior of the condition for which the medication is indicated.
     */
    AsNeeded = "PRN",
    /**
     * PROA: Professional association fee that is collected by the payor from the practitioner/provider on behalf of the association
     */
    ProfessionalAssociationDeduction = "PROA",
    /**
     * PROBLIST: List of problem observations.
     */
    ProblemList = "PROBLIST",
    /**
     * PROBLISTE: A clinician enters a problem for a given patient.
     */
    ProblemListEntryTask = "PROBLISTE",
    /**
     * PROBLISTREV: A person reviews a list of problems of a given patient.
     */
    ProblemListReviewTask = "PROBLISTREV",
    /**
     * PROV: Transaction counts and value totals by Provider Identifier.
     */
    Provider = "PROV",
    /**
     * PRS: Policy for specially protecting information reported by or about a patient, which the patient deems sensitive, and the patient requests that collection, access, use, or disclosure of that information be restricted.  For example, a minor patient may request that information about reproductive health not be disclosed to the patient's family or to particular providers and payers.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    PatientRequestedInformationSensitivity = "PRS",
    /**
     * PRVTRN: private transport
     */
    PrivateTransport = "PRVTRN",
    /**
     * PSEUD: Custodian system must strip information of data that would allow the identification of the source of the information or the information subject.  Custodian may retain a key to relink data necessary to reidentify the information subject.
     */
    Pseudonymize = "PSEUD",
    /**
     * PST: Tax levied by the provincial or state jurisdiction such as Provincial Sales Tax
     */
    ProvincialStateSalesTax = "PST",
    /**
     * PSVCCAT: Definition:All information pertaining to a patient's professional service records (such as smoking cessation, counseling, medication review, mental health).
     */
    ProfessionalServiceCategory = "PSVCCAT",
    /**
     * PSY: Policy for handling psychiatry psychiatric disorder information, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    PsychiatryDisorderInformationSensitivity = "PSY",
    /**
     * PSYCH: Provision of treatment of psychiatric disorder relating to mental illness.
     */
    Psychiatric = "PSYCH",
    /**
     * PSYTHPN: Policy for handling psychotherapy note information, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: In some jurisdiction, disclosure of psychotherapy notes requires patient consent.
     *
     *                         If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    PsychotherapyNoteInformationSensitivity = "PSYTHPN",
    /**
     * PTNTCARE: Description: Exposure participants' interaction occurred during the course of  health care delivery by a provider (e.g. a physician treating a patient in her office).
     */
    HealthCareInteractionPatientCare = "PTNTCARE",
    /**
     * PUBLICPOL: Insurance policy funded by a public health system such as a provincial or national health plan.  Examples include BC MSP (British Columbia 	Medical Services Plan) OHIP (Ontario Health Insurance Plan), NHS (National Health Service).
     */
    PublicHealthcare = "PUBLICPOL",
    /**
     * PUBTRN: public transport
     */
    PublicTransport = "PUBTRN",
    /**
     * PYRDELAY: Allows provider to explain lateness of invoice to a subsequent payor.
     */
    DelayedByAPreviousPayor = "PYRDELAY",
    /**
     * R: Status is used by one system to inform another that the processing has been completed, but the container has not been released from that system.
     */
    ProcessCompleted = "R",
    /**
     * RACE: Policy for handling information related to an information subject's race, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's race, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    RaceInformationSensitivity = "RACE",
    /**
     * RADREPE: A radiologist enters a report for a given patient.
     */
    RadiologyReportEntryTask = "RADREPE",
    /**
     * RADREPREV: A person reviews a radiology report of a given patient.
     */
    RadiologyReportReviewTask = "RADREPREV",
    /**
     * RALG: Proposed therapy may be inappropriate or contraindicated because of a recorded patient allergy to a cross-sensitivity related product.  (Allergies are immune based reactions.)
     */
    RelatedAllergyAlert = "RALG",
    /**
     * RAR: Proposed therapy may be inappropriate or contraindicated because of a recorded prior adverse reaction to a cross-sensitivity related product.
     */
    RelatedPriorReactionAlert = "RAR",
    /**
     * RAT: Succinct statement of the need for the measure. Usually includes statements pertaining to Importance criterion: impact, gap in care and evidence.
     */
    Rationale = "RAT",
    /**
     * RD: A diet that seeks to reduce body fat, typically low energy content (800-1600 kcal).
     */
    ReductionDiet = "RD",
    /**
     * REACT: Proposed therapy may be inappropriate or contraindicated based on the potential for a patient reaction to the proposed product
     */
    ReactionAlert = "REACT",
    /**
     * RECA: The addition of calcium back to a specimen after it was removed by chelating agents
     */
    Recalcification = "RECA",
    /**
     * RECOV: Retroactive adjustment such as fee rate adjustment due to contract negotiations.
     */
    Recovery = "RECOV",
    /**
     * REDACT: Custodian system must remove information, which is not authorized to be access, used, or disclosed from records made available to otherwise authorized users.
     */
    Redact = "REDACT",
    /**
     * REF: Identifies bibliographic citations or references to clinical practice guidelines, sources of evidence, or other relevant materials supporting the intent and rationale of the eMeasure.
     */
    Reference = "REF",
    /**
     * REFLEX: Specifies whether or not further testing may be automatically or manually initiated on specimens.
     */
    ReflexPermission = "REFLEX",
    /**
     * REFNR: Rules of practice do not require a physician's referral for the provider to perform a billable service.
     */
    ReferralNotRequired = "REFNR",
    /**
     * RefrainPolicy: Conveys prohibited actions which an information custodian, receiver, or user is not permitted to perform unless otherwise authorized or permitted under specified circumstances.
     *
     *
     *
     *
     *                            Usage Notes: ISO 22600-2 species that a Refrain Policy "defines actions the subjects must refrain from performing".  Per HL7 Composite Security and Privacy Domain Analysis Model:  May be used to indicate that a specific action is prohibited based on specific access control attributes e.g., purpose of use, information type, user role, etc.
     */
    RefrainPolicy = "RefrainPolicy",
    /**
     * REI: Definition: An agreement between two or more insurance companies by which the risk of loss is proportioned. Thus the risk of loss is spread and a disproportionately large loss under a single policy does not fall on one insurance company. Acceptance by an insurer, called a reinsurer, of all or part of the risk of loss of another insurance company.
     *
     *
     *                            Discussion: Reinsurance is a means by which an insurance company can protect itself against the risk of losses with other insurance companies. Individuals and corporations obtain insurance policies to provide protection for various risks (hurricanes, earthquakes, lawsuits, collisions, sickness and death, etc.). Reinsurers, in turn, provide insurance to insurance companies.
     *
     *                         For example, an HMO may purchase a reinsurance policy to protect itself from losing too much money from one insured's particularly expensive health care costs. An insurance company issuing an automobile liability policy, with a limit of $100,000 per accident may reinsure its liability in excess of $10,000. A fire insurance company which issues a large policy generally reinsures a portion of the risk with one or several other companies. Also called risk control insurance or stop-loss insurance.
     */
    ReinsurancePolicy = "REI",
    /**
     * REL: Policy for handling information related to an information subject's religious affiliation, which will be afforded heightened confidentiality.  Policies may govern sensitivity of information related to an information subject's religion, the disclosure of which could impact the privacy, well-being, or safety of that subject.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    ReligionInformationSensitivity = "REL",
    /**
     * REMLE: Description: A person enters a health care reminder for a given patient.
     */
    ReminderListEntry = "REMLE",
    /**
     * REMLREV: Description: A person reviews a list of health care reminders for a given patient.
     */
    ReminderListReview = "REMLREV",
    /**
     * RENT: Temporary supply of a product with financial compensation, without transfer of ownership for the product.
     */
    Rent = "RENT",
    /**
     * REP_HALF_LIFE: Description:This observation represents an 'average' or 'expected' half-life typical of the product.
     */
    RepresentativeHalfLife = "REP_HALF_LIFE",
    /**
     * REP_RANGE: Description:The number of repeating elements falls outside the range of the allowed number of repetitions.
     */
    RepetitionsOutOfRange = "REP_RANGE",
    /**
     * REPRESENTATIVE_BEAT: This Observation Series type contains waveforms of a "representative beat" (a.k.a. "median beat" or "average beat").  The waveform samples are measured in relative time, relative to the beginning of the beat as defined by the Observation Series effective time.  The waveforms are not directly acquired from the subject, but rather algorithmically derived from the "rhythm" waveforms.
     */
    ECGRepresentativeBeatWaveforms = "REPRESENTATIVE_BEAT",
    /**
     * REPSERV: The same service was delivered within a time period that would usually indicate a duplicate billing.  However, the repeated service is a medical 	necessity and therefore not a duplicate.
     */
    RepeatedService = "REPSERV",
    /**
     * RERUN: The value of the dilution of a sample after it had been analyzed at a prior dilution value
     */
    RerunDilution = "RERUN",
    /**
     * RESCOMPT: A security category label field value, which indicates that access and use of an IT resource is restricted to members of a research project.
     */
    ResearchProjectCompartment = "RESCOMPT",
    /**
     * RESEARCH: Definition: Consent to have healthcare information in an electronic health record accessed for research purposes.
     */
    ResearchInformationAccess = "RESEARCH",
    /**
     * RESTOCK: A charge is requested because the patient failed to pick up the item and it took an amount of time to return it to stock for future use.
     */
    RestockingFee = "RESTOCK",
    /**
     * RETIRE: Definition: A government mandated program with specific eligibility requirements based on premium contributions made during employment, length of employment, age, and employment status, e.g., being retired, disabled, or a dependent of a covered party under this program.   Benefits typically include ambulatory, inpatient, and long-term care, such as hospice care, home health care and respite care.
     */
    RetireeHealthProgram = "RETIRE",
    /**
     * RETRO: Bonus payments based on performance, volume, etc. as agreed to by the payor.
     */
    RetroAdjustment = "RETRO",
    /**
     * REV: A type of transaction that represents a reversal of a previous charge for a service or product. Expressed in monetary terms.  It has the opposite effect of a standard charge.
     */
    StandardChargeReversal = "REV",
    /**
     * RF: A fill against an order that has already been filled (or partially filled) at least once.
     */
    Refill = "RF",
    /**
     * RFC: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.)
     */
    RefillComplete = "RFC",
    /**
     * RFCS: A refill where the quantity supplied is equal to one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a complete fill would be for the full 90 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillCompletePartialStrength = "RFCS",
    /**
     * RFF: The first fill against an order that has already been filled at least once at another facility.
     */
    RefillFirstFillThisFacility = "RFF",
    /**
     * RFFS: The first fill against an order that has already been filled at least once at another facility and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillPartialStrengthFirstFillThisFacility = "RFFS",
    /**
     * RFP: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.)
     */
    RefillPartFill = "RFP",
    /**
     * RFPS: A refill where the quantity supplied is less than one full repetition of the ordered amount. (e.g. If the order was 90 tablets, 3 refills, a partial fill might be for only 30 tablets.) and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillPartFillPartialStrength = "RFPS",
    /**
     * RFS: A fill against an order that has already been filled (or partially filled) at least once and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    RefillPartialStrength = "RFS",
    /**
     * RHYTHM: This Observation type contains ECG "rhythm" waveforms.  The waveform samples are measured in absolute time (a.k.a. "subject time" or "effective time").  These waveforms are usually "raw" with some minimal amount of noise reduction and baseline filtering applied.
     */
    ECGRhythmWaveforms = "RHYTHM",
    /**
     * RINT: Proposed therapy may be inappropriate or contraindicated because of a recorded patient intolerance to a cross-sensitivity related product.  (Intolerances are non-immune based sensitivities.)
     */
    RelatedIntoleranceAlert = "RINT",
    /**
     * RISKASSESS: A person reviews a Risk Assessment Instrument report of a given patient.
     */
    RiskAssessmentInstrumentTask = "RISKASSESS",
    /**
     * RISKLIST: List of risk factor observations.
     */
    RiskFactors = "RISKLIST",
    /**
     * RMGTCOMPT: A security category label field value, which indicates that access and use of an IT resource is restricted to members of records management department or workflow.
     */
    RecordsManagementCompartment = "RMGTCOMPT",
    /**
     * ROIFS: A fully specified bounded Region of Interest (ROI) delineates a ROI in which only those dimensions participate that are specified by boundary criteria, whereas all other dimensions are excluded.  For example a ROI to mark an episode of "ST elevation" in a subset of the EKG leads V2, V3, and V4 would include 4 boundaries, one each for time, V2, V3, and V4.
     */
    FullySpecifiedROI = "ROIFS",
    /**
     * ROIPS: A partially specified bounded Region of Interest (ROI) specifies a ROI in which at least all values in the dimensions specified by the boundary criteria participate. For example, if an episode of ventricular fibrillations (VFib) is observed, it usually doesn't make sense to exclude any EKG leads from the observation and the partially specified ROI would contain only one boundary for time indicating the time interval where VFib was observed.
     */
    PartiallySpecifiedROI = "ROIPS",
    /**
     * ROST: A billing arrangement where funding is based on a list of individuals registered as patients of the Provider.
     */
    RosterFunding = "ROST",
    /**
     * RREACT: Proposed therapy may be inappropriate or contraindicated because of a potential patient reaction to a cross-sensitivity related product.
     */
    RelatedReactionAlert = "RREACT",
    /**
     * RSDID: Definition: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes, but without consent to re-identify the information under any circumstance.
     */
    DeIdentifiedInformationAccess = "RSDID",
    /**
     * RSREID: Definition: Consent to have de-identified healthcare information in an electronic health record that is accessed for research purposes re-identified under specific circumstances outlined in the consent.
     *
     *
     *                            Example:: Where there is a need to inform the subject of potential health issues.
     */
    ReIdentifiableInformationAccess = "RSREID",
    /**
     * RX: Some form of prescription is required before the related medicine can be supplied for a patient.  The exact form of regulation will vary in different realms.
     */
    PrescriptionOnlyMedicine = "RX",
    /**
     * RXCAT: Definition:All information pertaining to a patient's medication records (orders, dispenses and other active medications).
     */
    MedicationCategory = "RXCAT",
    /**
     * RXCINV: Pharmacy dispense invoice for a compound.
     */
    RxCompoundInvoice = "RXCINV",
    /**
     * RXDINV: Pharmacy dispense invoice not involving a compound
     */
    RxDispenseInvoice = "RXDINV",
    /**
     * S: Uniquely designed and elegantly decorated accommodations with many amenities available for an additional charge.
     */
    Suite = "S",
    /**
     * SA: Definition:A drug that requires prior approval (to be reimbursed) before being dispensed
     */
    SpecialAuthorization = "SA",
    /**
     * SAC: Description:A drug that requires special access permission to be prescribed and dispensed.
     */
    SpecialAccess = "SAC",
    /**
     * SAFNET: Definition: Government administered and funded program to support provision of care to underserved populations through safety net clinics.
     *
     *
     *                            Example: In the U.S., safety net providers such as federally qualified health centers (FQHC) receive funding under PHSA Section 330 grants administered by the Health Resources and Services Administration.
     */
    SafetyNetClinicProgram = "SAFNET",
    /**
     * SALE: Transfer of ownership for a product for financial compensation.
     */
    Sale = "SALE",
    /**
     * SBBLELAT: Identifies the total net amount billed for all submitted Invoice Groupings within a time period and submitted electronically.  Adjudicated invoice elements are included.
     */
    SubmittedBilledElectronicAmount = "SBBLELAT",
    /**
     * SBBLELCT: Identifies the total number of submitted Invoice Groupings within a time period and submitted electronically.  Adjudicated invoice elements are included.
     */
    SubmittedBilledElectronicCount = "SBBLELCT",
    /**
     * SBFINV: Clinical services invoice where the Invoice Group contains one billable item for multiple clinical services in one or more sessions.
     */
    SessionalOrBlockFeeInvoice = "SBFINV",
    /**
     * SBNFELAT: Identifies the total net amount billed for all submitted  Invoice Groupings that were nullified within a time period and submitted electronically.  Adjudicated invoice elements are included.
     */
    SubmittedNullifiedElectronicAmount = "SBNFELAT",
    /**
     * SBNFELCT: Identifies the total number of submitted  Invoice Groupings that were nullified within a time period and submitted electronically.  Adjudicated invoice elements are included.
     */
    SubmittedCancelledElectronicCount = "SBNFELCT",
    /**
     * SBPDELAT: Identifies the total net amount billed for all submitted  Invoice Groupings that are pended or held by the payor, within a time period and submitted electronically.  Adjudicated invoice elements are not included.
     */
    SubmittedPendingElectronicAmount = "SBPDELAT",
    /**
     * SBPDELCT: Identifies the total number of submitted  Invoice Groupings that are pended or held by the payor, within a time period and submitted electronically.  Adjudicated invoice elements are not included.
     */
    SubmittedPendingElectronicCount = "SBPDELCT",
    /**
     * SCA: Policy for handling sickle cell disease information, which is afforded heightened confidentiality.  Information handling protocols are based on organizational policies related to sickle cell disease information, which is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then the Act valued with this ActCode should be associated with an Act valued with any applicable laws from the ActPrivacyLaw code system.
     */
    SickleCellAnemiaInformationSensitivity = "SCA",
    /**
     * SCH: A diet that avoids ingredients that might cause digestion problems, e.g., avoid excessive fat, avoid too much fiber (cabbage, peas, beans).
     */
    SchonkostGE = "SCH",
    /**
     * SCHL: Description: The school the patient attended when immunized.
     */
    School = "SCHL",
    /**
     * SCHLDIV: Description: The school division or district associated with the patient during the immunization event.
     */
    SchoolDivision = "SCHLDIV",
    /**
     * SCHOOL: Incident or accident is the result of a school place accident.
     */
    SchoolAccident = "SCHOOL",
    /**
     * SCHOOL2: Description: Exposure participants' interaction occurred in an academic setting (e.g., participants are fellow students, or student and teacher).
     */
    SchoolInteraction = "SCHOOL2",
    /**
     * SDE: Comparison of results across strata can be used to show where disparities exist or where there is a need to expose differences in results. For example, Centers for Medicare &amp; Medicaid Services (CMS) in the U.S. defines four required Supplemental Data Elements (payer, ethnicity, race, and gender), which are variables used to aggregate data into various subgroups. Additional supplemental data elements required for risk adjustment or other purposes of data aggregation can be included in the Supplemental Data Element section.
     */
    SupplementalDataElements = "SDE",
    /**
     * SDV: Policy for handling sexual assault, abuse, or domestic violence information, which will be afforded heightened confidentiality. Information handling protocols based on organizational policies related to sexual assault, abuse, or domestic violence information that is deemed sensitive.
     *
     *                         SDV code covers violence perpetrated by related and non-related persons. This code should be specific to physical and mental trauma caused by a related person only.  The access control concerns are keeping the patient safe from the perpetrator who may have an abusive psychological control over the patient, may be stalking the patient, or may try to manipulate care givers into allowing the perpetrator to make contact with the patient.  The definition needs to be clarified.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    SexualAssaultAbuseOrDomesticViolenceInformationSensitivity = "SDV",
    /**
     * SECALTINTOBS: Type of security metadata observation made about the alteration integrity of an IT resource (data, information object, service, or system capability), which indicates the mechanism used for authorized transformations of the resource.
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
    SecurityAlterationIntegrityObservation = "SECALTINTOBS",
    /**
     * SECCATOBS: Type of security metadata observation made about the category of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions. Security category metadata is defined by ISO/IEC 2382-8:1998(E/F)/ T-REC-X.812-1995 as: "A nonhierarchical grouping of sensitive information used to control access to data more finely than with hierarchical security classification alone."
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
    SecurityCategoryObservation = "SECCATOBS",
    /**
     * SECCLASSOBS: Type of security metadata observation made about the classification of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.  Security classification is defined by ISO/IEC 2382-8:1998(E/F)/ T-REC-X.812-1995 as: "The determination of which specific degree of protection against access the data or information requires, together with a designation of that degree of protection."  Security classification metadata is based on an analysis of applicable policies and the risk of financial, reputational, or other harm that could result from unauthorized disclosure.
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
    SecurityClassificationObservation = "SECCLASSOBS",
    /**
     * SECCONOBS: Type of security metadata observation made about the control of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.  Security control metadata convey instructions to users and receivers for secure distribution, transmission, and storage; dictate obligations or mandated actions; specify any action prohibited by refrain policy such as dissemination controls; and stipulate the permissible purpose of use of an IT resource.
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
    SecurityControlObservation = "SECCONOBS",
    /**
     * SECDATINTOBS: Type of security metadata observation made about the data integrity of an IT resource (data, information object, service, or system capability), which indicates the security mechanism used to preserve resource accuracy and consistency.  Data integrity is defined by ISO 22600-23.3.21 as: "The property that data has not been altered or destroyed in an unauthorized manner", and by ISO/IEC 2382-8:  The property of data whose accuracy and consistency are preserved regardless of changes made."
     *
     *
     *                            Examples: Types of security data integrity observation metadata, which may value the observation, include cryptographic hash function and digital signature.
     */
    SecurityDataIntegrityObservation = "SECDATINTOBS",
    /**
     * SECINTCONOBS: Type of security metadata observation made about the integrity confidence of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.
     *
     *
     *                            Examples: Types of security integrity confidence observation metadata, which may value the observation, include highly reliable, uncertain reliability, and not reliable.
     *
     *
     *                            Usage Note: A security integrity confidence observation on an Act may indicate that a valued Act.uncertaintycode attribute has been overridden by the entity responsible for ascribing the SecurityIntegrityConfidenceObservationValue.  This supports the business requirements for increasing or decreasing the assessment of the reliability or trustworthiness of an IT resource based on parameters beyond the original assignment of an Act statement level of uncertainty.
     */
    SecurityIntegrityConfidenceObservation = "SECINTCONOBS",
    /**
     * SECINTOBS: Type of security metadata observation made about the integrity of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.
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
    SecurityIntegrityObservation = "SECINTOBS",
    /**
     * SECINTPRVABOBS: Type of security metadata observation made about the integrity provenance of an IT resource (data, information object, service, or system capability), which indicates the entity that made assertions about the resource.  The asserting entity may not be the original informant about the resource.
     *
     *
     *                            Examples: Types of security integrity provenance asserted by observation metadata, which may value the observation, including:
     *
     *
     *                            assertions about an IT resource by a patient
     *                            assertions about an IT resource by a clinician
     *                            assertions about an IT resource by a device
     */
    SecurityIntegrityProvenanceAssertedByObservation = "SECINTPRVABOBS",
    /**
     * SECINTPRVOBS: Type of security metadata observation made about the provenance integrity of an IT resource (data, information object, service, or system capability), which indicates the lifecycle completeness of an IT resource in terms of workflow status such as its creation, modification, suspension, and deletion; locations in which the resource has been collected or archived, from which it may be retrieved, and the history of its distribution and disclosure.  Integrity provenance metadata about an IT resource may be used to assess its veracity, reliability, and trustworthiness.
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
    SecurityIntegrityProvenanceObservation = "SECINTPRVOBS",
    /**
     * SECINTPRVRBOBS: Type of security metadata observation made about the integrity provenance of an IT resource (data, information object, service, or system capability), which indicates the entity that reported the existence of the resource.  The reporting entity may not be the original author of the resource.
     *
     *
     *                            Examples: Types of security integrity provenance reported by observation metadata, which may value the observation, include:
     *
     *
     *                            reports about an IT resource by a patient
     *                            reports about an IT resource by a clinician
     *                            reports about an IT resource by a device
     */
    SecurityIntegrityProvenanceReportedByObservation = "SECINTPRVRBOBS",
    /**
     * SECINTSTOBS: Type of security metadata observation made about the integrity status of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.  Indicates the completeness of an IT resource in terms of workflow status, which may impact users that are authorized to access and use the resource.
     *
     *
     *                            Examples: Types of security integrity status observation metadata, which may value the observation, include codes from the HL7 DocumentCompletion code system such as legally authenticated, in progress, and incomplete.
     */
    SecurityIntegrityStatusObservation = "SECINTSTOBS",
    /**
     * SECOBS: An observation identifying security metadata about an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.  Security metadata are used to name security labels.
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
    SecurityObservationType = "SECOBS",
    /**
     * SECTRSTOBS: An observation identifying trust metadata about an IT resource (data, information object, service, or system capability), which may be used as a trust attribute to populate a computable trust policy, trust credential, trust assertion, or trust label field in a security label or trust policy, which are principally used for authentication, authorization, and access control decisions.
     */
    SECTRSTOBS = "SECTRSTOBS",
    /**
     * SecurityPolicy: Types of security policies that further specify the ActClassPolicy value set.
     *
     *
     *                            Examples:
     *
     *
     *
     *                            obligation to encrypt
     *                            refrain from redisclosure without consent
     */
    SecurityPolicy = "SecurityPolicy",
    /**
     * SENDAPP: Transaction counts and value totals by each instance of a messaging application on a single processor. It is a registered identifier known to the receivers.
     */
    SendingApplication = "SENDAPP",
    /**
     * SESS: A billing arrangement where a Provider charges a sum to provide a group (volume) of interventions/procedures to one or more patients within a defined period of time, typically on the same date.  Interventions/procedures included in the session may vary.
     */
    SessionalFunding = "SESS",
    /**
     * SEV: A subjective evaluation of the seriousness or intensity associated with another observation.
     */
    SeverityObservation = "SEV",
    /**
     * SEX: Policy for handling sexuality and reproductive health information, which will be afforded heightened confidentiality.  Information handling protocols based on organizational policies related to sexuality and reproductive health information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    SexualityAndReproductiveHealthInformationSensitivity = "SEX",
    /**
     * SEXTRNS: Communication of an agent from one living subject to another living subject through direct contact with genital or oral tissues as part of a sexual act.
     */
    SexualTransmission = "SEXTRNS",
    /**
     * SICKLE: Types of sensitivity policies that apply to Acts.  Act.confidentialityCode is defined in the RIM as "constraints around appropriate disclosure of information about this Act, regardless of mood."
     *
     *
     *                            Usage Note: ActSensitivity codes are used to bind information to an Act.confidentialityCode according to local sensitivity policy so that those confidentiality codes can then govern its handling across enterprises.  Internally to a policy domain, however, local policies guide the access control system on how end users in that policy domain are able to use information tagged with these sensitivity values.
     */
    SickleCell = "SICKLE",
    /**
     * SO: An emergency supply where the expectation is that a formal order authorizing the supply will be provided at a later date.
     */
    ScriptOwing = "SO",
    /**
     * SOCIAL: Definition: A social service program funded by a public or governmental entity.
     *
     *
     *                            Example: Programs providing habilitation, food, lodging, medicine, transportation, equipment, devices, products, education, training, counseling, alteration of living or work space, and other resources to persons meeting eligibility criteria.
     */
    SocialServiceProgram = "SOCIAL",
    /**
     * SOCIAL2: Description: An interaction where the exposure participants are social associates or members of the same extended family
     */
    SocialExtendedFamilyInteraction = "SOCIAL2",
    /**
     * SP: Accommodations in which there are 2 beds.
     */
    SemiPrivate = "SP",
    /**
     * SPEND: That total amount of the eligible charges which a covered party must periodically pay for services and/or products prior to the Medicaid program providing any coverage. This amount represents the covered party's spend down that is applied to a particular adjudication result. It is expressed as a negative dollar amount in adjudication results
     */
    SpendDown = "SPEND",
    /**
     * SPI: Policy for handling information deemed specially protected by law or policy including substance abuse, substance use, psychiatric, mental health, behavioral health, and cognitive disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    SpeciallyProtectedInformationSensitivity = "SPI",
    /**
     * SPLCOATING: Definition: A characteristic of an oral solid dosage form of a medicinal product, indicating whether it has one or more coatings such as sugar coating, film coating, or enteric coating.  Only coatings to the external surface or the dosage form should be considered (for example, coatings to individual pellets or granules inside a capsule or tablet are excluded from consideration).
     *
     *
     *                            Constraints: The Observation.value must be a Boolean (BL) with true for the presence or false for the absence of one or more coatings on a solid dosage form.
     */
    CoatingSPLCOATING = "SPLCOATING",
    /**
     * SPLCOLOR: Definition:  A characteristic of an oral solid dosage form of a medicinal product, specifying the color or colors that most predominantly define the appearance of the dose form. SPLCOLOR is not an FDA specification for the actual color of solid dosage forms or the names of colors that can appear in labeling.
     *
     *
     *                            Constraints: The Observation.value must be a single coded value or a list of multiple coded values, specifying one or more distinct colors that approximate of the color(s) of distinct areas of the solid dosage form, such as the different sides of a tablet or one-part capsule, or the different halves of a two-part capsule.  Bands on banded capsules, regardless of the color, are not considered when assigning an SPLCOLOR. Imprints on the dosage form, regardless of their color are not considered when assigning an SPLCOLOR. If more than one color exists on a particular side or half, then the most predominant color on that side or half is recorded.  If the gelatin capsule shell is colorless and transparent, use the predominant color of the contents that appears through the colorless and transparent capsule shell. Colors can include: Black;Gray;White;Red;Pink;Purple;Green;Yellow;Orange;Brown;Blue;Turquoise.
     */
    ColorSPLCOLOR = "SPLCOLOR",
    /**
     * SPLIMAGE: Description: A characteristic representing a single file reference that contains two or more views of the same dosage form of the product; in most cases this should represent front and back views of the dosage form, but occasionally additional views might be needed in order to capture all of the important physical characteristics of the dosage form.  Any imprint and/or symbol should be clearly identifiable, and the viewer should not normally need to rotate the image in order to read it.  Images that are submitted with SPL should be included in the same directory as the SPL file.
     */
    Image = "SPLIMAGE",
    /**
     * SPLIMPRINT: Definition:  A characteristic of an oral solid dosage form of a medicinal product, specifying the alphanumeric text that appears on the solid dosage form, including text that is embossed, debossed, engraved or printed with ink. The presence of other non-textual distinguishing marks or symbols is recorded by SPLSYMBOL.
     *
     *
     *                            Examples: Included in SPLIMPRINT are alphanumeric text that appears on the bands of banded capsules and logos and other symbols that can be interpreted as letters or numbers.
     *
     *
     *                            Constraints: The Observation.value must be of type Character String (ST). Excluded from SPLIMPRINT are internal and external cut-outs in the form of alphanumeric text and the letter 'R' with a circle around it (when referring to a registered trademark) and the letters 'TM' (when referring to a 'trade mark').  To record text, begin on either side or part of the dosage form. Start at the top left and progress as one would normally read a book.  Enter a semicolon to show separation between words or line divisions.
     */
    Imprint = "SPLIMPRINT",
    /**
     * SPLSCORING: Definition: A characteristic of an oral solid dosage form of a medicinal product, specifying the number of equal pieces that the solid dosage form can be divided into using score line(s).
     *
     *
     *                            Example: One score line creating two equal pieces is given a value of 2, two parallel score lines creating three equal pieces is given a value of 3.
     *
     *
     *                            Constraints: Whether three parallel score lines create four equal pieces or two intersecting score lines create two equal pieces using one score line and four equal pieces using both score lines, both have the scoring value of 4. Solid dosage forms that are not scored are given a value of 1. Solid dosage forms that can only be divided into unequal pieces are given a null-value with nullFlavor other (OTH).
     */
    ScoringSPLSCORING = "SPLSCORING",
    /**
     * SPLSHAPE: Description: A characteristic of an oral solid dosage form of a medicinal product, specifying the two dimensional representation of the solid dose form, in terms of the outside perimeter of a solid dosage form when the dosage form, resting on a flat surface, is viewed from directly above, including slight rounding of corners. SPLSHAPE does not include embossing, scoring, debossing, or internal cut-outs.  SPLSHAPE is independent of the orientation of the imprint and logo. Shapes can include: Triangle (3 sided); Square; Round; Semicircle; Pentagon (5 sided); Diamond; Double circle; Bullet; Hexagon (6 sided); Rectangle; Gear; Capsule; Heptagon (7 sided); Trapezoid; Oval; Clover; Octagon (8 sided); Tear; Freeform.
     */
    ShapeSPLSHAPE = "SPLSHAPE",
    /**
     * SPLSIZE: Definition: A characteristic of an oral solid dosage form of a medicinal product, specifying the longest single dimension of the solid dosage form as a physical quantity in the dimension of length (e.g., 3 mm). The length is should be specified in millimeters and should be rounded to the nearest whole millimeter.
     *
     *
     *                            Example: SPLSIZE for a rectangular shaped tablet is the length and SPLSIZE for a round shaped tablet is the diameter.
     */
    SizeSPLSIZE = "SPLSIZE",
    /**
     * SPLSYMBOL: Definition: A characteristic of an oral solid dosage form of a medicinal product, to describe whether or not the medicinal product has a mark or symbol appearing on it for easy and definite recognition.  Score lines, letters, numbers, and internal and external cut-outs are not considered marks or symbols. See SPLSCORING and SPLIMPRINT for these characteristics.
     *
     *
     *                            Constraints: The Observation.value must be a Boolean (BL) with &lt;u&gt;true&lt;/u&gt; indicating the presence and &lt;u&gt;false&lt;/u&gt; for the absence of marks or symbols.
     *
     *
     *                            Example:
     */
    Symbol = "SPLSYMBOL",
    /**
     * SPT: Incident or accident is the result of a sporting accident.
     */
    SportingAccident = "SPT",
    /**
     * SREC: Description:Specimen has been received by the participating organization/department.
     */
    SpecimenReceived = "SREC",
    /**
     * SS: An encounter where the patient is admitted to a health care facility for a predetermined length of time, usually less than 24 hours.
     */
    ShortStay = "SS",
    /**
     * SSP: Policy for handling information related to a provider of sensitive services, which will be afforded heightened confidentiality.  Description:  Policies may govern sensitivity of information related to providers who deliver sensitive healthcare services in order to protect the privacy, well-being, and safety of the provider and of patients receiving sensitive services.
     *
     *
     *                            Usage Notes: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    SensitiveServiceProviderInformationSensitivity = "SSP",
    /**
     * SSTOR: Description:Specimen has been placed into storage at a participating location.
     */
    SpecimenInStorage = "SSTOR",
    /**
     * STD: Policy for handling sexually transmitted disease information, which will be afforded heightened confidentiality.
     *  Information handling protocols based on organizational policies related to sexually transmitted disease information that is deemed sensitive.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     */
    SexuallyTransmittedDiseaseInformationSensitivity = "STD",
    /**
     * STORE: The act of putting something away for safe keeping. The "something" may be physical object such as a specimen, or information, such as observations regarding a specimen.
     */
    Storage = "STORE",
    /**
     * STRAN: Description:Specimen has been put in transit to a participating receiver.
     */
    SpecimenInTransit = "STRAN",
    /**
     * STRAT: Describes the strata for which the measure is to be evaluated. There are three examples of reasons for stratification based on existing work. These include: (1) evaluate the measure based on different age groupings within the population described in the measure (e.g., evaluate the whole [age 14-25] and each sub-stratum [14-19] and [20-25]); (2) evaluate the eMeasure based on either a specific condition, a specific discharge location, or both; (3) evaluate the eMeasure based on different locations within a facility (e.g., evaluate the overall rate for all intensive care units and also some strata include additional findings [specific birth weights for neonatal intensive care units]).
     */
    Stratification = "STRAT",
    /**
     * STRTLATE: Proposed therapy may be inappropriate or ineffective because the start of administration is too late after the onset of the condition
     */
    StartTooLateAlertSTRTLATE = "STRTLATE",
    /**
     * SUBPOL: Definition: A health insurance policy that covers benefits for substance use services.
     */
    SubstanceUsePolicy = "SUBPOL",
    /**
     * SUBPRG: Definition: Government administered and funded substance use program for beneficiaries meeting financial, substance use behavior, and health status criteria.  Beneficiaries may be required to enroll as a result of legal proceedings.  Administration, funding levels, eligibility criteria, covered benefits, provider types, and financial participation are typically set by a regulatory process.  Payer responsibilities for administering the program may be delegated to contractors.
     *
     *
     *                            Example: In the U.S., states receive funding for substance use programs from the Substance Abuse Mental Health Administration (SAMHSA).
     */
    SubstanceUseProgram = "SUBPRG",
    /**
     * SUBSIDFFS: Definition: A government health program that provides coverage on a fee for service basis for health services to persons meeting eligibility criteria such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.
     *
     *
     *                            Discussion: The structure and business processes for underwriting and administering a subsidized fee for service program is further specified by the Underwriter and Payer Role.class and Role.code.
     */
    SubsidizedFeeForServiceProgram = "SUBSIDFFS",
    /**
     * SUBSIDIZ: Definition: A government health program that provides coverage for health services to persons meeting eligibility criteria such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.
     */
    SubsidizedHealthProgram = "SUBSIDIZ",
    /**
     * SUBSIDMC: Definition: A government health program that provides coverage through managed care contracts for health services to persons meeting eligibility criteria such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.
     *
     *
     *                            Discussion: The structure and business processes for underwriting and administering a subsidized managed care program is further specified by the Underwriter and Payer Role.class and Role.code.
     */
    SubsidizedManagedCareProgram = "SUBSIDMC",
    /**
     * SUBSTNCE: Description: An interaction where the exposure participants shared or co-used a common substance (e.g. drugs, needles, or common food item).
     */
    CommonSubstanceInteraction = "SUBSTNCE",
    /**
     * SUBSUPP: Definition: A government health program that provides coverage for health services to persons meeting eligibility criteria for a supplemental health policy or program such as income, location of residence, access to other coverages, health condition, and age, the cost of which is to some extent subsidized by public funds.
     *
     *
     *                            Example:  Supplemental health coverage program may cover the cost of a health program or policy financial participations, such as the copays and the premiums, and may provide coverage for services in addition to those covered under the supplemented health program or policy.  In the U.S., Medicaid programs may pay the premium for a covered party who is also covered under the  Medicare program or a private health policy.
     *
     *
     *                            Discussion: The structure and business processes for underwriting and administering a subsidized supplemental retiree health program is further specified by the Underwriter and Payer Role.class and Role.code.
     */
    SubsidizedSupplementalHealthProgram = "SUBSUPP",
    /**
     * SUD: Policy for handling information related to alcohol or drug use disorders and conditions caused by these disorders, which is afforded heightened confidentiality.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    SubstanceUseDisorderInformationSensitivity = "SUD",
    /**
     * SUPPLEMENT: A diet that is not intended to be complete but is added to other diets.
     */
    NutritionalSupplement = "SUPPLEMENT",
    /**
     * SUPPRESSED: Description: One or more records in the query response have been suppressed due to consent or privacy restrictions.
     */
    RecordSuppressed = "SUPPRESSED",
    /**
     * SURG: Provision of surgical treatment.
     */
    Surgical = "SURG",
    /**
     * SURPL: Definition:
     *
     *
     *
     *
     *                               A risk or part of a risk for which there is no normal insurance market available.
     *
     *
     *
     *                               Insurance written by unauthorized insurance companies. Surplus lines insurance is insurance placed with unauthorized insurance companies through licensed surplus lines agents or brokers.
     */
    SurplusLineInsurancePolicy = "SURPL",
    /**
     * T: This is not really a diet, since it contains little nutritional value, but is essentially just water.  Used before coloscopy examinations.
     */
    TeaOnly = "T",
    /**
     * TB: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided.
     */
    TrialBalance = "TB",
    /**
     * TBOO: Policy for handling information not to be initially disclosed or discussed with patient except by a physician assigned to patient in this case. Information handling protocols based on organizational policies related to sensitive patient information that must be initially discussed with the patient by an attending physician before being disclosed to the patient.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law rather than or in addition to this more generic code.
     *
     *
     *                            Open Issue: This definition conflates a rule and a characteristic, and there may be a similar issue with ts sibling codes.
     */
    Taboo = "TBOO",
    /**
     * TBS: A fill where the remainder of a 'complete' fill is provided after a trial fill has been provided and where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    TrialBalancePartialStrength = "TBS",
    /**
     * TEACHER: Description: The patient's teacher when immunized.
     */
    Teacher = "TEACHER",
    /**
     * TF: A fill where a small portion is provided to allow for determination of the therapy effectiveness and patient tolerance.
     */
    TrialFill = "TF",
    /**
     * TFS: A fill where a small portion is provided to allow for determination of the therapy effectiveness and patient tolerance and also where the strength supplied is less than the ordered strength (e.g. 10mg for an order of 50mg where a subsequent fill will dispense 40mg tablets).
     */
    TrialFillPartialStrength = "TFS",
    /**
     * TIME: Description:Proposed therapy may be inappropriate or ineffective based on the proposed start or end time.
     */
    TimingDetectedIssue = "TIME",
    /**
     * TIME_ABSOLUTE: A sequence of values in the "absolute" time domain.  This is the same time domain that all HL7 timestamps use.  It is time as measured by the Gregorian calendar
     */
    AbsoluteTimeSequence = "TIME_ABSOLUTE",
    /**
     * TIME_RELATIVE: A sequence of values in a "relative" time domain.  The time is measured relative to the earliest effective time in the Observation Series containing this sequence.
     */
    RelativeTimeSequence = "TIME_RELATIVE",
    /**
     * TIMING: Definition:The therapy is being performed at a time which diverges from the time the therapy was requested
     */
    EventTimingIncorrectAlert = "TIMING",
    /**
     * Title38Section7332: Title 38 Part 1-protected information may only be disclosed to a third party with the special written consent of the patient except where expressly authorized by 38 USC 7332. VA may disclose this information for specific purposes to: VA employees on a need to know basis - more restrictive than Privacy Act need to know; contractors who need the information in order to perform or fulfil the duties of the contract; and researchers who provide assurances that the information will not be identified in any report. This information may also be disclosed without consent where patient lacks decision-making capacity; in a medical emergency for the purpose of treating a condition which poses an immediate threat to the health of any individual and which requires immediate medical intervention; for eye, tissue, or organ donation purposes; and disclosure of HIV information for public health purposes.
     *
     *
     *                            Definition: Title 38 Part 1 - Section 1.462 Confidentiality restrictions.
     *
     *                         (a) General. The patient records to which Sections 1.460 through 1.499 of this part apply may be disclosed or used only as permitted by these regulations and may not otherwise be disclosed or used in any civil, criminal, administrative, or legislative proceedings conducted by any Federal, State, or local authority. Any disclosure made under these regulations must be limited to that information which is necessary to carry out the purpose of the disclosure. SUBCHAPTER III--PROTECTION OF PATIENT RIGHTS Sec. 7332. Confidentiality of certain medical records (a)(1) Records of the identity, diagnosis, prognosis, or treatment of any patient or subject which are maintained in connection with the performance of any program or activity (including education, training, treatment, rehabilitation, or research) relating to drug abuse, alcoholism or alcohol abuse, infection with the human immunodeficiency virus, or sickle cell anemia which is carried out by or for the Department under this title shall, except as provided in subsections (e) and (f), be confidential, and (section 5701 of this title to the contrary notwithstanding) such records may be disclosed only for the purposes and under the circumstances expressly authorized under subsection (b).
     *
     *
     *                            Usage Note: May be associated with an Act or a Role to indicate the legal provision to which the assignment of an Act.confidentialityCode or Role.confidentialityCode complies.
     */
    Title38Section7332 = "Title38Section7332",
    /**
     * TLIFE: Definition: Life insurance under which the benefit is payable only if the insured dies during a specified period. If an insured dies during that period, the beneficiary receives the death payments. If the insured survives, the policy ends and the beneficiary receives nothing.
     */
    TermLifeInsurancePolicy = "TLIFE",
    /**
     * TOOLATE: The patient is receiving a subsequent fill significantly later than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    RefillTooLateAlert = "TOOLATE",
    /**
     * TOOSOON: The patient is receiving a subsequent fill significantly earlier than would be expected based on the amount previously supplied and the therapy dosage instructions
     */
    RefillTooSoonAlert = "TOOSOON",
    /**
     * TPROD: Proposed therapy may interact with an existing or recent therapeutic product
     */
    TherapeuticProductAlert = "TPROD",
    /**
     * TRAN: Fees deducted on behalf of a payee for charges based on a per-transaction or time-period (e.g. monthly) fee.
     */
    TransactionFee = "TRAN",
    /**
     * TRANF: Can be a URL or hyperlinks that link to the transmission formats that are specified for a particular reporting program.
     */
    TransmissionFormat = "TRANF",
    /**
     * TRANSFER: Transfer of ownership for a product.
     */
    Transfer = "TRANSFER",
    /**
     * TRAVEL: A charge to cover the cost of travel time and/or cost in conjuction with providing a service or product. It may be charged per kilometer or per hour based on the effective agreement.
     */
    Travel = "TRAVEL",
    /**
     * TRAVINT: Description: An interaction where the exposure participants traveled together in/on the same vehicle/trip (e.g. concurrent co-passengers).
     */
    CommonTravelInteraction = "TRAVINT",
    /**
     * TRNSFTRNS: Communication of an agent from one living subject to another living subject through direct contact with blood or blood products where the contact with blood is part of  a therapeutic procedure.
     */
    TransfusionTransmission = "TRNSFTRNS",
    /**
     * TRSTACCRD: Type of security metadata about the formal declaration by an authority or neutral third party that validates the technical, security, trust, and business practice conformance of Trust Agents to facilitate security, interoperability, and trust among participants within a security domain or trust framework.
     */
    TrustAccreditation = "TRSTACCRD",
    /**
     * TRSTACCRDOBS: Type of security metadata observation made about the formal declaration by an authority or neutral third party that validates the technical, security, trust, and business practice conformance of Trust Agents to facilitate security, interoperability, and trust among participants within a security domain or trust framework.
     */
    TrustAccreditationObservation = "TRSTACCRDOBS",
    /**
     * TRSTAGRE: Type of security metadata about privacy and security requirements with which a security domain must comply. [ISO IEC 10181-1]
     */
    TrustAgreement = "TRSTAGRE",
    /**
     * TRSTAGREOBS: Type of security metadata observation made about privacy and security requirements with which a security domain must comply. [ISO IEC 10181-1]
     */
    TrustAgreementObservation = "TRSTAGREOBS",
    /**
     * TRSTASSUR: Type of security metadata about the digital quality or reliability of a trust assertion, activity, capability, information exchange, mechanism, process, or protocol.
     */
    TrustAssurance = "TRSTASSUR",
    /**
     * TRSTCERT: Type of security metadata about a set of security-relevant data issued by a security authority or trusted third party, together with security information which is used to provide the integrity and data origin authentication services for an IT resource (data, information object, service, or system capability). [Based on ISO IEC 10181-1]
     */
    TrustCertificate = "TRSTCERT",
    /**
     * TRSTCERTOBS: Type of security metadata observation made about a set of security-relevant data issued by a security authority or trusted third party, together with security information which is used to provide the integrity and data origin authentication services for an IT resource (data, information object, service, or system capability). [Based on ISO IEC 10181-1]
     *
     *
     *                            For example,
     *
     *
     *
     *                            A Certificate Policy (CP), which is a named set of rules that indicates the applicability of a certificate to a particular community and/or class of application with common security requirements. For example, a particular Certificate Policy might indicate the applicability of a type of certificate to the authentication of electronic data interchange transactions for the trading of goods within a given price range. [Trust Service Principles and Criteria for Certification Authorities Version 2.0 March 2011 Copyright 2011 by Canadian Institute of Chartered Accountants.
     *                            A Certificate Practice Statement (CSP), which is a statement of the practices which an Authority employs in issuing and managing certificates. [Trust Service Principles and Criteria for Certification Authorities Version 2.0 March 2011 Copyright 2011 by Canadian Institute of Chartered Accountants.]
     */
    TrustCertificateObservation = "TRSTCERTOBS",
    /**
     * TRSTFWK: Type of security metadata about a complete set of contracts, regulations, or commitments that enable participating actors to rely on certain assertions by other actors to fulfill their information security requirements. [Kantara Initiative]
     */
    TrustFramework = "TRSTFWK",
    /**
     * TRSTFWKOBS: Type of security metadata observation made about a complete set of contracts, regulations or commitments that enable participating actors to rely on certain assertions by other actors to fulfill their information security requirements. [Kantara Initiative]
     */
    TrustFrameworkObservation = "TRSTFWKOBS",
    /**
     * TRSTLOAOBS: Type of security metadata observation made about the digital quality or reliability of a trust assertion, activity, capability, information exchange, mechanism, process, or protocol.
     */
    TrustAssuranceObservation = "TRSTLOAOBS",
    /**
     * TRSTMEC: Type of security metadata about a security architecture system component that supports enforcement of security policies.
     */
    TrustMechanism = "TRSTMEC",
    /**
     * TRSTMECOBS: Type of security metadata observation made about a security architecture system component that supports enforcement of security policies.
     */
    TrustMechanismObservation = "TRSTMECOBS",
    /**
     * UD: A supply action that provides sufficient material for a single dose.
     */
    UnitDose = "UD",
    /**
     * UDE: A supply action that provides sufficient material for a single dose via multiple products.  E.g. 2 50mg tablets for a 100mg unit dose.
     */
    UnitDoseEquivalent = "UDE",
    /**
     * UFIL: The filtration of a colloidal substance through a semipermeable medium that allows only the passage of small molecules.
     */
    Ultrafiltration = "UFIL",
    /**
     * ULIFE: Definition: Life insurance under which the benefit is payable upon the insuredaTMs death or diagnosis of a terminal illness.  If an insured dies during that period, the beneficiary receives the death payments. If the insured survives, the policy ends and the beneficiary receives nothing
     */
    UniversalLifeInsurancePolicy = "ULIFE",
    /**
     * UMBRL: Definition: A form of insurance protection that provides additional liability coverage after the limits of your underlying policy are reached. An umbrella liability policy also protects you (the insured) in many situations not covered by the usual liability policies.
     */
    UmbrellaLiabilityInsurancePolicy = "UMBRL",
    /**
     * UNINSMOT: Definition: An automobile insurance policy under which the insurance company will indemnify a loss for which another motorist is liable if that motorist is unable to pay because he or she is uninsured.  Coverage under the policy applies to bodily injury damages only.  Injuries to the covered party caused by a hit-and-run driver are also covered.
     */
    UninsuredMotoristPolicy = "UNINSMOT",
    /**
     * UNITPRICE: Maximum unit price that will be covered for the authorized product or service.
     */
    UnitPrice = "UNITPRICE",
    /**
     * UNITQTY: Maximum number of items that will be covered of the product or service specified.
     */
    UnitQuantity = "UNITQTY",
    /**
     * UNRELAT: The service provided is not related to another billed service. For example, 2 unrelated services provided on the same day to the same patient which may normally result in a refused payment for one of the items.
     */
    UnrelatedService = "UNRELAT",
    /**
     * UNSPSC: Description:United Nations Standard Products and Services Classification, managed by Uniform Code Council (UCC): www.unspsc.org
     */
    UnitedNationsStandardProductsAndServicesClassification = "UNSPSC",
    /**
     * UPC: Description:Universal Product Code is one of a wide variety of bar code languages widely used in the United States and Canada for items in stores.
     */
    UniversalProductCode = "UPC",
    /**
     * UPGRDLABEL: Custodian security system must declassify information assigned security labels by instantiating a new version of the classified information so as to break the binding of the classifying security label when assigning a new security label that marks the information as classified at a more protected level  in accordance with applicable jurisdictional privacy policies associated with the target information. The system must retain an immutable record of the previous assignment and binding.
     */
    UpgradeSecurityLabel = "UPGRDLABEL",
    /**
     * URGENT: Premium paid on service fees in compensation for providing an expedited response to an urgent situation.
     */
    Urgent = "URGENT",
    /**
     * USE: Usage notes.
     */
    NoticeOfUse = "USE",
    /**
     * V: Visa
     */
    Visa = "V",
    /**
     * VAC_PROBLEM: Indicates that the ICSR is describing a problem with the actual vaccine product such as physical defects (cloudy, particulate matter) or inability to confer immunity.
     */
    VaccineProductProblem = "VAC_PROBLEM",
    /**
     * VALIDAT: Description:The specified element did not pass business-rule validation.
     */
    ValidationIssue = "VALIDAT",
    /**
     * VECTRNS: Communication of an agent from a living subject acting as a required intermediary in the agent transmission process to a recipient living subject via direct contact.
     */
    VectorBorneTransmission = "VECTRNS",
    /**
     * VERBAUTH: The provider has received a verbal permission from an authoritative source to perform the service or supply the item being invoiced.
     */
    VerbalAuthorization = "VERBAUTH",
    /**
     * VET: Definition: Services provided directly and through contracted and operated veteran health programs.
     */
    VeteranHealthProgram = "VET",
    /**
     * VFPAPER: Definition:Indicates that the paper version of the record has, should be or is being verified against the electronic version.
     */
    VerifyPaper = "VFPAPER",
    /**
     * VIO: Policy for handling information related to harm by violence, which is afforded heightened confidentiality. Harm by violence is perpetrated by an unrelated person.
     *
     *                         Access control concerns for information about mental or physical harm resulting from violence caused by an unrelated person may include manipulation of care givers or access to records that enable the perpetrator contact or locate the patient, but the perpetrator will likely not have established abusive psychological control over the patient.
     *
     *
     *                            Usage Note: If there is a jurisdictional mandate, then use the applicable ActPrivacyLaw code system, and specify the law in addition to this more generic code.
     */
    ViolenceInformationSensitivity = "VIO",
    /**
     * VISPOL: Definition: Set of codes for a policy that provides coverage for health care expenses arising from vision services.
     *
     *                         A health insurance policy that covers benefits for vision care services, prescriptions, and products.
     */
    VisionCarePolicy = "VISPOL",
    /**
     * VLI: Diet with low content of the amino-acids valin, leucin, and isoleucin, for "maple syrup disease."
     */
    LowValinLeucinIsoleucin = "VLI",
    /**
     * VOLUME: An observation that reports the volume of a sample.
     */
    ActSpecObsVolumeCode = "VOLUME",
    /**
     * VR: A patient encounter where the patient and the practitioner(s) are not in the same physical location. Examples include telephone conference, email exchange, robotic surgery, and televideo conference.
     */
    Virtual = "VR",
    /**
     * VRXINV: Vision dispense invoice for up to 2 lens (left and right), frame and optional discount.  Eye exams are invoiced as a clinical service invoice.
     */
    VisionDispenseInvoice = "VRXINV",
    /**
     * W: Accommodations in which there are 3 or more beds.
     */
    Ward = "W",
    /**
     * WATTRNS: Communication of an agent from a contaminated water source to a living subject whether the water is ingested as a food or not. The route of entry of the water may be through any bodily orifice.
     */
    WaterBorneTransmission = "WATTRNS",
    /**
     * WCBPOL: Insurance policy for injuries sustained in the work place or in the course of employment.
     */
    WorkerQuoteSCompensation = "WCBPOL",
    /**
     * WEEK: Transaction counts and value totals for each calendar week within the date range specified.
     */
    Week = "WEEK",
    /**
     * WELLREMLE: Description: A person enters a wellness or preventive care reminder for a given patient.
     */
    WellnessReminderListEntry = "WELLREMLE",
    /**
     * WELLREMLREV: Description: A person reviews a list of wellness or preventive care reminders for a given patient.
     */
    WellnessReminderListReview = "WELLREMLREV",
    /**
     * Code: WGHT
     */
    WGHT = "WGHT",
    /**
     * WIATTCH: Description: Work Injury related additional Information Attachment
     */
    WorkInjuryReportAttachment = "WIATTCH",
    /**
     * WORK2: Description: Exposure interaction occurred in a work setting, i.e. participants are co-workers.
     */
    WorkInteraction = "WORK2",
    /**
     * WPA: Incident or accident is the result of a work place accident
     */
    WorkplaceAccident = "WPA",
    /**
     * WRKCOMP: Definition: Government mandated program providing coverage, disability income, and vocational rehabilitation for injuries sustained in the work place or in the course of employment.  Employers may either self-fund the program, purchase commercial coverage, or pay a premium to a government entity that administers the program.  Employees may be required to pay premiums toward the cost of coverage as well.
     */
    WorkersCompensationProgram = "WRKCOMP",
    /**
     * X: Used by one system to inform another that the container is no longer available within the scope of the system (e.g., tube broken or discarded).
     */
    ContainerUnavailable = "X",
    /**
     * XRAY: Description: Digital X-Ray Attachment
     */
    XRay = "XRAY",
    /**
     * YEAR: Transaction counts and value totals for each calendar year within the date range specified.
     */
    Year = "YEAR"
}
//# sourceMappingURL=V3ActCodeValueSetEnum.d.ts.map