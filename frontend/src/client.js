import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'zmsd47i3',
    dataset: 'production',
    apiVersion: '2023-05-01',
    useCdn: true,
    token: `${import.meta.env.VITE_REACT_APP_SANITY_TOKEN}`
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);