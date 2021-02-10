import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>Typescript, React, NextJS e Styled Components</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor de frente para a tela com código"
    />
  </S.Wrapper>
)

export default Main
