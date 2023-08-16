export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    // name
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    // about
    {
      name: 'about',
      type: 'string',
      title: 'About',
    },
    // picture
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
