# CMX UI Stack

- Remix v.2 [https://remix.run/docs/en/main]
- Chakra UI + Saas UI + Glass Theme 
    - [https://saas-ui.dev/]
    - [https://saas-ui.dev/blog/introducing-glass-theme-for-chakra-ui]
- Fontsource [https://fontsource.org/]
- React Icon [https://react-icons.github.io/]
- React Hook Form [https://react-hook-form.com/]
- Saas UI DataTable + Tanstack Table [https://tanstack.com/table/v8]


## Mockup Data and API

- Data : /app/constants/api.data.ts
- API : /app/routes/api.users.ts

## Demo Layout

- Demo - [https://cmxv0.fly.dev/]
- Home Layout
![Alt text](https://raw.githubusercontent.com/adaydesign/remix-saas-ui-example/main/screenshots/demox1.png "Home Layout")



## Fly Setup

1. [Install `flyctl`](https://fly.io/docs/getting-started/installing-flyctl/)

2. Sign up and log in to Fly

```sh
flyctl auth signup
```

3. Setup Fly. It might ask if you want to deploy, say no since you haven't built the app yet.

```sh
flyctl launch
```

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

If you've followed the setup instructions already, all you need to do is run this:

```sh
npm run deploy
```

You can run `flyctl info` to get the url and ip address of your server.

Check out the [fly docs](https://fly.io/docs/getting-started/node/) for more information.
