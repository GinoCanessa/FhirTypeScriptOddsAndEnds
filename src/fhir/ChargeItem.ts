// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ChargeItem

import * as fhir from '../fhir.js'

import { PerformerRoleValueSet, PerformerRoleValueSetType, PerformerRoleValueSetEnum } from '../fhirValueSets/PerformerRoleValueSet.js'
import { ChargeitemStatusValueSet, ChargeitemStatusValueSetType, ChargeitemStatusValueSetEnum } from '../fhirValueSets/ChargeitemStatusValueSet.js'
import { ChargeitemBillingcodesValueSet, ChargeitemBillingcodesValueSetType, ChargeitemBillingcodesValueSetEnum } from '../fhirValueSets/ChargeitemBillingcodesValueSet.js'
import { BodySiteValueSet, BodySiteValueSetType, BodySiteValueSetEnum } from '../fhirValueSets/BodySiteValueSet.js'
import { DeviceKindValueSet, DeviceKindValueSetType, DeviceKindValueSetEnum } from '../fhirValueSets/DeviceKindValueSet.js'

/**
 * Indicates who or what performed or participated in the charged service.
 */
export type IChargeItemPerformer = fhir.IBackboneElement & { 
  /**
   * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
   */
  function?: fhir.ICodeableConcept|undefined;
  /**
   * The device, practitioner, etc. who performed or participated in the service.
   */
  actor: fhir.IReference|null;
}

/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export type IChargeItem = fhir.IDomainResource & { 
  /**
   * Resource Type Name
   */
  resourceType: "ChargeItem";
  /**
   * Identifiers assigned to this event performer or other systems.
   */
  identifier?: fhir.IIdentifier[]|undefined;
  /**
   * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
   */
  definitionUri?: string[]|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.definitionUri
   */
  _definitionUri?: fhir.IFhirElement[]|undefined;
  /**
   * References the source of pricing information, rules of application for the code this ChargeItem uses.
   */
  definitionCanonical?: string[]|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.definitionCanonical
   */
  _definitionCanonical?: fhir.IFhirElement[]|undefined;
  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
   */
  status: ChargeitemStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: ChargeItem.status
   */
  _status?: fhir.IFhirElement|undefined;
  /**
   * ChargeItems can be grouped to larger ChargeItems covering the whole set.
   */
  partOf?: fhir.IReference[]|undefined;
  /**
   * A code that identifies the charge, like a billing code.
   */
  code: fhir.ICodeableConcept|null;
  /**
   * The individual or set of individuals the action is being or was performed on.
   */
  subject: fhir.IReference|null;
  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  context?: fhir.IReference|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  occurrenceDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.occurrence[x]
   */
  _occurrenceDateTime?: fhir.IFhirElement|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  occurrencePeriod?: fhir.IPeriod|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  occurrenceTiming?: fhir.ITiming|undefined;
  /**
   * Indicates who or what performed or participated in the charged service.
   */
  performer?: fhir.IChargeItemPerformer[]|undefined;
  /**
   * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
   */
  performingOrganization?: fhir.IReference|undefined;
  /**
   * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
   */
  requestingOrganization?: fhir.IReference|undefined;
  /**
   * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
   */
  costCenter?: fhir.IReference|undefined;
  /**
   * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
   */
  quantity?: fhir.IQuantity|undefined;
  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  bodysite?: fhir.ICodeableConcept[]|undefined;
  /**
   * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  factorOverride?: number|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.factorOverride
   */
  _factorOverride?: fhir.IFhirElement|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  priceOverride?: fhir.IMoney|undefined;
  /**
   * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  overrideReason?: string|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.overrideReason
   */
  _overrideReason?: fhir.IFhirElement|undefined;
  /**
   * The enterer is also the person considered responsible for factor/price overrides if applicable.
   */
  enterer?: fhir.IReference|undefined;
  /**
   * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
   */
  enteredDate?: string|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.enteredDate
   */
  _enteredDate?: fhir.IFhirElement|undefined;
  /**
   * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
   */
  reason?: fhir.ICodeableConcept[]|undefined;
  /**
   * Indicated the rendered service that caused this charge.
   */
  service?: fhir.IReference[]|undefined;
  /**
   * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
   */
  productReference?: fhir.IReference|undefined;
  /**
   * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
   */
  productCodeableConcept?: fhir.ICodeableConcept|undefined;
  /**
   * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
   */
  account?: fhir.IReference[]|undefined;
  /**
   * Comments made about the event by the performer, subject or other participants.
   */
  note?: fhir.IAnnotation[]|undefined;
  /**
   * Further information supporting this charge.
   */
  supportingInformation?: fhir.IReference[]|undefined;
}

/**
 * Indicates who or what performed or participated in the charged service.
 */
export class ChargeItemPerformer extends fhir.BackboneElement implements IChargeItemPerformer {
  /**
   * Describes the type of performance or participation(e.g. primary surgeon, anesthesiologiest, etc.).
   */
  public function?: fhir.CodeableConcept|undefined;
  /**
   * The device, practitioner, etc. who performed or participated in the service.
   */
  public actor: fhir.Reference|null;
  /**
   * Default constructor for ChargeItemPerformer - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IChargeItemPerformer> = { }) {
    super(source);
    if (source['function']) { this.function = new fhir.CodeableConcept(source.function!); }
    if (source['actor']) { this.actor = new fhir.Reference(source.actor!); }
    else { this.actor = null; }
  }
  /**
   * Example-bound Value Set for function
   */
  public static functionExampleValueSet():PerformerRoleValueSetType {
    return PerformerRoleValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (this["function"]) { results.push(...this.function.doModelValidation()); }
    if (!this["actor"]) { results.push(["actor",'Missing required element: ChargeItem.performer.actor']); }
    if (this["actor"]) { results.push(...this.actor.doModelValidation()); }
    return results;
  }
}

/**
 * The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.
 */
export class ChargeItem extends fhir.DomainResource implements IChargeItem {
  /**
   * Resource Type Name
   */
  public resourceType: "ChargeItem";
  /**
   * Identifiers assigned to this event performer or other systems.
   */
  public identifier?: fhir.Identifier[]|undefined;
  /**
   * References the (external) source of pricing information, rules of application for the code this ChargeItem uses.
   */
  public definitionUri?: string[]|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.definitionUri
   */
  public _definitionUri?: fhir.FhirElement[]|undefined;
  /**
   * References the source of pricing information, rules of application for the code this ChargeItem uses.
   */
  public definitionCanonical?: string[]|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.definitionCanonical
   */
  public _definitionCanonical?: fhir.FhirElement[]|undefined;
  /**
   * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the charge item as not currently valid.
   */
  public status: ChargeitemStatusValueSetEnum|null;
  /**
   * Extended properties for primitive element: ChargeItem.status
   */
  public _status?: fhir.FhirElement|undefined;
  /**
   * ChargeItems can be grouped to larger ChargeItems covering the whole set.
   */
  public partOf?: fhir.Reference[]|undefined;
  /**
   * A code that identifies the charge, like a billing code.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The individual or set of individuals the action is being or was performed on.
   */
  public subject: fhir.Reference|null;
  /**
   * The encounter or episode of care that establishes the context for this event.
   */
  public context?: fhir.Reference|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  public occurrenceDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.occurrence[x]
   */
  public _occurrenceDateTime?: fhir.FhirElement|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  public occurrencePeriod?: fhir.Period|undefined;
  /**
   * The list of types may be constrained as appropriate for the type of charge item.
   */
  public occurrenceTiming?: fhir.Timing|undefined;
  /**
   * Indicates who or what performed or participated in the charged service.
   */
  public performer?: fhir.ChargeItemPerformer[]|undefined;
  /**
   * Practitioners and Devices can be associated with multiple organizations. It has to be made clear, on behalf of which Organization the services have been rendered.
   */
  public performingOrganization?: fhir.Reference|undefined;
  /**
   * The rendered Service might not be associated with a Request. This property indicates which Organization requested the services to be rendered. (In many cases, this may just be the Department associated with the Encounter.location).
   */
  public requestingOrganization?: fhir.Reference|undefined;
  /**
   * The costCenter could either be given as a reference to an Organization(Role) resource or as the identifier of the cost center determined by Reference.identifier.value and Reference.identifier.system, depending on use case requirements.
   */
  public costCenter?: fhir.Reference|undefined;
  /**
   * In many cases this may just be a value, if the underlying units are implicit in the definition of the charge item code.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  public bodysite?: fhir.CodeableConcept[]|undefined;
  /**
   * There is no reason to carry the factor in the instance of a ChargeItem unless special circumstances require a manual override. The factors are usually defined by a set of rules in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  public factorOverride?: number|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.factorOverride
   */
  public _factorOverride?: fhir.FhirElement|undefined;
  /**
   * There is no reason to carry the price in the instance of a ChargeItem unless circumstances require a manual override. The list prices or are usually defined in a back catalogue of the billing codes  (see ChargeItem.definition). Derived profiles may require a ChargeItem.overrideReason to be provided if either factor or price are manually overridden.
   */
  public priceOverride?: fhir.Money|undefined;
  /**
   * Derived Profiles may choose to add invariants requiring this field to be populated if either priceOverride or factorOverride have been filled.
   */
  public overrideReason?: string|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.overrideReason
   */
  public _overrideReason?: fhir.FhirElement|undefined;
  /**
   * The enterer is also the person considered responsible for factor/price overrides if applicable.
   */
  public enterer?: fhir.Reference|undefined;
  /**
   * The actual date when the service associated with the charge has been rendered is captured in occurrence[x].
   */
  public enteredDate?: string|undefined;
  /**
   * Extended properties for primitive element: ChargeItem.enteredDate
   */
  public _enteredDate?: fhir.FhirElement|undefined;
  /**
   * If the application of the charge item requires a reason to be given, it can be captured here. Textual reasons can be captured using reasonCode.text.
   */
  public reason?: fhir.CodeableConcept[]|undefined;
  /**
   * Indicated the rendered service that caused this charge.
   */
  public service?: fhir.Reference[]|undefined;
  /**
   * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
   */
  public productReference?: fhir.Reference|undefined;
  /**
   * Identifies the device, food, drug or other product being charged either by type code or reference to an instance.
   */
  public productCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Systems posting the ChargeItems might not always be able to determine, which accounts the Items need to be places into. It is up to the postprocessing Financial System to apply internal rules to decide based on the Encounter/EpisodeOfCare/Patient/Coverage context and the type of ChargeItem, which Account is appropriate.
   */
  public account?: fhir.Reference[]|undefined;
  /**
   * Comments made about the event by the performer, subject or other participants.
   */
  public note?: fhir.Annotation[]|undefined;
  /**
   * Further information supporting this charge.
   */
  public supportingInformation?: fhir.Reference[]|undefined;
  /**
   * Default constructor for ChargeItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<IChargeItem> = { }) {
    super(source);
    this.resourceType = 'ChargeItem';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['definitionUri']) { this.definitionUri = source.definitionUri.map((x) => (x)); }
    if (source['_definitionUri']) { this._definitionUri = source._definitionUri.map((x) => new fhir.FhirElement(x)); }
    if (source['definitionCanonical']) { this.definitionCanonical = source.definitionCanonical.map((x) => (x)); }
    if (source['_definitionCanonical']) { this._definitionCanonical = source._definitionCanonical.map((x) => new fhir.FhirElement(x)); }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['_status']) { this._status = new fhir.FhirElement(source._status!); }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code!); }
    else { this.code = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject!); }
    else { this.subject = null; }
    if (source['context']) { this.context = new fhir.Reference(source.context!); }
    if (source['occurrenceDateTime']) { this.occurrenceDateTime = source.occurrenceDateTime; }
    if (source['_occurrenceDateTime']) { this._occurrenceDateTime = new fhir.FhirElement(source._occurrenceDateTime!); }
    if (source['occurrencePeriod']) { this.occurrencePeriod = new fhir.Period(source.occurrencePeriod!); }
    if (source['occurrenceTiming']) { this.occurrenceTiming = new fhir.Timing(source.occurrenceTiming!); }
    if (source['performer']) { this.performer = source.performer.map((x) => new fhir.ChargeItemPerformer(x)); }
    if (source['performingOrganization']) { this.performingOrganization = new fhir.Reference(source.performingOrganization!); }
    if (source['requestingOrganization']) { this.requestingOrganization = new fhir.Reference(source.requestingOrganization!); }
    if (source['costCenter']) { this.costCenter = new fhir.Reference(source.costCenter!); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity!); }
    if (source['bodysite']) { this.bodysite = source.bodysite.map((x) => new fhir.CodeableConcept(x)); }
    if (source['factorOverride']) { this.factorOverride = source.factorOverride; }
    if (source['_factorOverride']) { this._factorOverride = new fhir.FhirElement(source._factorOverride!); }
    if (source['priceOverride']) { this.priceOverride = new fhir.Money(source.priceOverride!); }
    if (source['overrideReason']) { this.overrideReason = source.overrideReason; }
    if (source['_overrideReason']) { this._overrideReason = new fhir.FhirElement(source._overrideReason!); }
    if (source['enterer']) { this.enterer = new fhir.Reference(source.enterer!); }
    if (source['enteredDate']) { this.enteredDate = source.enteredDate; }
    if (source['_enteredDate']) { this._enteredDate = new fhir.FhirElement(source._enteredDate!); }
    if (source['reason']) { this.reason = source.reason.map((x) => new fhir.CodeableConcept(x)); }
    if (source['service']) { this.service = source.service.map((x) => new fhir.Reference(x)); }
    if (source['productReference']) { this.productReference = new fhir.Reference(source.productReference!); }
    if (source['productCodeableConcept']) { this.productCodeableConcept = new fhir.CodeableConcept(source.productCodeableConcept!); }
    if (source['account']) { this.account = source.account.map((x) => new fhir.Reference(x)); }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    if (source['supportingInformation']) { this.supportingInformation = source.supportingInformation.map((x) => new fhir.Reference(x)); }
  }
  /**
   * Required-bound Value Set for status
   */
  public static statusRequiredValueSet():ChargeitemStatusValueSetType {
    return ChargeitemStatusValueSet;
  }
  /**
   * Example-bound Value Set for code
   */
  public static codeExampleValueSet():ChargeitemBillingcodesValueSetType {
    return ChargeitemBillingcodesValueSet;
  }
  /**
   * Example-bound Value Set for bodysite
   */
  public static bodysiteExampleValueSet():BodySiteValueSetType {
    return BodySiteValueSet;
  }
  /**
   * Example-bound Value Set for productReference
   */
  public static productReferenceExampleValueSet():DeviceKindValueSetType {
    return DeviceKindValueSet;
  }
  /**
   * Example-bound Value Set for productCodeableConcept
   */
  public static productCodeableConceptExampleValueSet():DeviceKindValueSetType {
    return DeviceKindValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():[string,string][] {
    var results:[string,string][] = super.doModelValidation();
    if (!this["resourceType"]) { results.push(["resourceType",'Missing required element: ChargeItem.resourceType']); }
    if (this["identifier"]) { this.identifier.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_definitionUri"]) { this._definitionUri.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_definitionCanonical"]) { this._definitionCanonical.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["status"]) { results.push(["status",'Missing required element: ChargeItem.status']); }
    if (this["_status"]) { results.push(...this._status.doModelValidation()); }
    if (this["partOf"]) { this.partOf.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (!this["code"]) { results.push(["code",'Missing required element: ChargeItem.code']); }
    if (this["code"]) { results.push(...this.code.doModelValidation()); }
    if (!this["subject"]) { results.push(["subject",'Missing required element: ChargeItem.subject']); }
    if (this["subject"]) { results.push(...this.subject.doModelValidation()); }
    if (this["context"]) { results.push(...this.context.doModelValidation()); }
    if (this["_occurrenceDateTime"]) { results.push(...this._occurrenceDateTime.doModelValidation()); }
    if (this["occurrencePeriod"]) { results.push(...this.occurrencePeriod.doModelValidation()); }
    if (this["occurrenceTiming"]) { results.push(...this.occurrenceTiming.doModelValidation()); }
    if (this["performer"]) { this.performer.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["performingOrganization"]) { results.push(...this.performingOrganization.doModelValidation()); }
    if (this["requestingOrganization"]) { results.push(...this.requestingOrganization.doModelValidation()); }
    if (this["costCenter"]) { results.push(...this.costCenter.doModelValidation()); }
    if (this["quantity"]) { results.push(...this.quantity.doModelValidation()); }
    if (this["bodysite"]) { this.bodysite.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["_factorOverride"]) { results.push(...this._factorOverride.doModelValidation()); }
    if (this["priceOverride"]) { results.push(...this.priceOverride.doModelValidation()); }
    if (this["_overrideReason"]) { results.push(...this._overrideReason.doModelValidation()); }
    if (this["enterer"]) { results.push(...this.enterer.doModelValidation()); }
    if (this["_enteredDate"]) { results.push(...this._enteredDate.doModelValidation()); }
    if (this["reason"]) { this.reason.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["service"]) { this.service.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["productReference"]) { results.push(...this.productReference.doModelValidation()); }
    if (this["productCodeableConcept"]) { results.push(...this.productCodeableConcept.doModelValidation()); }
    if (this["account"]) { this.account.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["note"]) { this.note.forEach((x) => { results.push(...x.doModelValidation()); }) }
    if (this["supportingInformation"]) { this.supportingInformation.forEach((x) => { results.push(...x.doModelValidation()); }) }
    return results;
  }
}
