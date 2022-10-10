import querystring from "querystring"
import Randomizer from "react-randomizer"
import styled from "styled-components"

const Login = () => {
  var state = Randomizer.randomNumber(1, 999999999)
  var date = new Date()
  date = date.setSeconds(date.getSeconds() + 99)
  document.cookie = `state=${state}; expires=${date}`

  var parameters = querystring.stringify({
    response_type: "code",
    client_id: "b85facc3edf64b4dbe90078275075248",
    scope:
      "user-read-private user-read-email user-library-read user-library-modify user-top-read user-follow-read user-read-recently-played user-read-currently-playing user-read-playback-state user-modify-playback-state user-read-playback-position ",
    redirect_uri:
      process.env.NODE_ENV === "production"
        ? "https://iplaymusic-cmm.netlify.app/callback"
        : "http://localhost:8888/callback",

    state,
  })

  return (
    <Container>
      <a href={`https://accounts.spotify.com/authorize?${parameters}`}>
        Login to spotify
      </a>
    </Container>
  )
}
export default Login

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #341931;
  gap: 5 rem;
  img {
    height: 20vh;
  }
  a {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #ff1168;
    font-size: 1.4rem;
    cursor: pointer;
  }
`
