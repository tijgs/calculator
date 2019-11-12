import sum from '../src/math';

describe('Math', () => {
  describe('.sum', () => {
    describe('when par1 is zero', () => {
      const par1 = 0;

      describe('and par2 is one', () => {
        it('returns 1', () => {
          const par2 = 1;

          const result = sum(par1, par2);

          expect(result).toEqual(1);
        });
      });

      describe('and par2 is two', () => {
        it('returns 2', () => {
          const par2 = 2;

          const result = sum(par1, par2);

          expect(result).toEqual(2);
        });
      });
    });

    describe('when par1 is ten', () => {
      describe('and par2 is two', () => {
        it('returns 12', () => {
          const par1 = 10;
          const par2 = 2;

          const result = sum(par1, par2);

          expect(result).toEqual(12);
        });
      });
    });

    describe('when par1 is invalid', () => {
      it('throws exception', () => {
        const par1 = undefined;
        const par2 = 2;

        const func = () => {
          sum(par1, par2);
        };

        expect(func).toThrowError(new Error('[Error] Invalid par1'));
      });
    });

    describe('when par2 is invalid', () => {
      it('throws exception', () => {
        const par1 = 0;
        const par2 = undefined;

        const func = () => {
          sum(par1, par2);
        };

        expect(func).toThrowError(new Error('[Error] Invalid par2'));
      });
    });
  });
});
