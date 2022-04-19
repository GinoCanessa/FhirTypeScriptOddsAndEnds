import * as fhir from '../fhir';
/**
 * All the identified characteristics must be true for an entity to a member of the group.
 */
export declare type IGroupCharacteristic = fhir.IBackboneElement & {
    /**
     * A code that identifies the kind of trait being asserted.
     */
    code: fhir.ICodeableConcept | null;
    /**
     * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
     */
    exclude: boolean | null;
    _exclude?: fhir.IFhirElement | undefined;
    /**
     * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
     */
    period?: fhir.IPeriod | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.IFhirElement | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueRange?: fhir.IRange | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueReference?: fhir.IReference | undefined;
};
/**
 * Identifies the resource instances that are members of the group.
 */
export declare type IGroupMember = fhir.IBackboneElement & {
    /**
     * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
     */
    entity: fhir.IReference | null;
    /**
     * A flag to indicate that the member is no longer in the group, but previously may have been a member.
     */
    inactive?: boolean | undefined;
    _inactive?: fhir.IFhirElement | undefined;
    /**
     * The period that the member was in the group, if known.
     */
    period?: fhir.IPeriod | undefined;
};
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export declare type IGroup = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Group";
    /**
     * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
     */
    active?: boolean | undefined;
    _active?: fhir.IFhirElement | undefined;
    /**
     * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
     */
    actual: boolean | null;
    _actual?: fhir.IFhirElement | undefined;
    /**
     * All the identified characteristics must be true for an entity to a member of the group.
     */
    characteristic?: fhir.IGroupCharacteristic[] | undefined;
    /**
     * This would generally be omitted for Person resources.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * A unique business identifier for this group.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
     */
    managingEntity?: fhir.IReference | undefined;
    /**
     * Identifies the resource instances that are members of the group.
     */
    member?: fhir.IGroupMember[] | undefined;
    /**
     * A label assigned to the group for human identification and communication.
     */
    name?: string | undefined;
    _name?: fhir.IFhirElement | undefined;
    /**
     * Note that the quantity may be less than the number of members if some of the members are not active.
     */
    quantity?: number | undefined;
    _quantity?: fhir.IFhirElement | undefined;
    /**
     * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
     */
    type: GroupTypeEnum | null;
    _type?: fhir.IFhirElement | undefined;
};
/**
 * All the identified characteristics must be true for an entity to a member of the group.
 */
export declare class GroupCharacteristic extends fhir.BackboneElement implements fhir.IGroupCharacteristic {
    /**
     * A code that identifies the kind of trait being asserted.
     */
    code: fhir.CodeableConcept | null;
    /**
     * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
     */
    exclude: boolean | null;
    _exclude?: fhir.FhirElement | undefined;
    /**
     * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
     */
    period?: fhir.Period | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * Default constructor for GroupCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IGroupCharacteristic>);
    /**
     * Check if the current GroupCharacteristic contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a GroupCharacteristic from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IGroupCharacteristic): GroupCharacteristic;
}
/**
 * Identifies the resource instances that are members of the group.
 */
export declare class GroupMember extends fhir.BackboneElement implements fhir.IGroupMember {
    /**
     * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
     */
    entity: fhir.Reference | null;
    /**
     * A flag to indicate that the member is no longer in the group, but previously may have been a member.
     */
    inactive?: boolean | undefined;
    _inactive?: fhir.FhirElement | undefined;
    /**
     * The period that the member was in the group, if known.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for GroupMember - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IGroupMember>);
    /**
     * Check if the current GroupMember contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a GroupMember from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IGroupMember): GroupMember;
}
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export declare class Group extends fhir.DomainResource implements fhir.IGroup {
    /**
     * Resource Type Name
     */
    resourceType: "Group";
    /**
     * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
     */
    active?: boolean | undefined;
    _active?: fhir.FhirElement | undefined;
    /**
     * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
     */
    actual: boolean | null;
    _actual?: fhir.FhirElement | undefined;
    /**
     * All the identified characteristics must be true for an entity to a member of the group.
     */
    characteristic?: fhir.GroupCharacteristic[] | undefined;
    /**
     * This would generally be omitted for Person resources.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A unique business identifier for this group.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
     */
    managingEntity?: fhir.Reference | undefined;
    /**
     * Identifies the resource instances that are members of the group.
     */
    member?: fhir.GroupMember[] | undefined;
    /**
     * A label assigned to the group for human identification and communication.
     */
    name?: string | undefined;
    _name?: fhir.FhirElement | undefined;
    /**
     * Note that the quantity may be less than the number of members if some of the members are not active.
     */
    quantity?: number | undefined;
    _quantity?: fhir.FhirElement | undefined;
    /**
     * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
     */
    type: GroupTypeEnum | null;
    _type?: fhir.FhirElement | undefined;
    /**
     * Default constructor for Group - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IGroup>);
    /**
     * Check if the current Group contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a Group from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IGroup): Group;
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