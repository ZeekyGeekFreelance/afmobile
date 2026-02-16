export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: "price",
            title: "Price",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: "Accessories", value: "Accessories" },
                    { title: "Mobiles (Antique Pieces)", value: "Mobiles (Antique Pieces)" },
                    { title: "Services", value: "Services" },
                ],
            },
        },
        {
            name: "subcategory",
            title: "Subcategory",
            type: "string",
        },
        {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            },
        },
    ],
};
