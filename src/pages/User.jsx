import { useEffect, useContext } from 'react';
import GithubContext from '../context/github/GithubContext';
import { useParams, Link } from 'react-router-dom';
import {
  FaCode,
  FaCodepen,
  FaStore,
  FaUser,
  FaUserFriends,
  FaUsers,
} from 'react-icons/fa';
import Spinner from '../components/layout/Spinner';
import RepoList from '../components/repos/RepoList';
import { getUserAndRepo } from '../context/github/GithubActions';

function User() {
  const { user, loading, repos, dispatch } = useContext(GithubContext);
  const {
    name,
    type,
    location,
    bio,
    login,
    followers,
    following,
    blog,
    hireable,
  } = user;

  const params = useParams();
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getUserData = async () => {
      const userData = await getUserAndRepo(params.login);
      dispatch({ type: 'GIT_USER_AND_REPO', payload: userData });
    };
    getUserData();
  }, [dispatch, params.login]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost capitalize">
            back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={user.avatar_url} alt="profile photo" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title.mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl carb-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge bage-info">hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div
                className="mt-4 card-actions
              "
              >
                <a
                  className="btn btn-outline"
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit github profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">website</div>
                  <div className="text-sm stat-value overflow-hidden ">
                    <a href={`${blog}`} target="_blank" rel="noreferrer">
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {user.twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-sm stat-value overflow-hidden ">
                    <a
                      href={`${user.twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-4">
          <div className=" w-full p-5  mb-6 flex justify-between items-center rounded-lg shadow-md bg-base-100 ">
            <div className=" pr-5 text-3xl md:text-4xl">
              <div className=" text-sm stat-title ">Followers</div>
              {followers}
            </div>
            <FaUsers className="text-4xl self-end text-secondary md:text-5xl" />
          </div>
          <div className=" w-full p-5  mb-6 flex justify-between items-center rounded-lg shadow-md bg-base-100 ">
            <div className=" pr-5 text-3xl md:text-4xl">
              <div className=" text-sm stat-title ">Following</div>
              {following}
            </div>
            <FaUser className="text-3xl self-end text-secondary md:text-4xl" />
          </div>
          <div className=" w-full p-5  mb-6 flex justify-between items-center rounded-lg shadow-md bg-base-100 ">
            <div className=" pr-5 text-3xl md:text-4xl">
              <div className=" text-sm stat-title ">Public Repos</div>
              {user.public_repos}
            </div>
            <FaCode className="text-3xl self-end text-secondary md:text-4xl" />
          </div>
          <div className=" w-full p-5  mb-6 flex justify-between items-center rounded-lg shadow-md bg-base-100 ">
            <div className=" pr-5 text-3xl md:text-4xl">
              <div className=" text-sm stat-title ">Public Gists</div>
              {user.public_gists}
            </div>
            <FaStore className="text-3xl self-end text-secondary md:text-4xl" />
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default User;
