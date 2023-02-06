import { Button, BtnsList } from './NavigationInst.styled';

export const NavigationInst = ({ i }) => {
  return (
    <>
      <BtnsList>
        <li style={{ flexGrow: '1' }}>
          <Button
            type="button"
            onClick={() => {
              i('guit');
            }}
          >
            guitar
          </Button>
        </li>
        <li style={{ flexGrow: '1' }}>
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
