import React from 'react'

import GlobalStyle from '../GlobalStyle'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  Home,
  HomeFilled,
  Books,
  BooksFilled,
  Clipboard,
  ClipboardFilled,
  Cog,
  CogFilled,
} from '../Icons'
import Page from './Page'

export default {
  title: 'Example/Page',
  component: Page,
}

const routes = [
  {
    path: '#',
    icon: Home,
    activeIcon: HomeFilled,
    label: 'Home',
  },
  {
    path: '#',
    icon: Clipboard,
    activeIcon: ClipboardFilled,
    label: 'Leave Management',
  },
  {
    path: '#',
    icon: Books,
    activeIcon: BooksFilled,
    label: 'Documents',
  },
  {
    path: '#',
    icon: Cog,
    activeIcon: CogFilled,
    label: 'Settings',
  },
]

const Template = () => (
  <>
    <GlobalStyle />
    <Header />
    <Page style={{ marginTop: '-3.5rem' }}>
      <SideBar>
        {routes.map(({ path, icon, activeIcon, label }, index) => (
          <SideBar.Item
            label={label}
            href={path}
            Icon={icon}
            ActiveIcon={activeIcon}
            active={index === 1}
          />
        ))}
      </SideBar>
      <Page.Content>Page Content</Page.Content>
    </Page>
  </>
)

export const Default = Template.bind({})
