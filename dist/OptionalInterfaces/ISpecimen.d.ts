import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Details concerning the specimen collection.
 */
export interface ISpecimenCollection extends fhirInterfaces.IBackboneElement {
    /**
     * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
     */
    bodySite?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedDateTime?: string | undefined;
    _collectedDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedPeriod?: fhirInterfaces.IPeriod | undefined;
    /**
     * Person who collected the specimen.
     */
    collector?: fhirInterfaces.IReference | undefined;
    /**
     * The span of time over which the collection of a specimen occurred.
     */
    duration?: fhirInterfaces.IDuration | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusDuration?: fhirInterfaces.IDuration | undefined;
    /**
     * A coded value specifying the technique that is used to perform the procedure.
     */
    method?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
     */
    quantity?: fhirInterfaces.IQuantity | undefined;
}
/**
 * Details concerning processing and processing steps for the specimen.
 */
export interface ISpecimenProcessing extends fhirInterfaces.IBackboneElement {
    /**
     * Material used in the processing step.
     */
    additive?: fhirInterfaces.IReference[] | undefined;
    /**
     * Textual description of procedure.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * A coded value specifying the procedure used to process the specimen.
     */
    procedure?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhirInterfaces.IElement | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timePeriod?: fhirInterfaces.IPeriod | undefined;
}
/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export interface ISpecimenContainer extends fhirInterfaces.IBackboneElement {
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhirInterfaces.IReference | undefined;
    /**
     * The capacity (volume or other measure) the container may contain.
     */
    capacity?: fhirInterfaces.IQuantity | undefined;
    /**
     * Textual description of the container.
     */
    description?: string | undefined;
    _description?: fhirInterfaces.IElement | undefined;
    /**
     * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
     */
    specimenQuantity?: fhirInterfaces.IQuantity | undefined;
    /**
     * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * A sample to be used for analysis.
 */
export interface ISpecimen extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "Specimen";
    /**
     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
     */
    accessionIdentifier?: fhirInterfaces.IIdentifier | undefined;
    /**
     * Details concerning the specimen collection.
     */
    collection?: fhirInterfaces.ISpecimenCollection | undefined;
    /**
     * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
     */
    condition?: fhirInterfaces.ICodeableConcept[] | undefined;
    /**
     * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
     */
    container?: fhirInterfaces.ISpecimenContainer[] | undefined;
    /**
     * Id for specimen.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
     */
    parent?: fhirInterfaces.IReference[] | undefined;
    /**
     * Details concerning processing and processing steps for the specimen.
     */
    processing?: fhirInterfaces.ISpecimenProcessing[] | undefined;
    /**
     * Time when specimen was received for processing or testing.
     */
    receivedTime?: string | undefined;
    _receivedTime?: fhirInterfaces.IElement | undefined;
    /**
     * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
     */
    request?: fhirInterfaces.IReference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: SpecimenStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
    /**
     * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
     */
    subject?: fhirInterfaces.IReference | undefined;
    /**
     * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
     */
    type?: fhirInterfaces.ICodeableConcept | undefined;
}
/**
 * Code Values for the Specimen.status field
 */
export declare enum SpecimenStatusEnum {
    AVAILABLE = "available",
    UNAVAILABLE = "unavailable",
    UNSATISFACTORY = "unsatisfactory",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=ISpecimen.d.ts.map