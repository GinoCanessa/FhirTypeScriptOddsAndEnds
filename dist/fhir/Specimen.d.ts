import * as fhir from '../fhir.js';
import { SpecimenCollectionMethodValueSetType } from '../fhirValueSets/SpecimenCollectionMethodValueSet.js';
import { BodySiteValueSetType } from '../fhirValueSets/BodySiteValueSet.js';
import { V20916ValueSetType } from '../fhirValueSets/V20916ValueSet.js';
import { SpecimenProcessingProcedureValueSetType } from '../fhirValueSets/SpecimenProcessingProcedureValueSet.js';
import { SpecimenContainerTypeValueSetType } from '../fhirValueSets/SpecimenContainerTypeValueSet.js';
import { V20371ValueSetType } from '../fhirValueSets/V20371ValueSet.js';
import { SpecimenStatusValueSetType, SpecimenStatusValueSetEnum } from '../fhirValueSets/SpecimenStatusValueSet.js';
import { V20487ValueSetType } from '../fhirValueSets/V20487ValueSet.js';
import { V20493ValueSetType } from '../fhirValueSets/V20493ValueSet.js';
/**
 * Details concerning the specimen collection.
 */
export declare type ISpecimenCollection = fhir.IBackboneElement & {
    /**
     * Person who collected the specimen.
     */
    collector?: fhir.IReference | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.collection.collected[x]
     */
    _collectedDateTime?: fhir.IFhirElement | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedPeriod?: fhir.IPeriod | undefined;
    /**
     * The span of time over which the collection of a specimen occurred.
     */
    duration?: fhir.IDuration | undefined;
    /**
     * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
     */
    quantity?: fhir.IQuantity | undefined;
    /**
     * A coded value specifying the technique that is used to perform the procedure.
     */
    method?: fhir.ICodeableConcept | undefined;
    /**
     * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.ICodeableConcept | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusDuration?: fhir.IDuration | undefined;
};
/**
 * Details concerning processing and processing steps for the specimen.
 */
export declare type ISpecimenProcessing = fhir.IBackboneElement & {
    /**
     * Textual description of procedure.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.processing.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * A coded value specifying the procedure used to process the specimen.
     */
    procedure?: fhir.ICodeableConcept | undefined;
    /**
     * Material used in the processing step.
     */
    additive?: fhir.IReference[] | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timeDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.processing.time[x]
     */
    _timeDateTime?: fhir.IFhirElement | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timePeriod?: fhir.IPeriod | undefined;
};
/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export declare type ISpecimenContainer = fhir.IBackboneElement & {
    /**
     * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Textual description of the container.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.container.description
     */
    _description?: fhir.IFhirElement | undefined;
    /**
     * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * The capacity (volume or other measure) the container may contain.
     */
    capacity?: fhir.IQuantity | undefined;
    /**
     * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
     */
    specimenQuantity?: fhir.IQuantity | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhir.ICodeableConcept | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhir.IReference | undefined;
};
/**
 * A sample to be used for analysis.
 */
export declare type ISpecimen = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "Specimen";
    /**
     * Id for specimen.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
     */
    accessionIdentifier?: fhir.IIdentifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: SpecimenStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Specimen.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
     */
    type?: fhir.ICodeableConcept | undefined;
    /**
     * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
     */
    subject?: fhir.IReference | undefined;
    /**
     * Time when specimen was received for processing or testing.
     */
    receivedTime?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.receivedTime
     */
    _receivedTime?: fhir.IFhirElement | undefined;
    /**
     * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
     */
    parent?: fhir.IReference[] | undefined;
    /**
     * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
     */
    request?: fhir.IReference[] | undefined;
    /**
     * Details concerning the specimen collection.
     */
    collection?: fhir.ISpecimenCollection | undefined;
    /**
     * Details concerning processing and processing steps for the specimen.
     */
    processing?: fhir.ISpecimenProcessing[] | undefined;
    /**
     * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
     */
    container?: fhir.ISpecimenContainer[] | undefined;
    /**
     * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
     */
    condition?: fhir.ICodeableConcept[] | undefined;
    /**
     * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
     */
    note?: fhir.IAnnotation[] | undefined;
};
/**
 * Details concerning the specimen collection.
 */
export declare class SpecimenCollection extends fhir.BackboneElement implements ISpecimenCollection {
    /**
     * Person who collected the specimen.
     */
    collector?: fhir.Reference | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.collection.collected[x]
     */
    _collectedDateTime?: fhir.FhirElement | undefined;
    /**
     * Time when specimen was collected from subject - the physiologically relevant time.
     */
    collectedPeriod?: fhir.Period | undefined;
    /**
     * The span of time over which the collection of a specimen occurred.
     */
    duration?: fhir.Duration | undefined;
    /**
     * The quantity of specimen collected; for instance the volume of a blood sample, or the physical measurement of an anatomic pathology sample.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * A coded value specifying the technique that is used to perform the procedure.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * If the use case requires  BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [bodySite](extension-bodysite.html).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Representing fasting status using this element is preferred to representing it with an observation using a 'pre-coordinated code'  such as  LOINC 2005-7 (Calcium [Moles/​time] in 2 hour Urine --12 hours fasting), or  using  a component observation ` such as `Observation.component code`  = LOINC 49541-6 (Fasting status - Reported).
     */
    fastingStatusDuration?: fhir.Duration | undefined;
    /**
     * Default constructor for SpecimenCollection - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISpecimenCollection>);
    /**
     * Example-bound Value Set for method
     */
    static methodExampleValueSet(): SpecimenCollectionMethodValueSetType;
    /**
     * Example-bound Value Set for bodySite
     */
    static bodySiteExampleValueSet(): BodySiteValueSetType;
    /**
     * Extensible-bound Value Set for fastingStatusCodeableConcept
     */
    static fastingStatusCodeableConceptExtensibleValueSet(): V20916ValueSetType;
    /**
     * Extensible-bound Value Set for fastingStatusDuration
     */
    static fastingStatusDurationExtensibleValueSet(): V20916ValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Details concerning processing and processing steps for the specimen.
 */
export declare class SpecimenProcessing extends fhir.BackboneElement implements ISpecimenProcessing {
    /**
     * Textual description of procedure.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.processing.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * A coded value specifying the procedure used to process the specimen.
     */
    procedure?: fhir.CodeableConcept | undefined;
    /**
     * Material used in the processing step.
     */
    additive?: fhir.Reference[] | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timeDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.processing.time[x]
     */
    _timeDateTime?: fhir.FhirElement | undefined;
    /**
     * A record of the time or period when the specimen processing occurred.  For example the time of sample fixation or the period of time the sample was in formalin.
     */
    timePeriod?: fhir.Period | undefined;
    /**
     * Default constructor for SpecimenProcessing - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISpecimenProcessing>);
    /**
     * Example-bound Value Set for procedure
     */
    static procedureExampleValueSet(): SpecimenProcessingProcedureValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
 */
export declare class SpecimenContainer extends fhir.BackboneElement implements ISpecimenContainer {
    /**
     * Id for container. There may be multiple; a manufacturer's bar code, lab assigned identifier, etc. The container ID may differ from the specimen id in some circumstances.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Textual description of the container.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.container.description
     */
    _description?: fhir.FhirElement | undefined;
    /**
     * The type of container associated with the specimen (e.g. slide, aliquot, etc.).
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The capacity (volume or other measure) the container may contain.
     */
    capacity?: fhir.Quantity | undefined;
    /**
     * The quantity of specimen in the container; may be volume, dimensions, or other appropriate measurements, depending on the specimen type.
     */
    specimenQuantity?: fhir.Quantity | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Introduced substance to preserve, maintain or enhance the specimen. Examples: Formalin, Citrate, EDTA.
     */
    additiveReference?: fhir.Reference | undefined;
    /**
     * Default constructor for SpecimenContainer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISpecimenContainer>);
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): SpecimenContainerTypeValueSetType;
    /**
     * Example-bound Value Set for additiveCodeableConcept
     */
    static additiveCodeableConceptExampleValueSet(): V20371ValueSetType;
    /**
     * Example-bound Value Set for additiveReference
     */
    static additiveReferenceExampleValueSet(): V20371ValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * A sample to be used for analysis.
 */
export declare class Specimen extends fhir.DomainResource implements ISpecimen {
    /**
     * Resource Type Name
     */
    resourceType: "Specimen";
    /**
     * Id for specimen.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The identifier assigned by the lab when accessioning specimen(s). This is not necessarily the same as the specimen identifier, depending on local lab procedures.
     */
    accessionIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: SpecimenStatusValueSetEnum | undefined;
    /**
     * Extended properties for primitive element: Specimen.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The type can change the way that a specimen is handled and drives what kind of analyses can properly be performed on the specimen. It is frequently used in diagnostic work flow decision making systems.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Where the specimen came from. This may be from patient(s), from a location (e.g., the source of an environmental sample), or a sampling of a substance or a device.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Time when specimen was received for processing or testing.
     */
    receivedTime?: string | undefined;
    /**
     * Extended properties for primitive element: Specimen.receivedTime
     */
    _receivedTime?: fhir.FhirElement | undefined;
    /**
     * The parent specimen could be the source from which the current specimen is derived by some processing step (e.g. an aliquot or isolate or extracted nucleic acids from clinical samples) or one of many specimens that were combined to create a pooled sample.
     */
    parent?: fhir.Reference[] | undefined;
    /**
     * The request may be explicit or implied such with a ServiceRequest that requires a blood draw.
     */
    request?: fhir.Reference[] | undefined;
    /**
     * Details concerning the specimen collection.
     */
    collection?: fhir.SpecimenCollection | undefined;
    /**
     * Details concerning processing and processing steps for the specimen.
     */
    processing?: fhir.SpecimenProcessing[] | undefined;
    /**
     * The container holding the specimen.  The recursive nature of containers; i.e. blood in tube in tray in rack is not addressed here.
     */
    container?: fhir.SpecimenContainer[] | undefined;
    /**
     * Specimen condition is an observation made about the specimen.  It's a point-in-time assessment.  It can be used to assess its quality or appropriateness for a specific test.
     */
    condition?: fhir.CodeableConcept[] | undefined;
    /**
     * To communicate any details or issues about the specimen or during the specimen collection. (for example: broken vial, sent with patient, frozen).
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for Specimen - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ISpecimen>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): SpecimenStatusValueSetType;
    /**
     * Example-bound Value Set for type
     */
    static typeExampleValueSet(): V20487ValueSetType;
    /**
     * Extensible-bound Value Set for condition
     */
    static conditionExtensibleValueSet(): V20493ValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=Specimen.d.ts.map