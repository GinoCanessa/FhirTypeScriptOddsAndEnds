// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/document-mode|4.0.1
import { Coding } from '../fhir.js';
/**
 * Whether the application produces or consumes documents.
 */
export const DocumentModeValueSet = {
    /**
     * consumer: The application consumes documents of the specified type.
     */
    Consumer: new Coding({
        display: "Consumer",
        code: "consumer",
        system: "http://hl7.org/fhir/document-mode",
    }),
    /**
     * producer: The application produces documents of the specified type.
     */
    Producer: new Coding({
        display: "Producer",
        code: "producer",
        system: "http://hl7.org/fhir/document-mode",
    }),
};
/**
 * Whether the application produces or consumes documents.
 */
//# sourceMappingURL=DocumentModeValueSet.js.map