import { Coding } from '../fhir.js';
/**
 * How a property is represented when serialized.
 */
export declare const PropertyRepresentationValueSet: {
    /**
     * cdaText: Use CDA narrative instead of XHTML.
     */
    readonly CDATextFormat: Coding;
    /**
     * typeAttr: The type of this element is indicated using xsi:type.
     */
    readonly TypeAttribute: Coding;
    /**
     * xhtml: The property is represented using XHTML.
     */
    readonly XHTML: Coding;
    /**
     * xmlAttr: In XML, this property is represented as an attribute not an element.
     */
    readonly XMLAttribute: Coding;
    /**
     * xmlText: This element is represented using the XML text attribute (primitives only).
     */
    readonly XMLText: Coding;
};
/**
 * How a property is represented when serialized.
 */
export declare type PropertyRepresentationValueSetType = typeof PropertyRepresentationValueSet;
/**
 * How a property is represented when serialized.
 */
export declare enum PropertyRepresentationValueSetEnum {
    /**
     * cdaText: Use CDA narrative instead of XHTML.
     */
    CDATextFormat = "cdaText",
    /**
     * typeAttr: The type of this element is indicated using xsi:type.
     */
    TypeAttribute = "typeAttr",
    /**
     * xhtml: The property is represented using XHTML.
     */
    XHTML = "xhtml",
    /**
     * xmlAttr: In XML, this property is represented as an attribute not an element.
     */
    XMLAttribute = "xmlAttr",
    /**
     * xmlText: This element is represented using the XML text attribute (primitives only).
     */
    XMLText = "xmlText"
}
//# sourceMappingURL=PropertyRepresentationValueSet.d.ts.map