import { ethers } from 'ethers';

export class GasFee {
  gasPrice:string
  maxFeePerGas:string
  unit:string

  constructor(gasPrice:string, maxFeePerGas:string, unit:string){
    this.gasPrice = gasPrice;
    this.maxFeePerGas = maxFeePerGas;
    this.unit = unit;
  }
}

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

  async getGasFee(): Promise<GasFee> {
    const feeData = await this.provider.getFeeData();
    const unit = 'ether';
    let gasPrice = feeData.gasPrice;
    let maxFeePerGas = feeData.maxFeePerGas;
    
    let gasPriceEth:string='', maxFeePerGasEth:string='';

    if (gasPrice) {
      gasPriceEth = ethers.formatUnits(gasPrice, unit);
    }

    if (maxFeePerGas) {
      maxFeePerGasEth = ethers.formatUnits(maxFeePerGas, unit);
    }

    return new GasFee(gasPriceEth, maxFeePerGasEth, unit);
  }
}

export default new EthereumService();
