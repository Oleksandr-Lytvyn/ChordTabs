import { Button, BtnsList } from './NavigationInst.styled';

export const NavigationInst = ({ i }) => {
  return (
    <>
      <BtnsList>
        <li>
          <Button
            type="button"
            onClick={() => {
              i('guit');
            }}
          >
            guitar
          </Button>
        </li>
        <li>
          <Button
            type="button"
            onClick={() => {
              i('ukul');
            }}
          >
            ukulele
          </Button>
        </li>
      </BtnsList>
    </>
  );
};
