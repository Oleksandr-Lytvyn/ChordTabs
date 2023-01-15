import tabs from '../../db.json';
import { KeyItem } from './NavigationKey.styled';
import { KeyList } from './NavigationKey.styled';

export const NavigationKey = ({ k }) => {
  const onClick = (event) => {
    k(event.target.outerText);
  };
  return (
    <>
      <KeyList>
        {tabs.keys.map((suffix) => {
          return (
            <KeyItem key={suffix} onClick={onClick}>
              {suffix}
            </KeyItem>
          );
        })}
      </KeyList>
    </>
  );
};
