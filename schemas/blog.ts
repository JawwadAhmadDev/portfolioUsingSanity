export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
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
                {title: 'Code', value: 'code'}
              ]
            }
          },
          {
            type: 'image'
          }
        ]
      },
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
