import * as fhir from '../fhir.js';
import { PerformerRoleValueSetType } from '../fhirValueSets/PerformerRoleValueSet.js';
import { ChargeitemStatusValueSetType, ChargeitemStatusValueSetEnum } from '../fhirValueSets/ChargeitemStatusValueSet.js';
import { ChargeitemBillingcodesValueSetType } from '../fhirValueSets/ChargeitemBillingcodesValueSet.js';
import { BodySiteValueSetType } from '../fhirValueSets/BodySiteValueSet.js';
import { DeviceKindValueSetType } from '../fhirValueSets/DeviceKindValueSet.js';
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare type IChargeItemPerformer = fhir.IBackboneElement & {
    /**
     * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
     */
    function?: fhir.ICodeableConcept | undefined;
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.IReference | null;
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
     * Identifiers assigned to this event performer or other systems.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.definitionUri
     */
    _definitionUri?: fhir.IFhirElement[] | undefined;
    /**
     * References the source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.definitionCanonical
     */
    _definitionCanonical?: fhir.IFhirElement[] | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
     */
    status: ChargeitemStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ChargeItem.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * ChargeItems can be grouped to larger ChargeItems covering the whole set.
     */
    partOf?: fhir.IReference[] | undefined;
    /**
     * A code that identifies the charge, like a billing code.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * The individual or set of individuals the action is being or was performed on.
     */
    subject: fhir.IReference | null;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.IReference | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.occurrence[x]
     */
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
     * Indicates who or what performed or participated in the charged service.
     */
    performer?: fhir.IChargeItemPerformer[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    performingOrganization?: fhir.IReference | undefined;
    /**
     * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
     */
    requestingOrganization?: fhir.IReference | undefined;
    /**
     * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
     */
    costCenter?: fhir.IReference | undefined;
    /**
     * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodysite?: fhir.ICodeableConcept[] | undefined;
    /**
     * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factorOverride?: number | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.factorOverride
     */
    _factorOverride?: fhir.IFhirElement | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    priceOverride?: fhir.IMoney | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    overrideReason?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.overrideReason
     */
    _overrideReason?: fhir.IFhirElement | undefined;
    /**
     * The enterer is also the person considered responsible for factor/price overrides if applicable.
     */
    enterer?: fhir.IReference | undefined;
    /**
     * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
     */
    enteredDate?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.enteredDate
     */
    _enteredDate?: fhir.IFhirElement | undefined;
    /**
     * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
     */
    reason?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicated the rendered service that caused this charge.
     */
    service?: fhir.IReference[] | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productReference?: fhir.IReference | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.IReference[] | undefined;
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * Further information supporting this charge.
     */
    supportingInformation?: fhir.IReference[] | undefined;
};
/**
 * Indicates who or what performed or participated in the charged service.
 */
export declare class ChargeItemPerformer extends fhir.BackboneElement implements IChargeItemPerformer {
    /**
     * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
     */
    function?: fhir.CodeableConcept | undefined;
    /**
     * The device, practitioner, etc. who performed or participated in the service.
     */
    actor: fhir.Reference | null;
    /**
     * Default constructor for ChargeItemPerformer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IChargeItemPerformer>);
    /**
     * Example-bound Value Set for function
     */
    static functionExampleValueSet(): PerformerRoleValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export declare class ChargeItem extends fhir.DomainResource implements IChargeItem {
    /**
     * Resource Type Name
     */
    resourceType: "ChargeItem";
    /**
     * Identifiers assigned to this event performer or other systems.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionUri?: string[] | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.definitionUri
     */
    _definitionUri?: fhir.FhirElement[] | undefined;
    /**
     * References the source of pricing information, rules of application for the code this ChargeItem uses.
     */
    definitionCanonical?: string[] | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.definitionCanonical
     */
    _definitionCanonical?: fhir.FhirElement[] | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
     */
    status: ChargeitemStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: ChargeItem.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * ChargeItems can be grouped to larger ChargeItems covering the whole set.
     */
    partOf?: fhir.Reference[] | undefined;
    /**
     * A code that identifies the charge, like a billing code.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The individual or set of individuals the action is being or was performed on.
     */
    subject: fhir.Reference | null;
    /**
     * The encounter or episode of care that establishes the context for this event.
     */
    context?: fhir.Reference | undefined;
    /**
     * The list of types may be constrained as appropriate for the type of charge item.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.occurrence[x]
     */
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
     * Indicates who or what performed or participated in the charged service.
     */
    performer?: fhir.ChargeItemPerformer[] | undefined;
    /**
     * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
     */
    performingOrganization?: fhir.Reference | undefined;
    /**
     * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
     */
    requestingOrganization?: fhir.Reference | undefined;
    /**
     * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
     */
    costCenter?: fhir.Reference | undefined;
    /**
     * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
     */
    bodysite?: fhir.CodeableConcept[] | undefined;
    /**
     * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    factorOverride?: number | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.factorOverride
     */
    _factorOverride?: fhir.FhirElement | undefined;
    /**
     * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
     */
    priceOverride?: fhir.Money | undefined;
    /**
     * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
     */
    overrideReason?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.overrideReason
     */
    _overrideReason?: fhir.FhirElement | undefined;
    /**
     * The enterer is also the person considered responsible for factor/price overrides if applicable.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
     */
    enteredDate?: string | undefined;
    /**
     * Extended properties for primitive element: ChargeItem.enteredDate
     */
    _enteredDate?: fhir.FhirElement | undefined;
    /**
     * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
     */
    reason?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicated the rendered service that caused this charge.
     */
    service?: fhir.Reference[] | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productReference?: fhir.Reference | undefined;
    /**
     * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
     */
    productCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
     */
    account?: fhir.Reference[] | undefined;
    /**
     * Comments made about the event by the performer, subject or other participants.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Further information supporting this charge.
     */
    supportingInformation?: fhir.Reference[] | undefined;
    /**
     * Default constructor for ChargeItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IChargeItem>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ChargeitemStatusValueSetType;
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ChargeitemBillingcodesValueSetType;
    /**
     * Example-bound Value Set for bodysite
     */
    static bodysiteExampleValueSet(): BodySiteValueSetType;
    /**
     * Example-bound Value Set for productReference
     */
    static productReferenceExampleValueSet(): DeviceKindValueSetType;
    /**
     * Example-bound Value Set for productCodeableConcept
     */
    static productCodeableConceptExampleValueSet(): DeviceKindValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ChargeItem.d.ts.map