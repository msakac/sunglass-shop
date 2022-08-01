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

interface IAdminPageProps {
  glasses: GlassesType[];
}

export default function index({ glasses }: IAdminPageProps) {
  const [isCreateForm, setIsCreateForm] = useState(false);
  const tableColumns = ['Image','ID', 'Created', 'Title', 'Type', 'Price', 'Quantity', 'Description'];
  const tableButtons = ['Edit', 'Delete'];

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
          <Table columns={tableColumns} buttons={tableButtons} data={glasses} />
        </Card>
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/glasses');
  const glasses = await res.json();

  return {
    props: {
      glasses: glasses.map((glass: GlassesType) => ({
        id: glass._id.toString(),
        createdAt: glass.createdAt,
        title: glass.title,
        type: glass.type,
        price: glass.price,
        quantity: glass.quantity,
        description: glass.description
      }))
    },
    revalidate: 1
  };
}
