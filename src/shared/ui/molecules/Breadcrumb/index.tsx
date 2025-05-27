import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbWrapper, Crumb, Separator } from './styles';

interface BreadcrumbProps {
  current?: string;
}

type CrumbItem = {
  label: string;
  path?: string;
};

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ current }) => {
  const location = useLocation();

  const baseCrumbs: CrumbItem[] = [
    { label: 'Início', path: '/' },
    { label: 'Linha Orthopedic', path: location.pathname },
  ];

  const crumbs: CrumbItem[] = current
    ? [...baseCrumbs, { label: current }]
    : baseCrumbs;

  return (
    <BreadcrumbWrapper>
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <span key={crumb.label}>
            {index !== 0 && <Separator>{'>'}</Separator>}
            {!isLast && crumb.path ? (
              <Crumb as={Link} to={crumb.path}>
                {crumb.label}
              </Crumb>
            ) : (
              <Crumb $isCurrent>{crumb.label}</Crumb>
            )}
          </span>
        );
      })}
    </BreadcrumbWrapper>
  );
};
