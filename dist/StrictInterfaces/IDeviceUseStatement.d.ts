import * as fhirInterfaces from '../strictinterfaces';
/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export interface IDeviceUseStatement extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "DeviceUseStatement";
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
     */
    basedOn?: fhirInterfaces.IReference[] | undefined;
    /**
     * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
     */
    bodySite?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The most common use cases for deriving a DeviceUseStatement comes from creating it from a request or from an observation or a claim. it should be noted that the amount of information that is available varies from the type resource that you derive the DeviceUseStatement from.
     */
    derivedFrom?: fhirInterfaces.IReference[] | undefined;
    /**
     * The details of the device used.
     */
    device: fhirInterfaces.IReference;
    /**
     * An external identifier for this statement such as an IRI.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * Reason or justification for the use of the device.
     */
    reasonCode?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this DeviceUseStatement.
     */
    reasonReference?: fhirInterfaces.IReference[] | undefined;
    /**
     * The time at which the statement was made/recorded.
     */
    recordedOn?: string | undefined;
    _recordedOn?: fhirInterfaces.IElement | undefined;
    /**
     * Who reported the device was being used by the patient.
     */
    source?: fhirInterfaces.IReference | undefined;
    /**
     * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
     * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
     */
    status: DeviceUseStatementStatusEnum;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * The patient who used the device.
     */
    subject: fhirInterfaces.IReference;
    /**
     * How often the device was used.
     */
    timingTiming?: fhirInterfaces.ITiming | undefined;
    /**
     * How often the device was used.
     */
    timingPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * How often the device was used.
     */
    timingDateTime?: string | undefined;
    _timingDateTime?: fhirInterfaces.IElement | undefined;
}
/**
 * Code Values for the DeviceUseStatement.status field
 */
export declare enum DeviceUseStatementStatusEnum {
    ACTIVE = "active",
    COMPLETED = "completed",
    ENTERED_IN_ERROR = "entered-in-error",
    INTENDED = "intended",
    STOPPED = "stopped",
    ON_HOLD = "on-hold"
}
//# sourceMappingURL=IDeviceUseStatement.d.ts.map