import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'zzyktczv',
  dataset: 'production',
  apiVersion: '2024-01-16',
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_API_TOKEN, // or leave undefined to use public access'',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)