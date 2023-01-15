import tabs from '../../db.json';
import { ListSuffixes, ListItem } from './NavigationSuffix.styled';

export const NavigationSuffix = ({ s }) => {
  const onClick = (event) => {
    s(event.target.outerText);
  };
  return (
    <div>
      <ListSuffixes>
        {tabs.suffixes.map((suffix) => {
          return (
            <ListItem key={suffix} onClick={onClick}>
              {suffix}
            </ListItem>
          );
        })}
      </ListSuffixes>
    </div>
  );
};
