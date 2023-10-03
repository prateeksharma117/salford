import {auth} from "express-oauth2-jwt-bearer"

const jwtCheck=auth({
    audience:"http://localhost:9000",
    issuerBaseURL:"https://dev-4e575epidzp0fo5r.jp.auth0.com",
    tokenSigningAlg:"RS256",
})

export default jwtCheck