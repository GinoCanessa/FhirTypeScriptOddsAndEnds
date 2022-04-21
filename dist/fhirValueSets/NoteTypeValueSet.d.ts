import { Coding } from '../fhir.js';
/**
 * The presentation types of notes.
 */
export declare const NoteTypeValueSet: {
    /**
     * display: Display the note.
     */
    readonly Display: Coding;
    /**
     * print: Print the note on the form.
     */
    readonly PrintForm: Coding;
    /**
     * printoper: Print the note for the operator.
     */
    readonly PrintOperator: Coding;
};
/**
 * The presentation types of notes.
 */
export declare type NoteTypeValueSetType = typeof NoteTypeValueSet;
/**
 * The presentation types of notes.
 */
export declare enum NoteTypeValueSetEnum {
    /**
     * display: Display the note.
     */
    Display = "display",
    /**
     * print: Print the note on the form.
     */
    PrintForm = "print",
    /**
     * printoper: Print the note for the operator.
     */
    PrintOperator = "printoper"
}
//# sourceMappingURL=NoteTypeValueSet.d.ts.map