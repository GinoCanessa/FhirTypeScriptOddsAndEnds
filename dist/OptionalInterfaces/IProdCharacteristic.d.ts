import * as fhirInterfaces from '../optionalinterfaces';
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export interface IProdCharacteristic extends fhirInterfaces.IBackboneElement {
    /**
     * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    color?: string[] | undefined;
    _color?: fhirInterfaces.IElement[] | undefined;
    /**
     * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    depth?: fhirInterfaces.IQuantity | undefined;
    /**
     * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    externalDiameter?: fhirInterfaces.IQuantity | undefined;
    /**
     * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    height?: fhirInterfaces.IQuantity | undefined;
    /**
     * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
     */
    image?: fhirInterfaces.IAttachment[] | undefined;
    /**
     * Where applicable, the imprint can be specified as text.
     */
    imprint?: string[] | undefined;
    _imprint?: fhirInterfaces.IElement[] | undefined;
    /**
     * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    nominalVolume?: fhirInterfaces.IQuantity | undefined;
    /**
     * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    scoring?: fhirInterfaces.ICodeableConcept | undefined;
    /**
     * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    shape?: string | undefined;
    _shape?: fhirInterfaces.IElement | undefined;
    /**
     * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    weight?: fhirInterfaces.IQuantity | undefined;
    /**
     * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    width?: fhirInterfaces.IQuantity | undefined;
}
//# sourceMappingURL=IProdCharacteristic.d.ts.map