// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/list-order|4.0.1
import { Coding } from '../fhir.js';
/**
 * Base values for the order of the items in a list resource.
 */
export const ListOrderValueSet = {
    /**
     * alphabetic: The list is sorted alphabetically by an unspecified property of the items in the list.
     */
    SortedAlphabetically: new Coding({
        display: "Sorted Alphabetically",
        code: "alphabetic",
        system: "http://terminology.hl7.org/CodeSystem/list-order",
    }),
    /**
     * category: The list is sorted categorically by an unspecified property of the items in the list.
     */
    SortedByCategory: new Coding({
        display: "Sorted by Category",
        code: "category",
        system: "http://terminology.hl7.org/CodeSystem/list-order",
    }),
    /**
     * entry-date: The list is sorted by the date the item was added to the list. Note that the date added to the list is not explicit in the list itself.
     */
    SortedByItemDate: new Coding({
        display: "Sorted by Item Date",
        code: "entry-date",
        system: "http://terminology.hl7.org/CodeSystem/list-order",
    }),
    /**
     * event-date: The list is sorted by the data of the event. This can be used when the list has items which are dates with past or future events.
     */
    SortedByEventDate: new Coding({
        display: "Sorted by Event Date",
        code: "event-date",
        system: "http://terminology.hl7.org/CodeSystem/list-order",
    }),
    /**
     * patient: The list is sorted by patient, with items for each patient grouped together.
     */
    SortedByPatient: new Coding({
        display: "Sorted by Patient",
        code: "patient",
        system: "http://terminology.hl7.org/CodeSystem/list-order",
    }),
    /**
     * priority: The list is sorted by priority. The exact method in which priority has been determined is not specified.
     */
    SortedByPriority: new Coding({
        display: "Sorted by Priority",
        code: "priority",
        system: "http://terminology.hl7.org/CodeSystem/list-order",
    }),
    /**
     * system: The list was sorted by the system. The criteria the user used are not specified; define additional codes to specify a particular order (or use other defined codes).
     */
    SortedBySystem: new Coding({
        display: "Sorted by System",
        code: "system",
        system: "http://terminology.hl7.org/CodeSystem/list-order",
    }),
    /**
     * user: The list was sorted by a user. The criteria the user used are not specified.
     */
    SortedByUser: new Coding({
        display: "Sorted by User",
        code: "user",
        system: "http://terminology.hl7.org/CodeSystem/list-order",
    }),
};
/**
 * Base values for the order of the items in a list resource.
 */
//# sourceMappingURL=ListOrderValueSet.js.map