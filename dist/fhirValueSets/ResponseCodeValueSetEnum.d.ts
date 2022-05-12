/**
 * The kind of response to a message.
 */
export declare enum ResponseCodeValueSetEnum {
    /**
     * fatal-error: The message was rejected because of a problem with the content. There is no point in re-sending without change. The response narrative SHALL describe the issue.
     */
    FatalError = "fatal-error",
    /**
     * ok: The message was accepted and processed without error.
     */
    OK = "ok",
    /**
     * transient-error: Some internal unexpected error occurred - wait and try again. Note - this is usually used for things like database unavailable, which may be expected to resolve, though human intervention may be required.
     */
    TransientError = "transient-error"
}
//# sourceMappingURL=ResponseCodeValueSetEnum.d.ts.map