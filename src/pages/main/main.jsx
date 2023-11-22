
import { useDispatch } from "react-redux";
import * as S from "./mainStyled";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setLogo } from "../../store/slices/logoSlices";
import { Header } from "../../Components/header/header";
import { useAuth } from "../../hooks/use-auth";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

export function useDataBase() {
  const dispatch = useDispatch();
  firebase
    .database()
    .ref("courses/ab1")
    .once("value")
    .then((snapshot) => {
      const data = snapshot.val();
      console.log(data);
      // dispatch(
      //   setCourses({
      //     description: data.description,
      //     directions: data.directions,
      //     fit: data.fit,
      //     id: data._id,
      //     img: data.img,
      //     name: data.name,
      //     workouts: data.workouts,
      //   })
      // );
    })
    .catch((error) => {
      console.error(error);
    });
}


const courses = [
  { id: "1", img: "/img/profCard1.png" },
  { id: "2", img: "/img/profCard2.png" },
  { id: "3", img: "/img/profCard3.png" },
  { id: "4", img: "/img/profCard4.png" },
  { id: "5", img: "/img/profCard5.png" },
];

export const Main = () => {

const dispatch = useDispatch();
useEffect(() => {
  dispatch(setLogo({
    logo: "white",
  }))
}, []);
useDataBase()
// const { data=[], isLoading, isError, isSuccess, error, refetch } = useGetLikeSongsQuery(Mass)


// function test() {
//   let ref = database.ref('/users/' + currentUser.uid).once('value').then(function(snapshot) {
//     let userData = snapshot.val();
//     console.log(userData.country);
//   }
// }



      return (
    <S.Container>
      <S.Content>
        <Header/>
        <S.HeaderContent>
          <S.SubTitle>
            <S.TitleText name="top">
              Онлайн-тренировки для занятий дома
            </S.TitleText>
            <S.TitleTextSpan>
              Начните заниматься спортом и улучшите качество жизни
            </S.TitleTextSpan>
          </S.SubTitle>
          <S.Sticker src="/img/sticker.png" alt="SaleSticker" />
        </S.HeaderContent>
        <S.Choice>
          {courses.map((i) => (
            <Link key={i.id} to={`course/${i.id}`}>
              <S.ProfCard src={i.img} alt="prof_card" />
            </Link>
          ))}
        </S.Choice>
        <S.Button>
          <a href="#top">
            <S.Up>Наверх ↑</S.Up>
          </a>
        </S.Button>
      </S.Content>
      </S.Container>
      )
    }