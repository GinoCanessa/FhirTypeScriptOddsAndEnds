import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
export declare class ListEntry extends fhirModels.BackboneElement implements fhirInterfaces.IListEntry {
    /**
     * When this item was added to the list.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
     */
    deleted?: boolean | undefined;
    _deleted?: fhirModels.Element | undefined;
    /**
     * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
     */
    flag?: fhirModels.CodeableConcept | undefined;
    /**
     * A reference to the actual resource from which data was derived.
     */
    item: fhirModels.Reference;
    /**
     * Default constructor for ListEntry from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IListEntry);
}
/**
 * A list is a curated collection of resources.
 */
export declare class List extends fhirModels.DomainResource implements fhirInterfaces.IList {
    /**
     * Resource Type Name
     */
    readonly resourceType = "List";
    /**
     * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.
     */
    date?: string | undefined;
    _date?: fhirModels.Element | undefined;
    /**
     * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhirModels.CodeableConcept | undefined;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry?: fhirModels.ListEntry[] | undefined;
    /**
     * Identifier for the List assigned for business purposes outside the context of FHIR.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode: ListModeEnum;
    _mode?: fhirModels.Element | undefined;
    /**
     * Comments that apply to the overall list.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhirModels.CodeableConcept | undefined;
    /**
     * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
     */
    source?: fhirModels.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ListStatusEnum;
    _status?: fhirModels.Element | undefined;
    /**
     * Some purely arbitrary lists do not have a common subject, so this is optional.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * A label for the list assigned by the author.
     */
    title?: string | undefined;
    _title?: fhirModels.Element | undefined;
    /**
     * Default constructor for List from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IList);
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