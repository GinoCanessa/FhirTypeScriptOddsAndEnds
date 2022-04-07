/**
 *  A set of codes specifying the motivation, cause, or rationale of an Act, when such rationale is not reasonably represented as an ActRelationship of type "has reason" linking to another Act.  Examples:
 * Example reasons that might qualify for being coded in this field might be: "routine requirement", "infectious disease reporting requirement", "on patient request", "required by law".
 */
export var V3ActReason = {
    /**
     * Identifies the reason the patient is assigned to this accommodation type
     */
    v3_ActReason_ActAccommodationReason: {
        code: "_ActAccommodationReason",
        display: "ActAccommodationReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Reason for Clinical Service being performed.
     *
     *                         This domain excludes reasons specified by diagnosed conditions.
     *
     *                         Examples of values from this domain include duplicate therapy and fraudulent prescription.
     */
    v3_ActReason_ActBillableClinicalServiceReason: {
        code: "_ActBillableClinicalServiceReason",
        display: "ActBillableClinicalServiceReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition: This domain is used to document reasons for providing a billable service; the billable services may include both clinical services and social services.
     */
    v3_ActReason_ActBillableServiceReason: {
        code: "_ActBillableServiceReason",
        display: "ActBillableServiceReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information to which the patient has not consented as deemed necessary by authorized entities for providing care in the best interest of the patient; providing immediately needed health care for an emergent condition;  or for protecting public or third party safety.
     *
     *
     *                            Usage Notes: Used to convey the reason that a provider or other entity may or has accessed personal healthcare information.  Typically, this involves overriding the subject's consent directives.
     */
    v3_ActReason_ActConsentInformationAccessOverrideReason: {
        code: "_ActConsentInformationAccessOverrideReason",
        display: "ActConsentInformationAccessOverrideReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Codes used to specify reasons or criteria relating to coverage provided under a policy or program.  May be used to convey reasons pertaining to coverage contractual provisions, including criteria for eligibility, coverage limitations, coverage maximums, or financial participation required of covered parties.
     */
    v3_ActReason_ActCoverageReason: {
        code: "_ActCoverageReason",
        display: "ActCoverageReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The rationale or purpose for an act relating to health information management, such as archiving information for the purpose of complying with an organization policy or jurisdictional law relating to  data retention.
     */
    v3_ActReason_ActHealthInformationManagementReason: {
        code: "_ActHealthInformationManagementReason",
        display: "ActHealthInformationManagementReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Identifies the reason or rational for why a person is not eligibile for benefits under an insurance policy.
     *
     *                         Examples are client deceased &amp; adopted client has been given a new policy identifier.
     */
    v3_ActReason_ActIneligibilityReason: {
        code: "_ActIneligibilityReason",
        display: "ActIneligibilityReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The rationale or purpose for an act relating to information management, such as archiving information for the purpose of complying with an enterprise data retention policy.
     */
    v3_ActReason_ActInformationManagementReason: {
        code: "_ActInformationManagementReason",
        display: "ActInformationManagementReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The rationale or purpose for an act relating to the management of personal information, such as disclosing personal tax information for the purpose of complying with a court order.
     */
    v3_ActReason_ActInformationPrivacyReason: {
        code: "_ActInformationPrivacyReason",
        display: "ActInformationPrivacyReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: Types of reasons why a substance is invalid for use.
     */
    v3_ActReason_ActInvalidReason: {
        code: "_ActInvalidReason",
        display: "ActInvalidReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Domain specifies the codes used to describe reasons why a Provider is cancelling an Invoice or Invoice Grouping.
     */
    v3_ActReason_ActInvoiceCancelReason: {
        code: "_ActInvoiceCancelReason",
        display: "ActInvoiceCancelReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A coded description of the reason for why a patient did not receive a scheduled immunization.
     *
     *                         (important for public health strategy
     */
    v3_ActReason_ActNoImmunizationReason: {
        code: "_ActNoImmunizationReason",
        display: "ActNoImmunizationReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Indicates why a fulfiller refused to fulfill a supply order, and considered it important to notify other providers of their decision.  E.g. "Suspect fraud", "Possible abuse", "Contraindicated".
     *
     *                         (used when capturing 'refusal to fill' annotations)
     */
    v3_ActReason_ActSupplyFulfillmentRefusalReason: {
        code: "_ActSupplyFulfillmentRefusalReason",
        display: "ActSupplyFulfillmentRefusalReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Specifies the reason that an event occurred in a clinical research study.
     */
    v3_ActReason_ClinicalResearchEventReason: {
        code: "_ClinicalResearchEventReason",
        display: "ClinicalResearchEventReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:SSpecifies the reason that a test was performed or observation collected in a clinical research study.
     *
     *
     *                            Note:This set of codes are not strictly reasons, but are used in the currently Normative standard.  Future revisions of the specification will model these as ActRelationships and thes codes may subsequently be retired.  Thus, these codes should not be used for new specifications.
     */
    v3_ActReason_ClinicalResearchObservationReason: {
        code: "_ClinicalResearchObservationReason",
        display: "ClinicalResearchObservationReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Indicates why the prescription should be suspended.
     */
    v3_ActReason_CombinedPharmacyOrderSuspendReasonCode: {
        code: "_CombinedPharmacyOrderSuspendReasonCode",
        display: "CombinedPharmacyOrderSuspendReasonCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Identifies reasons for nullifying (retracting) a particular control act.
     */
    v3_ActReason_ControlActNullificationReasonCode: {
        code: "_ControlActNullificationReasonCode",
        display: "ControlActNullificationReasonCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: Reasons to refuse a transaction to be undone.
     */
    v3_ActReason_ControlActNullificationRefusalReasonType: {
        code: "_ControlActNullificationRefusalReasonType",
        display: "ControlActNullificationRefusalReasonType",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Identifies why a specific query, request, or other trigger event occurred.
     */
    v3_ActReason_ControlActReason: {
        code: "_ControlActReason",
        display: "ControlActReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition: Identifies the reason or rational for why a person is eligibile for benefits under an insurance policy or progam.
     *
     *
     *                            Examples:  A person is a claimant under an automobile insurance policy are client deceased &amp; adopted client has been given a new policy identifier.  A new employee is eligible for health insurance as an employment benefit.  A person meets a government program eligibility criteria for financial, age or health status.
     */
    v3_ActReason_CoverageEligibilityReason: {
        code: "_CoverageEligibilityReason",
        display: "CoverageEligibilityReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Identifies the reason or rational for why a person is eligibile for benefits under an insurance policy or progam.
     *
     *
     *                            Examples:  A person is a claimant under an automobile insurance policy are client deceased &amp; adopted client has been given a new policy identifier.  A new employee is eligible for health insurance as an employment benefit.  A person meets a government program eligibility criteria for financial, age or health status.
     */
    v3_ActReason_EligibilityActReasonCode: {
        code: "_EligibilityActReasonCode",
        display: "EligibilityActReasonCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Identifies why a change is being made to a  record.
     */
    v3_ActReason_GenericUpdateReasonCode: {
        code: "_GenericUpdateReasonCode",
        display: "GenericUpdateReasonCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Indicates the reason the medication order should be aborted.
     */
    v3_ActReason_MedicationOrderAbortReason: {
        code: "_MedicationOrderAbortReasonCode",
        display: "medication order abort reason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:A collection of concepts that indicate why the prescription should be released from suspended state.
     */
    v3_ActReason_MedicationOrderReleaseReason: {
        code: "_MedicationOrderReleaseReasonCode",
        display: "medication order release reason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Types of reason why a prescription is being changed.
     */
    v3_ActReason_ModifyPrescriptionReasonType: {
        code: "_ModifyPrescriptionReasonType",
        display: "ModifyPrescriptionReasonType",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:A collection of concepts identifying why the patient's profile is being queried.
     */
    v3_ActReason_PatientProfileQueryReason: {
        code: "_PatientProfileQueryReasonCode",
        display: "patient profile query reason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Identifies why the dispense event was not completed.
     */
    v3_ActReason_PharmacySupplyEventAbortReason: {
        code: "_PharmacySupplyEventAbortReason",
        display: "PharmacySupplyEventAbortReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:A collection of concepts that indicates the reason for a "bulk supply" of medication.
     */
    v3_ActReason_PharmacySupplyEventStockReason: {
        code: "_PharmacySupplyEventStockReasonCode",
        display: "pharmacy supply event stock reason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Indicates why the request to transfer a prescription from one dispensing facility to another has been refused.
     */
    v3_ActReason_PharmacySupplyRequestFulfillerRevisionRefusalReasonCode: {
        code: "_PharmacySupplyRequestFulfillerRevisionRefusalReasonCode",
        display: "PharmacySupplyRequestFulfillerRevisionRefusalReasonCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:A collection of concepts that identifies why a renewal prescription has been refused.
     */
    v3_ActReason_PharmacySupplyRequestRenewalRefusalReason: {
        code: "_PharmacySupplyRequestRenewalRefusalReasonCode",
        display: "pharmacy supply request renewal refusal reason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: Identifies why a request to add (or activate) a record is being refused.  Examples include the receiving system not able to match the identifier and find that record in the receiving system, having no permission, or a detected issue exists which precludes the requested action.
     */
    v3_ActReason_RefusalReasonCode: {
        code: "_RefusalReasonCode",
        display: "RefusalReasonCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Reasons for cancelling or rescheduling an Appointment
     */
    v3_ActReason_SchedulingActReason: {
        code: "_SchedulingActReason",
        display: "SchedulingActReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Indicates why the act revision (status update) is being refused.
     */
    v3_ActReason_StatusRevisionRefusalReasonCode: {
        code: "_StatusRevisionRefusalReasonCode",
        display: "StatusRevisionRefusalReasonCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Indicates why the requested authorization to prescribe or dispense a medication has been refused.
     */
    v3_ActReason_SubstanceAdministrationPermissionRefusalReasonCode: {
        code: "_SubstanceAdministrationPermissionRefusalReasonCode",
        display: "SubstanceAdministrationPermissionRefusalReasonCode",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Reasons why substitution of a substance administration request is not permitted.
     */
    v3_ActReason_SubstanceAdminSubstitutionNotAllowedReason: {
        code: "_SubstanceAdminSubstitutionNotAllowedReason",
        display: "SubstanceAdminSubstitutionNotAllowedReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * SubstanceAdminSubstitutionReason
     */
    v3_ActReason_SubstanceAdminSubstitutionReason: {
        code: "_SubstanceAdminSubstitutionReason",
        display: "SubstanceAdminSubstitutionReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:A collection of concepts that indicates why the prescription should no longer be allowed to be dispensed (but can still administer what is already being dispensed).
     */
    v3_ActReason_SupplyOrderAbortReason: {
        code: "_SupplyOrderAbortReasonCode",
        display: "supply order abort reason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The explanation for why a patient is moved from one location to another within the organization
     */
    v3_ActReason_TransferActReason: {
        code: "_TransferActReason",
        display: "TransferActReason",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Operational activities conducted for the purposes of meeting of criteria defined by an accrediting entity for an activity, product, or service
     */
    v3_ActReason_Accreditation: {
        code: "ACCRED",
        display: "accreditation",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Accommodation requested is not available.
     */
    v3_ActReason_AccommodationRequestedNotAvailable: {
        code: "ACCREQNA",
        display: "Accommodation Requested Not Available",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Order was created with incorrect data and is changed to reflect the intended accuracy of the order.
     */
    v3_ActReason_AdministrativeErrorInOrder: {
        code: "ADMINERROR",
        display: "administrative error in order",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition: To evaluate for service authorization, payment, reporting, or performance/outcome measures.
     */
    v3_ActReason_AdministrativeReview: {
        code: "ADMREV",
        display: "administrative review",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: Storage conditions caused the substance to be ineffective.
     */
    v3_ActReason_AdverseStorageCondition: {
        code: "ADVSTORAGE",
        display: "adverse storage condition",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A person becomes eligible for a program based on age.
     *
     *
     *                            Example:  In the U.S., a person who is 65 years of age or older is eligible for Medicare.
     */
    v3_ActReason_AgeEligibility: {
        code: "AGE",
        display: "age eligibility",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition: Patient has had a prior allergic intolerance response to alternate product or one of its components.
     */
    v3_ActReason_AllergyIntolerance: {
        code: "ALGINT",
        display: "allergy intolerance",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Patient has already been given a new (renewal) prescription.
     */
    v3_ActReason_NewPrescriptionExists: {
        code: "ALREADYRX",
        display: "new prescription exists",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:This therapy has been ordered as a backup to a preferred therapy.  This order will be released when and if the preferred therapy is unsuccessful.
     */
    v3_ActReason_TryAnotherTreatmentFirst: {
        code: "ALTCHOICE",
        display: "try another treatment first",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The decision on which the recorded information was based was changed before the decision had an effect.
     *
     *
     *                            Example:Aborted prescription before patient left office, released prescription before suspend took effect.
     */
    v3_ActReason_AlteredDecision: {
        code: "ALTD",
        display: "altered decision",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The time slots previously allocated are now blocked and no longer available for booking Appointments
     */
    v3_ActReason_UnexpectedBlockOfSchedule: {
        code: "BLK",
        display: "Unexpected Block (of Schedule)",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    v3_ActReason_BONUS: {
        code: "BONUS",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The level of coverage under the policy or program is available only to children
     */
    v3_ActReason_ChildrenOnly: {
        code: "CHD",
        display: "Children only",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Information has changed since the record was created.
     */
    v3_ActReason_InformationChange: {
        code: "CHGDATA",
        display: "information change",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Clarification is required before the order can be acted upon.
     */
    v3_ActReason_PrescriptionRequiresClarification: {
        code: "CLARIF",
        display: "prescription requires clarification",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Order is changed based on a clinical reason.
     */
    v3_ActReason_ClinicalModification: {
        code: "CLINMOD",
        display: "clinical modification",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: Cold chain was not maintained for the substance.
     */
    v3_ActReason_ColdChainBreak: {
        code: "COLDCHNBRK",
        display: "cold chain break",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition: Patient has compliance issues with medication such as differing appearance, flavor, size, shape or consistency.
     */
    v3_ActReason_ComplianceConcern: {
        code: "COMPCON",
        display: "compliance concern",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Operational activities required to meet a mandate related to an activity, product, or service
     */
    v3_ActReason_Compliance: {
        code: "COMPL",
        display: "compliance",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Contraindication identified
     */
    v3_ActReason_Contraindication: {
        code: "CONTRA",
        display: "contraindication",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * When a client has no contact with the health system for an extended period, coverage is suspended.  Client will be reinstated to original start date upon proof of identification, residency etc.
     *
     *                         Example: Coverage may be suspended during a strike situation, when employer benefits for employees are not covered (i.e. not in effect).
     */
    v3_ActReason_CoverageSuspended: {
        code: "COVSUS",
        display: "coverage suspended",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A person becomes eligible for insurance or a program because of crime related health condition or injury.
     *
     *
     *                            Example:  A person is a claimant under the U.S. Crime Victims Compensation program.
     */
    v3_ActReason_CrimeVictim: {
        code: "CRIME",
        display: "crime victim",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Indicates that the decision to substitute or to not substitute was driven by a desire to maintain consistency with a pre-existing therapy.  I.e. The performer provided the same item/service as had been previously provided rather than providing exactly what was ordered, or rather than substituting with a lower-cost equivalent.
     */
    v3_ActReason_ContinuingTherapy: {
        code: "CT",
        display: "continuing therapy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The Patient is deceased
     */
    v3_ActReason_PatientDeceased: {
        code: "DEC",
        display: "Patient Deceased",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Client deceased.
     */
    v3_ActReason_Deceased: {
        code: "DECSD",
        display: "deceased",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The level of coverage under the policy or program is available only to a subscriber's dependents.
     */
    v3_ActReason_DependentsOnly: {
        code: "DEP",
        display: "Dependents only",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A person becomes a claimant under a disability income insurance policy or a disability rehabilitation program because of a health condition or injury which limits the person's ability to earn an income or function without institutionalization.
     */
    v3_ActReason_Disability: {
        code: "DIS",
        display: "disability",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The medication is no longer being manufactured or is otherwise no longer available.
     */
    v3_ActReason_ProductDiscontinued: {
        code: "DISCONT",
        display: "product discontinued",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The medication is being re-prescribed at a different dosage.
     */
    v3_ActReason_ChangeInMedicationDose: {
        code: "DOSECHG",
        display: "change in medication/dose",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The current level of the medication in the patient's system is too high.  The medication is suspended to allow the level to subside to a safer level.
     */
    v3_ActReason_DrugLevelTooHigh: {
        code: "DRUGHIGH",
        display: "drug level too high",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The level of coverage under the policy or program is available to an employee and his or her children.
     */
    v3_ActReason_EmployeeAndChildren: {
        code: "ECH",
        display: "Employee and children",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    v3_ActReason_EDU: {
        code: "EDU",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The information was recorded incorrectly or was recorded in the wrong record.
     */
    v3_ActReason_EnteredInError: {
        code: "EIE",
        display: "entered in error",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The level of coverage under the policy or program is available only to an employee.
     */
    v3_ActReason_EmployeeOnly: {
        code: "EMP",
        display: "Employee only",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A person becomes eligible for insurance provided as an employment benefit based on employment status.
     */
    v3_ActReason_EmploymentBenefit: {
        code: "EMPLOY",
        display: "employment benefit",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Operational activities conducted to administer information relating to entities involves with an activity, product, or service
     */
    v3_ActReason_EntityAdministration: {
        code: "ENADMIN",
        display: "entity administration",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Moved to an error in placing the patient in the original location.
     */
    v3_ActReason_Error: {
        code: "ER",
        display: "Error",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The level of coverage under the policy or program is available to an employee and his or her spouse.
     */
    v3_ActReason_EmployeeAndSpouse: {
        code: "ESP",
        display: "Employee and spouse",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: The lot from which the substance was drawn was expired.
     */
    v3_ActReason_ExpiredLot: {
        code: "EXPLOT",
        display: "expired lot",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The level of coverage under the policy or program is available to a subscriber's family.
     */
    v3_ActReason_Family: {
        code: "FAM",
        display: "Family",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Request for further authorization must be done through patient's family physician.
     */
    v3_ActReason_FamilyPhysicianMustAuthorizeFurtherFills: {
        code: "FAMPHYS",
        display: "family physician must authorize further fills",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Ordered quantity has already been completely fulfilled.
     */
    v3_ActReason_FullyFilled: {
        code: "FILLED",
        display: "fully filled",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Patient unable to pay and not covered by insurance
     */
    v3_ActReason_NoFinancialBacking: {
        code: "FIN",
        display: "No Financial Backing",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A person becomes eligible for a program based on financial criteria.
     *
     *
     *                            Example:  A person whose family income is below a financial threshold for eligibility for Medicaid or SCHIP.
     */
    v3_ActReason_FinancialEligibility: {
        code: "FINAN",
        display: "financial eligibility",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Previously recorded information was erroneous and is being corrected.
     */
    v3_ActReason_ErrorCorrection: {
        code: "FIXDATA",
        display: "error correction",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Accommodation is assigned for floor convenience.
     */
    v3_ActReason_FloorConvenience: {
        code: "FLRCNV",
        display: "Floor Convenience",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The bulk supply is issued to replenish a ward for local dispensing.  (Includes both mobile and fixed-location ward stocks.)
     */
    v3_ActReason_FloorStock: {
        code: "FLRSTCK",
        display: "floor stock",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Order to be fulfilled was aborted
     */
    v3_ActReason_OrderAborted: {
        code: "FOABORT",
        display: "order aborted",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Order to be fulfilled was suspended
     */
    v3_ActReason_OrderSuspended: {
        code: "FOSUSP",
        display: "order suspended",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Indicates that the decision to substitute or to not substitute was driven by a policy expressed within the formulary.
     */
    v3_ActReason_FormularyPolicy: {
        code: "FP",
        display: "formulary policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The order has been stopped by the prescriber but this fact has not necessarily captured electronically.
     *
     *
     *                            Example:A verbal stop, a fax, etc.
     */
    v3_ActReason_OrderStopped: {
        code: "FRR01",
        display: "order stopped",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Order has not been fulfilled within a reasonable amount of time, and may not be current.
     */
    v3_ActReason_StaleDatedOrder: {
        code: "FRR02",
        display: "stale-dated order",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Data needed to safely act on the order which was expected to become available independent of the order is not yet available
     *
     *
     *                            Example:Lab results, diagnostic imaging, etc.
     */
    v3_ActReason_IncompleteData: {
        code: "FRR03",
        display: "incomplete data",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Product not available or manufactured. Cannot supply.
     */
    v3_ActReason_ProductUnavailable: {
        code: "FRR04",
        display: "product unavailable",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The dispenser has ethical, religious or moral objections to fulfilling the order/dispensing the product.
     */
    v3_ActReason_EthicalReligious: {
        code: "FRR05",
        display: "ethical/religious",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Fulfiller not able to provide appropriate care associated with fulfilling the order.
     *
     *
     *                            Example:Therapy requires ongoing monitoring by fulfiller and fulfiller will be ending practice, leaving town, unable to schedule necessary time, etc.
     */
    v3_ActReason_UnableToProvideCare: {
        code: "FRR06",
        display: "unable to provide care",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A person becomes eligible for a program because of a qualifying health condition or injury.
     *
     *
     *                            Examples:  A person is determined to have a qualifying health conditions include pregnancy, HIV/AIDs, tuberculosis, end stage renal disease, breast or cervical cancer, or other condition requiring specialized health services, hospice, institutional or community based care provided under a program
     */
    v3_ActReason_HealthStatus: {
        code: "HEALTH",
        display: "health status",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The original reason for suspending the medication has ended.
     */
    v3_ActReason_SuspendReasonNoLongerApplies: {
        code: "HOLDDONE",
        display: "suspend reason no longer applies",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:
     */
    v3_ActReason_SuspendReasonInappropriate: {
        code: "HOLDINAP",
        display: "suspend reason inappropriate",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.
     */
    v3_ActReason_AdmissionToHospital: {
        code: "HOSPADM",
        display: "admission to hospital",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The patient's medical condition has nearly abated.
     */
    v3_ActReason_ConditionImproved: {
        code: "IMPROV",
        display: "condition improved",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The covered party (patient) specified with the Invoice is not correct.
     */
    v3_ActReason_IncorrectCoveredPartyAsPatient: {
        code: "INCCOVPTY",
        display: "incorrect covered party as patient",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The billing information, specified in the Invoice Elements, is not correct.  This could include incorrect costing for items included in the Invoice.
     */
    v3_ActReason_IncorrectBilling: {
        code: "INCINVOICE",
        display: "incorrect billing",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The policy specified with the Invoice is not correct.  For example, it may belong to another Adjudicator or Covered Party.
     */
    v3_ActReason_IncorrectPolicy: {
        code: "INCPOLICY",
        display: "incorrect policy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The provider specified with the Invoice is not correct.
     */
    v3_ActReason_IncorrectProvider: {
        code: "INCPROV",
        display: "incorrect provider",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The level of coverage under the policy or program is available to an individual.
     */
    v3_ActReason_Individual: {
        code: "IND",
        display: "Individual",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The therapy has been found to not have the desired therapeutic benefit on the patient.
     */
    v3_ActReason_Ineffective: {
        code: "INEFFECT",
        display: "ineffective",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The record is already in the requested state.
     */
    v3_ActReason_InRequestedState: {
        code: "INRQSTATE",
        display: "in requested state",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The patient has an intolerance to the medication.
     */
    v3_ActReason_Intolerance: {
        code: "INTOL",
        display: "intolerance",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    v3_ActReason_INVOICE: {
        code: "INVOICE",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.
     */
    v3_ActReason_LabInterferenceIssues: {
        code: "LABINT",
        display: "lab interference issues",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:To provide information as a result of a subpoena.
     */
    v3_ActReason_Subpoena: {
        code: "LEGAL",
        display: "subpoena",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The prescription may not be reassigned from the original pharmacy.
     */
    v3_ActReason_Locked: {
        code: "LOCKED",
        display: "locked",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The bulk supply will be administered within a long term care facility.
     */
    v3_ActReason_LongTermCareUse: {
        code: "LTC",
        display: "long term care use",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:
     */
    v3_ActReason_Marketing: {
        code: "MARKT",
        display: "marketing",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Information is combined into the record.
     */
    v3_ActReason_MergeData: {
        code: "MDATA",
        display: "merge data",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The medical condition of the Patient has changed
     */
    v3_ActReason_MedicalStatusAltered: {
        code: "MED",
        display: "Medical Status Altered",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Required for medical reasons(s).
     */
    v3_ActReason_MedicalNecessity: {
        code: "MEDNEC",
        display: "Medical Necessity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Therapy has been changed and new prescription issued
     */
    v3_ActReason_ModifiedPrescriptionExists: {
        code: "MODIFY",
        display: "modified prescription exists",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Monitoring the patient while taking the medication, the decision has been made that the therapy is no longer appropriate.
     */
    v3_ActReason_ResponseToMonitoring: {
        code: "MONIT",
        display: "response to monitoring",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The Physician is in a meeting.  For example, he/she may request administrative time to talk to family after appointment
     */
    v3_ActReason_InAnOutsideMeeting: {
        code: "MTG",
        display: "In an outside meeting",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A person becomes eligible for a program based on more than one criterion.
     *
     *
     *                            Examples:  In the U.S., a child whose familiy income meets Medicaid financial thresholds and whose age is less than 18 is eligible for the Early and Periodic Screening, Diagnostic, and Treatment program (EPSDT).  A person whose family income meets Medicaid financial thresholds and whose age is 65 years or older is eligible for Medicaid and Medicare, and are referred to as dual eligibles.
     */
    v3_ActReason_MultipleCriteriaEligibility: {
        code: "MULTI",
        display: "multiple criteria eligibility",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Patient must see prescriber prior to further fills.
     */
    v3_ActReason_PatientMustMakeAppointment: {
        code: "NEEDAPMT",
        display: "patient must make appointment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:New information has become available to supplement the record.
     */
    v3_ActReason_NewInformation: {
        code: "NEWDATA",
        display: "new information",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The current medication will be replaced by a new strength of the same medication.
     */
    v3_ActReason_NewStrength: {
        code: "NEWSTR",
        display: "new strength",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:A new therapy will be commenced when current supply exhausted.
     */
    v3_ActReason_NewTherapy: {
        code: "NEWTHER",
        display: "new therapy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: The agent does not have permission.
     */
    v3_ActReason_NoAgentPermission: {
        code: "NOAGNTPERM",
        display: "no agent permission",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: There is no match.
     */
    v3_ActReason_NoMatch: {
        code: "NOMATCH",
        display: "no match",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.
     */
    v3_ActReason_PatientNotAvailable: {
        code: "NON-AVAIL",
        display: "patient not-available",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: There is no permission.
     */
    v3_ActReason_NoPermission: {
        code: "NOPERM",
        display: "no permission",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Patient did not come to get medication
     */
    v3_ActReason_NotPickedUp: {
        code: "NOPICK",
        display: "not picked up",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: There is no match for the product in the master file repository.
     */
    v3_ActReason_NoProductMatch: {
        code: "NOPRODMTCH",
        display: "no product match",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: There is no match for the record in the database.
     */
    v3_ActReason_NoRecordMatch: {
        code: "NORECMTCH",
        display: "no record match",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The underlying condition has been resolved or has evolved such that a different treatment is no longer needed.
     */
    v3_ActReason_NoLongerRequiredForTreatment: {
        code: "NOREQ",
        display: "no longer required for treatment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: There is no match for the service in the master file repository.
     */
    v3_ActReason_NoServiceMatch: {
        code: "NOSERMTCH",
        display: "no service match",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Original prescriber is no longer available to prescribe and no other prescriber has taken responsibility for the patient.
     */
    v3_ActReason_PrescriberNotAvailable: {
        code: "NOTAVAIL",
        display: "prescriber not available",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The product does not have (or no longer has) coverage under the patientaTMs insurance policy.
     */
    v3_ActReason_NotCovered: {
        code: "NOTCOVER",
        display: "not covered",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Patient no longer or has never been under this prescribers care.
     */
    v3_ActReason_PatientNoLongerInThisPractice: {
        code: "NOTPAT",
        display: "patient no longer in this practice",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The user does not have permission
     */
    v3_ActReason_NoUserPermission: {
        code: "NOUSERPERM",
        display: "no user permission",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: The user does not have permission.
     */
    v3_ActReason_NoUserPermission_2: {
        code: "NOUSRPERM",
        display: "no user permission",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: There is no match for the record and version.
     */
    v3_ActReason_NoVersionMatch: {
        code: "NOVERMTCH",
        display: "no version match",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The observation or test was neither defined or scheduled in the study protocol.
     */
    v3_ActReason_NonProtocol: {
        code: "NPT",
        display: "non-protocol",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The bulk supply is intended for general clinician office use.
     */
    v3_ActReason_OfficeUse: {
        code: "OFFICE",
        display: "office use",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:This medication is on hold.
     */
    v3_ActReason_MedicationOnHold: {
        code: "ONHOLD",
        display: "medication on hold",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Administrative and contractual processes required to support an activity, product, or service
     */
    v3_ActReason_Operations: {
        code: "OPERAT",
        display: "operations",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * In the case of 'substitution', indicates that the substitution occurred because the ordered item was not in stock.  In the case of 'no substitution', indicates that a cheaper equivalent was not substituted because it was not in stock.
     */
    v3_ActReason_OutOfStock: {
        code: "OS",
        display: "out of stock",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Operational activities conducted for the purposes of assessing the results of an activity, product, or service
     */
    v3_ActReason_OutcomeMeasure: {
        code: "OUTCOMS",
        display: "outcome measure",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The substance was administered outside of the recommended schedule or practice.
     */
    v3_ActReason_AdministeredOutsideRecommendedScheduleOrPractice: {
        code: "OUTSIDESCHED",
        display: "administered outside recommended schedule or practice",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information to which the patient has not consented by authorized entities for treating a condition which poses an immediate threat to the patient's health and which requires immediate medical intervention.
     *
     *
     *                            Usage Notes: The patient is unable to provide consent, but the provider determines they have an urgent healthcare related reason to access the record.
     */
    v3_ActReason_EmergencyTreatmentOverride: {
        code: "OVRER",
        display: "emergency treatment override",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information to which the patient has not consented because deemed incompetent to provide consent.
     *
     *
     *                            Usage Note: Maps to v2 CON-16 Subject Competence Indicator (ID) 01791 Definition: Identifies whether the subject was deemed competent to provide consent. Refer to table HL7 Table 0136 - Yes/No Indicator and CON-23 Non-Subject Consenter Reason User-defined Table 0502 - Non-Subject Consenter Reason code NC "Subject is not competent to consent".
     */
    v3_ActReason_IncompetencyOverride: {
        code: "OVRINCOMP",
        display: "incompetency override",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information to which the patient declined to consent for providing health care.
     *
     *
     *                            Usage Notes: The patient, while able to give consent, has not.  However the provider believes it is in the patient's interest to access the record without patient consent.
     */
    v3_ActReason_ProfessionalJudgmentOverride: {
        code: "OVRPJ",
        display: "professional judgment override",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information to which the patient has not consented for public safety reasons.
     *
     *
     *                            Usage Notes: The patient, while able to give consent, has not.  However, the provider believes that access to masked patient information is justified because of concerns related to public safety.
     */
    v3_ActReason_PublicSafetyOverride: {
        code: "OVRPS",
        display: "public safety override",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * To perform one or more operations on information to which the patient has not consented for third party safety.
     *
     *
     *                            Usage Notes: The patient, while able to give consent, has not.  However, the provider believes that access to masked patient information is justified because of concerns related to the health and safety of one or more third parties.
     */
    v3_ActReason_ThirdPartySafetyOverride: {
        code: "OVRTPS",
        display: "third party safety override",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The Patient requested the action
     */
    v3_ActReason_PatientRequest: {
        code: "PAT",
        display: "Patient request",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:To obtain records as part of patient care.
     */
    v3_ActReason_PatientCare: {
        code: "PATCAR",
        display: "patient care",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Patient changed their mind regarding obtaining medication
     */
    v3_ActReason_PatientChangedMind: {
        code: "PATDEC",
        display: "patient changed mind",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Patient not eligible for drug
     */
    v3_ActReason_PatientNotEligible: {
        code: "PATINELIG",
        display: "patient not eligible",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Patient requests information from their profile.
     */
    v3_ActReason_PatientRequestQuery: {
        code: "PATREQ",
        display: "patient request query",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Administrative, financial, and contractual processes related to payment for an activity, product, or service
     */
    v3_ActReason_Payment: {
        code: "PAYMT",
        display: "payment",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The bulk supply is being transferred to another dispensing facility to.
     *
     *
     *                            Example:Alleviate a temporary shortage.
     */
    v3_ActReason_PharmacyTransfer: {
        code: "PHARM",
        display: "pharmacy transfer",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The patient or their guardian objects to receiving the vaccine because of philosophical beliefs.
     */
    v3_ActReason_PhilosophicalObjection: {
        code: "PHILISOP",
        display: "philosophical objection",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The Physician requested the action
     */
    v3_ActReason_PhysicianRequest: {
        code: "PHY",
        display: "Physician request",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A person becomes a claimant under a property and casualty insurance policy because of a related health condition or injury resulting from a circumstance covered under the terms of the policy.
     *
     *
     *                            Example:  A person is a claimant under a homeowners insurance policy because of an injury sustained on the policyholderaTMs premises.
     */
    v3_ActReason_PropertyAndCasualtyCondition: {
        code: "PNC",
        display: "property and casualty condition",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The observation or test occurred due to it being defined in the research protocol, and during an activity or event that was scheduled in the protocol.
     */
    v3_ActReason_PerProtocol: {
        code: "PPT",
        display: "per protocol",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:To evaluate the provider's current practice for professional-improvement reasons.
     */
    v3_ActReason_PracticeReview: {
        code: "PRCREV",
        display: "practice review",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The patient refused to take the product.
     */
    v3_ActReason_PatientRefuse: {
        code: "PREFUS",
        display: "patient refuse",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The patient is pregnant or breast feeding.  The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.
     */
    v3_ActReason_ParentIsPregnantBreastFeeding: {
        code: "PREG",
        display: "parent is pregnant/breast feeding",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Operational activities conducted to meet program accounting requirements related to an activity, product, or service
     */
    v3_ActReason_ProgramReporting: {
        code: "PRGRPT",
        display: "program reporting",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:This product is not available or manufactured.
     */
    v3_ActReason_ProductNotAvailable: {
        code: "PRNA",
        display: "product not available",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    v3_ActReason_PROA: {
        code: "PROA",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: The substance was recalled by the manufacturer.
     */
    v3_ActReason_ProductRecall: {
        code: "PRODRECALL",
        display: "product recall",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The bulk supply is intended for dispensing according to a specific program.
     *
     *
     *                            Example:Mass immunization.
     */
    v3_ActReason_ProgramUse: {
        code: "PROG",
        display: "program use",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Patient does not meet required protocol
     */
    v3_ActReason_ProtocolNotMet: {
        code: "PROTUNMET",
        display: "protocol not met",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Provider is not authorized to prescribe or dispense
     */
    v3_ActReason_ProviderNotAuthorized: {
        code: "PROVUNAUTH",
        display: "provider not authorized",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Operational activities conducted for the purposes of improving the quality of an activity, product, or service
     */
    v3_ActReason_QualityImprovement: {
        code: "QUALIMP",
        display: "quality improvement",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:Patient requested a revised quantity of medication
     */
    v3_ActReason_ChangeSupplyQuantity: {
        code: "QUANTCHG",
        display: "change supply quantity",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The manufacturer or other agency has requested that stocks of a medication be removed from circulation.
     */
    v3_ActReason_ProductRecalled: {
        code: "RECALL",
        display: "product recalled",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    v3_ActReason_RECOV: {
        code: "RECOV",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Client was registered in error.
     */
    v3_ActReason_RegisteredInError: {
        code: "REGERR",
        display: "registered in error",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Review for the purpose of regulatory compliance.
     */
    v3_ActReason_RegulatoryReview: {
        code: "REGUL",
        display: "regulatory review",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The patient or their guardian objects to receiving the vaccine on religious grounds.
     */
    v3_ActReason_ReligiousObjection: {
        code: "RELIG",
        display: "religious objection",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Item in current order is no longer in use as requested and a new one has/will be created to replace it.
     */
    v3_ActReason_ChangeInOrder: {
        code: "REPLACE",
        display: "change in order",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Current order was issued with incorrect data and a new order has/will be created to replace it.
     */
    v3_ActReason_ErrorInOrder: {
        code: "REPLACEFIX",
        display: "error in order",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Investigative activities conducted for the purposes of obtaining knowledge
     */
    v3_ActReason_Research: {
        code: "RESCH",
        display: "research",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The event occurred so that a test or observation performed at a prior event could be performed again due to conditions set forth in the protocol.
     */
    v3_ActReason_Retest: {
        code: "RET",
        display: "retest",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    v3_ActReason_RETRO: {
        code: "RETRO",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Moved at the request of the patient.
     */
    v3_ActReason_Request: {
        code: "RQ",
        display: "Request",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Indicates that the decision to substitute or to not substitute was driven by a jurisdictional regulatory requirement mandating or prohibiting substitution.
     */
    v3_ActReason_RegulatoryRequirement: {
        code: "RR",
        display: "regulatory requirement",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:To provide research data, as authorized by the patient.
     */
    v3_ActReason_Research_2: {
        code: "RSRCH",
        display: "research",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    v3_ActReason_Allergy: {
        code: "SALG",
        display: "allergy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The event occurred due to it being scheduled in the research protocol.
     */
    v3_ActReason_Scheduled: {
        code: "SCH",
        display: "scheduled",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The drug interacts with a short-term treatment that is more urgently required.  This order will be resumed when the short-term treatment is complete.
     */
    v3_ActReason_DrugInteractsWithAnotherDrug: {
        code: "SDDI",
        display: "drug interacts with another drug",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Another short-term co-occurring therapy fulfills the same purpose as this therapy.  This therapy will be resumed when the co-occuring therapy is complete.
     */
    v3_ActReason_DuplicateTherapy: {
        code: "SDUPTHER",
        display: "duplicate therapy",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The patient is believed to have an intolerance to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.
     */
    v3_ActReason_SuspectedIntolerance: {
        code: "SINTOL",
        display: "suspected intolerance",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The level of coverage under the policy or program is available to a subscriber's spouse and children
     */
    v3_ActReason_SpouseAndChildren: {
        code: "SPC",
        display: "Spouse and children",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The level of coverage under the policy or program is available only to a subscribers spouse
     */
    v3_ActReason_SpouseOnly: {
        code: "SPO",
        display: "Spouse only",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Provision of a service, product, or capability to an individual or organization
     */
    v3_ActReason_Service: {
        code: "SRVC",
        display: "service",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A person becomes eligible for a program based on statutory criteria.
     *
     *
     *                            Examples:  A person is a member of an indigenous group, a veteran of military service, or  in the U.S., a recipient of adoption assistance and foster care under Title IV-E of the Social Security.
     */
    v3_ActReason_StatutoryEligibility: {
        code: "STATUTORY",
        display: "statutory eligibility",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Renewing or original prescriber informed patient to stop using the medication.
     */
    v3_ActReason_PrescriberStoppedMedicationForPatient: {
        code: "STOPMED",
        display: "prescriber stopped medication for patient",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future.  The drug will be resumed when the patient has sufficiently recovered from the surgery.
     */
    v3_ActReason_PatientScheduledForSurgery: {
        code: "SURG",
        display: "patient scheduled for surgery",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:Operational activities conducted to administer the electronic systems used for an activity, product, or service
     */
    v3_ActReason_SystemAdministration: {
        code: "SYSADMN",
        display: "system administration",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * The prescribed product has specific clinical release or other therapeutic characteristics not shared by other substitutable medications.
     */
    v3_ActReason_TherapeuticCharacteristics: {
        code: "THERCHAR",
        display: "therapeutic characteristics",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The patient should have medication remaining.
     */
    v3_ActReason_TooEarly: {
        code: "TOOEARLY",
        display: "too early",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    v3_ActReason_TRAN: {
        code: "TRAN",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition: The specific manufactured drug is part of a clinical trial.
     */
    v3_ActReason_ClinicalTrialDrug: {
        code: "TRIAL",
        display: "clinical trial drug",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The event occurred in order to terminate the subject's participation in the study.
     */
    v3_ActReason_Termination: {
        code: "TRM",
        display: "termination",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Information is separated from the record.
     */
    v3_ActReason_UnmergeData: {
        code: "UMDATA",
        display: "unmerge data",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:&lt;The patient is not (or is no longer) able to use the medication in a manner prescribed.
     *
     *
     *                            Example:CanaTMt swallow.
     */
    v3_ActReason_UnableToUse: {
        code: "UNABLE",
        display: "unable to use",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The target facility does not recognize the dispensing facility.
     */
    v3_ActReason_UnknownTarget: {
        code: "UNKWNTARGET",
        display: "unknown target",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The event that occurred was initiated by a study participant (e.g. the subject or the investigator), and did not occur for protocol reasons.
     */
    v3_ActReason_Unscheduled: {
        code: "UNS",
        display: "unscheduled",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * :The observation or test occurred as defined in the research protocol, but at a point in time not specified in the study protocol.
     */
    v3_ActReason_PerDefinition: {
        code: "UPT",
        display: "per definition",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The intended vaccine has expired or is otherwise believed to no longer be effective.
     *
     *
     *                            Example:Due to temperature exposure.
     */
    v3_ActReason_VaccineEfficacyConcerns: {
        code: "VACEFF",
        display: "vaccine efficacy concerns",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Definition:The patient or their guardian objects to receiving the vaccine because of concerns over its safety.
     */
    v3_ActReason_VaccineSafetyConcerns: {
        code: "VACSAF",
        display: "vaccine safety concerns",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:To validate the patient's record.
     *
     *
     *                            Example:Merging or unmerging records.
     */
    v3_ActReason_ValidationReview: {
        code: "VALIDATION",
        display: "validation review",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A person becomes a claimant under a motor vehicle accident insurance because of a motor vehicle accident related health condition or injury.
     */
    v3_ActReason_MotorVehicleAccidentVictim: {
        code: "VEHIC",
        display: "motor vehicle accident victim",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description:The patient was previously receiving a medication contraindicated with the current medication.  The current medication will remain on hold until the prior medication has been cleansed from their system.
     */
    v3_ActReason_WaitingForOldDrugToWashOut: {
        code: "WASHOUT",
        display: "waiting for old drug to wash out",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * A person becomes eligible for insurance or a program because of a work related health condition or injury.
     *
     *
     *                            Example:  A person is a claimant under the U.S. Black Lung Program.
     */
    v3_ActReason_WorkRelated: {
        code: "WORK",
        display: "work related",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    },
    /**
     * Description: The record and version requested to update is not the current version.
     */
    v3_ActReason_WrongVersion: {
        code: "WRNGVER",
        display: "wrong version",
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason"
    }
};