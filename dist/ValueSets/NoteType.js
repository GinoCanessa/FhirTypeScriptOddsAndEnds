"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteType = void 0;
/**
 * The presentation types of notes.
 */
exports.NoteType = {
    /**
     * Display the note.
     */
    note_type_Display: {
        code: "display",
        display: "Display",
        system: "http://hl7.org/fhir/note-type"
    },
    /**
     * Print the note on the form.
     */
    note_type_PrintForm: {
        code: "print",
        display: "Print (Form)",
        system: "http://hl7.org/fhir/note-type"
    },
    /**
     * Print the note for the operator.
     */
    note_type_PrintOperator: {
        code: "printoper",
        display: "Print (Operator)",
        system: "http://hl7.org/fhir/note-type"
    },
};
//# sourceMappingURL=NoteType.js.map