import { Coding } from '../fhir.js';
/**
 * Whether the application produces or consumes documents.
 */
export declare const DocumentModeValueSet: {
    /**
     * consumer: The application consumes documents of the specified type.
     */
    readonly Consumer: Coding;
    /**
     * producer: The application produces documents of the specified type.
     */
    readonly Producer: Coding;
};
/**
 * Whether the application produces or consumes documents.
 */
export declare type DocumentModeValueSetType = typeof DocumentModeValueSet;
/**
 * Whether the application produces or consumes documents.
 */
export declare enum DocumentModeValueSetEnum {
    /**
     * consumer: The application consumes documents of the specified type.
     */
    Consumer = "consumer",
    /**
     * producer: The application produces documents of the specified type.
     */
    Producer = "producer"
}
//# sourceMappingURL=DocumentModeValueSet.d.ts.map