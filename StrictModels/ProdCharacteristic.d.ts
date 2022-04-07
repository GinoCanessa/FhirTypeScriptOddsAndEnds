import * as fhirModels from '../strictmodels';
import * as fhirInterfaces from '../strictinterfaces';
/**
 * The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.
 */
export declare class ProdCharacteristic extends fhirModels.BackboneElement implements fhirInterfaces.IProdCharacteristic {
    /**
     * Where applicable, the color can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    color?: string[] | undefined;
    _color?: fhirModels.Element[] | undefined;
    /**
     * Where applicable, the depth can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    depth?: fhirModels.Quantity | undefined;
    /**
     * Where applicable, the external diameter can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    externalDiameter?: fhirModels.Quantity | undefined;
    /**
     * Where applicable, the height can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    height?: fhirModels.Quantity | undefined;
    /**
     * Where applicable, the image can be provided The format of the image attachment shall be specified by regional implementations.
     */
    image?: fhirModels.Attachment[] | undefined;
    /**
     * Where applicable, the imprint can be specified as text.
     */
    imprint?: string[] | undefined;
    _imprint?: fhirModels.Element[] | undefined;
    /**
     * Where applicable, the nominal volume can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    nominalVolume?: fhirModels.Quantity | undefined;
    /**
     * Where applicable, the scoring can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    scoring?: fhirModels.CodeableConcept | undefined;
    /**
     * Where applicable, the shape can be specified An appropriate controlled vocabulary shall be used The term and the term identifier shall be used.
     */
    shape?: string | undefined;
    _shape?: fhirModels.Element | undefined;
    /**
     * Where applicable, the weight can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    weight?: fhirModels.Quantity | undefined;
    /**
     * Where applicable, the width can be specified using a numerical value and its unit of measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    width?: fhirModels.Quantity | undefined;
    /**
     * Default constructor for ProdCharacteristic from an object that MAY NOT contain all required elements.
     */
    constructor(source: fhirInterfaces.IProdCharacteristic);
}
//# sourceMappingURL=ProdCharacteristic.d.ts.map