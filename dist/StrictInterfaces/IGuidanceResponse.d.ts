import * as fhirInterfaces from '../strictinterfaces';
/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
export interface IGuidanceResponse extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "GuidanceResponse";
    /**
     * If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
     */
    dataRequirement?: fhirInterfaces.IDataRequirement[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official copmletion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
     */
    evaluationMessage?: fhirInterfaces.IReference[] | undefined;
    /**
     * Allows a service to provide  unique, business identifiers for the response.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
     */
    moduleUri?: string | undefined;
    _moduleUri?: fhirInterfaces.IElement | undefined;
    /**
     * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
     */
    moduleCanonical?: string | undefined;
    _moduleCanonical?: fhirInterfaces.IElement | undefined;
    /**
     * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
     */
    moduleCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * Indicates when the guidance response was processed.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
     */
    outputParameters?: fhirInterfaces.IReference | undefined;
    /**
     * Provides a reference to the device that performed the guidance.
     */
    performer?: fhirInterfaces.IReference | undefined;
    /**
     * Describes the reason for the guidance response in coded or textual form.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
     */
    requestIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    result?: fhirInterfaces.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: GuidanceResponseStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The patient for which the request was processed.
     */
    subject?: fhirInterfaces.IReference | undefined;
}
/**
 * Code Values for the GuidanceResponse.status field
 */
export declare enum GuidanceResponseStatusEnum {
    SUCCESS = "success",
    DATA_REQUESTED = "data-requested",
    DATA_REQUIRED = "data-required",
    IN_PROGRESS = "in-progress",
    FAILURE = "failure",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=IGuidanceResponse.d.ts.map