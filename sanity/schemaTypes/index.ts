import { type SchemaTypeDefinition } from 'sanity'
import { banner } from '../schema/banner'
import product from '../schema/product'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner],
}
