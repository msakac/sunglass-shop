import Head from 'next/head';
import React, { Fragment, useState } from 'react';
import GlassesForm from '../../components/Glasses/GlassesForm/GlassesForm';
import Layout from '../../components/Layout/Layout';
import Table from '../../components/Table/Table';
import Button from '../../components/UI/Button';
import Card from '../../components/UI/Card';
import Title from '../../components/UI/Title';
import { HomepageHead } from '../../helpers/head-data';

export default function index() {
  const [isCreateForm, setIsCreateForm] = useState(false);

  const tableColumns = [ 'Created','Title', 'Type', 'Quantity', 'Price', 'Description',]
  const tableButtons = ['Edit', 'Delete']

  const openCreateFormHandler = () => {
    setIsCreateForm((value) => !value);
  };

  return (
    <Fragment>
      <Head>
        <title>{HomepageHead.title}</title>
        <meta {...HomepageHead.meta} />
      </Head>
      <Layout>
        <Title title="Admin Page" style="my-[3vw] text-4xl" />
        <Card style="max-w-2xl">
          <Title title="Create Glasess" style="text-xl my-0" />
          {!isCreateForm && <Button title={'Open Create Form'} onClick={openCreateFormHandler} />}
          {isCreateForm && <GlassesForm onCancel={openCreateFormHandler} />}
        </Card>
        <Card style="w-auto my-5 max-w-fit">
          <Title title="All Glasses" style="text-xl my-3" />
          <Table columns={tableColumns} buttons={tableButtons} />
        </Card>
      </Layout>
    </Fragment>
  );
}
