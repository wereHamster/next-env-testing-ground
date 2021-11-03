export default function Page() {
  console.log("Page: NEXT_PUBLIC_FOO", process.env.NEXT_PUBLIC_FOO);
  console.log("Page: CONFIG_FOO", process.env.CONFIG_FOO);
  console.log("Page: FOO", process.env.FOO);

  return null;
}

export const getStaticProps = async () => {
  console.log("getStaticProps: NEXT_PUBLIC_FOO", process.env.NEXT_PUBLIC_FOO);
  console.log("getStaticProps: CONFIG_FOO", process.env.CONFIG_FOO);
  console.log("getStaticProps: FOO", process.env.FOO);

  return { props: {}, revalidate: 1 };
};
