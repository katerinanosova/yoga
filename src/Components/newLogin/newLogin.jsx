import { useState } from "react";
import { changeLogin } from "../../firebase/changeEmail";
import * as S from "./styles";

export const NewLogin = ({ setEdit }) => {
  const [login, setLogin] = useState('')
  const handleClose = () => {
    // setEdit(false);
  };
  const handleSaveNewLogin = () => {
    changeLogin(login)
    console.log('object');
  }
  const newLogin = (event) => {
    setLogin(event.target.value);
  }
  return (
    <S.Wrapper>
      <S.ModalBlock>
        <S.Closer src="/img/close.png" alt="закрыть" onClick={handleClose} />
        <S.ModalFormLogin action="#">
          <S.ModalFormLoginImg src="/logo.png" alt="logo" />
          <S.Text>Новый логин:</S.Text>
          <S.ModalFormLoginInput>
            <S.ModalInput type="text" placeholder="Логин" onChange={newLogin} value={login}/>
          </S.ModalFormLoginInput>
          <S.ModalFormLoginButtons>
            <S.ModalButtonEnter onClick={handleSaveNewLogin}>Сохранить</S.ModalButtonEnter>
          </S.ModalFormLoginButtons>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.Wrapper>
  );
};
