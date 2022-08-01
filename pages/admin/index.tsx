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

interface IAdminPageProps {
  glasses: GlassesType[];
}

export default function index({ glasses }: IAdminPageProps) {
  const router = useRouter();
  //State that manages form for adding new glasses
  const [isCreateForm, setIsCreateForm] = useState(false);

  //Columns for table
  const tableColumns = ['Image', 'ID', 'Created', 'Title', 'Type', 'Price', 'Quantity', 'Description'];

  //Callback handlers for button onClick actions in table
  const editClickHandler = (id: string) => {
    console.log('Edit:' + id);
  };

  const deleteClickHandler = async (id: string) => {
    console.log('Delete:' + id);
    const response = await fetch('api/glasses/' + id, {
      method: 'DELETE'
    });
    const data = await response.json();
    console.log(data.message);
    router.replace('/admin');
  };

  //Buttons that will be in table. Every button has title, onClick event and style
  const tableButtons = [
    { title: 'Edit', onClick: editClickHandler, style: styles.btnUpdate },
    { title: 'Delete', onClick: deleteClickHandler, style: styles.btnDelete }
  ];

  //Handler for form state
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

const styles = {
  btnDelete:
    'focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900',
  btnDefault:
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
  btnUpdate:
    'focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
};

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
