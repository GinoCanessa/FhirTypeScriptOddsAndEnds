/**
 * Distinguishes groups from questions and display text and indicates data type for questions.
 */
export var ItemType = {
    /**
     * Question with binary content such as an image, PDF, etc. as an answer (valueAttachment).
     */
    item_type_Attachment: {
        code: "attachment",
        display: "Attachment",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with a yes/no answer (valueBoolean).
     */
    item_type_Boolean: {
        code: "boolean",
        display: "Boolean",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with a Coding drawn from a list of possible answers (specified in either the answerOption property, or via the valueset referenced in the answerValueSet property) as an answer (valueCoding).
     */
    item_type_Choice: {
        code: "choice",
        display: "Choice",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with a date answer (valueDate).
     */
    item_type_Date: {
        code: "date",
        display: "Date",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with a date and time answer (valueDateTime).
     */
    item_type_DateTime: {
        code: "dateTime",
        display: "Date Time",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with is a real number answer (valueDecimal).
     */
    item_type_Decimal: {
        code: "decimal",
        display: "Decimal",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Text for display that will not capture an answer or have child items.
     */
    item_type_Display: {
        code: "display",
        display: "Display",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * An item with no direct answer but should have at least one child item.
     */
    item_type_Group: {
        code: "group",
        display: "Group",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with an integer answer (valueInteger).
     */
    item_type_Integer: {
        code: "integer",
        display: "Integer",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Answer is a Coding drawn from a list of possible answers (as with the choice type) or a free-text entry in a string (valueCoding or valueString).
     */
    item_type_OpenChoice: {
        code: "open-choice",
        display: "Open Choice",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.) as an answer. (valueQuantity) There is an extension 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit' that can be used to define what unit should be captured (or the unit that has a ucum conversion from the provided unit).
     */
    item_type_Quantity: {
        code: "quantity",
        display: "Quantity",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * An item that defines a specific answer to be captured, and which may have child items. (the answer provided in the QuestionnaireResponse should be of the defined datatype).
     */
    item_type_Question: {
        code: "question",
        display: "Question",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with a reference to another resource (practitioner, organization, etc.) as an answer (valueReference).
     */
    item_type_Reference: {
        code: "reference",
        display: "Reference",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with a short (few words to short sentence) free-text entry answer (valueString).
     */
    item_type_String: {
        code: "string",
        display: "String",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with a long (potentially multi-paragraph) free-text entry answer (valueString).
     */
    item_type_Text: {
        code: "text",
        display: "Text",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with a time (hour:minute:second) answer independent of date. (valueTime).
     */
    item_type_Time: {
        code: "time",
        display: "Time",
        system: "http://hl7.org/fhir/item-type"
    },
    /**
     * Question with a URL (website, FTP site, etc.) answer (valueUri).
     */
    item_type_Url: {
        code: "url",
        display: "Url",
        system: "http://hl7.org/fhir/item-type"
    }
};
