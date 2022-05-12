import * as fhir from '../fhir.js';
import { VisionBaseCodesValueSetType } from '../fhirValueSets/VisionBaseCodesValueSet.js';
import { VisionBaseCodesValueSetEnum } from '../valueSetEnums.js';
import { VisionProductValueSetType } from '../fhirValueSets/VisionProductValueSet.js';
import { VisionEyeCodesValueSetType } from '../fhirValueSets/VisionEyeCodesValueSet.js';
import { VisionEyeCodesValueSetEnum } from '../valueSetEnums.js';
import { FmStatusValueSetType } from '../fhirValueSets/FmStatusValueSet.js';
import { FmStatusValueSetEnum } from '../valueSetEnums.js';
/**
 * Valid arguments for the VisionPrescriptionLensSpecificationPrism type.
 */
export interface VisionPrescriptionLensSpecificationPrismArgs extends fhir.BackboneElementArgs {
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount: fhir.FhirDecimal | number | undefined;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base: VisionBaseCodesValueSetEnum | null;
}
/**
 * Allows for adjustment on two axis.
 */
export declare class VisionPrescriptionLensSpecificationPrism extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Amount of prism to compensate for eye alignment in fractional units.
     */
    amount: fhir.FhirDecimal | null;
    /**
     * The relative base, or reference lens edge, for the prism.
     */
    base: VisionBaseCodesValueSetEnum | null;
    /**
     * Default constructor for VisionPrescriptionLensSpecificationPrism - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<VisionPrescriptionLensSpecificationPrismArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for base
     */
    static baseRequiredValueSet(): VisionBaseCodesValueSetType;
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
 * Valid arguments for the VisionPrescriptionLensSpecification type.
 */
export interface VisionPrescriptionLensSpecificationArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.CodeableConceptArgs | null;
    /**
     * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
     */
    eye: VisionEyeCodesValueSetEnum | null;
    /**
     * The value is negative for near-sighted and positive for far sighted.
     * Often insurance will not cover a lens with power between +75 and -75.
     */
    sphere?: fhir.FhirDecimal | number | undefined;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: fhir.FhirDecimal | number | undefined;
    /**
     * The limits are +180 and -180 degrees.
     */
    axis?: fhir.FhirInteger | number | undefined;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: fhir.VisionPrescriptionLensSpecificationPrismArgs[] | undefined;
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: fhir.FhirDecimal | number | undefined;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: fhir.FhirDecimal | number | undefined;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: fhir.FhirDecimal | number | undefined;
    /**
     * Contact lens diameter measured in millimetres.
     */
    diameter?: fhir.FhirDecimal | number | undefined;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhir.QuantityArgs | undefined;
    /**
     * Special color or pattern.
     */
    color?: fhir.FhirString | string | undefined;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: fhir.FhirString | string | undefined;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
 */
export declare class VisionPrescriptionLensSpecification extends fhir.BackboneElement {
    readonly __dataType: string;
    /**
     * Identifies the type of vision correction product which is required for the patient.
     */
    product: fhir.CodeableConcept | null;
    /**
     * May also appear as OD (oculus dexter) for the right eye and OS (oculus siniter) for the left eye.
     */
    eye: VisionEyeCodesValueSetEnum | null;
    /**
     * The value is negative for near-sighted and positive for far sighted.
     * Often insurance will not cover a lens with power between +75 and -75.
     */
    sphere?: fhir.FhirDecimal | undefined;
    /**
     * Power adjustment for astigmatism measured in dioptres (0.25 units).
     */
    cylinder?: fhir.FhirDecimal | undefined;
    /**
     * The limits are +180 and -180 degrees.
     */
    axis?: fhir.FhirInteger | undefined;
    /**
     * Allows for adjustment on two axis.
     */
    prism?: fhir.VisionPrescriptionLensSpecificationPrism[] | undefined;
    /**
     * Power adjustment for multifocal lenses measured in dioptres (0.25 units).
     */
    add?: fhir.FhirDecimal | undefined;
    /**
     * Contact lens power measured in dioptres (0.25 units).
     */
    power?: fhir.FhirDecimal | undefined;
    /**
     * Back curvature measured in millimetres.
     */
    backCurve?: fhir.FhirDecimal | undefined;
    /**
     * Contact lens diameter measured in millimetres.
     */
    diameter?: fhir.FhirDecimal | undefined;
    /**
     * The recommended maximum wear period for the lens.
     */
    duration?: fhir.Quantity | undefined;
    /**
     * Special color or pattern.
     */
    color?: fhir.FhirString | undefined;
    /**
     * Brand recommendations or restrictions.
     */
    brand?: fhir.FhirString | undefined;
    /**
     * Notes for special requirements such as coatings and lens materials.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * Default constructor for VisionPrescriptionLensSpecification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<VisionPrescriptionLensSpecificationArgs>, options?: fhir.FhirConstructorOptions);
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
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
/**
 * Valid arguments for the VisionPrescription type.
 */
export interface VisionPrescriptionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "VisionPrescription" | undefined;
    /**
     * A unique identifier assigned to this vision prescription.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: FmStatusValueSetEnum | null;
    /**
     * The date this resource was created.
     */
    created: fhir.FhirDateTime | string | undefined;
    /**
     * A resource reference to the person to whom the vision prescription applies.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * A reference to a resource that identifies the particular occurrence of contact between patient and health care provider during which the prescription was issued.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Jurisdictions determine the valid lifetime of a prescription. Typically vision prescriptions are valid for two years from the date written.
     */
    dateWritten: fhir.FhirDateTime | string | undefined;
    /**
     * The healthcare professional responsible for authorizing the prescription.
     */
    prescriber: fhir.ReferenceArgs | null;
    /**
     * Contain the details of  the individual lens specifications and serves as the authorization for the fullfillment by certified professionals.
     */
    lensSpecification: fhir.VisionPrescriptionLensSpecificationArgs[] | null;
}
/**
 * An authorization for the provision of glasses and/or contact lenses to a patient.
 */
export declare class VisionPrescription extends fhir.DomainResource {
    readonly __dataType: string;
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
     * The date this resource was created.
     */
    created: fhir.FhirDateTime | null;
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
    dateWritten: fhir.FhirDateTime | null;
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
    constructor(source?: Partial<VisionPrescriptionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status
     */
    static statusRequiredValueSet(): FmStatusValueSetType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=VisionPrescription.d.ts.map