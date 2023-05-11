import { getProviders, getCsrfToken, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Script from "next/script";
import Head from "next/head";
import SignInPage from "../../components/SignInPage/SignInPage";

export default function SignIn({ providers, csrfToken }) {
  return (
		<>
			<Script
			strategy="afterInteractive"
			src="https://www.googletagmanager.com/gtag/js?id=G-B3Z17PVC6F"
			/>

			<Script id="google-analytics" strategy="afterInteractive">
				{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-B3Z17PVC6F');
					`}
			</Script>
			<Head>
				<title>DeFi.vn - Explore everything about Web3</title>
				<meta name="description" content="Defi.vn is a community project aiming to be an open Web3 resource hub for everyone"/>
				<meta charSet="utf-8" />
				<link rel="icon" href="../defi.svg" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:url" content="https://www.defi.vn" />
				<meta property="og:type" content="website"/>
				<meta property="og:title" content="DeFi.vn - DeFi Vietnam | DeFi Việt Nam" />
				<meta property="og:description" content="Defi.vn is a community project aiming to be an open Web3 resource hub for everyone" />
				<meta property="og:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/8d6a2d48-99bc-485c-4afc-239196f02200/defi" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="defi.vn" />
				<meta property="twitter:url" content="https://www.defi.vn" />
				<meta name="twitter:title" content="DeFi.vn - DeFi Vietnam | DeFi Việt Nam" />
				<meta name="twitter:description" content="Defi.vn is a community project aiming to be an open Web3 resource hub for everyone" />
				<meta name="twitter:image" content="https://imagedelivery.net/V8LKJG1wA8wvjWYrCdF9Bw/8d6a2d48-99bc-485c-4afc-239196f02200/defi" />
			</Head>
			<SignInPage providers={providers} csrfToken={csrfToken} />
		</>
  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { 
			redirect: { 
				destination: "/dashboard" 
			} 
		};
  }

  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  
  return {
    props: { 
        providers: providers,
        csrfToken: csrfToken,
				...(await serverSideTranslations(context.locale, ["signin"])) 
    },
  }
}