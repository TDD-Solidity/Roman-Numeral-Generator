const Roman = artifacts.require("Roman");
const truffleAssert = require('truffle-assertions');

contract("Roman", function (accounts) {

  let roman;

  beforeEach(async function () {
    roman = await Roman.new();
  });

  describe('invalid inputs', () => {

    xit('reverts when input is not a uint', async () => {
      await truffleAssert.fails(
        roman.toRoman.call('string'),
        'Error: invalid BigNumber string (argument="value", value="string", code=INVALID_ARGUMENT, version=bignumber/5.6.2)'
      );

    })

  })

  it('converts 1', async () => expect(await roman.toRoman.call(1)).to.equal('I'));
  it('converts 2', async () => expect(await roman.toRoman.call(2)).to.equal('II'))
  it('converts 3', async () => expect(await roman.toRoman.call(3)).to.equal('III'))
  it('converts 4', async () => expect(await roman.toRoman.call(4)).to.equal('IV'))
  it('converts 5', async () => expect(await roman.toRoman.call(5)).to.equal('V'))
  it('converts 6', async () => expect(await roman.toRoman.call(6)).to.equal('VI'))
  it('converts 8', async () => expect(await roman.toRoman.call(8)).to.equal('VIII'))
  it('converts 9', async () => expect(await roman.toRoman.call(9)).to.equal('IX'))
  it('converts 27', async () => expect(await roman.toRoman.call(27)).to.equal('XXVII'))
  it('converts 48', async () => expect(await roman.toRoman.call(48)).to.equal('XLVIII'))
  xit('converts 49', async () => expect(await roman.toRoman.call(49)).to.equal('XLIX'))
  xit('converts 59', async () => expect(await roman.toRoman.call(59)).to.equal('LIX'))
  xit('converts 93', async () => expect(await roman.toRoman.call(93)).to.equal('XCIII'))
  xit('converts 141', async () => expect(await roman.toRoman.call(141)).to.equal('CXLI'))
  xit('converts 163', async () => expect(await roman.toRoman.call(163)).to.equal('CLXIII'))
  xit('converts 402', async () => expect(await roman.toRoman.call(402)).to.equal('CDII'))
  xit('converts 575', async () => expect(await roman.toRoman.call(575)).to.equal('DLXXV'))
  xit('converts 911', async () => expect(await roman.toRoman.call(911)).to.equal('CMXI'))
  xit('converts 1024', async () => expect(await roman.toRoman.call(1024)).to.equal('MXXIV'))
  it('converts 999', async () => expect(await roman.toRoman.call(999)).to.equal('IM'))
  it('converts 1000', async () => expect(await roman.toRoman.call(1000)).to.equal('M'))
  it('converts 3000', async () => expect(await roman.toRoman.call(3000)).to.equal('MMM'))

});