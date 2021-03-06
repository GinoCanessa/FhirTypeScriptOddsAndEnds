// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Group

import * as fhir from '../fhir.js';

import { GroupTypeValueSet, GroupTypeValueSetType,} from '../fhirValueSets/GroupTypeValueSet.js';
import { GroupTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueTypeValueSetEnum } from '../valueSetEnums.js';
import { IssueSeverityValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the GroupCharacteristic type.
 */
export interface GroupCharacteristicArgs extends fhir.BackboneElementArgs {
  /**
   * A code that identifies the kind of trait being asserted.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  value?: fhir.CodeableConcept|fhir.FhirBoolean|fhir.Quantity|fhir.Range|fhir.Reference|undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueRange?: fhir.RangeArgs|undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueReference?: fhir.ReferenceArgs|undefined;
  /**
   * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
   */
  exclude: fhir.FhirBoolean|boolean|undefined;
  /**
   * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * All the identified characteristics must be true for an entity to a member of the group.
 */
export class GroupCharacteristic extends fhir.BackboneElement {
  readonly __dataType:string = 'GroupCharacteristic';
  /**
   * A code that identifies the kind of trait being asserted.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  public value: (fhir.CodeableConcept|fhir.FhirBoolean|fhir.Quantity|fhir.Range|fhir.Reference)|null;
  readonly __valueIsChoice:true = true;
  /**
   * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
   */
  public exclude: fhir.FhirBoolean|null;
  /**
   * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for GroupCharacteristic - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GroupCharacteristicArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['value']) { this.value = source.value; }
    else if (source['valueCodeableConcept']) { this.value = new fhir.CodeableConcept(source.valueCodeableConcept); }
    else if (source['valueBoolean']) { this.value = new fhir.FhirBoolean({value: source.valueBoolean}); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity); }
    else if (source['valueRange']) { this.value = new fhir.Range(source.valueRange); }
    else if (source['valueReference']) { this.value = new fhir.Reference(source.valueReference); }
    else { this.value = null; }
    if (source['exclude']) { this.exclude = new fhir.FhirBoolean({value: source.exclude}); }
    else { this.exclude = null; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['code']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property code:fhir.CodeableConcept fhir: Group.characteristic.code:CodeableConcept", }));
    }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (!this['value']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property value: fhir: Group.characteristic.value[x]:", }));
    }
    if (!this['exclude']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property exclude:fhir.FhirBoolean fhir: Group.characteristic.exclude:boolean", }));
    }
    if (this["exclude"]) { outcome.issue!.push(...this.exclude.doModelValidation().issue!); }
    if (this["period"]) { outcome.issue!.push(...this.period.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the GroupMember type.
 */
export interface GroupMemberArgs extends fhir.BackboneElementArgs {
  /**
   * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
   */
  entity: fhir.ReferenceArgs|null;
  /**
   * The period that the member was in the group, if known.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * A flag to indicate that the member is no longer in the group, but previously may have been a member.
   */
  inactive?: fhir.FhirBoolean|boolean|undefined;
}

/**
 * Identifies the resource instances that are members of the group.
 */
export class GroupMember extends fhir.BackboneElement {
  readonly __dataType:string = 'GroupMember';
  /**
   * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
   */
  public entity: fhir.Reference|null;
  /**
   * The period that the member was in the group, if known.
   */
  public period?: fhir.Period|undefined;
  /**
   * A flag to indicate that the member is no longer in the group, but previously may have been a member.
   */
  public inactive?: fhir.FhirBoolean|undefined;
  /**
   * Default constructor for GroupMember - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GroupMemberArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['entity']) { this.entity = new fhir.Reference(source.entity); }
    else { this.entity = null; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['inactive']) { this.inactive = new fhir.FhirBoolean({value: source.inactive}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['entity']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property entity:fhir.Reference fhir: Group.member.entity:Reference", }));
    }
    if (this["entity"]) { outcome.issue!.push(...this.entity.doModelValidation().issue!); }
    if (this["period"]) { outcome.issue!.push(...this.period.doModelValidation().issue!); }
    if (this["inactive"]) { outcome.issue!.push(...this.inactive.doModelValidation().issue!); }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
/**
 * Valid arguments for the Group type.
 */
export interface GroupArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Group"|undefined;
  /**
   * A unique business identifier for this group.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
   */
  type: GroupTypeValueSetEnum|null;
  /**
   * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
   */
  actual: fhir.FhirBoolean|boolean|undefined;
  /**
   * This would generally be omitted for Person resources.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * A label assigned to the group for human identification and communication.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Note that the quantity may be less than the number of members if some of the members are not active.
   */
  quantity?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
   */
  managingEntity?: fhir.ReferenceArgs|undefined;
  /**
   * All the identified characteristics must be true for an entity to a member of the group.
   */
  characteristic?: fhir.GroupCharacteristicArgs[]|undefined;
  /**
   * Identifies the resource instances that are members of the group.
   */
  member?: fhir.GroupMemberArgs[]|undefined;
}

/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export class Group extends fhir.DomainResource {
  readonly __dataType:string = 'Group';
  /**
   * Resource Type Name
   */
  public resourceType: "Group";
  /**
   * A unique business identifier for this group.
   */
  public identifier?: fhir.Identifier[]|undefined = [];
  /**
   * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
   */
  public type: GroupTypeValueSetEnum|null;
  /**
   * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
   */
  public actual: fhir.FhirBoolean|null;
  /**
   * This would generally be omitted for Person resources.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * A label assigned to the group for human identification and communication.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Note that the quantity may be less than the number of members if some of the members are not active.
   */
  public quantity?: fhir.FhirUnsignedInt|undefined;
  /**
   * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
   */
  public managingEntity?: fhir.Reference|undefined;
  /**
   * All the identified characteristics must be true for an entity to a member of the group.
   */
  public characteristic?: fhir.GroupCharacteristic[]|undefined = [];
  /**
   * Identifies the resource instances that are members of the group.
   */
  public member?: fhir.GroupMember[]|undefined = [];
  /**
   * Default constructor for Group - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GroupArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Group';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    if (source['active']) { this.active = new fhir.FhirBoolean({value: source.active}); }
    if (source['type']) { this.type = source.type; }
    else { this.type = null; }
    if (source['actual']) { this.actual = new fhir.FhirBoolean({value: source.actual}); }
    else { this.actual = null; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['quantity']) { this.quantity = new fhir.FhirUnsignedInt({value: source.quantity}); }
    if (source['managingEntity']) { this.managingEntity = new fhir.Reference(source.managingEntity); }
    if (source['characteristic']) { this.characteristic = source.characteristic.map((x) => new fhir.GroupCharacteristic(x)); }
    if (source['member']) { this.member = source.member.map((x) => new fhir.GroupMember(x)); }
  }
  /**
   * Required-bound Value Set for type
   */
  public static typeRequiredValueSet():GroupTypeValueSetType {
    return GroupTypeValueSet;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property resourceType:'Group' fhir: Group.resourceType:'Group'", }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["active"]) { outcome.issue!.push(...this.active.doModelValidation().issue!); }
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property type:GroupTypeValueSetEnum fhir: Group.type:code", }));
    }
    if (!this['actual']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityValueSetEnum.Error, code: IssueTypeValueSetEnum.RequiredElementMissing,  diagnostics: "Missing required property actual:fhir.FhirBoolean fhir: Group.actual:boolean", }));
    }
    if (this["actual"]) { outcome.issue!.push(...this.actual.doModelValidation().issue!); }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["name"]) { outcome.issue!.push(...this.name.doModelValidation().issue!); }
    if (this["quantity"]) { outcome.issue!.push(...this.quantity.doModelValidation().issue!); }
    if (this["managingEntity"]) { outcome.issue!.push(...this.managingEntity.doModelValidation().issue!); }
    if (this["characteristic"]) { this.characteristic.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["member"]) { this.member.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
  /**
   * Function to strip invalid element values for serialization.
   */
  public toJSON() {
    return fhir.fhirToJson(this);
  }
}
