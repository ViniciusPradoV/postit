export const apiRoutes = {
    auth: {
      login: '/auth/login',
    },
    notes: {
      me: '/note/me',
      create: '/note',
      delete: '/note/{noteId}',
      update: '/note/{noteId}',
      feed: '/note/feed?page={page}&postsPerPage={postPerPage}',
      get: '/note/{noteId}',
      like: {
        delete:'/note/{noteId}/like',
        create: '/note/{notedId}/like',
      },
      comment: {
        create: '/note/{noteId}/comment',
      },
    },
    users: {
      create: '/user',
    },
    
  } as const;