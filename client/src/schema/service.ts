export default {
    name: "service",
    title: "Service",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "price",
            title: "Price (Starting from)",
            type: "string",
        },
        {
            name: "icon",
            title: "Icon Name",
            type: "string",
            description: "Lucide icon name (e.g., 'Wifi', 'Zap', 'Smartphone')",
        },
        {
            name: "issues",
            title: "Common Issues",
            type: "array",
            of: [{ type: "string" }],
        },
    ],
};
