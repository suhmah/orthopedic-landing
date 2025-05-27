import type { Product } from '../../share/entities/product';

export const productsMock: Product[] = [
  ...Array.from({ length: 20 }, (_, index) => {
    const idNum = 106 + index;
    const id = `OR${idNum}`;
    const isNew = index % 4 === 0;
    return {
      id,
      name: `Órtese Modelo ${id}`,
      description: `Descrição detalhada da Órtese ${id}, com benefícios exclusivos para conforto e estabilidade.`,
      price: 99.9 + index,
      videoUrl: `https://www.youtube.com/embed/video${idNum}`,
      images: Array.from(
        { length: 5 },
        (_, i) => `https://picsum.photos/id/${1040 + index * 2 + i}/400/400`,
      ),
      specs: [
        'Conforto ergonômico',
        'Design respirável',
        index % 2 === 0 ? 'Bilateral' : 'Unilateral',
      ],
      isNew,
      detailsProduct: {
        color: {
          label: 'preto',
          color: 'black',
        },
        level: `${(index % 3) + 1}`,
        levelDescription: [
          'Uso leve para atividades cotidianas',
          'Estabilidade moderada com boa ventilação',
          'Recuperação e tratamento de lesões GRAVES',
        ][index % 3],
        model: index % 2 === 0 ? 'Bilateral' : 'Unilateral',
        sizes: [
          { size: 'P', id: `p${idNum}` },
          { size: 'M', id: `m${idNum}` },
          ...(index % 2 === 0 ? [{ size: 'G', id: `g${idNum}` }] : []),
        ],
        folderUrl: `https://example.com/folders/${id}.pdf`,
      },
    } satisfies Product;
  }),
];
