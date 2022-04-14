import { Coding } from '../strictmodels';
/**
 * The kind of response to a message.
 */
export declare const ResponseCode: {
    /**
     * The message was rejected because of a problem with the content. There is no point in re-sending without change. The response narrative SHALL describe the issue.
     */
    response_code_FatalError: Coding;
    /**
     * The message was accepted and processed without error.
     */
    response_code_OK: Coding;
    /**
     * Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.
     */
    response_code_TransientError: Coding;
};
//# sourceMappingURL=ResponseCode.d.ts.map