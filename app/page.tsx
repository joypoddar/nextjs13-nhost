import Data from "./components/data";

export default function Home() {
  return (
    <main>
      <section>
        <h1 className="mt-5 flex justify-center text-xl font-semibold text-slate-800">
          Unofficial guide to setup Nhost with NextJS 13{" "}
          <span className="mr-1 rounded bg-slate-200 px-1">/app</span> router
        </h1>{" "}
      </section>

      <section>
        <h3>Create nhost project</h3>
        <h3>Create NextJS project with typescript</h3>
        <div>
          <h3>Configure Nhost with Next.js</h3>
          <p>yarn add @nhost/nextjs graphql</p>
          <p>
            Store the environment variables for subdomain and region in
            .env.development:
          </p>
          <p>yarn add @nhost/react-apollo @apollo/client for querying data</p>
          <p>Create nhost wrapper</p>
          <Data />
        </div>
      </section>
    </main>
  );
}
