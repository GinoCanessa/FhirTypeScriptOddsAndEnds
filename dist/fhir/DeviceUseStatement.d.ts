import * as fhir from '../fhir.js';
import { DeviceStatementStatusValueSetType, DeviceStatementStatusValueSetEnum } from '../fhirValueSets/DeviceStatementStatusValueSet.js';
import { BodySiteValueSetType } from '../fhirValueSets/BodySiteValueSet.js';
/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export declare type IDeviceUseStatement = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceUseStatement";
    /**
     * An external identifier for this statement such as an IRI.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
     */
    basedOn?: fhir.IReference[] | undefined;
    /**
     * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
     * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
     */
    status: DeviceStatementStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: DeviceUseStatement.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The patient who used the device.
     */
    subject: fhir.IReference | null;
    /**
     * The most common use cases for deriving a DeviceUseStatement comes from creating it from a request or from an observation or a claim. it should be noted that the amount of information that is available varies from the type resource that you derive the DeviceUseStatement from.
     */
    derivedFrom?: fhir.IReference[] | undefined;
    /**
     * How often the device was used.
     */
    timingTiming?: fhir.ITiming | undefined;
    /**
     * How often the device was used.
     */
    timingPeriod?: fhir.IPeriod | undefined;
    /**
     * How often the device was used.
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseStatement.timing[x]
     */
    _timingDateTime?: fhir.IFhirElement | undefined;
    /**
     * The time at which the statement was made/recorded.
     */
    recordedOn?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseStatement.recordedOn
     */
    _recordedOn?: fhir.IFhirElement | undefined;
    /**
     * Who reported the device was being used by the patient.
     */
    source?: fhir.IReference | undefined;
    /**
     * The details of the device used.
     */
    device: fhir.IReference | null;
    /**
     * Reason or justification for the use of the device.
     */
    reasonCode?: fhir.ICodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this DeviceUseStatement.
     */
    reasonReference?: fhir.IReference[] | undefined;
    /**
     * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.
 */
export declare class DeviceUseStatement extends fhir.DomainResource implements IDeviceUseStatement {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceUseStatement";
    /**
     * An external identifier for this statement such as an IRI.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this DeviceUseStatement.
     */
    basedOn?: fhir.Reference[] | undefined;
    /**
     * DeviceUseStatment is a statement at a point in time.  The status is only representative at the point when it was asserted.  The value set for contains codes that assert the status of the use  by the patient (for example, stopped or on hold) as well as codes that assert the status of the resource itself (for example, entered in error).
     * This element is labeled as a modifier because the status contains the codes that mark the statement as not currently valid.
     */
    status: DeviceStatementStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: DeviceUseStatement.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The patient who used the device.
     */
    subject: fhir.Reference | null;
    /**
     * The most common use cases for deriving a DeviceUseStatement comes from creating it from a request or from an observation or a claim. it should be noted that the amount of information that is available varies from the type resource that you derive the DeviceUseStatement from.
     */
    derivedFrom?: fhir.Reference[] | undefined;
    /**
     * How often the device was used.
     */
    timingTiming?: fhir.Timing | undefined;
    /**
     * How often the device was used.
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * How often the device was used.
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseStatement.timing[x]
     */
    _timingDateTime?: fhir.FhirElement | undefined;
    /**
     * The time at which the statement was made/recorded.
     */
    recordedOn?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseStatement.recordedOn
     */
    _recordedOn?: fhir.FhirElement | undefined;
    /**
     * Who reported the device was being used by the patient.
     */
    source?: fhir.Reference | undefined;
    /**
     * The details of the device used.
     */
    device: fhir.Reference | null;
    /**
     * Reason or justification for the use of the device.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Indicates another resource whose existence justifies this DeviceUseStatement.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Indicates the anotomic location on the subject's body where the device was used ( i.e. the target).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * Details about the device statement that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for DeviceUseStatement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IDeviceUseStatement>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): DeviceStatementStatusValueSetType;
    /**
     * Example-bound Value Set for bodySite
     */
    static bodySiteExampleValueSet(): BodySiteValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=DeviceUseStatement.d.ts.map