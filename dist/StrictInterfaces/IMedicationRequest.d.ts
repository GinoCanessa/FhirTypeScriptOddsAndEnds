import * as fhirInterfaces from '../strictinterfaces';
/**
 * If populating this element, either the quantity or the duration must be included.
 */
export interface IMedicationRequestDispenseRequestInitialFill extends fhirInterfaces.IBackboneElement {
    /**
     * The length of time that the first dispense is expected to last.
     */
    duration?: fhirInterfaces.IDuration | undefined;
    /**
     * The amount or quantity to provide as part of the first dispense.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
}
/**
 * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
 */
export interface IMedicationRequestDispenseRequest extends fhirInterfaces.IBackboneElement {
    /**
     * The minimum period of time that must occur between dispenses of the medication.
     */
    dispenseInterval?: fhirInterfaces.IDuration | undefined;
    /**
     * In some situations, this attribute may be used instead of quantity to identify the amount supplied by how long it is expected to last, rather than the physical quantity issued, e.g. 90 days supply of medication (based on an ordered dosage). When possible, it is always better to specify quantity, as this tends to be more precise. expectedSupplyDuration will always be an estimate that can be influenced by external factors.
     */
    expectedSupplyDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * If populating this element, either the quantity or the duration must be included.
     */
    initialFill?: fhirInterfaces.IMedicationRequestDispenseRequestInitialFill | undefined;
    /**
     * If displaying "number of authorized fills", add 1 to this number.
     */
    numberOfRepeatsAllowed?: number | undefined;
    _numberOfRepeatsAllowed?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates the intended dispensing Organization specified by the prescriber.
     */
    performer?: fhirInterfaces.IReference | undefined;
    /**
     * The amount that is to be dispensed for one fill.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * It reflects the prescribers' perspective for the validity of the prescription. Dispenses must not be made against the prescription outside of this period. The lower-bound of the Dispensing Window signifies the earliest date that the prescription can be filled for the first time. If an upper-bound is not specified then the Prescription is open-ended or will default to a stale-date based on regulations.
     */
    validityPeriod?: fhirInterfaces.IPeriod | undefined;
}
/**
 * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
 */
export interface IMedicationRequestSubstitution extends fhirInterfaces.IBackboneElement {
    /**
     * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
     */
    allowedBoolean?: boolean | undefined;
    _allowedBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * This element is labeled as a modifier because whether substitution is allow or not, it cannot be ignored.
     */
    allowedCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Indicates the reason for the substitution, or why substitution must or must not be performed.
     */
    reason?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.
 */
export interface IMedicationRequest extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "MedicationRequest";
    /**
     * The date (and perhaps time) when the prescription was initially written or authored on.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhirInterfaces.IElement | undefined;
    /**
     * A plan or request that is fulfilled in whole or in part by this medication request.
     */
    basedOn?: fhirInterfaces.IReference[] | undefined;
    /**
     * The category can be used to include where the medication is expected to be consumed or other types of requests.
     */
    category?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * This attribute should not be confused with the protocol of the medication.
     */
    courseOfTherapyType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This element can include a detected issue that has been identified either by a decision support system or by a clinician and may include information on the steps that were taken to address the issue.
     */
    detectedIssue?: fhirInterfaces.IReference[] | undefined;
    /**
     * Indicates the specific details for the dispense or medication supply part of a medication request (also known as a Medication Prescription or Medication Order).  Note that this information is not always sent with the order.  There may be in some settings (e.g. hospitals) institutional or system support for completing the dispense details in the pharmacy department.
     */
    dispenseRequest?: fhirInterfaces.IMedicationRequestDispenseRequest | undefined;
    /**
     * If do not perform is not specified, the request is a positive request e.g. "do perform".
     */
    doNotPerform?: boolean | undefined;
    _doNotPerform?: fhirInterfaces.IElement | undefined;
    /**
     * There are examples where a medication request may include the option of an oral dose or an Intravenous or Intramuscular dose.  For example, "Ondansetron 8mg orally or IV twice a day as needed for nausea" or "Compazine® (prochlorperazine) 5-10mg PO or 25mg PR bid prn nausea or vomiting".  In these cases, two medication requests would be created that could be grouped together.  The decision on which dose and route of administration to use is based on the patient's condition at the time the dose is needed.
     */
    dosageInstruction?: fhirInterfaces.IDosage[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter."    If there is a need to link to episodes of care they will be handled with an extension.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * This might not include provenances for all versions of the request – only those deemed “relevant” or important. This SHALL NOT include the provenance associated with this current version of the resource. (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update. Until then, it can be queried directly as the provenance that points to this version using _revinclude All Provenances should have some historical version of this Request as their subject.).
     */
    eventHistory?: fhirInterfaces.IReference[] | undefined;
    /**
     * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription.
     */
    groupIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * This is a business identifier, not a resource identifier.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest.
     */
    instantiatesCanonical?: string[] | undefined;
    _instantiatesCanonical?: fhirInterfaces.IElement[] | undefined;
    /**
     * The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest.
     */
    instantiatesUri?: string[] | undefined;
    _instantiatesUri?: fhirInterfaces.IElement[] | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
     */
    insurance?: fhirInterfaces.IReference[] | undefined;
    /**
     * It is expected that the type of requester will be restricted for different stages of a MedicationRequest.  For example, Proposals can be created by a patient, relatedPerson, Practitioner or Device.  Plans can be created by Practitioners, Patients, RelatedPersons and Devices.  Original orders can be created by a Practitioner only.
     * An instance-order is an instantiation of a request or order and may be used to populate Medication Administration Record.
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: MedicationRequestIntentEnum;
    _intent?: fhirInterfaces.IElement | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
     */
    medicationCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * If only a code is specified, then it needs to be a code for a specific product. If more information is required, then the use of the Medication resource is recommended.  For example, if you require form or lot number or if the medication is compounded or extemporaneously prepared, then you must reference the Medication resource.
     */
    medicationReference?: fhirInterfaces.IReference | undefined;
    /**
     * Extra information about the prescription that could not be conveyed by the other attributes.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * The specified desired performer of the medication treatment (e.g. the performer of the medication administration).
     */
    performer?: fhirInterfaces.IReference | undefined;
    /**
     * If specified without indicating a performer, this indicates that the performer must be of the specified type. If specified with a performer then it indicates the requirements of the performer if the designated performer is not available.
     */
    performerType?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Indicates how quickly the Medication Request should be addressed with respect to other requests.
     */
    priority?: MedicationRequestPriorityEnum | undefined;
    _priority?: fhirInterfaces.IElement | undefined;
    /**
     * A link to a resource representing an earlier order related order or prescription.
     */
    priorPrescription?: fhirInterfaces.IReference | undefined;
    /**
     * This could be a diagnosis code. If a full condition record exists or additional detail is needed, use reasonReference.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * This is a reference to a condition or observation that is the reason for the medication order.  If only a code exists, use reasonCode.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order.
     */
    recorder?: fhirInterfaces.IReference | undefined;
    /**
     * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
     */
    reportedBoolean?: boolean | undefined;
    _reportedBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * Indicates if this record was captured as a secondary 'reported' record rather than as an original primary source-of-truth record.  It may also indicate the source of the report.
     */
    reportedReference?: fhirInterfaces.IReference | undefined;
    /**
     * The individual, organization, or device that initiated the request and has responsibility for its activation.
     */
    requester?: fhirInterfaces.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: MedicationRequestStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * This is generally only used for "exception" statuses such as "suspended" or "cancelled". The reason why the MedicationRequest was created at all is captured in reasonCode, not here.
     */
    statusReason?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The subject on a medication request is mandatory.  For the secondary use case where the actual subject is not provided, there still must be an anonymized subject specified.
     */
    subject: fhirInterfaces.IReference;
    /**
     * Indicates whether or not substitution can or should be part of the dispense. In some cases, substitution must happen, in other cases substitution must not happen. This block explains the prescriber's intent. If nothing is specified substitution may be done.
     */
    substitution?: fhirInterfaces.IMedicationRequestSubstitution | undefined;
    /**
     * Include additional information (for example, patient height and weight) that supports the ordering of the medication.
     */
    supportingInformation?: fhirInterfaces.IReference[] | undefined;
}
/**
 * Code Values for the MedicationRequest.intent field
 */
export declare enum MedicationRequestIntentEnum {
    PROPOSAL = "proposal",
    PLAN = "plan",
    ORDER = "order",
    ORIGINAL_ORDER = "original-order",
    REFLEX_ORDER = "reflex-order",
    FILLER_ORDER = "filler-order",
    INSTANCE_ORDER = "instance-order",
    OPTION = "option"
}
/**
 * Code Values for the MedicationRequest.priority field
 */
export declare enum MedicationRequestPriorityEnum {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}
/**
 * Code Values for the MedicationRequest.status field
 */
export declare enum MedicationRequestStatusEnum {
    ACTIVE = "active",
    ON_HOLD = "on-hold",
    CANCELLED = "cancelled",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    STOPPED = "stopped",
    DRAFT = "draft",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IMedicationRequest.d.ts.map