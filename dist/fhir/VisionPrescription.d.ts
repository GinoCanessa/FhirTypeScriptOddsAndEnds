import * as fhir from '../fhir';
/**
 * Allows for adjustment on two axis.
 */
export declare type IVisionPrescriptionLensSpecificationPrism = fhir.IBackboneElement & {
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount: number | null;
    _amount?: fhir.IFhirElement | undefined;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base: VisionPrescriptionLensSpecificationPrismBaseEnum | null;
    _base?: fhir.IFhirElement | undefined;
};
/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export declare type IVisionPrescriptionLensSpecification = fhir.IBackboneElement & {
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: number | undefined;
    _add?: fhir.IFhirElement | undefined;
    /**
     * The limits are +180 and -180 degrees.
     */
    axis?: number | undefined;
    _axis?: fhir.IFhirElement | undefined;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: number | undefined;
    _backCurve?: fhir.IFhirElement | undefined;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: string | undefined;
    _brand?: fhir.IFhirElement | undefined;
    /**
     * Special color or pattern.
     */
    color?: string | undefined;
    _color?: fhir.IFhirElement | undefined;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: number | undefined;
    _cylinder?: fhir.IFhirElement | undefined;
    /**
     * Contact lens diameter measured in millimetres.
     */
    diameter?: number | undefined;
    _diameter?: fhir.IFhirElement | undefined;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhir.IQuantity | undefined;
    /**
     * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
     */
    eye: VisionPrescriptionLensSpecificationEyeEnum | null;
    _eye?: fhir.IFhirElement | undefined;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: fhir.IAnnotation[] | undefined;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: number | undefined;
    _power?: fhir.IFhirElement | undefined;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: fhir.IVisionPrescriptionLensSpecificationPrism[] | undefined;
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.ICodeableConcept | null;
    /**
     * The value is negative for near-sighted and positive for far sighted.
     * Often insurance will not cover a lens with power between +75 and -75.
     */
    sphere?: number | undefined;
    _sphere?: fhir.IFhirElement | undefined;
};
/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export declare type IVisionPrescription = fhir.IDomainResource & {
    /**
     * Resource Type Name
     */
    resourceType: "VisionPrescription";
    /**
     * The date this resource was created.
     */
    created: string | null;
    _created?: fhir.IFhirElement | undefined;
    /**
     * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
     */
    dateWritten: string | null;
    _dateWritten?: fhir.IFhirElement | undefined;
    /**
     * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * A unique identifier assigned to this vision prescription.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
     */
    lensSpecification: fhir.IVisionPrescriptionLensSpecification[] | null;
    /**
     * A resource reference to the person to whom the vision prescription applies.
     */
    patient: fhir.IReference | null;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber: fhir.IReference | null;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: VisionPrescriptionStatusEnum | null;
    _status?: fhir.IFhirElement | undefined;
};
/**
 * Allows for adjustment on two axis.
 */
export declare class VisionPrescriptionLensSpecificationPrism extends fhir.BackboneElement implements fhir.IVisionPrescriptionLensSpecificationPrism {
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount: number | null;
    _amount?: fhir.FhirElement | undefined;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base: VisionPrescriptionLensSpecificationPrismBaseEnum | null;
    _base?: fhir.FhirElement | undefined;
    /**
     * Default constructor for VisionPrescriptionLensSpecificationPrism - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IVisionPrescriptionLensSpecificationPrism>);
    /**
     * Check if the current VisionPrescriptionLensSpecificationPrism contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a VisionPrescriptionLensSpecificationPrism from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IVisionPrescriptionLensSpecificationPrism): VisionPrescriptionLensSpecificationPrism;
}
/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export declare class VisionPrescriptionLensSpecification extends fhir.BackboneElement implements fhir.IVisionPrescriptionLensSpecification {
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: number | undefined;
    _add?: fhir.FhirElement | undefined;
    /**
     * The limits are +180 and -180 degrees.
     */
    axis?: number | undefined;
    _axis?: fhir.FhirElement | undefined;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: number | undefined;
    _backCurve?: fhir.FhirElement | undefined;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: string | undefined;
    _brand?: fhir.FhirElement | undefined;
    /**
     * Special color or pattern.
     */
    color?: string | undefined;
    _color?: fhir.FhirElement | undefined;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: number | undefined;
    _cylinder?: fhir.FhirElement | undefined;
    /**
     * Contact lens diameter measured in millimetres.
     */
    diameter?: number | undefined;
    _diameter?: fhir.FhirElement | undefined;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhir.Quantity | undefined;
    /**
     * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
     */
    eye: VisionPrescriptionLensSpecificationEyeEnum | null;
    _eye?: fhir.FhirElement | undefined;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: number | undefined;
    _power?: fhir.FhirElement | undefined;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: fhir.VisionPrescriptionLensSpecificationPrism[] | undefined;
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.CodeableConcept | null;
    /**
     * The value is negative for near-sighted and positive for far sighted.
     * Often insurance will not cover a lens with power between +75 and -75.
     */
    sphere?: number | undefined;
    _sphere?: fhir.FhirElement | undefined;
    /**
     * Default constructor for VisionPrescriptionLensSpecification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IVisionPrescriptionLensSpecification>);
    /**
     * Check if the current VisionPrescriptionLensSpecification contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a VisionPrescriptionLensSpecification from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IVisionPrescriptionLensSpecification): VisionPrescriptionLensSpecification;
}
/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export declare class VisionPrescription extends fhir.DomainResource implements fhir.IVisionPrescription {
    /**
     * Resource Type Name
     */
    resourceType: "VisionPrescription";
    /**
     * The date this resource was created.
     */
    created: string | null;
    _created?: fhir.FhirElement | undefined;
    /**
     * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
     */
    dateWritten: string | null;
    _dateWritten?: fhir.FhirElement | undefined;
    /**
     * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * A unique identifier assigned to this vision prescription.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
     */
    lensSpecification: fhir.VisionPrescriptionLensSpecification[] | null;
    /**
     * A resource reference to the person to whom the vision prescription applies.
     */
    patient: fhir.Reference | null;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber: fhir.Reference | null;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: VisionPrescriptionStatusEnum | null;
    _status?: fhir.FhirElement | undefined;
    /**
     * Default constructor for VisionPrescription - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IVisionPrescription>);
    /**
     * Check if the current VisionPrescription contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a VisionPrescription from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IVisionPrescription): VisionPrescription;
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
 * Code Values for the VisionPrescription.lensSpecification.eye field
 */
export declare enum VisionPrescriptionLensSpecificationEyeEnum {
    RIGHT = "right",
    LEFT = "left"
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