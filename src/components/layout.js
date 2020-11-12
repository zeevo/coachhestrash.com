import React from "react"
import styled from "styled-components"
import "./layout.css"

const Container = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 0 1.0875rem 1.45rem;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

const Layout = ({ children }) => {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  )
}

export default Layout
