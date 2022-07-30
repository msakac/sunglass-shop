import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';

export default function GlassesForm() {
  return (
    <form>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
        <Input id={'glasses_name'} title={'Glasses name'} required placeholder="Some Glasses" />
        <Input id={'type'} title={'Type'} placeholder="Some Type" required />
        <Input id={'qty'} title={'Quantity'} type="number" min="1" max="100" required placeholder="xxx" />
        <Input id={'price'} title={'Price'} type="number" min="1" step="any" required placeholder="$" />
      </div>
      <Input id={'description'} title={'Description'} type="textarea" required />
      <Button title={'Cancel'} style={'mr-[20px]'}/>
      <Button title={'Add Glasses'} withBorder={false} />
    </form>
  );
}
