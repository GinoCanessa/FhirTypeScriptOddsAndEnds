import * as fhirInterfaces from '../optionalinterfaces';
/**
 * All the identified characteristics must be true for an entity to a member of the group.
 */
export interface IGroupCharacteristic extends fhirInterfaces.IBackboneElement {
    /**
     * A code that identifies the kind of trait being asserted.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
     */
    exclude?: boolean | undefined;
    _exclude?: fhirInterfaces.IElement | undefined;
    /**
     * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
     */
    period?: fhirInterfaces.IPeriod | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirInterfaces.IElement | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueRange?: fhirInterfaces.IRange | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueReference?: fhirInterfaces.IReference | undefined;
}
/**
 * Identifies the resource instances that are members of the group.
 */
export interface IGroupMember extends fhirInterfaces.IBackboneElement {
    /**
     * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
     */
    entity?: fhirInterfaces.IReference | undefined;
    /**
     * A flag to indicate that the member is no longer in the group, but previously may have been a member.
     */
    inactive?: boolean | undefined;
    _inactive?: fhirInterfaces.IElement | undefined;
    /**
     * The period that the member was in the group, if known.
     */
    period?: fhirInterfaces.IPeriod | undefined;
}
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export interface IGroup extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Group";
    /**
     * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
     */
    active?: boolean | undefined;
    _active?: fhirInterfaces.IElement | undefined;
    /**
     * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
     */
    actual?: boolean | undefined;
    _actual?: fhirInterfaces.IElement | undefined;
    /**
     * All the identified characteristics must be true for an entity to a member of the group.
     */
    characteristic?: fhirInterfaces.IGroupCharacteristic[] | undefined;
    /**
     * This would generally be omitted for Person resources.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A unique business identifier for this group.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
     */
    managingEntity?: fhirInterfaces.IReference | undefined;
    /**
     * Identifies the resource instances that are members of the group.
     */
    member?: fhirInterfaces.IGroupMember[] | undefined;
    /**
     * A label assigned to the group for human identification and communication.
     */
    name?: string | undefined;
    _name?: fhirInterfaces.IElement | undefined;
    /**
     * Note that the quantity may be less than the number of members if some of the members are not active.
     */
    quantity?: number | undefined;
    _quantity?: fhirInterfaces.IElement | undefined;
    /**
     * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
     */
    type?: GroupTypeEnum | undefined;
    _type?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=IGroup.d.ts.map