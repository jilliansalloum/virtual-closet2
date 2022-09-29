// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'blog',
      type: 'document',
      title: 'Post',
      fields: [
        {
          name: 'item',
          type: 'string',
          title: 'Item'
        },
        {
          name: 'brand',
          type: 'string',
          title: 'Brand'
        },
        {
          name: 'season',
          type: 'string',
          title: 'Season'
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true
          }

        }
      ]
    }
  ]),
})
