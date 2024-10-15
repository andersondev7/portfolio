import { MdOutlineEmail } from "react-icons/md";
import { CardContact, Container, ContainerCard, ContainerForm } from "./styles";
import { FaArrowRight, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Title from "../Title/Title";

const ContactMe = () => {
  const infoCards = [
    {
      id: 1,
      icon: <FaWhatsapp size={24} />,
      label: "Whatsapp",
      value: "+55 (61) 98466-3902",
      link: "/",
    },
    {
      id: 2,
      icon: <MdOutlineEmail size={24} />,
      label: "Email",
      value: "andersonaraujoc1@gmail.com",
      link: "/",
    },
    {
      id: 3,
      icon: <FaLinkedin size={24} />,
      label: "Linkedin",
      value: "Anderson Araujo",
      link: "/",
    },
  ];

  return (
    <>
      <Title titleEn="Contato" titlePt="Contato" />

      <Container>
        <ContainerCard>
          {infoCards.map((item) => (
            <CardContact key={item.id}>
              <span>{item.icon}</span>
              <span>{item.label}</span>
              <span>{item.value}</span>

              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Enviar mensagem <FaArrowRight size={14} />
              </a>
            </CardContact>
          ))}
        </ContainerCard>

        <ContainerForm>
          <h1>Aqui vai um formulario!</h1>
        </ContainerForm>
      </Container>
    </>
  );
};

export default ContactMe;
