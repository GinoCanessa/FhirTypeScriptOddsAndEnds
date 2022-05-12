import { Coding } from '../fhir.js';
/**
 * The kind of response to a message.
 */
export declare const ResponseCodeValueSet: {
    /**
     * fatal-error: The message was rejected because of a problem with the content. There is no point in re-sending without change. The response narrative SHALL describe the issue.
     */
    readonly FatalError: Coding;
    /**
     * ok: The message was accepted and processed without error.
     */
    readonly OK: Coding;
    /**
     * transient-error: Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.
     */
    readonly TransientError: Coding;
};
/**
 * The kind of response to a message.
 */
export declare type ResponseCodeValueSetType = typeof ResponseCodeValueSet;
/**
 * The kind of response to a message.
 */
//# sourceMappingURL=ResponseCodeValueSet.d.ts.map