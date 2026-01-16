import { VariantEntry } from "../types";
import HeaderA from "../../sections/header/HeaderA";
import HeaderB from "../../sections/header/HeaderB";

export const headerRegistry: VariantEntry[] = [
    {
        id: "header.a",
        section: "header",
        name: "Header A",
        description: "Logo left, nav center, CTA button right",
        Component: HeaderA,
        schema: {
            brand: {
                type: "string",
                default: "Promake",
            },
            buttonText: {
                type: "string",
                default: "Get Started",
            },
            navLinks: {
            type: "array",
            description: "Navigation links in the header",
            default: [
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
            ],
            items: {
                type: "object",
                properties: {
                    label: { type: "string", default: "Link" },
                    href: { type: "string", default: "#section" },
                },
            },
        },
        }
    },
    {
        id: "header.b",
        section: "header",
        name: "Header B",
        description: "Brand left, auth actions right",
        Component: HeaderB,
        schema: {
            brand: { type: "string", default: "Promake" },
        },
    },
];