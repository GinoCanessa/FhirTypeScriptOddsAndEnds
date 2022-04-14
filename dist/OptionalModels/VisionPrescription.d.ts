import * as fhirModels from '../optionalmodels';
import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Allows for adjustment on two axis.
 */
export declare class VisionPrescriptionLensSpecificationPrism extends fhirModels.BackboneElement implements fhirInterfaces.IVisionPrescriptionLensSpecificationPrism {
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount?: number | undefined;
    _amount?: fhirModels.Element | undefined;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base?: VisionPrescriptionLensSpecificationPrismBaseEnum | undefined;
    _base?: fhirModels.Element | undefined;
    /**
     * Default constructor for VisionPrescriptionLensSpecificationPrism from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IVisionPrescriptionLensSpecificationPrism>);
    /**
     * Factory function to create a VisionPrescriptionLensSpecificationPrism from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IVisionPrescriptionLensSpecificationPrism): VisionPrescriptionLensSpecificationPrism;
    /**
     * Check if the current VisionPrescriptionLensSpecificationPrism contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the VisionPrescription.lensSpecification.prism.base field
 */
export declare enum VisionPrescriptionLensSpecificationPrismBaseEnum {
    UP = "up",
    DOWN = "down",
    IN = "in",
    OUT = "out"
}
/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export declare class VisionPrescriptionLensSpecification extends fhirModels.BackboneElement implements fhirInterfaces.IVisionPrescriptionLensSpecification {
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: number | undefined;
    _add?: fhirModels.Element | undefined;
    /**
     * The limits are +180 and -180 degrees.
     */
    axis?: number | undefined;
    _axis?: fhirModels.Element | undefined;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: number | undefined;
    _backCurve?: fhirModels.Element | undefined;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: string | undefined;
    _brand?: fhirModels.Element | undefined;
    /**
     * Special color or pattern.
     */
    color?: string | undefined;
    _color?: fhirModels.Element | undefined;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: number | undefined;
    _cylinder?: fhirModels.Element | undefined;
    /**
     * Contact lens diameter measured in millimetres.
     */
    diameter?: number | undefined;
    _diameter?: fhirModels.Element | undefined;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhirModels.Quantity | undefined;
    /**
     * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
     */
    eye?: VisionPrescriptionLensSpecificationEyeEnum | undefined;
    _eye?: fhirModels.Element | undefined;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: fhirModels.Annotation[] | undefined;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: number | undefined;
    _power?: fhirModels.Element | undefined;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: fhirModels.VisionPrescriptionLensSpecificationPrism[] | undefined;
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product?: fhirModels.CodeableConcept | undefined;
    /**
     * The value is negative for near-sighted and positive for far sighted.
     * Often insurance will not cover a lens with power between +75 and -75.
     */
    sphere?: number | undefined;
    _sphere?: fhirModels.Element | undefined;
    /**
     * Default constructor for VisionPrescriptionLensSpecification from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IVisionPrescriptionLensSpecification>);
    /**
     * Factory function to create a VisionPrescriptionLensSpecification from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IVisionPrescriptionLensSpecification): VisionPrescriptionLensSpecification;
    /**
     * Check if the current VisionPrescriptionLensSpecification contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the VisionPrescription.lensSpecification.eye field
 */
export declare enum VisionPrescriptionLensSpecificationEyeEnum {
    RIGHT = "right",
    LEFT = "left"
}
/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export declare class VisionPrescription extends fhirModels.DomainResource implements fhirInterfaces.IVisionPrescription {
    /**
     * Resource Type Name
     */
    readonly resourceType = "VisionPrescription";
    /**
     * The date this resource was created.
     */
    created?: string | undefined;
    _created?: fhirModels.Element | undefined;
    /**
     * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
     */
    dateWritten?: string | undefined;
    _dateWritten?: fhirModels.Element | undefined;
    /**
     * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
     */
    encounter?: fhirModels.Reference | undefined;
    /**
     * A unique identifier assigned to this vision prescription.
     */
    identifier?: fhirModels.Identifier[] | undefined;
    /**
     * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
     */
    lensSpecification?: fhirModels.VisionPrescriptionLensSpecification[] | undefined;
    /**
     * A resource reference to the person to whom the vision prescription applies.
     */
    patient?: fhirModels.Reference | undefined;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber?: fhirModels.Reference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: VisionPrescriptionStatusEnum | undefined;
    _status?: fhirModels.Element | undefined;
    /**
     * Default constructor for VisionPrescription from an object that MAY NOT contain all required elements.
     */
    constructor(source: Partial<fhirInterfaces.IVisionPrescription>);
    /**
     * Factory function to create a VisionPrescription from an object that MUST contain all required elements.
     */
    static CreateStrict(source: fhirInterfaces.IVisionPrescription): VisionPrescription;
    /**
     * Check if the current VisionPrescription contains all required elements.
     */
    checkRequiredElements(): string[];
}
/**
 * Code Values for the VisionPrescription.status field
 */
export declare enum VisionPrescriptionStatusEnum {
    ACTIVE = "active",
    CANCELLED = "cancelled",
    DRAFT = "draft",
    ENTERED_IN_ERROR = "entered-in-error"
}
//# sourceMappingURL=VisionPrescription.d.ts.map