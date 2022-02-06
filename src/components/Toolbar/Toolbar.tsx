import { Button, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import { ReactComponent as IconNew } from '../../assets/svg/icon-note-new.svg';
import { ReactComponent as IconEdit } from '../../assets/svg/icon-note-edit.svg';
import { ReactComponent as IconDelete } from '../../assets/svg/icon-note-delete.svg';
import classes from './Toolbar.module.scss';

type ToolbarProps = {
  addNote: () => void;
  editNote: () => void;
  deleteNote: () => void;
  activeId: string;
};

export const Toolbar = ({
  addNote, editNote, deleteNote, activeId,
}:ToolbarProps) => {
  const { t } = useTranslation();
  const onAddNote = () => {
    addNote();
  };
  const onEditNote = () => {
    editNote();
  };
  const onDeleteNote = () => {
    deleteNote();
  };
  return (
    <div className={classes.toolbarWrapper}>
      <Tooltip title={t('icon_note_new')} color="#bebebe">
        <Button onClick={onAddNote} className={classes.button} size="small" shape="round" icon={<IconNew />} />
      </Tooltip>
      {activeId && (
      <>
        <Tooltip title={t('icon_note_edit')} color="#bebebe">
          <Button onClick={onEditNote} className={classes.button} size="small" shape="round" icon={<IconEdit />} />
        </Tooltip>
        <Tooltip title={t('icon_note_del')} color="#bebebe">
          <Button onClick={onDeleteNote} className={classes.button} size="small" shape="round" icon={<IconDelete />} />
        </Tooltip>
      </>
      )}
    </div>
  );
};
