import Head from 'next/head';
import React, { Fragment } from 'react';
import { GlassesType } from '../../common/types';
import Layout from '../../components/Layout/Layout';
import { HomepageHead } from '../../helpers/head-data';
import { useRouter } from 'next/router';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

interface IAdminPageProps {
  glasses: GlassesType[];
}

export default function index({ glasses }: IAdminPageProps) {
  const router = useRouter();
  /** Render */
  return (
    <Fragment>
      <Head>
        <title>{HomepageHead.title}</title>
        <meta {...HomepageHead.meta} />
      </Head>
      <Layout style='w-auto max-w-[1000px]'>
        <RegistrationForm />
      </Layout>
    </Fragment>
  );
}

