import { AxiosInstance } from 'axios'
import api from '@/service/api'

class AbstractModel {
  api: AxiosInstance
  
  constructor() {
    this.api = api
  }
}

export default AbstractModel
