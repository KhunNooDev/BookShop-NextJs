import Head from 'next/head'

import Signupform from '../components/forms/Signupform'

const Signup = () => {
  return (
    <>
      <Head>
        <title>BookShop | Sign Up</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Signupform />
    </>
  )
}
export default Signup
