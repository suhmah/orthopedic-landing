import React from 'react';
import { Container, PageButton, Ellipsis } from './styles';
import { Text } from '../../../../../shared/ui/atoms/text/inde';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const generatePages = () => {
    const pages = [];
    const maxDisplayed = 5;

    if (totalPages <= maxDisplayed) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      pages.push(1);

      if (start > 2) {
        pages.push('...');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Container>
      <PageButton disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        {'<'}
      </PageButton>

      {generatePages().map((page, index) =>
        page === '...' ? (
          <Ellipsis key={index}>...</Ellipsis>
        ) : (
          <PageButton
            key={page}
            active={page === currentPage}
            onClick={() => onPageChange(Number(page))}
          >
            <Text
              fontSize={14}
              variant={page === currentPage ? 'paragraphNormal' : 'paragraphNormal'}
            >
              {page}
            </Text>
          </PageButton>
        ),
      )}

      <PageButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {'>'}
      </PageButton>
    </Container>
  );
};
