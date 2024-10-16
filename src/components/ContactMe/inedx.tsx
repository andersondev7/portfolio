import { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRight, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Title from "../Title/Title";
import { CardContact, Container, ContainerCard, ContainerForm } from "./styles";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

const trustedDomains = [
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "yahoo.com",
  "icloud.com",
  "protonmail.com",
  "live.com",
  "msn.com",
  "aol.com",
  "zoho.com",
  "gmx.com",
  "me.com",
];

const schema = yup.object().shape({
  user_name: yup.string().required("Nome é obrigatório."),
  user_email: yup
    .string()
    .required("Email é obrigatório.")
    .email("Email inválido.")
    .test("valid-domain", "Adicione um e-mail válido.", (value) => {
      if (!value) return true;
      const domain = value.split("@")[1];
      return trustedDomains.includes(domain);
    }),
  user_telefone: yup
    .string()
    .required("Telefone é obrigatório.")
    .matches(/^[0-9]*$/, "O telefone deve conter apenas números.")
    .min(10, "O telefone deve ter pelo menos 10 dígitos."),
  message: yup.string().required("Mensagem é obrigatória."),
});

const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      user_name: form.current?.user_name.value,
      user_email: form.current?.user_email.value,
      user_telefone: form.current?.user_telefone.value,
      message: form.current?.message.value,
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      setStatus("sending");

      await emailjs.sendForm(
        "service_gs2xfgh",
        "template_of88djf",
        form.current!,
        "tL8KzqqQJUszGeTr9"
      );

      form.current?.reset();
      setStatus("sent");
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        err.inner.forEach((error) => {
          if (error.path) validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      } else {
        console.error(err);
        setStatus("error");
      }
    }
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
              <label htmlFor="name">
                Nome
                {errors.user_name && <p>{errors.user_name}</p>}
              </label>
              <input type="text" id="name" name="user_name" />
            </div>

            <div>
              <label htmlFor="email">
                Email
                {errors.user_email && <p>{errors.user_email}</p>}
              </label>
              <input type="email" id="email" name="user_email" />
            </div>

            <div>
              <label htmlFor="telefone">
                Telefone
                {errors.user_telefone && <p>{errors.user_telefone}</p>}
              </label>
              <input type="tel" id="telefone" name="user_telefone" />
            </div>

            <div>
              <label htmlFor="message">
                Mensagem
                {errors.message && <p>{errors.message}</p>}
              </label>
              <textarea id="message" name="message" />
            </div>

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando..." : "Enviar"}
            </button>

            {status === "sent" && (
              <p style={{ color: "green" }}>Email enviado com sucesso!</p>
            )}
            {status === "error" && <p>Ocorreu um erro. Tente novamente.</p>}
          </form>
        </ContainerForm>
      </Container>
    </>
  );
};

export default ContactMe;
