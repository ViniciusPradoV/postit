export const apiRoutes = {
    auth: {
      login: '/auth/login',
    },
    notes: {
      me: '/note/me',
      myFeed: '/note/myFeed',
      create: '/note',
      delete: '/note/{noteId}',
      update: '/note/{noteId}',
      feed: '/note/feed/{page}?postsPerPage={postsPerPage}',
      get: '/note/{noteId}',
      like: {
        delete:'/note/{noteId}/like',
        create: '/note/{noteId}/like',
      },
      comment: {
        create: '/note/{noteId}/comment',
      },
    },
    users: {
      create: '/user',
      me: '/user/me',
      update: '/user/{userId}'
    },
    
  } as const;