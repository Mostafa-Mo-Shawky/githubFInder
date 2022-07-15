import axios from 'axios';

const GITHUB_URL = process.env.REACT_APP_GITHUB_API;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// search
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`search/users?${params}`);
  return response.data.items;
};

// repos
// export const userRepos = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   });
//   const data = await response.json();
//   return data;
// };

// Get user and repos
export const getUserAndRepo = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`users/${login}`),
    github.get(`users/${login}/repos`),
  ]);
  return { user: user.data, repos: repos.data };
};
