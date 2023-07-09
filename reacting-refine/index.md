---
layout: docs
prev: false
next:
  text: Providers
  link: "/reacting-refine/providers"
---

# What is Refine?

[`refine.dev`](https://refine.dev) is a framework for quickly building CRUD applications in React.

What it aims to solve is to bring together a few essential parts that compose any extensive use-case React app under a single hood.

- UI layer: It does this by providing integrations (actually wraps around) existing prominent design system libraries such as [Material UI](https://mui.com), [Ant Design](https://ant.design), and more.

- Routing: Routing is central to data access. As such, CRUD applications should have seamless coordination between what is to be fetched and where that data is to be shown. Refine provides integration with 3 router libraries:
  * [React Router](https://reactrouter.com)
  * [The Remix router](https://remix.run/docs/en/main/guides/routing)
  * [Routing in Next.js](https://nextjs.org/docs/pages/building-your-application/routing)

- Authentication: A necessary part yet again to most CRUD apps, Refine also provides libraries that wrap over Auth providers the likes of [Auth0](https://auth0.com) and [Google](https://cloud.google.com/docs/authentication).

- Data: Of course, what is a CRUD app without data? Refine's suite of libraries also provides integrations with Cloud data platforms like [Firebase](https://firebase.google.com) and [Supabase](https://supabase.com) or just call your own API resource ([GraphQL](https://graphql.org) also supported) by providing an object for various actions 