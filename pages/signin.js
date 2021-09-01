import Head from 'next/head'

import Signinform from '../components/forms/Signinform'

const Signin = () => {
  return (
    <>
      <Head>
        <title>BookShop | Sign In</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Signinform />
    </>
  )
}
export default Signin
