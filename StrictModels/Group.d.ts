import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * All the identified characteristics must be true for an entity to a member of the group.
 */
export declare class GroupCharacteristic extends fhirModels.BackboneElement implements fhirInterfaces.IGroupCharacteristic {
    /**
     * A code that identifies the kind of trait being asserted.
     */
    code: fhirModels.CodeableConcept;
    /**
     * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
     */
    exclude: boolean;
    _exclude?: fhirModels.Element | undefined;
    /**
     * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
     */
    period?: fhirModels.Period | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhirModels.Quantity | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueRange?: fhirModels.Range | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueReference?: fhirModels.Reference | undefined;
    /**
     * Default constructor for GroupCharacteristic from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IGroupCharacteristic);
}
/**
 * Identifies the resource instances that are members of the group.
 */
export declare class GroupMember extends fhirModels.BackboneElement implements fhirInterfaces.IGroupMember {
    /**
     * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
     */
    entity: fhirModels.Reference;
    /**
     * A flag to indicate that the member is no longer in the group, but previously may have been a member.
     */
    inactive?: boolean | undefined;
    _inactive?: fhirModels.Element | undefined;
    /**
     * The period that the member was in the group, if known.
     */
    period?: fhirModels.Period | undefined;
    /**
     * Default constructor for GroupMember from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IGroupMember);
}
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export declare class Group extends fhirModels.DomainResource implements fhirInterfaces.IGroup {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Group";
    /**
     * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
     */
    active?: boolean | undefined;
    _active?: fhirModels.Element | undefined;
    /**
     * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
     */
    actual: boolean;
    _actual?: fhirModels.Element | undefined;
    /**
     * All the identified characteristics must be true for an entity to a member of the group.
     */
    characteristic?: fhirModels.GroupCharacteristic[] | undefined;
    /**
     * This would generally be omitted for Person resources.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * A unique business identifier for this group.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
     */
    managingEntity?: fhirModels.Reference | undefined;
    /**
     * Identifies the resource instances that are members of the group.
     */
    member?: fhirModels.GroupMember[] | undefined;
    /**
     * A label assigned to the group for human identification and communication.
     */
    name?: string | undefined;
    _name?: fhirModels.Element | undefined;
    /**
     * Note that the quantity may be less than the number of members if some of the members are not active.
     */
    quantity?: number | undefined;
    _quantity?: fhirModels.Element | undefined;
    /**
     * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
     */
    type: GroupTypeEnum;
    _type?: fhirModels.Element | undefined;
    /**
     * Default constructor for Group from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IGroup);
}
/**
 * Code Values for the Group.type field
 */
export declare enum GroupTypeEnum {
    PERSON = "person",
    ANIMAL = "animal",
    PRACTITIONER = "practitioner",
    DEVICE = "device",
    MEDICATION = "medication",
    SUBSTANCE = "substance"
}
//# sourceMappingURL=Group.d.ts.map