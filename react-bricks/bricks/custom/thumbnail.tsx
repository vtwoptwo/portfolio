// Thumbnail.tsx
import React from 'react'
import { types, Text, RichText, Image } from 'react-bricks/frontend'

interface ThumbnailProps {
  hasShadow: boolean
  bgColor: types.IColor
}

const Thumbnail: types.Brick<ThumbnailProps> = ({ 
  hasShadow,
  bgColor,
  ...rest
}) => {
  return (
    <div 
    {...rest}
    className={`my-6 mx-2 p-2 text-center w-1/7 border rounded-lg dark:border-white/10 bg-white dark:bg-white/10 rounded ${
      hasShadow ? 'shadow-xl' : '' 

    } ${bgColor?.className}`}
    >
      <Image 
        propName='image'
        alt="Fallback alt tag"
        maxWidth={300}
        imageClassName="mb-6 rounded-lg"
        renderWrapper={({children, width, height}) => (
          <div className="wrapper">
              {children}
              </div>
        )}
        />
        <Text 
            propName="title"
            renderBlock={({ children }) => 
            <h1 className="text-lg font-bold">{children}</h1>}
            placeholder="Type a title..."
    // multiline = {False}
    // softLineBreak = {false} : boolean
    />
    <RichText 
      propName="description"
      renderBlock ={ ({ children}) => (
      <p className="text-lg text-gray-500">{children}</p>
  )}
    placeholder="Type a description"
    allowedFeatures={[
      types.RichTextFeatures.Bold,
      types.RichTextFeatures.Highlight,

    ]}
    renderHighlight={({children }) => (
      <span className="px-1 rounded bg-purple-200 text-purple-900">
        {children}
      </span>
    )}
    />
    </div>
  )
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  hideFromAddMenu:true,
  getDefaultProps: () => ({
    title: 'Hello, World!',
    description: 'Lorem ipsum dolor sit amet.',
    hasShadow: true,
    bgColor: {color: '#22c55ee', className: 'bg-white'}

  }),
  sideEditProps: [
    {
      name: 'hasShadow',
      label: 'Shadow', 
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'bgColor',
      label: 'Background',
      type: types.SideEditPropType.Select,
      selectOptions:{
        display: types.OptionsDisplay.Color,
        options: [
          {
          label: 'White',
          value: {color: '#ffffff', className: 'bg-white'},
        },
        {
          label: 'Green', 
          value: {color: '#22c55e', className: 'bg-green-50'},
        }

        ]
      }
    }
  ],
}

export default Thumbnail