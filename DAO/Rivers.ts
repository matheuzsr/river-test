import AbstractDAO from './AbstractDAO'
import { RiversDTO } from '~/DTO/RiversDTO'


class Rivers extends AbstractDAO {
  public async getAll(): Promise<RiversDTO> {
    try {
      const response = await this.api.get('/rivers')

      return { error: false, data: response.data }
    } catch (error) {
      return { error: true, data: error.response.data }
    }
  }
}

export default new Rivers()
