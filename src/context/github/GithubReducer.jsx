const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GIT_USERS':
      return { ...state, users: action.payload, loading: false };
    case 'GIT_USER_AND_REPO':
      return {
        ...state,
        user: action.payload.user,
        repo: action.payload.repo,
        loading: false,
      };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'CLEAR_USERS':
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default githubReducer;