/**
 * Base values for the order of the items in a list resource.
 */
export var ListOrder = {
    /**
     * The list is sorted alphabetically by an unspecified property of the items in the list.
     */
    list_order_SortedAlphabetically: {
        code: "alphabetic",
        display: "Sorted Alphabetically",
        system: "http://terminology.hl7.org/CodeSystem/list-order"
    },
    /**
     * The list is sorted categorically by an unspecified property of the items in the list.
     */
    list_order_SortedByCategory: {
        code: "category",
        display: "Sorted by Category",
        system: "http://terminology.hl7.org/CodeSystem/list-order"
    },
    /**
     * The list is sorted by the date the item was added to the list. Note that the date added to the list is not explicit in the list itself.
     */
    list_order_SortedByItemDate: {
        code: "entry-date",
        display: "Sorted by Item Date",
        system: "http://terminology.hl7.org/CodeSystem/list-order"
    },
    /**
     * The list is sorted by the data of the event. This can be used when the list has items which are dates with past or future events.
     */
    list_order_SortedByEventDate: {
        code: "event-date",
        display: "Sorted by Event Date",
        system: "http://terminology.hl7.org/CodeSystem/list-order"
    },
    /**
     * The list is sorted by patient, with items for each patient grouped together.
     */
    list_order_SortedByPatient: {
        code: "patient",
        display: "Sorted by Patient",
        system: "http://terminology.hl7.org/CodeSystem/list-order"
    },
    /**
     * The list is sorted by priority. The exact method in which priority has been determined is not specified.
     */
    list_order_SortedByPriority: {
        code: "priority",
        display: "Sorted by Priority",
        system: "http://terminology.hl7.org/CodeSystem/list-order"
    },
    /**
     * The list was sorted by the system. The criteria the user used are not specified; define additional codes to specify a particular order (or use other defined codes).
     */
    list_order_SortedBySystem: {
        code: "system",
        display: "Sorted by System",
        system: "http://terminology.hl7.org/CodeSystem/list-order"
    },
    /**
     * The list was sorted by a user. The criteria the user used are not specified.
     */
    list_order_SortedByUser: {
        code: "user",
        display: "Sorted by User",
        system: "http://terminology.hl7.org/CodeSystem/list-order"
    }
};