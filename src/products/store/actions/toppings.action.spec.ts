import * as fromToppings from './toppings.action';

describe('Toppings Actions', () => {
  const toppingsData = [
    {
      id: 1,
      name: 'anchovy'
    },
    {
      id: 2,
      name: 'bacon'
    },
    {
      id: 3,
      name: 'basil'
    },
    {
      id: 4,
      name: 'chili'
    }
  ];

  describe('LoadToppings Actions', () => {
    describe('LoadToppings', () => {
      it('should create an action', () => {
        const action = new fromToppings.LoadToppings();
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS
        });
      });
    });
    describe('LoadToppingsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Toppings Error' };
        const action = new fromToppings.LoadToppingsFail(payload);
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_FAIL,
          payload
        });
      });
    });
    describe('LoadToppingsSuccess', () => {
      it('should create an action', () => {
        const payload = this.toppingsData;
        const action = new fromToppings.LoadToppingsSuccess(payload);
        expect({ ...action }).toEqual({
          type: fromToppings.LOAD_TOPPINGS_SUCCESS,
          payload
        });
      });
    });
  });
  describe('VisualiseToppings Actions', () => {
    describe('VisualizeToppings', () => {
      it('should create an action', () => {
        const action = new fromToppings.VisualiseToppings([1, 2, 3]);
        expect({ ...action }).toEqual({
          type: fromToppings.VISUALISE_TOPPINGS,
          payload: [1, 2, 3]
        });
      });
    });
  });
});
