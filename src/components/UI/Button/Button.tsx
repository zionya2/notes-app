import { Button as AntdButton, Tooltip } from 'antd';
import classes from './Button.module.scss';

type ButtonProps = {
  onClick: () => void;
  icon?: React.ReactNode;
  shape?: 'circle' | 'round' | 'default';
  size?: 'small' | 'middle' | 'large';
  tooltipTitle?: string;
};

export const Button = ({ tooltipTitle, ...res }:ButtonProps) => (
  <div className={classes.wrapper}>
    <Tooltip title={tooltipTitle} color="#bebebe">
      <AntdButton
        className={classes.button}
        {...res}
      />
    </Tooltip>
  </div>
);

Button.defaultProps = {
  size: 'middle',
  shape: 'default',
  icon: null,
  tooltipTitle: '',
};
