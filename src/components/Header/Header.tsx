import { Input, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import classes from './Header.module.scss';

const { Search } = Input;

export const Header = () => {
  const { t } = useTranslation();
  const onSearch = (value: string) => {
    console.log(value);
  };
  return (
    <Row className={classes.header}>
      <Col span={6} offset={18} className={classes.search}>
        <Search
          size="small"
          placeholder={t('search_placeholder')}
          onSearch={onSearch}
          style={{ width: 180 }}
        />
      </Col>
    </Row>
  );
};
