import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito"

export const authOptions = {
    providers: [
        CognitoProvider({
            clientId: "5h51v3emg4n1agf540qd6nrcqd",//process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
            clientSecret: "1fj9g1ug7nnk5a8r1v09mntvoir1fa8m9r6dguvsentf42tv0p3h",//process.env.NEXT_PUBLIC_COGNITO_CLIENT_SECRET,
            issuer: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_7wOEXZQxU",//process.env.NEXT_PUBLIC_COGNITO_ISSUER,
        }),
    ],
    theme: {
        colorScheme: "dark", // "auto" | "dark" | "light"
        brandColor: "#000", // Hex color code
        logo: "https://cdn.designly.biz/images/designly-logo-300.webp", // Absolute URL to image
        buttonText: "#fff" // Hex color code
    }
}

export default NextAuth(authOptions)