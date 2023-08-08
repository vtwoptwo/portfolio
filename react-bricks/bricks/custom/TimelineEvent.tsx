import React from 'react'
import { Text, types, Image, RichText } from 'react-bricks'
import {FaLinkedin} from 'react-icons/fa'
import { textColors } from '../react-bricks-ui/colors'
import { LayoutProps } from '../react-bricks-ui/LayoutSideProps'
import blockNames from '../react-bricks-ui/blockNames'
import classNames from 'classnames'



export interface TimelineItemProps extends LayoutProps {
    linkedin?: string
    hasShadow: boolean
    bgColor: types.IColor
}


const TimelineEvent: types.Brick<TimelineItemProps> = ({ 
    linkedin,
    hasShadow,
    bgColor,
    ...rest
 }) => {
  return (
    <div 
    {...rest}
    className={` text-center w-1/3 border rounded-lg ${
      hasShadow ? 'shadow-xl' : '' 

    } ${bgColor?.className}`}
    >
      <Text
        renderBlock={(props) => (
          <div
            className={classNames(
              'text-sm font-bold text-center min-w-[70px]',
              textColors.GRAY_800
            )}
          >
            {props.children}
          </div>
        )}
        placeholder="Name..."
        propName="companyName"
      />
      <Text
        renderBlock={(props) => (
          <div className="text-xs text-center text-gray-500 dark:text-white/70 min-w-[70px]">
            {props.children}
          </div>
        )}
        placeholder="Role..."
        propName="role"
      />
        <Text
        renderBlock={(props) => (
          <div className="text-xs text-center text-gray-500 dark:text-white/70 min-w-[70px]">
            {props.children}
          </div>
        )}
        placeholder="Description..."
        propName="description"
        />
        <Text
        renderBlock={(props) => (
          <div className="text-xs text-center text-gray-500 dark:text-white/70 min-w-[70px]">
            {props.children}
          </div>
        )}
        placeholder="Period..."
        propName="period"
        />


        {(linkedin) && (
            <div className="flex flex-row justify-center space-x-2 mt-2">
            {linkedin && (
                <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-600"
                >
                <FaLinkedin className="w-4 h-4" />
                </a>
            )}
            </div>
        )}
    </div>
  )
}

TimelineEvent.schema = {
  name: 'timeline-event',
  label: 'Timeline Event',
    category: 'timeline',
  getDefaultProps: () => (
    {
        companyName: 'Company Name',
        role: 'Role',
        description: 'Description',
        period: 'Period',
        linkedin: 'https://www.linkedin.com/in/username/',
    }
  ),
    sideEditProps: [
        {
          groupName: 'Social Links',
          defaultOpen: true,
          props: [
            {
              name: 'linkedin',
              label: 'Linkedin UserName',
              type: types.SideEditPropType.Text,
            },
          ],
        },
      ],
}


export default TimelineEvent;
