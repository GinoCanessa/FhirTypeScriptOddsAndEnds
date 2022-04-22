import * as fhir from '../fhir.js';
import { SupplyrequestStatusValueSetType, SupplyrequestStatusValueSetEnum } from '../fhirValueSets/SupplyrequestStatusValueSet.js';
import { SupplyrequestKindValueSetType } from '../fhirValueSets/SupplyrequestKindValueSet.js';
import { RequestPriorityValueSetType, RequestPriorityValueSetEnum } from '../fhirValueSets/RequestPriorityValueSet.js';
import { SupplyItemValueSetType } from '../fhirValueSets/SupplyItemValueSet.js';
import { SupplyrequestReasonValueSetType } from '../fhirValueSets/SupplyrequestReasonValueSet.js';
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
    /**
     * Extended properties for primitive element: SupplyRequest.parameter.value[x]
     */
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
     * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Status of the supply request.
     */
    status?: SupplyrequestStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    category?: fhir.ICodeableConcept | undefined;
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.priority
     */
    _priority?: fhir.IFhirElement | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemReference?: fhir.IReference | undefined;
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity: fhir.IQuantity | null;
    /**
     * Specific parameters for the ordered item.  For example, the size of the indicated item.
     */
    parameter?: fhir.ISupplyRequestParameter[] | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.occurrence[x]
     */
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
     * When the request was made.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.authoredOn
     */
    _authoredOn?: fhir.IFhirElement | undefined;
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    requester?: fhir.IReference | undefined;
    /**
     * Who is intended to fulfill the request.
     */
    supplier?: fhir.IReference[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * Where the supply is expected to come from.
     */
    deliverFrom?: fhir.IReference | undefined;
    /**
     * Where the supply is destined to go.
     */
    deliverTo?: fhir.IReference | undefined;
};
/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export declare class SupplyRequestParameter extends fhir.BackboneElement implements ISupplyRequestParameter {
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
    /**
     * Extended properties for primitive element: SupplyRequest.parameter.value[x]
     */
    _valueBoolean?: fhir.FhirElement | undefined;
    /**
     * Default constructor for SupplyRequestParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISupplyRequestParameter>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export declare class SupplyRequest extends fhir.DomainResource implements ISupplyRequest {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyRequest";
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Status of the supply request.
     */
    status?: SupplyrequestStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.priority
     */
    _priority?: fhir.FhirElement | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity: fhir.Quantity | null;
    /**
     * Specific parameters for the ordered item.  For example, the size of the indicated item.
     */
    parameter?: fhir.SupplyRequestParameter[] | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.occurrence[x]
     */
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
     * When the request was made.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElement | undefined;
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    requester?: fhir.Reference | undefined;
    /**
     * Who is intended to fulfill the request.
     */
    supplier?: fhir.Reference[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Where the supply is expected to come from.
     */
    deliverFrom?: fhir.Reference | undefined;
    /**
     * Where the supply is destined to go.
     */
    deliverTo?: fhir.Reference | undefined;
    /**
     * Default constructor for SupplyRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISupplyRequest>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): SupplyrequestStatusValueSetType;
    /**
     * Example-bound Value Set for category
     */
    static categoryExampleValueSet(): SupplyrequestKindValueSetType;
    /**
     * Required-bound Value Set for priority
     */
    static priorityRequiredValueSet(): RequestPriorityValueSetType;
    /**
     * Example-bound Value Set for itemCodeableConcept
     */
    static itemCodeableConceptExampleValueSet(): SupplyItemValueSetType;
    /**
     * Example-bound Value Set for itemReference
     */
    static itemReferenceExampleValueSet(): SupplyItemValueSetType;
    /**
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): SupplyrequestReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=SupplyRequest.d.ts.map