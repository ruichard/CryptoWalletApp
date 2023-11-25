import ethereumService from "../../src/services/EthereumService";

describe('EthereumService', () => {

  it('should return a balance for a valid address', async () => {
    const balance = await ethereumService.getBalance(process.env.WALLET_ADDRESS!);
    console.log(`balance = ${balance}`);
    expect(balance).toBeDefined();
    expect(typeof balance).toBe('string');
  });

});
