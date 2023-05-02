import React, { useEffect, useState } from "react";

import { getSession, signIn } from "next-auth/react";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkIsLogin = async () => {
      const session = await getSession();
      if (!session) signIn();
      else setLoading(false);
    };

    checkIsLogin();
  }, []);

  if (loading) return <h1>Loading ...</h1>;
  return <div>Dashboard</div>;
}

export default Dashboard;
