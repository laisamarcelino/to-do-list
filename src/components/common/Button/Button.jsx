import styled from "styled-components";

const Button = ({ texto, variant, onClick }) => {
  return (
    <>
      {variant == "primary" && <PrimaryButton onClick={onClick}>{texto} </PrimaryButton>}
      {variant == "secondary" && <SecondaryButton onClick={onClick}>{texto}</SecondaryButton>}
      {variant == "third" && <ThirdButton onClick={onClick}>{texto}</ThirdButton>}
    </>
  );
};

export default Button;

const StyleButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 5%;
  font-family: "Montserrat", sans-serif;
  color: ${(props) => props.theme.white};
  background-color: transparent;
  width: 10%;
  height: 55px;
  text-align: center;
`;

const PrimaryButton = styled(StyleButton)`
  background: ${(props) => props.theme.jade};
`;
const SecondaryButton = styled(StyleButton)`
  background: ${(props) => props.theme.orange};
`;
const ThirdButton = styled(StyleButton)`
  background: ${(props) => props.theme.red};
`;
