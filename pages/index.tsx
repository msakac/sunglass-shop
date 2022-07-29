import type { NextPage } from 'next';
import Layout from '../components/Layout/Layout';
import React, { Fragment } from 'react';
import Head from 'next/head';
import { HomepageHead } from '../helpers/head-data';
import GlassesForm from '../components/Glasses/GlassesForm/GlassesForm';

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Head>
        {' '}
        <title>{HomepageHead.title}</title> <meta {...HomepageHead.meta} />
      </Head>
      <Layout>
        <h1>Home Page</h1>
      </Layout>
    </Fragment>
  );
};

export default HomePage;
