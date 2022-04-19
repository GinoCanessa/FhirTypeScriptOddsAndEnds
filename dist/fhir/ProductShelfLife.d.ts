import * as fhir from '../fhir';
/**
 * The shelf-life and storage information for a medicinal product item or container can be described using this class.
 */
export declare type IProductShelfLife = fhir.IBackboneElement & {
    /**
     * Unique identifier for the packaged Medicinal Product.
     */
    identifier?: fhir.IIdentifier | undefined;
    /**
     * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    period: fhir.IQuantity | null;
    /**
     * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.
     */
    specialPrecautionsForStorage?: fhir.ICodeableConcept[] | undefined;
    /**
     * This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.
     */
    type: fhir.ICodeableConcept | null;
};
/**
 * The shelf-life and storage information for a medicinal product item or container can be described using this class.
 */
export declare class ProductShelfLife extends fhir.BackboneElement implements fhir.IProductShelfLife {
    /**
     * Unique identifier for the packaged Medicinal Product.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    period: fhir.Quantity | null;
    /**
     * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.
     */
    specialPrecautionsForStorage?: fhir.CodeableConcept[] | undefined;
    /**
     * This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Default constructor for ProductShelfLife - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<fhir.IProductShelfLife>);
    /**
     * Check if the current ProductShelfLife contains all required elements.
     */
    CheckRequiredElements(): string[];
    /**
     * Factory function to create a ProductShelfLife from an object that MUST contain all required elements.
     */
    static FromStrict(source: fhir.IProductShelfLife): ProductShelfLife;
}
//# sourceMappingURL=ProductShelfLife.d.ts.map