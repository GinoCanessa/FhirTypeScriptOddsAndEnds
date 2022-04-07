import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare class ChargeItemPerformer extends fhirModels.BackboneElement implements fhirInterfaces.IChargeItemPerformer {
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor?: fhirModels.Reference | undefined;
    /**
     * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
     */
    function?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for ChargeItemPerformer from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IChargeItemPerformer>);
    /**
     * Factory function to create a ChargeItemPerformer from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IChargeItemPerformer): ChargeItemPerformer;
    /**
     * Check if the current ChargeItemPerformer contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export declare class ChargeItem extends fhirModels.DomainResource implements fhirInterfaces.IChargeItem {
    /**
     * Resource Type Name
     */
    readonly resourceType = "ChargeItem";
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhirModels.Reference[] | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodysite?: fhirModels.CodeableConcept[] | undefined;
    /**
     * A code that identifies the charge, like a billing code.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhirModels.Reference | undefined;
    /**
     * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
     */
    costCenter?: fhirModels.Reference | undefined;
    /**
     * References the source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionCanonical?: string[] | undefined;
    _definitionCanonical?: fhirModels.Element[] | undefined;
    /**
     * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionUri?: string[] | undefined;
    _definitionUri?: fhirModels.Element[] | undefined;
    /**
     * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
     */
    enteredDate?: string | undefined;
    _enteredDate?: fhirModels.Element | undefined;
    /**
     * The enterer is also the person considered responsible for factor/price overrides if applicable.
     */
    enterer?: fhirModels.Reference | undefined;
    /**
     * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factorOverride?: number | undefined;
    _factorOverride?: fhirModels.Element | undefined;
    /**
     * Identifiers assigned to this event performer or other systems.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirModels.Element | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrencePeriod?: fhirModels.Period | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceTiming?: fhirModels.Timing | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    overrideReason?: string | undefined;
    _overrideReason?: fhirModels.Element | undefined;
    /**
     * ChargeItems can be grouped to larger ChargeItems covering the whole set.
     */
    partOf?: fhirModels.Reference[] | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    performer?: fhirModels.ChargeItemPerformer[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    performingOrganization?: fhirModels.Reference | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    priceOverride?: fhirModels.Money | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productReference?: fhirModels.Reference | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
     */
    reason?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
     */
    requestingOrganization?: fhirModels.Reference | undefined;
    /**
     * Indicated the rendered service that caused this charge.
     */
    service?: fhirModels.Reference[] | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
     */
    status?: ChargeItemStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * The individual or set of individuals the action is being or was performed on.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * Further information supporting this charge.
     */
    supportingInformation?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for ChargeItem from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IChargeItem>);
    /**
     * Factory function to create a ChargeItem from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IChargeItem): ChargeItem;
    /**
     * Check if the current ChargeItem contains all required elements.
     */
    checkRequiredElements(): string[];
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
//# sourceMappingURL=ChargeItem.d.ts.map