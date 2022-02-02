import { faSpinner, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import * as S from "./styled";

export function IndividualHQ() {
  const [loading, setLoading] = useState(false);
  const [comic, setComic] = useState<any>({});
  const { id } = useParams();
  const dispatch = useDispatch();

  const loadComic = async (id: string | undefined) => {
    setLoading(true);

    console.log(`- ${id}`);
    const c = await api.getComic(id);
    setComic(c);
    console.log(c);

    setLoading(false);
  };

  useEffect(() => {
    loadComic(id);
  }, []);

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: { comic },
    });
  };

  return (
    <S.Container>
      {loading && (
        <S.LoadingArea>
          <S.LoadingIcon>
            <FontAwesomeIcon icon={faSpinner} size="3x" className="spinner" />
          </S.LoadingIcon>
        </S.LoadingArea>
      )}

      {comic && (
        <>
          <S.LeftImgArea>
            <S.LeftImg
              src={
                comic
                  ? `${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`
                  : "https://i.pinimg.com/originals/24/92/00/249200c431fe811110761709b303fcaf.jpg"
              }
              alt=""
            />
          </S.LeftImgArea>

          <S.RightArea>
            <S.TitleComicArea>
              <S.TitleComic>{comic.title}</S.TitleComic>
            </S.TitleComicArea>

            <S.DescriptionArea>
              <S.DescriptionText>
                {comic?.textObjects?.length > 0
                  ? comic.textObjects[0].text
                  : "Sem descrição"}
              </S.DescriptionText>
            </S.DescriptionArea>

            <S.ButtonsArea>
              <S.ButtonAddToCart type="button" onClick={handleAddToCart}>
                <S.IconsQtdMinusArea>
                  <FontAwesomeIcon icon={faMinus} size="1x" />
                </S.IconsQtdMinusArea>

                <S.QtdText>Quantidade: 0</S.QtdText>

                <S.IconsQtdPlusArea>
                  <FontAwesomeIcon icon={faPlus} size="1x" />
                </S.IconsQtdPlusArea>
              </S.ButtonAddToCart>

              <S.ButtonAddToCart type="button" onClick={handleAddToCart}>
                Adicionar ao Carrinho
              </S.ButtonAddToCart>
            </S.ButtonsArea>
          </S.RightArea>
        </>
      )}
    </S.Container>
  );
}
