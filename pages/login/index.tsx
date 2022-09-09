import Head from 'next/head';
import React, { Fragment } from 'react';
import { GlassesType } from '../../common/types';
import Layout from '../../components/Layout/Layout';
import { HomepageHead } from '../../helpers/head-data';
import { useRouter } from 'next/router';
import LoginForm from '../../components/LoginForm/LoginForm';

interface IAdminPageProps {
  glasses: GlassesType[];
}

export default function index() {
  /** Render */
  return (
    <Fragment>
      <Head>
        <title>{HomepageHead.title}</title>
        <meta {...HomepageHead.meta} />
      </Head>
      <Layout style={'h-[80vh] max-w-[1000px] flex items-center h-[calc(100vh-68px)]'}>
        <LoginForm />
      </Layout>
    </Fragment>
  );
}

