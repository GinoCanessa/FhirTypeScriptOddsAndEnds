import * as fhirInterfaces from '../strictinterfaces';
/**
 * Indicates who or what performed or participated in the charged service.
 */
export interface IChargeItemPerformer extends fhirInterfaces.IBackboneElement {
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhirInterfaces.IReference;
    /**
     * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
     */
    function?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export interface IChargeItem extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "ChargeItem";
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhirInterfaces.IReference[] | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodysite?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * A code that identifies the charge, like a billing code.
     */
    code: fhirInterfaces.ICodeableConcept;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhirInterfaces.IReference | undefined;
    /**
     * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
     */
    costCenter?: fhirInterfaces.IReference | undefined;
    /**
     * References the source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionCanonical?: string[] | undefined;
    _definitionCanonical?: fhirInterfaces.IElement[] | undefined;
    /**
     * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionUri?: string[] | undefined;
    _definitionUri?: fhirInterfaces.IElement[] | undefined;
    /**
     * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
     */
    enteredDate?: string | undefined;
    _enteredDate?: fhirInterfaces.IElement | undefined;
    /**
     * The enterer is also the person considered responsible for factor/price overrides if applicable.
     */
    enterer?: fhirInterfaces.IReference | undefined;
    /**
     * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factorOverride?: number | undefined;
    _factorOverride?: fhirInterfaces.IElement | undefined;
    /**
     * Identifiers assigned to this event performer or other systems.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrencePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    overrideReason?: string | undefined;
    _overrideReason?: fhirInterfaces.IElement | undefined;
    /**
     * ChargeItems can be grouped to larger ChargeItems covering the whole set.
     */
    partOf?: fhirInterfaces.IReference[] | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    performer?: fhirInterfaces.IChargeItemPerformer[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    performingOrganization?: fhirInterfaces.IReference | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    priceOverride?: fhirInterfaces.IMoney | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productReference?: fhirInterfaces.IReference | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
     */
    reason?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
     */
    requestingOrganization?: fhirInterfaces.IReference | undefined;
    /**
     * Indicated the rendered service that caused this charge.
     */
    service?: fhirInterfaces.IReference[] | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
     */
    status: ChargeItemStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The individual or set of individuals the action is being or was performed on.
     */
    subject: fhirInterfaces.IReference;
    /**
     * Further information supporting this charge.
     */
    supportingInformation?: fhirInterfaces.IReference[] | undefined;
}
/**
 * Code Values for the ChargeItem.status field
 */
export declare enum ChargeItemStatusEnum {
    PLANNED = "planned",
    BILLABLE = "billable",
    NOT_BILLABLE = "not-billable",
    ABORTED = "aborted",
    BILLED = "billed",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=IChargeItem.d.ts.map