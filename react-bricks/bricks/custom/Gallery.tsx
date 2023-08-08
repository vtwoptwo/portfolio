// Thumbnail.tsx
import React from 'react'
import { types, Text, RichText, Image, Repeater } from 'react-bricks/frontend'
import {  highlightTextColors } from '../../bricks/react-bricks-ui/colors'
import blockNames from '../../bricks/react-bricks-ui/blockNames'

const Gallery: types.Brick = () => {
    return (
        <div className="max-w-xl mx-auto px-3">
        <Repeater
          propName="badge"
          itemProps={{
            paddingtop: 10,
            textAlign: 'center',
          }}
          renderWrapper={(items) => <div className="mb-6">{items}</div>}
        />

            <div className='sm:grid grid-cols-3 gap-1'>
                <Repeater propName="thumbnails" />

            </div>
        </div>
    )
}

Gallery.schema ={
    name: 'gallery',
    label: 'Gallery',
    getDefaultProps: () => ({
        thumbnails:[],
        badge: [
            {
              text: 'high tech',
              badgeColor: highlightTextColors.GREEN.value,
            },
          ],


    }),
    repeaterItems:[
        {
        name: 'thumbnails',
        itemType:'thumbnail',
        itemLabel: 'Thumbnail',
        max: 9
        },
        {
            name: 'badge',
            itemType: blockNames.Badge,
            itemLabel: 'Badge',
            min: 0,
            max: 1,
          },
    ],
}
export default Gallery