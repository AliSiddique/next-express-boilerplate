"use client"
import React, { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../../firebase.config"
import { useIdToken } from "react-firebase-hooks/auth"
import { useState } from "react"
import axios from "axios"

type Props = {}

export default function page({}: Props) {
    // const [user] = useAuthState(auth)
    // console.log(user)
    // const [userId, loading, error] = useIdToken(auth)
    // const [tokeniD, setTokenId] = useState("")
    // console.log("from useidotken firebase hooks " + userId?.getIdToken)
    // if (!loading && !error && userId) {
    //     auth?.currentUser
    //         ?.getIdToken(/* forceRefresh: boolean */ false)
    //         .then((idToken: string) => {
    //             console.log("id token is: " + idToken) // Access the Firebase authentication token
    //             setTokenId(idToken)

    //             // You can use the token for further operations or send it to the backend
    //         })
    //         .catch((error: any) => {
    //             console.error("Error getting token:", error)
    //         })
    // }
    // console.log("token id is: " + tokeniD)
    // const sendToken = async () => {
    //     try {
    //         const token =
    //             "eyJhbGciOiJSUzI1NiIsImtpZCI6ImIyZGZmNzhhMGJkZDVhMDIyMTIwNjM0OTlkNzdlZjRkZWVkMWY2NWIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWVybi10eXBlc2NyaXB0LWVkdSIsImF1ZCI6Im1lcm4tdHlwZXNjcmlwdC1lZHUiLCJhdXRoX3RpbWUiOjE2OTAxMjkyOTIsInVzZXJfaWQiOiJCd2xSQkszR2VJYXJCRlFKSHdSOVgwcjNya2cxIiwic3ViIjoiQndsUkJLM0dlSWFyQkZRSkh3UjlYMHIzcmtnMSIsImlhdCI6MTY5MDEyOTI5MiwiZXhwIjoxNjkwMTMyODkyLCJlbWFpbCI6ImFsaXNpZGRpcXVlMTBAaG90bWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiYWxpc2lkZGlxdWUxMEBob3RtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.QSKqb_iWqh_YIgwxP7IYiv_U--JfIRwunSL5ASJnrPxGK0iFK8HQEB3dK6s_Ttb-dnEgSth8lIxbY641YgpDF__e8LXqY5rrp5EB3WEeUOmLcQNzqwTfEPBZt24cjE1k6DraGZqLKFcS6ptxc6ithrydxwakC3a2EDTlwzK6_wswr_MnWhNBIhMuCLF951G7fl26CTspTWvlin3-HC0LJTuW9dBtbjFFa5r-fWOtXcpCP7fopSBMeluEVS3htBwKrSB_QY3jNQBqd7g_71M2Wxsr3wlgyKjmgIkPBW0IwKwEmVeVqGk342eGhKdfr2eBNNsq8SE_Na48LN7B6deJnw"

    //         const res = await axios.get("http://localhost:4000/protected", {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //                 refreshtoken: `Refresh AMf-vBxQbQDSAyu4ZsFRPY6MYMpHBdlMBeV21SMsKnZCoI1znzKqr5oS8P2OUxAhKVdPdl6TFrX8l967uXO1TqBY3XFAa8e-HfKViQY0OcPkMIYOuV3oOQAGsAnV916Y1t9N5aV7xvvcTvrX_Y06n9qftnqozBFMWrO8I6fPjM31MhGo3vpdb0o2kYS788-NhNDQUfJwY7nA_2P92a3xhrmnOkFrKeT-qDhuJU5zfEyi4qbh33m7K5c`,
    //             },
    //         })
    //         console.log(res.data)
    //     } catch (error) {
    //         console.error("Error sending request:", error)
    //     }
    // }

    // useEffect(() => {
    //     sendToken()
    // }, [tokeniD])
    return <div>sdsd</div>
}
