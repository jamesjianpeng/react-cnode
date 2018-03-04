import { T, C T_C GET, POST } from './types'

/**
* user -> U
* messages -> M
* replies -> R
* topics -> T
*/

const user = {
  U: {
    name: `/user/:loginName`,
    methods: POST
  },
  U_T: {
    name: `/accesstoken`,
    methods: POST
  }
}

const messages = {
  M_conut: {
    name: `/message/count`,
    needToken: true,
    methods: GET
  },
  M_list: {
    name: `/messages`,
    needToken: true,
    methods: GET
  },
  M_mark_all: {
    name: `/message/mark_all`,
    needToken: true,
    methods: POST
  },
  M_mark_one: {
    name: `/message/mark_one/:msg_id`,
    needToken: true,
    methods: POST
  }
}

const replies = {
  // 评论
  R: {
    name: `/${T}/:topicId/replies`,
    needToken: true,
    methods: POST
  },
  // 为评论点赞
  R_ups: {
    name: `/${T}/:replyId/ups`,
    needToken: true,
    methods: POST
  }
}

consot topics = {
  T_list: {
    name: `/${T}`,
    methods: GET
  },
  T_One: {
    name: `/${T}/:id`,
    methods: GET
  },
  T_new: {
    name: `/${T}`,
    needToken: true,
    methods: POST
  },
  T_U: {
    name: `/${T}/update`,
    needToken: true,
    methods: POST
  },
  // 收藏
  T_C_L_list: {
    name: `/${T}`,
    methods: get
  },
  T_C_one: {
    name: `/${T_C}/${C}`,
    needToken: true,
    methods: POST
  },
  T_C_del: {
    name: `/${T_C}/de_${C}`,
    needToken: true,
    methods: POST
  }
}

export default {
  // 主题
  ...topics
  // 评论 和为 评论点赞
  ...replies
  // 用户
  ...user,
  // 消息通知
  ...messages
}
