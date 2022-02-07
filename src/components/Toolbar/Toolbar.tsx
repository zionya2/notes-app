import { useTranslation } from 'react-i18next';
import { ReactComponent as IconNew } from '../../assets/svg/icon-note-new.svg';
import { ReactComponent as IconEdit } from '../../assets/svg/icon-note-edit.svg';
import { ReactComponent as IconDelete } from '../../assets/svg/icon-note-delete.svg';
import classes from './Toolbar.module.scss';
import { Button } from '../UI/Button/Button';

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
      <Button tooltipTitle={t('icon_note_new')} onClick={onAddNote} size="small" shape="round" icon={<IconNew />} />
      {activeId && (
      <>
        <Button tooltipTitle={t('icon_note_edit')} onClick={onEditNote} size="small" shape="round" icon={<IconEdit />} />
        <Button tooltipTitle={t('icon_note_del')} onClick={onDeleteNote} size="small" shape="round" icon={<IconDelete />} />
      </>
      )}
    </div>
  );
};
