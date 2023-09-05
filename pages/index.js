import { useEffect, useState } from "react";
import Form from "../Components/Form/Form";
import UserCard from "../Components/UserCard/UserCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userName, setUserName] = useState("");

  async function fetchUser(userName) {
    setIsLoading(true);
    try {
      const res = await fetch("https://api.github.com/users/" + userName);
      if (res.ok === true) {
        const data = await res.json();
        setUser(data);
        setIsLoading(false);
        setError(null);
      } else {
        throw Error("user not found");
      }
    } catch (err) {
      setError(err.message);
      setUser(null);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!userName) return;
    fetchUser(userName);
  }, [userName]);

  return (
    <div className="card">
      <Form setUserName={setUserName} userName={userName} />
      <UserCard user={user} isLoading={isLoading} error={error} />
    </div>
  );
}
