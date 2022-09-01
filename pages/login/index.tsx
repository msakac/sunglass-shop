import Head from 'next/head';
import React, { Fragment, useState } from 'react';
import { GlassesType } from '../../common/types';
import GlassesForm from '../../components/Glasses/GlassesForm/GlassesForm';
import Layout from '../../components/Layout/Layout';
import Table from '../../components/Table/Table';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import Title from '../../components/UI/Title';
import { HomepageHead } from '../../helpers/head-data';
import { useRouter } from 'next/router';
import Modal from '../../components/Modal/Modal';
import LoginForm from '../../components/LoginForm/LoginForm';

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
      <Layout>
        <LoginForm/>
      </Layout>
    </Fragment>
  );
}

