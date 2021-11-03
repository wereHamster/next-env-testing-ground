export default function Page() {
  console.log("Page: NEXT_PUBLIC_FOO", process.env.NEXT_PUBLIC_FOO);
  console.log("Page: CONFIG_FOO", process.env.CONFIG_FOO);
  console.log("Page: FOO", process.env.FOO);

  return null;
}

export const getServerSideProps = async () => {
  console.log("getServerSideProps: NEXT_PUBLIC_FOO", process.env.NEXT_PUBLIC_FOO);
  console.log("getServerSideProps: CONFIG_FOO", process.env.CONFIG_FOO);
  console.log("getServerSideProps: FOO", process.env.FOO);

  return { props: {} };
};
