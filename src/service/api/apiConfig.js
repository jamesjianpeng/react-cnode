import types from './types'

/**
* user -> U
* messages -> M
* replies -> R
* topics -> T
*/

const user = {
  U: {
    name: `/user/:loginName`,
    methods: types.POST
  },
  U_T: {
    name: `/accesstoken`,
    methods: types.POST
  }
}

const messages = {
  M_conut: {
    name: `/message/count`,
    needToken: true,
    methods: types.GET
  },
  M_list: {
    name: `/messages`,
    needToken: true,
    methods: types.GET
  },
  M_mark_all: {
    name: `/message/mark_all`,
    needToken: true,
    methods: types.POST
  },
  M_mark_one: {
    name: `/message/mark_one/:msg_id`,
    needToken: true,
    methods: types.POST
  }
}

const replies = {
  // 评论
  R: {
    name: `/${types.T}/:topicId/replies`,
    needToken: true,
    methods: types.POST
  },
  // 为评论点赞
  R_ups: {
    name: `/${types.T}/:replyId/ups`,
    needToken: true,
    methods: types.POST
  }
}

const topics = {
  T_list: {
    name: `/${types.T}`,
    methods: types.GET
  },
  T_One: {
    name: `/${types.T}/:id`,
    methods: types.GET
  },
  T_new: {
    name: `/${types.T}`,
    needToken: true,
    methods: types.POST
  },
  T_U: {
    name: `/${types.T}/update`,
    needToken: true,
    methods: types.POST
  },
  // 收藏
  T_C_L_list: {
    name: `/${types.T}`,
    methods: types.GET
  },
  T_C_one: {
    name: `/$types.T_C}/${types.C}`,
    needToken: true,
    methods: types.POST
  },
  T_C_del: {
    name: `/${types.T_C}/de_${types.C}`,
    needToken: true,
    methods: types.POST
  }
}

export default {
  // 主题
  ...topics,
  // 评论 和为 评论点赞
  ...replies,
  // 用户
  ...user,
  // 消息通知
  ...messages
}
