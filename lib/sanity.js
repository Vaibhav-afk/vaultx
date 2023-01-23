import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'q8rm8ibv',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skLecH1kROUTXQ3O74c8jZugc2XH9LregSjh8uAdMOlKEuq8MIVCV4GJCPYe9bQezu3RkM8uBuOFtYFnf16ZIczGyrQ4kcZeu69sCB68pLUZALxWwAaybj45OxT3WvMq8MynXUEllvYjyVBjNAeMtDnoOcjfdHoJOD4n4WqtIZkoabW5Krpg', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})