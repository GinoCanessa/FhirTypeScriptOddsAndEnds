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
//# sourceMappingURL=PropertyRepresentationValueSetEnum.d.ts.map