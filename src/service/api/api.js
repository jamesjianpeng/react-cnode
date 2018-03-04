import Server from './server'

class API extends Server{
  /**
   *  用途：上传图片
   *  @url http://cangdu.org:8001/v1/addimg/shop
   *  返回status为1表示成功
   *  @method post
   *  @return {promise}
   */
  async getTopicList (){
    try{
      let result = await this.axios('T_list')
      console.log(result, 'api')
      if(result.success){
        return result;
      }else{
        let err = false
        throw err;
      }
    }catch(err){
      throw err;
    }
  }
}

export default new API();
