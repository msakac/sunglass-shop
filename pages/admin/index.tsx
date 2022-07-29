import Head from 'next/head';
import React, { Fragment } from 'react';
import GlassesForm from '../../components/Glasses/GlassesForm/GlassesForm';
import Layout from '../../components/Layout/Layout';
import Card from '../../components/UI/Card';
import { HomepageHead } from '../../helpers/head-data';

export default function index() {
  return (
    <Fragment>
      <Head>
        <title>{HomepageHead.title}</title>
        <meta {...HomepageHead.meta} />
      </Head>
      <Layout>
        <h1 className="text-3xl">Admin Pageeee</h1>
        <Card>
          <GlassesForm />
        </Card>
      </Layout>
    </Fragment>
  );
}
