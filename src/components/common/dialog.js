import React from 'react';
import './dialog.css';

function Dialog (props) {
  const {
    type,
    show,
    content,
    confirmBtnText = '确定',
    cancelBtnText = '取消',
    onConfirm = () => {},
    onCancel = () => {}
  } = props

  function Alert () {
    return (
      <div className='dialog dialog--alert'>
        <div className="dialog__body">
          <div>{content}</div>
        </div>
        <footer className="dialog__footer">
          <button className="dialog__footer__button" onClick={onConfirm}>{confirmBtnText}</button>
        </footer>
      </div>
    )
  }

  function Confirm () {
    return (
      <div className='dialog dialog--confirm'>
        <header className="dialog__header"></header>
        <div className="dialog__body">
          <div>{content}</div>
        </div>
        <footer className="dialog__footer">
          <button className="dialog__footer__button" onClick={onCancel}>{cancelBtnText}</button>
          <button className="dialog__footer__button" onClick={onConfirm}>{confirmBtnText}</button>
        </footer>
    </div>
    )
  }

  function DialogComponent () {
    if (!show) return '';
    let component = '';
    if (type === 'alert') component = <Alert />;
    if (type === 'confirm') component = <Confirm />;
    return (
    <div className="dialog-wrap">
      {component}
    </div>
    );
  }

  return (
    <DialogComponent />
  );
}

export default Dialog;