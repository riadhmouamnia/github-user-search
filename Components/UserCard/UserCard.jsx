export default function UserCard({ user, error, isLoading }) {
  const content = (
    <>
      {user && (
        <>
          <div>
            <img src={user.avatar_url} alt="avatar" />
          </div>
          <div>
            <h4> Name: {user.name}</h4>

            <p> Username: {user.login} </p>
          </div>
        </>
      )}
      {!user && !error && <p>Enter a username</p>}
    </>
  );
  return (
    <div className="user-card">
      {isLoading && <p>loading...</p>}
      {error && !isLoading && <p>{error}</p>}
      {!isLoading && content}
    </div>
  );
}
