import { Coding } from '../fhir';
/**
 * Distinguishes groups from questions and display text and indicates data type for questions.
 */
export declare const ItemTypeValueSet: {
    /**
     * Question with binary content such as an image, PDF, etc. as an answer (valueAttachment).
     */
    item_type_Attachment: Coding;
    /**
     * Question with a yes/no answer (valueBoolean).
     */
    item_type_Boolean: Coding;
    /**
     * Question with a Coding drawn from a list of possible answers (specified in either the answerOption property, or via the valueset referenced in the answerValueSet property) as an answer (valueCoding).
     */
    item_type_Choice: Coding;
    /**
     * Question with a date answer (valueDate).
     */
    item_type_Date: Coding;
    /**
     * Question with a date and time answer (valueDateTime).
     */
    item_type_DateTime: Coding;
    /**
     * Question with is a real number answer (valueDecimal).
     */
    item_type_Decimal: Coding;
    /**
     * Text for display that will not capture an answer or have child items.
     */
    item_type_Display: Coding;
    /**
     * An item with no direct answer but should have at least one child item.
     */
    item_type_Group: Coding;
    /**
     * Question with an integer answer (valueInteger).
     */
    item_type_Integer: Coding;
    /**
     * Answer is a Coding drawn from a list of possible answers (as with the choice type) or a free-text entry in a string (valueCoding or valueString).
     */
    item_type_OpenChoice: Coding;
    /**
     * Question with a combination of a numeric value and unit, potentially with a comparator (&lt;, &gt;, etc.) as an answer. (valueQuantity) There is an extension 'http://hl7.org/fhir/StructureDefinition/questionnaire-unit' that can be used to define what unit should be captured (or the unit that has a ucum conversion from the provided unit).
     */
    item_type_Quantity: Coding;
    /**
     * An item that defines a specific answer to be captured, and which may have child items. (the answer provided in the QuestionnaireResponse should be of the defined datatype).
     */
    item_type_Question: Coding;
    /**
     * Question with a reference to another resource (practitioner, organization, etc.) as an answer (valueReference).
     */
    item_type_Reference: Coding;
    /**
     * Question with a short (few words to short sentence) free-text entry answer (valueString).
     */
    item_type_String: Coding;
    /**
     * Question with a long (potentially multi-paragraph) free-text entry answer (valueString).
     */
    item_type_Text: Coding;
    /**
     * Question with a time (hour:minute:second) answer independent of date. (valueTime).
     */
    item_type_Time: Coding;
    /**
     * Question with a URL (website, FTP site, etc.) answer (valueUri).
     */
    item_type_Url: Coding;
};
//# sourceMappingURL=ItemTypeValueSet.d.ts.map