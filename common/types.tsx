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

export enum GradientColors {
  PURPLE_TO_BLUE = 'bg-gradient-to-br from-purple-600 to-blue-500',
  CYAN_TO_BLUE = 'bg-gradient-to-br from-cyan-400 to-blue-500',
  GREEN_TO_BLUE = 'bg-gradient-to-br from-green-400 to-blue-600',
  PURPLE_TO_PINK = 'bg-gradient-to-br from-purple-500 to-pink-500',
  PINK_TO_ORANGE = 'bg-gradient-to-br from-pink-500 to-orange-400',
  TEAL_TO_LIME = 'bg-gradient-to-br from-teal-200 to-lime-200',
  RED_TO_YELLOW = 'bg-gradient-to-br from-red-200 via-red-300 to-yellow-200'
}
