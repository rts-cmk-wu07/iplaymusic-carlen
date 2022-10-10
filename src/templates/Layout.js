/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useContext } from "react"
import ColorContext from "../context/colorContext"
import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Player from "../comp/Player"
const Layout = () => {
  const colors = useContext(ColorContext)
  const styles = {
    bg: css`
      background: ${colors.bg};
    `,
  }
  return (
    <div className="h-screen flex flex-col justify-between">
      <Nav top={true} />
      <div css={styles.bg} className="h-screen overflow-auto">
        <Outlet />
      </div>
      <Player />
      <Nav />
    </div>
  )
}

export default Layout
