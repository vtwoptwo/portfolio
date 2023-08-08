import Router from 'next/router'
import { types } from 'react-bricks/frontend'

import NextLink from './NextLink'
import bricks from './bricks'
import pageTypes from './pageTypes'


const config: types.ReactBricksConfig = {
  appId: process.env.NEXT_PUBLIC_APP_ID,
  apiKey: process.env.API_KEY,
  bricks,
  pageTypes,
  customFields: [],
  logo: '/logo.png',
  loginUI: {
    sideImage: '/logo.png',
    welcomeText: 'Welcome back Vera!',
    welcomeTextStyle: {padding: '10px'},
    logo: '/favicon.ico',
    logoHeight:20,},
  contentClassName: '',
  //defaultTheme: "",
  renderLocalLink: NextLink,
  navigate: (path: string) => Router.push(path),
  loginPath: '/admin',
  editorPath: '/admin/editor',
  playgroundPath: '/admin/playground',
  appSettingsPath: '/admin/app-settings',
  previewPath: '/preview',
  // getAdminMenu: () => [],
  isDarkColorMode: false,
  toggleColorMode: () => {},
  useCssInJs: true,
  appRootElement: '#__next',
  clickToEditSide: types.ClickToEditSide.None, // turning off ability to edit
  //responsiveBreakpoints: [{ type: types.DeviceType.Phone, width: 480, label: "Smartphone" },],
  enableAutoSave: true,
  disableSaveIfInvalidProps: false,
  enablePreview: true,
  blockIconsPosition: types.BlockIconsPosition.OutsideBlock,
  enableUnsplash: true,
  unsplashApiKey: '',
  enablePreviewImage: true,
  enableDefaultEmbedBrick: true,
  //permissions,  Fine-grained permissions for enterprise plans
}

export default config
