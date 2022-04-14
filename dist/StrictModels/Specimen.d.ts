import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * Details concerning the specimen collection.
 */
export declare class SpecimenCollection extends fhirModels.BackboneElement implements fhirInterfaces.ISpecimenCollection {
    /**
     * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
     */
    bodySite?: fhirModels.CodeableConcept | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedDateTime?: string | undefined;
    _collectedDateTime?: fhirModels.Element | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedPeriod?: fhirModels.Period | undefined;
    /**
     * Person who collected the specimen.
     */
    collector?: fhirModels.Reference | undefined;
    /**
     * The span of time over which the collection of a specimen occurred.
     */
    duration?: fhirModels.Duration | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusDuration?: fhirModels.Duration | undefined;
    /**
     * A coded value specifying the technique that is used to perform the procedure.
     */
    method?: fhirModels.CodeableConcept | undefined;
    /**
     * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
     */
    quantity?: fhirModels.Quantity | undefined;
    /**
     * Default constructor for SpecimenCollection from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISpecimenCollection);
}
/**
 * Details concerning processing and processing steps for the specimen.
 */
export declare class SpecimenProcessing extends fhirModels.BackboneElement implements fhirInterfaces.ISpecimenProcessing {
    /**
     * Material used in the processing step.
     */
    additive?: fhirModels.Reference[] | undefined;
    /**
     * Textual description of procedure.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * A coded value specifying the procedure used to process the specimen.
     */
    procedure?: fhirModels.CodeableConcept | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timeDateTime?: string | undefined;
    _timeDateTime?: fhirModels.Element | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timePeriod?: fhirModels.Period | undefined;
    /**
     * Default constructor for SpecimenProcessing from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISpecimenProcessing);
}
/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export declare class SpecimenContainer extends fhirModels.BackboneElement implements fhirInterfaces.ISpecimenContainer {
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhirModels.CodeableConcept | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhirModels.Reference | undefined;
    /**
     * The capacity (volume or other measure) the container may contain.
     */
    capacity?: fhirModels.Quantity | undefined;
    /**
     * Textual description of the container.
     */
    description?: string | undefined;
    _description?: fhirModels.Element | undefined;
    /**
     * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
     */
    specimenQuantity?: fhirModels.Quantity | undefined;
    /**
     * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for SpecimenContainer from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISpecimenContainer);
}
/**
 * A sample to be used for analysis.
 */
export declare class Specimen extends fhirModels.DomainResource implements fhirInterfaces.ISpecimen {
    /**
     * Resource Type Name
     */
    readonly resourceType = "Specimen";
    /**
     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
     */
    accessionIdentifier?: fhirModels.Identifier | undefined;
    /**
     * Details concerning the specimen collection.
     */
    collection?: fhirModels.SpecimenCollection | undefined;
    /**
     * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
     */
    condition?: fhirModels.CodeableConcept[] | undefined;
    /**
     * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
     */
    container?: fhirModels.SpecimenContainer[] | undefined;
    /**
     * Id for specimen.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
     */
    parent?: fhirModels.Reference[] | undefined;
    /**
     * Details concerning processing and processing steps for the specimen.
     */
    processing?: fhirModels.SpecimenProcessing[] | undefined;
    /**
     * Time when specimen was received for processing or testing.
     */
    receivedTime?: string | undefined;
    _receivedTime?: fhirModels.Element | undefined;
    /**
     * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
     */
    request?: fhirModels.Reference[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: SpecimenStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
     */
    subject?: fhirModels.Reference | undefined;
    /**
     * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
     */
    type?: fhirModels.CodeableConcept | undefined;
    /**
     * Default constructor for Specimen from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.ISpecimen);
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
//# sourceMappingURL=Specimen.d.ts.map