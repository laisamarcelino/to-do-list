import styled from "styled-components";

const Button = ({ texto, variant, onClick }) => {
  return (
    <>
      {variant == "primary" && <PrimaryButton onClick={onClick}>{texto} </PrimaryButton>}
      {variant == "secondary" && <SecondaryButton onClick={onClick}>{texto}</SecondaryButton>}
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
  width: 15%;
  height: 55px;
`;

const PrimaryButton = styled(StyleButton)`
  background: ${(props) => props.theme.jade};
`;
const SecondaryButton = styled(StyleButton)`
  background: ${(props) => props.theme.orange};
`;
