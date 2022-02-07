import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../UI/Input/Input';
import classes from './SearchBar.module.scss';
import { ReactComponent as IconSearch } from '../../assets/svg/icon-search.svg';

type SearchBarProps = {
  onChange:(value:string) => void;
  onKeyPress?: () => void;
  value: string;
};
export const SearchBar = ({ onChange, value, onKeyPress }:SearchBarProps) => {
  const { t } = useTranslation();
  const oChangeInput = (event:ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value.trim());
  };
  return (
    <div className={classes.inputWrapper}>
      <Input
        value={value}
        onPressEnter={onKeyPress}
        onChange={oChangeInput}
        size="small"
        placeholder={t('search_placeholder')}
        prefix={<IconSearch />}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  onKeyPress: null,
};
