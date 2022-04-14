import * as fhirInterfaces from '../strictinterfaces';
/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export interface ISupplyRequestParameter extends fhirInterfaces.IBackboneElement {
    /**
     * A code or string that identifies the device detail being asserted.
     */
    code?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueRange?: fhirInterfaces.IRange | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirInterfaces.IElement | undefined;
}
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export interface ISupplyRequest extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "SupplyRequest";
    /**
     * When the request was made.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhirInterfaces.IElement | undefined;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    category?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Where the supply is expected to come from.
     */
    deliverFrom?: fhirInterfaces.IReference | undefined;
    /**
     * Where the supply is destined to go.
     */
    deliverTo?: fhirInterfaces.IReference | undefined;
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemReference?: fhirInterfaces.IReference | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrencePeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * Specific parameters for the ordered item.  For example, the size of the indicated item.
     */
    parameter?: fhirInterfaces.ISupplyRequestParameter[] | undefined;
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
     */
    priority?: SupplyRequestPriorityEnum | undefined;
    _priority?: fhirInterfaces.IElement | undefined;
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity: fhirInterfaces.IQuantity;
    /**
     * The reason why the supply item was requested.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    requester?: fhirInterfaces.IReference | undefined;
    /**
     * Status of the supply request.
     */
    status?: SupplyRequestStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Who is intended to fulfill the request.
     */
    supplier?: fhirInterfaces.IReference[] | undefined;
}
/**
 * Code Values for the SupplyRequest.priority field
 */
export declare enum SupplyRequestPriorityEnum {
    ROUTINE = "routine",
    URGENT = "urgent",
    ASAP = "asap",
    STAT = "stat"
}
/**
 * Code Values for the SupplyRequest.status field
 */
export declare enum SupplyRequestStatusEnum {
    DRAFT = "draft",
    ACTIVE = "active",
    SUSPENDED = "suspended",
    CANCELLED = "cancelled",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    UNKNOWN = "unknown"
}
//# sourceMappingURL=ISupplyRequest.d.ts.map