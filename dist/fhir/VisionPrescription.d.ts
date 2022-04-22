import * as fhir from '../fhir.js';
import { VisionBaseCodesValueSetType, VisionBaseCodesValueSetEnum } from '../fhirValueSets/VisionBaseCodesValueSet.js';
import { VisionProductValueSetType } from '../fhirValueSets/VisionProductValueSet.js';
import { VisionEyeCodesValueSetType, VisionEyeCodesValueSetEnum } from '../fhirValueSets/VisionEyeCodesValueSet.js';
import { FmStatusValueSetType, FmStatusValueSetEnum } from '../fhirValueSets/FmStatusValueSet.js';
/**
 * Allows for adjustment on two axis.
 */
export declare type IVisionPrescriptionLensSpecificationPrism = fhir.IBackboneElement & {
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount: number | null;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.prism.amount
     */
    _amount?: fhir.IFhirElement | undefined;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base: VisionBaseCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.prism.base
     */
    _base?: fhir.IFhirElement | undefined;
};
/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export declare type IVisionPrescriptionLensSpecification = fhir.IBackboneElement & {
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.ICodeableConcept | null;
    /**
     * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
     */
    eye: VisionEyeCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.eye
     */
    _eye?: fhir.IFhirElement | undefined;
    /**
     * The value is negative for near-sighted and positive for far sighted.
     * Often insurance will not cover a lens with power between +75 and -75.
     */
    sphere?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.sphere
     */
    _sphere?: fhir.IFhirElement | undefined;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.cylinder
     */
    _cylinder?: fhir.IFhirElement | undefined;
    /**
     * The limits are +180 and -180 degrees.
     */
    axis?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.axis
     */
    _axis?: fhir.IFhirElement | undefined;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: fhir.IVisionPrescriptionLensSpecificationPrism[] | undefined;
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.add
     */
    _add?: fhir.IFhirElement | undefined;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.power
     */
    _power?: fhir.IFhirElement | undefined;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.backCurve
     */
    _backCurve?: fhir.IFhirElement | undefined;
    /**
     * Contact lens diameter measured in millimetres.
     */
    diameter?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.diameter
     */
    _diameter?: fhir.IFhirElement | undefined;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhir.IQuantity | undefined;
    /**
     * Special color or pattern.
     */
    color?: string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.color
     */
    _color?: fhir.IFhirElement | undefined;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.brand
     */
    _brand?: fhir.IFhirElement | undefined;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: fhir.IAnnotation[] | undefined;
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
     * A unique identifier assigned to this vision prescription.
     */
    identifier?: fhir.IIdentifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: VisionPrescription.status
     */
    _status?: fhir.IFhirElement | undefined;
    /**
     * The date this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: VisionPrescription.created
     */
    _created?: fhir.IFhirElement | undefined;
    /**
     * A resource reference to the person to whom the vision prescription applies.
     */
    patient: fhir.IReference | null;
    /**
     * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
     */
    encounter?: fhir.IReference | undefined;
    /**
     * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
     */
    dateWritten: string | null;
    /**
     * Extended properties for primitive element: VisionPrescription.dateWritten
     */
    _dateWritten?: fhir.IFhirElement | undefined;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber: fhir.IReference | null;
    /**
     * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
     */
    lensSpecification: fhir.IVisionPrescriptionLensSpecification[] | null;
};
/**
 * Allows for adjustment on two axis.
 */
export declare class VisionPrescriptionLensSpecificationPrism extends fhir.BackboneElement implements IVisionPrescriptionLensSpecificationPrism {
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount: number | null;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.prism.amount
     */
    _amount?: fhir.FhirElement | undefined;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base: VisionBaseCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.prism.base
     */
    _base?: fhir.FhirElement | undefined;
    /**
     * Default constructor for VisionPrescriptionLensSpecificationPrism - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IVisionPrescriptionLensSpecificationPrism>);
    /**
     * Required-bound Value Set for base
     */
    static baseRequiredValueSet(): VisionBaseCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export declare class VisionPrescriptionLensSpecification extends fhir.BackboneElement implements IVisionPrescriptionLensSpecification {
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.CodeableConcept | null;
    /**
     * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
     */
    eye: VisionEyeCodesValueSetEnum | null;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.eye
     */
    _eye?: fhir.FhirElement | undefined;
    /**
     * The value is negative for near-sighted and positive for far sighted.
     * Often insurance will not cover a lens with power between +75 and -75.
     */
    sphere?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.sphere
     */
    _sphere?: fhir.FhirElement | undefined;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.cylinder
     */
    _cylinder?: fhir.FhirElement | undefined;
    /**
     * The limits are +180 and -180 degrees.
     */
    axis?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.axis
     */
    _axis?: fhir.FhirElement | undefined;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: fhir.VisionPrescriptionLensSpecificationPrism[] | undefined;
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.add
     */
    _add?: fhir.FhirElement | undefined;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.power
     */
    _power?: fhir.FhirElement | undefined;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.backCurve
     */
    _backCurve?: fhir.FhirElement | undefined;
    /**
     * Contact lens diameter measured in millimetres.
     */
    diameter?: number | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.diameter
     */
    _diameter?: fhir.FhirElement | undefined;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhir.Quantity | undefined;
    /**
     * Special color or pattern.
     */
    color?: string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.color
     */
    _color?: fhir.FhirElement | undefined;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: string | undefined;
    /**
     * Extended properties for primitive element: VisionPrescription.lensSpecification.brand
     */
    _brand?: fhir.FhirElement | undefined;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for VisionPrescriptionLensSpecification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IVisionPrescriptionLensSpecification>);
    /**
     * Example-bound Value Set for product
     */
    static productExampleValueSet(): VisionProductValueSetType;
    /**
     * Required-bound Value Set for eye
     */
    static eyeRequiredValueSet(): VisionEyeCodesValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export declare class VisionPrescription extends fhir.DomainResource implements IVisionPrescription {
    /**
     * Resource Type Name
     */
    resourceType: "VisionPrescription";
    /**
     * A unique identifier assigned to this vision prescription.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * Extended properties for primitive element: VisionPrescription.status
     */
    _status?: fhir.FhirElement | undefined;
    /**
     * The date this resource was created.
     */
    created: string | null;
    /**
     * Extended properties for primitive element: VisionPrescription.created
     */
    _created?: fhir.FhirElement | undefined;
    /**
     * A resource reference to the person to whom the vision prescription applies.
     */
    patient: fhir.Reference | null;
    /**
     * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
     */
    dateWritten: string | null;
    /**
     * Extended properties for primitive element: VisionPrescription.dateWritten
     */
    _dateWritten?: fhir.FhirElement | undefined;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber: fhir.Reference | null;
    /**
     * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
     */
    lensSpecification: fhir.VisionPrescriptionLensSpecification[] | null;
    /**
     * Default constructor for VisionPrescription - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IVisionPrescription>);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=VisionPrescription.d.ts.map