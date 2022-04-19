import { Coding } from '../fhir';
/**
 * Base values for the order of the items in a list resource.
 */
export declare const ListOrderValueSet: {
    /**
     * The list is sorted alphabetically by an unspecified property of the items in the list.
     */
    list_order_SortedAlphabetically: Coding;
    /**
     * The list is sorted categorically by an unspecified property of the items in the list.
     */
    list_order_SortedByCategory: Coding;
    /**
     * The list is sorted by the date the item was added to the list. Note that the date added to the list is not explicit in the list itself.
     */
    list_order_SortedByItemDate: Coding;
    /**
     * The list is sorted by the data of the event. This can be used when the list has items which are dates with past or future events.
     */
    list_order_SortedByEventDate: Coding;
    /**
     * The list is sorted by patient, with items for each patient grouped together.
     */
    list_order_SortedByPatient: Coding;
    /**
     * The list is sorted by priority. The exact method in which priority has been determined is not specified.
     */
    list_order_SortedByPriority: Coding;
    /**
     * The list was sorted by the system. The criteria the user used are not specified; define additional codes to specify a particular order (or use other defined codes).
     */
    list_order_SortedBySystem: Coding;
    /**
     * The list was sorted by a user. The criteria the user used are not specified.
     */
    list_order_SortedByUser: Coding;
};
//# sourceMappingURL=ListOrderValueSet.d.ts.map