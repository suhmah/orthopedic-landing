import { productsMock } from '../../orthopedic/presentation/mocks/productsMock';
import type { Product } from '../../orthopedic/share/entities/product';

export async function getProductById(id: string): Promise<Product> {
  const product = productsMock.find((p) => p.id === id);

  if (!product) {
    throw new Error('Produto não encontrado');
  }

  return new Promise((resolve) => setTimeout(() => resolve(product), 300));
}
