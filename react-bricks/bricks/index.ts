import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import reactBricksUITheme from './react-bricks-ui'
import Thumbnail from './custom/thumbnail'
import CurriculumDownload from './custom/displayFile'
import Gallery from './custom/Gallery'
import TimelineEvent from './custom/TimelineEvent'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [
          HeroUnit,
          Thumbnail,
          CurriculumDownload,
          Gallery,
          TimelineEvent,
        ], // Custom Bricks
      },
    ],
  },
]

export default bricks
