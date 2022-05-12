// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/list-order|4.0.1
/**
 * Base values for the order of the items in a list resource.
 */
export var ListOrderValueSetEnum;
(function (ListOrderValueSetEnum) {
    /**
     * alphabetic: The list is sorted alphabetically by an unspecified property of the items in the list.
     */
    ListOrderValueSetEnum["SortedAlphabetically"] = "alphabetic";
    /**
     * category: The list is sorted categorically by an unspecified property of the items in the list.
     */
    ListOrderValueSetEnum["SortedByCategory"] = "category";
    /**
     * entry-date: The list is sorted by the date the item was added to the list. Note that the date added to the list is not explicit in the list itself.
     */
    ListOrderValueSetEnum["SortedByItemDate"] = "entry-date";
    /**
     * event-date: The list is sorted by the data of the event. This can be used when the list has items which are dates with past or future events.
     */
    ListOrderValueSetEnum["SortedByEventDate"] = "event-date";
    /**
     * patient: The list is sorted by patient, with items for each patient grouped together.
     */
    ListOrderValueSetEnum["SortedByPatient"] = "patient";
    /**
     * priority: The list is sorted by priority. The exact method in which priority has been determined is not specified.
     */
    ListOrderValueSetEnum["SortedByPriority"] = "priority";
    /**
     * system: The list was sorted by the system. The criteria the user used are not specified; define additional codes to specify a particular order (or use other defined codes).
     */
    ListOrderValueSetEnum["SortedBySystem"] = "system";
    /**
     * user: The list was sorted by a user. The criteria the user used are not specified.
     */
    ListOrderValueSetEnum["SortedByUser"] = "user";
})(ListOrderValueSetEnum || (ListOrderValueSetEnum = {}));
//# sourceMappingURL=ListOrderValueSetEnum.js.map