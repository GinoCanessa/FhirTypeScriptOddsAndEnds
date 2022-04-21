import * as fhir from '../fhir.js';
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export declare type IProdCharacteristic = fhir.IBackboneElement & {
    /**
     * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    height?: fhir.IQuantity | undefined;
    /**
     * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    width?: fhir.IQuantity | undefined;
    /**
     * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    depth?: fhir.IQuantity | undefined;
    /**
     * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    weight?: fhir.IQuantity | undefined;
    /**
     * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    nominalVolume?: fhir.IQuantity | undefined;
    /**
     * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    externalDiameter?: fhir.IQuantity | undefined;
    /**
     * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    shape?: string | undefined;
    /**
     * Extended properties for primitive element: ProdCharacteristic.shape
     */
    _shape?: fhir.IFhirElement | undefined;
    /**
     * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    color?: string[] | undefined;
    /**
     * Extended properties for primitive element: ProdCharacteristic.color
     */
    _color?: fhir.IFhirElement[] | undefined;
    /**
     * Where applicable, the imprint can be specified as text.
     */
    imprint?: string[] | undefined;
    /**
     * Extended properties for primitive element: ProdCharacteristic.imprint
     */
    _imprint?: fhir.IFhirElement[] | undefined;
    /**
     * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
     */
    image?: fhir.IAttachment[] | undefined;
    /**
     * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    scoring?: fhir.ICodeableConcept | undefined;
};
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export declare class ProdCharacteristic extends fhir.BackboneElement implements IProdCharacteristic {
    /**
     * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    height?: fhir.Quantity | undefined;
    /**
     * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    width?: fhir.Quantity | undefined;
    /**
     * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    depth?: fhir.Quantity | undefined;
    /**
     * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    weight?: fhir.Quantity | undefined;
    /**
     * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    nominalVolume?: fhir.Quantity | undefined;
    /**
     * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    externalDiameter?: fhir.Quantity | undefined;
    /**
     * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    shape?: string | undefined;
    /**
     * Extended properties for primitive element: ProdCharacteristic.shape
     */
    _shape?: fhir.FhirElement | undefined;
    /**
     * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    color?: string[] | undefined;
    /**
     * Extended properties for primitive element: ProdCharacteristic.color
     */
    _color?: fhir.FhirElement[] | undefined;
    /**
     * Where applicable, the imprint can be specified as text.
     */
    imprint?: string[] | undefined;
    /**
     * Extended properties for primitive element: ProdCharacteristic.imprint
     */
    _imprint?: fhir.FhirElement[] | undefined;
    /**
     * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
     */
    image?: fhir.Attachment[] | undefined;
    /**
     * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    scoring?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for ProdCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IProdCharacteristic>);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): [string, string][];
}
//# sourceMappingURL=ProdCharacteristic.d.ts.map