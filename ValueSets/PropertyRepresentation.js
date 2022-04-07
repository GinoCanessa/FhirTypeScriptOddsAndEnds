/**
 * How a property is represented when serialized.
 */
export var PropertyRepresentation = {
    /**
     * Use CDA narrative instead of XHTML.
     */
    property_representation_CDATextFormat: {
        code: "cdaText",
        display: "CDA Text Format",
        system: "http://hl7.org/fhir/property-representation"
    },
    /**
     * The type of this element is indicated using xsi:type.
     */
    property_representation_TypeAttribute: {
        code: "typeAttr",
        display: "Type Attribute",
        system: "http://hl7.org/fhir/property-representation"
    },
    /**
     * The property is represented using XHTML.
     */
    property_representation_XHTML: {
        code: "xhtml",
        display: "XHTML",
        system: "http://hl7.org/fhir/property-representation"
    },
    /**
     * In XML, this property is represented as an attribute not an element.
     */
    property_representation_XMLAttribute: {
        code: "xmlAttr",
        display: "XML Attribute",
        system: "http://hl7.org/fhir/property-representation"
    },
    /**
     * This element is represented using the XML text attribute (primitives only).
     */
    property_representation_XMLText: {
        code: "xmlText",
        display: "XML Text",
        system: "http://hl7.org/fhir/property-representation"
    }
};
