import { ethers } from 'ethers';

class EthereumService {
  private provider: ethers.AlchemyProvider;

  constructor() {
    const network = process.env.ETHEREUM_NETWORK;
    this.provider = new ethers.AlchemyProvider(network, process.env.API_KEY);
  }

  async getBalance(address: string): Promise<string> {
    const balance = await this.provider.getBalance(address);
    return ethers.formatEther(balance);
  }

}

export default new EthereumService();
