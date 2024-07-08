export const filter = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "white" },
      { value: "beige", label: "beige" },
      { value: "blue", label: "blue" },
      { value: "brown", label: "brown" },
      { value: "green", label: "green" },
      { value: "purple", label: "purple" },
      { value: "yellow", label: "yellow" },
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilters = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159-₹399" },
      { value: "399-999", label: "₹399-₹999" },
      { value: "999-1999", label: "₹999-₹1999" },
      { value: "1999-2999", label: "₹1999-₹2999" },
      { value: "2999-3999", label: "₹2999-₹3999" },
    ],
  },
  {
    id: "discount",
    name: "discount range",
    options: [
      { value: "10", label: "10% and above" },
      { value: "20", label: "20% and above" },
      { value: "30", label: "30% and above" },
      { value: "40", label: "40% and above" },
      { value: "50", label: "50% and above" },
      { value: "60", label: "60% and above" },
      { value: "70", label: "70% and above" },
      { value: "80", label: "80% and above" },
    ],
  },
  {
    id: "stock",
    name: "availability",
    options: [
      { value: "in_stock", label: "In stock" },
      { value: "out_of_stock", label: "out of stock" },
    ],
  },
];
