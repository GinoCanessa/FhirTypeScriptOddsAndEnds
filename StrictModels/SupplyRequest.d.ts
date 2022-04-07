import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export declare class SupplyRequestParameter extends fhirModels.BackboneElement implements fhirInterfaces.ISupplyRequestParameter {
    /**
     * A code or string that identifies the device detail being asserted.
     */
    code?: fhirModels.CodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhirModels.Quantity | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueRange?: fhirModels.Range | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhirModels.Element | undefined;
    /**
     * Default constructor for SupplyRequestParameter from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISupplyRequestParameter);
}
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export declare class SupplyRequest extends fhirModels.DomainResource implements fhirInterfaces.ISupplyRequest {
    /**
     * Resource Type Name
     */
    readonly resourceType = "SupplyRequest";
    /**
     * When the request was made.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhirModels.Element | undefined;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    category?: fhirModels.CodeableConcept | undefined;
    /**
     * Where the supply is expected to come from.
     */
    deliverFrom?: fhirModels.Reference | undefined;
    /**
     * Where the supply is destined to go.
     */
    deliverTo?: fhirModels.Reference | undefined;
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemReference?: fhirModels.Reference | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhirModels.Element | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrencePeriod?: fhirModels.Period | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceTiming?: fhirModels.Timing | undefined;
    /**
     * Specific parameters for the ordered item.  For example, the size of the indicated item.
     */
    parameter?: fhirModels.SupplyRequestParameter[] | undefined;
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
     */
    priority?: SupplyRequestPriorityEnum | undefined;
    _priority?: fhirModels.Element | undefined;
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity: fhirModels.Quantity;
    /**
     * The reason why the supply item was requested.
     */
    reasonCode?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonReference?: fhirModels.Reference[] | undefined;
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    requester?: fhirModels.Reference | undefined;
    /**
     * Status of the supply request.
     */
    status?: SupplyRequestStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Who is intended to fulfill the request.
     */
    supplier?: fhirModels.Reference[] | undefined;
    /**
     * Default constructor for SupplyRequest from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISupplyRequest);
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
//# sourceMappingURL=SupplyRequest.d.ts.map