import React from 'react'
import styled from 'styled-components'
import { Layout } from 'antd'
import { Navigator } from '../components/Nav'

import { GlobalStyle } from '../components/Design'

const { Content, Footer } = Layout

const CustomLayout = styled(Layout)`
  min-height: 100vh;
  background-color: #fafafa;
`

export const PageLayout: React.FunctionComponent = props => {
  return (
    <CustomLayout>
      <GlobalStyle />
      <Navigator />
      <Content style={{ marginTop: 64 }}>{props.children}</Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '#fafafa' }}>
        IPST ©2019 | Contribution: All the source code for this website is
        available on{' '}
        <a
          href="https://github.com/programming-in-th/programming.in.th"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </Footer>
    </CustomLayout>
  )
}
