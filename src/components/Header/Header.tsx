import React, { useState } from 'react';
import { Modal, Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { navConfig } from '../../constants';
import {
  addNewNote, deleteNote, SearchNotes, setActiveId,
} from '../../redux/notesReducer/actions';
import { activeIdSelector, searchStringSelector } from '../../redux/notesReducer/selectors';
import { Toolbar } from '../Toolbar/Toolbar';
import classes from './Header.module.scss';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const activeId = useSelector(activeIdSelector);
  const searchString = useSelector(searchStringSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(deleteNote(activeId));
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onChangeSearch = (value: string) => {
    dispatch(SearchNotes(value));
  };
  const onKeyPress = () => {
    dispatch(setActiveId({ id: null }));
    navigate(navConfig.search.path);
  };
  const addNote = () => {
    const newNote = {
      id: uuidv4(),
      title: t('default_title'),
      description: '',
      lastModified: new Date().toLocaleString(),
    };
    dispatch(addNewNote(newNote));
  };
  const editNote = () => {
    navigate(navConfig.edit.path);
  };
  const delNote = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      <Modal title={t('modal_title')} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>{t('modal_content')}</p>
      </Modal>
      <Row className={classes.header}>
        <Col span={16}>
          <Toolbar
            activeId={activeId}
            addNote={addNote}
            editNote={editNote}
            deleteNote={delNote}
          />
        </Col>
        <Col span={8} className={classes.search}>
          <SearchBar
            value={searchString}
            onChange={onChangeSearch}
            onKeyPress={onKeyPress}
          />
        </Col>
      </Row>
    </>
  );
};
