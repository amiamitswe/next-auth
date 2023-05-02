import { getSession } from "next-auth/react";
import React from "react";

function Blog({data}) {
  return <div>Blog of {data}</div>;
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { data: session ? "100 list data" : "free list data" },
  };
}
