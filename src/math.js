const error = (message) => {
  throw new Error(`[Error] ${message}`);
};

const sum = (par1, par2) => {
  if (par1 === undefined) error('Invalid par1');
  if (par2 === undefined) error('Invalid par2');

  const result = par1 + par2;

  return result;
};

export default sum;
