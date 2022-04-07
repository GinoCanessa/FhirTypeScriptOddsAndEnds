/**
 * Whether the application produces or consumes documents.
 */
export var DocumentMode = {
    /**
     * The application consumes documents of the specified type.
     */
    document_mode_Consumer: {
        code: "consumer",
        display: "Consumer",
        system: "http://hl7.org/fhir/document-mode"
    },
    /**
     * The application produces documents of the specified type.
     */
    document_mode_Producer: {
        code: "producer",
        display: "Producer",
        system: "http://hl7.org/fhir/document-mode"
    }
};
