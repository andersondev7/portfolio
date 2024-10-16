import { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRight, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Title from "../Title/Title";
import { CardContact, Container, ContainerCard, ContainerForm } from "./styles";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const infoCards = [
    {
      id: 1,
      icon: <FaWhatsapp size={24} />,
      label: "Whatsapp",
      value: "+55 (61) 98466-3902",
      link: "https://wa.me/5561984663902",
    },
    {
      id: 2,
      icon: <MdOutlineEmail size={24} />,
      label: "Email",
      value: "andersonaraujoc1@gmail.com",
      link: "mailto:andersonaraujoc1@gmail.com",
    },
    {
      id: 3,
      icon: <FaLinkedin size={24} />,
      label: "Linkedin",
      value: "Anderson Araujo",
      link: "https://linkedin.com/in/anderson-araujo",
    },
  ];

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_gs2xfgh", // Seu Service ID
        "template_of88djf", // Seu Template ID
        form.current!,
        "tL8KzqqQJUszGeTr9" // Substitua pela sua chave pública do EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("sent");
        },
        (error) => {
          console.error(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <>
      <Title titleEn="CONTACT" titlePt="Contato" />

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
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="user_name" required />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="user_email" required />
            </div>

            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                type="telefone"
                id="telefone"
                name="user_telefone"
                required
              />
            </div>

            <div>
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" required />
            </div>

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando..." : "Enviar"}
            </button>

            {status === "sent" && <p>Email enviado com sucesso!</p>}
            {status === "error" && <p>Ocorreu um erro. Tente novamente.</p>}
          </form>
        </ContainerForm>
      </Container>
    </>
  );
};

export default ContactMe;
