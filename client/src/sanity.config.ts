import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schema";

export default defineConfig({
    name: "default",
    title: "Sales Portfolio Admin",
    projectId: "a9zl3y8w",
    dataset: "production",
    basePath: "/studio",
    plugins: [structureTool()],
    schema: {
        types: schemaTypes,
    },
});
