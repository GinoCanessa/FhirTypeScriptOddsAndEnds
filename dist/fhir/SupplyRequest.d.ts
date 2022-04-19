import * as fhir from '../fhir';
/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export declare type ISupplyRequestParameter = fhir.IBackboneElement & {
    /**
     * A code or string that identifies the device detail being asserted.
     */
    code?: fhir.ICodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhir.IQuantity | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueRange?: fhir.IRange | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.IFhirElement | undefined;
};
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export declare type ISupplyRequest = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyRequest";
    /**
     * When the request was made.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhir.IFhirElement | undefined;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * Where the supply is expected to come from.
     */
    deliverFrom?: fhir.IReference | undefined;
    /**
     * Where the supply is destined to go.
     */
    deliverTo?: fhir.IReference | undefined;
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemReference?: fhir.IReference | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.IFhirElement | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrencePeriod?: fhir.IPeriod | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceTiming?: fhir.ITiming | undefined;
    /**
     * Specific parameters for the ordered item.  For example, the size of the indicated item.
     */
    parameter?: fhir.ISupplyRequestParameter[] | undefined;
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
     */
    priority?: SupplyRequestPriorityEnum | undefined;
    _priority?: fhir.IFhirElement | undefined;
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity: fhir.IQuantity | null;
    /**
     * The reason why the supply item was requested.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    requester?: fhir.IReference | undefined;
    /**
     * Status of the supply request.
     */
    status?: SupplyRequestStatusEnum | undefined;
    _status?: fhir.IFhirElement | undefined;
    /**
     * Who is intended to fulfill the request.
     */
    supplier?: fhir.IReference[] | undefined;
};
/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export declare class SupplyRequestParameter extends fhir.BackboneElement implements fhir.ISupplyRequestParameter {
    /**
     * A code or string that identifies the device detail being asserted.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueBoolean?: boolean | undefined;
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SupplyRequestParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISupplyRequestParameter>);
    /**
     * Check if the current SupplyRequestParameter contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SupplyRequestParameter from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISupplyRequestParameter): SupplyRequestParameter;
}
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export declare class SupplyRequest extends fhir.DomainResource implements fhir.ISupplyRequest {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyRequest";
    /**
     * When the request was made.
     */
    authoredOn?: string | undefined;
    _authoredOn?: fhir.FhirElement | undefined;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Where the supply is expected to come from.
     */
    deliverFrom?: fhir.Reference | undefined;
    /**
     * Where the supply is destined to go.
     */
    deliverTo?: fhir.Reference | undefined;
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceDateTime?: string | undefined;
    _occurrenceDateTime?: fhir.FhirElement | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceTiming?: fhir.Timing | undefined;
    /**
     * Specific parameters for the ordered item.  For example, the size of the indicated item.
     */
    parameter?: fhir.SupplyRequestParameter[] | undefined;
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
     */
    priority?: SupplyRequestPriorityEnum | undefined;
    _priority?: fhir.FhirElement | undefined;
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity: fhir.Quantity | null;
    /**
     * The reason why the supply item was requested.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    requester?: fhir.Reference | undefined;
    /**
     * Status of the supply request.
     */
    status?: SupplyRequestStatusEnum | undefined;
    _status?: fhir.FhirElement | undefined;
    /**
     * Who is intended to fulfill the request.
     */
    supplier?: fhir.Reference[] | undefined;
    /**
     * Default constructor for SupplyRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.ISupplyRequest>);
    /**
     * Check if the current SupplyRequest contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a SupplyRequest from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.ISupplyRequest): SupplyRequest;
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