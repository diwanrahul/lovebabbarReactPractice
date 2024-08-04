import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';


console.log(import.meta.env); 

export const client = createClient({
    projectId: "",
    dataset: "production",
    apiVersion: "2024-07-24",
    useCdn: false,
    token: "",
});

const builder = imageUrlBuilder(client);
console.log(builder.image())
export const urlFor = (source) => builder.image(source);
