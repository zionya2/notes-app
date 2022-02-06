import { useTranslation } from 'react-i18next';
import { Input } from 'antd';
import classes from './SearchBar.module.scss';
import { ReactComponent as IconSearch } from '../../assets/svg/icon-search.svg';

export const SearchBar = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.inputWrapper}>
      <Input
        className={classes.input}
        size="small"
        placeholder={t('search_placeholder')}
        prefix={<IconSearch />}
        bordered
      />
    </div>
  );
};
