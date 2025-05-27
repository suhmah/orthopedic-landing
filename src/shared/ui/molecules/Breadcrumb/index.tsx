import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbWrapper, Crumb, Separator } from './styles';
interface BreadcrumbProps {
  current?: string;
}
interface BreadcrumbProps {
  current?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ current }) => {
  const location = useLocation();

  const baseCrumbs = [
    { label: 'Início', path: '/' },
    { label: 'Linha Orthopedic', path: location },
  ];

  const crumbs = current ? [...baseCrumbs, { label: current }] : baseCrumbs;

  return (
    <BreadcrumbWrapper>
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <span key={crumb.label}>
            {index !== 0 && <Separator>{'>'}</Separator>}
            {crumb.path && !isLast ? (
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
