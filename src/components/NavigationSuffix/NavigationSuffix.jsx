import tabs from '../../db.json';
import { ListSuffixes, ListItem } from './NavigationSuffix.styled';

export const NavigationSuffix = ({ ss, k }) => {
  const onClick = (event) => {
    ss(event.target.outerText);
  };

  // console.log(tabs.chords.A);
  let allSuffix = tabs.suffixes;
  let activeSuffix = [];

  activeSuffix =
    tabs.chords[k] &&
    tabs.chords[k].map((chord) => {
      return chord.suffix;
    });

  const resultSuffixes = [];

  const createSuffixList = () => {
    for (const key of allSuffix) {
      if (activeSuffix === undefined) {
        return;
      } else if (activeSuffix.find((suf) => suf === key)) {
        resultSuffixes.push({ suffix: key, isActive: true });
      } else resultSuffixes.push({ suffix: key, isActive: false });
    }
  };

  createSuffixList();

  // for (let i = 0; i < allSuffix.length; i++) {
  //   if (allSuffix.find((option) => option[i] === activeSuffix[i])) {
  //     resultSuffixes.push({
  //       suffix: allSuffix[i],
  //       isActive: false,
  //     });
  //   } else {
  //     resultSuffixes.push({
  //       suffix: allSuffix[i],
  //       isActive: true,
  //     });
  //   }
  // }

  return (
    <div>
      <ListSuffixes>
        {resultSuffixes.map((ch) => {
          // console.log(suffix);
          return (
            <ListItem key={ch.suffix} onClick={onClick} active={ch.isActive}>
              {ch.suffix}
            </ListItem>
          );
        })}
      </ListSuffixes>
    </div>
  );
};
