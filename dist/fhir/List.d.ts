import * as fhir from '../fhir.js';
import { ListItemFlagValueSetType } from '../fhirValueSets/ListItemFlagValueSet.js';
import { ListStatusValueSetType } from '../fhirValueSets/ListStatusValueSet.js';
import { ListStatusValueSetEnum } from '../valueSetEnums.js';
import { ListModeValueSetType } from '../fhirValueSets/ListModeValueSet.js';
import { ListModeValueSetEnum } from '../valueSetEnums.js';
import { ListExampleCodesValueSetType } from '../fhirValueSets/ListExampleCodesValueSet.js';
import { ListOrderValueSetType } from '../fhirValueSets/ListOrderValueSet.js';
import { ListEmptyReasonValueSetType } from '../fhirValueSets/ListEmptyReasonValueSet.js';
/**
 * Valid arguments for the ListEntry type.
 */
export interface ListEntryArgs extends fhir.BackboneElementArgs {
    /**
     * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
     */
    flag?: fhir.CodeableConceptArgs | undefined;
    /**
     * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
     */
    deleted?: fhir.FhirBoolean | boolean | undefined;
    /**
     * When this item was added to the list.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * A reference to the actual resource from which data was derived.
     */
    item: fhir.ReferenceArgs | null;
}
/**
 * If there are no entries in the list, an emptyReason SHOULD be provided.
 */
export declare class ListEntry extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * The flag can only be understood in the context of the List.code. If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Deleted can only be used if the List.mode is "changes".
     */
    flag?: fhir.CodeableConcept | undefined;
    /**
     * If the flag means that the entry has actually been deleted from the list, the deleted element SHALL be true. Both flag and deleted can only be used if the List.mode is "changes". A deleted entry should be displayed in narrative as deleted.  This element is labeled as a modifier because it indicates that an item is (to be) no longer in the list.
     */
    deleted?: fhir.FhirBoolean | undefined;
    /**
     * When this item was added to the list.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * A reference to the actual resource from which data was derived.
     */
    item: fhir.Reference | null;
    /**
     * Default constructor for ListEntry - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ListEntryArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Example-bound Value Set for flag
     */
    static flagExampleValueSet(): ListItemFlagValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the List type.
 */
export interface ListArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "List" | undefined;
    /**
     * Identifier for the List assigned for business purposes outside the context of FHIR.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: ListStatusValueSetEnum | null;
    /**
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode: ListModeValueSetEnum | null;
    /**
     * A label for the list assigned by the author.
     */
    title?: fhir.FhirString | string | undefined;
    /**
     * If there is no code, the purpose of the list is implied where it is used, such as in a document section using Document.section.code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Some purely arbitrary lists do not have a common subject, so this is optional.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The encounter that is the context in which this list was created.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The actual important date is the date of currency of the resources that were summarized, but it is usually assumed that these are current when the preparation occurs.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * The primary source is the entity that made the decisions what items are in the list. This may be software or user.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * Applications SHOULD render ordered lists in the order provided, but MAY allow users to re-order based on their own preferences as well. If there is no order specified, the order is unknown, though there may still be some order.
     */
    orderedBy?: fhir.CodeableConceptArgs | undefined;
    /**
     * Comments that apply to the overall list.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * If there are no entries in the list, an emptyReason SHOULD be provided.
     */
    entry?: fhir.ListEntryArgs[] | undefined;
    /**
     * The various reasons for an empty list make a significant interpretation to its interpretation. Note that this code is for use when the entire list has been suppressed, and not for when individual items are omitted - implementers may consider using a text note or a flag on an entry in these cases.
     */
    emptyReason?: fhir.CodeableConceptArgs | undefined;
}
/**
 * A list is a curated collection of resources.
 */
export declare class List extends fhir.DomainResource {
    readonly __dataType: string;
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
     * This element is labeled as a modifier because a change list must not be misunderstood as a complete list.
     */
    mode: ListModeValueSetEnum | null;
    /**
     * A label for the list assigned by the author.
     */
    title?: fhir.FhirString | undefined;
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
    date?: fhir.FhirDateTime | undefined;
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
    constructor(source?: Partial<ListArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=List.d.ts.map