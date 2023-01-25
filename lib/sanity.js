import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'hxdm5jjk',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token:
    'skhFiEHq6z1zg5OevHDk3FUrv0SbBE04fIQmQbyLgVMfxITZcjVWsyIY6TKRYirsV3W0Ej2WDTnZDX1AHVF4AVZRetk8VwlLIzKirbobgB4dVpAfmP0xZziDLLZGZWOuNm4fKASq3lWsBOpYElEiOsDv6Sh6Y0uHCh7pvc9eMVrWH5VhX3fD', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})