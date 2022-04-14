import * as fhirInterfaces from '../optionalinterfaces';
/**
 * Allows for adjustment on two axis.
 */
export interface IVisionPrescriptionLensSpecificationPrism extends fhirInterfaces.IBackboneElement {
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount?: number | undefined;
    _amount?: fhirInterfaces.IElement | undefined;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base?: VisionPrescriptionLensSpecificationPrismBaseEnum | undefined;
    _base?: fhirInterfaces.IElement | undefined;
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
export interface IVisionPrescriptionLensSpecification extends fhirInterfaces.IBackboneElement {
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: number | undefined;
    _add?: fhirInterfaces.IElement | undefined;
    /**
     * The limits are +180 and -180 degrees.
     */
    axis?: number | undefined;
    _axis?: fhirInterfaces.IElement | undefined;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: number | undefined;
    _backCurve?: fhirInterfaces.IElement | undefined;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: string | undefined;
    _brand?: fhirInterfaces.IElement | undefined;
    /**
     * Special color or pattern.
     */
    color?: string | undefined;
    _color?: fhirInterfaces.IElement | undefined;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: number | undefined;
    _cylinder?: fhirInterfaces.IElement | undefined;
    /**
     * Contact lens diameter measured in millimetres.
     */
    diameter?: number | undefined;
    _diameter?: fhirInterfaces.IElement | undefined;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhirInterfaces.IQuantity | undefined;
    /**
     * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
     */
    eye?: VisionPrescriptionLensSpecificationEyeEnum | undefined;
    _eye?: fhirInterfaces.IElement | undefined;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: fhirInterfaces.IAnnotation[] | undefined;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: number | undefined;
    _power?: fhirInterfaces.IElement | undefined;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: fhirInterfaces.IVisionPrescriptionLensSpecificationPrism[] | undefined;
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * The value is negative for near-sighted and positive for far sighted.
     * Often insurance will not cover a lens with power between +75 and -75.
     */
    sphere?: number | undefined;
    _sphere?: fhirInterfaces.IElement | undefined;
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
export interface IVisionPrescription extends fhirInterfaces.IDomainResource {
    /**
     * Resource Type Name
     */
    readonly resourceType: "VisionPrescription";
    /**
     * The date this resource was created.
     */
    created?: string | undefined;
    _created?: fhirInterfaces.IElement | undefined;
    /**
     * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
     */
    dateWritten?: string | undefined;
    _dateWritten?: fhirInterfaces.IElement | undefined;
    /**
     * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
     */
    encounter?: fhirInterfaces.IReference | undefined;
    /**
     * A unique identifier assigned to this vision prescription.
     */
    identifier?: fhirInterfaces.IIdentifier[] | undefined;
    /**
     * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
     */
    lensSpecification?: fhirInterfaces.IVisionPrescriptionLensSpecification[] | undefined;
    /**
     * A resource reference to the person to whom the vision prescription applies.
     */
    patient?: fhirInterfaces.IReference | undefined;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber?: fhirInterfaces.IReference | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: VisionPrescriptionStatusEnum | undefined;
    _status?: fhirInterfaces.IElement | undefined;
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
//# sourceMappingURL=IVisionPrescription.d.ts.map