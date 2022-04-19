import * as fhir from '../fhir';
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare type IChargeItemPerformer = fhir.IBackboneElement & {
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.IReference | null;
    /**
     * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
     */
    function?: fhir.ICodeableConcept | undefined;
};
/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export declare type IChargeItem = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "ChargeItem";
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.IReference[] | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodysite?: fhir.ICodeableConcept[] | undefined;
    /**
     * A code that identifies the charge, like a billing code.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.IReference | undefined;
    /**
     * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
     */
    costCenter?: fhir.IReference | undefined;
    /**
     * References the source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionCanonical?: string[] | undefined;
    _definitionCanonical?: fhir.IFhirElement[] | undefined;
    /**
     * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionUri?: string[] | undefined;
    _definitionUri?: fhir.IFhirElement[] | undefined;
    /**
     * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
     */
    enteredDate?: string | undefined;
    _enteredDate?: fhir.IFhirElement | undefined;
    /**
     * The enterer is also the person considered responsible for factor/price overrides if applicable.
     */
    enterer?: fhir.IReference | undefined;
    /**
     * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factorOverride?: number | undefined;
    _factorOverride?: fhir.IFhirElement | undefined;
    /**
     * Identifiers assigned to this event performer or other systems.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.IFhirElement | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrencePeriod?: fhir.IPeriod | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceTiming?: fhir.ITiming | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    overrideReason?: string | undefined;
    _overrideReason?: fhir.IFhirElement | undefined;
    /**
     * ChargeItems can be grouped to larger ChargeItems covering the whole set.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    performer?: fhir.IChargeItemPerformer[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    performingOrganization?: fhir.IReference | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    priceOverride?: fhir.IMoney | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productReference?: fhir.IReference | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
     */
    reason?: fhir.ICodeableConcept[] | undefined;
    /**
     * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
     */
    requestingOrganization?: fhir.IReference | undefined;
    /**
     * Indicated the rendered service that caused this charge.
     */
    service?: fhir.IReference[] | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
     */
    status: ChargeItemStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * The individual or set of individuals the action is being or was performed on.
     */
    subject: fhir.IReference | null;
    /**
     * Further information supporting this charge.
     */
    supportingInformation?: fhir.IReference[] | undefined;
};
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare class ChargeItemPerformer extends fhir.BackboneElement implements fhir.IChargeItemPerformer {
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.Reference | null;
    /**
     * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ChargeItemPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IChargeItemPerformer>);
    /**
     * Check if the current ChargeItemPerformer contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ChargeItemPerformer from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IChargeItemPerformer): ChargeItemPerformer;
}
/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export declare class ChargeItem extends fhir.DomainResource implements fhir.IChargeItem {
    /**
     * Resource Type Name
     */
    resourceType: "ChargeItem";
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.Reference[] | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodysite?: fhir.CodeableConcept[] | undefined;
    /**
     * A code that identifies the charge, like a billing code.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.Reference | undefined;
    /**
     * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
     */
    costCenter?: fhir.Reference | undefined;
    /**
     * References the source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionCanonical?: string[] | undefined;
    _definitionCanonical?: fhir.FhirElement[] | undefined;
    /**
     * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionUri?: string[] | undefined;
    _definitionUri?: fhir.FhirElement[] | undefined;
    /**
     * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
     */
    enteredDate?: string | undefined;
    _enteredDate?: fhir.FhirElement | undefined;
    /**
     * The enterer is also the person considered responsible for factor/price overrides if applicable.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factorOverride?: number | undefined;
    _factorOverride?: fhir.FhirElement | undefined;
    /**
     * Identifiers assigned to this event performer or other systems.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.FhirElement | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceTiming?: fhir.Timing | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    overrideReason?: string | undefined;
    _overrideReason?: fhir.FhirElement | undefined;
    /**
     * ChargeItems can be grouped to larger ChargeItems covering the whole set.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * Indicates who or what performed or participated in the charged service.
     */
    performer?: fhir.ChargeItemPerformer[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    performingOrganization?: fhir.Reference | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    priceOverride?: fhir.Money | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productReference?: fhir.Reference | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
     */
    reason?: fhir.CodeableConcept[] | undefined;
    /**
     * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
     */
    requestingOrganization?: fhir.Reference | undefined;
    /**
     * Indicated the rendered service that caused this charge.
     */
    service?: fhir.Reference[] | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
     */
    status: ChargeItemStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * The individual or set of individuals the action is being or was performed on.
     */
    subject: fhir.Reference | null;
    /**
     * Further information supporting this charge.
     */
    supportingInformation?: fhir.Reference[] | undefined;
    /**
     * Default constructor for ChargeItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IChargeItem>);
    /**
     * Check if the current ChargeItem contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ChargeItem from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IChargeItem): ChargeItem;
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