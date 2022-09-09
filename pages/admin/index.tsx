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

interface IAdminPageProps {
  glasses: GlassesType[];
}

export default function index({ glasses }: IAdminPageProps) {
  const router = useRouter();
  //State that manages form for adding new glasses
  const [isCreateForm, setIsCreateForm] = useState(false);
  const [isEditForm, setisEditForm] = useState(false);
  const [editGlasses, setEditGlasses] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedForDelete, setSelectedForDelete] = useState('');

  /** Columns for table */
  const tableColumns = ['Image', 'ID', 'Created', 'Title', 'Type', 'Price', 'Quantity', 'Description'];

  /** Callback handlers for button onClick actions in table */
  const editClickHandler = (id: string) => {
    const glassObject = glasses.find((o) => o.id === id);
    setEditGlasses({ ...glassObject });

    openEditFormHandler();
  };

  /** Promise method that deletes one glasses from database */
  const deleteGlasses = async () => {
    const response = await fetch('api/glasses/' + selectedForDelete, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data.message);
    router.replace('/admin');
    setShowModal(false);
  };

  /** Buttons that will be in table. Every button has title, onClick event and style */
  const tableButtons = [
    { title: 'Edit', onClick: editClickHandler, style: styles.btnUpdate },
    {
      title: 'Delete',
      onClick: (id: string) => {
        setShowModal(true);
        setSelectedForDelete(id);
      },
      style: styles.btnDelete
    }
  ];

  /** Handler for create form state */
  const openCreateFormHandler = () => {
    setIsCreateForm((value) => !value);
  };

  /** Handler for create form state */
  const openEditFormHandler = () => {
    setisEditForm((value) => !value);
  };

  /** Render */
  return (
    <Fragment>
      <Head>
        <title>{HomepageHead.title}</title>
        <meta {...HomepageHead.meta} />
      </Head>
      {showModal && (
        <Modal modalText="Are you sure you want to delete this product?" onConfirm={deleteGlasses} onReject={() => setShowModal(false)} />
      )}

      <Layout style='max-w-[1536px]'>
        <Title title="Admin Page" style="my-[3vw] text-4xl" />
        {!isEditForm && (
          <Card style="max-w-2xl">
            <Title title="Create Glasess" style="text-xl my-0" />
            {!isCreateForm && <Button title={'Open Create Form'} onClick={openCreateFormHandler} />}
            {isCreateForm && <GlassesForm onCancel={openCreateFormHandler} />}
          </Card>
        )}
        {isEditForm && (
          <Card style="mt-5 max-w-2xl">
            <Title title="Edit Glasses" style="text-xl my-0" />
            <GlassesForm onCancel={openEditFormHandler} glasses={editGlasses} />
          </Card>
        )}

        <Card style="w-auto my-5 max-w-fit">
          <Title title="All Glasses" style="text-xl my-3" />
          <Table columns={tableColumns} buttons={tableButtons} data={glasses} />
        </Card>
      </Layout>
    </Fragment>
  );
}
  /** Tailwind classnames for styles of components */
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
