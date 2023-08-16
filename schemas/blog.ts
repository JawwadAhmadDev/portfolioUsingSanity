export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    // name
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    // content
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
            ],
          },
        },
        {
          type: 'image',
        },
      ],
    },
    // blog image
    {
        title: 'Blog Image',
        name: 'blogImage',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
        ]
      },
    // time
    {
      title: 'Created At',
      name: 'createdAt',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
  ],
}
