import axios from "axios"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import TokenContext from "../context/TokenContext"

export default function Callback() {
  var setTokenData = useContext(TokenContext)[1]
  const navigate = useNavigate()

  const [searchParams] = useSearchParams()
  var code = searchParams.get("code")
  var state = searchParams.get("state")

  useEffect(
    function () {
      axios
        .post(
          "/.netlify/functions/token",
          JSON.stringify({
            code,
            state,
          })
        )
        .then((response) => {
          setTokenData(response.data)
          navigate("/");
          
        })
        .catch((error) => {
          console.log(error)
        })
    },
    [setTokenData, code, state]
  )

  return null
}
