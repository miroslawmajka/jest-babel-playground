import { getListOfDrinks } from './generator-functions';

describe('Generator functions', () => {
  it('return a list of drinks', async () => {
    const listOfDrinks = await getListOfDrinks().next();

    console.log(listOfDrinks);
  });
});
