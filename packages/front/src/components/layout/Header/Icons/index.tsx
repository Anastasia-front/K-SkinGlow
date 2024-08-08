import { NavLink } from 'react-router-dom';

import { routes } from 'src/constants';

import { useState } from 'react';
import { Icon, Label, Modal } from 'src/components';
import { useModal } from 'src/hooks';
import { Input, List, ListItem, ModalHeading } from './styles';

export function Icons() {
  const { showModal, openModal, closeModal, triggerElementRef, modalHeadingRef } = useModal();
  const [inputText, setInputText] = useState('');

  const handleChange = (inputValue: string) => {
    if (inputValue.trim() === '') {
      setInputText(inputValue);
    }
  };
  return (
    <>
      <List>
        <ListItem>
          <button aria-haspopup="dialog" aria-expanded={showModal ? 'true' : 'false'} onClick={openModal}>
            <Icon name="search" />
          </button>
        </ListItem>
        <ListItem>
          <NavLink to={routes.favorites.path}>
            <Icon name="favorite" width={22} height={22} />
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={routes.cart.path}>
            <Icon name="bag" />
          </NavLink>
        </ListItem>
      </List>
      <Modal
        showModal={showModal}
        onClose={closeModal}
        triggerElementRef={triggerElementRef}
        modalHeadingRef={modalHeadingRef}
      >
        <ModalHeading ref={modalHeadingRef} id="accessible-modal-heading">
          Modal Search Input
        </ModalHeading>
        <Input onChange={() => handleChange} placeholder={'Search :'} value={inputText}>
          <Icon name="search" />
          <Label title={inputText} />
        </Input>
      </Modal>
    </>
  );
}
