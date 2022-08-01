import React, { useState } from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import TextArea from '../../UI/TextArea';
import { useRouter } from 'next/router';

interface IGlassesFormProps {
  onCancel: () => void;
}

export default function GlassesForm({ onCancel }: IGlassesFormProps) {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let glasses = {
      title,
      type,
      quantity,
      price,
      description,
      createdAt: new Date().getTime()
    };

    const response = await fetch('/api/glasses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(glasses)
    });
    const data = await response.json();
    //console.log(data.message);
    onCancel();
    router.replace('/admin');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <Input
          id={'glasses_name'}
          title={'Glasses name'}
          required
          placeholder="Some Glasses"
          onChange={(e: React.FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}
          value={title}
        />
        <Input
          id={'type'}
          title={'Type'}
          placeholder="Some Type"
          required
          onChange={(e: React.FormEvent<HTMLInputElement>) => setType(e.currentTarget.value)}
          value={type}
        />
        <Input
          id={'qty'}
          title={'Quantity'}
          type="number"
          min="1"
          max="100"
          required
          placeholder="xxx"
          onChange={(e: React.FormEvent<HTMLInputElement>) => setQuantity(e.currentTarget.value)}
          value={quantity}
        />
        <Input
          id={'price'}
          title={'Price'}
          type="number"
          min="1"
          step="any"
          required
          placeholder="99.99$"
          onChange={(e: React.FormEvent<HTMLInputElement>) => setPrice(e.currentTarget.value)}
          value={price}
        />
      </div>
      <TextArea
        id={'description'}
        title={'Description'}
        type="textarea"
        required
        rows="5"
        placeholder="Description.."
        onChange={(e: React.FormEvent<HTMLInputElement>) => setDescription(e.currentTarget.value)}
        value={description}
      />
      <Input
        id={'image'}
        title={'Image'}
        type="text"
        min="1"
        required
        placeholder="http://image.com"
        onChange={(e: React.FormEvent<HTMLInputElement>) => setImage(e.currentTarget.value)}
        value={image}
      />
      <Button title={'Cancel'} onClick={onCancel} style={'mr-[20px]'} />
      <Button title={'Add Glasses'} withBorder={false} />
    </form>
  );
}
