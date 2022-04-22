import * as fhir from '../fhir.js';
import { ListItemFlagValueSetType } from '../fhirValueSets/ListItemFlagValueSet.js';
import { ListStatusValueSetType, ListStatusValueSetEnum } from '../fhirValueSets/ListStatusValueSet.js';
import { ListModeValueSetType, ListModeValueSetEnum } from '../fhirValueSets/ListModeValueSet.js';
import { ListExampleCodesValueSetType } from '../fhirValueSets/ListExampleCodesValueSet.js';
import { ListOrderValueSetType } from '../fhirValueSets/ListOrderValueSet.js';
import { ListEmptyReasonValueSetType } from '../fhirValueSets/ListEmptyReasonValueSet.js';
/**
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
export declare type IListEntry = fhir.IBackboneElement & {
    /**
     * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
     */
    flag?: fhir.ICodeableConcept | undefined;
    /**
     * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
     */
    deleted?: boolean | undefined;
    /**
     * Extended properties for primitive element: List.entry.deleted
     */
    _deleted?: fhir.IFhirElement | undefined;
    /**
     * When this item was added to the list.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: List.entry.date
     */
    _date?: fhir.IFhirElement | undefined;
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
     * Identifier for the List assigned for business purposes outside the context of FHIR.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ListStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: List.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode: ListModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: List.mode
     */
    _mode?: fhir.IFhirElement | undefined;
    /**
     * A label for the list assigned by the author.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: List.title
     */
    _title?: fhir.IFhirElement | undefined;
    /**
     * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Some purely arbitrary lists do not have a common subject, so this is optional.
     */
    subject?: fhir.IReference | undefined;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: List.date
     */
    _date?: fhir.IFhirElement | undefined;
    /**
     * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
     */
    source?: fhir.IReference | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.ICodeableConcept | undefined;
    /**
     * Comments that apply to the overall list.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry?: fhir.IListEntry[] | undefined;
    /**
     * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.ICodeableConcept | undefined;
};
/**
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
export declare class ListEntry extends fhir.BackboneElement implements IListEntry {
    /**
     * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
     */
    flag?: fhir.CodeableConcept | undefined;
    /**
     * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
     */
    deleted?: boolean | undefined;
    /**
     * Extended properties for primitive element: List.entry.deleted
     */
    _deleted?: fhir.FhirElement | undefined;
    /**
     * When this item was added to the list.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: List.entry.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * A reference to the actual resource from which data was derived.
     */
    item: fhir.Reference | null;
    /**
     * Default constructor for ListEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IListEntry>);
    /**
     * Example-bound Value Set for flag
     */
    static flagExampleValueSet(): ListItemFlagValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A list is a curated collection of resources.
 */
export declare class List extends fhir.DomainResource implements IList {
    /**
     * Resource Type Name
     */
    resourceType: "List";
    /**
     * Identifier for the List assigned for business purposes outside the context of FHIR.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ListStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: List.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode: ListModeValueSetEnum | null;
    /**
     * Extended properties for primitive element: List.mode
     */
    _mode?: fhir.FhirElement | undefined;
    /**
     * A label for the list assigned by the author.
     */
    title?: string | undefined;
    /**
     * Extended properties for primitive element: List.title
     */
    _title?: fhir.FhirElement | undefined;
    /**
     * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Some purely arbitrary lists do not have a common subject, so this is optional.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: List.date
     */
    _date?: fhir.FhirElement | undefined;
    /**
     * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
     */
    source?: fhir.Reference | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConcept | undefined;
    /**
     * Comments that apply to the overall list.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry?: fhir.ListEntry[] | undefined;
    /**
     * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for List - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IList>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): ListStatusValueSetType;
    /**
     * Required-bound Value Set for mode
     */
    static modeRequiredValueSet(): ListModeValueSetType;
    /**
     * Example-bound Value Set for code
     */
    static codeExampleValueSet(): ListExampleCodesValueSetType;
    /**
     * Preferred-bound Value Set for orderedBy
     */
    static orderedByPreferredValueSet(): ListOrderValueSetType;
    /**
     * Preferred-bound Value Set for emptyReason
     */
    static emptyReasonPreferredValueSet(): ListEmptyReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=List.d.ts.map