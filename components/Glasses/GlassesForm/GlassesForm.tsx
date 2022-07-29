import React from 'react';
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
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Purple to blue
        </span>
      </button>
    </form>
  );
}
