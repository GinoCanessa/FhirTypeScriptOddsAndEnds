// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet Enum: http://hl7.org/fhir/ValueSet/item-type|4.0.1
/**
 * Distinguishes groups from questions and display text and indicates data type for questions.
 */
export var ItemTypeValueSetEnum;
(function (ItemTypeValueSetEnum) {
    /**
     * attachment: Question with binary content such as an image, PDF, etc. as an answer (valueAttachment).
     */
    ItemTypeValueSetEnum["Attachment"] = "attachment";
    /**
     * boolean: Question with a yes/no answer (valueBoolean).
     */
    ItemTypeValueSetEnum["Boolean"] = "boolean";
    /**
     * choice: Question with a Coding drawn from a list of possible answers (specified in either the answerOption property, or via the valueset referenced in the answerValueSet property) as an answer (valueCoding).
     */
    ItemTypeValueSetEnum["Choice"] = "choice";
    /**
     * date: Question with a date answer (valueDate).
     */
    ItemTypeValueSetEnum["Date"] = "date";
    /**
     * dateTime: Question with a date and time answer (valueDateTime).
     */
    ItemTypeValueSetEnum["DateTime"] = "dateTime";
    /**
     * decimal: Question with is a real number answer (valueDecimal).
     */
    ItemTypeValueSetEnum["Decimal"] = "decimal";
    /**
     * display: Text for display that will not capture an answer or have child items.
     */
    ItemTypeValueSetEnum["Display"] = "display";
    /**
     * group: An item with no direct answer but should have at least one child item.
     */
    ItemTypeValueSetEnum["Group"] = "group";
    /**
     * integer: Question with an integer answer (valueInteger).
     */
    ItemTypeValueSetEnum["Integer"] = "integer";
    /**
     * open-choice: Answer is a Coding drawn from a list of possible answers (as with the choice type) or a free-text entry in a string (valueCoding or valueString).
     */
    ItemTypeValueSetEnum["OpenChoice"] = "open-choice";
    /**
     * quantity: Question with a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.) as an answer. (valueQuantity) There is an extension 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit' that can be used to define what unit should be captured (or the unit that has a ucum conversion from the provided unit).
     */
    ItemTypeValueSetEnum["Quantity"] = "quantity";
    /**
     * question: An item that defines a specific answer to be captured, and which may have child items. (the answer provided in the QuestionnaireResponse should be of the defined datatype).
     */
    ItemTypeValueSetEnum["Question"] = "question";
    /**
     * reference: Question with a reference to another resource (practitioner, organization, etc.) as an answer (valueReference).
     */
    ItemTypeValueSetEnum["Reference"] = "reference";
    /**
     * string: Question with a short (few words to short sentence) free-text entry answer (valueString).
     */
    ItemTypeValueSetEnum["String"] = "string";
    /**
     * text: Question with a long (potentially multi-paragraph) free-text entry answer (valueString).
     */
    ItemTypeValueSetEnum["Text"] = "text";
    /**
     * time: Question with a time (hour:minute:second) answer independent of date. (valueTime).
     */
    ItemTypeValueSetEnum["Time"] = "time";
    /**
     * url: Question with a URL (website, FTP site, etc.) answer (valueUri).
     */
    ItemTypeValueSetEnum["Url"] = "url";
})(ItemTypeValueSetEnum || (ItemTypeValueSetEnum = {}));
//# sourceMappingURL=ItemTypeValueSetEnum.js.map