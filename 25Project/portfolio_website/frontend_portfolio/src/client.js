import imageUrlBuilder from '@sanity/image-url';
import { createClient } from '@sanity/client';


console.log(import.meta.env); 

export const client = createClient({
    projectId: "65an1aw3",
    dataset: "production",
    apiVersion: "2024-07-24",
    useCdn: false,
    token: "skA4YhUHGkxyQIqaOcaplvKa6eHfJwfi3mIr3z3YuaH7gIvita2zN4Bq2s8MubBJBvYxbZUmUDsToPpwWFyYhJpyQFiu6XZ82SmaijFRvbmbZmdySDmS6XQxuHLJC5a5EWf9AZhNc0FlcYHXONlFJ6YObnOsIeDPPYL1izCFO6rKOzFF4bLQ",
});

const builder = imageUrlBuilder(client);
console.log(builder.image())
export const urlFor = (source) => builder.image(source);
