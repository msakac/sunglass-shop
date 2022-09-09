import Head from 'next/head';
import React, { Fragment } from 'react';
import Layout from '../../components/Layout/Layout';
import { HomepageHead } from '../../helpers/head-data';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';


export default function index() {
  /** Render */
  return (
    <Fragment>
      <Head>
        <title>{HomepageHead.title}</title>
        <meta {...HomepageHead.meta} />
      </Head>
      <Layout style='w-auto max-w-[1000px] flex items-center h-[calc(100vh-68px)]'>
        <RegistrationForm />
      </Layout>
    </Fragment>
  );
}

