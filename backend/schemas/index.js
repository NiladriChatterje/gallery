export const schemaTypes = [{
    name: 'images',
    title: 'Images',
    type: 'document',
    fields: [
        {
            title: 'ImageTitle',
            name: 'imageTitle',
            type: 'string'
        },
        {
            title: 'Gallery_image',
            name: 'galleryImage',
            type: 'image',
            options: {
                hotspot: true
            },
            validation: Rule => Rule.required()
        }
    ]
}, {
    name: 'credentials',
    title: 'Credentials',
    type: 'document',
    fields: [
        {
            name: 'password',
            title: 'Password',
            type: 'string'
        }
    ]
}];
