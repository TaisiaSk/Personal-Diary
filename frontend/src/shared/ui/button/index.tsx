import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import './style.scss';

type Props = PropsWithChildren<{
  isInitialHide?: boolean;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<Props> = (props) => {
  const { isInitialHide, children, ...other } = props;

  return (
    <button className={'button' + (isInitialHide ? ' hidden' : '')} {...other}>
      {children}
    </button>
  );
};

export { Button };
