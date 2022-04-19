import * as fhir from '../fhir';
/**
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
export declare type IListEntry = fhir.IBackboneElement & {
    /**
     * When this item was added to the list.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
     */
    deleted?: boolean | undefined;
    _deleted?: fhir.IFhirElement | undefined;
    /**
     * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
     */
    flag?: fhir.ICodeableConcept | undefined;
    /**
     * A reference to the actual resource from which data was derived.
     */
    item: fhir.IReference | null;
};
/**
 * A list is a curated collection of resources.
 */
export declare type IList = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "List";
    /**
     * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.
     */
    date?: string | undefined;
    _date?: fhir.IFhirElement | undefined;
    /**
     * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.ICodeableConcept | undefined;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry?: fhir.IListEntry[] | undefined;
    /**
     * Identifier for the List assigned for business purposes outside the context of FHIR.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode: ListModeEnum | null;
    _mode?: fhir.IFhirElement | undefined;
    /**
     * Comments that apply to the overall list.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.ICodeableConcept | undefined;
    /**
     * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
     */
    source?: fhir.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ListStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Some purely arbitrary lists do not have a common subject, so this is optional.
     */
    subject?: fhir.IReference | undefined;
    /**
     * A label for the list assigned by the author.
     */
    title?: string | undefined;
    _title?: fhir.IFhirElement | undefined;
};
/**
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
export declare class ListEntry extends fhir.BackboneElement implements fhir.IListEntry {
    /**
     * When this item was added to the list.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
     */
    deleted?: boolean | undefined;
    _deleted?: fhir.FhirElement | undefined;
    /**
     * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
     */
    flag?: fhir.CodeableConcept | undefined;
    /**
     * A reference to the actual resource from which data was derived.
     */
    item: fhir.Reference | null;
    /**
     * Default constructor for ListEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IListEntry>);
    /**
     * Check if the current ListEntry contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ListEntry from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IListEntry): ListEntry;
}
/**
 * A list is a curated collection of resources.
 */
export declare class List extends fhir.DomainResource implements fhir.IList {
    /**
     * Resource Type Name
     */
    resourceType: "List";
    /**
     * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.
     */
    date?: string | undefined;
    _date?: fhir.FhirElement | undefined;
    /**
     * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConcept | undefined;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry?: fhir.ListEntry[] | undefined;
    /**
     * Identifier for the List assigned for business purposes outside the context of FHIR.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode: ListModeEnum | null;
    _mode?: fhir.FhirElement | undefined;
    /**
     * Comments that apply to the overall list.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConcept | undefined;
    /**
     * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
     */
    source?: fhir.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ListStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Some purely arbitrary lists do not have a common subject, so this is optional.
     */
    subject?: fhir.Reference | undefined;
    /**
     * A label for the list assigned by the author.
     */
    title?: string | undefined;
    _title?: fhir.FhirElement | undefined;
    /**
     * Default constructor for List - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IList>);
    /**
     * Check if the current List contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a List from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IList): List;
}
/**
 * Code Values for the List.mode field
 */
export declare enum ListModeEnum {
    WORKING = "working",
    SNAPSHOT = "snapshot",
    CHANGES = "changes"
}
/**
 * Code Values for the List.status field
 */
export declare enum ListStatusEnum {
    CURRENT = "current",
    RETIRED = "retired",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=List.d.ts.map