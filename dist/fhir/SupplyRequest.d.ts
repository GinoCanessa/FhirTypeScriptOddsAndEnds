import * as fhir from '../fhir.js';
import { SupplyrequestStatusValueSetType } from '../fhirValueSets/SupplyrequestStatusValueSet.js';
import { SupplyrequestStatusValueSetEnum } from '../valueSetEnums.js';
import { SupplyrequestKindValueSetType } from '../fhirValueSets/SupplyrequestKindValueSet.js';
import { RequestPriorityValueSetType } from '../fhirValueSets/RequestPriorityValueSet.js';
import { RequestPriorityValueSetEnum } from '../valueSetEnums.js';
import { SupplyrequestReasonValueSetType } from '../fhirValueSets/SupplyrequestReasonValueSet.js';
/**
 * Valid arguments for the SupplyRequestParameter type.
 */
export interface SupplyRequestParameterArgs extends fhir.BackboneElementArgs {
    /**
     * A code or string that identifies the device detail being asserted.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    value?: fhir.CodeableConcept | fhir.Quantity | fhir.Range | fhir.FhirBoolean | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
}
/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export declare class SupplyRequestParameter extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * A code or string that identifies the device detail being asserted.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    value?: (fhir.CodeableConcept | fhir.Quantity | fhir.Range | fhir.FhirBoolean) | undefined;
    readonly __valueIsChoice: true;
    /**
     * Default constructor for SupplyRequestParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SupplyRequestParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the SupplyRequest type.
 */
export interface SupplyRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyRequest" | undefined;
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Status of the supply request.
     */
    status?: SupplyrequestStatusValueSetEnum | undefined;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    item?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemReference?: fhir.ReferenceArgs | undefined;
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity: fhir.QuantityArgs | null;
    /**
     * Specific parameters for the ordered item.  For example, the size of the indicated item.
     */
    parameter?: fhir.SupplyRequestParameterArgs[] | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | fhir.Timing | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceTiming?: fhir.TimingArgs | undefined;
    /**
     * When the request was made.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    requester?: fhir.ReferenceArgs | undefined;
    /**
     * Who is intended to fulfill the request.
     */
    supplier?: fhir.ReferenceArgs[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Where the supply is expected to come from.
     */
    deliverFrom?: fhir.ReferenceArgs | undefined;
    /**
     * Where the supply is destined to go.
     */
    deliverTo?: fhir.ReferenceArgs | undefined;
}
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export declare class SupplyRequest extends fhir.DomainResource {
    readonly __dataType: string;
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
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
     */
    priority?: RequestPriorityValueSetEnum | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    item: (fhir.CodeableConcept | fhir.Reference) | null;
    readonly __itemIsChoice: true;
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
    occurrence?: (fhir.FhirDateTime | fhir.Period | fhir.Timing) | undefined;
    readonly __occurrenceIsChoice: true;
    /**
     * When the request was made.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
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
    constructor(source?: Partial<SupplyRequestArgs>, options?: fhir.FhirConstructorOptions);
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
     * Example-bound Value Set for reasonCode
     */
    static reasonCodeExampleValueSet(): SupplyrequestReasonValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=SupplyRequest.d.ts.map