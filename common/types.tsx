export type GlassesType = {
  title: string;
  type: string;
  quantity: string;
  price: string;
  description: string;
  createdAt: number;
  id?: string;
  _id?:any;
};

export type TableButton = {
  title: string;
  onClick: (id: string) => void;
  style: string;
};
